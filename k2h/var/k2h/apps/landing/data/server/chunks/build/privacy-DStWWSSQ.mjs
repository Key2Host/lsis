import { _ as __nuxt_component_0 } from './LandingCTA-DiFovUas.mjs';
import { _ as __nuxt_component_1 } from './PageBody-WafUDH-r.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { $ as useCookieNoticeStore, u as useSeoMeta } from './server.mjs';
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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const cookienotice = useCookieNoticeStore();
    useSeoMeta({
      title: "Datenschutz",
      ogTitle: "Datenschutz",
      description: "Hier informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website.",
      ogDescription: "Hier informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website.",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingCTA = __nuxt_component_0;
      const _component_UPageBody = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingCTA, {
        title: "Datenschutz",
        description: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie\n        über die Verarbeitung personenbezogener Daten auf unserer Website."
      }, null, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPageBody, { class: "m-6 w-full max-w-4xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Verantwortlicher </h2><p class="text-lg leading-6 text-center"${_scopeId}><span class="font-medium"${_scopeId}>Key2Host</span><br${_scopeId}> Ottenweg 19<br${_scopeId}> 49479 Ibbenbüren<br${_scopeId}> Deutschland (Germany)<br${_scopeId}> E-Mail: <a href="mailto:privacy@key2host.com" class="text-primary underline"${_scopeId}>privacy@key2host.com</a></p></div><div class="mb-6"${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Datenverarbeitung </h2><p class="text-lg leading-6"${_scopeId}> Wir verarbeiten personenbezogene Daten nur im Einklang mit den geltenden gesetzlichen Bestimmungen, insbesondere der DSGVO. Nachfolgend erhalten Sie eine Übersicht über die Arten der verarbeiteten Daten, die Zwecke der Verarbeitung und die entsprechenden Rechtsgrundlagen. </p></div><div class="mb-6"${_scopeId}><h3 class="text-lg font-semibold mb-2"${_scopeId}> 1. Zugriffsdaten </h3><p${_scopeId}> Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu gehören IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Zugriffszeit. Diese Daten dienen der Gewährleistung der Sicherheit und Funktionalität unserer Website. </p></div><div class="mb-6"${_scopeId}><h3 class="text-lg font-semibold mb-2"${_scopeId}> 2. Kontaktformular und E-Mails </h3><p${_scopeId}> Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. </p></div><div class="mb-6"${_scopeId}><h3 class="text-lg font-semibold mb-2"${_scopeId}> 3. Cookies </h3><p${_scopeId}> Unsere Website verwendet Cookies, um Ihnen eine optimale Nutzererfahrung zu bieten. Weitere Informationen finden Sie in unserer <span class="text-primary underline cursor-pointer"${_scopeId}>Cookie-Richtlinie</span>. </p></div><div class="mb-6"${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Ihre Rechte </h2><p class="text-lg leading-6 text-center"${_scopeId}> Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit. Bitte kontaktieren Sie uns unter der oben angegebenen E-Mail-Adresse, wenn Sie eines dieser Rechte ausüben möchten. </p></div><div${_scopeId}><h2 class="text-xl font-semibold text-center mb-3"${_scopeId}> Aktualisierungen </h2><p class="text-lg leading-6 text-center"${_scopeId}> Diese Datenschutzerklärung wird regelmäßig überprüft und bei Bedarf aktualisiert, um den rechtlichen Anforderungen zu entsprechen. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Verantwortlicher "),
                createVNode("p", { class: "text-lg leading-6 text-center" }, [
                  createVNode("span", { class: "font-medium" }, "Key2Host"),
                  createVNode("br"),
                  createTextVNode(" Ottenweg 19"),
                  createVNode("br"),
                  createTextVNode(" 49479 Ibbenbüren"),
                  createVNode("br"),
                  createTextVNode(" Deutschland (Germany)"),
                  createVNode("br"),
                  createTextVNode(" E-Mail: "),
                  createVNode("a", {
                    href: "mailto:privacy@key2host.com",
                    class: "text-primary underline"
                  }, "privacy@key2host.com")
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Datenverarbeitung "),
                createVNode("p", { class: "text-lg leading-6" }, " Wir verarbeiten personenbezogene Daten nur im Einklang mit den geltenden gesetzlichen Bestimmungen, insbesondere der DSGVO. Nachfolgend erhalten Sie eine Übersicht über die Arten der verarbeiteten Daten, die Zwecke der Verarbeitung und die entsprechenden Rechtsgrundlagen. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h3", { class: "text-lg font-semibold mb-2" }, " 1. Zugriffsdaten "),
                createVNode("p", null, " Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu gehören IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Zugriffszeit. Diese Daten dienen der Gewährleistung der Sicherheit und Funktionalität unserer Website. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h3", { class: "text-lg font-semibold mb-2" }, " 2. Kontaktformular und E-Mails "),
                createVNode("p", null, " Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h3", { class: "text-lg font-semibold mb-2" }, " 3. Cookies "),
                createVNode("p", null, [
                  createTextVNode(" Unsere Website verwendet Cookies, um Ihnen eine optimale Nutzererfahrung zu bieten. Weitere Informationen finden Sie in unserer "),
                  createVNode("span", {
                    class: "text-primary underline cursor-pointer",
                    onClick: ($event) => unref(cookienotice).show()
                  }, "Cookie-Richtlinie", 8, ["onClick"]),
                  createTextVNode(". ")
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Ihre Rechte "),
                createVNode("p", { class: "text-lg leading-6 text-center" }, " Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit. Bitte kontaktieren Sie uns unter der oben angegebenen E-Mail-Adresse, wenn Sie eines dieser Rechte ausüben möchten. ")
              ]),
              createVNode("div", null, [
                createVNode("h2", { class: "text-xl font-semibold text-center mb-3" }, " Aktualisierungen "),
                createVNode("p", { class: "text-lg leading-6 text-center" }, " Diese Datenschutzerklärung wird regelmäßig überprüft und bei Bedarf aktualisiert, um den rechtlichen Anforderungen zu entsprechen. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-DStWWSSQ.mjs.map
