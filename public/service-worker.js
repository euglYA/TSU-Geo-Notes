self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('geo-notes').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/app.js',
                '/manifest.json',
                '/icons/icon-192.png',
                '/icons/icon-512.png',
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
