import { _ as _sfc_main$1 } from './PageCTA-DLP7kNcK.mjs';
import { _ as _sfc_main$2 } from './PageBody-DQTQFfQj.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { j as useCookieNoticeStore, b as useI18n, d as useSeoMeta } from './server.mjs';
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
      const _component_UPageCTA = _sfc_main$1;
      const _component_UPageBody = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UPageCTA, {
        title: _ctx.$t("legal.notice.title"),
        description: _ctx.$t("legal.notice.description")
      }, null, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPageBody, { class: "m-6 w-full max-w-4xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.provider"))}</h1><p class="ml-4 text-lg leading-6"${_scopeId}><span class="font-medium"${_scopeId}>Key2Host</span><br${_scopeId}> Ottenweg 19<br${_scopeId}> 49479 Ibbenbüren<br${_scopeId}> Deutschland </p></div><div class="ml-4 mb-6"${_scopeId}><h2 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.ceo"))}</h2><p class="text-lg leading-6"${_scopeId}> Lukas Poggemann (CEO) </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.title"))}</h1><p class="ml-4 text-lg leading-6"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.email"))}: <a href="mailto:info@key2host.com" class="text-primary underline"${_scopeId}>info@key2host.com</a><br${_scopeId}> ${ssrInterpolate(_ctx.$t("legal.notice.contact.phone"))}: <a href="tel:+4915146274092" class="text-primary underline"${_scopeId}>+49 1514 6274092</a></p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.vat.title"))}</h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> DE XXXXXXXXX<br${_scopeId}></p><p class="ml-4 text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.vat.notice"))}</p><p class="ml-4 text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.vat.vat"))}</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.socialmedia.title"))}</h1><p class="ml-4 text-lg leading-6"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.socialmedia.description"))}</p></div><div${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.title"))}</h1><ul class="ml-4 text-lg leading-6"${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.1.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.1.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.2.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.2.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.3.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.3.description"))}</li><br${_scopeId}><li${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.liability.items.4.title"))}:</span> ${ssrInterpolate(_ctx.$t("legal.notice.liability.items.4.description"))}</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.provider")), 1),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, [
                  createVNode("span", { class: "font-medium" }, "Key2Host"),
                  createVNode("br"),
                  createTextVNode(" Ottenweg 19"),
                  createVNode("br"),
                  createTextVNode(" 49479 Ibbenbüren"),
                  createVNode("br"),
                  createTextVNode(" Deutschland ")
                ])
              ]),
              createVNode("div", { class: "ml-4 mb-6" }, [
                createVNode("h2", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("legal.notice.ceo")), 1),
                createVNode("p", { class: "text-lg leading-6" }, " Lukas Poggemann (CEO) ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.contact.title")), 1),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, [
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
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.vat.title")), 1),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, [
                  createTextVNode(" DE XXXXXXXXX"),
                  createVNode("br")
                ]),
                createVNode("p", { class: "ml-4 text-sm" }, toDisplayString(_ctx.$t("legal.notice.vat.notice")), 1),
                createVNode("p", { class: "ml-4 text-sm" }, toDisplayString(_ctx.$t("legal.notice.vat.vat")), 1)
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.socialmedia.title")), 1),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, toDisplayString(_ctx.$t("legal.notice.socialmedia.description")), 1)
              ]),
              createVNode("div", null, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.liability.title")), 1),
                createVNode("ul", { class: "ml-4 text-lg leading-6" }, [
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
//# sourceMappingURL=notice-B2jsvfmr.mjs.map
