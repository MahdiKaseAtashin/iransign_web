'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0077846871ee7dc0aecbbc459d191a12",
"assets/AssetManifest.bin.json": "4abf58acede0d9fc7add23e806154ded",
"assets/AssetManifest.json": "7df27a6ec0871e31417b7540fc56dcda",
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
"assets/assets/fonts/IRANYekan_Regular.ttf": "9928dd67b4dfd7c80c10fba302dcfe1b",
"assets/assets/icons/animated/animated_icons.riv": "398e59c09cca206d0bab4f92780bc794",
"assets/assets/icons/animated/animated_icons_plus.riv": "cda2f64507bc85a5f801ad85b96f9b7c",
"assets/assets/icons/animated/pencil_icon.riv": "e0637779e2d81af96872dd9fa9f2d894",
"assets/assets/icons/static/chevrons_left.png": "8008a249844c2f203c5eb9bf8b28d0c1",
"assets/assets/icons/static/verified.png": "45ade4644a8cad65988ee754a05aaa34",
"assets/assets/images/app_logo.png": "ec83a1dc2d6d60564c41e5d8f2a7ab10",
"assets/assets/images/app_logo_with_background.png": "cb8227842e63307437c43ea03d458089",
"assets/assets/images/banner_auth_1.png": "70411977cfc5d4b29ddbc4a2cc5978e9",
"assets/assets/images/banner_auth_2.png": "a56a541548b5e23d8e1d8af329b70e1f",
"assets/assets/images/banner_auth_3.png": "61936bb2fbdd6445636b7ef7c185ea85",
"assets/assets/images/banner_auth_4.png": "d21146678e0be4e4d1463ce66cbb5414",
"assets/assets/images/banner_hand_auth_1.png": "76cab27dc5758e7c1ee51a5ad1629982",
"assets/assets/images/banner_hand_auth_2.png": "f52d629d731bd3d2d3962c545f3788d9",
"assets/assets/images/empty_workflow.png": "0cb3f525991ed3a65b53e6faaebf4daa",
"assets/assets/images/hand_five.png": "20f11499e40d95d64766d0cec75bdc68",
"assets/assets/images/hand_four.png": "88f56489627f0ddf99220051f7ec0999",
"assets/assets/images/hand_one.png": "9e0f17ad849b8959e057440b16bc5e94",
"assets/assets/images/hand_three.png": "f56c76ee827c3c3923623e9afe22182a",
"assets/assets/images/hand_two.png": "ab1223af50691463c8bbbaaa9ba16dd6",
"assets/assets/images/no_internet.png": "2e9e9ba67beb2cddfaee2225eccafff1",
"assets/assets/images/placeholder.png": "2b32722209f150e30f78b336de7b9a8c",
"assets/assets/images/sample_man_face.png": "f2bf41851c336d92f4b2354298048c32",
"assets/assets/images/sample_women_face.png": "bbef1a2ddee92f3cfdb7594690084123",
"assets/assets/json/cities_authentication.json": "df58b865a0d95732ff93d702ee319d15",
"assets/assets/json/states_authentication.json": "b369b9cfef11430ed3625d97fecb92b3",
"assets/FontManifest.json": "566539725a7a55140d0199a4da49d073",
"assets/fonts/MaterialIcons-Regular.otf": "41ab5a9bee4baf157ef41641209f17b9",
"assets/NOTICES": "268008e9163762e87d69e61dd32c51f8",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b99113ba4816d7a58e4cdbf16ac9d5b5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f5ffd4e8cd247cd1c5259796b6b3368b",
"icons/Icon-192.png": "5e8921baa96db1029ed0a1e78f0ebb50",
"icons/Icon-512.png": "0b42cb06dc875147a6c85767e9a5e786",
"icons/Icon-maskable-192.png": "32826beec3ae487e330dc763c4cd71d3",
"icons/Icon-maskable-512.png": "23fb8eb6c513d9eb902c75749a3d3bf7",
"index.html": "7c85402345ac7b3f57a022900984aa91",
"/": "7c85402345ac7b3f57a022900984aa91",
"main.dart.js": "317d3dd09d980156208eae0400eacbe0",
"manifest.json": "0448bdfcd248ddcae34e5df728aa83cb",
"pwa.hrgateway.irsign-v1.1.1.rar": "7948ab3f544a90d514b4c788ee192807",
"splash/img/branding-1x.png": "7188bcc64543819c226ce36be32de8ac",
"splash/img/branding-2x.png": "c9d5f8dd62730e28da4d18c48b2263c7",
"splash/img/branding-3x.png": "9ea099dc03c1f93d1b7f8e1e883c2490",
"splash/img/branding-4x.png": "9a4b55ec2f976cdbc039375152174256",
"splash/img/branding-dark-1x.png": "7188bcc64543819c226ce36be32de8ac",
"splash/img/branding-dark-2x.png": "c9d5f8dd62730e28da4d18c48b2263c7",
"splash/img/branding-dark-3x.png": "9ea099dc03c1f93d1b7f8e1e883c2490",
"splash/img/branding-dark-4x.png": "9a4b55ec2f976cdbc039375152174256",
"splash/img/dark-1x.png": "7188bcc64543819c226ce36be32de8ac",
"splash/img/dark-2x.png": "c9d5f8dd62730e28da4d18c48b2263c7",
"splash/img/dark-3x.png": "9ea099dc03c1f93d1b7f8e1e883c2490",
"splash/img/dark-4x.png": "9a4b55ec2f976cdbc039375152174256",
"splash/img/light-1x.png": "7188bcc64543819c226ce36be32de8ac",
"splash/img/light-2x.png": "c9d5f8dd62730e28da4d18c48b2263c7",
"splash/img/light-3x.png": "9ea099dc03c1f93d1b7f8e1e883c2490",
"splash/img/light-4x.png": "9a4b55ec2f976cdbc039375152174256",
"version.json": "cdbd49b3b672b5d25e7a5b34426d3aec"};
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
