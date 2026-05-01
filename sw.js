// This service worker allows the app to be installable
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Standard network-first fetch
    event.respondWith(fetch(event.request));
});
