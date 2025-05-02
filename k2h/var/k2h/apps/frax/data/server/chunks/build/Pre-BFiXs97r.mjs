import { H as useLocalePro, ac as useClipboard, u as useAppConfig, t as tv, k as _sfc_main$u } from './server.mjs';
import { computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$1 from './CodeIcon-Cr9vgMql.mjs';
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
    "root": "relative my-5 group",
    "header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-default text-sm/6",
    "icon": "size-4 shrink-0",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",
    "base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProsePre",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocalePro();
    const clipboard = useClipboard();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.pre) || {} })();
    });
    const copied = ref(false);
    function copy() {
      clipboard.copy(props.code || "");
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_UButton = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root], filename: !!__props.filename })
      }, _attrs))}>`);
      if (__props.filename && !__props.hideHeader) {
        _push(`<div class="${ssrRenderClass(ui.value.header({ class: (_b = props.ui) == null ? void 0 : _b.header }))}">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          filename: __props.filename,
          class: ui.value.icon({ class: (_c = props.ui) == null ? void 0 : _c.icon })
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(ui.value.filename({ class: (_d = props.ui) == null ? void 0 : _d.filename }))}">${ssrInterpolate(__props.filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        icon: copied.value ? unref(appConfig).ui.icons.copyCheck : unref(appConfig).ui.icons.copy,
        color: "neutral",
        variant: "outline",
        size: "sm",
        "aria-label": unref(t)("prose.pre.copy"),
        class: ui.value.copy({ class: (_e = props.ui) == null ? void 0 : _e.copy }),
        tabindex: "-1",
        onClick: copy
      }, null, _parent));
      _push(`<pre${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: [props.class, (_f = props.ui) == null ? void 0 : _f.base] })
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pre-BFiXs97r.mjs.map
