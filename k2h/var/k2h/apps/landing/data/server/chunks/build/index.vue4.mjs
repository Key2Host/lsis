import { _ as __nuxt_component_0 } from './LandingSection.vue.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useI18n, b as useSeoMeta } from './server.mjs';
import 'tailwind-merge';
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
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("products.dedicated.title"),
      ogTitle: t("products.dedicated.title"),
      description: t("products.dedicated.description"),
      ogDescription: t("products.dedicated.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: _ctx.$t("products.dedicated.headline"),
        title: _ctx.$t("products.dedicated.title"),
        align: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="opacity-50"${_scopeId}>${ssrInterpolate(_ctx.$t("products.dedicated.description"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.dedicated.description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-center mt-10 text-4xl"> Coming Soon </p><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/dedicated/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue4.mjs.map
