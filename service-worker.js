const dataCacheName = 'currencyData-v1';
const cacheName = 'currencyPWA-1';
const filesToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/images/icon.png'
];

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log(`[ServiceWorker] Caching app shell`);
      return cache.addAll(filesToCache);
    })
  )
})
