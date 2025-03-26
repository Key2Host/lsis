import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { U as UInput } from './Input.vue.mjs';
import { t as tv, U as UIcon, c as UAvatar, d as _appConfig, a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderSlot, toDisplayString, useSSRContext, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardProps, Separator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { _ as __nuxt_component_4 } from './Progress.vue.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
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
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-(--ui-text) flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-(--ui-primary)"
      },
      "secondary": {
        "border": "border-(--ui-secondary)"
      },
      "success": {
        "border": "border-(--ui-success)"
      },
      "info": {
        "border": "border-(--ui-info)"
      },
      "warning": {
        "border": "border-(--ui-warning)"
      },
      "error": {
        "border": "border-(--ui-error)"
      },
      "neutral": {
        "border": "border-(--ui-border)"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};

var _a;
const appConfigSeparator = _appConfig;
const separator = tv({ extend: tv(theme), ...((_a = appConfigSeparator.ui) == null ? void 0 : _a.separator) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    as: {},
    label: {},
    icon: {},
    avatar: {},
    color: {},
    size: {},
    type: {},
    orientation: { default: "horizontal" },
    class: {},
    ui: {},
    decorative: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => separator({
      color: props.color,
      orientation: props.orientation,
      size: props.size,
      type: props.type
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.border({ class: (_a3 = props.ui) == null ? void 0 : _a3.border }))}"${_scopeId}></div>`);
            if (_ctx.label || _ctx.icon || _ctx.avatar || !!slots.default) {
              _push2(`<!--[--><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                var _a4, _b2, _c2, _d2;
                if (_ctx.label) {
                  _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
                } else if (_ctx.icon) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (_ctx.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.border({ class: (_c = props.ui) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.border({ class: (_d = props.ui) == null ? void 0 : _d.border })
              }, null, 2),
              _ctx.label || _ctx.icon || _ctx.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4, _b2, _c2, _d2;
                    return [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label })
                      }, toDisplayString(_ctx.label), 3)) : _ctx.icon ? (openBlock(), createBlock(UIcon, {
                        key: 1,
                        name: _ctx.icon,
                        class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : _ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                        key: 2,
                        size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, _ctx.avatar, {
                        class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  class: ui.value.border({ class: (_f = props.ui) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "USeparator" });

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPageCard = __nuxt_component_0;
  const _component_UInput = UInput;
  const _component_UButton = __nuxt_component_1;
  const _component_USeparator = __nuxt_component_3;
  const _component_UProgress = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 h-full flex-col xl:flex-row" }, _attrs))}><div class="w-full xl:w-3/4 h-[50vh] xl:h-auto">`);
  _push(ssrRenderComponent(_component_UPageCard, {
    variant: "subtle",
    class: "overflow-auto bg-black h-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row p-2 d-flex text-white overflow-auto"${_scopeId}><div class="col-12"${_scopeId}>${ssrInterpolate("[" + new Date(Date.now() - 1e3).toISOString().substr(11, 8) + " UTC]")} Connecting to server...</div><div class="col-12"${_scopeId}>${ssrInterpolate("[" + (/* @__PURE__ */ new Date()).toISOString().substr(11, 8) + " UTC]")} Your server is not responding. Please check again later or contact the support team.</div></div><div class="mt-auto mx-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UInput, {
          type: "text",
          autofocus: "",
          color: "primary",
          variant: "outline",
          size: "lg",
          placeholder: "Befehle hier tippen...",
          class: "w-[50vw] min-w-[250px]"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "row p-2 d-flex text-white overflow-auto" }, [
            createVNode("div", { class: "col-12" }, toDisplayString("[" + new Date(Date.now() - 1e3).toISOString().substr(11, 8) + " UTC]") + " Connecting to server...", 1),
            createVNode("div", { class: "col-12" }, toDisplayString("[" + (/* @__PURE__ */ new Date()).toISOString().substr(11, 8) + " UTC]") + " Your server is not responding. Please check again later or contact the support team.", 1)
          ]),
          createVNode("div", { class: "mt-auto mx-auto" }, [
            createVNode(_component_UInput, {
              type: "text",
              autofocus: "",
              color: "primary",
              variant: "outline",
              size: "lg",
              placeholder: "Befehle hier tippen...",
              class: "w-[50vw] min-w-[250px]"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full xl:w-1/4">`);
  _push(ssrRenderComponent(_component_UPageCard, { title: "Steuerung" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-circle-play",
          color: "success",
          variant: "subtle"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Starten`);
            } else {
              return [
                createTextVNode("Starten")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-circle-pause",
          color: "warning",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Reset`);
            } else {
              return [
                createTextVNode("Reset")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-circle-slash",
          color: "error",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Stop`);
            } else {
              return [
                createTextVNode("Stop")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-zap",
          color: "info",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Kill`);
            } else {
              return [
                createTextVNode("Kill")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, [
            createVNode(_component_UButton, {
              icon: "i-lucide-circle-play",
              color: "success",
              variant: "subtle"
            }, {
              default: withCtx(() => [
                createTextVNode("Starten")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              icon: "i-lucide-circle-pause",
              color: "warning",
              variant: "subtle",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode("Reset")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              icon: "i-lucide-circle-slash",
              color: "error",
              variant: "subtle",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode("Stop")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              icon: "i-lucide-zap",
              color: "info",
              variant: "subtle",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode("Kill")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_USeparator, { class: "my-7.5" }, null, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Informationen",
    class: "mb-5 xl:mb-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-xs -mb-2 block"${_scopeId}>Prozessor (CPU)</span>`);
        _push2(ssrRenderComponent(_component_UProgress, {
          modelValue: 31,
          max: 100,
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-xs -mb-2 block"${_scopeId}>Arbeitsspeicher (RAM)</span>`);
        _push2(ssrRenderComponent(_component_UProgress, {
          modelValue: 64,
          max: 100,
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-xs -mb-2 block"${_scopeId}>Speicherauslastung</span>`);
        _push2(ssrRenderComponent(_component_UProgress, {
          modelValue: 12,
          max: 100,
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-xs -mb-2 block"${_scopeId}>Traffic</span>`);
        _push2(ssrRenderComponent(_component_UProgress, {
          modelValue: 4,
          max: 100,
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_USeparator, { class: "my-2" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-zap",
          color: "info",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Produkt Up/Downgrade`);
            } else {
              return [
                createTextVNode("Produkt Up/Downgrade")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-zap",
          color: "info",
          variant: "subtle",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Kündigen`);
            } else {
              return [
                createTextVNode("Kündigen")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", { class: "text-xs -mb-2 block" }, "Prozessor (CPU)"),
          createVNode(_component_UProgress, {
            modelValue: 31,
            max: 100,
            size: "lg"
          }),
          createVNode("span", { class: "text-xs -mb-2 block" }, "Arbeitsspeicher (RAM)"),
          createVNode(_component_UProgress, {
            modelValue: 64,
            max: 100,
            size: "lg"
          }),
          createVNode("span", { class: "text-xs -mb-2 block" }, "Speicherauslastung"),
          createVNode(_component_UProgress, {
            modelValue: 12,
            max: 100,
            size: "lg"
          }),
          createVNode("span", { class: "text-xs -mb-2 block" }, "Traffic"),
          createVNode(_component_UProgress, {
            modelValue: 4,
            max: 100,
            size: "lg"
          }),
          createVNode(_component_USeparator, { class: "my-2" }),
          createVNode(_component_UButton, {
            icon: "i-lucide-zap",
            color: "info",
            variant: "subtle",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Produkt Up/Downgrade")
            ]),
            _: 1
          }),
          createVNode(_component_UButton, {
            icon: "i-lucide-zap",
            color: "info",
            variant: "subtle",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Kündigen")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue3.mjs.map
