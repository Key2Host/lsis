import { A as useSeoMeta, B as _sfc_main$e, C as __nuxt_component_2, _ as _sfc_main$t, a as useAppConfig, w as tv, z as _sfc_main$j, h as _sfc_main$o } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSlots, computed, unref, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'ipx';

const theme = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
    "wrapper": "",
    "headline": "mb-4",
    "title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-lg sm:text-xl/8 text-muted",
    "links": "mt-10 flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "wrapper": "text-center",
        "description": "text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-primary flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageHero",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageHero) || {} })({
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UContainer = _sfc_main$j;
      const _component_UButton = _sfc_main$o;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId2}>`);
                  if (__props.headline || !!slots.headline) {
                    _push3(`<div class="${ssrRenderClass(ui.value.headline({ class: (_b2 = props.ui) == null ? void 0 : _b2.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                      _push3(`${ssrInterpolate(__props.headline)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.title || !!slots.title) {
                    _push3(`<h1 class="${ssrRenderClass(ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</h1>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.description || !!slots.description) {
                    _push3(`<div class="${ssrRenderClass(ui.value.description({ class: (_d = props.ui) == null ? void 0 : _d.description }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push3(`${ssrInterpolate(__props.description)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links) {
                    _push3(`<div class="${ssrRenderClass(ui.value.links({ class: (_f = props.ui) == null ? void 0 : _f.links }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                      _push3(`<!--[-->`);
                      ssrRenderList(__props.links, (link, index) => {
                        _push3(ssrRenderComponent(_component_UButton, mergeProps({
                          key: index,
                          size: "xl",
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
                      class: ui.value.wrapper({ class: (_g = props.ui) == null ? void 0 : _g.wrapper })
                    }, [
                      __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.headline({ class: (_h = props.ui) == null ? void 0 : _h.headline, headline: !slots.headline })
                      }, [
                        renderSlot(_ctx.$slots, "headline", {}, () => [
                          createTextVNode(toDisplayString(__props.headline), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                        key: 1,
                        class: ui.value.title({ class: (_i = props.ui) == null ? void 0 : _i.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_k = __props.links) == null ? void 0 : _k.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: ui.value.links({ class: (_l = props.ui) == null ? void 0 : _l.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "xl",
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
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c, _d, _e, _f;
                  return [
                    createVNode("div", {
                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                    }, [
                      __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.headline({ class: (_b2 = props.ui) == null ? void 0 : _b2.headline, headline: !slots.headline })
                      }, [
                        renderSlot(_ctx.$slots, "headline", {}, () => [
                          createTextVNode(toDisplayString(__props.headline), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                        key: 1,
                        class: ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.description({ class: (_d = props.ui) == null ? void 0 : _d.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      ((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: ui.value.links({ class: (_f = props.ui) == null ? void 0 : _f.links })
                      }, [
                        renderSlot(_ctx.$slots, "links", {}, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                            return openBlock(), createBlock(_component_UButton, mergeProps({
                              key: index,
                              size: "xl",
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
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/hero.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      titleTemplate: `%s`,
      title: "Key2Host Dokumentation",
      ogTitle: "Key2Host Dokumentation",
      description: "We'll show you how it's done! Follow our documentation and become a pro!",
      ogDescription: "We'll show you how it's done! Follow our documentation and become a pro!"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1;
      const _component_UBadge = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_UIcon = _sfc_main$t;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({
        title: "We'll show you how it's done!",
        description: "Follow our documentation and become a pro!",
        orientation: "horizontal",
        links: [
          {
            label: "Search documentation",
            icon: "i-heroicons-arrow-right-20-solid",
            trailing: true,
            to: "/introduction",
            size: "lg"
          },
          {
            label: "Contact support",
            icon: "i-heroicons-question-mark-circle",
            size: "lg",
            color: "neutral",
            variant: "outline",
            to: "https://help.key2host.com/",
            target: "_blank"
          }
        ]
      }, _attrs), {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              variant: "subtle",
              size: "lg",
              class: "relative rounded-full font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://www.key2host.com/",
                    target: "_blank",
                    class: "focus:outline-none",
                    tabindex: "-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="absolute inset-0" aria-hidden="true"${_scopeId3}></span>`);
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
                  }, _parent3, _scopeId2));
                  _push3(` Provided by Key2Host `);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-top-right-on-square-20-solid",
                    class: "ml-1 w-4 h-4 pointer-events-none"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "https://www.key2host.com/",
                      target: "_blank",
                      class: "focus:outline-none",
                      tabindex: "-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "absolute inset-0",
                          "aria-hidden": "true"
                        })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Provided by Key2Host "),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-top-right-on-square-20-solid",
                      class: "ml-1 w-4 h-4 pointer-events-none"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                variant: "subtle",
                size: "lg",
                class: "relative rounded-full font-semibold"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "https://www.key2host.com/",
                    target: "_blank",
                    class: "focus:outline-none",
                    tabindex: "-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Provided by Key2Host "),
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-arrow-top-right-on-square-20-solid",
                    class: "ml-1 w-4 h-4 pointer-events-none"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Hero Image (AI)" class="lg:max-w-[35vw] rounded-full"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Hero Image (AI)",
                class: "lg:max-w-[35vw] rounded-full"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DB4reERk.mjs.map
