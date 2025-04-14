import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { z as useSeoMeta, A as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recover",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Passwort zurücksetzen",
      ogTitle: "Passwort zurücksetzen",
      description: "Passwort zurücksetzen",
      ogDescription: "Passwort zurücksetzen"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_UCard = __nuxt_component_2;
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
      _push(`<div class="mb-6"><span class="font-bold text-4xl ml-2">Passwort vergessen</span></div>`);
      {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Coming Soon `);
            } else {
              return [
                createTextVNode(" Coming Soon ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recover.vue.mjs.map
