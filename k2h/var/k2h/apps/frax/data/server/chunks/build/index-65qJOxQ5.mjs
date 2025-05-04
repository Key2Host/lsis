import { M as Motion, _ as _sfc_main$1 } from './PageSection-Bp1Prz50.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n, d as useSeoMeta } from './server.mjs';
import 'hey-listen';
import 'reka-ui';
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
import 'better-sqlite3';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("products.lic-cert.title"),
      ogTitle: t("products.lic-cert.title"),
      description: t("products.lic-cert.description"),
      ogDescription: t("products.lic-cert.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Motion = Motion;
      const _component_UPageSection = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageSection, {
              headline: _ctx.$t("products.lic-cert.headline"),
              title: _ctx.$t("products.lic-cert.title"),
              orientation: "horizontal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="opacity-50"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.lic-cert.description"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.lic-cert.description")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageSection, {
                headline: _ctx.$t("products.lic-cert.headline"),
                title: _ctx.$t("products.lic-cert.title"),
                orientation: "horizontal"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.lic-cert.description")), 1)
                ]),
                _: 1
              }, 8, ["headline", "title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-center mb-40 text-4xl"> Coming Soon </p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/lic-cert/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-65qJOxQ5.mjs.map
