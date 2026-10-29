// ── VERİ ───────────────────────────────────────────────
// Demo verisi. Gerçek kullanımda bu iki liste yönetim panelinden (API) gelir.
const img = (id, w = 900, h) =>
  `https://images.unsplash.com/photo-${id}?w=${w}${h ? `&h=${h}` : ''}&q=80&auto=format&fit=crop${h ? '&crop=faces' : ''}`;

const P = {
  villaPool:  '1580587771525-78b9dba3b914',
  villaWhite: '1600596542815-ffad4c1539a9',
  villaPool2: '1613490493576-7fde63acd811',
  houseDusk:  '1568605114967-8130f3a36994',
  townhouse:  '1600047509807-ba8f99d2cdde',
  openLiving: '1600607687939-ce8a6c25118c',
  plants:     '1502672260266-1c1ef2d93688',
  bright:     '1560448204-e02f11c3d0e2',
  blueSofa:   '1493809842364-78817add7ffb',
  redChair:   '1522708323590-d24dbb6b0267',
  kitchen:    '1507089947368-19c1da9775ae',
  yellow:     '1586023492125-27b2c045efd7',
  gallery:    '1600210492486-724fe5c67fb0',
};

const AGENTS = [
  { id: 'murat',  name: 'Murat Eşiksoy', role: 'Kurucu · Broker',            area: 'Çankaya',               photo: '1560250097-0b93528c311a',  phone: '0532 000 00 01', note: 'Kavaklıdere ve Çayyolu\'nda 18 yıl. Konut ve ticari satışlar.' },
  { id: 'selin',  name: 'Selin Aras',    role: 'Kıdemli Danışman',           area: 'Gölbaşı',               photo: '1580489944761-15a19d654956', phone: '0532 000 00 02', note: 'İncek ve Kızılcaşar\'da villa ve müstakil. Kredi süreçleri.' },
  { id: 'hakan',  name: 'Hakan Tunç',    role: 'Kıdemli Danışman',           area: 'Etimesgut',             photo: '1472099645785-5658abf4ff4e', phone: '0532 000 00 03', note: 'Eryaman ve Bağlıca\'da aile konutları. Takas ve yeni proje.' },
  { id: 'deniz',  name: 'Deniz Yalçın',  role: 'Kiralama Danışmanı',         area: 'Çankaya',               photo: '1544005313-94ddf0286df2',  phone: '0532 000 00 04', note: 'Kiralık daireler, kiracı seçimi ve sözleşme süreçleri.' },
  { id: 'emre',   name: 'Emre Kaya',     role: 'Danışman',                   area: 'Yenimahalle',           photo: '1519085360753-af0119f7cbe7', phone: '0532 000 00 05', note: 'Batıkent ve Demetevler. Yatırımlık daire, kira getirisi analizi.' },
  { id: 'burak',  name: 'Burak Er',      role: 'Lüks Konut Danışmanı',       area: 'Gölbaşı · Çankaya',     photo: '1500648767791-00dcc994a43e', phone: '0532 000 00 06', note: 'Mogan ve İncek çevresinde havuzlu villa ve özel portföy.' },
];

const LISTINGS = [
  { ref: 'ES-1048', deal: 'satilik', tip: 'Villa',    ilce: 'Gölbaşı',     mah: 'İncek',        title: 'Havuzlu, bahçeli modern villa',        oda: '5+2', m2: 380, banyo: 4, kat: '3 katlı', yas: 2,  price: 28500000, agent: 'selin',
    photos: [P.villaPool, P.openLiving, P.kitchen],
    desc: '900 m² arsa içinde, güney cepheli, açık havuzlu villa. Zemin katta salon ve mutfak bahçeye açılıyor; üst katta 4 yatak odası, ebeveyn banyolu.',
    features: ['Açık havuz', 'Akıllı ev sistemi', '3 araçlık otopark', 'Yerden ısıtma', 'Güvenlikli site'] },
  { ref: 'ES-1042', deal: 'satilik', tip: 'Daire',    ilce: 'Çankaya',     mah: 'Çayyolu',      title: 'Site içinde ferah 3+1 daire',            oda: '3+1', m2: 145, banyo: 2, kat: '5. kat',  yas: 6,  price: 9750000,  agent: 'murat',
    photos: [P.bright, P.kitchen, P.gallery],
    desc: 'Metroya yürüme mesafesinde, havuzlu ve spor salonlu sitede, geniş balkonlu 3+1. Okullara ve alışveriş merkezine yakın.',
    features: ['Site içi', 'Kapalı otopark', 'Havuz', 'Asansör', 'Metroya 6 dk'] },
  { ref: 'ES-2017', deal: 'kiralik', tip: 'Daire',    ilce: 'Çankaya',     mah: 'Kavaklıdere',  title: 'Tunalı\'ya yürüme mesafesinde eşyalı 2+1', oda: '2+1', m2: 95,  banyo: 1, kat: '3. kat',  yas: 15, price: 32000,    agent: 'deniz',
    photos: [P.blueSofa, P.redChair, P.yellow],
    desc: 'Yeni yenilenmiş, tamamen eşyalı 2+1. Kafe ve restoranların arasında, sessiz bir sokakta. Kira süresi en az 1 yıl.',
    features: ['Eşyalı', 'Yenilenmiş', 'Asansör', 'Doğalgaz kombi'] },
  { ref: 'ES-1036', deal: 'satilik', tip: 'Müstakil', ilce: 'Gölbaşı',     mah: 'Kızılcaşar',   title: 'Şömineli, bahçeli müstakil ev',          oda: '4+1', m2: 220, banyo: 3, kat: 'Bahçe + 2 kat', yas: 9, price: 14900000, agent: 'selin',
    photos: [P.houseDusk, P.gallery, P.plants],
    desc: 'Ağaçlıklı 600 m² bahçe içinde, şömineli salonlu müstakil ev. Çatı katı çalışma odası olarak kullanılıyor.',
    features: ['Şömine', 'Bahçe 600 m²', 'Çatı katı', 'Kapalı garaj'] },
  { ref: 'ES-2023', deal: 'kiralik', tip: 'Daire',    ilce: 'Çankaya',     mah: 'Bahçelievler', title: 'Aydınlık 1+1, 7. Cadde\'ye 3 dakika',      oda: '1+1', m2: 60,  banyo: 1, kat: '2. kat',  yas: 20, price: 21000,    agent: 'deniz',
    photos: [P.plants, P.yellow, P.blueSofa],
    desc: 'Öğrenci ve genç çalışanlar için ideal, güneş alan 1+1. Beyaz eşyalı, aidat kiraya dahil.',
    features: ['Beyaz eşyalı', 'Aidat dahil', 'Ulaşıma yakın'] },
  { ref: 'ES-1029', deal: 'satilik', tip: 'Müstakil', ilce: 'Etimesgut',   mah: 'Bağlıca',      title: 'Yeni yapı tripleks, özel bahçeli',        oda: '4+1', m2: 260, banyo: 3, kat: 'Tripleks', yas: 0, price: 11250000, agent: 'hakan',
    photos: [P.townhouse, P.gallery, P.kitchen],
    desc: 'İskanı alınmış, sıfır tripleks. Ankastre mutfak, giyinme odası ve 2 araçlık otopark. Takasa açık.',
    features: ['Sıfır bina', 'İskanlı', 'Ankastre mutfak', 'Takasa açık'] },
  { ref: 'ES-1051', deal: 'satilik', tip: 'Villa',    ilce: 'Gölbaşı',     mah: 'Mogan',        title: 'Mogan Gölü manzaralı, sonsuzluk havuzlu villa', oda: '6+1', m2: 450, banyo: 5, kat: '3 katlı', yas: 3, price: 34750000, agent: 'burak',
    photos: [P.villaWhite, P.villaPool2, P.openLiving],
    desc: 'Göl manzarasına bakan teraslar, sonsuzluk havuzu ve misafir dairesiyle özel villa. Gösterim yalnız randevuyla.',
    features: ['Göl manzarası', 'Sonsuzluk havuzu', 'Misafir dairesi', 'Asansör', 'Jeneratör'] },
  { ref: 'ES-2031', deal: 'kiralik', tip: 'Daire',    ilce: 'Yenimahalle', mah: 'Batıkent',     title: 'Metroya yakın, geniş aile dairesi',       oda: '3+1', m2: 135, banyo: 2, kat: '7. kat',  yas: 8,  price: 28000,    agent: 'emre',
    photos: [P.yellow, P.bright, P.redChair],
    desc: 'Batıkent metrosuna 5 dakika, otoparklı ve oyun alanlı sitede 3+1. Ebeveyn banyolu, iki balkonlu.',
    features: ['Site içi', 'Otopark', 'Çocuk parkı', 'Metroya 5 dk'] },
  { ref: 'ES-1055', deal: 'satilik', tip: 'Daire',    ilce: 'Etimesgut',   mah: 'Eryaman',      title: 'Okullara yakın, bakımlı 3+1',             oda: '3+1', m2: 125, banyo: 2, kat: '4. kat',  yas: 11, price: 5450000,  agent: 'hakan',
    photos: [P.redChair, P.kitchen, P.blueSofa],
    desc: 'Eryaman\'da okul ve hastaneye yürüme mesafesinde, bakımlı 3+1. Krediye uygun, tapu hazır.',
    features: ['Krediye uygun', 'Asansör', 'Doğalgaz kombi', 'Okullara yakın'] },
  { ref: 'ES-2036', deal: 'kiralik', tip: 'Daire',    ilce: 'Yenimahalle', mah: 'Demetevler',   title: 'Yeni yenilenmiş 2+1, ofise uygun',        oda: '2+1', m2: 100, banyo: 1, kat: '1. kat',  yas: 25, price: 18500,    agent: 'emre',
    photos: [P.gallery, P.plants, P.yellow],
    desc: 'Ana caddeye yakın, tamamen yenilenmiş 2+1. Konut ya da büro olarak kiralanabilir.',
    features: ['Yenilenmiş', 'Büroya uygun', 'Ana caddeye yakın'] },
  { ref: 'ES-1060', deal: 'satilik', tip: 'Daire',    ilce: 'Çankaya',     mah: 'Ümitköy',      title: 'Bahçe katı, teraslı 4+1',                 oda: '4+1', m2: 190, banyo: 2, kat: 'Bahçe katı', yas: 4, price: 13400000, agent: 'murat',
    photos: [P.openLiving, P.kitchen, P.plants],
    desc: 'Özel kullanımlı bahçe ve terası olan, düşük katlı sitede 4+1. Evcil hayvan sahipleri için ideal.',
    features: ['Özel bahçe', 'Teras', 'Kapalı otopark', 'Düşük katlı site'] },
  { ref: 'ES-1063', deal: 'satilik', tip: 'Villa',    ilce: 'Çankaya',     mah: 'Oran',         title: 'Şehre bakan dubleks çatı villası',        oda: '5+1', m2: 310, banyo: 3, kat: 'Dubleks', yas: 5, price: 22800000, agent: 'burak',
    photos: [P.gallery, P.openLiving, P.bright],
    desc: 'Ankara silüetine bakan geniş teraslı dubleks. Rezidans hizmetleri, vale ve 7/24 güvenlik.',
    features: ['Şehir manzarası', 'Teras 80 m²', 'Rezidans hizmetleri', 'Vale'] },
];

// ── YARDIMCILAR ────────────────────────────────────────
const nf = new Intl.NumberFormat('tr-TR');
const tl = n => `${nf.format(Math.round(n))} ₺`;
const priceHtml = l => l.deal === 'kiralik' ? `${tl(l.price)} <small>/ ay</small>` : tl(l.price);
const agentOf = l => AGENTS.find(a => a.id === l.agent);
const roomsNum = oda => parseInt(oda, 10);
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* yok say */ } },
};

// ── YIL ────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── NAVBAR SCROLL ──────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBİL MENÜ ─────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => navMobile.classList.toggle('open'));
  navMobile.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMobile.classList.remove('open'))
  );
}

// ── İLANLAR: FİLTRE + LİSTE ────────────────────────────
const state = { deal: 'hepsi', ilce: 'hepsi', tip: 'hepsi', oda: 'hepsi', agent: '', sort: 'onerilen' };
let favs = store.get('esik-fav', []);

const listEl   = $('#listings');
const countEl  = $('#resultCount');
const emptyEl  = $('#emptyState');
const activeEl = $('#activeFilters');
const panel    = $('#searchPanel');

function filtered() {
  let out = LISTINGS.filter(l =>
    (state.deal === 'hepsi' || l.deal === state.deal) &&
    (state.ilce === 'hepsi' || l.ilce === state.ilce) &&
    (state.tip === 'hepsi' || l.tip === state.tip) &&
    (state.oda === 'hepsi' || (state.oda === '4' ? roomsNum(l.oda) >= 4 : roomsNum(l.oda) === +state.oda)) &&
    (!state.agent || l.agent === state.agent)
  );
  // Kira ve satış fiyatı kıyaslanamaz: önce satılıklar, sonra kiralıklar sıralanır
  const byDeal = (a, b) => (a.deal === b.deal ? 0 : a.deal === 'satilik' ? -1 : 1);
  if (state.sort === 'artan')  out = [...out].sort((a, b) => byDeal(a, b) || a.price - b.price);
  if (state.sort === 'azalan') out = [...out].sort((a, b) => byDeal(a, b) || b.price - a.price);
  if (state.sort === 'm2')     out = [...out].sort((a, b) => b.m2 - a.m2);
  return out;
}

function card(l, i) {
  const a = agentOf(l);
  const fav = favs.includes(l.ref);
  return `
  <article class="listing" style="animation-delay:${Math.min(i, 8) * 60}ms">
    <button class="listing-media" data-open="${l.ref}" aria-label="${esc(l.title)} detayları">
      <img src="${img(l.photos[0], 800)}" alt="${esc(l.title)}" loading="lazy" />
      <span class="badge ${l.deal}">${l.deal === 'satilik' ? 'Satılık' : 'Kiralık'}</span>
      <span class="photo-count"><i class="bi bi-images"></i> ${l.photos.length}</span>
    </button>
    <button class="fav" data-fav="${l.ref}" aria-pressed="${fav}" aria-label="Favorilere ekle">
      <i class="bi ${fav ? 'bi-heart-fill' : 'bi-heart'}"></i>
    </button>
    <div class="listing-body">
      <div class="listing-price">${priceHtml(l)}</div>
      <h3 class="listing-title"><button data-open="${l.ref}">${esc(l.title)}</button></h3>
      <p class="loc"><i class="bi bi-geo-alt"></i> ${l.mah}, ${l.ilce}</p>
      <ul class="specs">
        <li><i class="bi bi-door-open"></i> ${l.oda}</li>
        <li><i class="bi bi-arrows-angle-expand"></i> ${l.m2} m²</li>
        <li><i class="bi bi-droplet"></i> ${l.banyo} banyo</li>
      </ul>
      <div class="listing-agent">
        <img src="${img(a.photo, 80, 80)}" alt="" loading="lazy" />
        <span><b>${a.name}</b> · ${l.ref}</span>
      </div>
    </div>
  </article>`;
}

function renderActive() {
  const tags = [];
  if (state.ilce !== 'hepsi') tags.push(['ilce', state.ilce]);
  if (state.tip !== 'hepsi')  tags.push(['tip', state.tip]);
  if (state.oda !== 'hepsi')  tags.push(['oda', state.oda === '4' ? '4+1 ve üzeri' : `${state.oda}+1`]);
  if (state.agent)            tags.push(['agent', `Danışman: ${AGENTS.find(a => a.id === state.agent).name}`]);
  activeEl.innerHTML = tags.map(([k, v]) =>
    `<button class="af" data-clear="${k}">${esc(v)} <i class="bi bi-x-lg"></i></button>`).join('');
}

function render() {
  const items = filtered();
  listEl.innerHTML = items.map(card).join('');
  countEl.textContent = `${items.length} ilan`;
  emptyEl.hidden = items.length > 0;
  renderActive();
  document.querySelectorAll('#dealChips .chip').forEach(c => c.classList.toggle('active', c.dataset.deal === state.deal));
  panel.querySelectorAll('.search-tab').forEach(t => {
    const on = t.dataset.deal === state.deal;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on);
  });
  panel.ilce.value = state.ilce;
  panel.tip.value = state.tip;
  panel.oda.value = state.oda;
}

function goToListings() {
  document.getElementById('ilanlar').scrollIntoView({ behavior: 'smooth' });
}

// Arama paneli
panel.querySelectorAll('.search-tab').forEach(t =>
  t.addEventListener('click', () => { state.deal = t.dataset.deal; render(); }));
panel.addEventListener('submit', e => {
  e.preventDefault();
  Object.assign(state, { ilce: panel.ilce.value, tip: panel.tip.value, oda: panel.oda.value, agent: '' });
  render();
  goToListings();
});

// Çipler, sıralama, filtre temizleme
document.querySelectorAll('#dealChips .chip').forEach(c =>
  c.addEventListener('click', () => { state.deal = c.dataset.deal; render(); }));
$('#sortSelect').addEventListener('change', e => { state.sort = e.target.value; render(); });
activeEl.addEventListener('click', e => {
  const b = e.target.closest('[data-clear]');
  if (!b) return;
  const k = b.dataset.clear;
  state[k] = k === 'agent' ? '' : 'hepsi';
  render();
});
$('#resetFilters').addEventListener('click', () => {
  Object.assign(state, { deal: 'hepsi', ilce: 'hepsi', tip: 'hepsi', oda: 'hepsi', agent: '' });
  render();
});

// Kart tıklamaları: detay + favori
listEl.addEventListener('click', e => {
  const f = e.target.closest('[data-fav]');
  if (f) {
    const ref = f.dataset.fav;
    favs = favs.includes(ref) ? favs.filter(r => r !== ref) : [...favs, ref];
    store.set('esik-fav', favs);
    const on = favs.includes(ref);
    f.setAttribute('aria-pressed', on);
    f.innerHTML = `<i class="bi ${on ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
    return;
  }
  const o = e.target.closest('[data-open]');
  if (o) openListing(o.dataset.open);
});

// ── BÖLGELER ───────────────────────────────────────────
document.querySelectorAll('[data-count]').forEach(el => {
  const n = LISTINGS.filter(l => l.ilce === el.dataset.count).length;
  el.textContent = `${n} ilan`;
});
document.querySelectorAll('.region').forEach(r =>
  r.addEventListener('click', () => {
    Object.assign(state, { deal: 'hepsi', ilce: r.dataset.ilce, tip: 'hepsi', oda: 'hepsi', agent: '' });
    render();
    goToListings();
  }));

// ── EKİP ───────────────────────────────────────────────
const teamEl = $('#team');
teamEl.innerHTML = AGENTS.map(a => {
  const mine = LISTINGS.filter(l => l.agent === a.id);
  const sale = mine.filter(l => l.deal === 'satilik').length;
  const rent = mine.length - sale;
  return `
  <article class="member reveal">
    <div class="member-photo">
      <img src="${img(a.photo, 600, 720)}" alt="${a.name} portresi" loading="lazy" />
      <span class="member-area"><i class="bi bi-geo-alt"></i> ${a.area}</span>
    </div>
    <div class="member-body">
      <h3>${a.name}</h3>
      <p class="role">${a.role}</p>
      <p class="member-note">${a.note}</p>
      <p class="member-stats">${sale ? `${sale} satılık` : ''}${sale && rent ? ' · ' : ''}${rent ? `${rent} kiralık` : ''} ilan</p>
      <div class="member-actions">
        <button class="btn btn-ghost btn-sm" data-agent="${a.id}">İlanlarını gör</button>
        <a class="icon-btn" href="#" onclick="return false" aria-label="${a.name} telefon"><i class="bi bi-telephone"></i></a>
        <a class="icon-btn" href="#" onclick="return false" aria-label="${a.name} WhatsApp"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
  </article>`;
}).join('');
teamEl.addEventListener('click', e => {
  const b = e.target.closest('[data-agent]');
  if (!b) return;
  Object.assign(state, { deal: 'hepsi', ilce: 'hepsi', tip: 'hepsi', oda: 'hepsi', agent: b.dataset.agent });
  render();
  goToListings();
});

// İletişim formundaki danışman listesi
const agentSelect = $('#contactAgent');
AGENTS.forEach(a => agentSelect.insertAdjacentHTML('beforeend', `<option value="${a.id}">${a.name} · ${a.area}</option>`));

// ── İLAN DETAY ─────────────────────────────────────────
const modal = $('#listingModal');
let current = null;

function setPhoto(i) {
  $('#mImg').src = img(current.photos[i], 1400);
  $('#mImg').alt = `${current.title}, fotoğraf ${i + 1}`;
  $('#mThumbs').querySelectorAll('button').forEach((b, j) => b.classList.toggle('active', i === j));
}

function openListing(ref) {
  current = LISTINGS.find(l => l.ref === ref);
  if (!current) return;
  const l = current, a = agentOf(l);
  const badge = $('#mBadge');
  badge.className = `badge ${l.deal}`;
  badge.textContent = l.deal === 'satilik' ? 'Satılık' : 'Kiralık';
  $('#mRef').textContent = `İlan no ${l.ref}`;
  $('#mTitle').textContent = l.title;
  $('#mLoc').innerHTML = `<i class="bi bi-geo-alt"></i> ${l.mah}, ${l.ilce} / Ankara`;
  $('#mPrice').innerHTML = priceHtml(l);
  $('#mFacts').innerHTML = [['Oda', l.oda], ['Brüt', `${l.m2} m²`], ['Kat', l.kat], ['Bina yaşı', l.yas ? `${l.yas} yıl` : 'Sıfır']]
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  $('#mDesc').textContent = l.desc;
  $('#mFeatures').innerHTML = l.features.map(f => `<li>${esc(f)}</li>`).join('');
  $('#mAgent').innerHTML = `
    <img src="${img(a.photo, 120, 120)}" alt="" />
    <div><span>Sorumlu danışman</span><b>${a.name}</b><small>${a.role} · ${a.phone}</small></div>`;
  $('#mThumbs').innerHTML = l.photos.map((p, i) =>
    `<button aria-label="Fotoğraf ${i + 1}"><img src="${img(p, 300)}" alt="" /></button>`).join('');
  $('#mThumbs').querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => setPhoto(i)));
  setPhoto(0);
  modal.showModal();
  modal.scrollTop = 0;
}

$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
modal.addEventListener('keydown', e => {
  if (!current) return;
  const i = current.photos.findIndex(p => $('#mImg').src.includes(p));
  if (e.key === 'ArrowRight') setPhoto((i + 1) % current.photos.length);
  if (e.key === 'ArrowLeft')  setPhoto((i - 1 + current.photos.length) % current.photos.length);
});
$('#mAsk').addEventListener('click', () => {
  $('#contactListing').value = current.ref;
  agentSelect.value = current.agent;
  $('#contactMsg').value = `${current.ref} numaralı ilanı (${current.mah}, ${current.oda}) gezmek istiyorum. Uygun olduğum günler: `;
  modal.close();
  document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('#contactMsg').focus({ preventScroll: true }), 600);
});

// ── KREDİ HESAPLAYICI ──────────────────────────────────
const cPrice = $('#cPrice'), cDown = $('#cDown'), cTerm = $('#cTerm'), cRate = $('#cRate');
function calc() {
  const price = +cPrice.value, down = +cDown.value, n = +cTerm.value;
  const r = Math.max(0, parseFloat(String(cRate.value).replace(',', '.')) || 0) / 100;
  const loan = price * (1 - down / 100);
  const monthly = r ? loan * r / (1 - Math.pow(1 + r, -n)) : loan / n;
  $('#oPrice').textContent = tl(price);
  $('#oDown').textContent = `%${down} · ${tl(price * down / 100)}`;
  $('#oTerm').textContent = `${n} ay`;
  $('#rLoan').textContent = tl(loan);
  $('#rMonthly').textContent = tl(monthly);
  $('#rTotal').textContent = tl(monthly * n);
}
[cPrice, cDown, cTerm, cRate].forEach(el => el.addEventListener('input', calc));
calc();

// ── DEMO FORMLAR ───────────────────────────────────────
document.querySelectorAll('#valForm, #contactForm').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      const bad = !String(f.value).trim();
      f.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { form.querySelector('.invalid').focus(); return; }
    form.querySelector('.form-ok').hidden = false;
    form.reset();
  });
  form.addEventListener('input', e => e.target.classList.remove('invalid'));
});

// ── SCROLL REVEAL ──────────────────────────────────────
render();
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
