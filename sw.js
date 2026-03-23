
const cacheName = 'barcode-pwa-v1';
const assets = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './html5-qrcode.min.js'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});
