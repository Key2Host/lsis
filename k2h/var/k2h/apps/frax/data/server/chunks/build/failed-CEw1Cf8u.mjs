import { _ as _sfc_main$1 } from './PageHero-CUSKVwEs.mjs';
import { _ as _sfc_main$2 } from './PageCTA-DLP7kNcK.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useLocalePath, b as useI18n, d as useSeoMeta } from './server.mjs';
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
  __name: "failed",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("checkout.failed.title"),
      ogTitle: t("checkout.failed.title"),
      description: t("checkout.failed.description"),
      ogDescription: t("checkout.failed.description"),
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1;
      const _component_UPageCTA = _sfc_main$2;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({
        title: _ctx.$t("checkout.failed.title"),
        description: _ctx.$t("checkout.failed.description"),
        links: [{ label: _ctx.$t("checkout.failed.actions.home"), icon: "i-heroicons-arrow-small-left", color: "primary", size: "lg", to: unref(localePath)("/") }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCTA, { variant: "subtle" }, {
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-xl"${_scopeId2}>${ssrInterpolate(_ctx.$t("checkout.failed.content.1"))}</p><small class="opacity-50"${_scopeId2}>${ssrInterpolate(_ctx.$t("checkout.failed.content.2"))}</small>`);
                } else {
                  return [
                    createVNode("p", { class: "text-xl" }, toDisplayString(_ctx.$t("checkout.failed.content.1")), 1),
                    createVNode("small", { class: "opacity-50" }, toDisplayString(_ctx.$t("checkout.failed.content.2")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageCTA, { variant: "subtle" }, {
                description: withCtx(() => [
                  createVNode("p", { class: "text-xl" }, toDisplayString(_ctx.$t("checkout.failed.content.1")), 1),
                  createVNode("small", { class: "opacity-50" }, toDisplayString(_ctx.$t("checkout.failed.content.2")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/failed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=failed-CEw1Cf8u.mjs.map
