import { _ as __nuxt_component_0 } from './LandingSection-D8wZHn5-.mjs';
import { defineComponent, withAsyncContext, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, unref, createTextVNode, toRef, mergeProps, computed, createSlots, renderSlot, ref, watch, toRaw, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useLocalePath, a as useI18n, b as useSeoMeta, X as useCartStore, _ as _export_sfc, D as useUI, $ as useAppConfig, Y as __nuxt_component_0$4, aa as __nuxt_component_1$2, R as __nuxt_component_2$3, z as __nuxt_component_1$3, Q as __nuxt_component_0$b, C as mergeConfig, K as get, J as appConfig } from './server.mjs';
import { twJoin } from 'tailwind-merge';
import { _ as __nuxt_component_3 } from './Skeleton-JACvfoN5.mjs';
import { a as __nuxt_component_5, b as __nuxt_component_0$1, _ as __nuxt_component_2$1 } from './Alert-SG_bcirw.mjs';
import { V as upperFirst, k as defu, J as isEqual } from '../nitro/nitro.mjs';
import { useVModel } from '@vueuse/core';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';

const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  caption: "sr-only",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    expanded: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  expand: {
    icon: "transform transition-transform duration-200"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    expandButton: {
      icon: "i-heroicons-chevron-down",
      color: "gray",
      variant: "ghost",
      size: "xs",
      class: "-my-1.5 align-middle"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PricingGrid",
  __ssrInlineRender: true,
  props: {
    compact: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = {
      wrapper: "flex flex-col lg:grid lg:grid-cols-3 w-full justify-center items-center gap-8"
    };
    const { ui, attrs } = useUI("pricing.grid", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, __props.compact && "gap-x-0"]
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/pricing/PricingGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UPricingGrid" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    align: {
      type: String,
      default: "bottom"
    },
    highlight: {
      type: Boolean,
      default: false
    },
    scale: {
      type: Boolean,
      default: false
    },
    features: {
      type: Array,
      default: () => []
    },
    badge: {
      type: Object,
      default: void 0
    },
    button: {
      type: Object,
      default: void 0
    },
    price: {
      type: String,
      default: void 0
    },
    discount: {
      type: String,
      default: void 0
    },
    cycle: {
      type: String,
      default: void 0
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const appConfig2 = useAppConfig();
    const config2 = computed(() => {
      const base = twJoin(
        "flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col",
        props.orientation === "horizontal" ? "lg:grid lg:grid-cols-10" : ""
      );
      const left = props.orientation === "horizontal" ? "lg:col-span-7" : "";
      const right = props.orientation === "horizontal" ? "flex flex-col lg:items-center justify-center gap-y-6 lg:col-span-3 border-t lg:border-l lg:border-t-0 border-gray-200 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 xl:pl-10" : "";
      return {
        wrapper: "relative flex flex-col self-stretch w-full",
        highlight: "ring-2 ring-primary dark:ring-primary",
        scale: "lg:scale-[1.1] lg:z-10",
        rounded: "rounded-xl",
        header: {
          padding: "p-6 lg:px-8 xl:px-10"
        },
        body: {
          base,
          padding: "p-6 lg:p-8 xl:p-10"
        },
        footer: {
          padding: "p-6 lg:px-8 xl:px-10"
        },
        inner: "flex items-center gap-3",
        title: "text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate",
        description: "text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2",
        amount: {
          base: "flex flex-row items-baseline gap-x-1",
          discount: "text-gray-500 dark:text-gray-400 line-through text-xl sm:text-2xl font-medium",
          price: "text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold",
          cycle: "text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate"
        },
        features: {
          vertical: "space-y-3 text-sm",
          horizontal: "grid lg:grid-cols-2 text-sm gap-3",
          item: {
            base: "flex items-center gap-x-3 min-w-0",
            label: "text-gray-600 dark:text-gray-400 truncate",
            icon: {
              base: "w-5 h-5 flex-shrink-0 text-primary",
              name: appConfig2.ui.icons.check
            }
          }
        },
        divider: "my-6 lg:my-8",
        left,
        right
      };
    });
    const { ui, attrs } = useUI("pricing.card", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$4;
      const _component_UBadge = __nuxt_component_1$2;
      const _component_UDivider = __nuxt_component_2$3;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_0$b;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: [unref(ui).wrapper, __props.highlight && unref(ui).highlight, __props.scale && unref(ui).scale]
      }, unref(attrs), { ui: unref(ui) }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).left)}"${_scopeId}><div class="${ssrRenderClass(unref(ui).inner)}"${_scopeId}>`);
            if (__props.title || _ctx.$slots.title) {
              _push2(`<p class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.badge) {
              _push2(ssrRenderComponent(_component_UBadge, { variant: "subtle", ...__props.badge }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "horizontal") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UDivider, {
                class: unref(ui).divider
              }, null, _parent2, _scopeId));
              if (((_a = __props.features) == null ? void 0 : _a.length) || _ctx.$slots.features) {
                _push2(`<div class="flex-1"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                  var _a2;
                  if ((_a2 = __props.features) == null ? void 0 : _a2.length) {
                    _push2(`<ul class="${ssrRenderClass(unref(ui).features.horizontal)}"${_scopeId}><!--[-->`);
                    ssrRenderList(__props.features, (offer, index) => {
                      _push2(`<li class="${ssrRenderClass(unref(ui).features.item.base)}"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: unref(ui).features.item.icon.name,
                        class: unref(ui).features.item.icon.base
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="${ssrRenderClass(unref(ui).features.item.label)}"${_scopeId}>${ssrInterpolate(offer)}</span></li>`);
                    });
                    _push2(`<!--]--></ul>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.orientation === "vertical") {
              _push2(`<!--[--><div class="${ssrRenderClass(unref(ui).amount.base)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "amount", {}, () => {
                if (__props.discount && __props.price) {
                  _push2(`<p class="${ssrRenderClass(unref(ui).amount.discount)}"${_scopeId}>${ssrInterpolate(__props.price)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.price)}"${_scopeId}>${ssrInterpolate(__props.discount || __props.price || " ")}</p>`);
                ssrRenderSlot(_ctx.$slots, "cycle", {}, () => {
                  if (__props.cycle) {
                    _push2(`<p class="${ssrRenderClass(unref(ui).amount.cycle)}"${_scopeId}>${ssrInterpolate(__props.cycle)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              if (((_b = __props.features) == null ? void 0 : _b.length) || _ctx.$slots.features) {
                _push2(`<div class="${ssrRenderClass([__props.align === "top" && "order-last", "flex-1"])}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                  var _a2;
                  if ((_a2 = __props.features) == null ? void 0 : _a2.length) {
                    _push2(`<ul class="${ssrRenderClass(unref(ui).features.vertical)}"${_scopeId}><!--[-->`);
                    ssrRenderList(__props.features, (offer, index) => {
                      _push2(`<li class="${ssrRenderClass(unref(ui).features.item.base)}"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: unref(ui).features.item.icon.name,
                        class: unref(ui).features.item.icon.base
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="${ssrRenderClass(unref(ui).features.item.label)}"${_scopeId}>${ssrInterpolate(offer)}</span></li>`);
                    });
                    _push2(`<!--]--></ul>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(unref(ui).right)}"${_scopeId}>`);
            if (__props.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass([unref(ui).amount.base, __props.align === "top" && "order-last"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "amount", {}, () => {
                if (__props.discount && __props.price) {
                  _push2(`<p class="${ssrRenderClass(unref(ui).amount.discount)}"${_scopeId}>${ssrInterpolate(__props.price)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.price)}"${_scopeId}>${ssrInterpolate(__props.discount || __props.price || " ")}</p>`);
                ssrRenderSlot(_ctx.$slots, "cycle", {}, () => {
                  if (__props.cycle) {
                    _push2(`<p class="${ssrRenderClass(unref(ui).amount.cycle)}"${_scopeId}>${ssrInterpolate(__props.cycle)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.button) {
              _push2(ssrRenderComponent(_component_UButton, mergeProps({ block: true, size: "lg", ...__props.button }, {
                onClick: (_c = __props.button) == null ? void 0 : _c.click
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "horizontal") {
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.orientation === "vertical") {
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: unref(ui).left
              }, [
                createVNode("div", {
                  class: unref(ui).inner
                }, [
                  __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: unref(ui).title
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({ key: 1 }, { variant: "subtle", ...__props.badge }), null, 16)) : createCommentVNode("", true)
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.orientation === "horizontal" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_UDivider, {
                    class: unref(ui).divider
                  }, null, 8, ["class"]),
                  ((_d = __props.features) == null ? void 0 : _d.length) || _ctx.$slots.features ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex-1"
                  }, [
                    renderSlot(_ctx.$slots, "features", {}, () => {
                      var _a2;
                      return [
                        ((_a2 = __props.features) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: unref(ui).features.horizontal
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (offer, index) => {
                            return openBlock(), createBlock("li", {
                              key: index,
                              class: unref(ui).features.item.base
                            }, [
                              createVNode(_component_UIcon, {
                                name: unref(ui).features.item.icon.name,
                                class: unref(ui).features.item.icon.base
                              }, null, 8, ["name", "class"]),
                              createVNode("span", {
                                class: unref(ui).features.item.label
                              }, toDisplayString(offer), 3)
                            ], 2);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    })
                  ])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 2),
              __props.orientation === "vertical" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: unref(ui).amount.base
                }, [
                  renderSlot(_ctx.$slots, "amount", {}, () => [
                    __props.discount && __props.price ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: unref(ui).amount.discount
                    }, toDisplayString(__props.price), 3)) : createCommentVNode("", true),
                    createVNode("p", {
                      class: unref(ui).amount.price
                    }, toDisplayString(__props.discount || __props.price || " "), 3),
                    renderSlot(_ctx.$slots, "cycle", {}, () => [
                      __props.cycle ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: unref(ui).amount.cycle
                      }, toDisplayString(__props.cycle), 3)) : createCommentVNode("", true)
                    ])
                  ])
                ], 2),
                ((_e = __props.features) == null ? void 0 : _e.length) || _ctx.$slots.features ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: [__props.align === "top" && "order-last", "flex-1"]
                }, [
                  renderSlot(_ctx.$slots, "features", {}, () => {
                    var _a2;
                    return [
                      ((_a2 = __props.features) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: unref(ui).features.vertical
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (offer, index) => {
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: unref(ui).features.item.base
                          }, [
                            createVNode(_component_UIcon, {
                              name: unref(ui).features.item.icon.name,
                              class: unref(ui).features.item.icon.base
                            }, null, 8, ["name", "class"]),
                            createVNode("span", {
                              class: unref(ui).features.item.label
                            }, toDisplayString(offer), 3)
                          ], 2);
                        }), 128))
                      ], 2)) : createCommentVNode("", true)
                    ];
                  })
                ], 2)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true),
              createVNode("div", {
                class: unref(ui).right
              }, [
                __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: [unref(ui).amount.base, __props.align === "top" && "order-last"]
                }, [
                  renderSlot(_ctx.$slots, "amount", {}, () => [
                    __props.discount && __props.price ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: unref(ui).amount.discount
                    }, toDisplayString(__props.price), 3)) : createCommentVNode("", true),
                    createVNode("p", {
                      class: unref(ui).amount.price
                    }, toDisplayString(__props.discount || __props.price || " "), 3),
                    renderSlot(_ctx.$slots, "cycle", {}, () => [
                      __props.cycle ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: unref(ui).amount.cycle
                      }, toDisplayString(__props.cycle), 3)) : createCommentVNode("", true)
                    ])
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.button ? (openBlock(), createBlock(_component_UButton, mergeProps({ key: 1 }, { block: true, size: "lg", ...__props.button }, {
                  onClick: (_f = __props.button) == null ? void 0 : _f.click
                }), null, 16, ["onClick"])) : createCommentVNode("", true),
                __props.orientation === "horizontal" ? renderSlot(_ctx.$slots, "bottom", { key: 2 }) : createCommentVNode("", true)
              ], 2),
              __props.orientation === "vertical" ? renderSlot(_ctx.$slots, "bottom", { key: 1 }) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        _ctx.$slots.header ? {
          name: "header",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "header")
              ];
            }
          }),
          key: "0"
        } : void 0,
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "footer")
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/pricing/PricingCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UPricingCard" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a, z) {
  return isEqual(a, z);
}
function defaultSort(a, b, direction) {
  if (a === b) {
    return 0;
  }
  if (direction === "asc") {
    return a < b ? -1 : 1;
  } else {
    return a > b ? -1 : 1;
  }
}
function getStringifiedSet(arr) {
  return new Set(arr.map((item) => JSON.stringify(item)));
}
function accessor(key) {
  return (obj) => get(obj, key);
}
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3,
    UButton: __nuxt_component_0$b,
    UProgress: __nuxt_component_2$1,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config.default.sortDescIcon
    },
    expandButton: {
      type: Object,
      default: () => config.default.expandButton
    },
    expand: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config.default.emptyState
    },
    caption: {
      type: String,
      default: null
    },
    progress: {
      type: Object,
      default: () => config.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    multipleExpand: {
      type: Boolean,
      default: true
    },
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:sort", "update:expand", "select:all"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config, toRef(props, "class"));
    const columns = computed(() => {
      const defaultColumns = props.columns ?? Object.keys(props.rows[0]).map((key) => ({
        key,
        label: upperFirst(key),
        sortable: false,
        class: void 0,
        sort: defaultSort
      }));
      const hasColumnSelect = defaultColumns.find((v) => v.key === "select");
      if (hasColumnSelect || !props.modelValue) {
        return defaultColumns;
      }
      return [{
        key: "select",
        sortable: false,
        class: void 0,
        sort: defaultSort
      }, ...defaultColumns];
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const expand = useVModel(props, "expand", emit, {
      passive: true,
      defaultValue: defu({}, props.expand, {
        openedRows: [],
        row: null
      })
    });
    const retriggerSlot = ref(null);
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column) || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a, b) => {
        var _a2;
        const aValue = get(a, column);
        const bValue = get(b, column);
        const sort2 = ((_a2 = columns.value.find((col) => col.key === column)) == null ? void 0 : _a2.sort) ?? defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const totalRows = computed(() => props.rows.length);
    const countCheckedRow = computed(() => {
      const selectedData = getStringifiedSet(selected.value);
      const rowsData = getStringifiedSet(props.rows);
      return Array.from(selectedData).filter((item) => rowsData.has(item)).length;
    });
    const indeterminate = computed(() => {
      if (!selected.value || !props.rows) return false;
      return countCheckedRow.value > 0 && countCheckedRow.value < totalRows.value;
    });
    const isAllRowChecked = computed(() => countCheckedRow.value === totalRows.value);
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null) return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a, z) {
      if (typeof props.by === "string") {
        const accesorFn = accessor(props.by);
        return accesorFn(a) === accesorFn(z);
      }
      return props.by(a, z);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      const selection = (void 0).getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function onContextmenu(event, row) {
      if (!$attrs.onContextmenu) {
        return;
      }
      $attrs.onContextmenu(event, row);
    }
    function selectAllRows() {
      const newSelected = [...selected.value];
      props.rows.forEach((row) => {
        if (!isSelected(row)) {
          newSelected.push(row);
        }
      });
      selected.value = newSelected;
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
      emit("select:all", checked);
    }
    function onChangeCheckbox(checked, row) {
      if (checked) {
        selected.value = props.singleSelect ? [row] : [...selected.value, row];
      } else {
        selected.value = selected.value.filter((value) => !compare(toRaw(value), toRaw(row)));
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    function isExpanded(row) {
      var _a;
      return ((_a = expand.value) == null ? void 0 : _a.openedRows) ? expand.value.openedRows.some((openedRow) => compare(openedRow, row)) : false;
    }
    function toggleOpened(row) {
      expand.value = {
        openedRows: isExpanded(row) ? expand.value.openedRows.filter((v) => !compare(v, row)) : props.multipleExpand ? [...expand.value.openedRows, row] : [row],
        row
      };
    }
    function getAriaSort(column) {
      if (!column.sortable) {
        return void 0;
      }
      if (sort.value.column !== column.key) {
        return "none";
      }
      if (sort.value.direction === "asc") {
        return "ascending";
      }
      if (sort.value.direction === "desc") {
        return "descending";
      }
      return void 0;
    }
    watch(rows, () => {
      retriggerSlot.value = /* @__PURE__ */ new Date();
    }, {
      deep: true
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isAllRowChecked,
      onChangeCheckbox,
      isSelected,
      onSort,
      onSelect,
      onContextmenu,
      onChange,
      getRowData,
      toggleOpened,
      getAriaSort,
      isExpanded,
      retriggerSlot
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_0$b;
  const _component_UProgress = __nuxt_component_2$1;
  const _component_UIcon = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}">`);
  if (_ctx.$slots.caption || _ctx.caption) {
    ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
      _push(`<caption class="${ssrRenderClass(_ctx.ui.caption)}">${ssrInterpolate(_ctx.caption)}</caption>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.expand) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.tr.base)}"><span class="sr-only">Expand</span></th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.key === "select" && _ctx.ui.checkbox.padding, column.class])}"${ssrRenderAttr("aria-sort", _ctx.getAriaSort(column))}>`);
    if (!_ctx.singleSelect && _ctx.modelValue && column.key === "select") {
      ssrRenderSlot(_ctx.$slots, "select-header", {
        indeterminate: _ctx.indeterminate,
        checked: _ctx.isAllRowChecked,
        change: _ctx.onChange
      }, () => {
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          "model-value": _ctx.isAllRowChecked,
          indeterminate: _ctx.indeterminate,
          ref_for: true
        }, _ctx.ui.default.checkbox, {
          "aria-label": "Select all",
          onChange: _ctx.onChange
        }), null, _parent));
      }, _push, _parent);
    } else {
      ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
        column,
        sort: _ctx.sort,
        onSort: _ctx.onSort
      }, () => {
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
            icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
            label: column[_ctx.columnAttribute],
            onClick: ($event) => _ctx.onSort(column)
          }), null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
        }
      }, _push, _parent);
    }
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<!--[--><tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.isExpanded(row) && _ctx.ui.tr.expanded, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row == null ? void 0 : row.class])}">`);
      if (_ctx.expand) {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        if (_ctx.$slots["expand-action"]) {
          ssrRenderSlot(_ctx.$slots, "expand-action", {
            row,
            isExpanded: _ctx.isExpanded(row),
            toggle: () => _ctx.toggleOpened(row)
          }, null, _push, _parent);
        } else {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            disabled: row.disabledExpand,
            ref_for: true
          }, { ..._ctx.ui.default.expandButton || {}, ..._ctx.expandButton }, {
            ui: { icon: { base: [_ctx.ui.expand.icon, _ctx.isExpanded(row) && "rotate-180"].join(" ") } },
            onClick: ($event) => _ctx.toggleOpened(row)
          }), null, _parent));
        }
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        var _a;
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, column == null ? void 0 : column.rowClass, (_a = row[column.key]) == null ? void 0 : _a.class, column.key === "select" && _ctx.ui.checkbox.padding])}">`);
        if (_ctx.modelValue && column.key === "select") {
          ssrRenderSlot(_ctx.$slots, "select-data", {
            checked: _ctx.isSelected(row),
            change: (ev) => _ctx.onChangeCheckbox(ev, row)
          }, () => {
            _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
              "model-value": _ctx.isSelected(row),
              ref_for: true
            }, _ctx.ui.default.checkbox, {
              "aria-label": "Select row",
              onChange: ($event) => _ctx.onChangeCheckbox($event, row)
            }), null, _parent));
          }, _push, _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
            key: _ctx.retriggerSlot,
            column,
            row,
            index,
            getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
          }, () => {
            _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
          }, _push, _parent);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
      if (_ctx.isExpanded(row)) {
        _push(`<tr><td colspan="100%">`);
        ssrRenderSlot(_ctx.$slots, "expand", {
          row,
          index
        }, null, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "UTable" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { t } = useI18n({
      useScope: "global"
    });
    const columns = [{
      key: "feature",
      label: ""
    }, {
      key: "weblite",
      label: "WebLite"
    }, {
      key: "webpro",
      label: "WebPro"
    }, {
      key: "webmax",
      label: "WebMax"
    }];
    const items = [{
      feature: t("products.webspace.tablerows.1"),
      weblite: "2 GB",
      webpro: "5 GB",
      webmax: "10 GB"
    }, {
      feature: t("products.webspace.tablerows.2"),
      weblite: "1",
      webpro: "1",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.3"),
      weblite: "3",
      webpro: "∞",
      webmax: "∞"
    }, {
      feature: t("products.webspace.tablerows.4"),
      weblite: "1",
      webpro: "3",
      webmax: "10"
    }, {
      feature: t("products.webspace.tablerows.5"),
      weblite: "1",
      webpro: "3",
      webmax: "10"
    }, {
      feature: t("products.webspace.tablerows.6"),
      weblite: "1",
      webpro: "2",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.7"),
      weblite: "1",
      webpro: "1",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.8"),
      weblite: t("products.webspace.tablerows.yes"),
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.9"),
      weblite: t("products.webspace.tablerows.yes"),
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.10"),
      weblite: "Fair-Use",
      webpro: "Fair-Use",
      webmax: "Fair-Use"
    }, {
      feature: t("products.webspace.tablerows.11"),
      weblite: "128 M",
      webpro: "256 M",
      webmax: "512 M"
    }, {
      feature: t("products.webspace.tablerows.12"),
      weblite: "64 M",
      webpro: "128 M",
      webmax: "256 M"
    }, {
      feature: t("products.webspace.tablerows.13"),
      weblite: "Ja",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.14"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.15"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.16"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.17"),
      weblite: "",
      webpro: "1",
      webmax: "∞"
    }, {
      feature: t("products.webspace.tablerows.18"),
      weblite: "",
      webpro: "",
      webmax: t("products.webspace.tablerows.yes")
    }];
    const packages = [];
    const fetchPackageInfo = async () => {
      try {
        const response = await fetch("https://saci.key2host.com/api/user/getWebspaceInfo");
        const data = await response.json();
        if (Array.isArray(data.packages)) {
          data.packages.forEach((price) => {
            packages.push({
              name: price.name,
              amount: price.amount,
              priceID: price.priceID
            });
          });
        } else {
          console.error("Die API hat kein Array von Paketen zurückgegeben.");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Webspace-Informationen:", error);
      }
    };
    const buy = async (p) => {
      const cart = useCartStore();
      const selectedPackage = packages[parseInt(p) - 1];
      if (selectedPackage) {
        cart.addToBasket({ type: "webspace", name: selectedPackage.name, amount: selectedPackage.amount, id: selectedPackage.priceID });
        cart.openSlideover();
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchPackageInfo()), await __temp, __restore();
    useSeoMeta({
      title: t("products.webspace.title"),
      ogTitle: t("products.webspace.title"),
      description: t("products.webspace.description"),
      ogDescription: t("products.webspace.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UPricingGrid = __nuxt_component_1;
      const _component_UPricingCard = __nuxt_component_2;
      const _component_USkeleton = __nuxt_component_3;
      const _component_UTable = __nuxt_component_4;
      const _component_UAlert = __nuxt_component_5;
      _push(`<!--[--><div class="min-h-[91vh]">`);
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: _ctx.$t("products.webspace.headline"),
        title: _ctx.$t("products.webspace.title"),
        align: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="opacity-50"${_scopeId}>${ssrInterpolate(_ctx.$t("products.webspace.description"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.webspace.description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPricingGrid, {
        compact: false,
        class: "mt-12 w-full max-w-6xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(packages, (packageItem, index) => {
              _push2(ssrRenderComponent(_component_UPricingCard, {
                key: packageItem.priceID,
                title: packageItem.name,
                price: packageItem.amount + "€",
                discount: "",
                cycle: "/" + _ctx.$t("products.webspace.cycle"),
                button: { label: _ctx.$t("products.webspace.addBasket"), click: () => buy(index + 1) },
                orientation: "vertical",
                align: "bottom"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(packages, (packageItem, index) => {
                return createVNode(_component_UPricingCard, {
                  key: packageItem.priceID,
                  title: packageItem.name,
                  price: packageItem.amount + "€",
                  discount: "",
                  cycle: "/" + _ctx.$t("products.webspace.cycle"),
                  button: { label: _ctx.$t("products.webspace.addBasket"), click: () => buy(index + 1) },
                  orientation: "vertical",
                  align: "bottom"
                }, null, 8, ["title", "price", "cycle", "button"]);
              }), 64)),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 0,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 1,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 2,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-wrap justify-center gap-4 mb-12"><div class="w-full max-w-6xl">`);
      _push(ssrRenderComponent(_component_UTable, {
        rows: items,
        columns
      }, null, _parent));
      _push(ssrRenderComponent(_component_UAlert, {
        class: "mt-4",
        actions: [{ variant: "solid", color: "primary", label: _ctx.$t("products.webspace.domain.action"), to: unref(localePath)("/products/domain") }]
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("products.webspace.domain.title"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-lg" }, toDisplayString(_ctx.$t("products.webspace.domain.title")), 1)
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("products.webspace.domain.description"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("products.webspace.domain.description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/webspace/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D9xK4jXe.mjs.map
