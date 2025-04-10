import { defineComponent, useSSRContext } from 'vue';
import { C as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import '@iconify/utils';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue/server-renderer';
import 'devalue';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Konto erstellen",
      ogTitle: "Konto erstellen",
      description: "Konto erstellen",
      ogDescription: "Konto erstellen"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(` Coming Soon `);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up.vue.mjs.map
