import __nuxt_component_0 from './ProseCodeIcon-BOyS_XyA.mjs';
import { useSSRContext, defineComponent, useSlots, toRef, ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { F as useUI } from './server.mjs';
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
  __name: "CodeGroup",
  __ssrInlineRender: true,
  props: {
    class: {
      type: [String, Object, Array],
      default: undefined
    }
  },
  setup(__props, { expose: __expose }) {
    const config = {
      wrapper: "relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",
      header: "flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",
      tab: {
        base: "px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",
        active: "bg-gray-100 dark:bg-gray-800",
        inactive: "hover:bg-gray-50 dark:hover:bg-gray-800/50",
        icon: {
          base: ""
        }
      }
    };
    const props = __props;
    const slots = useSlots();
    const { ui, attrs } = useUI("content.codeGroup", undefined, config, toRef(props, "class"), true);
    const selectedIndex = ref(0);
    __expose({ selectedIndex });
    ref(1);
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? undefined : _a.map(transformSlot);
      }
      return {
        label: ((_b = slot.props) == null ? undefined : _b.filename) || ((_c = slot.props) == null ? undefined : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? undefined : _d.icon,
        component: slot
      };
    }
    const tabs = computed(() => {
      var _a, _b;
      return ((_b = (_a = slots.default) == null ? undefined : _a.call(slots)) == null ? undefined : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    const selectedTab = computed(() => tabs.value.find((_, index) => index === selectedIndex.value));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ProseCodeIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).header)}"><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<button tabindex="-1" class="${ssrRenderClass([unref(ui).tab.base, unref(selectedIndex) === index ? unref(ui).tab.active : unref(ui).tab.inactive])}">`);
        _push(ssrRenderComponent(_component_ProseCodeIcon, {
          icon: tab.icon,
          filename: tab.label,
          class: unref(ui).tab.icon.base
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_a = unref(selectedTab)) == null ? undefined : _a.component), {
        key: unref(selectedIndex),
        "hide-header": ""
      }, null), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const CodeGroup = Object.assign(_sfc_main, { __name: "CodeGroup" });

export { CodeGroup as default };
//# sourceMappingURL=CodeGroup-ClRjJL2R.mjs.map
