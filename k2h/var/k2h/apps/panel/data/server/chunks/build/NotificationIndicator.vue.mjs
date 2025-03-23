import { u as useDashboard, a as useResizable, _ as __nuxt_component_1$1, b as __nuxt_component_0$2, c as useLocalePro } from './DashboardSidebarToggle.vue.mjs';
import { defineComponent, useId, toRef, computed, unref, useSSRContext, useSlots, withCtx, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, createVNode, createTextVNode, toDisplayString, ref, Fragment, renderList } from 'vue';
import { ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _appConfig, U as UIcon, u as useAppConfig, b as __nuxt_component_1$2, t as tv$1, c as UKbd, d as useDashboard$1, e as UChip } from './server.mjs';
import { t as tv } from './tv.mjs';
import { Primitive, useForwardProps, useForwardPropsEmits, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';
import { createReusableTemplate, reactivePick } from '@vueuse/core';
import { n as defu } from '../nitro/nitro.mjs';

const theme$3 = {
  "slots": {
    "root": "flex flex-col min-w-0 min-h-svh lg:not-last:border-r lg:not-last:border-(--ui-border) shrink-0",
    "body": "flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6",
    "handle": ""
  },
  "variants": {
    "size": {
      "true": {
        "root": "w-full lg:w-(--width)"
      },
      "false": {
        "root": "flex-1"
      }
    }
  }
};

var _a$3;
const appConfig$1 = _appConfig;
const dashboardPanel = tv({ extend: tv(theme$3), ...((_a$3 = appConfig$1.uiPro) == null ? void 0 : _a$3.dashboardPanel) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DashboardPanel",
  __ssrInlineRender: true,
  props: {
    class: {},
    ui: {},
    id: {},
    minSize: { default: 15 },
    maxSize: {},
    defaultSize: {},
    resizable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const dashboardContext = useDashboard({ storageKey: "dashboard" });
    const id = `${dashboardContext.storageKey}-panel-${props.id || useId()}`;
    const { size, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })));
    const ui = computed(() => dashboardPanel({
      size: !!size.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UDashboardResizeHandle = __nuxt_component_1$1;
      _push(`<!--[--><div${ssrRenderAttr("id", id)}${ssrRenderAttr("data-dragging", unref(isDragging))} class="${ssrRenderClass(ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }))}" style="${ssrRenderStyle([unref(size) ? { "--width": `${unref(size)}%` } : void 0])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        var _a3;
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`<div class="${ssrRenderClass(ui.value.body({ class: (_a3 = props.ui) == null ? void 0 : _a3.body }))}">`);
        ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
        _push(`</div>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      }, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "resize-handle", {
        onMouseDown: unref(onMouseDown),
        onTouchStart: unref(onTouchStart)
      }, () => {
        var _a3;
        if (_ctx.resizable) {
          _push(ssrRenderComponent(_component_UDashboardResizeHandle, {
            "aria-controls": id,
            class: ui.value.handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle }),
            onMousedown: unref(onMouseDown),
            onTouchstart: unref(onTouchStart)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardPanel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$4, { __name: "UDashboardPanel" });

const theme$2 = {
  "slots": {
    "root": "h-(--ui-header-height) shrink-0 flex items-center justify-between border-b border-(--ui-border) px-4 sm:px-6 gap-1.5",
    "left": "flex items-center gap-1.5 min-w-0",
    "icon": "shrink-0 size-5 self-center me-1.5",
    "title": "flex items-center gap-1.5 font-semibold text-(--ui-text-highlighted) truncate",
    "center": "hidden lg:flex",
    "right": "flex items-center shrink-0 gap-1.5",
    "toggle": ""
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": ""
      },
      "right": {
        "toggle": ""
      }
    }
  }
};

var _a$2;
const appConfig = _appConfig;
const dashboardNavbar = tv({ extend: tv(theme$2), ...((_a$2 = appConfig.uiPro) == null ? void 0 : _a$2.dashboardNavbar) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DashboardNavbar",
  __ssrInlineRender: true,
  props: {
    as: {},
    icon: {},
    title: {},
    toggle: { type: [Boolean, Object], default: true },
    toggleSide: { default: "left" },
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const dashboardContext = useDashboard({});
    const ui = dashboardNavbar();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UDashboardSidebarToggle = __nuxt_component_0$2;
      const _component_UIcon = UIcon;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", unref(dashboardContext), () => {
              var _a3;
              if (_ctx.toggle) {
                _push2(ssrRenderComponent(_component_UDashboardSidebarToggle, mergeProps(typeof _ctx.toggle === "object" ? _ctx.toggle : {}, {
                  side: _ctx.toggleSide,
                  class: unref(ui).toggle({ class: (_a3 = props.ui) == null ? void 0 : _a3.toggle, toggleSide: _ctx.toggleSide })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", unref(dashboardContext), () => {
                var _a3;
                return [
                  _ctx.toggle ? (openBlock(), createBlock(_component_UDashboardSidebarToggle, mergeProps({ key: 0 }, typeof _ctx.toggle === "object" ? _ctx.toggle : {}, {
                    side: _ctx.toggleSide,
                    class: unref(ui).toggle({ class: (_a3 = props.ui) == null ? void 0 : _a3.toggle, toggleSide: _ctx.toggleSide })
                  }), null, 16, ["side", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: _ctx.as,
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).left({ class: (_a3 = props.ui) == null ? void 0 : _a3.left }))}"${_scopeId}>`);
            if (_ctx.toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", unref(dashboardContext), () => {
              var _a4;
              ssrRenderSlot(_ctx.$slots, "leading", unref(dashboardContext), () => {
                var _a5;
                if (_ctx.icon) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: _ctx.icon,
                    class: unref(ui).icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`<h1 class="${ssrRenderClass(unref(ui).title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</h1>`);
              ssrRenderSlot(_ctx.$slots, "trailing", unref(dashboardContext), null, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(unref(ui).center({ class: (_b = props.ui) == null ? void 0 : _b.center }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", unref(dashboardContext), null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(unref(ui).right({ class: (_c = props.ui) == null ? void 0 : _c.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", unref(dashboardContext), null, _push2, _parent2, _scopeId);
            if (_ctx.toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).left({ class: (_d = props.ui) == null ? void 0 : _d.left })
              }, [
                _ctx.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", unref(dashboardContext), () => {
                  var _a4;
                  return [
                    renderSlot(_ctx.$slots, "leading", unref(dashboardContext), () => {
                      var _a5;
                      return [
                        _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: _ctx.icon,
                          class: unref(ui).icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    }),
                    createVNode("h1", {
                      class: unref(ui).title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ])
                    ], 2),
                    renderSlot(_ctx.$slots, "trailing", unref(dashboardContext))
                  ];
                })
              ], 2),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(ui).center({ class: (_e = props.ui) == null ? void 0 : _e.center })
              }, [
                renderSlot(_ctx.$slots, "default", unref(dashboardContext))
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: unref(ui).right({ class: (_f = props.ui) == null ? void 0 : _f.right })
              }, [
                renderSlot(_ctx.$slots, "right", unref(dashboardContext)),
                _ctx.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardNavbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UDashboardNavbar" });

const theme$1 = {
  "base": "hidden lg:flex",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
};

var _a$1;
const appConfigDashboardSidebarCollapse = _appConfig;
const dashboardSidebarCollapse = tv({ extend: tv(theme$1), ...((_a$1 = appConfigDashboardSidebarCollapse.uiPro) == null ? void 0 : _a$1.dashboardSidebarCollapse) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardSidebarCollapse",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    color: { default: "neutral" },
    variant: { default: "ghost" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
    const appConfig = useAppConfig();
    const { sidebarCollapsed, collapseSidebar } = useDashboard({ sidebarCollapsed: ref(false), collapseSidebar: () => {
    } });
    const { t } = useLocalePro();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UButton, mergeProps(unref(rootProps), {
        "aria-label": unref(sidebarCollapsed) ? unref(t)("dashboardSidebarCollapse.expand") : unref(t)("dashboardSidebarCollapse.collapse"),
        icon: unref(sidebarCollapsed) ? unref(appConfig).ui.icons.panelOpen : unref(appConfig).ui.icons.panelClose,
        class: unref(dashboardSidebarCollapse)({ class: props.class, side: props.side }),
        onClick: ($event) => {
          var _a2;
          return (_a2 = unref(collapseSidebar)) == null ? void 0 : _a2(!unref(sidebarCollapsed));
        }
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UDashboardSidebarCollapse" });

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
const tooltip = tv$1({ extend: tv$1(theme), ...((_a = appConfigTooltip.ui) == null ? void 0 : _a.tooltip) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "UTooltip" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationIndicator",
  __ssrInlineRender: true,
  setup(__props) {
    const { isNotificationsSlideoverOpen } = useDashboard$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0;
      const _component_UButton = __nuxt_component_1$2;
      const _component_UChip = UChip;
      const _component_UIcon = UIcon;
      _push(ssrRenderComponent(_component_UTooltip, mergeProps({
        text: "Notifications",
        shortcuts: ["N"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              square: "",
              onClick: ($event) => isNotificationsSlideoverOpen.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UChip, {
                    color: "error",
                    inset: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-lucide-bell",
                          class: "size-5 shrink-0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-bell",
                            class: "size-5 shrink-0"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UChip, {
                      color: "error",
                      inset: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "i-lucide-bell",
                          class: "size-5 shrink-0"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                square: "",
                onClick: ($event) => isNotificationsSlideoverOpen.value = true
              }, {
                default: withCtx(() => [
                  createVNode(_component_UChip, {
                    color: "error",
                    inset: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: "i-lucide-bell",
                        class: "size-5 shrink-0"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NotificationIndicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "NotificationIndicator" });

export { __nuxt_component_0$1 as _, __nuxt_component_1 as a, __nuxt_component_3 as b, __nuxt_component_2 as c };
//# sourceMappingURL=NotificationIndicator.vue.mjs.map
