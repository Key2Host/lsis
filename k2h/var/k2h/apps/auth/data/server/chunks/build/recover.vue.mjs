import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { z as useSeoMeta, A as __nuxt_component_2, q as __nuxt_component_5 } from './server.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_4 } from './Input.vue.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public2.mjs';
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
      const _component_UFormField = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
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
              _push2(`<div class="border-b px-6 py-4 mb-5"${_scopeId}><p class="text-sm text-center"${_scopeId}>Bitte gib die E-Mail-Adresse ein, mit der du dich bei uns registriert hast. Wir senden dir anschließend einen Link zur Zurücksetzung deines Passworts.</p></div><div class="w-full flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "E-Mail Adresse" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail",
                      class: "w-100"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        class: "w-100"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Weiter`);
                  } else {
                    return [
                      createTextVNode("Weiter")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4 mb-5" }, [
                  createVNode("p", { class: "text-sm text-center" }, "Bitte gib die E-Mail-Adresse ein, mit der du dich bei uns registriert hast. Wir senden dir anschließend einen Link zur Zurücksetzung deines Passworts.")
                ]),
                createVNode("div", { class: "w-full flex justify-center" }, [
                  createVNode(_component_UFormField, { label: "E-Mail Adresse" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        class: "w-100"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex justify-end" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Weiter")
                    ]),
                    _: 1
                  })
                ])
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
