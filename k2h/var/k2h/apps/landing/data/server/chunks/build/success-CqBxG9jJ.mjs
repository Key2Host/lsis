import { _ as __nuxt_component_0 } from './LandingHero-CV1LSvXp.mjs';
import { _ as __nuxt_component_0$1 } from './LandingCTA-DiFovUas.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as useCartStore, u as useSeoMeta } from './server.mjs';
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
    const cart = useCartStore();
    useSeoMeta({
      title: "Bestellung abgeschlossen",
      ogTitle: "Bestellung abgeschlossen",
      description: "Coming Soon",
      ogDescription: "Coming Soon",
      robots: "noindex, nofollow"
    });
    cart.clearBasket();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingHero = __nuxt_component_0;
      const _component_ULandingCTA = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ULandingHero, mergeProps({
        title: "Bestellung abgeschlossen",
        description: "Vielen Dank für dein Vertrauen in Key2Host.",
        links: [{ label: "Zum Control Panel", icon: "i-heroicons-rocket-launch", size: "lg", to: "https://cp.key2host.com" }, { label: "Zurück zur Startseite", icon: "i-heroicons-arrow-small-left", color: "gray", size: "lg", to: "/" }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingCTA, {
              class: "h-64 flex flex-col items-center justify-center text-center",
              card: ""
            }, {
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>Die Transaktion wurde erfolgreich bearbeitet. Die Rechnung erhältst du automatisch via E-Mail.</p><small class="opacity-50"${_scopeId2}>Bitte habe einen Moment Geduld, während dein Service automatisch vom System angelegt wird.</small>`);
                } else {
                  return [
                    createVNode("p", null, "Die Transaktion wurde erfolgreich bearbeitet. Die Rechnung erhältst du automatisch via E-Mail."),
                    createVNode("small", { class: "opacity-50" }, "Bitte habe einen Moment Geduld, während dein Service automatisch vom System angelegt wird.")
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
                  createVNode("p", null, "Die Transaktion wurde erfolgreich bearbeitet. Die Rechnung erhältst du automatisch via E-Mail."),
                  createVNode("small", { class: "opacity-50" }, "Bitte habe einen Moment Geduld, während dein Service automatisch vom System angelegt wird.")
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=success-CqBxG9jJ.mjs.map
