// self.addEventListener('fetch',event=>{
    // console.log(event.request.url);
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/spiderman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/welverine.jpg',
    'js/app.js'




]

const APP_SHELL_INMUTABLE=[
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'css/style.css',
    'css/animate.css'
]

self.addEventListener('install',event=>{

    const cacheStatic = caches.open(STATIC_CACHE).then(cache=>
        cache.addAll(APP_SHELLS));
    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache=>
        cache.addAll(APP_SHELL_INMUTABLE));
        
    e.waitUntil(Promise.all([cacheStatic,cacheInmutable]));
    
});
// function limpiarcache(cacheName, numeroItems){
//     caches.open(cacheName)
//     .then(cache=>{
//         cache.keys()
//         .then(keys=>{
//             if(keys.length>numeroItems){
//                 cache.delete(keys[0]).
//                 then(limpiarcache(cacheName, numeroItems));
//             }
//         })
//     })
// }
// self.addEventListener('install',event=>{

//     const cacheProm = caches.open('estatico-v2')
//     .then(cache=>{
//     return cache.addAll([
//         '/',
//         '/index.html',
//         '/css/style.css',
//         '/img/main.jpg',
//         '/js/app.js',
//         '/img/beserk.jpg',
//     ])

//     })

    // const cacheInmutable = caches.open('inmutable-v1')
    // .then(cache=>{
    //     return cache.add(
    //     'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    //     );

    // });
    // event.waitUntil(cacheProm);
    // event.waitUntil(Promise.all([cacheProm, cacheInmutable]));
// })
// self.addEventListener('fetch', event=>{
    // Estrategia 2
    // const respuesta = caches.match(event.request)
    // .then(resp=>{
    //     if (resp) return resp;
    //     console.log('No exist', event.request.url);
        
    //     return fetch(event.request).then(newResp=>{
    //         caches.open('dinamico-v2')
    //         .then(cache=>{
    //             cache.put(event.request, newResp);
    //             limpiarcache('dinamico-v2',5);
    //         });

    //         return newResp.clone();
    //     })
    // })
    // event.respondWith(respuesta);
    // event.respondWith(caches.match(event.request));
    // Estrategia 3
    // const respuesta = caches.match(event.request)
    // .then(resp=>{
    //     cache.open('danamico-v1')
    //     .then(cache=>{
    //         cache.put(event.request, resp);
    //         limpiarcache('dinamico-v1',50);
    //     })
    //     return resp.clone();
    // }).catch(err=>{
    //     return caches.match(event.request);
    // })
    // event.respondWith(respuesta);

// Estrategia 4
    // if(event.request.url.includes('bootstrap')){
    //     return event.respondWith(caches.match(event.request));
    // }
    // const respuesta = caches.open('estatico-v2').then(cache=>{
    //      // se ejecuta primera esta línea
    //     fetch(event.request).then(newResp=>{
    //         cache.put(event.request, newResp);
    //     })
    //     // se ejecuta primera esta línea
    //     return cache.match(event.request);
    // })
    // event.respondWith(respuesta);

    // const respuesta = new Promise((resolve,reject)=>{
    //     let rechazada = false;
    //     const falloUnaVez=()=>{
    //         if(rechazada){
    //             if(/\.(png|jpg)$/i.test(event.request.url)){
    //                 resolve(caches.match('img/beserk.jpg'));
    //             }else{
    //                 reject('No se encontró la respuesta');
    //             }
    //         }
    //         else{
    //             rechazada = true;
    //         }
    //     }
    //     fetch(event.request).then(resp=>{
    //         if(resp.ok){
    //             resolve(resp);
    //         }
    //         else{
    //             falloUnaVez();
    //         }
    //     }).catch(falloUnaVez);
    //     caches.match(event.request).then(resp=>{
    //         if(resp.ok){
    //             resolve(resp);
    //         }
    //         else{
    //             falloUnaVez();
    //         }
    //     }).catch(falloUnaVez);
    // })
    // event.respondWith(respuesta);
// })


   
    
// })