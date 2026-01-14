self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("motion-mastery-v1").then(cache => {
      return cache.addAll([
        "/motion-mastery/",
        "/motion-mastery/index.html",
        "/motion-mastery/badge.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
