const CACHE_NAME = "odin-recipes-cache-v1";
const BASE_PATH = "/odin-recipes";

// Install event - cache all static assets
self.addEventListener("install", (event) => {
  self.skipWaiting();

  const urlsToCache = [
    BASE_PATH + "/",
    BASE_PATH + "/index.html",
    BASE_PATH + "/assets/css/reset.min.css",
    BASE_PATH + "/assets/css/index.min.css",
    BASE_PATH + "/assets/css/recipes.min.css",
    BASE_PATH + "/assets/js/scripts.min.js",
    BASE_PATH + "/assets/images/sel-roti/sel-roti.avif",
    BASE_PATH + "/assets/images/sel-roti/sel-roti.png",
    BASE_PATH + "/assets/images/momo/momo.avif",
    BASE_PATH + "/assets/images/momo/momo.png",
    BASE_PATH + "/assets/images/chow-mein/chow-mein.avif",
    BASE_PATH + "/assets/images/chow-mein/chow-mein.png",
    BASE_PATH + "/assets/favicon/favicon.ico",
    BASE_PATH + "/assets/favicon/apple-touch-icon.png",
    BASE_PATH + "/assets/favicon/favicon.svg",
    BASE_PATH + "/recipes/chow-mein.html",
    BASE_PATH + "/recipes/momo.html",
    BASE_PATH + "/recipes/sel-roti.html",
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
