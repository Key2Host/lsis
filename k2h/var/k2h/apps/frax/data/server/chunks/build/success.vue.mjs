import { _ as __nuxt_component_0 } from './PageHero.vue.mjs';
import { _ as __nuxt_component_0$1 } from './PageCTA.vue.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useLocalePath, A as useCartStore, a as useI18n, b as useSeoMeta } from './server.mjs';
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
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'vaul-vue';
import 'reka-ui/namespaced';

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
      const _component_UPageHero = __nuxt_component_0;
      const _component_UPageCTA = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({
        title: _ctx.$t("checkout.success.title"),
        description: _ctx.$t("checkout.success.description"),
        links: [{ label: _ctx.$t("checkout.success.actions.cp"), icon: "i-heroicons-rocket-launch", size: "lg", to: unref(localePath)("https://cp.key2host.com") }, { label: _ctx.$t("checkout.success.actions.home"), icon: "i-heroicons-arrow-small-left", color: "gray", size: "lg", to: unref(localePath)("/") }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCTA, {
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
              createVNode(_component_UPageCTA, {
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
//# sourceMappingURL=success.vue.mjs.map
