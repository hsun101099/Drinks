/* ══════════════════════════════════════════════
   FIREBASE
══════════════════════════════════════════════ */
firebase.initializeApp({
  apiKey: "AIzaSyBuJivEh06ahae7vicgJLEpWZNaIcBr0JI",
  authDomain: "drinks-order-43f90.firebaseapp.com",
  projectId: "drinks-order-43f90",
  storageBucket: "drinks-order-43f90.firebasestorage.app",
  messagingSenderId: "748518969039",
  appId: "1:748518969039:web:246244b406cdcc7048f1ba"
});
const db = firebase.firestore();

/* ══════════════════════════════════════════════
   MENU DATA
══════════════════════════════════════════════ */
const menuData = {

  '50lan': {
    name: '50嵐', desc: '好茶陪伴你的日常', logo: 'images/logo-50lan.png',
    menuImg: 'images/menu-50lan.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '珍珠', price: 0 }, { name: '波霸', price: 0 },
      { name: '椰果', price: 5 }, { name: '布丁', price: 5 },
    ],
    categories: [
      { title: '🍵 找好茶', items: [
        { name: '茉莉綠茶', note: '', price: 'M$35 / L$40' },
        { name: '阿隆媽紅茶', note: '', price: 'M$35 / L$40' },
        { name: '四季青青茶', note: '', price: 'M$35 / L$40' },
        { name: '黃金烏龍', note: '', price: 'M$35 / L$40' },
        { name: '檸檬綠', note: '', price: 'M$50 / L$60' },
        { name: '梅の涼', note: '', price: 'M$50 / L$60' },
        { name: '桔子綠', note: '', price: 'M$50 / L$60' },
        { name: '8冰綠', note: '', price: 'M$50 / L$60' },
        { name: '養樂多綠', note: '', price: 'M$50 / L$60' },
        { name: '旺來紅/柚子紅', note: '', price: 'M$50 / L$60' },
      ]},
      { title: '🧋 找口感', items: [
        { name: '四季春＋珍波服', note: '', price: 'M$40 / L$50' },
        { name: '波霸紅/綠/青/烏', note: '', price: 'M$40 / L$50' },
        { name: '波霸奶茶', note: '', price: 'M$50 / L$60' },
        { name: '波菜奶綠', note: '', price: 'M$50 / L$60' },
        { name: '波菜烏龍奶茶', note: '', price: 'M$50 / L$60' },
        { name: '珍珠紅/綠/青/烏', note: '', price: 'M$40 / L$50' },
        { name: '珍珠奶茶', note: '', price: 'M$50 / L$60' },
        { name: '珍珠奶綠', note: '', price: 'M$50 / L$60' },
        { name: '椰果奶茶', note: '', price: 'M$50 / L$60' },
        { name: '布丁奶茶/奶綠', note: '', price: 'M$60 / L$75' },
      ]},
      { title: '🥛 找奶茶', items: [
        { name: '奶茶', note: '', price: 'M$50 / L$60' },
        { name: '奶綠', note: '', price: 'M$50 / L$60' },
        { name: '紅茶瑪奇朵', note: '', price: 'M$50 / L$60' },
        { name: '烏龍瑪奇朵', note: '', price: 'M$50 / L$60' },
        { name: '四季奶青', note: '', price: 'M$50 / L$60' },
        { name: '黃金烏龍奶茶', note: '', price: 'M$50 / L$60' },
        { name: '阿華田', note: '', price: 'M$55 / L$65' },
      ]},
      { title: '🍋 找新鮮', items: [
        { name: '檸檬汁', note: '', price: 'M$55 / L$65' },
        { name: '金桔檸檬', note: '', price: 'M$55 / L$65' },
        { name: '檸檬梅汁', note: '', price: 'M$60 / L$75' },
        { name: '檸檬養樂多', note: '', price: 'M$65 / L$80' },
        { name: '8冰茶', note: '', price: 'M$50 / L$60' },
        { name: '柚子茶', note: '', price: 'M$50 / L$60' },
        { name: '鮮柚汁', note: '', price: 'M$60 / L$75' },
        { name: '葡萄柚多多', note: '', price: 'M$65 / L$80' },
      ]},
      { title: '☕ 紅茶拿鐵', items: [
        { name: '紅茶拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '綠茶拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '黃金烏龍拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '阿草田拿鐵', note: '', price: 'M$65 / L$80' },
      ]},
      { title: '🍦 找冰淇淋', items: [
        { name: '冰淇淋紅茶', note: '', price: 'M$50 / L$60' },
        { name: '芒果青', note: '', price: 'M$50 / L$60' },
      ]},
    ]
  },

  'coco': {
    name: 'CoCo 都可', desc: '多元口味飲料品牌', logo: 'images/logo-coco.png',
    menuImg: 'images/menu-coco.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '珍珠', price: 10 }, { name: '粉角', price: 10 },
      { name: '布丁', price: 10 }, { name: '仙草', price: 10 },
      { name: '西谷米', price: 10 }, { name: '茉香茶凍', price: 10 },
    ],
    categories: [
      { title: '☕ 職人金獎咖啡', items: [
        { name: '職人美式', note: '', price: '$50' },
        { name: '職人拿鐵', note: '', price: '$65' },
        { name: '珍珠/粉角職人拿鐵', note: '', price: '$75' },
        { name: '珍珠黑糖拿鐵', note: '', price: '$80' },
        { name: '紅柚香檸美式', note: '', price: '$80' },
        { name: '西西里手搖檸檬美式', note: '', price: '$80' },
        { name: '生椰職人拿鐵', note: '', price: '$75' },
        { name: '粉角生椰拿鐵', note: '', price: '$85' },
      ]},
      { title: '🫧 經典果粒茶', items: [
        { name: '百香雙響炮', note: 'TOP 1 人氣推薦', price: '$70' },
        { name: '葡萄柚果粒茶', note: '', price: '$70' },
      ]},
      { title: '🍵 經典純茶', items: [
        { name: '茉莉綠茶', note: '', price: 'M$30 / L$35' },
        { name: '四季春青茶', note: '', price: 'M$30 / L$35' },
        { name: '21歲輕烏龍', note: '', price: 'M$30 / L$35' },
        { name: '高山紅茶', note: '', price: 'M$30 / L$35' },
        { name: '日安大麥', note: '無咖啡因', price: 'M$30 / L$35' },
        { name: '仙草蜜', note: '無咖啡因', price: 'M$35 / L$40' },
        { name: '四季椰椰青', note: '', price: 'M$45 / L$50' },
      ]},
      { title: '🍋 激推水果茶', items: [
        { name: '21歲輕椰烏龍', note: '', price: 'M$45 / L$55' },
        { name: '檸檬奇遇桔', note: '茉香茶凍', price: '$60' },
        { name: '金桔檸檬', note: '無咖啡因', price: 'M$60 / L$70' },
        { name: '粉角檸檬冬瓜', note: '無咖啡因', price: 'M$55 / L$65' },
        { name: '百香/芒果綠茶', note: '', price: 'M$45 / L$55' },
        { name: '綠茶養樂多', note: '', price: '$70' },
        { name: '蕎麥冬瓜露', note: '', price: 'M$45 / L$50' },
      ]},
      { title: '🥛 就愛喝奶茶', items: [
        { name: '奶茶三兄弟', note: 'TOP 人氣', price: '$70' },
        { name: '阿薩姆奶茶', note: '', price: 'M$40 / L$50' },
        { name: '珍珠/粉角奶茶', note: '', price: 'M$50 / L$60' },
        { name: '西谷米奶茶', note: '', price: 'M$50 / L$60' },
        { name: '茉香凍奶綠', note: '', price: 'M$50 / L$60' },
        { name: '手作仙草凍乳', note: '無咖啡因', price: '$70' },
        { name: '英式鮮奶茶', note: '', price: 'M$55 / L$70' },
        { name: '珍珠/粉角鮮奶茶', note: 'TOP 人氣', price: 'M$65 / L$75' },
      ]},
    ]
  },

  'qingshan': {
    name: '青山', desc: '青茶專業製作', logo: 'images/logo-qingshan.png',
    menuImg: 'images/menu-qingshan.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '琥珀珍珠', price: 10 }, { name: '蕎麥珍珠', price: 15 },
      { name: '海鹽奶蓋', price: 20 }, { name: '蕎麥奶蓋', price: 20 },
      { name: '菜燕', price: 10 }, { name: '青茶茶凍', price: 10 },
      { name: '杏仁凍', price: 10 },
    ],
    categories: [
      { title: '🌿 精選青茶', items: [
        { name: '春青', note: '花香・輕・海拔 800–1200M', price: 'M$30 / L$35' },
        { name: '夏青', note: '木質香・重・海拔 800–1200M', price: 'M$30 / L$35' },
        { name: '秋青', note: '奶香・中・海拔 1200–1500M', price: 'M$40 / L$45' },
        { name: '冬青 ★推薦', note: '清香・輕・海拔 1300–1600M', price: 'M$55 / L$60' },
      ]},
      { title: '🌸 無咖啡因', items: [
        { name: '東方菊花茶', note: '', price: 'M$45 / L$55' },
        { name: '西穀蕎麥茶', note: '', price: 'M$30 / L$40' },
        { name: '南非國寶茶', note: '', price: 'M$40 / L$50' },
        { name: '北風桂花玄米茶', note: '', price: 'M$35 / L$45' },
      ]},
      { title: '🍵 茶', items: [
        { name: '綠水', note: '', price: 'M$25 / L$30' },
        { name: '天蟬紅茶', note: '', price: 'M$35 / L$40' },
      ]},
      { title: '❄️ 調', items: [
        { name: '青山綠水', note: '', price: 'M$35 / L$40' },
        { name: '春青菊花', note: '', price: 'M$45 / L$55' },
        { name: '蕎麥冬露', note: '最低半糖', price: 'L$50' },
        { name: '春青冬露', note: '最低半糖', price: 'L$50' },
        { name: '菊花冬露', note: '最低半糖', price: 'L$55' },
        { name: '多多綠水', note: '最低半糖', price: 'L$55' },
      ]},
      { title: '🧀 蓋（法國 Elle&Vire，僅供少冰）', items: [
        { name: '蕎麥奶蓋綠水', note: '', price: 'M$45 / L$50' },
        { name: '蕎麥奶蓋玄米茶', note: '', price: 'M$55 / L$65' },
        { name: '海鹽奶蓋春青', note: '', price: 'M$50 / L$55' },
        { name: '海鹽奶蓋紅茶', note: '', price: 'M$55 / L$60' },
        { name: '海鹽奶蓋輕蘋香茶', note: '', price: 'M$80' },
      ]},
      { title: '🥛 奶（那堤可升級燕麥奶 M+10 / L+15）', items: [
        { name: '山峰奶茶', note: '', price: 'M$45 / L$50' },
        { name: '夏夏那堤', note: '', price: 'M$50 / L$60' },
        { name: '蕎麥那堤', note: '', price: 'M$50 / L$65' },
        { name: '天蟬那堤', note: '', price: 'M$55 / L$65' },
      ]},
      { title: '🧋 料', items: [
        { name: '菜燕春青', note: '', price: 'M$40 / L$45' },
        { name: '菜燕奶茶', note: '', price: 'M$55 / L$60' },
        { name: '杏仁凍春青', note: '', price: 'M$40 / L$45' },
        { name: '青茶婚貴奶茶', note: '', price: 'M$55 / L$60' },
        { name: '琥珀珍珠奶茶', note: '', price: 'M$55 / L$60' },
        { name: '蕎麥珍珠奶茶', note: '', price: 'M$60 / L$65' },
        { name: '青茶凍天蟬那堤', note: '', price: 'M$65 / L$75' },
        { name: '琥珀珍珠天蟬那堤', note: '', price: 'M$65 / L$75' },
        { name: '蕎麥珍珠夏夏那堤', note: '', price: 'M$65 / L$75' },
      ]},
      { title: '🍊 果（不提供無糖）', items: [
        { name: '白甘蔗春青', note: '', price: 'M$55 / L$60' },
        { name: '香檸綠水', note: '', price: 'M$55 / L$60' },
        { name: '柳丁綠水', note: '', price: 'M$65 / L$70' },
        { name: '紅柚綠水', note: '', price: 'M$65 / L$70' },
        { name: '橘子春青', note: '', price: 'M$65 / L$70' },
        { name: '荔枝春青', note: '含青茶凍', price: 'M$70 / L$75' },
        { name: '水梨春青', note: '', price: 'M$70 / L$75' },
        { name: '輕蘋香茶', note: '', price: 'M$75 / L$80' },
      ]},
    ]
  },

  'milkshop': {
    name: 'Milkshop 迷客夏', desc: '新鮮牧場直送，純粹鮮乳風味', logo: 'images/logo-milkshop.png',
    menuImg: 'images/menu-milkshop.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '珍珠', price: 10 }, { name: '仙草凍', price: 10 },
      { name: '綠茶凍', price: 10 }, { name: '脆嘬破球', price: 15 },
      { name: '蜂蜜黑糖粉粿', price: 15 }, { name: '荔荔椰果', price: 15 },
    ],
    categories: [
      { title: '🌸 季節限定', items: [
        { name: '荔荔茉莉', note: '', price: 'M$50' },
        { name: '荔荔蜜桃椰果 ★', note: '夏季暢銷', price: 'M$65' },
        { name: '荔多鮮奶果昔 ★', note: '夏季暢銷', price: 'M$60' },
        { name: '蜜桃烏龍', note: '', price: 'M$70' },
        { name: '蜜桃茉莉', note: '', price: 'M$70' },
        { name: '夏嶼果茶', note: '', price: 'M$65' },
        { name: '海鹽芒果綠', note: '', price: 'M$65' },
        { name: '蔗杯紅柚凍飲', note: '', price: 'M$75' },
      ]},
      { title: '🍵 醇萃茶', items: [
        { name: '娜杯紅茶', note: '', price: 'L$45' },
        { name: '英倫伯爵紅茶', note: '', price: 'L$40' },
        { name: '大正醇香紅茶', note: '', price: 'L$40' },
        { name: '原片初露青茶', note: '', price: 'L$40' },
        { name: '茉莉原淬綠茶', note: '', price: 'L$40' },
        { name: '琥珀高峰烏龍', note: '', price: 'L$40' },
      ]},
      { title: '🍊 鮮調果茶', items: [
        { name: '桂香原片青', note: '', price: 'L$50' },
        { name: '桂香青檸蜂蜜粉粿 ★', note: '', price: 'L$65' },
        { name: '柳丁綠茶/青茶', note: '', price: 'L$70' },
        { name: '白甘蔗青茶', note: '', price: 'L$75' },
        { name: '青檸香茶', note: '', price: 'L$70' },
        { name: '蜂蜜檸檬晶凍', note: '', price: 'L$60' },
        { name: '香柚綠茶', note: '', price: 'L$60' },
        { name: '養樂多綠', note: '', price: 'L$55' },
        { name: '冬瓜青茶', note: '', price: 'L$55' },
        { name: '冰萃柳丁/檸檬', note: '', price: 'L$65' },
      ]},
      { title: '🥛 醇濃鮮奶茶', items: [
        { name: '娜杯紅茶拿鐵 ★ TOP1', note: '人氣推薦', price: 'M$60 / L$70' },
        { name: '伯爵紅茶拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '大正紅茶拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '琥珀烏龍拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '茉香綠茶拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '原片青茶拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '珍珠紅茶拿鐵（伯爵/大正）', note: '', price: 'M$65 / L$75' },
        { name: '珍珠娜杯紅茶拿鐵', note: '', price: 'M$70 / L$80' },
      ]},
      { title: '🌾 無咖啡因', items: [
        { name: '桂香輕蕎麥', note: '', price: 'M$55' },
        { name: '輕纖蕎麥茶', note: '', price: 'M$45' },
        { name: '輕纖蕎麥拿鐵', note: '', price: 'M$65 / L$75' },
        { name: '蜂香決明大麥', note: '', price: 'M$35' },
        { name: '焙香大麥拿鐵', note: '', price: 'M$55 / L$65' },
        { name: '原鄉冬瓜茶', note: '', price: 'M$40' },
        { name: '冬瓜檸檬/麥茶', note: '', price: 'M$55' },
      ]},
      { title: '🐄 醇濃綠光鮮奶', items: [
        { name: '芋頭鮮奶', note: '', price: 'M$70 / L$90' },
        { name: '珍珠鮮奶', note: '', price: 'M$70 / L$90' },
        { name: '手炒黑糖鮮奶', note: '', price: 'M$65 / L$85' },
        { name: '嫩仙草凍奶', note: '', price: 'M$65 / L$85' },
        { name: '綠光純鮮奶家庭號', note: '冷飲限定', price: '$169' },
      ]},
    ]
  },

  'macu': {
    name: 'MACU', desc: '果粒茶創始品牌', logo: 'images/logo-macu.png',
    menuImg: 'images/menu-macu.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '紅玉粉橙', price: 10 }, { name: '波霸', price: 10 },
      { name: '燕麥', price: 10 }, { name: '椰果', price: 10 },
      { name: '芋圓', price: 10 }, { name: '金毓芝芝', price: 20 },
      { name: '芝芝', price: 20 },
    ],
    categories: [
      { title: '🍓 飲中甜品（季節限定）', items: [
        { name: '楊枝甘露 2.0', note: '', price: 'L$90' },
        { name: '多多綠茶', note: '', price: 'L$55 / 瓶$85' },
        { name: '貴氣芒果果粒甘蔗', note: '', price: 'L$90' },
        { name: '芒果芒果甘蔗', note: '', price: 'L$90' },
        { name: '番茄梅蜜浪漫', note: '', price: 'L$75 / 瓶$105' },
        { name: '草莓梅蜜波波', note: '', price: 'L$85 / 瓶$115' },
        { name: '芝芝苦梅粒粒', note: '', price: 'L$95' },
        { name: '芝芝葡萄粒粒', note: '', price: 'L$95' },
        { name: '葡萄果粒波波', note: '', price: 'M$80' },
        { name: '芋泥波波奶 2.0', note: '', price: 'M$70' },
        { name: '濃厚芋泥鮮奶', note: '', price: 'M$70' },
        { name: '酪梨草莓果粒', note: '', price: 'L$95' },
        { name: '草莓果粒波波', note: '', price: 'L$95' },
      ]},
      { title: '🍹 經典特調', items: [
        { name: '梅子冰茶', note: '', price: 'L$45 / 瓶$60' },
        { name: '梅子楊梅', note: '', price: 'L$90 / 瓶$105' },
        { name: '多多綠茶', note: '', price: 'L$55 / 瓶$85' },
      ]},
      { title: '🍊 鮮果茶飲', items: [
        { name: '粉橙橙香紅茶', note: '', price: 'L$85 / 瓶$110' },
        { name: '橙香紅茶', note: '', price: 'L$75 / 瓶$100' },
        { name: '紅柚香紅茶', note: '', price: 'L$75 / 瓶$100' },
        { name: '百香雙Q果', note: '', price: 'L$65 / 瓶$95' },
        { name: '百香綠茶', note: '', price: 'L$65 / 瓶$95' },
        { name: '百香多多', note: '', price: 'L$70' },
        { name: '橘子檸檬', note: '', price: 'L$70 / 瓶$95' },
        { name: '冰草檸檬', note: '', price: '$55' },
        { name: '蜂蜜檸檬', note: '', price: 'L$65' },
        { name: '柚香包菓', note: '', price: 'L$70 / 瓶$95' },
      ]},
      { title: '🍇 果粒茶系列', items: [
        { name: '香橙果粒茶', note: '', price: 'L$85 / 瓶$110' },
        { name: '柳橙果粒茶', note: '', price: 'L$80 / 瓶$105' },
        { name: '葡萄柚果粒茶', note: '', price: 'L$80 / 瓶$105' },
        { name: '葡萄柚果粒蜂蜜', note: '', price: 'L$80 / 瓶$105' },
        { name: '柳橙果粒蜂蜜', note: '', price: 'L$80' },
        { name: '橙橙芒果粒茶（季）', note: '季節限定', price: 'L$85' },
      ]},
      { title: '🍵 原味茶', items: [
        { name: '粉橙金蜜', note: '', price: 'L$50 / 瓶$65' },
        { name: '紅寶烏島', note: '', price: 'L$45 / 瓶$60' },
        { name: '高山金蜜茶', note: '', price: 'L$40 / 瓶$55' },
        { name: '錦蘭紅茶', note: '', price: 'L$40 / 瓶$55' },
        { name: '蜜桃紅茶', note: '', price: 'L$40 / 瓶$55' },
        { name: '紅寶雙Q', note: '', price: 'L$55 / 瓶$70' },
        { name: '金蜜雙Q', note: '', price: 'L$50 / 瓶$65' },
      ]},
      { title: '🥛 濃醇系列', items: [
        { name: '蜜桃奶茶', note: '', price: 'L$65 / 瓶$95' },
        { name: '錦蘭奶茶', note: '', price: 'L$55 / 瓶$85' },
        { name: '波霸奶茶', note: '', price: 'L$55 / 瓶$85' },
        { name: '仙草凍奶茶', note: '', price: 'L$55 / 瓶$85' },
        { name: '玫瑰奶茶', note: '', price: 'L$65 / 瓶$95' },
        { name: '阿草田', note: '', price: 'L$60 / 瓶$90' },
      ]},
      { title: '🧀 芝芝系列', items: [
        { name: '芝芝金蜜/錦蘭紅茶', note: '冷/熱', price: '$55' },
        { name: '芝芝金蜜雙Q', note: '', price: '$65' },
        { name: '芝芝蜜桃紅茶', note: '', price: '$65' },
        { name: '芝芝翡翠綠茶', note: '', price: '$65' },
        { name: '芝芝錦蘭奶茶', note: '', price: '$60' },
        { name: '芝芝阿草田', note: '', price: '$75' },
        { name: '芝芝阿華田', note: '', price: '$80' },
      ]},
      { title: '🐄 鮮奶系列', items: [
        { name: '粉橙紅茶拿鐵', note: '', price: '$70 / 瓶$100' },
        { name: '紅茶拿鐵', note: '', price: '$70 / 瓶$100' },
        { name: '波霸紅茶拿鐵', note: '', price: '$70 / 瓶$100' },
        { name: '仙草凍紅茶拿鐵', note: '', price: '$70 / 瓶$100' },
        { name: '阿草田拿鐵', note: '', price: '$70 / 瓶$100' },
        { name: '玫瑰紅茶拿鐵', note: '', price: '$75 / 瓶$105' },
      ]},
    ]
  },

  'kebuke': {
    name: '可不可熟成紅茶', desc: 'KEBUKE Tea Company · 2008', logo: 'images/logo-kebuke.png',
    menuImg: 'images/menu-kebuke.jpg',
    sweetness: ['無糖','一分糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '白玉', price: 10 }, { name: '水玉', price: 10 },
      { name: '墨玉', price: 15 }, { name: '春梅凍', price: 15 },
      { name: '榛果蕎麥凍', price: 15 },
    ],
    categories: [
      { title: '⭐ 推薦組合', items: [
        { name: '1號｜熟成紅茶＋白玉', note: '', price: 'M$45 / L$50' },
        { name: '2號｜春梅冰茶＋春梅凍', note: '僅提供冷飲', price: 'M$65 / L$75' },
        { name: '3號｜胭脂多多＋水玉', note: '僅提供冷飲', price: 'M$60 / L$70' },
        { name: '4號｜半熟烏龍厚乳＋白玉', note: '', price: 'M$69 / L$79' },
      ]},
      { title: '🍵 乎乾 好茶', items: [
        { name: '熟成紅茶', note: '', price: 'M$35 / L$40' },
        { name: '麗春紅茶', note: '', price: 'M$35 / L$40' },
        { name: '春芽綠茶', note: '', price: 'M$35 / L$40' },
        { name: '半熟烏龍', note: '', price: 'M$35 / L$40' },
        { name: '胭脂多多', note: '', price: 'M$45 / L$50' },
        { name: '茶花烏龍多多', note: '', price: 'M$50 / L$60' },
        { name: '茶花烏龍梅', note: '', price: 'M$50 / L$60' },
        { name: '蘋果麗春', note: '', price: 'M$59 / L$69' },
        { name: '蘋果春芽', note: '', price: 'M$59 / L$69' },
        { name: '蘋果茶花烏龍', note: '', price: 'M$65 / L$75' },
      ]},
      { title: '✨ 乎乾 手作', items: [
        { name: '熟橙紅茶', note: '', price: 'M$45 / L$55' },
        { name: '春檸綠茶', note: '', price: 'M$45 / L$55' },
        { name: '春梅冰茶', note: '', price: 'M$50 / L$60' },
        { name: '太妃熟成', note: '特調配方 / Extra Shot +10', price: 'M$50 / L$55' },
        { name: '金蜜熟成', note: '100% 現搖', price: 'M$53 / L$63' },
      ]},
      { title: '🌙 乎乾 好眠（無咖啡因）', items: [
        { name: '輕纖穀奈茶', note: '', price: 'M$40 / L$50' },
        { name: '穀奈冷露', note: '', price: 'M$45 / L$55' },
        { name: '穀奈歐蕾', note: '', price: 'M$59 / L$69' },
        { name: '金蜜檸檬', note: '100% 現搖', price: 'M$53 / L$63' },
      ]},
      { title: '🥛 乎乾 鮮奶茶', items: [
        { name: '熟成歐蕾', note: '', price: 'M$55 / L$65' },
        { name: '冷露歐蕾', note: '', price: 'M$55 / L$65' },
        { name: '胭脂歐蕾', note: '', price: 'M$59 / L$69' },
        { name: '半熟烏龍歐蕾', note: '', price: 'M$59 / L$69' },
        { name: '金蜜歐蕾', note: '100% 現搖', price: 'M$60 / L$70' },
        { name: '白玉歐蕾', note: '', price: 'M$60 / L$70' },
        { name: '鷺鷥歐蕾', note: '', price: 'M$60 / L$70' },
        { name: '熟成榛果歐蕾', note: '', price: 'M$60 / L$70' },
        { name: '墨玉鷺鷥歐蕾', note: '', price: 'M$70 / L$80' },
      ]},
      { title: '🧋 乎乾 奶茶', items: [
        { name: '熟成奶茶', note: '', price: 'M$40 / L$55' },
        { name: '春芽奶茶', note: '', price: 'M$45 / L$55' },
        { name: '胭脂奶茶', note: '', price: 'M$50 / L$60' },
        { name: '白玉奶茶', note: '', price: 'M$50 / L$60' },
      ]},
      { title: '🍼 乎乾 厚乳', items: [
        { name: '半熟烏龍厚乳', note: '', price: 'M$59 / L$69' },
        { name: '茶花烏龍厚乳', note: '', price: 'M$59 / L$69' },
        { name: '生茶烏龍厚乳', note: '', price: 'M$69 / L$79' },
        { name: '蘋果春芽厚乳', note: '', price: 'M$69' },
      ]},
      { title: '❄️ 乎乾 冬瓜', items: [
        { name: '雪花冷露', note: '', price: 'M$35 / L$40' },
        { name: '熟成冷露', note: '', price: 'M$40 / L$45' },
        { name: '春芽冷露', note: '', price: 'M$40 / L$45' },
        { name: '半熟烏龍冷露', note: '', price: 'M$40 / L$45' },
        { name: '胭脂冷露', note: '', price: 'M$45 / L$50' },
        { name: '檸檬冷露', note: '', price: 'M$50 / L$60' },
      ]},
      { title: '🍦 乎乾 冰淇淋', items: [
        { name: '雪藏紅茶', note: '', price: 'L$60' },
        { name: '雪藏奶茶', note: '', price: 'L$69' },
      ]},
    ]
  },

  'guiji': {
    name: '龜記 GUIJI', desc: 'Dream Big, Live Fresh.', logo: 'images/logo-guiji.png',
    menuImg: 'images/menu-guiji.jpg',
    sweetness: ['去糖(0%)','一分(10%)','三分(30%)','五分(50%)','八分(80%)','正常(100%)'],
    ice: ['去冰(0%)','微冰(30%)','少冰(80%)','正常冰(100%)'],
    toppings: [
      { name: '珍珠', price: 10 }, { name: '椰果', price: 10 },
      { name: '蘆薈', price: 15 }, { name: '紅萱茶凍', price: 15 },
    ],
    categories: [
      { title: '🍵 醇萃 Tea', items: [
        { name: '極品紅茶', note: '', price: '$40' },
        { name: '翡翠綠茶', note: '', price: '$40' },
        { name: '青四季春', note: '', price: '$40' },
        { name: '三韻紅萱', note: '', price: '$45' },
        { name: '三十三茶王', note: '龜記推薦', price: '$45' },
        { name: '碎銀普洱茶', note: '', price: '$45' },
        { name: '花沫烏龍', note: '', price: '$45' },
      ]},
      { title: '🏮 鄉韻 Taiwan Memory', items: [
        { name: '豆漿紅茶', note: '', price: '$45' },
        { name: '冬瓜茶王', note: '', price: '$55' },
        { name: '阿源楊桃紅茶', note: '', price: '$55' },
        { name: '阿源楊桃綠茶', note: '', price: '$55' },
        { name: '冬瓜雷夢', note: '龜記推薦・無添加茶', price: '$60' },
        { name: '楊桃雷夢', note: '', price: '$60' },
        { name: '甘蔗四季春', note: '最低一分糖', price: '$65' },
      ]},
      { title: '🍯 蜜蜂工坊 BeeTouched', items: [
        { name: '蜂蜜綠茶', note: '糖度固定', price: '$55' },
        { name: '蜂蜜四季春', note: '糖度固定', price: '$55' },
        { name: '蜂蜜花沫烏龍', note: '糖度固定', price: '$60' },
        { name: '蜂蜜雷夢', note: '無添加茶', price: '$65' },
        { name: '雷夢蔗蔗蜜', note: '', price: '$75' },
      ]},
      { title: '🍋 果茶 Fruit Tea', items: [
        { name: '百香紅茶', note: '最低一分糖', price: '$55' },
        { name: '百香綠茶', note: '最低一分糖', price: '$55' },
        { name: '翡翠雷夢', note: '', price: '$60' },
        { name: '柳丁翡翠', note: '', price: '$60' },
        { name: '蘋果紅萱', note: '龜記推薦・最低一分糖', price: '$60' },
        { name: '蜜桃烏龍', note: '', price: '$70' },
        { name: '紅柚翡翠', note: '', price: '$75' },
      ]},
      { title: '🍇 紫葡萄系列', items: [
        { name: '紫葡三韻紅', note: '最低一分糖', price: '$60' },
        { name: '紫葡蔗蔗春', note: '龜記推薦・最低一分糖', price: '$75' },
        { name: '紅柚紫葡凍飲', note: '最低一分糖', price: '$80' },
      ]},
      { title: '🧋 奶茶 Milk Tea', items: [
        { name: '極品奶茶', note: '', price: '$55' },
        { name: '翡翠奶茶', note: '', price: '$55' },
        { name: '茶王奶茶', note: '龜記推薦', price: '$60' },
        { name: '碎銀普洱奶茶', note: '', price: '$60' },
        { name: '珍珠奶茶', note: '', price: '$65' },
        { name: '蜂蜜奶茶', note: '糖度固定', price: '$65' },
      ]},
      { title: '🐄 小農鮮乳坊 Fresh Milk', items: [
        { name: '極品鮮乳茶', note: '', price: '$70' },
        { name: '翡翠鮮乳茶', note: '', price: '$70' },
        { name: '龜記濃乳茶', note: '龜記推薦', price: '$70' },
        { name: '冬瓜鮮乳', note: '無添加茶', price: '$70' },
        { name: '茶王鮮乳茶', note: '', price: '$75' },
        { name: '巧克鮮乳茶', note: '最低一分糖', price: '$75' },
        { name: '碎銀普洱鮮乳', note: '', price: '$75' },
      ]},
    ]
  },

  'qingfuquan': {
    name: '清心福全', desc: '台灣茶飲連鎖品牌', logo: 'images/logo-qingfuquan.png',
    menuImg: 'images/menu-qingfuquan.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '珍珠', price: 5 }, { name: '粉圓', price: 5 },
      { name: '布丁', price: 5 }, { name: '椰果', price: 5 },
      { name: '仙草凍', price: 5 }, { name: '粉條', price: 5 },
    ],
    categories: [
      { title: '🌟 新品上市', items: [
        { name: '百香綠茶', note: '', price: '$55' },
        { name: '優多百香綠茶', note: '', price: '$60' },
        { name: 'QQ百香綠茶', note: '', price: '$65' },
        { name: '鮮橙綠', note: '', price: 'M$50 / L$60' },
        { name: '優多鮮橙', note: '', price: '$75' },
        { name: '茶凍奶綠', note: '', price: 'M$45 / L$55' },
        { name: '粉條奶茶', note: '', price: 'M$45 / L$55' },
      ]},
      { title: '✨ 特調系列', items: [
        { name: '珍珠港式（滑滑）奶茶', note: '', price: 'M$50 / L$70' },
        { name: '港式（滑滑）奶茶', note: '', price: 'M$50 / L$70' },
        { name: '梅子奶茶', note: '', price: 'M$30 / L$40' },
        { name: '蜂蜜烏龍/綠茶', note: '', price: 'M$40 / L$50' },
        { name: '頂級可可', note: '', price: 'M$45 / L$55' },
        { name: '濃情巧克力', note: '', price: 'M$40' },
        { name: '蜜茶', note: '', price: 'M$30 / L$40' },
        { name: '情人茶', note: '', price: 'M$40 / L$50' },
        { name: '咖啡奶茶', note: '', price: 'M$35 / L$45' },
        { name: '芋香奶茶', note: '', price: 'M$40 / L$50' },
      ]},
      { title: '🍎 果醋系列', items: [
        { name: '蘋果醋', note: '', price: 'M$40 / L$50' },
        { name: '蘋果醋紅茶', note: '', price: 'M$45 / L$55' },
        { name: '蜂蜜蘋果醋', note: '', price: 'M$45 / L$60' },
        { name: '蘋果藍莓醋', note: '', price: 'M$50 / L$65' },
        { name: '蜂蜜藍莓醋', note: '', price: 'M$50 / L$65' },
      ]},
      { title: '🧋 奶茶系列', items: [
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
      ]},
      { title: '🍵 茗品系列', items: [
        { name: '烏龍綠茶', note: '', price: 'M$25 / L$30' },
        { name: '特級綠茶', note: '', price: 'M$25 / L$30' },
        { name: '錦蘭紅茶', note: '', price: 'M$25 / L$30' },
        { name: '極品青茶', note: '', price: 'M$25 / L$30' },
        { name: '原鄉四季', note: '', price: 'M$25 / L$30' },
        { name: '特選普洱', note: '', price: 'M$25 / L$30' },
        { name: '翡翠烏龍', note: '', price: 'M$25 / L$30' },
        { name: '嚴選高山茶', note: '', price: 'M$25 / L$30' },
      ]},
      { title: '🍋 季節鮮果系列', items: [
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
      ]},
      { title: '☕ 鮮奶 / 拿鐵系列', items: [
        { name: '茅綠茶凍拿鐵', note: '', price: '$65' },
        { name: '粉條紅茶拿鐵', note: '', price: 'M$50 / L$65' },
        { name: '珍珠鮮奶茶', note: '', price: 'M$45 / L$60' },
        { name: '珍珠紅茶拿鐵', note: '', price: 'M$45 / L$60' },
        { name: '頂級可可拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '鮮奶冬瓜', note: '', price: '$60' },
        { name: '粉圓鮮奶茶', note: '', price: 'M$45 / L$60' },
        { name: '芝麻拿鐵', note: '', price: '$65' },
      ]},
    ]
  },

  'comebuy': {
    name: 'COMEBUY', desc: '甘蔗青茶專賣', logo: 'images/logo-comebuy.png',
    menuImg: 'images/menu-comebuy.jpg',
    sweetness: ['無糖','微糖','半糖','少糖','正常'],
    ice: ['去冰','微冰','少冰','正常冰','溫','熱'],
    toppings: [
      { name: '珍珠', price: 5 }, { name: '波霸', price: 5 },
      { name: '椰果', price: 5 }, { name: '布丁', price: 5 },
    ],
    categories: [
      { title: '🍵 找好茶', items: [
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
      ]},
      { title: '🧋 找口感', items: [
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
      ]},
      { title: '🥛 找奶茶', items: [
        { name: '奶茶', note: '', price: 'M$50 / L$60' },
        { name: '奶綠', note: '', price: 'M$50 / L$60' },
        { name: '紅茶瑪奇朵', note: '', price: 'M$50 / L$60' },
        { name: '烏龍瑪奇朵', note: '', price: 'M$50 / L$60' },
        { name: '四季奶青', note: '', price: 'M$50 / L$60' },
        { name: '黃金烏龍奶茶', note: '', price: 'M$50 / L$60' },
        { name: '珍珠奶茶', note: '', price: 'M$50 / L$60' },
        { name: '阿華田', note: '', price: 'M$55 / L$65' },
      ]},
      { title: '🍋 找新鮮', items: [
        { name: '檸檬汁', note: '', price: 'M$55 / L$65' },
        { name: '金桔檸檬', note: '', price: 'M$55 / L$65' },
        { name: '檸檬梅汁', note: '', price: 'M$60 / L$75' },
        { name: '檸檬養樂多', note: '', price: 'M$65 / L$80' },
        { name: '8冰茶', note: '', price: 'M$50 / L$60' },
        { name: '柚子茶', note: '', price: 'M$50 / L$60' },
        { name: '鮮柚汁', note: '', price: 'M$60 / L$75' },
        { name: '葡萄柚多多', note: '', price: 'M$65 / L$80' },
      ]},
      { title: '☕ 紅茶拿鐵', items: [
        { name: '紅茶拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '綠茶拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '黃金烏龍拿鐵', note: '', price: 'M$60 / L$75' },
        { name: '阿草田拿鐵', note: '', price: 'M$65 / L$80' },
      ]},
      { title: '🍦 找冰淇淋', items: [
        { name: '冰淇淋紅茶', note: '', price: 'M$50 / L$60' },
        { name: '芒果青', note: '', price: 'M$50 / L$60' },
        { name: '荔枝烏龍', note: '', price: 'M$50 / L$60' },
      ]},
    ]
  },

};

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */
function getAvailableSizes(priceStr) {
  const hasM = /M\$/.test(priceStr);
  const hasL = /L\$/.test(priceStr);
  if (!hasM && !hasL) return { M: false, L: true }; // single/fixed price → L only
  return { M: hasM, L: hasL };
}

function parsePrice(priceStr, size) {
  if (size === 'M') { const m = priceStr.match(/M\$(\d+)/); if (m) return parseInt(m[1]); }
  if (size === 'L') { const l = priceStr.match(/L\$(\d+)/); if (l) return parseInt(l[1]); }
  const any = priceStr.match(/\$(\d+)/);
  return any ? parseInt(any[1]) : 0;
}

/* ══════════════════════════════════════════════
   SESSION
══════════════════════════════════════════════ */
const session = { code: null, name: null };

function initSession() {
  const saved = localStorage.getItem('drinks_session');
  if (saved) {
    try {
      const s = JSON.parse(saved);
      session.code = s.code; session.name = s.name;
      showSessionBanner();
      document.getElementById('sessionOverlay').classList.add('hidden');
    } catch { showSessionSetup(); }
  } else {
    showSessionSetup();
  }
}

function showSessionSetup() {
  document.getElementById('sessionOverlay').classList.remove('hidden');
}

function showSessionBanner() {
  const banner = document.getElementById('sessionBanner');
  banner.style.display = 'flex';
  document.getElementById('sessionBannerText').textContent =
    `👥 ${session.name}・密碼：${session.code}`;
}

function persistSession(name, code) {
  session.code = code; session.name = name;
  localStorage.setItem('drinks_session', JSON.stringify(session));
  showSessionBanner();
  document.getElementById('sessionOverlay').classList.add('hidden');
}

async function createSession(name, code) {
  const ref = db.collection('sessions').doc(code);
  const doc = await ref.get();
  if (doc.exists) {
    alert('此密碼已被使用，請換一組數字');
    return;
  }
  await ref.set({ createdBy: name, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  persistSession(name, code);
}

async function joinSession(name, code) {
  const ref = db.collection('sessions').doc(code);
  const doc = await ref.get();
  if (!doc.exists) {
    document.getElementById('joinHint').textContent = '找不到此密碼的訂單，請確認是否正確';
    return;
  }
  persistSession(name, code);
}

/* ══════════════════════════════════════════════
   STATE
══════════════════════════════════════════════ */
const state = {
  shopId: null,
  step: 1,
  cart: [],
  pendingItem: null,
};

/* ══════════════════════════════════════════════
   STEP NAVIGATION
══════════════════════════════════════════════ */
function goToStep(n) {
  state.step = n;

  ['panel1','panel2','panel3'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','prev');
    if (i + 1 === n) el.classList.add('active');
    else if (i + 1 < n) el.classList.add('prev');
  });

  [1,2,3].forEach(i => {
    const si = document.getElementById('si' + i);
    si.classList.remove('active','done');
    if (i === n) si.classList.add('active');
    else if (i < n) si.classList.add('done');
  });

  document.getElementById('fill1').style.width = n >= 2 ? '100%' : '0%';
  document.getElementById('fill2').style.width = n >= 3 ? '100%' : '0%';

  const btnBack = document.getElementById('btnBack');
  const btnNext = document.getElementById('btnNext');
  const cartPill = document.getElementById('cartPill');

  btnBack.style.display = n > 1 ? '' : 'none';

  if (n === 1) {
    btnNext.textContent = '開始點餐 →';
    btnNext.style.display = '';
    cartPill.classList.remove('visible');
  } else if (n === 2) {
    btnNext.style.display = 'none';
    updateCartPill();
  } else if (n === 3) {
    btnNext.style.display = 'none';
    cartPill.classList.remove('visible');
  }
}

/* ══════════════════════════════════════════════
   RENDER — STEP 1: MENU BOARD
══════════════════════════════════════════════ */
function renderStep1(shopId) {
  const data = menuData[shopId];
  const panel = document.getElementById('panel1');

  const imgSection = data.menuImg ? `
    <details class="menu-img-details">
      <summary class="menu-img-summary">
        📷 查看完整菜單圖片
        <span class="menu-img-toggle-arrow">▼</span>
      </summary>
      <img src="${data.menuImg}" alt="${data.name}菜單" class="menu-img-full" loading="lazy"
        onerror="this.parentElement.style.display='none'">
    </details>` : '';

  panel.innerHTML = `
    ${imgSection}
    <div class="menu-board">
      ${data.categories.map(cat => `
        <div class="board-section">
          <div class="board-section-title">${cat.title}</div>
          ${cat.items.map(item => `
            <div class="board-item">
              <span>
                <span class="board-item-name">${item.name}</span>
                ${item.note ? `<span class="board-item-note">・${item.note}</span>` : ''}
              </span>
              <span class="board-item-price">${item.price}</span>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>`;
}

/* ══════════════════════════════════════════════
   RENDER — STEP 2: ITEM SELECTION
══════════════════════════════════════════════ */
function renderStep2(shopId) {
  const data = menuData[shopId];
  const panel = document.getElementById('panel2');

  panel.innerHTML = `
    <div class="cat-chips-wrap" id="catChips">
      ${data.categories.map((cat, i) => `
        <button class="cat-chip ${i === 0 ? 'active' : ''}" data-idx="${i}">${cat.title}</button>`).join('')}
    </div>
    <div class="items-list" id="itemsList"></div>`;

  renderCategoryItems(shopId, 0);

  panel.querySelectorAll('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      panel.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderCategoryItems(shopId, parseInt(chip.dataset.idx));
    });
  });
}

function renderCategoryItems(shopId, catIdx) {
  const data = menuData[shopId];
  const list = document.getElementById('itemsList');
  list.innerHTML = data.categories[catIdx].items.map(item => `
    <div class="item-card">
      <div class="item-card-info">
        <div class="item-card-name">${item.name}</div>
        ${item.note ? `<div class="item-card-note">${item.note}</div>` : ''}
      </div>
      <div class="item-card-right">
        <div class="item-card-price">${item.price}</div>
        <button class="add-btn" data-name="${item.name}" data-note="${item.note}" data-price="${item.price}">＋</button>
      </div>
    </div>`).join('');

  list.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.pendingItem = { name: btn.dataset.name, note: btn.dataset.note, price: btn.dataset.price };
      renderStep3(shopId);
      goToStep(3);
    });
  });
}

/* ══════════════════════════════════════════════
   RENDER — STEP 3: CUSTOMIZATION
══════════════════════════════════════════════ */
function renderStep3(shopId) {
  const data = menuData[shopId];
  const item = state.pendingItem;
  const panel = document.getElementById('panel3');
  const sizes = getAvailableSizes(item.price);
  const defaultSize = sizes.L ? 'L' : 'M';
  const hasToppings = data.toppings && data.toppings.length > 0;

  panel.innerHTML = `
    <div class="customize-wrap">

      <div class="customize-item-hero">
        <div>
          <div class="customize-item-name">${item.name}</div>
          ${item.note ? `<div style="font-size:0.73rem;color:var(--text-light);margin-top:3px">${item.note}</div>` : ''}
        </div>
        <div class="customize-item-price">${item.price}</div>
      </div>

      <div class="customize-section">
        <label class="customize-label">🥤 杯型</label>
        <div class="size-toggle">
          <button class="size-btn${!sizes.M ? ' disabled' : ''}${defaultSize === 'M' ? ' selected' : ''}" data-size="M"${!sizes.M ? ' disabled' : ''}>中杯</button>
          <button class="size-btn${!sizes.L ? ' disabled' : ''}${defaultSize === 'L' ? ' selected' : ''}" data-size="L"${!sizes.L ? ' disabled' : ''}>大杯</button>
        </div>
      </div>

      <div class="customize-section">
        <label class="customize-label">🍬 甜度</label>
        <div class="option-pills" id="sweetnessPills">
          ${data.sweetness.map(s => `
            <button class="option-pill" data-val="${s}">${s}</button>
          `).join('')}
        </div>
        <p class="validate-msg" id="sweetMsg">請選擇甜度</p>
      </div>

      <div class="customize-section">
        <label class="customize-label">🧊 冰量</label>
        <div class="option-pills" id="icePills">
          ${data.ice.map(ic => `
            <button class="option-pill" data-val="${ic}">${ic}</button>
          `).join('')}
        </div>
        <p class="validate-msg" id="iceMsg">請選擇冰量</p>
      </div>

      ${hasToppings ? `
      <div class="customize-section">
        <label class="customize-label">➕ 加料</label>
        <div class="toppings-grid" id="toppingsGrid">
          ${data.toppings.map(t => `
            <div class="topping-row" data-name="${t.name}" data-price="${t.price}">
              <div class="topping-row-left">
                <div class="topping-check-icon"></div>
                <span class="topping-name">${t.name}</span>
              </div>
              <span class="topping-price">${t.price > 0 ? '+$' + t.price : '內含'}</span>
            </div>
          `).join('')}
        </div>
      </div>` : ''}

      <div class="customize-section">
        <label class="customize-label">📝 備註</label>
        <textarea class="notes-input" id="notesInput" placeholder="例：不加冰塊、少甜一點…"></textarea>
      </div>

      <div class="customize-section">
        <label class="customize-label">🔢 數量</label>
        <div class="qty-stepper">
          <button class="qty-btn" id="qtyMinus">－</button>
          <span class="qty-num" id="qtyNum">1</span>
          <button class="qty-btn" id="qtyPlus">＋</button>
        </div>
      </div>

      <button class="add-to-cart-btn" id="addToCartBtn">加入訂單</button>
    </div>`;

  state.pendingItem = {
    ...item,
    size: defaultSize,
    sweetness: null,
    ice: null,
    toppings: [],
    notes: '',
    qty: 1,
  };

  panel.querySelectorAll('.size-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.pendingItem.size = btn.dataset.size;
    });
  });

  panel.querySelectorAll('#sweetnessPills .option-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      panel.querySelectorAll('#sweetnessPills .option-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.pendingItem.sweetness = pill.dataset.val;
    });
  });

  panel.querySelectorAll('#icePills .option-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      panel.querySelectorAll('#icePills .option-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.pendingItem.ice = pill.dataset.val;
    });
  });

  if (hasToppings) {
    panel.querySelectorAll('.topping-row').forEach(row => {
      row.addEventListener('click', () => {
        row.classList.toggle('checked');
        const name = row.dataset.name;
        const price = parseInt(row.dataset.price);
        const icon = row.querySelector('.topping-check-icon');
        if (row.classList.contains('checked')) {
          state.pendingItem.toppings.push({ name, price });
          icon.textContent = '✓';
        } else {
          state.pendingItem.toppings = state.pendingItem.toppings.filter(t => t.name !== name);
          icon.textContent = '';
        }
      });
    });
  }

  let qty = 1;
  panel.querySelector('#qtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; panel.querySelector('#qtyNum').textContent = qty; state.pendingItem.qty = qty; }
  });
  panel.querySelector('#qtyPlus').addEventListener('click', () => {
    qty++; panel.querySelector('#qtyNum').textContent = qty; state.pendingItem.qty = qty;
  });

  panel.querySelector('#notesInput').addEventListener('input', e => {
    state.pendingItem.notes = e.target.value;
  });

  panel.querySelector('#addToCartBtn').addEventListener('click', () => {
    let valid = true;
    const sPills = panel.querySelector('#sweetnessPills');
    const iPills = panel.querySelector('#icePills');
    const sMsg = panel.querySelector('#sweetMsg');
    const iMsg = panel.querySelector('#iceMsg');

    if (!state.pendingItem.sweetness) {
      valid = false;
      sPills.classList.add('flash'); sMsg.classList.add('show');
      setTimeout(() => sPills.classList.remove('flash'), 400);
    } else { sMsg.classList.remove('show'); }

    if (!state.pendingItem.ice) {
      valid = false;
      iPills.classList.add('flash'); iMsg.classList.add('show');
      setTimeout(() => iPills.classList.remove('flash'), 400);
    } else { iMsg.classList.remove('show'); }

    if (!valid) return;

    const base = parsePrice(state.pendingItem.price, state.pendingItem.size);
    const toppingExtra = state.pendingItem.toppings.reduce((s, t) => s + t.price, 0);
    state.pendingItem.unitPrice = base + toppingExtra;
    state.cart.push({ ...state.pendingItem });
    updateCartPill();
    goToStep(2);
    const btn = panel.querySelector('#addToCartBtn');
    btn.textContent = '✓ 已加入訂單！';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.textContent = '加入訂單'; btn.style.background = ''; }, 1200);
  });
}

/* ══════════════════════════════════════════════
   CART
══════════════════════════════════════════════ */
function updateCartPill() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const total = state.cart.reduce((s, i) => s + (i.unitPrice || 0) * i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = total;
  document.getElementById('cartPill').classList.toggle('visible', count > 0);
}

function showSummary() {
  const overlay = document.getElementById('summaryOverlay');
  const itemsEl = document.getElementById('summaryItems');
  const memberRow = document.getElementById('summaryMemberRow');

  if (session.name && session.code) {
    memberRow.textContent = `${session.name} 的訂單・暗號：${session.code}`;
    memberRow.style.display = '';
  } else {
    memberRow.style.display = 'none';
  }

  itemsEl.innerHTML = state.cart.map(item => {
    const toppingStr = item.toppings.length ? item.toppings.map(t => t.name).join('、') : '無';
    const lineTotal = (item.unitPrice || 0) * item.qty;
    return `
      <div class="summary-item-row">
        <div class="summary-item-name">${item.name}</div>
        <div class="summary-item-detail">${item.size}｜${item.sweetness}｜${item.ice}｜加料：${toppingStr}</div>
        ${item.notes ? `<div class="summary-item-detail" style="color:var(--brown)">備註：${item.notes}</div>` : ''}
        <div class="summary-item-price-row">
          <span class="summary-item-qty">× ${item.qty}</span>
          <span class="summary-item-price">$${lineTotal}</span>
        </div>
      </div>`;
  }).join('');

  const grandTotal = state.cart.reduce((s, i) => s + (i.unitPrice || 0) * i.qty, 0);
  document.getElementById('summaryTotal').textContent = `$${grandTotal}`;
  overlay.classList.add('open');
}

/* ══════════════════════════════════════════════
   MODAL OPEN / CLOSE
══════════════════════════════════════════════ */
function openShop(shopId) {
  const data = menuData[shopId];
  state.shopId = shopId;
  state.cart = [];
  state.step = 0;

  document.getElementById('modalLogo').src = data.logo;
  document.getElementById('modalLogo').alt = data.name;
  document.getElementById('modalTitle').textContent = data.name;
  document.getElementById('modalDesc').textContent = data.desc;

  renderStep1(shopId);
  renderStep2(shopId);
  document.getElementById('panel3').innerHTML = '';

  document.getElementById('menuModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  goToStep(1);
}

function closeModal() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════
   EVENT LISTENERS
══════════════════════════════════════════════ */
document.querySelectorAll('.shop-card').forEach(card => {
  card.addEventListener('click', () => openShop(card.dataset.shop));
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('menuModal').addEventListener('click', e => {
  if (e.target === document.getElementById('menuModal')) closeModal();
});

document.getElementById('btnBack').addEventListener('click', () => {
  if (state.step > 1) goToStep(state.step - 1);
});

document.getElementById('btnNext').addEventListener('click', () => {
  if (state.step === 1) goToStep(2);
});

document.getElementById('cartPill').addEventListener('click', () => {
  if (state.cart.length > 0) showSummary();
});

document.getElementById('summaryConfirm').addEventListener('click', async () => {
  const btn = document.getElementById('summaryConfirm');
  btn.disabled = true; btn.textContent = '送出中…';
  try {
    if (session.code && session.name) {
      const cleanItems = state.cart.map(it => ({
        name: it.name, size: it.size, sweetness: it.sweetness,
        ice: it.ice, toppings: it.toppings, notes: it.notes || '',
        unitPrice: it.unitPrice || 0, qty: it.qty,
      }));
      await db.collection('sessions').doc(session.code).collection('orders').add({
        memberName: session.name,
        shopId: state.shopId,
        items: cleanItems,
        total: state.cart.reduce((s,i) => s + (i.unitPrice||0)*i.qty, 0),
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    alert('✅ 訂單已送出！');
    document.getElementById('summaryOverlay').classList.remove('open');
    closeModal();
    state.cart = [];
  } catch (e) {
    alert('送出失敗，請檢查網路後再試');
  }
  btn.disabled = false; btn.textContent = '確認送出訂單';
});

document.getElementById('summaryBack').addEventListener('click', () => {
  document.getElementById('summaryOverlay').classList.remove('open');
});

// Session overlay events
document.getElementById('stabCreate').addEventListener('click', () => {
  document.getElementById('stabCreate').classList.add('active');
  document.getElementById('stabJoin').classList.remove('active');
  document.getElementById('createPanel').classList.add('active');
  document.getElementById('joinPanel').classList.remove('active');
});

document.getElementById('stabJoin').addEventListener('click', () => {
  document.getElementById('stabJoin').classList.add('active');
  document.getElementById('stabCreate').classList.remove('active');
  document.getElementById('joinPanel').classList.add('active');
  document.getElementById('createPanel').classList.remove('active');
});

document.getElementById('createBtn').addEventListener('click', async () => {
  const name = document.getElementById('createName').value.trim();
  const code = document.getElementById('createCode').value.trim();
  if (!name) { alert('請輸入你的名字'); return; }
  if (!code || !/^\d+$/.test(code)) { alert('密碼請輸入純數字'); return; }
  const btn = document.getElementById('createBtn');
  btn.disabled = true; btn.textContent = '建立中…';
  try { await createSession(name, code); }
  catch (e) { alert('連線失敗，請稍後再試'); }
  btn.disabled = false; btn.textContent = '建立新訂單 →';
});

document.getElementById('joinBtn').addEventListener('click', async () => {
  const name = document.getElementById('joinName').value.trim();
  const code = document.getElementById('joinCode').value.trim();
  if (!name) { alert('請輸入你的名字'); return; }
  if (!code || !/^\d+$/.test(code)) { alert('密碼請輸入純數字'); return; }
  const btn = document.getElementById('joinBtn');
  btn.disabled = true; btn.textContent = '加入中…';
  try { await joinSession(name, code); }
  catch (e) { alert('連線失敗，請稍後再試'); }
  btn.disabled = false; btn.textContent = '加入訂單 →';
});

// Order manager
document.getElementById('orderMgrBtn').addEventListener('click', () => {
  showOrderManager();
});

let orderUnsub = null;

function showOrderManager() {
  if (!session.code) { alert('請先建立或加入訂單'); return; }
  const content = document.getElementById('orderMgrContent');
  content.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:20px">載入中…</p>';
  document.getElementById('orderMgrOverlay').classList.add('open');

  if (orderUnsub) orderUnsub();
  orderUnsub = db.collection('sessions').doc(session.code)
    .collection('orders').orderBy('time','asc')
    .onSnapshot(snap => {
      if (snap.empty) {
        content.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:20px">目前還沒有人送出訂單</p>';
        document.getElementById('orderMgrTotal').textContent = '$0';
        return;
      }
      let grandTotal = 0;
      const grouped = {};
      snap.docs.forEach(doc => {
        const d = doc.data();
        if (!grouped[d.memberName]) grouped[d.memberName] = [];
        grouped[d.memberName].push(d);
        grandTotal += d.total || 0;
      });

      content.innerHTML = Object.entries(grouped).map(([member, orders]) => {
        const memberTotal = orders.reduce((s,o) => s + (o.total||0), 0);
        return orders.map(order => `
          <div class="order-member-group">
            <div class="order-member-name">${member}（$${order.total || 0}）</div>
            ${(order.items||[]).map(it => `
              <div class="order-item-mini">
                <div>
                  <div>${it.name} × ${it.qty}</div>
                  <div class="order-item-detail">${it.size}｜${it.sweetness}｜${it.ice}${it.toppings && it.toppings.length ? '｜' + it.toppings.map(t=>t.name).join('、') : ''}</div>
                  ${it.notes ? '<div class="order-item-detail">備註：' + it.notes + '</div>' : ''}
                </div>
                <span style="font-weight:600;color:var(--brown)">$${(it.unitPrice||0)*it.qty}</span>
              </div>`).join('')}
          </div>`).join('');
      }).join('');

      document.getElementById('orderMgrTotal').textContent = `$${grandTotal}`;
    }, err => {
      content.innerHTML = '<p style="text-align:center;color:#c0392b;padding:20px">載入失敗，請確認網路連線</p>';
    });
}

document.getElementById('orderMgrClose').addEventListener('click', () => {
  document.getElementById('orderMgrOverlay').classList.remove('open');
  if (orderUnsub) { orderUnsub(); orderUnsub = null; }
});

document.getElementById('sessionChangeBtn').addEventListener('click', () => {
  localStorage.removeItem('drinks_session');
  showSessionSetup();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('summaryOverlay').classList.remove('open');
    closeModal();
  }
});

/* ══ INIT ══ */
initSession();
