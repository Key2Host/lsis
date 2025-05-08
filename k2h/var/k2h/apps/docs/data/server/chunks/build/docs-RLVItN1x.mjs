import { z as _sfc_main$j, U as _sfc_main$b, a as useAppConfig, w as tv } from './server.mjs';
import { _ as _sfc_main$2 } from './Page-dDPOZdcf.mjs';
import { defineComponent, inject, withCtx, renderSlot, unref, createVNode, useSlots, computed, mergeProps, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';

const theme = {
  "slots": {
    "root": "hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5",
    "container": "relative",
    "top": "sticky -top-8 -mt-8 pointer-events-none z-[1]",
    "topHeader": "h-8 bg-default -mx-4 px-4",
    "topBody": "bg-default relative pointer-events-auto flex flex-col -mx-4 px-4",
    "topFooter": "h-8 bg-gradient-to-b from-default -mx-4 px-4"
  }
};
const _sfc_main$1 = {
  __name: "UPageAside",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "aside" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageAside) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: (_b = props.ui) == null ? void 0 : _b.top }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.topHeader({ class: (_c = props.ui) == null ? void 0 : _c.topHeader }))}"${_scopeId}></div><div class="${ssrRenderClass(ui.value.topBody({ class: (_d = props.ui) == null ? void 0 : _d.topBody }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.topFooter({ class: (_e = props.ui) == null ? void 0 : _e.topFooter }))}"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: (_g = props.ui) == null ? void 0 : _g.top })
                }, [
                  createVNode("div", {
                    class: ui.value.topHeader({ class: (_h = props.ui) == null ? void 0 : _h.topHeader })
                  }, null, 2),
                  createVNode("div", {
                    class: ui.value.topBody({ class: (_i = props.ui) == null ? void 0 : _i.topBody })
                  }, [
                    renderSlot(_ctx.$slots, "top")
                  ], 2),
                  createVNode("div", {
                    class: ui.value.topFooter({ class: (_j = props.ui) == null ? void 0 : _j.topFooter })
                  }, null, 2)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default"),
                renderSlot(_ctx.$slots, "bottom")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = inject("navigation");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$j;
      const _component_UPage = _sfc_main$2;
      const _component_UPageAside = _sfc_main$1;
      const _component_UContentNavigation = _sfc_main$b;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPage, null, {
              left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageAside, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UContentNavigation, {
                          highlight: "",
                          navigation: unref(navigation),
                          defaultOpen: true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UContentNavigation, {
                            highlight: "",
                            navigation: unref(navigation),
                            defaultOpen: true
                          }, null, 8, ["navigation"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageAside, null, {
                      default: withCtx(() => [
                        createVNode(_component_UContentNavigation, {
                          highlight: "",
                          navigation: unref(navigation),
                          defaultOpen: true
                        }, null, 8, ["navigation"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPage, null, {
                left: withCtx(() => [
                  createVNode(_component_UPageAside, null, {
                    default: withCtx(() => [
                      createVNode(_component_UContentNavigation, {
                        highlight: "",
                        navigation: unref(navigation),
                        defaultOpen: true
                      }, null, 8, ["navigation"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=docs-RLVItN1x.mjs.map
