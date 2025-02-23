import { Z as useAppConfig, B as useUI, J as s$5, ae as N$1, af as Q$1, x as __nuxt_component_1$3, ag as V } from './server.mjs';
import { defineComponent, computed, useId, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Dz0uHKhh.mjs';
import { r as renderSlot } from './slot-BGhYCP8-.mjs';
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
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "properties"
    },
    openText: {
      type: String,
      default: "Show"
    },
    closeText: {
      type: String,
      default: "Hide"
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const config = computed(() => ({
      button: {
        base: "flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
        icon: {
          name: appConfig.ui.icons.chevron,
          base: "w-4 h-4 transform transition-transform duration-200",
          active: "",
          inactive: "-rotate-90"
        }
      },
      panel: "mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"
    }));
    const { ui } = useUI("content.collapsible", void 0, config, void 0, true);
    s$5(() => useId());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$3;
      _push(ssrRenderComponent(unref(N$1), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Q$1), {
              class: unref(ui).button.base
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(open ? __props.closeText : __props.openText)} ${ssrInterpolate(__props.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: unref(ui).button.icon.name,
                      class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                    }, null, 8, ["name", "class"]),
                    createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(V), {
              class: unref(ui).panel
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Q$1), {
                class: unref(ui).button.base
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                ]),
                _: 2
              }, 1032, ["class"]),
              createVNode(unref(V), {
                class: unref(ui).panel
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collapsible = Object.assign(_sfc_main, { __name: "Collapsible" });

export { Collapsible as default };
//# sourceMappingURL=Collapsible-DSTs97TS.mjs.map
