import { u as useAppConfig, t as tv, $ as _sfc_main$n, _ as _sfc_main$z } from './server.mjs';
import { computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-DUKfDfU2.mjs';
import { r as renderSlot } from './slot-DoFuc1Pu.mjs';
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
import 'reka-ui';
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
import './node-HU5lVDmC.mjs';

const theme = {
  "slots": {
    "base": "",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate"
  }
};
const _sfc_main = {
  __name: "ProseCollapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    name: { type: String, required: false, default: "properties" },
    openText: { type: String, required: false, default: "Show" },
    closeText: { type: String, required: false, default: "Hide" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.collapsible) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCollapsible = _sfc_main$n;
      const _component_UIcon = _sfc_main$z;
      _push(ssrRenderComponent(_component_UCollapsible, mergeProps({
        "unmount-on-hide": false,
        class: ui.value.base({ class: props.class })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<button class="${ssrRenderClass(ui.value.trigger({ class: (_a = props.ui) == null ? void 0 : _a.trigger }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon || unref(appConfig).ui.icons.chevronDown,
              class: ui.value.triggerIcon({ class: (_b = props.ui) == null ? void 0 : _b.triggerIcon })
            }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass(ui.value.triggerLabel({ class: (_c = props.ui) == null ? void 0 : _c.triggerLabel }))}"${_scopeId}>${ssrInterpolate(open ? __props.closeText : __props.openText)} ${ssrInterpolate(__props.name)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: ui.value.trigger({ class: (_d = props.ui) == null ? void 0 : _d.trigger })
              }, [
                createVNode(_component_UIcon, {
                  name: __props.icon || unref(appConfig).ui.icons.chevronDown,
                  class: ui.value.triggerIcon({ class: (_e = props.ui) == null ? void 0 : _e.triggerIcon })
                }, null, 8, ["name", "class"]),
                createVNode("span", {
                  class: ui.value.triggerLabel({ class: (_f = props.ui) == null ? void 0 : _f.triggerLabel })
                }, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 3)
              ], 2)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-Ncxz0Hpu.mjs.map
