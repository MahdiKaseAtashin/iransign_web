'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6c1db523c40eb2b89728e7d74f93210d",
"assets/AssetManifest.bin.json": "ed6db0af4e92b6954dc9b381fae495bd",
"assets/AssetManifest.json": "27b9661cc8f65069794851e107e837d1",
"assets/assets/fonts/IRANYekan_Light.ttf": "71c5a6f8f34814cf1a1eca64bc2e4edd",
"assets/assets/fonts/IRANYekan_Regular.ttf": "9928dd67b4dfd7c80c10fba302dcfe1b",
"assets/assets/icons/about_us.svg": "342114ad0da0ffe046aa391c177aae63",
"assets/assets/icons/adjustments.svg": "8acea2a14572e51d8a27e149ef45c296",
"assets/assets/icons/alert_triangle_filled.svg": "44d829bdb7b6bab61d48bc2e27877bdb",
"assets/assets/icons/ban.svg": "c9ed222e245959ba81cf2b7992e4fbc6",
"assets/assets/icons/brand_outlined.svg": "7d9ffc00eb938ab8b3e9396e90cab77f",
"assets/assets/icons/calendar_down.svg": "5f254bf4bda77ccac231c47339b950a8",
"assets/assets/icons/calendar_event.svg": "9be1432e1f0aefbe9123d5afaec0af43",
"assets/assets/icons/calendar_stats.svg": "ad64c79cc1aca638639a1475ebe380f9",
"assets/assets/icons/calendar_stats_small.svg": "6f4cedfc29ee1b033a2665d9e1784ca7",
"assets/assets/icons/call_us.svg": "d687411cd6871c46cda78c71a3e8ad9c",
"assets/assets/icons/camera_plus.svg": "99ad8098aa9701afafa0dd038bc52644",
"assets/assets/icons/cert.svg": "ae3704e2ae40e9ac5902f6ee96d8713b",
"assets/assets/icons/chart_donut.svg": "e23f5664f59592df130a2bfed0ac89b3",
"assets/assets/icons/checked.svg": "4eeba8e69d480aa4a6ec649e48dda58d",
"assets/assets/icons/check_list.svg": "0c91e7cd5c75c86196cfa748743e5184",
"assets/assets/icons/chevron_left.svg": "18aef7289c484ffa52393382733b54b9",
"assets/assets/icons/circle_check.svg": "5352f501d214207886187e264acfda5d",
"assets/assets/icons/circle_key.svg": "20e82690219c862b95b049d0a834e46d",
"assets/assets/icons/close.svg": "e84397e622715b250597f499069ba314",
"assets/assets/icons/delete.svg": "70ec0e7c1d5d56a680a518b6214a12e2",
"assets/assets/icons/dots_vertical.svg": "910449d22f6f61428f16ca447e3520ad",
"assets/assets/icons/eraser.svg": "351ce5ae808ba0be3aef45513de5d817",
"assets/assets/icons/file_check.svg": "23766c0ec7e8a56cb6a06fd2031d56c8",
"assets/assets/icons/file_description.svg": "65da79cd5bcb7995384f281dd890b2de",
"assets/assets/icons/file_dislike.svg": "a2228d6694ce9c50f47a59e3e973a788",
"assets/assets/icons/fingerprint.svg": "811ed05d5ab3a5059f19e386eab4201a",
"assets/assets/icons/logout.svg": "3c33eb84261bc765ba4ae58128f1603c",
"assets/assets/icons/mail_outlined.svg": "71eac2c78d66c8f0cee01dc148771635",
"assets/assets/icons/menu.svg": "b429de9f1007403edc93ebe4c3be16e8",
"assets/assets/icons/person.svg": "8836867a81358c2a0ef8327f95d55f77",
"assets/assets/icons/phone_outlined.svg": "73b6a03dd582adcbbac1a3ed0e118ecf",
"assets/assets/icons/profile_info_icon.svg": "e0a8ddc86692e1b80e14c94a5022e545",
"assets/assets/icons/rejected.svg": "008b358abf4603e861a22e2a75abb9ed",
"assets/assets/icons/rotate.svg": "d71984418150b8f033f42ca788502a47",
"assets/assets/icons/scan.svg": "e29ee4bd7e586041ac04fce5a33e1028",
"assets/assets/icons/script.svg": "8a09c3ee4cd8a360613acde139271413",
"assets/assets/icons/settings.svg": "ce09fb516fefb6a37f5187acdcb8c6ea",
"assets/assets/icons/share.svg": "08108da57296396cf80b0cbf62ca6c69",
"assets/assets/icons/shield_down.svg": "8dfebcac424da674dde58f3cfa79ce39",
"assets/assets/icons/sort_descending.svg": "8cc9c1633d4113f3e7a8706edb4e7ece",
"assets/assets/icons/users.svg": "f22aadbf85dc5d78bf324d62cdba0478",
"assets/assets/icons/writing.svg": "3ca73416c0076a333f8f30ae52c509c7",
"assets/assets/icons/writing_pen.svg": "6907bdcb613189262b6f2df5ca596db6",
"assets/assets/images/about_us_img.svg": "189a0c6735b67809df41e35ab7d4d130",
"assets/assets/images/app_logo.png": "ccae355ce293dbfbab8e9691d7d93f8f",
"assets/assets/images/app_logo.svg": "f068453796c25f999389c6b6cdc6eac5",
"assets/assets/images/app_logo_with_bg.png": "7e10abefabefec0b389c90fd9ad5b093",
"assets/assets/images/auth_loading.svg": "b8a479d635618fce3cc87d4ff1969a36",
"assets/assets/images/call_us_img.svg": "35dbaab110577943b9a083ace848a0c1",
"assets/assets/images/empty_list.svg": "314e78b7b092eb8565abde8758b40ca3",
"assets/assets/images/face_authentication_icon.svg": "78643334e79a84be7935ee3cf797e82c",
"assets/assets/images/failed_list.svg": "b9242c32330f0ed8c68a57dd7b8735fe",
"assets/assets/images/hand_five.svg": "e2eb6c5e1da1555f3a3091b3991268f7",
"assets/assets/images/hand_four.svg": "598d62c8fa23b20491c9347cd34eb31f",
"assets/assets/images/hand_one.svg": "4a020228e07ccc4fbe88e7063253d249",
"assets/assets/images/hand_three.svg": "1a5e26c20e74988da7c376269b20d624",
"assets/assets/images/hand_two.svg": "145705391e96398d424ef1304094bb0c",
"assets/assets/images/intro_fast_sign.svg": "0dac169ad144ed15bbfedebb88123dea",
"assets/assets/images/intro_online_authentication.svg": "d6642031feba13668b48b274f79a9d40",
"assets/assets/images/intro_register_certificate.svg": "c0b0a922db4cf4939f4c6de3bb151256",
"assets/assets/images/payment_icon.svg": "60770bdd46b5225b1a558a6000e56b42",
"assets/assets/images/profile_img.svg": "d043cbdbbf91c102cbd56af674b1c8d1",
"assets/assets/jsons/cities_etemad.json": "df58b865a0d95732ff93d702ee319d15",
"assets/assets/jsons/iran_cities_provinces.json": "9a5b1c6d226eb6968e5e7c0b76a37c99",
"assets/assets/jsons/states_etemad.json": "b369b9cfef11430ed3625d97fecb92b3",
"assets/assets/video/video_reporting_bug.mp4": "d26656955e5e7c50e79620f918004181",
"assets/FontManifest.json": "c66f317876c41a9cb9218856f166a502",
"assets/fonts/MaterialIcons-Regular.otf": "b569a45167e1a2e4fa9d1aa464656dbf",
"assets/NOTICES": "c3937859c9382b740f92287898524a73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2b9ed1bfe070de9f4584d505f20bab99",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "fa0f4ca36709df544167ef5147d676ce",
"icons/Icon-512.png": "1e136b224f88f69456993185f7421e15",
"icons/Icon-maskable-192.png": "fa0f4ca36709df544167ef5147d676ce",
"icons/Icon-maskable-512.png": "1e136b224f88f69456993185f7421e15",
"index.html": "662fad72fe4d6bc1f8eec6f05883c030",
"/": "662fad72fe4d6bc1f8eec6f05883c030",
"main.dart.js": "bf800b2f3fd877c1f6897ad9c84bd936",
"manifest.json": "44a13eb5104aceaa97ec29f73f40fd19",
"node_modules/.bin/uuid": "ffbdb2fa88a73a5d76fa605c79564948",
"node_modules/.bin/uuid.cmd": "fd8afdde872e60dac6525aa643b18892",
"node_modules/.bin/uuid.ps1": "3eb88301ad6cb9f4ca74fcc7ecbbce0a",
"node_modules/uuid/CHANGELOG.md": "68324c508aa803e2ca12e42972d84f19",
"node_modules/uuid/CONTRIBUTING.md": "dca678035de259c0c77783e4a11f19da",
"node_modules/uuid/dist/bin/uuid": "9ac6632cecfa735415456855b4bca18c",
"node_modules/uuid/dist/commonjs-browser/index.js": "4db6a4e5c26254658bf0899478d8fcc6",
"node_modules/uuid/dist/commonjs-browser/md5.js": "29005f15e1fc52671c2ce0589723164a",
"node_modules/uuid/dist/commonjs-browser/native.js": "9fdb014f352b6f51997264ac949d2d58",
"node_modules/uuid/dist/commonjs-browser/nil.js": "5d7f0b265fc2600803256f57a4b61dc0",
"node_modules/uuid/dist/commonjs-browser/parse.js": "946313e5d82f852714963af9b3ec2ff0",
"node_modules/uuid/dist/commonjs-browser/regex.js": "e2ef7a09d9279e21db8013d24bb5e0c9",
"node_modules/uuid/dist/commonjs-browser/rng.js": "9c548abe37e49a06977f24015b1d1f58",
"node_modules/uuid/dist/commonjs-browser/sha1.js": "81626210eeaa0130bc86a4d648e5ba81",
"node_modules/uuid/dist/commonjs-browser/stringify.js": "a77c066f9db44296a9c15a146e5891b3",
"node_modules/uuid/dist/commonjs-browser/v1.js": "b83ac2e2eb2353f0999c4508b8b11ec6",
"node_modules/uuid/dist/commonjs-browser/v3.js": "9210b2b909606bd64a2f1e3c63a3212c",
"node_modules/uuid/dist/commonjs-browser/v35.js": "d0723243ef12fdf50db56256735a5f98",
"node_modules/uuid/dist/commonjs-browser/v4.js": "82f935e03403131c6f92624ec95d80c2",
"node_modules/uuid/dist/commonjs-browser/v5.js": "68ff0be9de9e8fe45d83255ec075a7e4",
"node_modules/uuid/dist/commonjs-browser/validate.js": "6d20465f8c9e099ce9747623390f274d",
"node_modules/uuid/dist/commonjs-browser/version.js": "1f00e73ac7a7043a4abe99eff07ad0ca",
"node_modules/uuid/dist/esm-browser/index.js": "2475ac6b0616310517c94ba01c70c781",
"node_modules/uuid/dist/esm-browser/md5.js": "ccb37028d342a83750da2716931d4083",
"node_modules/uuid/dist/esm-browser/native.js": "3f85de8a3aa725bff98d0fc3dd1eff64",
"node_modules/uuid/dist/esm-browser/nil.js": "4e11e9db5e5e611dc4aecf872d5c02a3",
"node_modules/uuid/dist/esm-browser/parse.js": "08869a724acb259405c9768e02bc2c4c",
"node_modules/uuid/dist/esm-browser/regex.js": "4b8725aff0f569592b9f518ba1e4a266",
"node_modules/uuid/dist/esm-browser/rng.js": "39d532b00d52489d6ccc6fd3dd9d79f8",
"node_modules/uuid/dist/esm-browser/sha1.js": "8afda7349da9970083b1e012a0580724",
"node_modules/uuid/dist/esm-browser/stringify.js": "0c75080a21d5cfbdd03c7c8e1db0257e",
"node_modules/uuid/dist/esm-browser/v1.js": "2550128fc2848045cd50984c40d5be3b",
"node_modules/uuid/dist/esm-browser/v3.js": "c1992e63a9499078506f261711d65084",
"node_modules/uuid/dist/esm-browser/v35.js": "09ebec98f76a8efe780e3d5e0e529741",
"node_modules/uuid/dist/esm-browser/v4.js": "b493f7bbebf2bcd689b62ba8df315e69",
"node_modules/uuid/dist/esm-browser/v5.js": "d8e175911cee9eba95683c585e88c153",
"node_modules/uuid/dist/esm-browser/validate.js": "34b4549359ef4b339dc876e1a7ce633c",
"node_modules/uuid/dist/esm-browser/version.js": "e4039e137d1b4b8adce38dcb7c7b726b",
"node_modules/uuid/dist/esm-node/index.js": "2475ac6b0616310517c94ba01c70c781",
"node_modules/uuid/dist/esm-node/md5.js": "2d31f925e4a3ed092e7a659b76f60902",
"node_modules/uuid/dist/esm-node/native.js": "941655e5117783a2b0f30e3b3b5dbae0",
"node_modules/uuid/dist/esm-node/nil.js": "4e11e9db5e5e611dc4aecf872d5c02a3",
"node_modules/uuid/dist/esm-node/parse.js": "08869a724acb259405c9768e02bc2c4c",
"node_modules/uuid/dist/esm-node/regex.js": "4b8725aff0f569592b9f518ba1e4a266",
"node_modules/uuid/dist/esm-node/rng.js": "bb61f95af6ecb933a8a64fd718a5af53",
"node_modules/uuid/dist/esm-node/sha1.js": "e16dc312efb28215d21ee8390149c93a",
"node_modules/uuid/dist/esm-node/stringify.js": "0c75080a21d5cfbdd03c7c8e1db0257e",
"node_modules/uuid/dist/esm-node/v1.js": "2550128fc2848045cd50984c40d5be3b",
"node_modules/uuid/dist/esm-node/v3.js": "c1992e63a9499078506f261711d65084",
"node_modules/uuid/dist/esm-node/v35.js": "09ebec98f76a8efe780e3d5e0e529741",
"node_modules/uuid/dist/esm-node/v4.js": "b493f7bbebf2bcd689b62ba8df315e69",
"node_modules/uuid/dist/esm-node/v5.js": "d8e175911cee9eba95683c585e88c153",
"node_modules/uuid/dist/esm-node/validate.js": "34b4549359ef4b339dc876e1a7ce633c",
"node_modules/uuid/dist/esm-node/version.js": "e4039e137d1b4b8adce38dcb7c7b726b",
"node_modules/uuid/dist/index.js": "b2673a937956dd553fea88979a8cc42f",
"node_modules/uuid/dist/md5-browser.js": "29005f15e1fc52671c2ce0589723164a",
"node_modules/uuid/dist/md5.js": "305a11a5830f1847ee4926b64d97905e",
"node_modules/uuid/dist/native-browser.js": "9fdb014f352b6f51997264ac949d2d58",
"node_modules/uuid/dist/native.js": "03f1f7a3efbc0f9b82130ff2a78a7819",
"node_modules/uuid/dist/nil.js": "5d7f0b265fc2600803256f57a4b61dc0",
"node_modules/uuid/dist/parse.js": "946313e5d82f852714963af9b3ec2ff0",
"node_modules/uuid/dist/regex.js": "e2ef7a09d9279e21db8013d24bb5e0c9",
"node_modules/uuid/dist/rng-browser.js": "9c548abe37e49a06977f24015b1d1f58",
"node_modules/uuid/dist/rng.js": "0d87d8996d8e22a78cb4fa3b0bb94c00",
"node_modules/uuid/dist/sha1-browser.js": "81626210eeaa0130bc86a4d648e5ba81",
"node_modules/uuid/dist/sha1.js": "372a3ca8e2b2eb65b878535f0d5ec37f",
"node_modules/uuid/dist/stringify.js": "a77c066f9db44296a9c15a146e5891b3",
"node_modules/uuid/dist/uuid-bin.js": "5ec4ae086d6eafbfe1c3c8e178a9d972",
"node_modules/uuid/dist/v1.js": "b83ac2e2eb2353f0999c4508b8b11ec6",
"node_modules/uuid/dist/v3.js": "9210b2b909606bd64a2f1e3c63a3212c",
"node_modules/uuid/dist/v35.js": "d0723243ef12fdf50db56256735a5f98",
"node_modules/uuid/dist/v4.js": "82f935e03403131c6f92624ec95d80c2",
"node_modules/uuid/dist/v5.js": "68ff0be9de9e8fe45d83255ec075a7e4",
"node_modules/uuid/dist/validate.js": "6d20465f8c9e099ce9747623390f274d",
"node_modules/uuid/dist/version.js": "1f00e73ac7a7043a4abe99eff07ad0ca",
"node_modules/uuid/LICENSE.md": "353e680cdafd96bf30131cbb7b14a6e8",
"node_modules/uuid/package.json": "0eccb05f3109374aabcbacbebc0b3411",
"node_modules/uuid/README.md": "e00a2d42a144a07dabb46d2d761a60a5",
"node_modules/uuid/wrapper.mjs": "d0167dc4964c72161120427e7c21a42e",
"package-lock.json": "e65be982eb4bc79d1b4820a792daaac7",
"package.json": "a5d023db03e043ba066d277c7660dcb0",
"version.json": "80e812fef3fadacb166dc1176a302721"};
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
