/* ============================================================
   NOVA Store — script.js
   Catálogo dinámico, carrito con LocalStorage, WhatsApp
   ============================================================ */

/* ── WhatsApp number (cambiar por el número real) ─────────── */
const WA_NUMBER = '595984955895'; // ← Cambiar número real aquí

/* ══════════════════════════════════════════════════════════
   CATÁLOGO DE PRODUCTOS
   ══════════════════════════════════════════════════════════ */
const PRODUCTS = [
  /* ── ROBLOX ────────────────────────────────────────────── */
  { id: 1,  name: '400 Robux',        category: 'Roblox',      price: 55000,  img: 'img/roblox.png',       logo: 'img/roblox.png' },
  { id: 2,  name: '800 Robux',        category: 'Roblox',      price: 85000,  img: 'img/roblox.png',       logo: 'img/roblox.png' },
  { id: 3,  name: '1.000 Robux',      category: 'Roblox',      price: 100000, img: 'img/roblox.png',       logo: 'img/roblox.png' },
  { id: 4,  name: '1.700 Robux',      category: 'Roblox',      price: 185000, img: 'img/roblox.png',       logo: 'img/roblox.png' },

  /* ── FREE FIRE ─────────────────────────────────────────── */
  { id: 5,  name: '100 Diamantes',    category: 'Free Fire',   price: 12000,  img: 'img/freefire.png',     logo: 'img/freefire.png' },
  { id: 6,  name: '310 Diamantes',    category: 'Free Fire',   price: 32000,  img: 'img/freefire.png',     logo: 'img/freefire.png' },
  { id: 7,  name: '520 Diamantes',    category: 'Free Fire',   price: 45000,  img: 'img/freefire.png',     logo: 'img/freefire.png' },
  { id: 8,  name: '1.080 Diamantes',  category: 'Free Fire',   price: 80000,  img: 'img/freefire.png',     logo: 'img/freefire.png' },
  { id: 9,  name: '2.180 Diamantes',  category: 'Free Fire',   price: 150000, img: 'img/freefire.png',     logo: 'img/freefire.png' },

  /* ── BRAWL STARS ───────────────────────────────────────── */
  { id: 10, name: '30 Gemas',         category: 'Brawl Stars', price: 14000,  img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 11, name: '80 Gemas',         category: 'Brawl Stars', price: 38000,  img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 12, name: '170 Gemas',        category: 'Brawl Stars', price: 75000,  img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 13, name: '360 Gemas',        category: 'Brawl Stars', price: 155000, img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 14, name: '950 Gemas',        category: 'Brawl Stars', price: 360000, img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 15, name: 'Brawl Pass',       category: 'Brawl Stars', price: 135000, img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 16, name: 'Brawl Pass Plus',  category: 'Brawl Stars', price: 165000, img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },
  { id: 17, name: 'Brawl Pass Pro',   category: 'Brawl Stars', price: 210000, img: 'img/brawlstars.png',   logo: 'img/brawlstars.png' },

  /* ── CLASH ROYALE ──────────────────────────────────────── */
  { id: 18, name: 'Pass Royale',      category: 'Clash Royale', price: 65000,  img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },
  { id: 19, name: '500 Gemas',        category: 'Clash Royale', price: 45000,  img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },
  { id: 20, name: '1.200 Gemas',      category: 'Clash Royale', price: 45000,  img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },
  { id: 21, name: '2.500 Gemas',      category: 'Clash Royale', price: 70000,  img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },
  { id: 22, name: '6.500 Gemas',      category: 'Clash Royale', price: 185000, img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },
  { id: 23, name: '14.000 Gemas',     category: 'Clash Royale', price: 360000, img: 'img/clashroyale.png',  logo: 'img/clashroyale.png' },

  /* ── FORTNITE ──────────────────────────────────────────── */
  { id: 24, name: '1.000 V-Bucks',    category: 'Fortnite',    price: 75000,  img: 'img/fortnite.png',     logo: 'img/fortnite.png' },
  { id: 25, name: '2.400 V-Bucks',    category: 'Fortnite',    price: 185000, img: 'img/fortnite.png',     logo: 'img/fortnite.png' },
  { id: 26, name: '4.500 V-Bucks',    category: 'Fortnite',    price: 255000, img: 'img/fortnite.png',     logo: 'img/fortnite.png' },
  { id: 27, name: '12.500 V-Bucks',   category: 'Fortnite',    price: 580000, img: 'img/fortnite.png',     logo: 'img/fortnite.png' },

  /* ── PLAYSTATION ───────────────────────────────────────── */
  { id: 28, name: 'PS Plus Essential',category: 'PlayStation', price: 85000,  img: 'img/playstation.png',  logo: 'img/playstation.png' },
  { id: 29, name: 'PS Plus Extra',    category: 'PlayStation', price: 110000, img: 'img/playstation.png',  logo: 'img/playstation.png' },
  { id: 30, name: 'PS Plus Deluxe',   category: 'PlayStation', price: 125000, img: 'img/playstation.png',  logo: 'img/playstation.png' },
  { id: 31, name: 'Gift Card USD 10', category: 'PlayStation', price: 95000,  img: 'img/playstation.png',  logo: 'img/playstation.png' },

  /* ── XBOX ──────────────────────────────────────────────── */
  { id: 32, name: 'Game Pass Essential',category: 'Xbox',      price: 40000,  img: 'img/xbox.png',         logo: 'img/xbox.png' },
  { id: 33, name: 'Game Pass Premium', category: 'Xbox',       price: 65000,  img: 'img/xbox.png',         logo: 'img/xbox.png' },
  { id: 34, name: 'Game Pass Ultimate',category: 'Xbox',       price: 125000, img: 'img/xbox.png',         logo: 'img/xbox.png' },

  /* ── STEAM ─────────────────────────────────────────────── */
  { id: 35, name: 'Gift Card USD 10', category: 'Steam',       price: 90000,  img: 'img/steam.png',        logo: 'img/steam.png' },
  { id: 36, name: 'Gift Card USD 20', category: 'Steam',       price: 175000, img: 'img/steam.png',        logo: 'img/steam.png' },

  /* ── STREAMING ─────────────────────────────────────────── */
  { id: 37, name: 'Netflix Mensual',  category: 'Streaming',   price: 25000,  img: 'img/netflix.png',      logo: 'img/netflix.png' },
  { id: 38, name: 'Spotify Individual',category:'Streaming',   price: 45000,  img: 'img/spotify.png',      logo: 'img/spotify.png' },
  { id: 39, name: 'Spotify Familiar', category: 'Streaming',   price: 75000,  img: 'img/spotify.png',      logo: 'img/spotify.png' },
  { id: 40, name: 'Disney+ Mensual',  category: 'Streaming',   price: 35000,  img: 'img/disney.png',       logo: 'img/disney.png' },
];

/* Category colors for badges */
const CAT_COLORS = {
  'Roblox':       '#00B2FF',
  'Free Fire':    '#FF6B35',
  'Brawl Stars':  '#FFDD00',
  'Clash Royale': '#00C2FF',
  'Fortnite':     '#00F0FF',
  'PlayStation':  '#0070D1',
  'Xbox':         '#52B043',
  'Steam':        '#C6D4DF',
  'Streaming':    '#E50914',
};

/* ── Fallback SVG placeholder per category ─────────────────── */
function getPlaceholderSVG(category) {
  const color = CAT_COLORS[category] || '#7C3AED';
  const initials = category.slice(0, 2).toUpperCase();
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="400" height="225" fill="#0B1020"/><rect width="400" height="225" fill="${color}" fill-opacity="0.08"/><text x="200" y="100" font-family="Arial" font-size="56" font-weight="bold" fill="${color}" fill-opacity="0.35" text-anchor="middle" dominant-baseline="middle">${initials}</text><text x="200" y="148" font-family="Arial" font-size="16" fill="${color}" fill-opacity="0.5" text-anchor="middle">${category}</text></svg>`)}`;
}

/* ══════════════════════════════════════════════════════════
   CART STATE (LocalStorage)
   ══════════════════════════════════════════════════════════ */
let cart = [];

function loadCart() {
  try {
    const stored = localStorage.getItem('nova_cart');
    cart = stored ? JSON.parse(stored) : [];
  } catch {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem('nova_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ══════════════════════════════════════════════════════════
   FORMAT PRICE
   ══════════════════════════════════════════════════════════ */
function formatPrice(num) {
  return 'Gs ' + num.toLocaleString('es-PY');
}

/* ══════════════════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════════════════ */
let toastTimer = null;

function showToast(msg, icon = 'fa-check-circle') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<i class="fas ${icon}"></i>${msg}`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════════════════════════
   RENDER CART SIDEBAR
   ══════════════════════════════════════════════════════════ */
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const count = getCartCount();
  const total = getCartTotal();

  /* Badge */
  const badge = document.getElementById('cartBadge');
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent = count;

  /* Subtotal / total */
  document.getElementById('cartSubtotal').textContent = formatPrice(total);
  document.getElementById('cartTotal').textContent = formatPrice(total);

  /* Items */
  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <p>Tu carrito está vacío</p>
      </div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='${getPlaceholderSVG(item.category)}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════════
   CART ACTIONS
   ══════════════════════════════════════════════════════════ */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${product.name} agregado al carrito`, 'fa-shopping-cart');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  showToast('Carrito vaciado', 'fa-trash');
}

/* Open / close cart sidebar */
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════
   WHATSAPP ORDER
   ══════════════════════════════════════════════════════════ */
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío', 'fa-exclamation-circle');
    return;
  }

  const lines = cart.map(item =>
    `• ${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}`
  ).join('\n');

  const total = getCartTotal();

  const msg = `🛒 *Pedido NOVA Store*\n\nHola, quiero realizar este pedido:\n\n${lines}\n\n*Total: ${formatPrice(total)}*\n\n¿Cómo procedo con el pago?`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* Buy Now (single product) */
function buyNow(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const msg = `🛒 *Quiero comprar en NOVA Store*\n\nProducto: ${product.name}\nPrecio: ${formatPrice(product.price)}\n\n¿Cómo procedo con el pago?`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* ══════════════════════════════════════════════════════════
   CATALOG RENDER
   ══════════════════════════════════════════════════════════ */
let activeCategory = 'Todos';
let searchQuery = '';
let sortOrder = 'default';

function getCategories() {
  const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  return cats;
}

function getFilteredProducts() {
  let list = [...PRODUCTS];

  /* Category filter */
  if (activeCategory !== 'Todos') {
    list = list.filter(p => p.category === activeCategory);
  }

  /* Search */
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  /* Sort */
  if (sortOrder === 'asc')  list.sort((a, b) => a.price - b.price);
  if (sortOrder === 'desc') list.sort((a, b) => b.price - a.price);

  return list;
}

function renderCategoryTabs() {
  const container = document.getElementById('catTabs');
  const cats = getCategories();
  container.innerHTML = cats.map(cat => `
    <button class="cat-tab ${cat === activeCategory ? 'active' : ''}"
            onclick="setCategory('${cat}')">${cat}</button>
  `).join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const products = getFilteredProducts();

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>No se encontraron productos para "<strong>${searchQuery}</strong>"</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(p => `
    <div class="product-card reveal">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}"
             onerror="this.src='${getPlaceholderSVG(p.category)}'">
        <span class="card-category-badge" style="background:rgba(0,0,0,0.55);border:1px solid ${CAT_COLORS[p.category] || '#7C3AED'}33;color:${CAT_COLORS[p.category] || '#C084FC'}">${p.category}</span>
        <img class="card-game-logo" src="${p.logo}" alt="${p.category}"
             onerror="this.style.display='none'">
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-price">${formatPrice(p.price)}</div>
        <div class="card-actions">
          <button class="btn btn-cart" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Agregar
          </button>
          <button class="btn btn-buy" onclick="buyNow(${p.id})">
            <i class="fab fa-whatsapp"></i> Comprar
          </button>
        </div>
      </div>
    </div>
  `).join('');

  /* Re-observe for reveal animation */
  observeReveal();
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategoryTabs();
  renderProducts();
}

/* ══════════════════════════════════════════════════════════
   FAQ ACCORDION
   ══════════════════════════════════════════════════════════ */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      /* Close all */
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      /* Toggle clicked */
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ══════════════════════════════════════════════════════════
   HEADER SCROLL EFFECT
   ══════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
  });
}

/* ══════════════════════════════════════════════════════════
   MOBILE NAV DRAWER
   ══════════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('navDrawer');

  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  /* Close on link click */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════ */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCart();
  renderCategoryTabs();
  renderProducts();
  initFAQ();
  initHeader();
  initMobileNav();
  observeReveal();

  /* Search input */
  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderProducts();
  });

  /* Sort select */
  document.getElementById('sortSelect').addEventListener('change', e => {
    sortOrder = e.target.value;
    renderProducts();
  });

  /* Cart overlay close */
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  /* Scroll top */
  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
