import { s as tv, Q as getSlotChildrenText, j as __nuxt_component_1, L as __nuxt_component_0, _ as _appConfig } from './server.mjs';
import { defineComponent, useSlots, ref, computed, watch, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { pausableFilter, useMouseInElement } from '@vueuse/core';

const theme = {
  "slots": {
    "root": "relative flex rounded-[calc(var(--ui-radius)*2)]",
    "spotlight": "absolute inset-0 rounded-[inherit] pointer-events-none bg-(--ui-bg)/90",
    "container": "relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",
    "wrapper": "",
    "header": "mb-4",
    "body": "",
    "footer": "mt-4",
    "leading": "inline-flex items-center justify-center mb-2.5",
    "leadingIcon": "size-5 shrink-0 text-(--ui-primary)",
    "title": "text-base text-pretty font-semibold text-(--ui-text-highlighted)",
    "description": "text-[15px] text-pretty"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center"
      },
      "vertical": {
        "container": ""
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-(--ui-bg-inverted) text-(--ui-bg)",
        "title": "text-(--ui-bg)",
        "description": "text-(--ui-text-dimmed)"
      },
      "outline": {
        "root": "bg-(--ui-bg) ring ring-(--ui-border)",
        "description": "text-(--ui-text-muted)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50",
        "description": "text-(--ui-text-toned)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",
        "description": "text-(--ui-text-toned)"
      },
      "ghost": {
        "description": "text-(--ui-text-muted)"
      },
      "naked": {
        "container": "p-0 sm:p-0",
        "description": "text-(--ui-text-muted)"
      }
    },
    "to": {
      "true": {
        "root": [
          "transition"
        ]
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "spotlight": {
      "true": {
        "root": "[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]"
      }
    },
    "spotlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "solid",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-inverted)/90"
      }
    },
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-elevated)"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-elevated)"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "highlight": false,
      "class": {
        "root": "hover:ring-(--ui-border-accented)"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-primary)"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-secondary)"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-success)"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-info)"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-warning)"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-error)"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "class": {
        "root": "ring-(--ui-border-inverted)"
      }
    },
    {
      "spotlightColor": "primary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-primary)]"
      }
    },
    {
      "spotlightColor": "secondary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-secondary)]"
      }
    },
    {
      "spotlightColor": "success",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-success)]"
      }
    },
    {
      "spotlightColor": "info",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-info)]"
      }
    },
    {
      "spotlightColor": "warning",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-warning)]"
      }
    },
    {
      "spotlightColor": "error",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-error)]"
      }
    },
    {
      "spotlightColor": "neutral",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-bg-inverted)]"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "highlightColor": "primary",
    "spotlightColor": "primary"
  }
};

var _a;
const appConfigPageCard = _appConfig;
const pageCard = tv({ extend: tv(theme), ...((_a = appConfigPageCard.uiPro) == null ? void 0 : _a.pageCard) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PageCard",
  __ssrInlineRender: true,
  props: {
    as: {},
    icon: {},
    title: {},
    description: {},
    orientation: { default: "vertical" },
    reverse: { type: Boolean },
    highlight: { type: Boolean },
    highlightColor: {},
    spotlight: { type: Boolean },
    spotlightColor: {},
    variant: {},
    to: {},
    target: {},
    onClick: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const cardRef = ref();
    const motionControl = pausableFilter();
    const { elementX, elementY } = useMouseInElement(cardRef, {
      eventFilter: motionControl.eventFilter
    });
    const spotlight = computed(() => props.spotlight && (elementX.value > 0 || elementY.value > 0));
    watch(() => props.spotlight, (value) => {
      if (value) {
        motionControl.resume();
      } else {
        motionControl.pause();
      }
    }, { immediate: true });
    const ui = computed(() => pageCard({
      orientation: props.orientation,
      reverse: props.reverse,
      variant: props.variant,
      to: !!props.to || !!props.onClick,
      title: !!props.title || !!slots.title,
      highlight: props.highlight,
      highlightColor: props.highlightColor,
      spotlight: spotlight.value,
      spotlightColor: props.spotlightColor
    }));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UIcon = __nuxt_component_1;
      const _component_ULink = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        style: spotlight.value && { "--spotlight-x": `${unref(elementX)}px`, "--spotlight-y": `${unref(elementY)}px` },
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (props.spotlight) {
              _push2(`<div class="${ssrRenderClass(ui.value.spotlight({ class: (_a3 = props.ui) == null ? void 0 : _a3.spotlight }))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
            if (!!slots.header || !!slots.body || (_ctx.icon || !!slots.leading) || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || !!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (!!slots.header) {
                _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.icon || !!slots.leading) {
                _push2(`<div class="${ssrRenderClass(ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a4;
                  if (_ctx.icon) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.icon,
                      class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.body || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description)) {
                _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_f = props.ui) == null ? void 0 : _f.body }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                  var _a4, _b2;
                  if (_ctx.title || !!slots.title) {
                    _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push2(`${ssrInterpolate(_ctx.title)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (_ctx.description || !!slots.description) {
                    _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push2(`${ssrInterpolate(_ctx.description)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.footer) {
                _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_g = props.ui) == null ? void 0 : _g.footer }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": ariaLabel.value }, { to: _ctx.to, target: _ctx.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.spotlight ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.spotlight({ class: (_h = props.ui) == null ? void 0 : _h.spotlight })
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                !!slots.header || !!slots.body || (_ctx.icon || !!slots.leading) || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || !!slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
                }, [
                  !!slots.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.header({ class: (_k = props.ui) == null ? void 0 : _k.header })
                  }, [
                    renderSlot(_ctx.$slots, "header")
                  ], 2)) : createCommentVNode("", true),
                  _ctx.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: ui.value.leading({ class: (_l = props.ui) == null ? void 0 : _l.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", {}, () => {
                      var _a4;
                      return [
                        _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: _ctx.icon,
                          class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.body || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: ui.value.body({ class: (_m = props.ui) == null ? void 0 : _m.body })
                  }, [
                    renderSlot(_ctx.$slots, "body", {}, () => {
                      var _a4, _b2;
                      return [
                        _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(_ctx.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(_ctx.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: ui.value.footer({ class: (_n = props.ui) == null ? void 0 : _n.footer })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2),
              _ctx.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                key: 1,
                "aria-label": ariaLabel.value
              }, { to: _ctx.to, target: _ctx.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "absolute inset-0",
                    "aria-hidden": "true"
                  })
                ]),
                _: 1
              }, 16, ["aria-label"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "UPageCard" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=PageCard.vue.mjs.map
