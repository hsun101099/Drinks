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
        title: '🧋 奶茶系列',
        items: [
          { name: '奶茶', note: '經典不敗', price: '$45' },
          { name: '珍珠奶茶', note: '必點首選', price: '$55' },
          { name: '燕麥奶茶', note: '植物奶選項', price: '$60' },
        ]
      },
      {
        title: '🍑 鮮果茶系列',
        items: [
          { name: '芒果綠茶', note: '夏日限定', price: '$65' },
          { name: '草莓紅茶', note: '酸甜好喝', price: '$65' },
          { name: '百香果茶', note: '熱帶水果風味', price: '$60' },
          { name: '水蜜桃烏龍', note: '清新甜香', price: '$65' },
        ]
      },
      {
        title: '☕ 咖啡系列',
        items: [
          { name: '黑糖珍珠拿鐵', note: '人氣網紅款', price: '$75' },
          { name: '香草拿鐵', note: '甜蜜順口', price: '$70' },
          { name: '美式咖啡', note: '提神必備', price: '$55' },
        ]
      },
      {
        title: '🥤 特調系列',
        items: [
          { name: '多多綠', note: '清爽益生菌', price: '$55' },
          { name: '芋頭牛奶', note: '濃郁芋香', price: '$65' },
          { name: '紅豆牛奶', note: '台灣傳統風味', price: '$60' },
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
        title: '🍵 精選青茶',
        items: [
          { name: '高山烏龍', note: '台灣高山茶葉', price: '$60' },
          { name: '凍頂烏龍', note: '傳統焙火工藝', price: '$65' },
          { name: '東方美人茶', note: '蜜香獨特', price: '$75' },
          { name: '四季春', note: '輕盈花香', price: '$55' },
        ]
      },
      {
        title: '🧊 冷萃系列',
        items: [
          { name: '冷萃高山烏龍', note: '8小時低溫萃取', price: '$80' },
          { name: '冷萃東方美人', note: '風味更細膩', price: '$85' },
          { name: '冷萃四季春', note: '清爽無苦澀', price: '$75' },
        ]
      },
      {
        title: '🥛 茶拿鐵',
        items: [
          { name: '烏龍拿鐵', note: '茶香奶香完美結合', price: '$70' },
          { name: '東方美人拿鐵', note: '蜜香濃郁', price: '$80' },
          { name: '焙茶拿鐵', note: '溫潤焙火香', price: '$75' },
        ]
      },
      {
        title: '✨ 季節限定',
        items: [
          { name: '桂花烏龍', note: '季節限定，花香迷人', price: '$75' },
          { name: '玫瑰四季春', note: '浪漫花茶', price: '$70' },
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
        title: '🐄 鮮乳系列',
        items: [
          { name: '鮮奶茶', note: '每日新鮮牧場直送', price: '$65' },
          { name: '鮮奶綠茶', note: '清爽鮮奶風味', price: '$65' },
          { name: '鮮奶烏龍', note: '茶奶完美平衡', price: '$70' },
        ]
      },
      {
        title: '🧋 珍珠鮮奶系列',
        items: [
          { name: '珍珠鮮奶茶', note: '必點經典', price: '$75' },
          { name: '黑糖珍珠鮮奶', note: '台灣黑糖手工製', price: '$80' },
          { name: '芋圓鮮奶茶', note: '手工芋圓Q彈', price: '$80' },
        ]
      },
      {
        title: '🍓 鮮果鮮奶',
        items: [
          { name: '草莓鮮奶', note: '新鮮草莓現打', price: '$85' },
          { name: '芒果鮮奶', note: '愛文芒果當季', price: '$85' },
          { name: '香蕉鮮奶', note: '濃郁香蕉風味', price: '$75' },
        ]
      },
      {
        title: '⭐ 人氣推薦',
        items: [
          { name: '波霸鮮奶茶', note: '超大波霸必點', price: '$85' },
          { name: '布丁鮮奶茶', note: '手工雞蛋布丁', price: '$80' },
          { name: '薑汁撞奶', note: '台式傳統創意', price: '$75' },
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
              <div class="item-note">${item.note}</div>
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

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
