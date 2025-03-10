import { D as useUI, z as __nuxt_component_1$3 } from './server.mjs';
import { defineComponent, useSlots, toRef, ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
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
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    selectedIndex: {
      type: Number,
      default: 0
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    }
  },
  setup(__props) {
    const config = {
      wrapper: "relative my-5 space-y-6",
      header: "flex items-center relative overflow-x-auto",
      border: "absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",
      tab: {
        base: "px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",
        active: "text-primary border-primary",
        inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",
        icon: {
          base: "w-5 h-5 flex-shrink-0"
        }
      }
    };
    const props = __props;
    const slots = useSlots();
    const { ui, attrs } = useUI("content.tabs", void 0, config, toRef(props, "class"), true);
    const selectedIndex = ref(props.selectedIndex || 0);
    ref(1);
    const tabs = computed(() => {
      var _a;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots).map((slot, index) => {
        var _a2, _b;
        return {
          index,
          label: ((_a2 = slot.props) == null ? void 0 : _a2.label) || `${index}`,
          icon: (_b = slot.props) == null ? void 0 : _b.icon,
          component: slot
        };
      })) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).header)}"><div class="${ssrRenderClass(unref(ui).border)}"></div><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<button class="${ssrRenderClass([unref(ui).tab.base, unref(selectedIndex) === index ? unref(ui).tab.active : unref(ui).tab.inactive])}">`);
        if (tab.icon) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: tab.icon,
            class: unref(ui).tab.icon.base
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<div style="${ssrRenderStyle(unref(selectedIndex) === index ? null : { display: "none" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tab.component), null, null), _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tabs = Object.assign(_sfc_main, { __name: "Tabs" });

export { Tabs as default };
//# sourceMappingURL=Tabs-Cvfta96R.mjs.map
