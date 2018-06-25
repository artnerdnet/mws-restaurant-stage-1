let CacheName = "mws-restaurant-v1";

// Install serviceWorker
// Pass promise check installation is correct & Update cache name
// addAll returns promise
// Caching the files after installing sw

self.addEventListener('install', function (event) {
  event.waitUntil( 
    caches.open('v1').then(function (cache) { 
      console.log("Opened cache");
      return cache.addAll([ 
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/data/restaurants.json",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg",
        "/img/restaurant-cutlery.png",
        "/img/1low.jpg",
        "/img/2low.jpg",
        "/img/3low.jpg",
        "/img/4low.jpg",
        "/img/5low.jpg",
        "/img/6low.jpg",
        "/img/7low.jpg",
        "/img/8low.jpg",
        "/img/9low.jpg",
        "/img/10low.jpg",
      ]);
    })
  );
});

// Wait to Activate serviceWorker until old cache is deleted
// .keys() gives promise with all cache names
// Use Promise.all() to wait on completion of all promises, before activation
// Map and delete cache 

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith("mws-") && cacheName != staticCacheName 
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Respond from the cache when needed
// Performs normal browser fetch, so results may come from cache
// Check if request origin is same as current origin to intercept route requests for same origin only
// Match request with cache
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (resp) {
      return resp || fetch(event.request)
    .then(function (response) {
      return caches.open('v1').then(function (cache) {
        cache.put(event.request, response.clone());
        return response;
        });
      });
    })
  );
});

