import { _ as __nuxt_component_0 } from './LandingSection-Dlelddfd.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "VPS & Root-Server",
      ogTitle: "VPS & Root-Server",
      description: "Finde den perfekten Server für dein Projekt!",
      ogDescription: "Finde den perfekten Server für dein Projekt!"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: "Produkte > VPS & Root-Server",
        title: "Finde den perfekten Server für dein Projekt!",
        align: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="opacity-50"${_scopeId}>Setzen Sie auf höchste Performance und volle Kontrolle mit unseren VPS und Root-Servern. Ob für anspruchsvolle Anwendungen, Hosting-Projekte oder Unternehmenslösungen – hier bekommen Sie skalierbare Ressourcen, schnelle Anbindungen und maximale Sicherheit.</p>`);
          } else {
            return [
              createVNode("p", { class: "opacity-50" }, "Setzen Sie auf höchste Performance und volle Kontrolle mit unseren VPS und Root-Servern. Ob für anspruchsvolle Anwendungen, Hosting-Projekte oder Unternehmenslösungen – hier bekommen Sie skalierbare Ressourcen, schnelle Anbindungen und maximale Sicherheit.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/vps-root/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Du3yxny3.mjs.map
