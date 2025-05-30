/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec896188f57525314b62630c115f2e95"
  },
  {
    "url": "assets/css/0.styles.4569ed92.css",
    "revision": "b43a6cba6df18da255aa421982644d45"
  },
  {
    "url": "assets/img/relational_schema.2cab3001.png",
    "revision": "2cab300127018e6fe2156e8067ada13d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.30b887d3.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.6c846316.js",
    "revision": "366e7d8192fef804fad5797fd4d32999"
  },
  {
    "url": "assets/js/13.e56cff29.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.e77244b9.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.5c650a86.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.c4e30524.js",
    "revision": "fdfae401644f2790fb916a0122e1fa28"
  },
  {
    "url": "assets/js/17.ffbcb744.js",
    "revision": "0428f6d368ceab5f9834e146c17df129"
  },
  {
    "url": "assets/js/18.c9f8be3f.js",
    "revision": "e7b1e3408970bb45ddcc037fb1058cbf"
  },
  {
    "url": "assets/js/19.aebefa05.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.875bc687.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.3ceefefd.js",
    "revision": "649b0f8168aa35b7b1eae90c011874c3"
  },
  {
    "url": "assets/js/21.7bc49def.js",
    "revision": "f0c33614a8c8ed6cb9831156e83d1d40"
  },
  {
    "url": "assets/js/22.567efc23.js",
    "revision": "19ce9cb276aa91e877a63f140e6ebda8"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.bbd0c54e.js",
    "revision": "cc663d8c2a28224db4da41933d3899b3"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.11bf8a91.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.be72248a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.c2160e41.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.1f827184.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.ecbf9340.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.84b0a7cb.js",
    "revision": "23a25b64f45c7fce0109ebe3142d3d08"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b3eeb9f154f10133ce76791d8f0f2b6b"
  },
  {
    "url": "design/index.html",
    "revision": "3763c79fd0a6bf94d0529abae2377c9e"
  },
  {
    "url": "index.html",
    "revision": "084eb25b26cfc9163c3d01386b3dd2b8"
  },
  {
    "url": "intro/index.html",
    "revision": "566d0fe94660536c983233c86f90bdf4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "105493b69e3fff66faa9d5f3419f71b2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2866946a1ff2cea7c6aec9fb5326d4b4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "478e768c40c48c055cf4a821dcc886eb"
  },
  {
    "url": "software/index.html",
    "revision": "dc7ace95156752a920399a022dd5cb3d"
  },
  {
    "url": "test/index.html",
    "revision": "4c5a56dafcd68277f6eaec2dae59a7c1"
  },
  {
    "url": "use cases/index.html",
    "revision": "0d7451eaae4b508ca8b756202030156c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
