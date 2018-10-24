importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c056f8ba3e6a5aeb7169.js",
    "revision": "4d2040cc9b954ff390268f568c256f8a"
  },
  {
    "url": "/_nuxt/layouts/default.4677a84e64943d7e9fd4.js",
    "revision": "a7b6d5940dc428402355dcf5cda1894d"
  },
  {
    "url": "/_nuxt/manifest.3a37a99b9470a7258b17.js",
    "revision": "fe331275af2662ed72fbd54c26a4ec48"
  },
  {
    "url": "/_nuxt/pages/contact.3517eff26067e94e4f2b.js",
    "revision": "212a55d7c1defa38fc5b172b011e4890"
  },
  {
    "url": "/_nuxt/pages/index.53f19384e46bfbcad0ee.js",
    "revision": "7700c2684959f3e068de70224b5930e3"
  },
  {
    "url": "/_nuxt/pages/raspberrypi.025f52368f471d84c210.js",
    "revision": "e65769d67ae88c1e5155c25cc420d7f6"
  },
  {
    "url": "/_nuxt/pages/technicalsupport.ad48b5f7e3acd1e8ddb6.js",
    "revision": "144b1017df7a7e086c7e188253c02785"
  },
  {
    "url": "/_nuxt/pages/website.2fc7bf988ca326cd1c69.js",
    "revision": "d0c4949c6def1d55aa0271b4026da8fb"
  },
  {
    "url": "/_nuxt/vendor.b8c4719190ee19fef0b3.js",
    "revision": "78d41ea47cd205c96afd0bbce22f7cf9"
  }
], {
  "cacheId": "rogue-designs-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://roguedesigns/.*'), workbox.strategies.networkFirst({"cacheName":"rogue-designs-cache","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":3600}}), 'GET')





