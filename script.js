const menuData = {

  '50lan': {
    name: '50嵐',
    desc: '台灣在地連鎖茶飲',
    logo: 'images/logo-50lan.png',
    categories: [
      {
        title: '🧋 珍珠系列',
        items: [
          { name: '珍珠奶茶', note: '經典必點', price: '$50' },
          { name: '珍珠紅茶拿鐵', note: '順口香醇', price: '$55' },
          { name: '珍珠綠茶拿鐵', note: '清爽回甘', price: '$55' },
        ]
      },
      {
        title: '🍵 茶飲系列',
        items: [
          { name: '四季春青茶', note: '台灣本土茶葉', price: '$35' },
          { name: '阿薩姆紅茶', note: '濃郁茶香', price: '$35' },
          { name: '茉莉綠茶', note: '清新花香', price: '$35' },
          { name: '烏龍茶', note: '香氣十足', price: '$40' },
        ]
      },
      {
        title: '🥛 奶茶系列',
        items: [
          { name: '奶茶', note: '奶香濃郁', price: '$45' },
          { name: '抹茶拿鐵', note: '日式風味', price: '$55' },
          { name: '冬瓜拿鐵', note: '台灣傳統風味', price: '$50' },
        ]
      },
      {
        title: '🍋 果茶系列',
        items: [
          { name: '檸檬綠茶', note: '清爽酸甜', price: '$45' },
          { name: '百香果綠茶', note: '熱帶風情', price: '$50' },
          { name: '葡萄柚紅茶', note: '限量供應', price: '$55' },
        ]
      }
    ]
  },

  'coco': {
    name: 'CoCo 都可',
    desc: '多元口味飲料品牌',
    logo: 'images/logo-coco.png',
    categories: [
      {
        title: '☕ 職人金獎咖啡',
        items: [
          { name: '職人美式', note: '', price: '$50' },
          { name: '職人拿鐵', note: '', price: '$65' },
          { name: '珍珠/粉角職人拿鐵', note: '', price: '$75' },
          { name: '珍珠黑糖拿鐵', note: '', price: '$80' },
          { name: '紅柚香檸美式', note: '', price: '$80' },
          { name: '西西里手搖檸檬美式', note: '', price: '$80' },
          { name: '生椰職人拿鐵', note: '', price: '$75' },
          { name: '粉角生椰拿鐵', note: '', price: '$85' },
        ]
      },
      {
        title: '🫧 經典果粒茶',
        items: [
          { name: '百香雙響炮', note: 'TOP 1 人氣推薦', price: '$70' },
          { name: '葡萄柚果粒茶', note: '', price: '$70' },
        ]
      },
      {
        title: '🍵 經典純茶',
        items: [
          { name: '茉莉綠茶', note: '', price: 'M$30 / L$35' },
          { name: '四季春青茶', note: '', price: 'M$30 / L$35' },
          { name: '21歲輕烏龍', note: '', price: 'M$30 / L$35' },
          { name: '高山紅茶', note: '', price: 'M$30 / L$35' },
          { name: '日安大麥', note: '無咖啡因', price: 'M$30 / L$35' },
          { name: '仙草蜜', note: '無咖啡因', price: 'M$35 / L$40' },
          { name: '四季椰椰青', note: '', price: 'M$45 / L$50' },
        ]
      },
      {
        title: '🍋 激推水果茶',
        items: [
          { name: '21歲輕椰烏龍', note: '', price: 'M$45 / L$55' },
          { name: '檸檬奇遇桔', note: '茉香茶凍', price: '$60' },
          { name: '金桔檸檬', note: '無咖啡因', price: 'M$60 / L$70' },
          { name: '粉角檸檬冬瓜', note: '無咖啡因', price: 'M$55 / L$65' },
          { name: '百香/芒果綠茶', note: '', price: 'M$45 / L$55' },
          { name: '綠茶養樂多', note: '', price: '$70' },
          { name: '蕎麥冬瓜露', note: '', price: 'M$45 / L$50' },
        ]
      },
      {
        title: '🥛 就愛喝奶茶',
        items: [
          { name: '奶茶三兄弟', note: 'TOP 人氣推薦', price: '$70' },
          { name: '阿薩姆奶茶', note: '', price: 'M$40 / L$50' },
          { name: '珍珠/粉角奶茶', note: '', price: 'M$50 / L$60' },
          { name: '西谷米奶茶', note: '', price: 'M$50 / L$60' },
          { name: '茉香凍奶綠', note: '', price: 'M$50 / L$60' },
          { name: '手作仙草凍乳', note: '無咖啡因', price: '$70' },
          { name: '英式鮮奶茶', note: '', price: 'M$55 / L$70' },
          { name: '珍珠/粉角鮮奶茶', note: 'TOP 人氣推薦', price: 'M$65 / L$75' },
        ]
      }
    ]
  },

  'qingshan': {
    name: '青山',
    desc: '青茶專業製作',
    logo: 'images/logo-qingshan.png',
    categories: [
      {
        title: '🌿 精選青茶',
        items: [
          { name: '春青', note: '香氣：花香｜口感：輕｜海拔 800–1200M', price: 'M$30 / L$35' },
          { name: '夏青', note: '香氣：木質香｜口感：重｜海拔 800–1200M', price: 'M$30 / L$35' },
          { name: '秋青', note: '香氣：奶香｜口感：中｜海拔 1200–1500M', price: 'M$40 / L$45' },
          { name: '冬青 ★推薦', note: '香氣：清香｜口感：輕｜海拔 1300–1600M', price: 'M$55 / L$60' },
        ]
      },
      {
        title: '🌸 無咖啡因',
        items: [
          { name: '東方菊花茶', note: '', price: 'M$45 / L$55' },
          { name: '西穀蕎麥茶', note: '', price: 'M$30 / L$40' },
          { name: '南非國寶茶', note: '', price: 'M$40 / L$50' },
          { name: '北風桂花玄米茶', note: '', price: 'M$35 / L$45' },
        ]
      },
      {
        title: '🍵 茶',
        items: [
          { name: '綠水', note: '', price: 'M$25 / L$30' },
          { name: '天蟬紅茶', note: '', price: 'M$35 / L$40' },
        ]
      },
      {
        title: '❄️ 調（冬露最低糖量為半糖）',
        items: [
          { name: '青山綠水', note: '', price: 'M$35 / L$40' },
          { name: '春青菊花', note: '', price: 'M$45 / L$55' },
          { name: '蕎麥冬露', note: '', price: 'L$50' },
          { name: '春青冬露', note: '', price: 'L$50' },
          { name: '菊花冬露', note: '', price: 'L$55' },
          { name: '多多綠水', note: '', price: 'L$55' },
        ]
      },
      {
        title: '🧀 蓋（法國 Elle&Vire 鮮奶油，僅供少冰）',
        items: [
          { name: '蕎麥奶蓋綠水', note: '', price: 'M$45 / L$50' },
          { name: '蕎麥奶蓋玄米茶', note: '', price: 'M$55 / L$65' },
          { name: '海鹽奶蓋春青', note: '', price: 'M$50 / L$55' },
          { name: '海鹽奶蓋紅茶', note: '', price: 'M$55 / L$60' },
          { name: '海鹽奶蓋輕蘋香茶', note: '', price: 'M$80' },
        ]
      },
      {
        title: '🥛 奶（那堤可升級燕麥奶 M+10 / L+15）',
        items: [
          { name: '山峰奶茶', note: '', price: 'M$45 / L$50' },
          { name: '夏夏那堤', note: '', price: 'M$50 / L$60' },
          { name: '蕎麥那堤', note: '', price: 'M$50 / L$65' },
          { name: '天蟬那堤', note: '', price: 'M$55 / L$65' },
        ]
      },
      {
        title: '🧋 料（加料飲品）',
        items: [
          { name: '菜燕春青', note: '', price: 'M$40 / L$45' },
          { name: '菜燕奶茶', note: '', price: 'M$55 / L$60' },
          { name: '杏仁凍春青', note: '', price: 'M$40 / L$45' },
          { name: '青茶婚貴奶茶', note: '', price: 'M$55 / L$60' },
          { name: '琥珀珍珠奶茶', note: '', price: 'M$55 / L$60' },
          { name: '蕎麥珍珠奶茶', note: '', price: 'M$60 / L$65' },
          { name: '青茶凍天蟬那堤', note: '', price: 'M$65 / L$75' },
          { name: '琥珀珍珠天蟬那堤', note: '', price: 'M$65 / L$75' },
          { name: '蕎麥珍珠夏夏那堤', note: '', price: 'M$65 / L$75' },
        ]
      },
      {
        title: '🍊 果（不提供無糖）',
        items: [
          { name: '白甘蔗春青', note: '', price: 'M$55 / L$60' },
          { name: '香檸綠水', note: '', price: 'M$55 / L$60' },
          { name: '柳丁綠水', note: '', price: 'M$65 / L$70' },
          { name: '紅柚綠水', note: '', price: 'M$65 / L$70' },
          { name: '橘子春青', note: '', price: 'M$65 / L$70' },
          { name: '荔枝春青', note: '含青茶凍', price: 'M$70 / L$75' },
          { name: '水梨春青', note: '', price: 'M$70 / L$75' },
          { name: '輕蘋香茶', note: '', price: 'M$75 / L$80' },
        ]
      },
      {
        title: '➕ 加料',
        items: [
          { name: '琥珀珍珠', note: '', price: '+$10' },
          { name: '蕎麥珍珠', note: '', price: '+$15' },
          { name: '海鹽奶蓋', note: '', price: '+$20' },
          { name: '蕎麥奶蓋', note: '', price: '+$20' },
          { name: '菜燕 / 青茶茶凍 / 青茶婚貴 / 杏仁凍', note: '', price: '+$10' },
        ]
      }
    ]
  },

  'milkshop': {
    name: 'Milkshop 迷客夏',
    desc: '新鮮牧場直送，純粹鮮乳風味',
    logo: 'images/logo-milkshop.png',
    categories: [
      {
        title: '🐄 菜單更新中',
        items: [
          { name: '敬請期待正式菜單', note: '資料補充中', price: '-' },
        ]
      }
    ]
  },

  'macu': {
    name: 'MACU',
    desc: '果粒茶創始品牌',
    logo: 'images/logo-macu.png',
    categories: [
      {
        title: '🍓 飲中甜品（季節限定）',
        items: [
          { name: '楊枝甘露 2.0', note: '', price: 'L $90' },
          { name: '多多綠茶', note: '', price: 'L $55 / 瓶 $85' },
          { name: '貴氣芒果果粒甘蔗', note: '', price: 'L $90' },
          { name: '芒果芒果甘蔗', note: '', price: 'L $90' },
          { name: '番茄梅蜜浪漫', note: '', price: 'L $75 / 瓶 $105' },
          { name: '草莓梅蜜波波', note: '', price: 'L $85 / 瓶 $115' },
          { name: '芝芝苦梅粒粒', note: '', price: 'L $95' },
          { name: '芝芝葡萄粒粒', note: '', price: 'L $95' },
          { name: '葡萄果粒波波', note: '', price: 'M $80' },
          { name: '芋泥波波奶 2.0', note: '', price: 'M $70' },
          { name: '濃厚芋泥鮮奶', note: '', price: 'M $70' },
          { name: '酪梨草莓果粒', note: '', price: 'L $95' },
          { name: '草莓果粒波波', note: '', price: 'L $95' },
        ]
      },
      {
        title: '🍹 經典特調',
        items: [
          { name: '梅子冰茶', note: '', price: 'L $45 / 瓶 $60' },
          { name: '梅子楊梅', note: '', price: 'L $90 / 瓶 $105' },
          { name: '多多綠茶', note: '', price: 'L $55 / 瓶 $85' },
        ]
      },
      {
        title: '🍊 鮮果茶飲',
        items: [
          { name: '粉橙橙香紅茶', note: '', price: 'L $85 / 瓶 $110' },
          { name: '橙香紅茶', note: '', price: 'L $75 / 瓶 $100' },
          { name: '紅柚香紅茶', note: '', price: 'L $75 / 瓶 $100' },
          { name: '百香雙Q果', note: '', price: 'L $65 / 瓶 $95' },
          { name: '百香綠茶', note: '', price: 'L $65 / 瓶 $95' },
          { name: '百香多多', note: '', price: 'L $70' },
          { name: '橘子檸檬', note: '', price: 'L $70 / 瓶 $95' },
          { name: '冰草檸檬', note: '', price: '$55' },
          { name: '蜂蜜檸檬', note: '', price: 'L $65' },
          { name: '柚香包菓', note: '', price: 'L $70 / 瓶 $95' },
        ]
      },
      {
        title: '🍇 果粒茶系列',
        items: [
          { name: '香橙果粒茶', note: '', price: 'L $85 / 瓶 $110' },
          { name: '柳橙果粒茶', note: '', price: 'L $80 / 瓶 $105' },
          { name: '葡萄柚果粒茶', note: '', price: 'L $80 / 瓶 $105' },
          { name: '葡萄柚果粒蜂蜜', note: '', price: 'L $80 / 瓶 $105' },
          { name: '柳橙果粒蜂蜜', note: '', price: 'L $80' },
          { name: '橙橙芒果粒茶（季）', note: '季節限定', price: 'L $85' },
        ]
      },
      {
        title: '🍵 原味茶',
        items: [
          { name: '粉橙金蜜', note: '', price: 'L $50 / 瓶 $65' },
          { name: '紅寶烏島', note: '', price: 'L $45 / 瓶 $60' },
          { name: '高山金蜜茶', note: '', price: 'L $40 / 瓶 $55' },
          { name: '錦蘭紅茶', note: '', price: 'L $40 / 瓶 $55' },
          { name: '蜜桃紅茶', note: '', price: 'L $40 / 瓶 $55' },
          { name: '紅寶雙Q', note: '', price: 'L $55 / 瓶 $70' },
          { name: '金蜜雙Q', note: '', price: 'L $50 / 瓶 $65' },
        ]
      },
      {
        title: '🥛 濃醇系列',
        items: [
          { name: '蜜桃奶茶', note: '', price: 'L $65 / 瓶 $95' },
          { name: '錦蘭奶茶', note: '', price: 'L $55 / 瓶 $85' },
          { name: '波霸奶茶', note: '', price: 'L $55 / 瓶 $85' },
          { name: '仙草凍奶茶', note: '', price: 'L $55 / 瓶 $85' },
          { name: '玫瑰奶茶', note: '', price: 'L $65 / 瓶 $95' },
          { name: '阿草田', note: '', price: 'L $60 / 瓶 $90' },
        ]
      },
      {
        title: '🧀 芝芝系列',
        items: [
          { name: '芝芝金蜜/錦蘭紅茶', note: '冷/熱', price: '$55' },
          { name: '芝芝金蜜雙Q', note: '', price: '$65' },
          { name: '芝芝蜜桃紅茶', note: '', price: '$65' },
          { name: '芝芝翡翠綠茶', note: '', price: '$65' },
          { name: '芝芝錦蘭奶茶', note: '', price: '$60' },
          { name: '芝芝阿草田', note: '', price: '$75' },
          { name: '芝芝阿華田', note: '', price: '$80' },
        ]
      },
      {
        title: '💎 寶石系列（無咖啡因）',
        items: [
          { name: '燕麥綠寶石', note: '', price: 'L $45 / 瓶 $60' },
        ]
      },
      {
        title: '🐄 鮮奶系列',
        items: [
          { name: '粉橙紅茶拿鐵', note: '', price: '$70 / 瓶 $100' },
          { name: '紅茶拿鐵', note: '', price: '$70 / 瓶 $100' },
          { name: '波霸紅茶拿鐵', note: '', price: '$70 / 瓶 $100' },
          { name: '仙草凍紅茶拿鐵', note: '', price: '$70 / 瓶 $100' },
          { name: '阿草田拿鐵', note: '', price: '$70 / 瓶 $100' },
          { name: '玫瑰紅茶拿鐵', note: '', price: '$75 / 瓶 $105' },
        ]
      },
      {
        title: '➕ 添加口感',
        items: [
          { name: '紅玉粉橙 / 波霸 / 燕麥 / 椰果 / 芋圓', note: '', price: '+$10' },
          { name: '金毓芝芝 / 芝芝', note: '', price: '+$20' },
        ]
      }
    ]
  },

  'kebuke': {
    name: '可不可熟成紅茶',
    desc: 'KEBUKE Tea Company',
    logo: 'images/logo-kebuke.png',
    categories: [
      {
        title: '🍵 菜單更新中',
        items: [
          { name: '敬請期待正式菜單', note: '資料補充中', price: '-' },
        ]
      }
    ]
  },

  'guiji': {
    name: '龜記 GUIJI',
    desc: '龜記茶飲',
    logo: 'images/logo-guiji.png',
    categories: [
      {
        title: '🐢 菜單更新中',
        items: [
          { name: '敬請期待正式菜單', note: '資料補充中', price: '-' },
        ]
      }
    ]
  },

  'qingfuquan': {
    name: '清心福全',
    desc: '台灣茶飲連鎖品牌',
    logo: 'images/logo-qingfuquan.png',
    categories: [
      {
        title: '🌟 新品上市',
        items: [
          { name: '百香綠茶', note: '', price: '$55' },
          { name: '優多百香綠茶', note: '', price: '$60' },
          { name: 'QQ百香綠茶', note: '', price: '$65' },
          { name: '鮮橙綠', note: '', price: 'M$50 / L$60' },
          { name: '優多鮮橙', note: '', price: '$75' },
          { name: '茶凍奶綠', note: '', price: 'M$45 / L$55' },
          { name: '粉條奶茶', note: '', price: 'M$45 / L$55' },
        ]
      },
      {
        title: '🌱 優多系列',
        items: [
          { name: '優多綠茶', note: '', price: 'L' },
          { name: '蘆薈優多綠茶', note: '低卡健康', price: 'L' },
          { name: '優多葡萄柚', note: '', price: '$65' },
          { name: '冬瓜芒果芒果', note: '', price: '$65' },
        ]
      },
      {
        title: '❄️ 冬瓜系列',
        items: [
          { name: '冬瓜', note: '', price: 'M$30' },
          { name: '冬瓜青茶', note: '', price: '$40' },
          { name: '冬瓜檸檬', note: '', price: '$50' },
        ]
      },
      {
        title: '🍦 冰淇淋系列',
        items: [
          { name: '冰淇淋紅茶', note: '', price: 'M$40 / L$50' },
          { name: '冰淇淋奶茶', note: '', price: 'M$45 / L$65' },
          { name: '紅茶三兄弟', note: '珍珠冰淇淋布丁紅茶', price: 'L' },
        ]
      },
      {
        title: '✨ 特調系列',
        items: [
          { name: '珍珠港式（滑滑）奶茶', note: '', price: 'M$50 / L$70' },
          { name: '港式（滑滑）奶茶', note: '', price: 'M$50 / L$70' },
          { name: '梅子奶茶', note: '', price: 'M$30 / L$40' },
          { name: '蜂蜜烏龍/綠茶', note: '', price: 'M$40 / L$50' },
          { name: '頂級可可', note: '', price: 'M$45 / L$55' },
          { name: '濃情巧克力', note: '', price: 'M$40 / L$40' },
          { name: '蜜茶', note: '', price: 'M$30 / L$40' },
          { name: '情人茶', note: '', price: 'M$40 / L$50' },
          { name: '咖啡奶茶', note: '', price: 'M$35 / L$45' },
          { name: '芋香奶茶', note: '', price: 'M$40 / L$50' },
          { name: 'RED BULL 紅牛無糖能量綠茶', note: '不建議孕婦及對咖啡因過敏者飲用', price: '$80' },
          { name: 'RED BULL 紅牛紅茶', note: '不建議孕婦及對咖啡因過敏者飲用', price: '$80' },
        ]
      },
      {
        title: '🍎 果醋系列',
        items: [
          { name: '蘋果醋', note: '', price: 'M$40 / L$50' },
          { name: '蘋果醋紅茶', note: '', price: 'M$45 / L$55' },
          { name: '蜂蜜蘋果醋', note: '', price: 'M$45 / L$60' },
          { name: '蘋果藍莓醋', note: '', price: 'M$50 / L$65' },
          { name: '蜂蜜藍莓醋', note: '', price: '$65' },
          { name: '蜂蜜藍莓醋', note: '', price: 'M$50 / L$65' },
        ]
      },
      {
        title: '🧋 奶茶系列',
        items: [
          { name: '珍珠/粉圓奶茶', note: '', price: 'M$40 / L$50' },
          { name: '錦蘭奶紅', note: '', price: 'M$40 / L$50' },
          { name: '烏龍奶茶', note: '', price: 'M$40 / L$50' },
          { name: '特級奶綠', note: '', price: 'M$40 / L$50' },
          { name: '仙草凍奶茶', note: '', price: 'M$45 / L$55' },
          { name: '椰果奶茶', note: '', price: 'M$40 / L$50' },
          { name: '布丁奶茶', note: '', price: 'M$45 / L$55' },
          { name: '暗黑水晶奶茶', note: '', price: 'M$45 / L$55' },
          { name: '芝麻奶茶', note: '', price: 'M$45 / L$60' },
          { name: '蜂蜜奶茶', note: '', price: 'M$45 / L$60' },
        ]
      },
      {
        title: '🍵 茗品系列',
        items: [
          { name: '烏龍綠茶', note: '', price: 'M$25 / L$30' },
          { name: '特級綠茶', note: '', price: 'M$25 / L$30' },
          { name: '錦蘭紅茶', note: '', price: 'M$25 / L$30' },
          { name: '極品青茶', note: '', price: 'M$25 / L$30' },
          { name: '原鄉四季', note: '', price: 'M$25 / L$30' },
          { name: '特選普洱', note: '', price: 'M$25 / L$30' },
          { name: '翡翠烏龍', note: '', price: 'M$25 / L$30' },
          { name: '嚴選高山茶', note: '', price: 'M$25 / L$30' },
        ]
      },
      {
        title: '🍋 季節鮮果系列',
        items: [
          { name: '鳳梨紅茶', note: '', price: 'M$40 / L$50' },
          { name: '香橙檸檬', note: '', price: 'M$45 / L$60' },
          { name: '蘋蜂蜜檸檬', note: '', price: 'M$55 / L$70' },
          { name: '金桔橙', note: '', price: 'M$45 / L$55' },
          { name: '葡萄柚綠茶', note: '', price: 'M$45 / L$55' },
          { name: '檸檬紅茶/綠茶', note: '', price: 'M$45 / L$50' },
          { name: '檸檬養樂多', note: '', price: 'M$65 / L$80' },
          { name: '柚子茶', note: '', price: 'M$45 / L$50' },
          { name: '葡萄柚汁', note: '', price: 'M$45 / L$50' },
          { name: '桔茶', note: '', price: 'M$40 / L$50' },
        ]
      },
      {
        title: '☕ 鮮奶 / 拿鐵系列',
        items: [
          { name: '茅綠茶凍拿鐵', note: '', price: '$65' },
          { name: '粉條紅茶拿鐵', note: '', price: 'M$50 / L$65' },
          { name: '珍珠鮮奶茶', note: '', price: 'M$45 / L$60' },
          { name: '珍珠紅茶拿鐵', note: '', price: 'M$45 / L$60' },
          { name: '頂級可可拿鐵', note: '', price: 'M$60 / L$75' },
          { name: '鮮奶冬瓜', note: '', price: '$60' },
          { name: '粉圓鮮奶茶', note: '', price: 'M$45 / L$60' },
          { name: '芝麻拿鐵', note: '', price: '$65' },
        ]
      }
    ]
  },

  'comebuy': {
    name: 'COMEBUY',
    desc: '甘蔗青茶專賣',
    logo: 'images/logo-comebuy.png',
    categories: [
      {
        title: '🍵 找好茶',
        items: [
          { name: '茉莉綠茶', note: '', price: 'M$35 / L$40' },
          { name: '阿薩姆紅茶', note: '', price: 'M$35 / L$40' },
          { name: '四季春青茶', note: '', price: 'M$35 / L$40' },
          { name: '黃金烏龍', note: '', price: 'M$35 / L$40' },
          { name: '檸檬綠', note: '', price: 'M$50 / L$60' },
          { name: '梅の綠', note: '', price: 'M$50 / L$60' },
          { name: '桔子綠', note: '', price: 'M$50 / L$60' },
          { name: '8冰綠', note: '', price: 'M$50 / L$60' },
          { name: '養樂多綠', note: '', price: 'M$50 / L$60' },
          { name: '旺來紅/柚子紅', note: '', price: 'M$50 / L$60' },
          { name: '鮮柚綠', note: '', price: 'M$60 / L$75' },
        ]
      },
      {
        title: '🧋 找口感',
        items: [
          { name: '四季春＋珍珠椰', note: '', price: 'M$40 / L$50' },
          { name: '波霸紅/綠/青/烏', note: '', price: 'M$40 / L$50' },
          { name: '波霸奶茶', note: '', price: 'M$50 / L$60' },
          { name: '波霸奶綠', note: '', price: 'M$50 / L$60' },
          { name: '波霸烏龍茶', note: '', price: 'M$40 / L$60' },
          { name: '珍珠紅/綠/青/烏', note: '', price: 'M$50 / L$60' },
          { name: '珍珠奶茶', note: '', price: 'M$50 / L$60' },
          { name: '珍珠奶綠', note: '', price: 'M$50 / L$60' },
          { name: '椰果奶茶', note: '', price: 'M$50 / L$60' },
          { name: '布丁奶茶/奶綠', note: '', price: 'M$60 / L$75' },
          { name: '布丁紅/綠/青/烏', note: '', price: 'M$50 / L$60' },
        ]
      },
      {
        title: '🥛 找奶茶',
        items: [
          { name: '奶茶', note: '', price: 'M$50 / L$60' },
          { name: '奶綠', note: '', price: 'M$50 / L$60' },
          { name: '紅茶瑪奇朵', note: '', price: 'M$50 / L$60' },
          { name: '烏龍瑪奇朵', note: '', price: 'M$50 / L$60' },
          { name: '四季奶青', note: '', price: 'M$50 / L$60' },
          { name: '黃金烏龍奶茶', note: '', price: 'M$50 / L$60' },
          { name: '珍珠奶茶', note: '', price: 'M$50 / L$60' },
          { name: '阿華田', note: '', price: 'M$55 / L$65' },
        ]
      },
      {
        title: '🍋 找新鮮',
        items: [
          { name: '檸檬汁', note: '', price: 'M$55 / L$65' },
          { name: '金桔檸檬', note: '', price: 'M$55 / L$65' },
          { name: '檸檬梅汁', note: '', price: 'M$60 / L$75' },
          { name: '檸檬養樂多', note: '', price: 'M$65 / L$80' },
          { name: '8冰茶', note: '', price: 'M$50 / L$60' },
          { name: '柚子茶', note: '', price: 'M$50 / L$60' },
          { name: '鮮柚汁', note: '', price: 'M$60 / L$75' },
          { name: '葡萄柚多多', note: '', price: 'M$65 / L$80' },
        ]
      },
      {
        title: '☕ 紅茶拿鐵',
        items: [
          { name: '紅茶拿鐵', note: '', price: 'M$60 / L$75' },
          { name: '綠茶拿鐵', note: '', price: 'M$60 / L$75' },
          { name: '黃金烏龍拿鐵', note: '', price: 'M$60 / L$75' },
          { name: '阿草田拿鐵', note: '', price: 'M$65 / L$80' },
        ]
      },
      {
        title: '🍦 找冰淇淋',
        items: [
          { name: '冰淇淋紅茶', note: '', price: 'M$50 / L$60' },
          { name: '芒果青', note: '', price: 'M$50 / L$60' },
          { name: '荔枝烏龍', note: '', price: 'M$50 / L$60' },
        ]
      }
    ]
  }

};

// ── Open modal ──
document.querySelectorAll('.shop-card').forEach(card => {
  card.addEventListener('click', () => {
    const shopId = card.dataset.shop;
    openModal(shopId);
  });
});

function openModal(shopId) {
  const data = menuData[shopId];
  if (!data) return;

  document.getElementById('modalLogo').src = data.logo;
  document.getElementById('modalLogo').alt = data.name;
  document.getElementById('modalTitle').textContent = data.name;
  document.getElementById('modalDesc').textContent = data.desc;

  const container = document.getElementById('menuCategories');
  container.innerHTML = data.categories.map(cat => `
    <div class="menu-category">
      <h3 class="category-title">${cat.title}</h3>
      <div class="menu-items">
        ${cat.items.map(item => `
          <div class="menu-item">
            <div class="item-info">
              <div class="item-name">${item.name}</div>
              ${item.note ? `<div class="item-note">${item.note}</div>` : ''}
            </div>
            <div class="item-price">${item.price}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('menuModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Close modal ──
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('menuModal').addEventListener('click', e => {
  if (e.target === document.getElementById('menuModal')) closeModal();
});

function closeModal() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
