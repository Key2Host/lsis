import { u as useAppConfig, t as tv, k as _sfc_main$u } from './server.mjs';
import { mergeModels, useModel, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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

const theme = {
  "slots": {
    "root": "relative [&_pre]:h-[200px]",
    "footer": "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center",
    "trigger": "group",
    "triggerIcon": "group-data-[state=open]:rotate-180"
  },
  "variants": {
    "open": {
      "true": {
        "root": "[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"
      },
      "false": {
        "root": "[&_pre]:overflow-hidden",
        "footer": "bg-gradient-to-t from-muted"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProseCodeCollapse",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: { type: String, required: false },
    name: { type: String, required: false, default: "code" },
    openText: { type: String, required: false, default: "Expand" },
    closeText: { type: String, required: false, default: "Collapse" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeCollapse) || {} })({
        open: open.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UButton = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(ui.value.footer({ class: (_b = props.ui) == null ? void 0 : _b.footer }))}">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: __props.icon || unref(appConfig).ui.icons.chevronDown,
        color: "neutral",
        variant: "outline",
        "data-state": open.value ? "open" : "closed",
        label: `${open.value ? __props.closeText : __props.openText} ${__props.name}`,
        class: ui.value.trigger({ class: (_c = props.ui) == null ? void 0 : _c.trigger }),
        ui: { leadingIcon: ui.value.triggerIcon({ class: (_d = props.ui) == null ? void 0 : _d.triggerIcon }) },
        onClick: ($event) => open.value = !open.value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeCollapse-CRYyT9bi.mjs.map
