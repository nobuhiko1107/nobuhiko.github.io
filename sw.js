this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
        '/test.html',
        '/main.css',
        '/sw.js',
        '/test.jpg',
        
      ]);
    })
  );
});