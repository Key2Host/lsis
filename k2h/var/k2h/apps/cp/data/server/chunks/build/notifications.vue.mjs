import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { _ as __nuxt_component_1 } from './FormField.vue.mjs';
import { defineComponent, mergeModels, useSlots, useModel, useId, computed, unref, mergeProps, withCtx, createBlock, openBlock, Fragment, createCommentVNode, createVNode, renderSlot, createTextVNode, toDisplayString, useSSRContext, reactive, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useForwardProps, Primitive, SwitchRoot, SwitchThumb, Label } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { f as useAppConfig, n as useFormField, t as tv, U as UIcon, d as _appConfig } from './server.mjs';
import './tv.mjs';
import 'tailwind-variants';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
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
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "root": "relative flex items-start",
    "base": [
      "inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-(--ui-bg-accented)",
      "transition-colors duration-200"
    ],
    "container": "flex items-center",
    "thumb": "group pointer-events-none rounded-full bg-(--ui-bg) shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    "icon": [
      "absolute shrink-0 group-data-[state=unchecked]:text-(--ui-text-dimmed) opacity-0 size-10/12",
      "transition-[color,opacity] duration-200"
    ],
    "wrapper": "ms-2",
    "label": "block font-medium text-(--ui-text)",
    "description": "text-(--ui-text-muted)"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "data-[state=checked]:bg-(--ui-primary) focus-visible:outline-(--ui-primary)",
        "icon": "group-data-[state=checked]:text-(--ui-primary)"
      },
      "secondary": {
        "base": "data-[state=checked]:bg-(--ui-secondary) focus-visible:outline-(--ui-secondary)",
        "icon": "group-data-[state=checked]:text-(--ui-secondary)"
      },
      "success": {
        "base": "data-[state=checked]:bg-(--ui-success) focus-visible:outline-(--ui-success)",
        "icon": "group-data-[state=checked]:text-(--ui-success)"
      },
      "info": {
        "base": "data-[state=checked]:bg-(--ui-info) focus-visible:outline-(--ui-info)",
        "icon": "group-data-[state=checked]:text-(--ui-info)"
      },
      "warning": {
        "base": "data-[state=checked]:bg-(--ui-warning) focus-visible:outline-(--ui-warning)",
        "icon": "group-data-[state=checked]:text-(--ui-warning)"
      },
      "error": {
        "base": "data-[state=checked]:bg-(--ui-error) focus-visible:outline-(--ui-error)",
        "icon": "group-data-[state=checked]:text-(--ui-error)"
      },
      "neutral": {
        "base": "data-[state=checked]:bg-(--ui-bg-inverted) focus-visible:outline-(--ui-border-inverted)",
        "icon": "group-data-[state=checked]:text-(--ui-text-highlighted)"
      }
    },
    "size": {
      "xs": {
        "base": "w-7",
        "container": "h-4",
        "thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "w-8",
        "container": "h-4",
        "thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "w-9",
        "container": "h-5",
        "thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "w-10",
        "container": "h-5",
        "thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "w-11",
        "container": "h-6",
        "thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
        "wrapper": "text-base"
      }
    },
    "checked": {
      "true": {
        "icon": "group-data-[state=checked]:opacity-100"
      }
    },
    "unchecked": {
      "true": {
        "icon": "group-data-[state=unchecked]:opacity-100"
      }
    },
    "loading": {
      "true": {
        "icon": "animate-spin"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-error)"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75",
        "description": "cursor-not-allowed opacity-75"
      }
    }
  },
  "defaultVariants": {
    "color": "primary",
    "size": "md"
  }
};

var _a;
const appConfigSwitch = _appConfig;
const switchTv = tv({ extend: tv(theme), ...((_a = appConfigSwitch.ui) == null ? void 0 : _a.switch) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Switch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    color: {},
    size: {},
    loading: { type: Boolean },
    loadingIcon: {},
    checkedIcon: {},
    uncheckedIcon: {},
    label: {},
    description: {},
    class: {},
    ui: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    required: { type: Boolean },
    value: {},
    defaultValue: { type: Boolean }
  }, {
    "modelValue": { type: Boolean, ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => switchTv({
      size: size.value,
      color: color.value,
      required: props.required,
      loading: props.loading,
      disabled: disabled.value || props.loading
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled) || _ctx.loading,
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwitchThumb), {
                    class: ui.value.thumb({ class: (_a4 = props.ui) == null ? void 0 : _a4.thumb })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a5, _b3, _c2, _d2, _e2, _f2;
                      if (_push4) {
                        if (_ctx.loading) {
                          _push4(ssrRenderComponent(UIcon, {
                            name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                            class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon, checked: true, unchecked: true })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->`);
                          if (_ctx.checkedIcon) {
                            _push4(ssrRenderComponent(UIcon, {
                              name: _ctx.checkedIcon,
                              class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon, checked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (_ctx.uncheckedIcon) {
                            _push4(ssrRenderComponent(UIcon, {
                              name: _ctx.uncheckedIcon,
                              class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon, unchecked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          _ctx.loading ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                            class: ui.value.icon({ class: (_d2 = props.ui) == null ? void 0 : _d2.icon, checked: true, unchecked: true })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            _ctx.checkedIcon ? (openBlock(), createBlock(UIcon, {
                              key: 0,
                              name: _ctx.checkedIcon,
                              class: ui.value.icon({ class: (_e2 = props.ui) == null ? void 0 : _e2.icon, checked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            _ctx.uncheckedIcon ? (openBlock(), createBlock(UIcon, {
                              key: 1,
                              name: _ctx.uncheckedIcon,
                              class: ui.value.icon({ class: (_f2 = props.ui) == null ? void 0 : _f2.icon, unchecked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwitchThumb), {
                      class: ui.value.thumb({ class: (_b2 = props.ui) == null ? void 0 : _b2.thumb })
                    }, {
                      default: withCtx(() => {
                        var _a5, _b3, _c2;
                        return [
                          _ctx.loading ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                            class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon, checked: true, unchecked: true })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            _ctx.checkedIcon ? (openBlock(), createBlock(UIcon, {
                              key: 0,
                              name: _ctx.checkedIcon,
                              class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon, checked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            _ctx.uncheckedIcon ? (openBlock(), createBlock(UIcon, {
                              key: 1,
                              name: _ctx.uncheckedIcon,
                              class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon, unchecked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.label || !!slots.label || (_ctx.description || !!slots.description)) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (_ctx.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  class: ui.value.label({ class: (_d = props.ui) == null ? void 0 : _d.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
                        _push3(`${ssrInterpolate(_ctx.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                          createTextVNode(toDisplayString(_ctx.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })
              }, [
                createVNode(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled) || _ctx.loading,
                  class: ui.value.base({ class: (_g = props.ui) == null ? void 0 : _g.base })
                }), {
                  default: withCtx(() => {
                    var _a4;
                    return [
                      createVNode(unref(SwitchThumb), {
                        class: ui.value.thumb({ class: (_a4 = props.ui) == null ? void 0 : _a4.thumb })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b2, _c2;
                          return [
                            _ctx.loading ? (openBlock(), createBlock(UIcon, {
                              key: 0,
                              name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                              class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon, checked: true, unchecked: true })
                            }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              _ctx.checkedIcon ? (openBlock(), createBlock(UIcon, {
                                key: 0,
                                name: _ctx.checkedIcon,
                                class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon, checked: true })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                              _ctx.uncheckedIcon ? (openBlock(), createBlock(UIcon, {
                                key: 1,
                                name: _ctx.uncheckedIcon,
                                class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon, unchecked: true })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ], 64))
                          ];
                        }),
                        _: 1
                      }, 8, ["class"])
                    ];
                  }),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              _ctx.label || !!slots.label || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  class: ui.value.label({ class: (_i = props.ui) == null ? void 0 : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                      createTextVNode(toDisplayString(_ctx.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "USwitch" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      email: true,
      desktop: false,
      product_updates: true,
      weekly_digest: false,
      important_updates: true
    });
    const sections = [{
      title: "Marketing",
      description: "Erhalte Coupon-Codes und verpasse keine Neuigkeiten.",
      fields: [{
        name: "marketing_email",
        label: "E-Mail",
        description: "Erhalte regelmäßig E-Mails",
        disabled: true
      }, {
        name: "marketing_push",
        label: "Push",
        description: "Bekomme direkt eine Desktop-Benachrichtigung",
        disabled: true
      }]
    }, {
      title: "Account Änderungen",
      description: "Erhalte wichtige Nachrichten über Änderungen an deinem Konto.",
      fields: [{
        name: "account_email",
        label: "E-Mail",
        description: "Erhalte direkt eine E-Mail",
        disabled: true
      }, {
        name: "account_push",
        label: "Push",
        description: "Bekomme direkt eine Push-Benachrichtigung",
        disabled: true
      }]
    }];
    async function onChange() {
      console.log(state);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCard = __nuxt_component_0;
      const _component_UFormField = __nuxt_component_1;
      const _component_USwitch = __nuxt_component_2;
      _push(`<!--[-->`);
      ssrRenderList(sections, (section, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UPageCard, {
          title: section.title,
          description: section.description,
          variant: "naked",
          class: "mb-4"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UPageCard, {
          variant: "subtle",
          ui: { container: "divide-y divide-(--ui-border)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(section.fields, (field) => {
                _push2(ssrRenderComponent(_component_UFormField, {
                  key: field.name,
                  name: field.name,
                  label: field.label,
                  description: field.description,
                  class: "flex items-center justify-between not-last:pb-4 gap-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_USwitch, {
                        modelValue: unref(state)[field.name],
                        "onUpdate:modelValue": [($event) => unref(state)[field.name] = $event, onChange],
                        disabled: field.disabled
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_USwitch, {
                          modelValue: unref(state)[field.name],
                          "onUpdate:modelValue": [($event) => unref(state)[field.name] = $event, onChange],
                          disabled: field.disabled
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(section.fields, (field) => {
                  return openBlock(), createBlock(_component_UFormField, {
                    key: field.name,
                    name: field.name,
                    label: field.label,
                    description: field.description,
                    class: "flex items-center justify-between not-last:pb-4 gap-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USwitch, {
                        modelValue: unref(state)[field.name],
                        "onUpdate:modelValue": [($event) => unref(state)[field.name] = $event, onChange],
                        disabled: field.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 2
                  }, 1032, ["name", "label", "description"]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notifications.vue.mjs.map
