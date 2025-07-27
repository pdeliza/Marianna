const CACHE_VERSION = 'marianna-v3';
const AUDIO_CACHE = 'audio-cache-v2';
const STATIC_CACHE = `static-${CACHE_VERSION}`;

// Recursos esenciales que deben estar disponibles offline
const ESSENTIAL_ASSETS = [
  '/',
  '/player.html',
  '/index.html',
  '/assets/css/styleplayer.css',
  '/assets/js/app.js',
  '/assets/js/auth-listener.js',
  '/assets/js/loginauth.js',
  '/images/icon-192x192.png',
  '/assets/img/favicon.jpg',
  '/assets/img/apple-touch-icon.jpg',
  '/assets/img/logex.jpg',
  '/assets/img/logo.jpg'
];

// Estrategia de cache para diferentes tipos de recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[Service Worker] Cacheando recursos esenciales');
        return cache.addAll(ESSENTIAL_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Limpieza de caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== AUDIO_CACHE) {
            console.log('[Service Worker] Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de fetch mejorada
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // 1. Manejo especial para archivos de audio
  if (url.pathname.includes('/music/')) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          // Intentar obtener la versión más reciente primero
          return fetch(event.request)
            .then(networkResponse => {
              // Actualizar el cache con la nueva versión
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => {
              // Fallback al cache si no hay conexión
              return cachedResponse || new Response('Audio no disponible offline', { 
                status: 404,
                statusText: 'Audio not cached'
              });
            });
        });
      })
    );
    return;
  }
  
  // 2. Para recursos estáticos: Cache First, luego red
  if (ESSENTIAL_ASSETS.some(asset => url.pathname.includes(asset))) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }
  
  // 3. Para otros recursos: Network First, luego cache
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // No cacheamos todo, solo lo esencial
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          return cachedResponse || new Response('Contenido no disponible offline', { 
            status: 404,
            statusText: 'Not available offline'
          });
        });
      })
  );
});

// Manejo de mensajes para background playback y notificaciones
self.addEventListener('message', (event) => {
  if (event.data.action === 'UPDATE_PLAYBACK') {
    const { title, artist, cover } = event.data;
    
    // Mostrar notificación solo si no está en primer plano
    self.clients.matchAll({ type: 'window' }).then(clients => {
      if (clients.length === 0) {
        self.registration.showNotification(title || 'Marianna Player', {
          body: artist || 'Reproduciendo en segundo plano',
          icon: cover || '/images/icon-192x192.png',
          badge: '/images/icon-72x72.png',
          tag: 'now-playing',
          silent: true,
          actions: [
            { action: 'play', title: '▶️ Reproducir' },
            { action: 'pause', title: '⏸ Pausar' },
            { action: 'next', title: '⏭ Siguiente' }
          ]
        });
      }
    });
  }
  
  // Manejo de acciones de notificación
  if (event.data.action === 'NOTIFICATION_ACTION') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          action: event.data.buttonAction,
          track: event.data.track
        });
      });
    });
  }
});

// Manejo de acciones de notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const action = event.action;
  const trackData = event.notification.data;
  
  if (action === 'play') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ action: 'play', track: trackData });
      });
    });
  } else if (action === 'pause') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ action: 'pause', track: trackData });
      });
    });
  } else if (action === 'next') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ action: 'next', track: trackData });
      });
    });
  } else {
    // Click en la notificación (sin botón específico)
    self.clients.openWindow('/player.html');
  }
});

// Background sync para intentar cachear audio cuando vuelva la conexión
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-audio') {
    console.log('[Service Worker] Intentando sincronizar audio...');
    // Aquí podrías implementar lógica para cachear audio pendiente
  }
});