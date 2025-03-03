import { _ as __nuxt_component_0 } from './LandingHero-DS0bwsVp.mjs';
import { _ as __nuxt_component_0$1 } from './LandingCTA-CjP_j_I6.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useLocalePath, X as useCartStore, a as useI18n, b as useSeoMeta } from './server.mjs';
import 'tailwind-merge';
import '../nitro/nitro.mjs';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "success",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const cart = useCartStore();
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("checkout.success.title"),
      ogTitle: t("checkout.success.title"),
      description: t("checkout.success.description"),
      ogDescription: t("checkout.success.description"),
      robots: "noindex, nofollow"
    });
    cart.clearBasket();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingHero = __nuxt_component_0;
      const _component_ULandingCTA = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ULandingHero, mergeProps({
        title: _ctx.$t("checkout.success.title"),
        description: _ctx.$t("checkout.success.description"),
        links: [{ label: _ctx.$t("checkout.success.actions.cp"), icon: "i-heroicons-rocket-launch", size: "lg", to: unref(localePath)("https://cp.key2host.com") }, { label: _ctx.$t("checkout.success.actions.home"), icon: "i-heroicons-arrow-small-left", color: "gray", size: "lg", to: unref(localePath)("/") }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingCTA, {
              class: "h-64 flex flex-col items-center justify-center text-center",
              card: ""
            }, {
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(_ctx.$t("checkout.success.content.1"))}</p><small class="opacity-50"${_scopeId2}>${ssrInterpolate(_ctx.$t("checkout.success.content.2"))}</small>`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.$t("checkout.success.content.1")), 1),
                    createVNode("small", { class: "opacity-50" }, toDisplayString(_ctx.$t("checkout.success.content.2")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ULandingCTA, {
                class: "h-64 flex flex-col items-center justify-center text-center",
                card: ""
              }, {
                description: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("checkout.success.content.1")), 1),
                  createVNode("small", { class: "opacity-50" }, toDisplayString(_ctx.$t("checkout.success.content.2")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=success-BgZsDqZY.mjs.map
