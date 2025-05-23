self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('geo-notes').then((cache) => {
            return cache.addAll([
                'index.html',
                'public/service-worker.js',
                'public/manifest.json',
                'public/icons/icon-192.png',
                'public/icons/icon-512.png',
                'https://unpkg.com/leaflet/dist/leaflet.css',
                'https://unpkg.com/leaflet/dist/leaflet.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});