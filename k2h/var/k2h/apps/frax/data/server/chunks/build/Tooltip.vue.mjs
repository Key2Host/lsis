import { defineComponent, useSlots, toRef, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { m as defu } from '../nitro/nitro.mjs';
import { useForwardPropsEmits, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, P as UKbd, _ as _appConfig } from './server.mjs';

const theme = {
  "slots": {
    "content": "flex items-center gap-1 bg-(--ui-bg) text-(--ui-text-highlighted) shadow-sm rounded-(--ui-radius) ring ring-(--ui-border) h-6 px-2 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] pointer-events-auto",
    "arrow": "fill-(--ui-border)",
    "text": "truncate",
    "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 before:content-['·'] before:me-0.5",
    "kbdsSize": "sm"
  }
};

var _a;
const appConfigTooltip = _appConfig;
const tooltip = tv({ extend: tv(theme), ...((_a = appConfigTooltip.ui) == null ? void 0 : _a.tooltip) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    text: {},
    kbds: {},
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "disabled", "ignoreNonKeyboardFocus"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => tooltip({
      side: contentProps.value.side
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(TooltipTrigger), mergeProps(_ctx.$attrs, {
                "as-child": "",
                class: props.class
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(TooltipPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TooltipContent), mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a4, _b3, _c;
                          if (_ctx.text) {
                            _push4(`<span class="${ssrRenderClass(ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text }))}"${_scopeId3}>${ssrInterpolate(_ctx.text)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if ((_b3 = _ctx.kbds) == null ? void 0 : _b3.length) {
                            _push4(`<span class="${ssrRenderClass(ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds }))}"${_scopeId3}><!--[-->`);
                            ssrRenderList(_ctx.kbds, (kbd, index) => {
                              var _a5;
                              _push4(ssrRenderComponent(UKbd, mergeProps({
                                key: index,
                                size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize(),
                                ref_for: true
                              }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(TooltipArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b3, _c;
                            return [
                              _ctx.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(_ctx.text), 3)) : createCommentVNode("", true),
                              ((_b3 = _ctx.kbds) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(UKbd, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize(),
                                    ref_for: true
                                  }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b2, _c;
                            return [
                              _ctx.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(_ctx.text), 3)) : createCommentVNode("", true),
                              ((_b2 = _ctx.kbds) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(UKbd, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize(),
                                    ref_for: true
                                  }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(TooltipTrigger), mergeProps({ key: 0 }, _ctx.$attrs, {
                "as-child": "",
                class: props.class
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1040, ["class"])) : createCommentVNode("", true),
              createVNode(unref(TooltipPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b, _c;
                            return [
                              _ctx.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(_ctx.text), 3)) : createCommentVNode("", true),
                              ((_b = _ctx.kbds) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(UKbd, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize(),
                                    ref_for: true
                                  }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "UTooltip" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Tooltip.vue.mjs.map
