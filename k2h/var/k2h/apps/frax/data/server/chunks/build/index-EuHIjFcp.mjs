import { _ as _sfc_main$1 } from './PageSection-VgfDQh5Y.mjs';
import { b as useI18n, X as useRouter, d as useSeoMeta, k as _sfc_main$u, Y as _sfc_main$r } from './server.mjs';
import { _ as _sfc_main$2 } from './PageCard-BRo-hvzK.mjs';
import { _ as _sfc_main$3 } from './Tooltip-CabAngid.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, withDirectives, withKeys, vModelText, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCartStore } from './cart-D33wMGUr.mjs';
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
import '@vueuse/core';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const domain = ref("");
    const searchQuery = ref("");
    const results = ref([]);
    const errorMessage = ref("");
    const { t } = useI18n({
      useScope: "global"
    });
    const router = useRouter();
    const domainPattern = new RegExp(
      "^(((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)|((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+([a-zA-Z]{2,}))$"
    );
    function isValidDomain(domain2) {
      const trimmedDomain = domain2.trim().toLowerCase();
      if (!trimmedDomain) return false;
      if (trimmedDomain.length > 253) return false;
      const labels = trimmedDomain.split(".");
      if (labels.length > 1) {
        for (const label of labels) {
          if (!label.length || label.length > 63) return false;
          if (label.startsWith("-") || label.endsWith("-")) return false;
          if (label.includes("--") && !label.startsWith("xn--")) return false;
        }
      } else {
        const label = labels[0];
        if (!label.length || label.length > 63) return false;
        if (label.startsWith("-") || label.endsWith("-")) return false;
        if (label.includes("--") && !label.startsWith("xn--")) return false;
      }
      return domainPattern.test(trimmedDomain);
    }
    const searchDomain = async () => {
      errorMessage.value = "";
      results.value = [];
      const domainResults = [];
      errorMessage.value = t("products.domain.loading");
      if (!isValidDomain(domain.value)) {
        errorMessage.value = t("products.domain.errors.notvalid");
        return;
      }
      searchQuery.value = domain.value.trim();
      try {
        const response = await fetch("https://saci.key2host.com/api/products/domain");
        const data = await response.json();
        console.log(data.packages);
        if (Array.isArray(data.packages)) {
          data.packages.forEach((price) => {
            domainResults.push({
              name: price.name,
              amount: price.amount,
              priceID: price.priceID,
              available: price.available
            });
          });
        } else {
          errorMessage.value = t("products.domain.errors.erranswer");
          return;
        }
      } catch (error) {
        console.log(error);
        errorMessage.value = t("products.domain.errors.confailed");
        return;
      }
      const domainParts = searchQuery.value.split(".");
      const userTld = domainParts.length > 1 ? domainParts[domainParts.length - 1] : null;
      errorMessage.value = "";
      if (userTld) {
        domainResults.sort((a, b) => a.name === userTld ? -1 : b.name === userTld ? 1 : 0);
      }
      results.value = domainResults;
    };
    const buyDomain = (domain2) => {
      const cart = useCartStore();
      if (Array.isArray(results.value) && results.value.length > 0) {
        const domainExtension = domain2.split(".").pop();
        const matchingResult = results.value.find((result) => result.name === domainExtension);
        if (matchingResult) {
          if (domain2) {
            cart.setItem({
              id: matchingResult.priceID,
              name: domain2.toLocaleLowerCase(),
              type: "domain",
              amount: matchingResult.amount
            });
            router.push("/checkout");
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
      const _component_UPageSection = _sfc_main$1;
      const _component_UButton = _sfc_main$u;
      const _component_UPageCard = _sfc_main$2;
      const _component_UTooltip = _sfc_main$3;
      const _component_UModal = _sfc_main$r;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UPageSection, {
        headline: _ctx.$t("products.domain.headline"),
        title: _ctx.$t("products.domain.title"),
        orientation: "horizontal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-center justify-center mt-6"${_scopeId}><div class="w-full max-w-2xl flex"${_scopeId}><input type="text"${ssrRenderAttr("value", domain.value)}${ssrRenderAttr("placeholder", _ctx.$t("products.domain.searchPlaceholder"))} class="w-full p-4 text-lg border border-gray-300 rounded-l-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: searchDomain,
              color: "neutral",
              size: "xl",
              class: "px-6 py-4 rounded-l-none rounded-r-2xl",
              label: unref(t)("products.domain.search"),
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
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
                  createVNode(_component_UButton, {
                    onClick: searchDomain,
                    color: "neutral",
                    size: "xl",
                    class: "px-6 py-4 rounded-l-none rounded-r-2xl",
                    label: unref(t)("products.domain.search"),
                    autofocus: ""
                  }, null, 8, ["label"])
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
          _push(`<div class="w-full flex flex-wrap justify-center gap-4 max-md:max-w-[350px] max-w-[90%] mx-auto mb-4">`);
          _push(ssrRenderComponent(_component_UPageCard, {
            class: ["w-full max-w-6xl relative", !result.available ? "opacity-50" : ""],
            title: `.${result.name.toLowerCase()} Domain`,
            color: result.available ? "primary" : "gray",
            icon: result.available ? "i-heroicons-check-circle text-green-500 text-3xl" : "i-heroicons-x-circle text-gray-500 text-3xl"
          }, {
            description: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Die Domain ${ssrInterpolate(searchQuery.value.split(".")[0] + "." + result.name.toLowerCase())} kostet `);
                _push2(ssrRenderComponent(_component_UTooltip, {
                  text: "Preise inkl. gesetzl. USt.",
                  delay: 0,
                  placement: "top"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help"${_scopeId2}>${ssrInterpolate(result.amount + " €")}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help" }, toDisplayString(result.amount + " €"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(` pro Jahr. `);
              } else {
                return [
                  createTextVNode(" Die Domain " + toDisplayString(searchQuery.value.split(".")[0] + "." + result.name.toLowerCase()) + " kostet ", 1),
                  createVNode(_component_UTooltip, {
                    text: "Preise inkl. gesetzl. USt.",
                    delay: 0,
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help" }, toDisplayString(result.amount + " €"), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createTextVNode(" pro Jahr. ")
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  size: "xl",
                  class: "absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-lg shadow-md hidden sm:block",
                  onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount),
                  autofocus: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  size: "xl",
                  class: "px-4 py-2 rounded-lg shadow-md w-full sm:w-auto sm:self-center sm:hidden",
                  onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount),
                  autofocus: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    size: "xl",
                    class: "absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-lg shadow-md hidden sm:block",
                    onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount),
                    autofocus: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    size: "xl",
                    class: "px-4 py-2 rounded-lg shadow-md w-full sm:w-auto sm:self-center sm:hidden",
                    onClick: ($event) => buyDomain(searchQuery.value.split(".")[0] + "." + result.name, result.available, result.amount),
                    autofocus: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(result.available ? _ctx.$t("products.domain.addBasket") : _ctx.$t("products.domain.transfer.title")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else if (errorMessage.value) {
        _push(`<div class="w-full flex justify-center mb-20"><p class="text-red-500 text-lg">${ssrInterpolate(errorMessage.value)}</p></div>`);
      } else if (searchQuery.value) {
        _push(`<div class="w-full flex justify-center mb-20"><p class="text-gray-500 text-lg">${ssrInterpolate(_ctx.$t("products.domain.noresults"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: showModal.value,
        "onUpdate:open": ($event) => showModal.value = $event,
        dismissible: false
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.selectedDomainAvailable) {
              _push2(`<div class="p-4 text-lg"${_scopeId}> Die Domain ${ssrInterpolate(_ctx.selectedDomain)} kann momentan nicht gekauft werden. </div>`);
            } else {
              _push2(`<div class="p-6 text-center"${_scopeId}><h2 class="text-2xl font-bold mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.title"))}</h2><p class="text-base text-gray-700 mb-6"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.message"))}</p><input type="text"${ssrRenderAttr("placeholder", "AUTH-Schlüssel für " + _ctx.selectedDomain)} class="border border-gray-300 rounded-lg p-2 w-1/2 mb-6"${_scopeId}><div class="flex justify-center gap-4"${_scopeId}><button class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.abort"))}</button><button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"${_scopeId}>${ssrInterpolate(_ctx.$t("products.domain.transfer.continue"))}</button></div></div>`);
            }
          } else {
            return [
              _ctx.selectedDomainAvailable ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-4 text-lg"
              }, " Die Domain " + toDisplayString(_ctx.selectedDomain) + " kann momentan nicht gekauft werden. ", 1)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "p-6 text-center"
              }, [
                createVNode("h2", { class: "text-2xl font-bold mb-2" }, toDisplayString(_ctx.$t("products.domain.transfer.title")), 1),
                createVNode("p", { class: "text-base text-gray-700 mb-6" }, toDisplayString(_ctx.$t("products.domain.transfer.message")), 1),
                createVNode("input", {
                  type: "text",
                  placeholder: "AUTH-Schlüssel für " + _ctx.selectedDomain,
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
//# sourceMappingURL=index-EuHIjFcp.mjs.map
