import { _ as __nuxt_component_0 } from './LandingSection-C0LNW591.mjs';
import { _ as __nuxt_component_1 } from './LandingCard-DBRdhmsO.mjs';
import { a as useI18n, b as useSeoMeta, ae as __nuxt_component_2$1, X as useCartStore } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, withDirectives, withKeys, vModelText, toDisplayString, createTextVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import 'tailwind-merge';
import '@vueuse/core';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const selectedDomain = ref("");
    const selectedDomainAvailable = ref("");
    const domain = ref("");
    const searchQuery = ref("");
    const results = ref([]);
    const errorMessage = ref("");
    const { t } = useI18n({
      useScope: "global"
    });
    const searchDomain = async () => {
      errorMessage.value = "";
      results.value = [];
      errorMessage.value = t("products.domain.loading");
      const domainPattern = /^[a-zA-Z0-9.-]+$/;
      if (!domain.value.trim() || !domainPattern.test(domain.value) || domain.value.startsWith(".")) {
        errorMessage.value = t("products.domain.notvalid");
        return;
      }
      searchQuery.value = domain.value.trim();
      console.log(`Suche nach Domain: ${searchQuery.value}`);
      let domainResults = await fetchPackageInfo();
      const domainParts = searchQuery.value.split(".");
      const userTld = domainParts.length > 1 ? domainParts[domainParts.length - 1] : "";
      errorMessage.value = "";
      domainResults.sort((a, b) => a.tld === userTld ? -1 : b.tld === userTld ? 1 : 0);
      results.value = domainResults;
    };
    const fetchPackageInfo = async () => {
      try {
        const response = await fetch("https://saci.key2host.com/api/user/getDomainInfo");
        const data = await response.json();
        if (Array.isArray(data.packages)) {
          return data.packages;
        } else {
          console.error("Die API hat kein Array von Paketen zurückgegeben.");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Webspace-Informationen:", error);
      }
    };
    const buyDomain = (domain2, available, amount) => {
      selectedDomain.value = domain2;
      selectedDomainAvailable.value = available;
      const cart = useCartStore();
      if (Array.isArray(results.value) && results.value.length > 0) {
        const domainExtension = domain2.split(".").pop();
        const matchingResult = results.value.find((result) => result.name === domainExtension);
        if (matchingResult) {
          if (selectedDomainAvailable.value) {
            cart.addToBasket({ type: "domain", name: selectedDomain.value, amount: matchingResult.amount, id: matchingResult.priceID });
            cart.openSlideover();
          } else {
            showModal.value = true;
          }
        } else {
          console.log("Keine passende Domain gefunden.");
        }
      } else {
        console.log("Results ist kein gültiges Array oder leer:", results.value);
      }
    };
    useSeoMeta({
      title: t("products.domain.title"),
      ogTitle: t("products.domain.title"),
      description: t("products.domain.description"),
      ogDescription: t("products.domain.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_ULandingCard = __nuxt_component_1;
      const _component_UModal = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: _ctx.$t("products.domain.headline"),
        title: _ctx.$t("products.domain.title"),
        align: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-center justify-center mt-6"${_scopeId}><div class="w-full max-w-2xl flex"${_scopeId}><input type="text"${ssrRenderAttr("value", domain.value)}${ssrRenderAttr("placeholder", _ctx.$t("products.domain.searchPlaceholder"))} class="w-full p-4 text-lg border border-gray-300 rounded-l-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><button class="px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-r-2xl shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.search"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-center justify-center mt-6" }, [
                createVNode("div", { class: "w-full max-w-2xl flex" }, [
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => domain.value = $event,
                    onKeyup: withKeys(searchDomain, ["enter"]),
                    placeholder: _ctx.$t("products.domain.searchPlaceholder"),
                    class: "w-full p-4 text-lg border border-gray-300 rounded-l-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 40, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, domain.value]
                  ]),
                  createVNode("button", {
                    onClick: searchDomain,
                    class: "px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-r-2xl shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                  }, toDisplayString(_ctx.$t("products.domain.search")), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (searchQuery.value && results.value.length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(results.value, (result) => {
          _push(`<div class="w-full flex flex-wrap justify-center gap-4 mb-4">`);
          _push(ssrRenderComponent(_component_ULandingCard, {
            class: ["w-full max-w-6xl relative", !result.available ? "opacity-50" : ""],
            title: `.${result.name} Domain`,
            color: result.available ? "primary" : "gray",
            icon: result.available ? "i-heroicons-check-circle text-green-500 text-3xl" : "i-heroicons-x-circle text-gray-500 text-3xl"
          }, {
            description: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Die Domain ${ssrInterpolate(searchQuery.value.split(".")[0] + "." + result.name)} kostet ${ssrInterpolate(result.amount + "€")} pro Jahr. `);
              } else {
                return [
                  createTextVNode(" Die Domain " + toDisplayString(searchQuery.value.split(".")[0] + "." + result.name) + " kostet " + toDisplayString(result.amount + "€") + " pro Jahr. ", 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="${ssrRenderClass([result.available ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600", "absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-lg shadow-md hidden sm:block"])}"${_scopeId}>${ssrInterpolate(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title"))}</button><button class="${ssrRenderClass([result.available ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600", "px-4 py-2 rounded-lg shadow-md w-full sm:w-auto sm:self-center sm:hidden"])}"${_scopeId}>${ssrInterpolate(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title"))}</button>`);
              } else {
                return [
                  createVNode("button", {
                    class: ["absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-lg shadow-md hidden sm:block", result.available ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600"],
                    onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount)
                  }, toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 11, ["onClick"]),
                  createVNode("button", {
                    class: ["px-4 py-2 rounded-lg shadow-md w-full sm:w-auto sm:self-center sm:hidden", result.available ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600"],
                    onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount)
                  }, toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 11, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else if (errorMessage.value) {
        _push(`<div class="w-full flex justify-center mt-6"><p class="text-red-500 text-lg">${ssrInterpolate(errorMessage.value)}</p></div>`);
      } else if (searchQuery.value) {
        _push(`<div class="w-full flex justify-center mt-6"><p class="text-gray-500 text-lg">${ssrInterpolate(_ctx.$t("products.domain.noresults"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: showModal.value,
        "onUpdate:modelValue": ($event) => showModal.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (selectedDomainAvailable.value) {
              _push2(`<div class="p-4 text-lg"${_scopeId}> Die Domain ${ssrInterpolate(selectedDomain.value)} kann momentan nicht gekauft werden. </div>`);
            } else {
              _push2(`<div class="p-6 text-center"${_scopeId}><h2 class="text-2xl font-bold mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.title"))}</h2><p class="text-base text-gray-700 mb-6"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.message"))}</p><input type="text"${ssrRenderAttr("placeholder", "AUTH-Schlüssel für " + selectedDomain.value)} class="border border-gray-300 rounded-lg p-2 w-1/2 mb-6"${_scopeId}><div class="flex justify-center gap-4"${_scopeId}><button class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.abort"))}</button><button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.continue"))}</button></div></div>`);
            }
          } else {
            return [
              selectedDomainAvailable.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-4 text-lg"
              }, " Die Domain " + toDisplayString(selectedDomain.value) + " kann momentan nicht gekauft werden. ", 1)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "p-6 text-center"
              }, [
                createVNode("h2", { class: "text-2xl font-bold mb-2" }, toDisplayString(_ctx.$t("products.domain.transfer.title")), 1),
                createVNode("p", { class: "text-base text-gray-700 mb-6" }, toDisplayString(_ctx.$t("products.domain.transfer.message")), 1),
                createVNode("input", {
                  type: "text",
                  placeholder: "AUTH-Schlüssel für " + selectedDomain.value,
                  class: "border border-gray-300 rounded-lg p-2 w-1/2 mb-6"
                }, null, 8, ["placeholder"]),
                createVNode("div", { class: "flex justify-center gap-4" }, [
                  createVNode("button", {
                    class: "px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400",
                    onClick: ($event) => showModal.value = false
                  }, toDisplayString(_ctx.$t("products.domain.transfer.abort")), 9, ["onClick"]),
                  createVNode("button", { class: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" }, toDisplayString(_ctx.$t("products.domain.transfer.continue")), 1)
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/domain/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bk7qoSAl.mjs.map
