import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { _ as __nuxt_component_1 } from './Badge.vue.mjs';
import { c as __nuxt_component_1$1 } from './server.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'reka-ui';
import '@vueuse/core';
import './tv.mjs';
import 'tailwind-variants';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
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
import 'reka-ui/namespaced';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPageCard = __nuxt_component_0;
  const _component_UBadge = __nuxt_component_1;
  const _component_UButton = __nuxt_component_1$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Passwort",
    variant: "subtle"
  }, {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-between items-center w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UBadge, {
          icon: "i-heroicons-exclamation-triangle",
          size: "md",
          color: "warning",
          variant: "outline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dein Passwort wurde zuletzt vor 90 Tagen geändert.`);
            } else {
              return [
                createTextVNode("Dein Passwort wurde zuletzt vor 90 Tagen geändert.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Bearbeiten`);
            } else {
              return [
                createTextVNode("Bearbeiten")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-between items-center w-full" }, [
            createVNode(_component_UBadge, {
              icon: "i-heroicons-exclamation-triangle",
              size: "md",
              color: "warning",
              variant: "outline"
            }, {
              default: withCtx(() => [
                createTextVNode("Dein Passwort wurde zuletzt vor 90 Tagen geändert.")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              color: "neutral",
              variant: "subtle"
            }, {
              default: withCtx(() => [
                createTextVNode("Bearbeiten")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "2-Faktor Authentifizierung",
    variant: "subtle"
  }, {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-between items-center w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UBadge, {
          icon: "i-heroicons-exclamation-circle",
          size: "md",
          color: "error",
          variant: "soft"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dein Konto ist nicht geschützt!`);
            } else {
              return [
                createTextVNode("Dein Konto ist nicht geschützt!")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Bearbeiten`);
            } else {
              return [
                createTextVNode("Bearbeiten")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-between items-center w-full" }, [
            createVNode(_component_UBadge, {
              icon: "i-heroicons-exclamation-circle",
              size: "md",
              color: "error",
              variant: "soft"
            }, {
              default: withCtx(() => [
                createTextVNode("Dein Konto ist nicht geschützt!")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              color: "neutral",
              variant: "subtle",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode("Bearbeiten")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Passkeys",
    variant: "subtle"
  }, {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-between items-center w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UBadge, {
          icon: "i-heroicons-exclamation-circle",
          size: "md",
          color: "error",
          variant: "soft"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dein Konto ist nicht geschützt!`);
            } else {
              return [
                createTextVNode("Dein Konto ist nicht geschützt!")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Bearbeiten`);
            } else {
              return [
                createTextVNode("Bearbeiten")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-between items-center w-full" }, [
            createVNode(_component_UBadge, {
              icon: "i-heroicons-exclamation-circle",
              size: "md",
              color: "error",
              variant: "soft"
            }, {
              default: withCtx(() => [
                createTextVNode("Dein Konto ist nicht geschützt!")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              color: "neutral",
              variant: "subtle",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode("Bearbeiten")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr class="opacity-50">`);
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Daten exportieren",
    description: "Protokolle, Logs und weiteres mit einem Klick herunterladen.",
    variant: "subtle"
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UButton, {
          label: "Daten herunterladen",
          size: "md",
          color: "info"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UButton, {
            label: "Daten herunterladen",
            size: "md",
            color: "info"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Konto löschen",
    description: "Dein Konto wird gelöscht und alle Dienste gekündigt.",
    class: "bg-gradient-to-tl from-(--ui-error)/10 from-5% to-(--ui-bg)"
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UButton, {
          label: "Konto schließen",
          size: "md",
          color: "error"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UButton, {
            label: "Konto schließen",
            size: "md",
            color: "error"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { security as default };
//# sourceMappingURL=security.vue.mjs.map
