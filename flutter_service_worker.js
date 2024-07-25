'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae33b2a7e43365fff73a353796885537",
"assets/AssetManifest.bin.json": "935c9608ee85e01ce94336ba0ae1bb32",
"assets/AssetManifest.json": "bf706224cb97a36b6465f01d1c2cb751",
"assets/assets/animations/auth_guide.json": "d50824e33b800af50edc51bd29c6fed2",
"assets/assets/animations/auth_guide.lottie": "d5ee42c42a1c6251916a7f09067f1959",
"assets/assets/animations/avatar.riv": "165347f6942183a17bfc7e5bc4c2d92c",
"assets/assets/animations/avatar_cat.riv": "c05b9dcba1a069bfdd848010eea8e4ab",
"assets/assets/animations/big_wheel.riv": "3e0263d6069615e940e3a0130a97022d",
"assets/assets/animations/certificate_loading.riv": "aef4258766658daa36efe0cc0ab17555",
"assets/assets/animations/cool_loading.riv": "3e6b8ed295d52832475a34201403b86e",
"assets/assets/animations/cute_robot.riv": "764c955ac6395d2b7f55f0ab13ec7192",
"assets/assets/animations/hand_gestures.json": "7e0f629f7fbaed26e135936b8c60c20a",
"assets/assets/animations/harrison_face.riv": "1d8de8d47d3d2b7213d2fbcfa8421547",
"assets/assets/animations/not_found.riv": "e685a97f4743732995f3296ec7117537",
"assets/assets/animations/server_error.riv": "084884addf6a95f1685b258bbd3ec843",
"assets/assets/animations/wifi_error.riv": "3062bc1b9c2febe8ada76b88b344399e",
"assets/assets/fonts/IRANYekan_Light.ttf": "71c5a6f8f34814cf1a1eca64bc2e4edd",
"assets/assets/fonts/IRANYekan_Regular.ttf": "9928dd67b4dfd7c80c10fba302dcfe1b",
"assets/assets/fonts/NastaliqShekaste.ttf": "e63e9420856fe0c5c1e23a10512b216f",
"assets/assets/icons/animated/animated_icons.riv": "398e59c09cca206d0bab4f92780bc794",
"assets/assets/icons/animated/animated_icons_plus.riv": "cda2f64507bc85a5f801ad85b96f9b7c",
"assets/assets/icons/animated/pencil_icon.riv": "e0637779e2d81af96872dd9fa9f2d894",
"assets/assets/icons/static/chevrons_left.png": "8008a249844c2f203c5eb9bf8b28d0c1",
"assets/assets/icons/static/verified.png": "45ade4644a8cad65988ee754a05aaa34",
"assets/assets/images/app_logo.png": "c492ed39796f53309bdf6c3f15834359",
"assets/assets/images/app_logo_with_background.png": "fb33b49ec5bf15c61d96ed595f85c2b8",
"assets/assets/images/banner_auth_1.png": "e7d5455417e8f2470eb5581627d74627",
"assets/assets/images/banner_auth_2.png": "76cab27dc5758e7c1ee51a5ad1629982",
"assets/assets/images/banner_auth_3.png": "f52d629d731bd3d2d3962c545f3788d9",
"assets/assets/images/empty_workflow.png": "0cb3f525991ed3a65b53e6faaebf4daa",
"assets/assets/images/hand_five.png": "20f11499e40d95d64766d0cec75bdc68",
"assets/assets/images/hand_four.png": "88f56489627f0ddf99220051f7ec0999",
"assets/assets/images/hand_one.png": "9e0f17ad849b8959e057440b16bc5e94",
"assets/assets/images/hand_three.png": "f56c76ee827c3c3923623e9afe22182a",
"assets/assets/images/hand_two.png": "ab1223af50691463c8bbbaaa9ba16dd6",
"assets/assets/images/sample_man_face.png": "f2bf41851c336d92f4b2354298048c32",
"assets/assets/images/sample_women_face.png": "bbef1a2ddee92f3cfdb7594690084123",
"assets/assets/json/cities_authentication.json": "4b11f67911df3c197b61c2814da40007",
"assets/assets/json/states_authentication.json": "2c81cf67a92465744052cd3ce8da60b4",
"assets/FontManifest.json": "f3660e013f1f0fa30dafc4428c310848",
"assets/fonts/MaterialIcons-Regular.otf": "3023d3488d511b673e937af05181128c",
"assets/NOTICES": "615bf83e3e5252980b10da99f04b9ef9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "83e6ce55984346d98aca9e77522b2c2c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "301dc24b4921ad9bdab60dba5e66914f",
"icons/Icon-192.png": "56e0cdfcba4195104dce1fff2b1603e1",
"icons/Icon-512.png": "fa41887313ba4cee4e0bf8099fd64019",
"icons/Icon-maskable-192.png": "56e0cdfcba4195104dce1fff2b1603e1",
"icons/Icon-maskable-512.png": "fa41887313ba4cee4e0bf8099fd64019",
"index.html": "2ec4d3c96a52527a1ce406941908c2a6",
"/": "2ec4d3c96a52527a1ce406941908c2a6",
"main.dart.js": "265ac04c4adb1711db8428db6d64e38e",
"manifest.json": "5cc73e49f05ad867401ee63b7bbd5d6a",
"version.json": "f4bee0811b8ae90dd3263068631c68be"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
