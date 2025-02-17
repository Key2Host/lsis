import { _ as __nuxt_component_0 } from './LandingCTA-DiFovUas.mjs';
import { _ as __nuxt_component_1 } from './PageBody-WafUDH-r.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta, $ as useCookieNoticeStore } from './server.mjs';
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
  __name: "notice",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Impressum",
      ogTitle: "Impressum",
      description: "Hier finden Sie alle rechtlichen Informationen von Key2Host.",
      ogDescription: "Hier finden Sie alle rechtlichen Informationen von Key2Host.",
      robots: "noindex, nofollow"
    });
    const cookienotice = useCookieNoticeStore();
    cookienotice.hide();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingCTA = __nuxt_component_0;
      const _component_UPageBody = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingCTA, {
        title: "Impressum",
        description: "Hier finden Sie alle rechtlichen Informationen von Key2Host."
      }, null, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPageBody, { class: "m-6 w-full max-w-4xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Diensteanbieter </h1><p class="text-lg leading-6"${_scopeId}><span class="font-medium"${_scopeId}>Key2Host</span><br${_scopeId}> Ottenweg 19<br${_scopeId}> 49479 Ibbenbüren<br${_scopeId}> Deutschland (Germany) </p></div><div class="mb-6"${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Kontaktmöglichkeiten </h2><p class="text-lg leading-6 text-center"${_scopeId}> E-Mail: <a href="mailto:info@key2host.com" class="text-primary underline"${_scopeId}>info@key2host.com</a><br${_scopeId}> Telefon: <a href="tel:+4915146274092" class="text-primary underline"${_scopeId}>+49 1514 6274092</a></p></div><div${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Haftungs- und Schutzrechtshinweise </h2><ul class="text-lg leading-6 text-center"${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>Haftungsausschluss:</span> Die Inhalte dieses Onlineangebotes wurden sorgfältig erstellt und dienen nur der Information... </li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>Links auf fremde Webseiten:</span> Die Inhalte fremder Webseiten liegen außerhalb unseres Verantwortungsbereichs... </li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>Urheberrechte und Markenrechte:</span> Alle Inhalte dieser Website sind durch Urheberrechte geschützt... </li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>Hinweise auf Rechtsverstöße:</span> Sollten Sie Rechtsverstöße bemerken, bitten wir um einen Hinweis... </li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Diensteanbieter "),
                createVNode("p", { class: "text-lg leading-6" }, [
                  createVNode("span", { class: "font-medium" }, "Key2Host"),
                  createVNode("br"),
                  createTextVNode(" Ottenweg 19"),
                  createVNode("br"),
                  createTextVNode(" 49479 Ibbenbüren"),
                  createVNode("br"),
                  createTextVNode(" Deutschland (Germany) ")
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Kontaktmöglichkeiten "),
                createVNode("p", { class: "text-lg leading-6 text-center" }, [
                  createTextVNode(" E-Mail: "),
                  createVNode("a", {
                    href: "mailto:info@key2host.com",
                    class: "text-primary underline"
                  }, "info@key2host.com"),
                  createVNode("br"),
                  createTextVNode(" Telefon: "),
                  createVNode("a", {
                    href: "tel:+4915146274092",
                    class: "text-primary underline"
                  }, "+49 1514 6274092")
                ])
              ]),
              createVNode("div", null, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Haftungs- und Schutzrechtshinweise "),
                createVNode("ul", { class: "text-lg leading-6 text-center" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, "Haftungsausschluss:"),
                    createTextVNode(" Die Inhalte dieses Onlineangebotes wurden sorgfältig erstellt und dienen nur der Information... ")
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, "Links auf fremde Webseiten:"),
                    createTextVNode(" Die Inhalte fremder Webseiten liegen außerhalb unseres Verantwortungsbereichs... ")
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, "Urheberrechte und Markenrechte:"),
                    createTextVNode(" Alle Inhalte dieser Website sind durch Urheberrechte geschützt... ")
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, "Hinweise auf Rechtsverstöße:"),
                    createTextVNode(" Sollten Sie Rechtsverstöße bemerken, bitten wir um einen Hinweis... ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/notice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=notice-DKvVLKIX.mjs.map
