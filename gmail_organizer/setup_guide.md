# Gmail 自動整理工具 - 設定指南

## 前置需求

- Python 3.8+
- Google 帳號

## 設定步驟

### 1. 建立 Google Cloud 專案並啟用 Gmail API

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 點擊「建立專案」，輸入專案名稱（例如：Gmail Organizer）
3. 在左側選單選擇「API 和服務」→「程式庫」
4. 搜尋「Gmail API」並點擊「啟用」

### 2. 建立 OAuth 2.0 憑證

1. 在左側選單選擇「API 和服務」→「憑證」
2. 點擊「建立憑證」→「OAuth 用戶端 ID」
3. 如果是第一次，需要先設定「OAuth 同意畫面」：
   - 選擇「外部」使用者類型
   - 填寫應用程式名稱
   - 在「範圍」步驟新增 `https://www.googleapis.com/auth/gmail.modify`
   - 在「測試使用者」步驟加入你的 Gmail 地址
4. 回到「憑證」頁面，建立 OAuth 用戶端 ID：
   - 應用程式類型選「桌面應用程式」
   - 下載 JSON 檔案
5. 將下載的檔案重新命名為 `credentials.json`，放在 `gmail_organizer/` 目錄下

### 3. 安裝套件

```bash
cd gmail_organizer
pip install -r requirements.txt
```

### 4. 設定整理規則

```bash
cp config.example.json config.json
```

編輯 `config.json`，自訂你的整理規則。

### 5. 第一次執行

```bash
# 先用統計功能測試連線
python gmail_organizer.py stats

# 用模擬模式測試規則（不會實際修改郵件）
python gmail_organizer.py organize --dry-run

# 確認沒問題後再正式執行
python gmail_organizer.py organize
```

## 可用指令

| 指令 | 說明 |
|------|------|
| `stats` | 顯示信箱統計（加 `--detailed` 看寄件者排行） |
| `organize` | 依 config.json 規則整理郵件 |
| `cleanup` | 清理舊的促銷和社群郵件 |
| `unsubscribe` | 分析最常寄信的自動寄件者 |
| `labels` | 列出所有標籤 |

## 常用參數

- `--dry-run`：模擬模式，只顯示會做什麼但不實際執行
- `--limit N`：限制每條規則最多處理 N 封郵件

## 自訂規則說明

在 `config.json` 的 `rules` 陣列中，每條規則包含：

```json
{
  "name": "規則名稱",
  "label": "要套用的標籤名稱",
  "conditions": {
    "from": ["寄件者包含的關鍵字"],
    "subject_contains": ["主旨包含的關鍵字"],
    "older_than_days": 30,
    "is_read": true
  },
  "action": "label | label_and_archive | archive | trash"
}
```

### 可用動作

- `label`：套用標籤
- `label_and_archive`：套用標籤並從收件匣移除
- `archive`：歸檔（從收件匣移除）
- `trash`：移至垃圾桶

## 安全注意事項

- `credentials.json` 和 `token.json` 包含敏感資訊，已加入 `.gitignore`
- 首次執行會開啟瀏覽器進行 Google 授權
- 建議先用 `--dry-run` 確認規則正確再正式執行
