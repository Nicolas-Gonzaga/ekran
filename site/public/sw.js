/* importScripts('/app/firebase-messaging-sw.js'); */

self.addEventListener('fetch', function (event) {
});

self.addEventListener("beforeinstallprompt", (event) => {
  fireTracking("Add to homescreen shown");
  //will not work for chrome, untill fixed
  event.userChoice.then(choiceResult => {
    fireTracking(`User clicked ${choiceResult}`);
  });
  //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
  window.removeEventListener(
    "beforeinstallprompt",
    fireAddToHomeScreenImpression
  );
});

//Track web app install by user
self.addEventListener("appinstalled", event => {
  fireTracking("PWA app installed by user!!! Hurray");
});

/* const cacheName = 'teste'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            cache.addAll([
                './',
                './index.html',
                './manifest.webmanifest',
                'assets/css/main.css',
                './contato.html',
                './sobre.html',
                './servicos.html',
                './Login_SignUp.html',
                'assets/css/nucleo-icons.css',
                'assets/css/black-dashboard.min.css',
                'assets/css/black-dashboard.css.map',
                'assets/css/black-dashboard.css',
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
} */