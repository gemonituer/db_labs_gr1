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
    "revision": "0d4c676058dfb764c610e48001161ab4"
  },
  {
    "url": "assets/css/0.styles.4569ed92.css",
    "revision": "b43a6cba6df18da255aa421982644d45"
  },
  {
    "url": "assets/img/app_user_table.d449d783.png",
    "revision": "d449d7839eb825f695b2105598db82d6"
  },
  {
    "url": "assets/img/create_user_1.bbbd972f.png",
    "revision": "bbbd972f7d5a837e31723addb1aafdb0"
  },
  {
    "url": "assets/img/create_user_2.62bb5dbf.png",
    "revision": "62bb5dbf7a8532ae25b0c4726f654735"
  },
  {
    "url": "assets/img/create_user_3.a4054ee1.png",
    "revision": "a4054ee16dc4d2b217380187a7a4643c"
  },
  {
    "url": "assets/img/delete_user_1.6292a7bc.png",
    "revision": "6292a7bc63bd4d5c978ebad8b76190ed"
  },
  {
    "url": "assets/img/delete_user_2.fe2d775a.png",
    "revision": "fe2d775a283410a2449ad6e9fbe3b795"
  },
  {
    "url": "assets/img/get_all_users.b94d7697.png",
    "revision": "b94d769724a08b89dfe64f163a02d33a"
  },
  {
    "url": "assets/img/get_user_by_id_1.b2698731.png",
    "revision": "b26987317be22327170f6d7c98c704c9"
  },
  {
    "url": "assets/img/get_user_by_id_2.e37ee0a6.png",
    "revision": "e37ee0a6563e1dc0ede770cddf514205"
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
    "url": "assets/img/update_user_1.7a3db650.png",
    "revision": "7a3db650d6932d80b42aeb71fc2ba1e9"
  },
  {
    "url": "assets/img/update_user_2.f4f3a4b9.png",
    "revision": "f4f3a4b96786d125bae28b19a395db16"
  },
  {
    "url": "assets/img/update_user_3.c11026e9.png",
    "revision": "c11026e9f8479cf70a12ae0be71cab0d"
  },
  {
    "url": "assets/js/10.6db29c85.js",
    "revision": "8c2ae717064859491bcc824cf7ad1616"
  },
  {
    "url": "assets/js/11.ae9ae219.js",
    "revision": "87565f34b00c7a3601d3e5f6fb559965"
  },
  {
    "url": "assets/js/12.b1468cfc.js",
    "revision": "bb210cb631338f01208b3f3b75d136c2"
  },
  {
    "url": "assets/js/13.19ed8822.js",
    "revision": "edf4fec2d1df0f157dbb8eef07d64ade"
  },
  {
    "url": "assets/js/14.44983906.js",
    "revision": "1bd420b7e15f74f76cf6701816b0d06b"
  },
  {
    "url": "assets/js/15.65030050.js",
    "revision": "1450219a44efd18789e9b3547f4532e9"
  },
  {
    "url": "assets/js/16.5fa7a41f.js",
    "revision": "76834b8a042455cb90864f87442dc857"
  },
  {
    "url": "assets/js/17.dd6e67c1.js",
    "revision": "816ae8e3655a7132149e707debf94a20"
  },
  {
    "url": "assets/js/18.0e57df46.js",
    "revision": "75ea37651fdb1f812307632592e8a41f"
  },
  {
    "url": "assets/js/19.0dba96a7.js",
    "revision": "527e8f63380dc307ac1062a415b241f0"
  },
  {
    "url": "assets/js/2.2a44fc3c.js",
    "revision": "5f3001a5ae0939e22f16a14030b62dae"
  },
  {
    "url": "assets/js/20.e439569f.js",
    "revision": "5f98e42e2acfe3fc4b66b81b889bda4a"
  },
  {
    "url": "assets/js/21.982f3bd0.js",
    "revision": "68453075635ab13549124f124ec7272b"
  },
  {
    "url": "assets/js/22.dc810e9c.js",
    "revision": "b255fba7cd8f332b24babf2ca14b82e6"
  },
  {
    "url": "assets/js/23.f5a5bca9.js",
    "revision": "f577ab1083c1eea55d79eb7f38090178"
  },
  {
    "url": "assets/js/24.97ef2e41.js",
    "revision": "9cc60b00a0a91d6d346e8d645c432309"
  },
  {
    "url": "assets/js/26.6dec4e79.js",
    "revision": "57e940fd028f64683c665bc0f029fdf5"
  },
  {
    "url": "assets/js/3.4d3fa9ae.js",
    "revision": "0c574e2c8ada852eaedcbf0b1cf7a9a4"
  },
  {
    "url": "assets/js/4.a897aabd.js",
    "revision": "7624a982ea8d681c895b08e693a303a8"
  },
  {
    "url": "assets/js/5.326ba5e0.js",
    "revision": "80f30f0fade8a992862c5b44c8a70fd0"
  },
  {
    "url": "assets/js/6.20957c03.js",
    "revision": "d666bc23dc41137f5759cfd2d59b03d1"
  },
  {
    "url": "assets/js/7.dc65073d.js",
    "revision": "150274c8155336ce55c65d305f07b8d6"
  },
  {
    "url": "assets/js/8.4e6744f6.js",
    "revision": "8a5400a8d70751cbf9253aab0dccde5b"
  },
  {
    "url": "assets/js/9.5f82a72a.js",
    "revision": "5d10b3c0800f6aef7226ff05cf9c66dd"
  },
  {
    "url": "assets/js/app.49fa6e1d.js",
    "revision": "fd1ed697cbb100c46436736e5a006c7a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d2cb78ab1bd2d4d8ced6eeba48b960c7"
  },
  {
    "url": "design/index.html",
    "revision": "fce4dbba5bdbd7c59fd20ecdc1c569ae"
  },
  {
    "url": "index.html",
    "revision": "a904f7abb3bbcdb5cdb3ba0c38a0073e"
  },
  {
    "url": "intro/index.html",
    "revision": "7628e0c76f5524967142f1ea70f5e793"
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
    "revision": "7e10a2e966e388015df0d0abff41fa83"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "571828040ab826ffece56a7bf8d9aa63"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3be41213185340f0de0adc53a7a69738"
  },
  {
    "url": "software/index.html",
    "revision": "b1de573b6c658c9ac718a6aeefd18d22"
  },
  {
    "url": "test/index.html",
    "revision": "0f4c82d0bc7b59298932ce5321e0d8a2"
  },
  {
    "url": "use cases/index.html",
    "revision": "c9a12b506bca1468ca23e00b73e3e504"
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
