const CACHE_NAME = "odin-recipes-cache-v1";

// Install event - cache all static assets
self.addEventListener("install", (event) => {
  self.skipWaiting();

  const urlsToCache = [
    "/",
    "/index.html",
    "/assets/css/reset.css",
    "/assets/css/index.css",
    "/assets/css/recipes.css",
    "/assets/js/scripts.js",
    "/assets/images/chow-mein.png",
    "/assets/images/momo.png",
    "/assets/images/sel-roti.png",
    "/assets/favicon/favicon.ico",
    "/assets/favicon/apple-touch-icon.png",
    "/assets/favicon/favicon.svg",
    "/recipes/chow-mein.html",
    "/recipes/momo.html",
    "/recipes/sel-roti.html",
  ];

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
      .catch(() => {
        // Offline - no cache available
      }),
  );
});
