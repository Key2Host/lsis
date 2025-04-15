import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { defineComponent, mergeModels, useSlots, useModel, computed, unref, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, createVNode, createCommentVNode, renderList, useSSRContext, ref, watch } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription, useForwardPropsEmits, Primitive, ProgressRoot, ProgressIndicator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, _ as __nuxt_component_4, a as _appConfig, h as useLocale, q as __nuxt_component_5, x as useToast, z as useSeoMeta, A as __nuxt_component_2 } from './server.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_4$1, b as _imports_0 } from './virtual_public.mjs';
import axios from 'axios';
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UStepper" });

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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "UProgress" });

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PasswordForm",
  __ssrInlineRender: true,
  props: {
    password: {
      type: String,
      required: true
    },
    passwordsMatch: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:password", "update:passwordsMatch"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const password = ref("");
    const passwordConfirm = ref("");
    const showPassword = ref(false);
    const showConfirm = ref(false);
    function checkStrength(str) {
      const requirements = [
        { regex: /.{8,}/, text: "Mindestens 8 Zeichen" },
        { regex: /\d/, text: "Mindestens eine Zahl" },
        { regex: /[a-z]/, text: "Mindestens ein Kleinbuchstabe" },
        { regex: /[A-Z]/, text: "Mindestens ein Großbuchstabe" },
        { regex: /[^A-Za-z0-9]/, text: "Mindestens ein Sonderzeichen" }
      ];
      return requirements.map((req) => ({ met: req.regex.test(str), text: req.text }));
    }
    const strength = computed(() => checkStrength(password.value));
    const score = computed(() => strength.value.filter((r) => r.met).length);
    const color = computed(() => {
      if (score.value === 0) return "neutral";
      if (score.value <= 2) return "warning";
      if (score.value === 3 || score.value === 4) return "warning";
      return "success";
    });
    const text = computed(() => {
      if (score.value === 0) return "Bitte Passwort eingeben";
      if (score.value <= 2) return "Schwaches Passwort";
      if (score.value === 3 || score.value === 4) return "Mittleres Passwort";
      return "Starkes Passwort";
    });
    const passwordsMatch = computed(() => password.value === passwordConfirm.value);
    watch(password, (newPassword) => {
      emit("update:password", newPassword);
      if (score.value < 3) {
        passwordConfirm.value = "";
      }
    });
    watch(passwordsMatch, (newMatch) => {
      emit("update:passwordsMatch", newMatch);
    });
    watch(score, (newScore) => {
      if (newScore < 5) {
        passwordConfirm.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4$1;
      const _component_UButton = __nuxt_component_5;
      const _component_UProgress = __nuxt_component_7;
      const _component_UIcon = __nuxt_component_4;
      _push(`<!--[--><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, { label: "Passwort" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event,
              type: showPassword.value ? "text" : "password",
              placeholder: "Passwort",
              color: color.value,
              autocomplete: "new-password",
              "aria-invalid": score.value < 5,
              "aria-describedby": "password-strength",
              class: "w-full",
              ui: { trailing: "pe-1" },
              icon: "i-lucide-lock"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showPassword.value = !showPassword.value,
                    "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                      variant: "link",
                      color: "neutral",
                      size: "sm",
                      onClick: ($event) => showPassword.value = !showPassword.value,
                      "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                    }, null, 8, ["icon", "onClick", "aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: password.value,
                "onUpdate:modelValue": ($event) => password.value = $event,
                type: showPassword.value ? "text" : "password",
                placeholder: "Passwort",
                color: color.value,
                autocomplete: "new-password",
                "aria-invalid": score.value < 5,
                "aria-describedby": "password-strength",
                class: "w-full",
                ui: { trailing: "pe-1" },
                icon: "i-lucide-lock"
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showPassword.value = !showPassword.value,
                    "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, 8, ["icon", "onClick", "aria-label"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type", "color", "aria-invalid"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UProgress, {
        color: color.value,
        indicator: text.value,
        "model-value": score.value,
        max: 5,
        size: "sm"
      }, null, _parent));
      _push(`<p id="password-strength" class="text-sm font-medium">${ssrInterpolate(text.value)}. Es muss enthalten: </p><ul class="space-y-1" aria-label="Passwortanforderungen"><!--[-->`);
      ssrRenderList(strength.value, (req, index) => {
        _push(`<li class="${ssrRenderClass([req.met ? "text-success-600" : "text-gray-400", "flex items-center gap-1"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: req.met ? "i-lucide-circle-check" : "i-lucide-circle-x",
          class: "size-4"
        }, null, _parent));
        _push(`<span class="text-xs">${ssrInterpolate(req.text)} <span class="sr-only">${ssrInterpolate(req.met ? "erfüllt" : "nicht erfüllt")}</span></span></li>`);
      });
      _push(`<!--]--></ul></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, { label: "Passwort bestätigen" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: passwordConfirm.value,
              "onUpdate:modelValue": ($event) => passwordConfirm.value = $event,
              type: showConfirm.value ? "text" : "password",
              placeholder: "Passwort erneut eingeben",
              autocomplete: "new-password",
              disabled: score.value < 5,
              color: passwordConfirm.value.length ? passwordsMatch.value ? "success" : "error" : "neutral",
              "aria-invalid": passwordConfirm.value.length > 0 && !passwordsMatch.value,
              "aria-describedby": "password-match",
              ui: { trailing: "pe-1" },
              icon: "i-lucide-lock",
              class: "w-full"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showConfirm.value = !showConfirm.value,
                    "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                      variant: "link",
                      color: "neutral",
                      size: "sm",
                      onClick: ($event) => showConfirm.value = !showConfirm.value,
                      "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                    }, null, 8, ["icon", "onClick", "aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: passwordConfirm.value,
                "onUpdate:modelValue": ($event) => passwordConfirm.value = $event,
                type: showConfirm.value ? "text" : "password",
                placeholder: "Passwort erneut eingeben",
                autocomplete: "new-password",
                disabled: score.value < 5,
                color: passwordConfirm.value.length ? passwordsMatch.value ? "success" : "error" : "neutral",
                "aria-invalid": passwordConfirm.value.length > 0 && !passwordsMatch.value,
                "aria-describedby": "password-match",
                ui: { trailing: "pe-1" },
                icon: "i-lucide-lock",
                class: "w-full"
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showConfirm.value = !showConfirm.value,
                    "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, 8, ["icon", "onClick", "aria-label"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type", "disabled", "color", "aria-invalid"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UProgress, {
        color: passwordsMatch.value ? "success" : "error",
        "model-value": passwordConfirm.value.length ? 1 : 0,
        max: 1,
        size: "sm"
      }, null, _parent));
      if (passwordConfirm.value.length > 0 && !passwordsMatch.value) {
        _push(`<p id="password-match" class="text-sm text-error-600 font-medium"> Die Passwörter stimmen nicht überein. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "PasswordForm" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { title: "Persönliche Daten", icon: "i-lucide-book-user" },
      { title: "Sicherheit", icon: "i-lucide-lock" },
      { title: "ID-Check", icon: "i-lucide-id-card" },
      { title: "Abschluss", icon: "i-lucide-bookmark-check" }
    ];
    const currentStep = ref(0);
    const toast = useToast();
    const user = ref({
      firstName: "",
      lastName: "",
      address: {
        street: "",
        zip: "",
        city: "",
        country: ""
      },
      birthday: "",
      phone: "",
      email: "",
      password: ""
    });
    const emailConfirmation = ref("");
    const emailsMatch = ref(false);
    const passwordsMatch = ref(false);
    watch([() => user.value.email, emailConfirmation], ([email, confirmation]) => {
      emailsMatch.value = email.trim() !== "" && email === confirmation;
    });
    function isStep1Valid() {
      const u = user.value;
      return u.firstName.trim() !== "" && u.lastName.trim() !== "" && u.address.street.trim() !== "" && u.address.zip.trim() !== "" && u.address.city.trim() !== "" && u.address.country.trim() !== "" && u.birthday.trim() !== "" && u.phone.trim() !== "" && u.email.trim() !== "" && emailsMatch.value;
    }
    const showEmailError = computed(() => {
      return user.value.email.trim() !== "" && emailConfirmation.value.trim() !== "" && user.value.email !== emailConfirmation.value;
    });
    async function createUser() {
      try {
        const u = user.value;
        const response = await axios.post(
          "https://saci.key2host.com/api/auth/signup/",
          {
            firstname: u.firstName,
            lastname: u.lastName,
            password: u.password,
            sex: "male",
            birthday: u.birthday,
            street: u.address.street,
            postalcode: u.address.zip,
            city: u.address.city,
            state: "-",
            country: u.address.country,
            email: u.email,
            phone: u.phone
          }
        );
        currentStep.value = 2;
        checkID();
      } catch (error) {
        const errorMessage = ref("");
        if (error.response && error.response.status === 400) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "Einige Daten scheinen nicht korrekt zu sein.";
        } else if (error.response && error.response.status === 409) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "E-Mail oder Telefon wird bereits verwendet.";
        } else {
          console.error("Fehler bei der API-Anfrage:", error.message);
          errorMessage.value = "API Fehler";
        }
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: errorMessage.value,
          color: "error",
          title: "Fehler beim Erstellen des Kontos",
          duration: 2500
        });
      }
    }
    async function checkID() {
      const response = await axios.post(
        "https://saci.key2host.com/api/auth/checkid/",
        {},
        { withCredentials: true }
      );
      const secret = response.data.secret;
      await stripe.verifyIdentity(secret);
    }
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
      const _component_UInput = __nuxt_component_4$1;
      const _component_UButton = __nuxt_component_5;
      const _component_PasswordForm = __nuxt_component_6;
      const _component_UProgress = __nuxt_component_7;
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
        modelValue: currentStep.value,
        "onUpdate:modelValue": ($event) => currentStep.value = $event,
        items
      }, null, _parent));
      _push(`</div>`);
      if (currentStep.value === 0) {
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
                      modelValue: user.value.firstName,
                      "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                      name: "given-name",
                      autocomplete: "given-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.firstName,
                        "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                        name: "given-name",
                        autocomplete: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Nachname" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.lastName,
                      "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                      name: "family-name",
                      autocomplete: "family-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.lastName,
                        "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                        name: "family-name",
                        autocomplete: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Straße und Hausnummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.street,
                      "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                      name: "address-line1",
                      autocomplete: "address-line1",
                      variant: "subtle",
                      icon: "i-lucide-map-pin"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.street,
                        "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                        name: "address-line1",
                        autocomplete: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "PLZ" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.zip,
                      "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                      name: "postal-code",
                      autocomplete: "postal-code",
                      variant: "subtle",
                      icon: "i-lucide-map"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.zip,
                        "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                        name: "postal-code",
                        autocomplete: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Stadt" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.city,
                      "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                      name: "address-level2",
                      autocomplete: "address-level2",
                      variant: "subtle",
                      icon: "i-lucide-building"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.city,
                        "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Land" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.country,
                      "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                      name: "country",
                      autocomplete: "country-name",
                      variant: "subtle",
                      icon: "i-lucide-globe"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.country,
                        "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                        name: "country",
                        autocomplete: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Geburtsdatum" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.birthday,
                      "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                      name: "bday",
                      autocomplete: "bday",
                      type: "date",
                      variant: "subtle",
                      icon: "i-lucide-calendar"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.birthday,
                        "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Handynummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.phone,
                      "onUpdate:modelValue": ($event) => user.value.phone = $event,
                      name: "tel",
                      autocomplete: "tel-national",
                      type: "tel",
                      variant: "subtle",
                      icon: "i-lucide-phone"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.phone,
                        "onUpdate:modelValue": ($event) => user.value.phone = $event,
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "E-Mail" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.email,
                      "onUpdate:modelValue": ($event) => user.value.email = $event,
                      name: "email",
                      autocomplete: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail",
                      color: unref(showEmailError) ? "red" : void 0,
                      ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.email,
                        "onUpdate:modelValue": ($event) => user.value.email = $event,
                        name: "email",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "E-Mail bestätigen",
                "help-color": unref(showEmailError) ? "red" : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: emailConfirmation.value,
                      "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                      name: "email-confirmation",
                      autocomplete: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail-check",
                      color: unref(showEmailError) ? "red" : void 0,
                      ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: emailConfirmation.value,
                        "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                        name: "email-confirmation",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-end px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                disabled: !isStep1Valid(),
                onClick: ($event) => currentStep.value = 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Weiter `);
                  } else {
                    return [
                      createTextVNode(" Weiter ")
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
                        modelValue: user.value.firstName,
                        "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                        name: "given-name",
                        autocomplete: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Nachname" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.lastName,
                        "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                        name: "family-name",
                        autocomplete: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Straße und Hausnummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.street,
                        "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                        name: "address-line1",
                        autocomplete: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "PLZ" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.zip,
                        "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                        name: "postal-code",
                        autocomplete: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Stadt" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.city,
                        "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Land" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.country,
                        "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                        name: "country",
                        autocomplete: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Geburtsdatum" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.birthday,
                        "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Handynummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.phone,
                        "onUpdate:modelValue": ($event) => user.value.phone = $event,
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "E-Mail" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.email,
                        "onUpdate:modelValue": ($event) => user.value.email = $event,
                        name: "email",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "E-Mail bestätigen",
                    "help-color": unref(showEmailError) ? "red" : void 0
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: emailConfirmation.value,
                        "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                        name: "email-confirmation",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ]),
                    _: 1
                  }, 8, ["help-color"])
                ]),
                createVNode("div", { class: "w-full flex justify-end px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    disabled: !isStep1Valid(),
                    onClick: ($event) => currentStep.value = 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Weiter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 1) {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>Sicherheit</span><p class="text-sm"${_scopeId}>Bitte wähle ein sicheres Passwort.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PasswordForm, {
                password: user.value.password,
                "onUpdate:password": ($event) => user.value.password = $event,
                passwordsMatch: passwordsMatch.value,
                "onUpdate:passwordsMatch": ($event) => passwordsMatch.value = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-between px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                onClick: ($event) => currentStep.value = 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Zurück`);
                  } else {
                    return [
                      createTextVNode("Zurück")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                disabled: !passwordsMatch.value,
                onClick: ($event) => createUser()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Weiter `);
                  } else {
                    return [
                      createTextVNode("Weiter ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "Sicherheit"),
                  createVNode("p", { class: "text-sm" }, "Bitte wähle ein sicheres Passwort.")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6" }, [
                  createVNode(_component_PasswordForm, {
                    password: user.value.password,
                    "onUpdate:password": ($event) => user.value.password = $event,
                    passwordsMatch: passwordsMatch.value,
                    "onUpdate:passwordsMatch": ($event) => passwordsMatch.value = $event
                  }, null, 8, ["password", "onUpdate:password", "passwordsMatch", "onUpdate:passwordsMatch"])
                ]),
                createVNode("div", { class: "w-full flex justify-between px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    onClick: ($event) => currentStep.value = 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Zurück")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    disabled: !passwordsMatch.value,
                    onClick: ($event) => createUser()
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Weiter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>ID-Check</span><p class="text-sm"${_scopeId}>Bitte wähle ein sicheres Passwort.</p></div><div class="px-6 py-6"${_scopeId}><div class="flex items-center justify-center bg-gray-100 rounded-md mb-2"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}> Warten auf ID-Check Dienstleister... </div></div>`);
              _push2(ssrRenderComponent(_component_UProgress, { animation: "carousel" }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-between px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                onClick: ($event) => currentStep.value = 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Zurück`);
                  } else {
                    return [
                      createTextVNode("Zurück")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                disabled: !passwordsMatch.value,
                onClick: ($event) => currentStep.value = 3
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Weiter `);
                  } else {
                    return [
                      createTextVNode("Weiter ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "ID-Check"),
                  createVNode("p", { class: "text-sm" }, "Bitte wähle ein sicheres Passwort.")
                ]),
                createVNode("div", { class: "px-6 py-6" }, [
                  createVNode("div", { class: "flex items-center justify-center bg-gray-100 rounded-md mb-2" }, [
                    createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, " Warten auf ID-Check Dienstleister... ")
                  ]),
                  createVNode(_component_UProgress, { animation: "carousel" })
                ]),
                createVNode("div", { class: "w-full flex justify-between px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    onClick: ($event) => currentStep.value = 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Zurück")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    disabled: !passwordsMatch.value,
                    onClick: ($event) => currentStep.value = 3
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Weiter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
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
