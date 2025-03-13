import { _ as __nuxt_component_0 } from './PageCTA.vue.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { r as tv, _ as _appConfig, a as useI18n, b as useSeoMeta } from './server.mjs';
import { _ as __nuxt_component_2 } from './PageCard.vue.mjs';
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
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'vaul-vue';
import 'reka-ui/namespaced';

const theme = {
  "base": "relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform"
};

var _a;
const appConfigPageColumns = _appConfig;
const pageColumns = tv({ extend: tv(theme), ...((_a = appConfigPageColumns.uiPro) == null ? void 0 : _a.pageColumns) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageColumns",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(pageColumns)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageColumns.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UPageColumns" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tos",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "global"
    });
    useSeoMeta({
      title: t("legal.tos.title"),
      ogTitle: t("legal.tos.title"),
      description: t("legal.tos.description"),
      ogDescription: t("legal.tos.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCTA = __nuxt_component_0;
      const _component_UPageColumns = __nuxt_component_1;
      const _component_UPageCard = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UPageCTA, {
        title: unref(t)("legal.tos.title"),
        description: unref(t)("legal.tos.description")
      }, null, _parent));
      _push(ssrRenderComponent(_component_UPageColumns, { class: "m-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-document-text",
              title: unref(t)("legal.tos.items.1.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.1.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-check-circle",
              title: unref(t)("legal.tos.items.2.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.2.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-server",
              title: unref(t)("legal.tos.items.3.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.3.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-chart-bar",
              title: unref(t)("legal.tos.items.4.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.4.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-currency-euro",
              title: unref(t)("legal.tos.items.5.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.5.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-user-circle",
              title: unref(t)("legal.tos.items.6.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.6.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-eye-slash",
              title: unref(t)("legal.tos.items.7.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.7.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-lock-closed",
              title: unref(t)("legal.tos.items.8.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.8.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-shield-exclamation",
              title: unref(t)("legal.tos.items.9.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.9.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-scale",
              title: unref(t)("legal.tos.items.10.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.10.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-hand-raised",
              title: unref(t)("legal.tos.items.11.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.11.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-bug-ant",
              title: unref(t)("legal.tos.items.12.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.12.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-exclamation-triangle",
              title: unref(t)("legal.tos.items.13.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.13.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-calendar",
              title: unref(t)("legal.tos.items.14.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.14.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-exclamation-circle",
              title: unref(t)("legal.tos.items.15.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.15.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-information-circle",
              title: unref(t)("legal.tos.items.16.title"),
              variant: "subtle",
              description: unref(t)("legal.tos.items.16.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-document-text",
                title: unref(t)("legal.tos.items.1.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.1.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-check-circle",
                title: unref(t)("legal.tos.items.2.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.2.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-server",
                title: unref(t)("legal.tos.items.3.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.3.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-chart-bar",
                title: unref(t)("legal.tos.items.4.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.4.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-currency-euro",
                title: unref(t)("legal.tos.items.5.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.5.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-user-circle",
                title: unref(t)("legal.tos.items.6.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.6.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-eye-slash",
                title: unref(t)("legal.tos.items.7.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.7.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-lock-closed",
                title: unref(t)("legal.tos.items.8.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.8.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-shield-exclamation",
                title: unref(t)("legal.tos.items.9.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.9.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-scale",
                title: unref(t)("legal.tos.items.10.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.10.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-hand-raised",
                title: unref(t)("legal.tos.items.11.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.11.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-bug-ant",
                title: unref(t)("legal.tos.items.12.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.12.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-exclamation-triangle",
                title: unref(t)("legal.tos.items.13.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.13.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-calendar",
                title: unref(t)("legal.tos.items.14.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.14.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-exclamation-circle",
                title: unref(t)("legal.tos.items.15.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.15.description")
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-information-circle",
                title: unref(t)("legal.tos.items.16.title"),
                variant: "subtle",
                description: unref(t)("legal.tos.items.16.description")
              }, null, 8, ["title", "description"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/tos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tos.vue.mjs.map
