import { u as useAppConfig, M as useRuntimeConfig, t as tv, _ as _sfc_main$z } from './server.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
    "base": [
      "relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold",
      "[&>a>code]:transition-colors"
    ],
    "leading": [
      "absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted",
      "transition"
    ],
    "leadingIcon": "size-4 shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  }
};
const _sfc_main = {
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public.mdc;
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.h2) || {} })();
    });
    const generate = computed(() => props.id && typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && headings.anchorLinks.h2);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UIcon = _sfc_main$z;
      _push(`<h2${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)} class="${ssrRenderClass(ui.value.link({ class: (_a = props.ui) == null ? void 0 : _a.link }))}"><span class="${ssrRenderClass(ui.value.leading({ class: (_b = props.ui) == null ? void 0 : _b.leading }))}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(appConfig).ui.icons.hash,
          class: ui.value.leadingIcon({ class: (_c = props.ui) == null ? void 0 : _c.leadingIcon })
        }, null, _parent));
        _push(`</span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h2>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H2-Bx4HMT8-.mjs.map
