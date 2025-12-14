const CACHE_VERSION = "v1";
const CACHE_NAME = `odin-recipes-${CACHE_VERSION}`;
const BASE_PATH = "/odin-recipes";

const ASSETS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/assets/css/reset.css`,
  `${BASE_PATH}/assets/css/index.css`,
  `${BASE_PATH}/assets/css/recipes.css`,
  `${BASE_PATH}/assets/images/chow-mein.png`,
  `${BASE_PATH}/assets/images/momo.png`,
  `${BASE_PATH}/assets/images/sel-roti.png`,
  `${BASE_PATH}/assets/favicon/site.webmanifest`,
  `${BASE_PATH}/assets/favicon/apple-touch-icon.png`,
  `${BASE_PATH}/assets/favicon/favicon.svg`,
  `${BASE_PATH}/recipes/chow-mein.html`,
  `${BASE_PATH}/recipes/momo.html`,
  `${BASE_PATH}/recipes/sel-roti.html`,
];

// Install event - cache all static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
