//Esto mejora la experiencia porque responde más rápido y ademàs hace que las aplicaciones funcionen offline

const VERSION = 'v1';

//Cuando se instale el sw
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

//cuando se haga un fetch
self.addEventListener('fetch', event => {
  const request = event.request;
  // get - no interesa otros métodos HTTP
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache. Después de responder ràpido al usuario desde la cache, inmediatemnte la actualizo
  //desde el servidor para asegurar que tenga la última versión de los datos en la caché para la pròxima petición
  event.waitUntil(updateCache(request));
});

async function precache() {
    //Esto nos da una instancia de una cache
  const cache = await caches.open(VERSION);
  //hay qu incluir '/' porque a pesar que retorne lo mismo que index.html se acceden distinto y son peticiones distintas
  return cache.addAll([
    /* '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny_512kb.mp4', */
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  //si ya està mapeado este mismo request en la cache...
  const response = await cache.match(request);
  //sino me retorna undefined. Entonces si no está en caché retorno con el fetch yendo al servidor
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}