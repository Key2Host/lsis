import { u as useAppConfig, t as tv, W as _sfc_main$t, k as _sfc_main$u } from './server.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme = {
  "slots": {
    "root": "relative isolate rounded-xl overflow-hidden",
    "container": "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
    "wrapper": "",
    "title": "text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "links": "mt-8 flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "naked": {
        "description": "text-muted"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main = {
  __name: "UPageCTA",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false, default: false },
    variant: { type: null, required: false },
    links: { type: Array, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageCTA) || {} })({
        variant: props.variant,
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UContainer = _sfc_main$t;
      const _component_UButton = _sfc_main$u;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId2}>`);
                  if (__props.title || !!slots.title) {
                    _push3(`<h2 class="${ssrRenderClass(ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</h2>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.description || !!slots.description) {
                    _push3(`<div class="${ssrRenderClass(ui.value.description({ class: (_c = props.ui) == null ? void 0 : _c.description }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push3(`${ssrInterpolate(__props.description)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (((_d = __props.links) == null ? void 0 : _d.length) || !!slots.links) {
                    _push3(`<div class="${ssrRenderClass(ui.value.links({ class: (_e = props.ui) == null ? void 0 : _e.links }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                      _push3(`<!--[-->`);
                      ssrRenderList(__props.links, (link, index) => {
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
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (__props.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", {
                      class: ui.value.wrapper({ class: (_f = props.ui) == null ? void 0 : _f.wrapper })
                    }, [
                      __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                        key: 0,
                        class: ui.value.title({ class: (_g = props.ui) == null ? void 0 : _g.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.description({ class: (_h = props.ui) == null ? void 0 : _h.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_i = __props.links) == null ? void 0 : _i.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.links({ class: (_j = props.ui) == null ? void 0 : _j.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "lg",
                              ref_for: true
                            }, link), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c, _d, _e;
                  return [
                    createVNode("div", {
                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                    }, [
                      __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                        key: 0,
                        class: ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.description({ class: (_c = props.ui) == null ? void 0 : _c.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_d = __props.links) == null ? void 0 : _d.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.links({ class: (_e = props.ui) == null ? void 0 : _e.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "lg",
                              ref_for: true
                            }, link), null, 16);
                          }), 128))
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageCTA-DLP7kNcK.mjs.map
