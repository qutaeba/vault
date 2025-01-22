'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6fb348f87de209bd8f4bb7852675165b",
".git/config": "31d9e68ce8f4f9af40903e2de67d3294",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c400558c4d8eefc1bc1f33ddd68a7b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf8fc18ec574213bb2aa4c7c7b17d479",
".git/logs/refs/heads/main": "556c9ee2868b40261531545373496d97",
".git/logs/refs/remotes/origin/main": "30926b5a35c6d971c99c1c4f2fdb731a",
".git/objects/06/28f39bb1d63506b759a18bfca5cde5d6701f57": "3b73d5b4cbe1df3b29482e1a0591af33",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/36ac9095a854cac5176226f0fd2c92b41bd556": "aded0d602ffb8cc9f3bec54893511d20",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/63/c798f9e0f0e7c0c5b142cd45a2b6452d107c84": "2bc9bffcc3927f8c46c61ef366549cbe",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/87/51dc595baf63bed8b2987eda4688bbf7b41096": "d18e4a255768dd2505ae6f84d09bea5b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/8124e346b59159046a1a20d5ddf20f7bb67274": "073447cc1413cef5243e3c15fc3a8282",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d0/0106afbb901afdec8f762035de1968f2e7da86": "4de4fcabca5ceff4e4d13b3330cb57ea",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/3f5b66b205be523b597cdc6e9ea29ea35a7042": "5b5b60ee4bc4870bcb12e2566480ff3d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/cbb44b9b3f3d6aa81967a01a80d2b6d0aeeb22": "ca3544df25fe526f67daece323020b47",
".git/refs/heads/main": "6a279b5a0f33f1f831b5e9ca31b79ff8",
".git/refs/remotes/origin/main": "6a279b5a0f33f1f831b5e9ca31b79ff8",
"assets/AssetManifest.bin": "0906f95d0d76d15031a7024c09e188b6",
"assets/AssetManifest.bin.json": "dc00b6edcd11516ea941f378aef7aa3d",
"assets/AssetManifest.json": "895702688bebbf4c5f000e109463e6e3",
"assets/assets/fonts/ArefRuqaa-Regular.ttf": "bc2d83338c0de499ffae3c553a11156f",
"assets/assets/fonts/ExpoArabic-Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/banner.png": "f955b9ef709f4adf3606253fce7ac378",
"assets/assets/images/business_logo.png": "301c2471e86b7d44a6fcfff6d491772d",
"assets/assets/images/cart.png": "ef022801f3da4aff29b1be19a7480d83",
"assets/assets/images/cart_icon.png": "120e973c890abfa868a540e6627ee0b5",
"assets/assets/images/delete_icon.png": "65ee032dd9a664ec20e11318af13e927",
"assets/assets/images/door.jpg": "530544ffe07b1b56949e0fa75dd5036f",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/managment.png": "5b6143ec22da60cf01bfa8048c4f727d",
"assets/assets/images/privecy.png": "28d95c065f826a65b4b6aed363e748af",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/user.png": "d21b25e512a781715a5420ddc2988222",
"assets/FontManifest.json": "3d359036f998d394321945a606d19028",
"assets/fonts/MaterialIcons-Regular.otf": "77d4c8ebc22e05fe9c4fbfea496b1af3",
"assets/NOTICES": "19a3a6afcc9068bec3ad04614e540126",
"assets/packages/arabic_font/assets/fonts/Amiri/Amiri-Bold.ttf": "2accfcd6b3faf83d349942a19b91e12b",
"assets/packages/arabic_font/assets/fonts/Amiri/Amiri-BoldItalic.ttf": "1f0cfd59bef4321ff35af3ea69415e55",
"assets/packages/arabic_font/assets/fonts/Amiri/Amiri-Italic.ttf": "ca54f2483d9429c0a47fba80249ceede",
"assets/packages/arabic_font/assets/fonts/Amiri/Amiri-Regular.ttf": "a61fbc4d3da365e17f68e1bba6415e47",
"assets/packages/arabic_font/assets/fonts/Aref_Ruqaa/ArefRuqaa-Bold.ttf": "7b87d843f32f71e0cf71766945d712e4",
"assets/packages/arabic_font/assets/fonts/Aref_Ruqaa/ArefRuqaa-Regular.ttf": "8ff92bc4b7f51b61d2d628220a08d2d3",
"assets/packages/arabic_font/assets/fonts/Avenir_Arabic/Avenir-Arabic-Black.ttf": "8da1b8bbca4fc2b131d4fbe89401ead7",
"assets/packages/arabic_font/assets/fonts/Avenir_Arabic/Avenir-Arabic-Book.ttf": "3ea540836144a296c99076a69a5191b1",
"assets/packages/arabic_font/assets/fonts/Avenir_Arabic/Avenir-Arabic-Heavy.ttf": "bae31091c8c902377f6459130fd3548e",
"assets/packages/arabic_font/assets/fonts/Avenir_Arabic/Avenir-Arabic-Medium.ttf": "9cfd6cd4923f712b864f4d891959d107",
"assets/packages/arabic_font/assets/fonts/Avenir_Arabic/Avenir-Arabic-Regular.ttf": "7368b0c6d9169b637e27948df6ff72f0",
"assets/packages/arabic_font/assets/fonts/Baloo_Bhaijaan/BalooBhaijaan-Regular.ttf": "28190ae5cd54e8bf270404320d5e0821",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-Black.ttf": "41774c33b29f951d86110f0e8cd527bb",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-Bold.ttf": "ca9036ba6a756880f334d959b1b5f549",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-ExtraLight.ttf": "118c56fd3f0773d43bdcd16deb8370d0",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-Light.ttf": "532ee41c709ac28455bed88dd839ddb8",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-Regular.ttf": "8e62cfbb90ccadc00b59b977c93eb31a",
"assets/packages/arabic_font/assets/fonts/Cairo/Cairo-SemiBold.ttf": "984ec9c232c5936cadb14e87cf1283db",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-Bold.ttf": "919bffaf44e0410995355e7441435370",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-ExtraBold.ttf": "73fcacc8fd46a0eed3037a20982d2cc7",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-ExtraLight.ttf": "0eccd5677b2ef5b0342169564e571a05",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-Light.ttf": "e2f7d3402c1c52456c09db40a80228f0",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-Medium.ttf": "c3af486a73a7461b1122665df86a7733",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-Regular.ttf": "7a53368c4704181a547f440c6273159b",
"assets/packages/arabic_font/assets/fonts/Changa/Changa-SemiBold.ttf": "125489c0710514546290914ac822a720",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNextLTArabic-Black-3.ttf": "8929fabf224e33fc76110ff98651aa7b",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNextLTArabic-Bold-2.ttf": "24421421e9210a40c31dda3d7d47995a",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNextLTArabic-Heavy-1.ttf": "87b2169d28ef227898bfb5db66ef2ca8",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNEXTLTARABIC-LIGHT-1.ttf": "d78f5d2c76185fa07aaf8dd729eef33e",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNextLTArabic-Medium-2.ttf": "8bb0cc139f4ae9080896b1bbf8b126ec",
"assets/packages/arabic_font/assets/fonts/DinNextLTArabic/ArbFONTS-DINNextLTArabic-Regular-2.ttf": "61b1e04ff205cd324350749648fe16fc",
"assets/packages/arabic_font/assets/fonts/Dubai/Dubai-Bold.ttf": "8fbdda63d87a91c5600c512a12aec79a",
"assets/packages/arabic_font/assets/fonts/Dubai/Dubai-Light.ttf": "2f7c5bb9cf55f5b0cb2d06c57d5a8ae7",
"assets/packages/arabic_font/assets/fonts/Dubai/Dubai-Medium.ttf": "1b70cb9a589df286a5e4faf70e2a50d9",
"assets/packages/arabic_font/assets/fonts/Dubai/Dubai-Regular.ttf": "24ab51f6ae1804c808f822d28b9be18a",
"assets/packages/arabic_font/assets/fonts/El_Messiri/ElMessiri-Bold.ttf": "1a4d3ffd4a8a7017d2a57c22105dead4",
"assets/packages/arabic_font/assets/fonts/El_Messiri/ElMessiri-Medium.ttf": "a88b6e918867744f5a28a5f4646c712f",
"assets/packages/arabic_font/assets/fonts/El_Messiri/ElMessiri-Regular.ttf": "f987603b0ad311424b5c64c55e10d10c",
"assets/packages/arabic_font/assets/fonts/El_Messiri/ElMessiri-SemiBold.ttf": "a2fc08a54a46b0663a084ce4ba19cce2",
"assets/packages/arabic_font/assets/fonts/Harmattan/Harmattan-Regular.ttf": "bcd87a685fc9fa2f88ae49bf9662649c",
"assets/packages/arabic_font/assets/fonts/ibm/IBMPlexArabic-Text.ttf": "76b0d039397c1d22ed2e38e5d7af9ae7",
"assets/packages/arabic_font/assets/fonts/Jomhuria/Jomhuria-Regular.ttf": "7d6b466d0e08fd984705b6190e6554a6",
"assets/packages/arabic_font/assets/fonts/Katibeh/Katibeh-Regular.ttf": "b9a90c628ecd4066bc9a44f548b67ff9",
"assets/packages/arabic_font/assets/fonts/Lalezar/Lalezar-Regular.ttf": "c07a18bb821945af6ec7de632e877731",
"assets/packages/arabic_font/assets/fonts/Lateef/LateefRegOT.ttf": "f98cf82fba21f78b335a41f343c5f0c9",
"assets/packages/arabic_font/assets/fonts/Lemonada/Lemonada-Bold.ttf": "ec008f8a072ecd3d535f2cac97e9ba89",
"assets/packages/arabic_font/assets/fonts/Lemonada/Lemonada-Light.ttf": "f6dbfb6fa1cf1d1a3070c0f0ceb2d585",
"assets/packages/arabic_font/assets/fonts/Lemonada/Lemonada-Regular.ttf": "659eae40390059a683cc91faf4df4ca9",
"assets/packages/arabic_font/assets/fonts/Lemonada/Lemonada-SemiBold.ttf": "91d517aec1170078f0b2eab23b4eef26",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-Black.ttf": "77e982cb003544f8c4832af58f5a8051",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-Bold.ttf": "6087ba6d5c2ac2ad094c8a545839775e",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-ExtraLight.ttf": "b5043d5fc92c52c730e4faff41118815",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-Light.ttf": "7b3ad1c8f7d7dbc35890123434adae55",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-Medium.ttf": "e3d9e7676a26eae957fad1e69c33d5a7",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-Regular.ttf": "9b3ddca6af7328102938afab0d55bc9d",
"assets/packages/arabic_font/assets/fonts/Mada/Mada-SemiBold.ttf": "28191d02304034b2421f2bacb91b78aa",
"assets/packages/arabic_font/assets/fonts/Markazi_Text/MarkaziText-Regular.ttf": "367d77a763df54f70c6ebe345598f2fb",
"assets/packages/arabic_font/assets/fonts/Mirza/Mirza-Bold.ttf": "d3cc57b384c4ccfcab258d4ade64b7f5",
"assets/packages/arabic_font/assets/fonts/Mirza/Mirza-Medium.ttf": "3b667481a859085d1a27e221bf45f3a9",
"assets/packages/arabic_font/assets/fonts/Mirza/Mirza-Regular.ttf": "21fd4e3c1c6f103d8b00b8a30d211c49",
"assets/packages/arabic_font/assets/fonts/Mirza/Mirza-SemiBold.ttf": "27b1558b9550a3196031a61fc6e0687e",
"assets/packages/arabic_font/assets/fonts/Rakkas/Rakkas-Regular.ttf": "1197ba69414123d92777f819a43a7d27",
"assets/packages/arabic_font/assets/fonts/Reem_Kufi/ReemKufi-Regular.ttf": "1cbfee67b7f1e63e1334e8800d5450b6",
"assets/packages/arabic_font/assets/fonts/Scheherazade/Scheherazade-Bold.ttf": "b26c8ba6aae29ef98d54c0841398ef34",
"assets/packages/arabic_font/assets/fonts/Scheherazade/Scheherazade-Regular.ttf": "87ffd3a053cd6c09186452cb10d9a15a",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-Black.ttf": "d8e4db47417985783913a2d64ca6e8cf",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-Bold.ttf": "73222b42f57d11db8ed71c1752e121c0",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-ExtraBold.ttf": "87a0f0773f0cdc28fd8dd3603bf34837",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-ExtraLight.ttf": "4dba176f2d532f19d9c4c61502bca07b",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-Light.ttf": "5c8f739351e568ec0c9fc0dc8a6994b4",
"assets/packages/arabic_font/assets/fonts/Tajawal/Tajawal-Medium.ttf": "1472d65abf09fa765956fd3d32dadf48",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4e94baca8255251c357835e1c43d7438",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee1cb282046d8d8007c48550f80a698a",
"/": "ee1cb282046d8d8007c48550f80a698a",
"main.dart.js": "f1f6b1032ff45b225f6b152e2072e352",
"manifest.json": "7aae9e9de205d62f2f1df3689d9e15b6",
"version.json": "0da90d313a085133d69cc457d49d98bd"};
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
