#!/usr/bin/env python3
"""
Gmail 自動整理工具
使用 Gmail API 自動分類、標籤、歸檔郵件

使用前設定：
1. 到 Google Cloud Console (https://console.cloud.google.com/) 建立專案
2. 啟用 Gmail API
3. 建立 OAuth 2.0 憑證（桌面應用程式類型）
4. 下載憑證 JSON 檔案，命名為 credentials.json 放在此目錄
5. 複製 config.example.json 為 config.json 並自訂規則
6. 執行: pip install -r requirements.txt
7. 執行: python gmail_organizer.py
"""

import argparse
import json
import os
import sys
from datetime import datetime, timedelta
from collections import defaultdict
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/gmail.modify"]
SCRIPT_DIR = Path(__file__).parent
TOKEN_PATH = SCRIPT_DIR / "token.json"
CREDENTIALS_PATH = SCRIPT_DIR / "credentials.json"
CONFIG_PATH = SCRIPT_DIR / "config.json"


def authenticate():
    creds = None
    if TOKEN_PATH.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_PATH), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDENTIALS_PATH.exists():
                print("錯誤：找不到 credentials.json")
                print("請到 Google Cloud Console 下載 OAuth 2.0 憑證")
                print("https://console.cloud.google.com/apis/credentials")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(
                str(CREDENTIALS_PATH), SCOPES
            )
            creds = flow.run_local_server(port=0)

        TOKEN_PATH.write_text(creds.to_json())

    return build("gmail", "v1", credentials=creds)


def load_config():
    if not CONFIG_PATH.exists():
        print(f"錯誤：找不到 {CONFIG_PATH}")
        print("請複製 config.example.json 為 config.json 並自訂規則")
        sys.exit(1)
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


def get_label_id(service, label_name, create_if_missing=True):
    results = service.users().labels().list(userId="me").execute()
    labels = results.get("labels", [])
    for label in labels:
        if label["name"] == label_name:
            return label["id"]

    if create_if_missing:
        body = {
            "name": label_name,
            "labelListVisibility": "labelShow",
            "messageListVisibility": "show",
        }
        created = service.users().labels().create(userId="me", body=body).execute()
        print(f"  已建立標籤: {label_name}")
        return created["id"]

    return None


def search_messages(service, query, max_results=500):
    messages = []
    result = (
        service.users()
        .messages()
        .list(userId="me", q=query, maxResults=min(max_results, 500))
        .execute()
    )
    messages.extend(result.get("messages", []))

    while "nextPageToken" in result and len(messages) < max_results:
        result = (
            service.users()
            .messages()
            .list(
                userId="me",
                q=query,
                pageToken=result["nextPageToken"],
                maxResults=min(max_results - len(messages), 500),
            )
            .execute()
        )
        messages.extend(result.get("messages", []))

    return messages[:max_results]


def get_message_headers(service, msg_id, headers_needed=None):
    if headers_needed is None:
        headers_needed = ["From", "Subject", "Date"]
    msg = (
        service.users()
        .messages()
        .get(userId="me", id=msg_id, format="metadata", metadataHeaders=headers_needed)
        .execute()
    )
    result = {"id": msg_id, "labelIds": msg.get("labelIds", [])}
    for header in msg.get("payload", {}).get("headers", []):
        result[header["name"].lower()] = header["value"]
    return result


def batch_modify(service, msg_ids, add_labels=None, remove_labels=None):
    if not msg_ids:
        return
    add_labels = add_labels or []
    remove_labels = remove_labels or []

    for i in range(0, len(msg_ids), 1000):
        batch = msg_ids[i : i + 1000]
        body = {
            "ids": batch,
            "addLabelIds": add_labels,
            "removeLabelIds": remove_labels,
        }
        service.users().messages().batchModify(userId="me", body=body).execute()


def build_query_from_conditions(conditions):
    parts = []

    if "from" in conditions:
        from_parts = [f"from:{addr}" for addr in conditions["from"]]
        parts.append("(" + " OR ".join(from_parts) + ")")

    if "subject_contains" in conditions:
        subj_parts = [f"subject:{kw}" for kw in conditions["subject_contains"]]
        parts.append("(" + " OR ".join(subj_parts) + ")")

    if "older_than_days" in conditions:
        date = datetime.now() - timedelta(days=conditions["older_than_days"])
        parts.append(f"before:{date.strftime('%Y/%m/%d')}")

    if conditions.get("is_read"):
        parts.append("is:read")

    if conditions.get("is_unread"):
        parts.append("is:unread")

    if conditions.get("in_inbox", True):
        parts.append("in:inbox")

    return " ".join(parts)


# ── 指令功能 ──────────────────────────────────────────


def cmd_stats(service, _config, args):
    """顯示信箱統計資訊"""
    print("📊 信箱統計資訊")
    print("=" * 50)

    profile = service.users().getProfile(userId="me").execute()
    print(f"帳號: {profile['emailAddress']}")
    print(f"總郵件數: {profile['messagesTotal']:,}")
    print(f"總討論串數: {profile['threadsTotal']:,}")
    print()

    categories = {
        "收件匣": "in:inbox",
        "未讀": "is:unread",
        "星號": "is:starred",
        "促銷": "category:promotions",
        "社群": "category:social",
        "最新動態": "category:updates",
        "論壇": "category:forums",
        "垃圾郵件": "in:spam",
        "垃圾桶": "in:trash",
    }

    for name, query in categories.items():
        try:
            result = (
                service.users()
                .messages()
                .list(userId="me", q=query, maxResults=1)
                .execute()
            )
            count = result.get("resultSizeEstimate", 0)
            print(f"  {name}: ~{count:,} 封")
        except Exception:
            print(f"  {name}: 無法取得")

    if args.detailed:
        print("\n📈 寄件者排行（前 20）")
        print("-" * 50)
        msgs = search_messages(service, "in:inbox", max_results=200)
        sender_count = defaultdict(int)
        for msg in msgs:
            headers = get_message_headers(service, msg["id"], ["From"])
            sender = headers.get("from", "unknown")
            sender_count[sender] += 1

        for sender, count in sorted(
            sender_count.items(), key=lambda x: x[1], reverse=True
        )[:20]:
            print(f"  {count:3d} 封 | {sender}")


def cmd_organize(service, config, args):
    """依照規則整理郵件"""
    rules = config.get("rules", [])
    if not rules:
        print("沒有設定任何規則，請編輯 config.json")
        return

    print(f"🗂️  開始整理郵件（共 {len(rules)} 條規則）")
    print("=" * 50)

    total_affected = 0

    for rule in rules:
        name = rule.get("name", "未命名規則")
        action = rule.get("action", "label")
        conditions = rule.get("conditions", {})
        query = build_query_from_conditions(conditions)

        print(f"\n📌 規則: {name}")
        print(f"   查詢: {query}")

        messages = search_messages(service, query, max_results=args.limit)
        if not messages:
            print("   結果: 沒有符合的郵件")
            continue

        msg_ids = [m["id"] for m in messages]
        print(f"   找到: {len(msg_ids)} 封郵件")

        if args.dry_run:
            print("   [模擬模式] 跳過實際操作")
            total_affected += len(msg_ids)
            continue

        if action in ("label", "label_and_archive"):
            label_name = rule.get("label")
            if label_name:
                label_id = get_label_id(service, label_name)
                add = [label_id]
                remove = ["INBOX"] if action == "label_and_archive" else []
                batch_modify(service, msg_ids, add_labels=add, remove_labels=remove)
                print(f"   已套用標籤: {label_name}")
                if action == "label_and_archive":
                    print(f"   已歸檔: {len(msg_ids)} 封")

        elif action == "archive":
            batch_modify(service, msg_ids, remove_labels=["INBOX"])
            print(f"   已歸檔: {len(msg_ids)} 封")

        elif action == "trash":
            for mid in msg_ids:
                service.users().messages().trash(userId="me", id=mid).execute()
            print(f"   已移至垃圾桶: {len(msg_ids)} 封")

        total_affected += len(msg_ids)

    print(f"\n✅ 整理完成！共處理 {total_affected} 封郵件")


def cmd_cleanup(service, config, args):
    """清理舊的促銷和社群郵件"""
    cleanup = config.get("cleanup", {})
    print("🧹 開始清理舊郵件")
    print("=" * 50)

    total = 0

    promo_days = cleanup.get("archive_read_promotions_older_than_days", 30)
    promo_date = datetime.now() - timedelta(days=promo_days)
    query = f"category:promotions is:read before:{promo_date.strftime('%Y/%m/%d')} in:inbox"
    print(f"\n清理已讀促銷郵件（{promo_days} 天前）...")
    msgs = search_messages(service, query, max_results=args.limit)
    if msgs:
        msg_ids = [m["id"] for m in msgs]
        print(f"  找到 {len(msg_ids)} 封")
        if not args.dry_run:
            batch_modify(service, msg_ids, remove_labels=["INBOX"])
            print(f"  已歸檔 {len(msg_ids)} 封")
        total += len(msg_ids)
    else:
        print("  沒有需要清理的郵件")

    social_days = cleanup.get("archive_read_social_older_than_days", 60)
    social_date = datetime.now() - timedelta(days=social_days)
    query = f"category:social is:read before:{social_date.strftime('%Y/%m/%d')} in:inbox"
    print(f"\n清理已讀社群郵件（{social_days} 天前）...")
    msgs = search_messages(service, query, max_results=args.limit)
    if msgs:
        msg_ids = [m["id"] for m in msgs]
        print(f"  找到 {len(msg_ids)} 封")
        if not args.dry_run:
            batch_modify(service, msg_ids, remove_labels=["INBOX"])
            print(f"  已歸檔 {len(msg_ids)} 封")
        total += len(msg_ids)
    else:
        print("  沒有需要清理的郵件")

    prefix = "[模擬模式] " if args.dry_run else ""
    print(f"\n✅ {prefix}清理完成！共處理 {total} 封郵件")


def cmd_unsubscribe_report(service, _config, args):
    """找出最常寄信的寄件者，協助取消訂閱"""
    print("📧 電子報 / 自動寄件分析")
    print("=" * 50)

    query = "in:inbox (from:noreply OR from:no-reply OR from:newsletter OR from:updates OR from:notifications OR from:info@)"
    msgs = search_messages(service, query, max_results=args.limit)

    if not msgs:
        print("沒有找到自動寄送的郵件")
        return

    sender_count = defaultdict(int)
    for msg in msgs:
        headers = get_message_headers(service, msg["id"], ["From"])
        sender = headers.get("from", "unknown")
        sender_count[sender] += 1

    print(f"\n以下寄件者在收件匣中有最多自動郵件（共掃描 {len(msgs)} 封）:\n")
    for i, (sender, count) in enumerate(
        sorted(sender_count.items(), key=lambda x: x[1], reverse=True)[:30], 1
    ):
        print(f"  {i:2d}. [{count:3d} 封] {sender}")

    print("\n💡 建議：到 Gmail 搜尋這些寄件者，點開郵件後找「取消訂閱」連結")


def cmd_list_labels(service, _config, _args):
    """列出所有標籤"""
    print("🏷️  所有標籤")
    print("=" * 50)
    results = service.users().labels().list(userId="me").execute()
    labels = results.get("labels", [])

    system_labels = []
    user_labels = []
    for label in labels:
        if label["type"] == "system":
            system_labels.append(label)
        else:
            user_labels.append(label)

    print("\n系統標籤:")
    for label in sorted(system_labels, key=lambda x: x["name"]):
        print(f"  {label['name']}")

    print(f"\n自訂標籤 ({len(user_labels)}):")
    for label in sorted(user_labels, key=lambda x: x["name"]):
        print(f"  {label['name']} (id: {label['id']})")


def main():
    parser = argparse.ArgumentParser(
        description="Gmail 自動整理工具",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
範例用法:
  python gmail_organizer.py stats              # 查看信箱統計
  python gmail_organizer.py stats --detailed   # 詳細統計含寄件者排行
  python gmail_organizer.py organize --dry-run # 模擬整理（不實際執行）
  python gmail_organizer.py organize           # 依規則整理郵件
  python gmail_organizer.py cleanup            # 清理舊促銷/社群郵件
  python gmail_organizer.py unsubscribe        # 分析自動寄件者
  python gmail_organizer.py labels             # 列出所有標籤
        """,
    )

    subparsers = parser.add_subparsers(dest="command", help="可用指令")

    stats_parser = subparsers.add_parser("stats", help="顯示信箱統計")
    stats_parser.add_argument("--detailed", action="store_true", help="顯示詳細統計")

    organize_parser = subparsers.add_parser("organize", help="依規則整理郵件")
    organize_parser.add_argument(
        "--dry-run", action="store_true", help="模擬模式，不實際修改"
    )
    organize_parser.add_argument(
        "--limit", type=int, default=500, help="每條規則最多處理幾封（預設 500）"
    )

    cleanup_parser = subparsers.add_parser("cleanup", help="清理舊郵件")
    cleanup_parser.add_argument(
        "--dry-run", action="store_true", help="模擬模式，不實際修改"
    )
    cleanup_parser.add_argument(
        "--limit", type=int, default=500, help="每類最多處理幾封（預設 500）"
    )

    unsub_parser = subparsers.add_parser("unsubscribe", help="分析自動寄件者")
    unsub_parser.add_argument(
        "--limit", type=int, default=300, help="掃描郵件數（預設 300）"
    )

    subparsers.add_parser("labels", help="列出所有標籤")

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(0)

    print("🔐 正在連接 Gmail...")
    service = authenticate()
    config = load_config() if args.command in ("organize", "cleanup") else {}

    commands = {
        "stats": cmd_stats,
        "organize": cmd_organize,
        "cleanup": cmd_cleanup,
        "unsubscribe": cmd_unsubscribe_report,
        "labels": cmd_list_labels,
    }

    commands[args.command](service, config, args)


if __name__ == "__main__":
    main()
