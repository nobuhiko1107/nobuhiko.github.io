this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
<<<<<<< HEAD
        '/test.html',
        '/main.css',
        '/sw.js',
        '/test.jpg',
        
=======
      return cache.addAll([
        '/test/.html',
        '/sw.js',
        '/test.png'
>>>>>>> new2
      ]);
    })
  );
});