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
    "revision": "0da9ca15415c6f930c58d57d608a542f"
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
    "url": "assets/js/12.c5ce0df8.js",
    "revision": "452471a4b7c2b411790942dd65001c3d"
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
    "url": "assets/js/17.17db7cf9.js",
    "revision": "8dd3d684d47f429d94cae9a0811dc2bc"
  },
  {
    "url": "assets/js/18.380fd87e.js",
    "revision": "54c7773ef2c5c87e98f1a78d02fe0e44"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.875bc687.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.ca626c22.js",
    "revision": "921c1048f51b3218a5824e09a0d8e790"
  },
  {
    "url": "assets/js/21.7bc49def.js",
    "revision": "f0c33614a8c8ed6cb9831156e83d1d40"
  },
  {
    "url": "assets/js/22.f8aa1d7d.js",
    "revision": "b8ac58c4d5bd4a6b440b6c1f039a6afe"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
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
    "url": "assets/js/app.3561b2d7.js",
    "revision": "99778ba0e8b71acf5f16992db6d6f7f4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "580c2d2e66294f5c6daca238229cda5f"
  },
  {
    "url": "design/index.html",
    "revision": "c4d53c8b3cc39363730a4f9b2bb1c94c"
  },
  {
    "url": "index.html",
    "revision": "870958d0c7e8be2167b3d05efe183de6"
  },
  {
    "url": "intro/index.html",
    "revision": "5fc377645987ac9d429928eaf32e5024"
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
    "revision": "9390891a3525579bf4bf1d3ae95d055c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a3bc55cb93995f16b812176252e9c7fb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a1723dfe9e2aa160d791a519c7e7d7ca"
  },
  {
    "url": "software/index.html",
    "revision": "af451b326a6e1ec0c908ac049e78589c"
  },
  {
    "url": "test/index.html",
    "revision": "42df105011d927243524277cbb6e9a9a"
  },
  {
    "url": "use cases/index.html",
    "revision": "f1250b97931a652bfcba7ed92650d5bf"
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
