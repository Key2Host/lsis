import { _ as __nuxt_component_0 } from './LandingCTA-Bbomutg2.mjs';
import { _ as __nuxt_component_1 } from './PageBody-T8MvjwwK.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a0 as useCookieNoticeStore, u as useI18n, a as useSeoMeta } from './server.mjs';
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
    const cookienotice = useCookieNoticeStore();
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("legal.notice.title"),
      ogTitle: t("legal.notice.title"),
      description: t("legal.notice.description"),
      ogDescription: t("legal.notice.description"),
      robots: "noindex, nofollow"
    });
    cookienotice.hide();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingCTA = __nuxt_component_0;
      const _component_UPageBody = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingCTA, {
        title: _ctx.$t("legal.notice.title"),
        description: _ctx.$t("legal.notice.description")
      }, null, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPageBody, { class: "m-6 w-full max-w-4xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-4"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.provider"))}</h1><p class="text-lg leading-6"${_scopeId}><span class="font-medium"${_scopeId}>Key2Host</span><br${_scopeId}> Ottenweg 19<br${_scopeId}> 49479 Ibbenbüren<br${_scopeId}> Deutschland (Germany) </p></div><div class="mb-6"${_scopeId}><h2 class="text-lg font-semibold text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.ceo"))}</h2><p class="text-lg leading-6 text-center"${_scopeId}> Lukas Poggemann </p></div><div class="text-center mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.title"))}</h1><p class="text-lg leading-6 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.email"))}: <a href="mailto:info@key2host.com" class="text-primary underline"${_scopeId}>info@key2host.com</a><br${_scopeId}> ${ssrInterpolate(_ctx.$t("legal.notice.contact.phone"))}: <a href="tel:+4915146274092" class="text-primary underline"${_scopeId}>+49 1514 6274092</a></p></div><div class="text-center mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.vat.title"))}</h1><p class="text-lg leading-6 text-center"${_scopeId}> DE XXXXXXXXX<br${_scopeId}><small${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.vat.notice"))}</small></p></div><div class="text-center mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.dispute.title"))}</h1><p class="text-lg leading-6 text-center"${_scopeId}> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" class="text-primary underline" target="_blank"${_scopeId}>https://ec.europa.eu/consumers/odr/</a> finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.<br${_scopeId}> Wir sind zur Beilegung von Streitigkeiten mit Verbrauchern vor einer Verbraucherschlichtungsstelle bereit. </p></div><div class="text-center mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.socialmedia.title"))}</h1><p class="text-lg leading-6 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.socialmedia.description"))}</p></div><div class="text-center"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.title"))}</h1><ul class="text-lg leading-6 text-center"${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.1.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.1.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.2.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.2.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.3.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.3.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.4.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.4.description"))}</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-4" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.provider")), 1),
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
                createVNode("h2", { class: "text-lg font-semibold text-center" }, toDisplayString(_ctx.$t("legal.notice.ceo")), 1),
                createVNode("p", { class: "text-lg leading-6 text-center" }, " Lukas Poggemann ")
              ]),
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.contact.title")), 1),
                createVNode("p", { class: "text-lg leading-6 text-center" }, [
                  createTextVNode(toDisplayString(_ctx.$t("legal.notice.contact.email")) + ": ", 1),
                  createVNode("a", {
                    href: "mailto:info@key2host.com",
                    class: "text-primary underline"
                  }, "info@key2host.com"),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.contact.phone")) + ": ", 1),
                  createVNode("a", {
                    href: "tel:+4915146274092",
                    class: "text-primary underline"
                  }, "+49 1514 6274092")
                ])
              ]),
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.vat.title")), 1),
                createVNode("p", { class: "text-lg leading-6 text-center" }, [
                  createTextVNode(" DE XXXXXXXXX"),
                  createVNode("br"),
                  createVNode("small", null, toDisplayString(_ctx.$t("legal.notice.vat.notice")), 1)
                ])
              ]),
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.dispute.title")), 1),
                createVNode("p", { class: "text-lg leading-6 text-center" }, [
                  createTextVNode(" Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter "),
                  createVNode("a", {
                    href: "https://ec.europa.eu/consumers/odr/",
                    class: "text-primary underline",
                    target: "_blank"
                  }, "https://ec.europa.eu/consumers/odr/"),
                  createTextVNode(" finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen."),
                  createVNode("br"),
                  createTextVNode(" Wir sind zur Beilegung von Streitigkeiten mit Verbrauchern vor einer Verbraucherschlichtungsstelle bereit. ")
                ])
              ]),
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.socialmedia.title")), 1),
                createVNode("p", { class: "text-lg leading-6 text-center" }, toDisplayString(_ctx.$t("legal.notice.socialmedia.description")), 1)
              ]),
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.liability.title")), 1),
                createVNode("ul", { class: "text-lg leading-6 text-center" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.$t("legal.notice.liability.items.1.title")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.liability.items.1.description")), 1)
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.$t("legal.notice.liability.items.2.title")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.liability.items.2.description")), 1)
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.$t("legal.notice.liability.items.3.title")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.liability.items.3.description")), 1)
                  ]),
                  createVNode("br"),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.$t("legal.notice.liability.items.4.title")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.liability.items.4.description")), 1)
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notice-iIrUg-Lz.mjs.map
