// Service Worker untuk Sistem Auto Dokumen SK Ranggu
const CACHE_NAME = 'sk-ranggu-pwa-v3.12-drawer';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './version.json',
  './style.css?v=3.12-drawer',
  './app.js?v=3.12-drawer',
  './manifest.json',
  './favicon.ico',
  './Data_Murid_SK_Ranggu_Peperiksaan.csv',
  './assets/logo_skrg.png',
  './logo-sekolah-rasmi.png',
  './assets/logo_kpm.png',
  './assets/app_icon.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/icon-maskable-512x512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64x64.png',
  './icons/favicon-32x32.png'
];

// Pasang Service Worker & Simpan Fail Teras ke Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SK Ranggu SW] Menyimpan aset teras ke cache...');
      return cache.addAll(ASSETS_TO_CACHE.map(path => new Request(path, {cache: 'reload'})));
    }).then(() => self.skipWaiting())
  );
});

// Aktifkan & Bersihkan Cache Lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SK Ranggu SW] Memadamkan cache lama:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Dokumen dan kod: utamakan versi rangkaian, dengan sandaran luar talian.
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;
  if (url.origin !== self.location.origin) return;
  const isApp = request.mode === 'navigate' || /\.(?:html|js|css)$/.test(url.pathname) || url.pathname.endsWith('/version.json');
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (isApp) {
      try {
        const response = await fetch(request, {cache: 'no-cache'});
        if (response.ok) {
          await cache.put(request, response.clone());
          return response;
        }
        return (await cache.match(request)) || response;
      } catch (_) {
        return (await cache.match(request)) ||
          (request.mode === 'navigate' ? await cache.match('./index.html') : null) || Response.error();
      }
    }
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (_) { return Response.error(); }
  })());
});
