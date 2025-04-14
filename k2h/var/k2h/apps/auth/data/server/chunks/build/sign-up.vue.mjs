import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { defineComponent, mergeModels, useSlots, useModel, computed, unref, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, createVNode, createCommentVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, U as UIcon, _ as _appConfig, z as useSeoMeta, A as __nuxt_component_2, q as __nuxt_component_5 } from './server.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_4 } from './Input.vue.mjs';
import { _ as _imports_0 } from './virtual_public.mjs';
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
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-(--ui-bg) group-data-[state=active]:text-(--ui-bg) text-(--ui-text-muted) bg-(--ui-bg-elevated) focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-full group-data-[disabled]:opacity-75 bg-(--ui-border-accented)",
    "wrapper": "",
    "title": "font-medium text-(--ui-text)",
    "description": "text-(--ui-text-muted) text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-6 text-xs",
        "icon": "size-3",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-1.5"
      },
      "sm": {
        "trigger": "size-8 text-sm",
        "icon": "size-4",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-10 text-base",
        "icon": "size-5",
        "title": "text-sm",
        "description": "text-sm",
        "wrapper": "mt-2.5"
      },
      "lg": {
        "trigger": "size-12 text-lg",
        "icon": "size-6",
        "title": "text-base",
        "description": "text-base",
        "wrapper": "mt-3"
      },
      "xl": {
        "trigger": "size-14 text-xl",
        "icon": "size-7",
        "title": "text-lg",
        "description": "text-lg",
        "wrapper": "mt-3.5"
      }
    },
    "color": {
      "primary": {
        "trigger": "group-data-[state=completed]:bg-(--ui-primary) group-data-[state=active]:bg-(--ui-primary) focus-visible:outline-(--ui-primary)",
        "separator": "group-data-[state=completed]:bg-(--ui-primary)"
      },
      "secondary": {
        "trigger": "group-data-[state=completed]:bg-(--ui-secondary) group-data-[state=active]:bg-(--ui-secondary) focus-visible:outline-(--ui-secondary)",
        "separator": "group-data-[state=completed]:bg-(--ui-secondary)"
      },
      "success": {
        "trigger": "group-data-[state=completed]:bg-(--ui-success) group-data-[state=active]:bg-(--ui-success) focus-visible:outline-(--ui-success)",
        "separator": "group-data-[state=completed]:bg-(--ui-success)"
      },
      "info": {
        "trigger": "group-data-[state=completed]:bg-(--ui-info) group-data-[state=active]:bg-(--ui-info) focus-visible:outline-(--ui-info)",
        "separator": "group-data-[state=completed]:bg-(--ui-info)"
      },
      "warning": {
        "trigger": "group-data-[state=completed]:bg-(--ui-warning) group-data-[state=active]:bg-(--ui-warning) focus-visible:outline-(--ui-warning)",
        "separator": "group-data-[state=completed]:bg-(--ui-warning)"
      },
      "error": {
        "trigger": "group-data-[state=completed]:bg-(--ui-error) group-data-[state=active]:bg-(--ui-error) focus-visible:outline-(--ui-error)",
        "separator": "group-data-[state=completed]:bg-(--ui-error)"
      },
      "neutral": {
        "trigger": "group-data-[state=completed]:bg-(--ui-bg-inverted) group-data-[state=active]:bg-(--ui-bg-inverted) focus-visible:outline-(--ui-border-inverted)",
        "separator": "group-data-[state=completed]:bg-(--ui-bg-inverted)"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};

var _a;
const appConfigStepper = _appConfig;
const stepper = tv({ extend: tv(theme), ...((_a = appConfigStepper.ui) == null ? void 0 : _a.stepper) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    items: {},
    size: {},
    color: {},
    orientation: { default: "horizontal" },
    defaultValue: {},
    disabled: { type: Boolean },
    ui: {},
    class: {},
    linear: { type: Boolean, default: true }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["next", "prev"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "as", "orientation", "linear"));
    const ui = computed(() => stepper({
      orientation: props.orientation,
      size: props.size,
      color: props.color
    }));
    const currentStepIndex = computed({
      get() {
        const value = modelValue.value ?? props.defaultValue;
        return (typeof value === "string" ? props.items.findIndex((item) => item.value === value) : value) ?? 0;
      },
      set(value) {
        var _a2, _b;
        modelValue.value = ((_b = (_a2 = props.items) == null ? void 0 : _a2[value]) == null ? void 0 : _b.value) ?? value;
      }
    });
    const currentStep = computed(() => {
      var _a2;
      return (_a2 = props.items) == null ? void 0 : _a2[currentStepIndex.value];
    });
    const hasNext = computed(() => {
      var _a2;
      return currentStepIndex.value < ((_a2 = props.items) == null ? void 0 : _a2.length) - 1;
    });
    const hasPrev = computed(() => currentStepIndex.value > 0);
    __expose({
      next() {
        if (hasNext.value) {
          currentStepIndex.value += 1;
          emits("next", currentStep.value);
        }
      },
      prev() {
        if (hasPrev.value) {
          currentStepIndex.value -= 1;
          emits("prev", currentStep.value);
        }
      },
      hasNext,
      hasPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps(unref(rootProps), {
        modelValue: currentStepIndex.value,
        "onUpdate:modelValue": ($event) => currentStepIndex.value = $event,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, count) => {
              var _a4;
              _push2(ssrRenderComponent(unref(StepperItem), {
                key: item.value ?? count,
                step: count,
                disabled: item.disabled || props.disabled,
                class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a5, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(ui.value.container({ class: (_a5 = props.ui) == null ? void 0 : _a5.container }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTrigger), {
                      class: ui.value.trigger({ class: (_b2 = props.ui) == null ? void 0 : _b2.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(StepperIndicator), {
                            class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(UIcon, {
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!--[-->${ssrInterpolate(count + 1)}<!--]-->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(StepperIndicator), {
                              class: ui.value.indicator({ class: (_b3 = props.ui) == null ? void 0 : _b3.indicator })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  return [
                                    item.icon ? (openBlock(), createBlock(UIcon, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                    }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(count + 1), 1)
                                    ], 64))
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (count < _ctx.items.length - 1) {
                      _push3(ssrRenderComponent(unref(StepperSeparator), {
                        class: ui.value.separator({ class: (_c2 = props.ui) == null ? void 0 : _c2.separator })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="${ssrRenderClass(ui.value.wrapper({ class: (_d2 = props.ui) == null ? void 0 : _d2.wrapper }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTitle), {
                      class: ui.value.title({ class: (_e2 = props.ui) == null ? void 0 : _e2.title })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "title", { item }, () => {
                            _push4(`${ssrInterpolate(item.title)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", { item }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(StepperDescription), {
                      class: ui.value.description({ class: (_f2 = props.ui) == null ? void 0 : _f2.description })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "description", { item }, () => {
                            _push4(`${ssrInterpolate(item.description)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "description", { item }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ui.value.container({ class: (_g2 = props.ui) == null ? void 0 : _g2.container })
                      }, [
                        createVNode(unref(StepperTrigger), {
                          class: ui.value.trigger({ class: (_h2 = props.ui) == null ? void 0 : _h2.trigger })
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              createVNode(unref(StepperIndicator), {
                                class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]),
                        count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                          key: 0,
                          class: ui.value.separator({ class: (_i2 = props.ui) == null ? void 0 : _i2.separator })
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", {
                        class: ui.value.wrapper({ class: (_j2 = props.ui) == null ? void 0 : _j2.wrapper })
                      }, [
                        createVNode(unref(StepperTitle), {
                          class: ui.value.title({ class: (_k2 = props.ui) == null ? void 0 : _k2.title })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "title", { item }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(unref(StepperDescription), {
                          class: ui.value.description({ class: (_l2 = props.ui) == null ? void 0 : _l2.description })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "description", { item }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (((_b = currentStep.value) == null ? void 0 : _b.content) || !!slots.content || ((_c = currentStep.value) == null ? void 0 : _c.slot) && !!slots[currentStep.value.slot] || ((_d = currentStep.value) == null ? void 0 : _d.value) && !!slots[currentStep.value.value]) {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, !!slots[((_f = currentStep.value) == null ? void 0 : _f.slot) ?? currentStep.value.value] ? currentStep.value.slot ?? currentStep.value.value : "content", { item: currentStep.value }, () => {
                var _a4;
                _push2(`${ssrInterpolate((_a4 = currentStep.value) == null ? void 0 : _a4.content)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.header({ class: (_g = props.ui) == null ? void 0 : _g.header })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, count) => {
                  var _a4;
                  return openBlock(), createBlock(unref(StepperItem), {
                    key: item.value ?? count,
                    step: count,
                    disabled: item.disabled || props.disabled,
                    class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                  }, {
                    default: withCtx(() => {
                      var _a5, _b2, _c2, _d2, _e2, _f2;
                      return [
                        createVNode("div", {
                          class: ui.value.container({ class: (_a5 = props.ui) == null ? void 0 : _a5.container })
                        }, [
                          createVNode(unref(StepperTrigger), {
                            class: ui.value.trigger({ class: (_b2 = props.ui) == null ? void 0 : _b2.trigger })
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(unref(StepperIndicator), {
                                  class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                      var _a7;
                                      return [
                                        item.icon ? (openBlock(), createBlock(UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(count + 1), 1)
                                        ], 64))
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["class"]),
                          count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                            key: 0,
                            class: ui.value.separator({ class: (_c2 = props.ui) == null ? void 0 : _c2.separator })
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ], 2),
                        createVNode("div", {
                          class: ui.value.wrapper({ class: (_d2 = props.ui) == null ? void 0 : _d2.wrapper })
                        }, [
                          createVNode(unref(StepperTitle), {
                            class: ui.value.title({ class: (_e2 = props.ui) == null ? void 0 : _e2.title })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", { item }, () => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(unref(StepperDescription), {
                            class: ui.value.description({ class: (_f2 = props.ui) == null ? void 0 : _f2.description })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", { item }, () => [
                                createTextVNode(toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ], 2)
                      ];
                    }),
                    _: 2
                  }, 1032, ["step", "disabled", "class"]);
                }), 128))
              ], 2),
              ((_h = currentStep.value) == null ? void 0 : _h.content) || !!slots.content || ((_i = currentStep.value) == null ? void 0 : _i.slot) && !!slots[currentStep.value.slot] || ((_j = currentStep.value) == null ? void 0 : _j.value) && !!slots[currentStep.value.value] ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.content({ class: (_k = props.ui) == null ? void 0 : _k.description })
              }, [
                renderSlot(_ctx.$slots, !!slots[((_l = currentStep.value) == null ? void 0 : _l.slot) ?? currentStep.value.value] ? currentStep.value.slot ?? currentStep.value.value : "content", { item: currentStep.value }, () => {
                  var _a4;
                  return [
                    createTextVNode(toDisplayString((_a4 = currentStep.value) == null ? void 0 : _a4.content), 1)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UStepper" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Persönliche Daten",
        icon: "i-lucide-book-user"
      },
      {
        title: "Sicherheit",
        icon: "i-lucide-lock"
      },
      {
        title: "ID-Check",
        icon: "i-lucide-id-card"
      },
      {
        title: "Abschluss",
        icon: "i-lucide-bookmark-check"
      }
    ];
    useSeoMeta({
      title: "Konto erstellen",
      ogTitle: "Konto erstellen",
      description: "Konto erstellen",
      ogDescription: "Konto erstellen"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_UStepper = __nuxt_component_1;
      const _component_UCard = __nuxt_component_2;
      const _component_UFormField = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: "/",
        class: "flex items-center mt-6 mb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Key2Host Logo" class="w-6 h-6"${_scopeId}><span class="font-bold text-lg ml-2"${_scopeId}>Key2Host</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Key2Host Logo",
                class: "w-6 h-6"
              }),
              createVNode("span", { class: "font-bold text-lg ml-2" }, "Key2Host")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6"><span class="font-bold text-4xl ml-2">Konto erstellen</span></div><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_component_UStepper, {
        disabled: "",
        items
      }, null, _parent));
      _push(`</div>`);
      {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>Kontaktdaten</span><p class="text-sm"${_scopeId}>Bitte fülle alle Felder sorgfältig aus.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "Vorname" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "given-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Nachname" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "family-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Straße und Hausnummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "address-line1",
                      variant: "subtle",
                      icon: "i-lucide-map-pin"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "PLZ" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "postal-code",
                      variant: "subtle",
                      icon: "i-lucide-map"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Stadt" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "address-level2",
                      autocomplete: "address-level2",
                      variant: "subtle",
                      icon: "i-lucide-building"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Land" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "country-name",
                      variant: "subtle",
                      icon: "i-lucide-globe"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Geburtsdatum" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "bday",
                      autocomplete: "bday",
                      type: "date",
                      variant: "subtle",
                      icon: "i-lucide-calendar"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Handynummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "tel",
                      autocomplete: "tel-national",
                      type: "tel",
                      inputmode: "tel",
                      variant: "subtle",
                      icon: "i-lucide-phone"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        inputmode: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "E-Mail" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "E-Mail bestätigen" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      name: "email-confirmation",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail-check"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        name: "email-confirmation",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Weiter`);
                  } else {
                    return [
                      createTextVNode("Weiter")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "Kontaktdaten"),
                  createVNode("p", { class: "text-sm" }, "Bitte fülle alle Felder sorgfältig aus.")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6" }, [
                  createVNode(_component_UFormField, { label: "Vorname" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Nachname" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Straße und Hausnummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "PLZ" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Stadt" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Land" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Geburtsdatum" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Handynummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        inputmode: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "E-Mail" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "E-Mail bestätigen" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        name: "email-confirmation",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex justify-end" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Weiter")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up.vue.mjs.map
