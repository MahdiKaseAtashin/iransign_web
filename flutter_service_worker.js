'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3b0258cf8127f87b1c934651235c348e",
".git/config": "b9207b58cd28c52c797a4c38977d15ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9010260415f9d9eeb4abd0398ab6b5c0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49f7581b479f0aab09369ffce68af28f",
".git/logs/refs/heads/master": "49f7581b479f0aab09369ffce68af28f",
".git/logs/refs/remotes/origin/master": "cf268c60befc2fd4161996ae53c7e791",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/47178fe2cebcae693f54c2b978e764ef8c0d34": "04c239c2d8f5dd5b075e17a36f6cee5e",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2e/d873c3c80c1bf3fed33b53020e3c662b40c616": "66ad37f2af7bec2154ea68c822311420",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/40/39ad6479ea2e551df071eaf3a6901196af6dd2": "c7265f855f33a0f41fe66208bdbd7210",
".git/objects/41/65e4480ff228577e8a020eef6b68b13245a7fa": "767130eb0767786a5f9f6b587b67377e",
".git/objects/41/6a88c934b27b3d75e487a3ccabaa4ecd8bc974": "46b73a901b437517258c1ad06f36b1d6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/e6a94fbf21863e804e441975579d6715492d24": "dfe8454d63bc3ca59d33e2baedecfc29",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4e/06415d9243aa3012100351f031364a07dc5d84": "1a919b541dc65af8543ba0471bde9bce",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5f/1103b2ad33fde42411f091aba647e2a4a986eb": "9149b69cfe4bbe42f451675ba3d15081",
".git/objects/76/a32f7e69cfb45677a99e9d07993457d417bb30": "a25db4ebe59fb94cf730136af1f25fe4",
".git/objects/84/c3025139fdfdec7c8671af4db183a6fdd8c3da": "87a7e4bc0565b0515d0f68e239fff47b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/cf1e46c9c595ffe0babe7230b35f8844a8169e": "e24ceae9794b3d23a92fd9eea383309e",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/9e/557ab76d6fa753abeb98cf67096b05e5ae0009": "b164e878aab812a12d373a0d8e355a54",
".git/objects/a3/84e88f11d290b2cedcfae76708ce302870d5b0": "c8afb497bdbc2d7fde470e0434fe3ddc",
".git/objects/ab/f660de54f98e78cecb73db27ff82b6e3ca82a0": "6572c1a9f0ca640b9197e42ea2bedf2c",
".git/objects/ac/2e6ff3a0e485ca21e8e113fff4aae5c907b509": "61e986c45fa83255179154c77f695783",
".git/objects/ac/d8d2d02c2d70f69516ae11b3cbaec8acb2fc62": "6566aae517d595254ff14e8a3cbaec23",
".git/objects/ae/36707fe1ef95f4fec3af81f9933a8205a77528": "e9d9e8bd912291cfb4716923633a4007",
".git/objects/b3/d471adebfa7b91e9ddbeb7f5cfc10910d57540": "9a8600f6e65e5408b79232b5bbd98928",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/8afdbf437b2b03034f092cdd51b0c348a3455e": "ea5f21eb9e87bb62a0c30cf2265a5b54",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/a2d8b88e82807d5beba9ee065daf8f20d23eb5": "4504dc9fcd0b6f43200ae92b108cbcbb",
".git/objects/f0/334329b0657456aea7d33f6d990a5cc102c821": "079eff9767a398630f3e96a827bded03",
".git/refs/heads/master": "d7010766b12aaf8b0a197e669529f0d3",
".git/refs/remotes/origin/master": "d7010766b12aaf8b0a197e669529f0d3",
"assets/AssetManifest.bin": "c53abf019df08f60040843f4d2a2df64",
"assets/AssetManifest.bin.json": "90e6758e2b65207abcbc249e03ae31a8",
"assets/AssetManifest.json": "a6f398b0a96b4556cd0af0675f82d047",
"assets/assets/fonts/IRANYekan_Light.ttf": "71c5a6f8f34814cf1a1eca64bc2e4edd",
"assets/assets/fonts/IRANYekan_Regular.ttf": "9928dd67b4dfd7c80c10fba302dcfe1b",
"assets/assets/images/app_logo.png": "ccae355ce293dbfbab8e9691d7d93f8f",
"assets/assets/images/face_authentication_icon.png": "fc74129c34cf2c097331d02a74f442ba",
"assets/assets/images/hand_five.png": "304f16aac9794f2bea8f293e1e3e7907",
"assets/assets/images/hand_four.png": "905bb7ec5e976c9ee4c4a5d1bf71cf96",
"assets/assets/images/hand_one.png": "24b5bf37ba0e3141b168ba8dc80957be",
"assets/assets/images/hand_three.png": "a9866b0cf1daf49be9a3aae015b66e34",
"assets/assets/images/hand_two.png": "70a34bc4d08011bfa7a4e90229369e18",
"assets/assets/json/cities_etemad.json": "df58b865a0d95732ff93d702ee319d15",
"assets/assets/json/states_etemad.json": "b369b9cfef11430ed3625d97fecb92b3",
"assets/FontManifest.json": "c66f317876c41a9cb9218856f166a502",
"assets/fonts/MaterialIcons-Regular.otf": "7cb784baca09cffb7652b11a819f25b0",
"assets/NOTICES": "76c3e2ef44a28b6cc54f7aa0f4aaccf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d4dffb16e8a91c5e3f7ac019981355f",
"/": "6d4dffb16e8a91c5e3f7ac019981355f",
"main.dart.js": "2382c08a4694ecbc67bcefec175205c7",
"manifest.json": "c8f3437af73dcee8d01feae2b0cdf01b",
"version.json": "184d8144843d37e11e88da7adc5858a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
