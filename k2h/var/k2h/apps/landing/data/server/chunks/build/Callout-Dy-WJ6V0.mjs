import { $ as useAppConfig, D as useUI, ak as config$i, a8 as __nuxt_component_0$e, z as __nuxt_component_1$3 } from './server.mjs';
import { defineComponent, computed, toRef, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Dz0uHKhh.mjs';
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
import './node-hwMnPqaI.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Callout",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "primary"
    },
    to: {
      type: String,
      default: void 0
    },
    target: {
      type: String,
      default: void 0
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const config$1 = computed(() => ({
      wrapper: "block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900",
      to: "hover:border-[--color-light] dark:hover:border-[--color-dark] hover:text-[--color-light] dark:hover:text-[--color-dark] border-dashed hover:border-solid hover:text-gray-800 dark:hover:text-gray-200",
      icon: {
        base: "w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"
      },
      externalIcon: {
        name: appConfig.ui.icons.external,
        base: "w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("content.callout", toRef(props, "ui"), config$1, toRef(props, "class"), true);
    const colorLight = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$i[props.color]) == null ? void 0 : _a["500"]) || config$i[props.color] || props.color;
    });
    const colorDark = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$i[props.color]) == null ? void 0 : _a["400"]) || config$i[props.color] || props.color;
    });
    const target = computed(() => props.target || (props.to && props.to.startsWith("http") ? "_blank" : void 0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UIcon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, __props.to && unref(ui).to]
      }, unref(attrs), {
        style: { "--color-light": unref(colorLight), "--color-dark": unref(colorDark) }
      }, _attrs))}>`);
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          target: unref(target),
          class: "focus:outline-none",
          tabindex: "-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: __props.icon,
          class: unref(ui).icon.base
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!!__props.to && unref(target) === "_blank") {
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(ui).externalIcon.name,
          class: unref(ui).externalIcon.base
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Callout = Object.assign(_sfc_main, { __name: "Callout" });

export { Callout as default };
//# sourceMappingURL=Callout-Dy-WJ6V0.mjs.map
