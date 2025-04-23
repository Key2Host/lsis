import { s as tv, Q as getSlotChildrenText, j as __nuxt_component_1, M as __nuxt_component_0, _ as _appConfig, L as __nuxt_component_0$1, v as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, useSSRContext, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme$1 = {
  "slots": {
    "root": "relative",
    "wrapper": "",
    "leading": "inline-flex items-center justify-center",
    "leadingIcon": "size-5 shrink-0 text-(--ui-primary)",
    "title": "text-base text-pretty font-semibold text-(--ui-text-highlighted)",
    "description": "text-[15px] text-pretty text-(--ui-text-muted)"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-start gap-2.5",
        "leading": "p-0.5"
      },
      "vertical": {
        "leading": "mb-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  }
};

var _a$1;
const appConfigPageFeature = _appConfig;
const pageFeature = tv({ extend: tv(theme$1), ...((_a$1 = appConfigPageFeature.uiPro) == null ? void 0 : _a$1.pageFeature) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PageFeature",
  __ssrInlineRender: true,
  props: {
    as: {},
    icon: {},
    title: {},
    description: {},
    orientation: { default: "horizontal" },
    to: {},
    target: {},
    onClick: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => pageFeature({
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Feature link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UIcon = __nuxt_component_1;
      const _component_ULink = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d;
          if (_push2) {
            if (_ctx.icon || !!slots.leading) {
              _push2(`<div class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId}>`);
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
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_b = props.ui) == null ? void 0 : _b.wrapper }))}"${_scopeId}>`);
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
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
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
            return [
              _ctx.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
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
              createVNode("div", {
                class: ui.value.wrapper({ class: (_d = props.ui) == null ? void 0 : _d.wrapper })
              }, [
                _ctx.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                  key: 0,
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
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => {
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
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageFeature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UPageFeature" });

const theme = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
    "wrapper": "",
    "headline": "mb-3",
    "leading": "flex items-center mb-6",
    "leadingIcon": "size-10 shrink-0 text-(--ui-primary)",
    "title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",
    "description": "text-base sm:text-lg text-(--ui-text-muted)",
    "links": "mt-8 flex flex-wrap gap-x-6 gap-y-3",
    "features": "mt-8 grid"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty",
        "features": "gap-4"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "leading": "justify-center",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center",
        "features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-(--ui-primary) flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    },
    "description": {
      "true": ""
    },
    "features": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "vertical",
      "title": true,
      "class": {
        "features": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "description": true,
      "class": {
        "features": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "features": true,
      "class": {
        "links": "mt-16"
      }
    }
  ]
};

var _a;
const appConfigPageSection = _appConfig;
const pageSection = tv({ extend: tv(theme), ...((_a = appConfigPageSection.uiPro) == null ? void 0 : _a.pageSection) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageSection",
  __ssrInlineRender: true,
  props: {
    as: { default: "section" },
    headline: {},
    icon: {},
    title: {},
    description: {},
    links: {},
    features: {},
    orientation: { default: "vertical" },
    reverse: { type: Boolean },
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => {
      var _a2;
      return pageSection({
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title,
        description: !!props.description || !!slots.description,
        features: !!((_a2 = props.features) == null ? void 0 : _a2.length) || !!slots.features
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UContainer = __nuxt_component_0$1;
      const _component_UIcon = __nuxt_component_1;
      const _component_UPageFeature = __nuxt_component_2;
      const _component_UButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
                if (_push3) {
                  if (_ctx.icon || !!slots.leading || (_ctx.headline || !!slots.headline) || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (((_a4 = _ctx.features) == null ? void 0 : _a4.length) || !!slots.features) || (((_b2 = _ctx.links) == null ? void 0 : _b2.length) || !!slots.links)) {
                    _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId2}>`);
                    if (_ctx.icon || !!slots.leading) {
                      _push3(`<div class="${ssrRenderClass(ui.value.leading({ class: (_d = props.ui) == null ? void 0 : _d.leading }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                        var _a5;
                        if (_ctx.icon) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.icon,
                            class: ui.value.leadingIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.leadingIcon })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.headline || !!slots.headline) {
                      _push3(`<div class="${ssrRenderClass(ui.value.headline({ class: (_e = props.ui) == null ? void 0 : _e.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                        _push3(`${ssrInterpolate(_ctx.headline)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.title || !!slots.title) {
                      _push3(`<h2 class="${ssrRenderClass(ui.value.title({ class: (_f = props.ui) == null ? void 0 : _f.title }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                        _push3(`${ssrInterpolate(_ctx.title)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</h2>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.description || !!slots.description) {
                      _push3(`<div class="${ssrRenderClass(ui.value.description({ class: (_g = props.ui) == null ? void 0 : _g.description }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                        _push3(`${ssrInterpolate(_ctx.description)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_h = _ctx.features) == null ? void 0 : _h.length) || !!slots.features) {
                      _push3(`<ul class="${ssrRenderClass(ui.value.features({ class: (_i = props.ui) == null ? void 0 : _i.features }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                        _push3(`<!--[-->`);
                        ssrRenderList(_ctx.features, (feature, index) => {
                          _push3(ssrRenderComponent(_component_UPageFeature, mergeProps({
                            key: index,
                            as: "li",
                            ref_for: true
                          }, feature), null, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_j = _ctx.links) == null ? void 0 : _j.length) || !!slots.links) {
                      _push3(`<div class="${ssrRenderClass(ui.value.links({ class: (_k = props.ui) == null ? void 0 : _k.links }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                        _push3(`<!--[-->`);
                        ssrRenderList(_ctx.links, (link, index) => {
                          _push3(ssrRenderComponent(_component_UButton, mergeProps({
                            key: index,
                            size: "lg",
                            ref_for: true
                          }, link), null, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (_ctx.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.icon || !!slots.leading || (_ctx.headline || !!slots.headline) || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (((_l = _ctx.features) == null ? void 0 : _l.length) || !!slots.features) || (((_m = _ctx.links) == null ? void 0 : _m.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: (_n = props.ui) == null ? void 0 : _n.wrapper })
                    }, [
                      _ctx.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.leading({ class: (_o = props.ui) == null ? void 0 : _o.leading })
                      }, [
                        renderSlot(_ctx.$slots, "leading", {}, () => {
                          var _a5;
                          return [
                            _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: _ctx.icon,
                              class: ui.value.leadingIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.leadingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true),
                      _ctx.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.headline({ class: (_p = props.ui) == null ? void 0 : _p.headline, headline: !slots.headline })
                      }, [
                        renderSlot(_ctx.$slots, "headline", {}, () => [
                          createTextVNode(toDisplayString(_ctx.headline), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      _ctx.title || !!slots.title ? (openBlock(), createBlock("h2", {
                        key: 2,
                        class: ui.value.title({ class: (_q = props.ui) == null ? void 0 : _q.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: ui.value.description({ class: (_r = props.ui) == null ? void 0 : _r.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(_ctx.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_s = _ctx.features) == null ? void 0 : _s.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                        key: 4,
                        class: ui.value.features({ class: (_t = props.ui) == null ? void 0 : _t.features })
                      }, [
                        renderSlot(_ctx.$slots, "features", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.features, (feature, index) => {
                            return openBlock(), createBlock(_component_UPageFeature, mergeProps({
                              key: index,
                              as: "li",
                              ref_for: true
                            }, feature), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_u = _ctx.links) == null ? void 0 : _u.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 5,
                        class: ui.value.links({ class: (_v = props.ui) == null ? void 0 : _v.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "lg",
                              ref_for: true
                            }, link), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : _ctx.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
              }, {
                default: withCtx(() => {
                  var _a4, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
                  return [
                    _ctx.icon || !!slots.leading || (_ctx.headline || !!slots.headline) || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (((_a4 = _ctx.features) == null ? void 0 : _a4.length) || !!slots.features) || (((_b2 = _ctx.links) == null ? void 0 : _b2.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper })
                    }, [
                      _ctx.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.leading({ class: (_d = props.ui) == null ? void 0 : _d.leading })
                      }, [
                        renderSlot(_ctx.$slots, "leading", {}, () => {
                          var _a5;
                          return [
                            _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: _ctx.icon,
                              class: ui.value.leadingIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.leadingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true),
                      _ctx.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.headline({ class: (_e = props.ui) == null ? void 0 : _e.headline, headline: !slots.headline })
                      }, [
                        renderSlot(_ctx.$slots, "headline", {}, () => [
                          createTextVNode(toDisplayString(_ctx.headline), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      _ctx.title || !!slots.title ? (openBlock(), createBlock("h2", {
                        key: 2,
                        class: ui.value.title({ class: (_f = props.ui) == null ? void 0 : _f.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: ui.value.description({ class: (_g = props.ui) == null ? void 0 : _g.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(_ctx.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_h = _ctx.features) == null ? void 0 : _h.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                        key: 4,
                        class: ui.value.features({ class: (_i = props.ui) == null ? void 0 : _i.features })
                      }, [
                        renderSlot(_ctx.$slots, "features", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.features, (feature, index) => {
                            return openBlock(), createBlock(_component_UPageFeature, mergeProps({
                              key: index,
                              as: "li",
                              ref_for: true
                            }, feature), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_j = _ctx.links) == null ? void 0 : _j.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 5,
                        class: ui.value.links({ class: (_k = props.ui) == null ? void 0 : _k.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "lg",
                              ref_for: true
                            }, link), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : _ctx.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UPageSection = Object.assign(_sfc_main, { __name: "UPageSection" });

export { UPageSection as U };
//# sourceMappingURL=PageSection.vue.mjs.map
