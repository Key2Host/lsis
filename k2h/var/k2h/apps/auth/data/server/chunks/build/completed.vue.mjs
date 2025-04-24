import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_7 } from './Progress.vue.mjs';
import { w as useSeoMeta, x as __nuxt_component_2 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public2.mjs';
import 'reka-ui';
import '@vueuse/core';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "completed",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { title: "Persönliche Daten", icon: "i-lucide-book-user" },
      { title: "Sicherheit", icon: "i-lucide-lock" },
      { title: "ID-Check", icon: "i-lucide-id-card" },
      { title: "Abschluss", icon: "i-lucide-bookmark-check" }
    ];
    const currentStep = ref(3);
    setTimeout(() => {
      (void 0).location.href = "https://cp.key2host.com";
    }, 2500);
    useSeoMeta({
      title: "Konto erstellen",
      ogTitle: "Konto erstellen",
      description: "Konto erstellen",
      ogDescription: "Konto erstellen",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_UStepper = __nuxt_component_1;
      const _component_UCard = __nuxt_component_2;
      const _component_UProgress = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: "/",
        class: "flex items-center mt-6 mb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Key2Host Logo" class="w-6 h-6"${_scopeId}><span class="font-bold text-lg ml-2"${_scopeId}>Key2Host</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Key2Host Logo",
                class: "w-6 h-6"
              }),
              createVNode("span", { class: "font-bold text-lg ml-2" }, "Key2Host")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6"><span class="font-bold text-4xl ml-2">Konto erstellen</span></div><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_component_UStepper, {
        disabled: "",
        modelValue: currentStep.value,
        "onUpdate:modelValue": ($event) => currentStep.value = $event,
        items
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, {
        variant: "subtle",
        class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>Abschluss</span><p class="text-sm"${_scopeId}>Ihr Konto wurde erfolgreich erstellt.</p></div><div class="px-6 py-6"${_scopeId}><div class="flex items-center justify-center bg-gray-100 rounded-md mb-2"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}> Weiterleiten zum Control Panel </div></div>`);
            _push2(ssrRenderComponent(_component_UProgress, { animation: "carousel" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-b px-6 py-4" }, [
                createVNode("span", { class: "font-bold text-2xl" }, "Abschluss"),
                createVNode("p", { class: "text-sm" }, "Ihr Konto wurde erfolgreich erstellt.")
              ]),
              createVNode("div", { class: "px-6 py-6" }, [
                createVNode("div", { class: "flex items-center justify-center bg-gray-100 rounded-md mb-2" }, [
                  createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, " Weiterleiten zum Control Panel ")
                ]),
                createVNode(_component_UProgress, { animation: "carousel" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up/completed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=completed.vue.mjs.map
