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
    "revision": "c6d849b7559ec6a01f2a4d79848303cb"
  },
  {
    "url": "assets/css/0.styles.4569ed92.css",
    "revision": "b43a6cba6df18da255aa421982644d45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.50c58bc4.js",
    "revision": "0138d605233e96f67e342e47b9c4b3aa"
  },
  {
    "url": "assets/js/16.d9cfeece.js",
    "revision": "c4198733324dbed8797b6c14c8c0fb70"
  },
  {
    "url": "assets/js/17.4025fda4.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
  },
  {
    "url": "assets/js/18.c7f0ebc9.js",
    "revision": "2745f57730a34d4bb57e37d0fda886f6"
  },
  {
    "url": "assets/js/19.d60a9fe8.js",
    "revision": "03d60396a765f8c27b58e452eaca684e"
  },
  {
    "url": "assets/js/2.07058db7.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.c9aae4d4.js",
    "revision": "293a2a0e598b0b52f38ffa6d1cb1e541"
  },
  {
    "url": "assets/js/21.d31944cc.js",
    "revision": "3cb3684f88ebdfd2c9b22ed80e007755"
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
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.816c1092.js",
    "revision": "7dbb6b7029f9b64d711eafb458400bb9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dd1f788cbff288147d31c9fc24196f9e"
  },
  {
    "url": "design/index.html",
    "revision": "90672002ed82494f956634327f61a927"
  },
  {
    "url": "index.html",
    "revision": "aeebd95515bf13169f21e6ed3b4d406d"
  },
  {
    "url": "intro/index.html",
    "revision": "76d9dfa6a387417dcb82c867e51ed44e"
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
    "revision": "f3ca2590e326defc459489a5973fc365"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "249ccbf1d95f7f4c182e7abb078c001c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9d1007eed13528a26acef831c3f1512a"
  },
  {
    "url": "software/index.html",
    "revision": "82abde5e636cccf9916a37ddecf65de4"
  },
  {
    "url": "test/index.html",
    "revision": "f170f4f504df09fab57d18c5996c96ba"
  },
  {
    "url": "use cases/index.html",
    "revision": "8c63f121657cf2c9e46e3be5925e946f"
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
