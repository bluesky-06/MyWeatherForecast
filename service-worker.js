// Minimal service worker — required by Chrome/Android for a page to qualify
// as an installable PWA. It doesn't cache anything or work offline; it just
// passes every request straight through to the network.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
