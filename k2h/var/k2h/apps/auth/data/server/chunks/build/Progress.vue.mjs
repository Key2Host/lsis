import { defineComponent, mergeModels, useSlots, useModel, computed, unref, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, createVNode, createCommentVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription, useForwardPropsEmits, Primitive, ProgressRoot, ProgressIndicator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, _ as __nuxt_component_4, a as _appConfig, h as useLocale } from './server.mjs';

const theme$1 = {
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

var _a$1;
const appConfigStepper = _appConfig;
const stepper = tv({ extend: tv(theme$1), ...((_a$1 = appConfigStepper.ui) == null ? void 0 : _a$1.stepper) || {} });
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
                                    _push5(ssrRenderComponent(__nuxt_component_4, {
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
                                      item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
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
                                    item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
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
                                      item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
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
                                        item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
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

const theme = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-(--ui-bg-accented)",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out",
    "status": "flex justify-end text-(--ui-text-dimmed) transition-[width] duration-200",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-(--ui-primary)",
        "steps": "text-(--ui-primary)"
      },
      "secondary": {
        "indicator": "bg-(--ui-secondary)",
        "steps": "text-(--ui-secondary)"
      },
      "success": {
        "indicator": "bg-(--ui-success)",
        "steps": "text-(--ui-success)"
      },
      "info": {
        "indicator": "bg-(--ui-info)",
        "steps": "text-(--ui-info)"
      },
      "warning": {
        "indicator": "bg-(--ui-warning)",
        "steps": "text-(--ui-warning)"
      },
      "error": {
        "indicator": "bg-(--ui-error)",
        "steps": "text-(--ui-error)"
      },
      "neutral": {
        "indicator": "bg-(--ui-bg-inverted)",
        "steps": "text-(--ui-bg)"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-(--ui-text-muted)"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};

var _a;
const appConfigProgress = _appConfig;
const progress = tv({ extend: tv(theme), ...((_a = appConfigProgress.ui) == null ? void 0 : _a.progress) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    as: {},
    max: {},
    status: { type: Boolean },
    inverted: { type: Boolean, default: false },
    size: {},
    color: {},
    orientation: { default: "horizontal" },
    animation: {},
    class: {},
    ui: {},
    getValueLabel: {},
    modelValue: { default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const rootProps = useForwardPropsEmits(reactivePick(props, "getValueLabel", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      return {
        [props.orientation === "vertical" ? "height" : "width"]: percent.value ? `${percent.value}%` : "fit-content"
      };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const ui = computed(() => progress({
      animation: props.animation,
      size: props.size,
      color: props.color,
      orientation: props.orientation,
      inverted: props.inverted
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!isIndeterminate.value && (_ctx.status || !!slots.status)) {
              _push2(`<div class="${ssrRenderClass(ui.value.status({ class: (_a3 = props.ui) == null ? void 0 : _a3.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot), mergeProps(unref(rootProps), {
              max: realMax.value,
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div class="${ssrRenderClass(ui.value.steps({ class: (_c = props.ui) == null ? void 0 : _c.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.max, (step, index) => {
                var _a4;
                _push2(`<div class="${ssrRenderClass(ui.value.step({ class: (_a4 = props.ui) == null ? void 0 : _a4.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (_ctx.status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.status({ class: (_d = props.ui) == null ? void 0 : _d.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot), mergeProps(unref(rootProps), {
                max: realMax.value,
                class: ui.value.base({ class: (_e = props.ui) == null ? void 0 : _e.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.steps({ class: (_f = props.ui) == null ? void 0 : _f.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.max, (step, index) => {
                  var _a4;
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: ui.value.step({ class: (_a4 = props.ui) == null ? void 0 : _a4.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "UProgress" });

export { __nuxt_component_1 as _, __nuxt_component_7 as a };
//# sourceMappingURL=Progress.vue.mjs.map
