import { D as useUI, ao as __nuxt_component_0$6 } from './server.mjs';
import { defineComponent, toRef, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { createSharedComposable, useActiveElement } from '@vueuse/core';
import '../nitro/nitro.mjs';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _useShortcuts = () => {
  const macOS = computed(() => false);
  const metaSymbol = ref(" ");
  const activeElement = useActiveElement();
  const usingInput = computed(() => {
    var _a, _b, _c;
    const tagName = (_a = activeElement.value) == null ? void 0 : _a.tagName;
    const contentEditable = (_b = activeElement.value) == null ? void 0 : _b.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  return {
    macOS,
    metaSymbol,
    activeElement,
    usingInput
  };
};
const useShortcuts = createSharedComposable(_useShortcuts);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Shortcut",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String,
      required: true
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    }
  },
  setup(__props) {
    const config = {
      wrapper: "!my-0 align-text-top"
    };
    const props = __props;
    const { metaSymbol } = useShortcuts();
    const { ui, attrs } = useUI("content.shortcut", void 0, config, toRef(props, "class"), true);
    const shortcut = computed(() => props.value === "meta" ? metaSymbol.value : props.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UKbd = __nuxt_component_0$6;
      _push(ssrRenderComponent(_component_UKbd, mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(shortcut))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(shortcut)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shortcut = Object.assign(_sfc_main, { __name: "Shortcut" });

export { Shortcut as default };
//# sourceMappingURL=Shortcut-BcOq9PxF.mjs.map
