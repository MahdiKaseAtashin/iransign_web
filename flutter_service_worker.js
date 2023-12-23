'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
".git/config": "a9223ef3ee9997263a853e9d503218fa",
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
".git/index": "f48c9568ee0b76f2c4deed0c6b0367a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47ebfd3fe36617daee9c06b2ca42067d",
".git/logs/refs/heads/master": "47ebfd3fe36617daee9c06b2ca42067d",
".git/logs/refs/remotes/origin/HEAD": "362cb2402b4c3f5ce2dce0f503ae9b30",
".git/logs/refs/remotes/origin/master": "23656b69635b766c90dd90f379670b2e",
".git/objects/00/fa20cf82460ca68b73a519793f1dc45475316f": "856525d04895692a9cc53ecb1204154b",
".git/objects/14/35f155c59ce4860b8d02df805f0f705e806e28": "9c587e9839751edebb9a8257658f99c6",
".git/objects/4a/854c6572a40da584cf74aea327de6ecda3968a": "902061d52fd06cbd9c6bf0129b711de9",
".git/objects/54/4fc1fa87fd64afa95b4e84e66c32f01e536e2f": "335b13cf88f3d1cdbc622fc4a98d09d8",
".git/objects/65/5c7bba317252a1289aee40183ac6160b958c71": "fd7028b490acdbc6329da503ffc39c06",
".git/objects/6d/efcc1910a920a989492a5403191a0b55dd8381": "17ea4e8db8529f280d0da78dbe31bdbc",
".git/objects/6f/e8dc2773386dfd1e4838233ef5dc1358dc429a": "50dcd94c61e29345b95d32d09cf8cdac",
".git/objects/a3/9fc90c1da90e710b483674e2449ce4fe4363e7": "ed5569dbac7085339f5b251cf9fd834c",
".git/objects/b1/8cf7f85cd921f5ccd4e8b3967d45ab9dc7a0a0": "847941b7fd0fa88daff45d6be2cfdec1",
".git/objects/pack/pack-ba02bdeb9e512de3066e4a76c802d1113d183b5b.idx": "ab547e5ab2cbc4c7fdee3e2968343ca8",
".git/objects/pack/pack-ba02bdeb9e512de3066e4a76c802d1113d183b5b.pack": "95f38b001a813aab22956f92af25618e",
".git/packed-refs": "1c6ef1dd46acc53d160ef48651624697",
".git/refs/heads/master": "029552ccdfc18ba7fe77524c369742cc",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "029552ccdfc18ba7fe77524c369742cc",
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
"assets/fonts/MaterialIcons-Regular.otf": "349e699a7e3b54b0f5793f435fc5efe5",
"assets/NOTICES": "8545914768ab92486aaa1d1b9a9220df",
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
"index.html": "478ef11b94aca916690f9c6cd4d90b56",
"/": "478ef11b94aca916690f9c6cd4d90b56",
"main.dart.js": "70e3a669126af77a36925dddf9b0764f",
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
