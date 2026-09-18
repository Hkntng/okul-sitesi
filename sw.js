// Otomatik üretildi — sürümü her dağıtımda değiştir
const CACHE = 'okul-v2026-09-18v';
const URLS = [
  '/okul-sitesi/',
  '/okul-sitesi/1-carpanlar.html',
  '/okul-sitesi/2-sayinin-parmak-izi.html',
  '/okul-sitesi/5-ebob-ekok-secimi.html',
  '/okul-sitesi/benzerlik.html',
  '/okul-sitesi/cebir.html',
  '/okul-sitesi/cisimler.html',
  '/okul-sitesi/denklemler.html',
  '/okul-sitesi/donusum.html',
  '/okul-sitesi/ebob-ekok.html',
  '/okul-sitesi/esitsizlikler.html',
  '/okul-sitesi/index.html',
  '/okul-sitesi/karekok.html',
  '/okul-sitesi/karisik-tekrar.html',
  '/okul-sitesi/sinav.html',
  '/okul-sitesi/karnem.html',
  '/okul-sitesi/yanlis-kutum.html',
  '/okul-sitesi/soru-bankasi.js',
  '/okul-sitesi/nasil-calisilir.html',
  '/okul-sitesi/olasilik.html',
  '/okul-sitesi/ucgenler.html',
  '/okul-sitesi/uslu-ifadeler.html',
  '/okul-sitesi/veri-analizi.html',
  '/okul-sitesi/manifest.webmanifest',
  '/okul-sitesi/icons/icon-192.png',
  '/okul-sitesi/icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  // network-first: güncel içerik öncelikli, kopunca cache
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && e.request.method === 'GET' && new URL(e.request.url).origin === location.origin) {
      const cl = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cl));
    }
    return r;
  }).catch(() => caches.match(e.request)));
});
