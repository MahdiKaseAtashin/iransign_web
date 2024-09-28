'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "615bae710d3fb96144ca244ef1df653b",
"assets/AssetManifest.bin.json": "cbbc4aae942c6386f54ee79c6d672d1d",
"assets/AssetManifest.json": "a66785cf0586834eaae20a366f012b30",
"assets/assets/fonts/IRANYekan_Light.ttf": "71c5a6f8f34814cf1a1eca64bc2e4edd",
"assets/assets/fonts/IRANYekan_Regular.ttf": "9928dd67b4dfd7c80c10fba302dcfe1b",
"assets/assets/fonts/NastaliqShekaste.ttf": "e63e9420856fe0c5c1e23a10512b216f",
"assets/assets/icons/banks/ansar_logo.png": "91bb1578c26e399bd74990c410ecbc19",
"assets/assets/icons/banks/ansar_logo.svg": "69df3017e2e905527b45148c0bfa49d0",
"assets/assets/icons/banks/arman_logo.png": "929b7fec1dadad6a640dc147fe988fea",
"assets/assets/icons/banks/arman_logo.svg": "bd2dbad89519dae664f9ef17c2766be8",
"assets/assets/icons/banks/ayande_logo.png": "ecabc4deb491de5b767e59f76c81adc8",
"assets/assets/icons/banks/ayande_logo.svg": "3ee0118708e3cafb6aefffc889b52971",
"assets/assets/icons/banks/bank_card.png": "ab1119b9019cdb44d84e3386dc4118cc",
"assets/assets/icons/banks/bank_card.svg": "2237566867d8ed04d8e1a8c3442b5dcd",
"assets/assets/icons/banks/dey_bank.png": "efe8c2ff322b4a279a748a3a0d0a9b1f",
"assets/assets/icons/banks/dey_bank.svg": "a609ae74590bab0ccf8a714668b6c282",
"assets/assets/icons/banks/eghtesad_logo.png": "60914f6bc67c088dad27cbd034d5944e",
"assets/assets/icons/banks/eghtesad_logo.svg": "bd8170d681d35b8b8c3dc64b1def6936",
"assets/assets/icons/banks/etebari_tosee_logo.png": "e058f84bfd5012d0f6c1ed9be9bab20e",
"assets/assets/icons/banks/gardeshgari_logo.png": "ec9acc44a118e0012a36405f6dc9b51e",
"assets/assets/icons/banks/gardeshgari_logo.svg": "622f7e715d8705596450db641d0afb4d",
"assets/assets/icons/banks/ghavamin_logo.png": "eb36ea66787960793fe3d79a060bb9b4",
"assets/assets/icons/banks/ghavamin_logo.svg": "6d0f2d9e11a2fbda3054a16f3d95a8f8",
"assets/assets/icons/banks/hekmat_logo.png": "f6c0e127be06d6602897965b555acdd1",
"assets/assets/icons/banks/hekmat_logo.svg": "65608d8f76c69e4b633c1f0add328850",
"assets/assets/icons/banks/iranzamin_logo.png": "a0d6f72fbbefe863c4732e0cb7d5e047",
"assets/assets/icons/banks/iranzamin_logo.svg": "d96d90d358f44d891e9204782bc062c6",
"assets/assets/icons/banks/karafarin_logo.png": "9a40136fcab19cced8aedec122055ea1",
"assets/assets/icons/banks/karafarin_logo.svg": "5252708cdd6f3c90225f9c3a17df4455",
"assets/assets/icons/banks/keshavarzi_logo.png": "5469f3c7af925d194bb11519e20b0e31",
"assets/assets/icons/banks/keshavarzi_logo.svg": "b281ed3644ad1aebd9bbf207092678fe",
"assets/assets/icons/banks/khavarmiane_logo.png": "6f6e45883b96274da41f2f0d59e4b396",
"assets/assets/icons/banks/khavarmiane_logo.svg": "d246358afdb0e973fb1f1e881c3b4505",
"assets/assets/icons/banks/kosar_logo.png": "6f41a258c89e4a3c52ceccb1cef73b92",
"assets/assets/icons/banks/kosar_logo.svg": "04757e2917cd5846e37068031db8ff40",
"assets/assets/icons/banks/markazi_logo.png": "fa0389746a3c642d10bc5b2121bd10e5",
"assets/assets/icons/banks/markazi_logo.svg": "bb9de4d93ad067ced8820f9b7f5dfd9b",
"assets/assets/icons/banks/maskan_logo.png": "4c852459cfe449e766b186479011cffc",
"assets/assets/icons/banks/maskan_logo.svg": "6f7fa8bf74d025e34c63ea81fad8b3dc",
"assets/assets/icons/banks/mehr_eghtesad_logo.png": "2c4590fd2b33540598d293be81520e4a",
"assets/assets/icons/banks/mehr_eghtesad_logo.svg": "f35b32978a535f1647778db5de8d0683",
"assets/assets/icons/banks/mehr_logo.png": "0e26ecd30ef67c8b239c7673515f8865",
"assets/assets/icons/banks/mehr_logo.svg": "c80614bb0859f819e704f3e0d3c74b25",
"assets/assets/icons/banks/mellal_logo.png": "e4319203c807df963853c2553a666ea5",
"assets/assets/icons/banks/mellat_logo.png": "9f01329bac835bce477b2dea2006be88",
"assets/assets/icons/banks/mellat_logo.svg": "95fe2887262ef1bbd843d791034152ad",
"assets/assets/icons/banks/melli_logo.png": "63e1b65f25261e323e41529111980cd1",
"assets/assets/icons/banks/melli_logo.svg": "792774149a31c5df2a19cb4cc66682af",
"assets/assets/icons/banks/parsian_logo.png": "b5356e0a788b2c895c0e8f22459211a7",
"assets/assets/icons/banks/parsian_logo.svg": "f60cb4cd8f71b0e1f5b05b9550489164",
"assets/assets/icons/banks/pasargad_logo.png": "89d3485003b6890150d77c97fd801da4",
"assets/assets/icons/banks/pasargad_logo.svg": "57a73aafc8e2835c6371030c40ecb904",
"assets/assets/icons/banks/post_logo.png": "318d363e9782db455653eb4c12b5be34",
"assets/assets/icons/banks/refah_logo.png": "35fa8d4f8207c4b9df0053f258deadb0",
"assets/assets/icons/banks/refah_logo.svg": "9150e0a2d48bdbe1abdaaeb01f774016",
"assets/assets/icons/banks/resalat_logo.png": "1b2b3365876f39d26ea9ad2b0c893a28",
"assets/assets/icons/banks/resalat_logo.svg": "fa144884793d293308b79feeb2e116ab",
"assets/assets/icons/banks/saderat_logo.png": "1be90a06b852fb83e1c2cc8cd594f8a3",
"assets/assets/icons/banks/saderat_logo.svg": "a1ecc3714cf63064bc9a78006ea48526",
"assets/assets/icons/banks/salehin_logo.png": "4f99dafce56973996c9003de1c1a6022",
"assets/assets/icons/banks/salehin_logo.svg": "37d4160fbce332df822a66872d6c9174",
"assets/assets/icons/banks/saman_logo.png": "8b7db1ca5f8b56f8eff9d8cf8bd03d65",
"assets/assets/icons/banks/saman_logo.svg": "ea0ae0dd39658b2011bc94274071ff66",
"assets/assets/icons/banks/samen_logo.png": "ec2cdb73775f1b28a5b7f13be1c69edc",
"assets/assets/icons/banks/samen_logo.svg": "e8f330ba7c6eb52bf23588bdb3b588da",
"assets/assets/icons/banks/sanatvamadan_logo.png": "82bd21a20596c347134580444c4b2204",
"assets/assets/icons/banks/sanatvamadan_logo.svg": "a1a19bb50eb649475c849de85e07b204",
"assets/assets/icons/banks/sarmayeh_logo.png": "0040c75f681ba8dbd3fd3e7ceace74b2",
"assets/assets/icons/banks/sarmayeh_logo.svg": "0f259f3d409ab816739dad64f2902b9d",
"assets/assets/icons/banks/sepah_logo.png": "a5c1f07bc72f749f15b5d2c6c2b09160",
"assets/assets/icons/banks/sepah_logo.svg": "0740c80160c6687299f4f601ce65f576",
"assets/assets/icons/banks/shahr_logo.png": "bf35fdf914edc48b4751724db06fc90f",
"assets/assets/icons/banks/shahr_logo.svg": "c3c580464afd64c74f6e7402fab6fd5f",
"assets/assets/icons/banks/shaparak_logo.png": "b01d283cf3872e3c56ee1d6c6cd9d997",
"assets/assets/icons/banks/shaparak_logo.svg": "bf15d2a63fd94b4684ab9dea75cc2068",
"assets/assets/icons/banks/shetab_logo.png": "c67270950462b2683e3514d563a9b9a9",
"assets/assets/icons/banks/shetab_logo.svg": "4d7ece44b266730ec9ab8b24c9dbcb18",
"assets/assets/icons/banks/sia_logo.svg": "3392ac1683c90cc50105577db9f846ef",
"assets/assets/icons/banks/sina_logo.png": "34c0b1605c261d228d8f021345ddd924",
"assets/assets/icons/banks/tejarat_logo.png": "91c6b9d00475dc2fb1995b7cf61f4ef2",
"assets/assets/icons/banks/tejarat_logo.svg": "16632c6e18f23196921f1c3ba0584249",
"assets/assets/icons/banks/tosee_saderat_logo.png": "61aa9312627ab77e1fcbf8b205606324",
"assets/assets/icons/banks/tosee_saderat_logo.svg": "c27b8b3717a9bdb1f8f28537b60f7e57",
"assets/assets/icons/banks/tosee_taavon_logo.png": "bc1093d6bf700e01d4f25f24599c34c0",
"assets/assets/icons/banks/tosee_taavon_logo.svg": "54cbf3a94dccbf2c80211f27516ed817",
"assets/assets/images/app_logo.png": "ccae355ce293dbfbab8e9691d7d93f8f",
"assets/assets/images/app_logo_with_background.png": "e6b4aa952266bed785be08107e15cb4b",
"assets/assets/images/authentication.png": "fc74129c34cf2c097331d02a74f442ba",
"assets/assets/images/authentication_shahr.png": "16460f96b4f72527da78792dbb19d95e",
"assets/assets/images/banner_auth_1.png": "70411977cfc5d4b29ddbc4a2cc5978e9",
"assets/assets/images/banner_auth_2.png": "a56a541548b5e23d8e1d8af329b70e1f",
"assets/assets/images/banner_auth_3.png": "61936bb2fbdd6445636b7ef7c185ea85",
"assets/assets/images/banner_auth_4.png": "d21146678e0be4e4d1463ce66cbb5414",
"assets/assets/images/banner_face_auth_1.png": "9bb5ae43c3f1fbe4a788f258031bb396",
"assets/assets/images/banner_face_auth_2.png": "0fc33d5c97bfeec7ea2228e132f29eaa",
"assets/assets/images/banner_hand_auth_1.png": "76cab27dc5758e7c1ee51a5ad1629982",
"assets/assets/images/banner_hand_auth_2.png": "f52d629d731bd3d2d3962c545f3788d9",
"assets/assets/images/chevrons_left.png": "8008a249844c2f203c5eb9bf8b28d0c1",
"assets/assets/images/contact_us.png": "82c802f704e87d961c16bc9725d6b459",
"assets/assets/images/contact_us_shahr.png": "07e90f74eb34a131eda661bd0175b8d7",
"assets/assets/images/empty_workflow.png": "030d3fef783ee097316a5e2540983fac",
"assets/assets/images/hand_five.png": "304f16aac9794f2bea8f293e1e3e7907",
"assets/assets/images/hand_four.png": "905bb7ec5e976c9ee4c4a5d1bf71cf96",
"assets/assets/images/hand_one.png": "24b5bf37ba0e3141b168ba8dc80957be",
"assets/assets/images/hand_three.png": "a9866b0cf1daf49be9a3aae015b66e34",
"assets/assets/images/hand_two.png": "70a34bc4d08011bfa7a4e90229369e18",
"assets/assets/images/irankhodro_logo.png": "8866247ad54c8cb9b8f25256b60e0945",
"assets/assets/images/irankhodro_logo_background.png": "37d45c05e5a2caa3c978f544188e785f",
"assets/assets/images/look_down.png": "450ce2915c6df3571d4c6ea2a52245e1",
"assets/assets/images/look_left.png": "023fe0d6c29dc5f87b92ae2ed3677715",
"assets/assets/images/look_right.png": "64c853f304795d9b3f33bb26d6e4bf83",
"assets/assets/images/look_straight.png": "54867b18ffc8fe93a45e363eeca33969",
"assets/assets/images/look_up.png": "b8728caa07624d946ed4c0f8f904759d",
"assets/assets/images/no_internet.png": "49f5738594503df677277b01cf72dcbc",
"assets/assets/images/payment.png": "9b37a364faf58a774fc7407a08d6705e",
"assets/assets/images/payment_shahr.png": "e7c2f4a969b3674a2288e96dc0f4e8ef",
"assets/assets/images/profile.png": "ae92ecebb646e1c88762348e975e98d5",
"assets/assets/images/profile_shahr.png": "5026001c86c42fa066004daead9125cc",
"assets/assets/images/sample_man.png": "4db904a7c6b069a0749b6bf0005bbc9c",
"assets/assets/images/sample_woman.png": "d28168fd0de2e3fc0fae268b58fab34d",
"assets/assets/images/shahr_logo.png": "4b857c908e270087236b61a3f2af8211",
"assets/assets/images/shahr_logo_with_background.png": "85265217681900a4cff39f69be44fbf1",
"assets/assets/images/small_hand_five.png": "20f11499e40d95d64766d0cec75bdc68",
"assets/assets/images/small_hand_four.png": "88f56489627f0ddf99220051f7ec0999",
"assets/assets/images/small_hand_one.png": "9e0f17ad849b8959e057440b16bc5e94",
"assets/assets/images/small_hand_three.png": "f56c76ee827c3c3923623e9afe22182a",
"assets/assets/images/small_hand_two.png": "ab1223af50691463c8bbbaaa9ba16dd6",
"assets/assets/json/cities_etemad.json": "a4771d1723bb3f5b42162fae82fbf3b6",
"assets/assets/json/states_etemad.json": "b369b9cfef11430ed3625d97fecb92b3",
"assets/FontManifest.json": "58f7742adcb9ac6e0a499581d9f6fbcc",
"assets/fonts/MaterialIcons-Regular.otf": "965e96d0dbe2cd4237e7c4a5cfc51cc4",
"assets/NOTICES": "7d9bab0a77b7c16a61315d15025903e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"favicon.png": "58df8362cdb2c4dbbc126a895a5efbdc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2006ef3e1987c8401ae502fed32c6852",
"icons/Icon-192.png": "c61a092be03599f6ca8ebf541c1e2834",
"icons/Icon-512.png": "afe94f08195f1e326457f3607ca9e4e3",
"icons/Icon-maskable-192.png": "c61a092be03599f6ca8ebf541c1e2834",
"icons/Icon-maskable-512.png": "afe94f08195f1e326457f3607ca9e4e3",
"index.html": "06275b733d829ecd5f11d736339ed5a0",
"/": "06275b733d829ecd5f11d736339ed5a0",
"main.dart.js": "8553b60999e073c15ae00cfe1e84211e",
"manifest.json": "c6f83f761942e9d036bf49cbefe92b41",
"splash/img/dark-1x.png": "405c81670fbdf3002831a104ba7e16cd",
"splash/img/dark-2x.png": "6292e6de0595392e1786f809a6b6763c",
"splash/img/dark-3x.png": "75dc0cb75ff4ad4f50d62d95a3379f1a",
"splash/img/dark-4x.png": "b3e24121635e6b584cb7403e73f20fa1",
"splash/img/light-1x.png": "405c81670fbdf3002831a104ba7e16cd",
"splash/img/light-2x.png": "6292e6de0595392e1786f809a6b6763c",
"splash/img/light-3x.png": "75dc0cb75ff4ad4f50d62d95a3379f1a",
"splash/img/light-4x.png": "b3e24121635e6b584cb7403e73f20fa1",
"version.json": "1f1608cd3d44da7efcf927d4b24a9031"};
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
