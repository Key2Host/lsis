const client_manifest = {
  "../i18n/locales/de-DE.json": {
    "resourceType": "script",
    "module": true,
    "prefetch": false,
    "preload": false,
    "file": "C2qFry8O.js",
    "name": "de-DE",
    "src": "../i18n/locales/de-DE.json",
    "isDynamicEntry": true
  },
  "../i18n/locales/en-US.json": {
    "resourceType": "script",
    "module": true,
    "prefetch": false,
    "preload": false,
    "file": "BfJUCI54.js",
    "name": "en-US",
    "src": "../i18n/locales/en-US.json",
    "isDynamicEntry": true
  },
  "../node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DVkPf3nX.js",
    "name": "entry",
    "src": "../node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "../i18n/locales/de-DE.json",
      "../i18n/locales/en-US.json"
    ],
    "css": [
      "entry.BIVdsb-V.css"
    ],
    "assets": []
  },
  "entry.BIVdsb-V.css": {
    "file": "entry.BIVdsb-V.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BLVQDoZc.js",
    "name": "index",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "../node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/recover.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "bH6E0U8T.js",
    "name": "recover",
    "src": "pages/recover.vue",
    "isDynamicEntry": true,
    "imports": [
      "../node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/sign-up.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "OYsYSg4h.js",
    "name": "sign-up",
    "src": "pages/sign-up.vue",
    "isDynamicEntry": true,
    "imports": [
      "../node_modules/nuxt/dist/app/entry.js"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
