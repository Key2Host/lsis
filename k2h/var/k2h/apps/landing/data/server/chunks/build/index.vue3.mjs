import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext, provide, resolveDynamicComponent, createTextVNode, toDisplayString, ref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, PaginationRoot, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast, Primitive, useDateFormatter } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { h as useAppConfig, c as useLocale, t as tv, s as __nuxt_component_2$1, _ as _appConfig, N as avatarGroupInjectionKey, o as __nuxt_component_3, r as tv$1, L as __nuxt_component_0$2, O as getSlotChildrenText, P as ImageComponent, J as __nuxt_component_0$3, u as useLocalePath, a as useI18n, b as useSeoMeta } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Chip.vue.mjs';
import { U as UPageSection } from './PageSection.vue.mjs';
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
import 'vaul-vue';
import 'reka-ui/namespaced';

const theme$4 = {
  "slots": {
    "root": "",
    "list": "flex items-center gap-1",
    "ellipsis": "pointer-events-none",
    "label": "min-w-5 text-center",
    "first": "",
    "prev": "",
    "item": "",
    "next": "",
    "last": ""
  }
};

var _a$4;
const appConfigPagination = _appConfig;
const pagination = tv({ extend: tv(theme$4), ...((_a$4 = appConfigPagination.ui) == null ? void 0 : _a$4.pagination) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    as: {},
    firstIcon: {},
    prevIcon: {},
    nextIcon: {},
    lastIcon: {},
    ellipsisIcon: {},
    color: { default: "neutral" },
    variant: { default: "outline" },
    activeColor: { default: "primary" },
    activeVariant: { default: "solid" },
    showControls: { type: Boolean, default: true },
    size: { default: "md" },
    to: {},
    class: {},
    ui: {},
    defaultPage: {},
    disabled: { type: Boolean },
    itemsPerPage: { default: 10 },
    page: {},
    showEdges: { type: Boolean, default: false },
    siblingCount: { default: 2 },
    total: { default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { dir } = useLocale();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = pagination();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), {
              class: unref(ui).list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  if (_ctx.showControls || !!slots.first) {
                    _push3(ssrRenderComponent(unref(PaginationFirst), {
                      "as-child": "",
                      class: unref(ui).first({ class: (_a4 = props.ui) == null ? void 0 : _a4.first })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "first", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: firstIcon.value,
                                  to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.showControls || !!slots.prev) {
                    _push3(ssrRenderComponent(unref(PaginationPrev), {
                      "as-child": "",
                      class: unref(ui).prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "prev", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: prevIcon.value,
                                  to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    var _a5, _b3;
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        key: index,
                        "as-child": "",
                        value: item.value,
                        class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              _push4(ssrRenderComponent(__nuxt_component_2$1, {
                                color: page === item.value ? _ctx.activeColor : _ctx.color,
                                variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                size: _ctx.size,
                                label: String(item.value),
                                ui: { label: unref(ui).label() },
                                to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                                var _a6;
                                return [
                                  createVNode(__nuxt_component_2$1, {
                                    color: page === item.value ? _ctx.activeColor : _ctx.color,
                                    variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                    size: _ctx.size,
                                    label: String(item.value),
                                    ui: { label: unref(ui).label() },
                                    to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                    square: ""
                                  }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                                ];
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(PaginationEllipsis), {
                        key: item.type,
                        index,
                        "as-child": "",
                        class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "ellipsis", {}, () => {
                              _push4(ssrRenderComponent(__nuxt_component_2$1, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                                createVNode(__nuxt_component_2$1, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                                }, null, 8, ["color", "variant", "size", "icon"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  if (_ctx.showControls || !!slots.next) {
                    _push3(ssrRenderComponent(unref(PaginationNext), {
                      "as-child": "",
                      class: unref(ui).next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "next", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: nextIcon.value,
                                  to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.showControls || !!slots.last) {
                    _push3(ssrRenderComponent(unref(PaginationLast), {
                      "as-child": "",
                      class: unref(ui).last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "last", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: lastIcon.value,
                                  to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: unref(ui).first({ class: (_e = props.ui) == null ? void 0 : _e.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: unref(ui).prev({ class: (_f = props.ui) == null ? void 0 : _f.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a5, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: page === item.value ? _ctx.activeColor : _ctx.color,
                                  variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                  size: _ctx.size,
                                  label: String(item.value),
                                  ui: { label: unref(ui).label() },
                                  to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ];
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: item.type,
                          index,
                          "as-child": "",
                          class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(__nuxt_component_2$1, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    _ctx.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: unref(ui).next({ class: (_g = props.ui) == null ? void 0 : _g.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: unref(ui).last({ class: (_h = props.ui) == null ? void 0 : _h.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PaginationList), {
                class: unref(ui).list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(({ items }) => {
                  var _a4, _b2, _c, _d;
                  return [
                    _ctx.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: unref(ui).first({ class: (_a4 = props.ui) == null ? void 0 : _a4.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: unref(ui).prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a5, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              return [
                                createVNode(__nuxt_component_2$1, {
                                  color: page === item.value ? _ctx.activeColor : _ctx.color,
                                  variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                  size: _ctx.size,
                                  label: String(item.value),
                                  ui: { label: unref(ui).label() },
                                  to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ];
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: item.type,
                          index,
                          "as-child": "",
                          class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(__nuxt_component_2$1, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    _ctx.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: unref(ui).next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: unref(ui).last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2$1, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "UPagination" });

const theme$3 = {
  "slots": {
    "root": "inline-flex flex-row-reverse justify-end",
    "base": "relative rounded-full ring-(--ui-bg) first:me-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "base": "ring -me-0.5"
      },
      "2xs": {
        "base": "ring -me-0.5"
      },
      "xs": {
        "base": "ring -me-0.5"
      },
      "sm": {
        "base": "ring-2 -me-1.5"
      },
      "md": {
        "base": "ring-2 -me-1.5"
      },
      "lg": {
        "base": "ring-2 -me-1.5"
      },
      "xl": {
        "base": "ring-3 -me-2"
      },
      "2xl": {
        "base": "ring-3 -me-2"
      },
      "3xl": {
        "base": "ring-3 -me-2"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};

var _a$3;
const appConfigAvatarGroup = _appConfig;
const avatarGroup = tv({ extend: tv(theme$3), ...((_a$3 = appConfigAvatarGroup.ui) == null ? void 0 : _a$3.avatarGroup) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AvatarGroup",
  __ssrInlineRender: true,
  props: {
    as: {},
    size: {},
    max: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => avatarGroup({
      size: props.size
    }));
    const max = computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const children = computed(() => {
      var _a2;
      let children2 = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (children2 == null ? void 0 : children2.length) {
        children2 = children2.flatMap((child) => {
          if (typeof child.type === "symbol") {
            if (typeof child.children === "string") {
              return;
            }
            return child.children;
          }
          return child;
        }).filter(Boolean);
      }
      return children2 || [];
    });
    const visibleAvatars = computed(() => {
      if (!children.value.length) {
        return [];
      }
      if (!max.value || max.value <= 0) {
        return [...children.value].reverse();
      }
      return [...children.value].slice(0, max.value).reverse();
    });
    const hiddenCount = computed(() => {
      if (!children.value.length) {
        return 0;
      }
      return children.value.length - visibleAvatars.value.length;
    });
    provide(avatarGroupInjectionKey, computed(() => ({
      size: props.size
    })));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            if (hiddenCount.value > 0) {
              _push2(ssrRenderComponent(__nuxt_component_3, {
                text: `+${hiddenCount.value}`,
                class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base })
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(visibleAvatars.value, (avatar, count) => {
              var _a4;
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(avatar), {
                key: count,
                class: ui.value.base({ class: (_a4 = props.ui) == null ? void 0 : _a4.base })
              }, null), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              hiddenCount.value > 0 ? (openBlock(), createBlock(__nuxt_component_3, {
                key: 0,
                text: `+${hiddenCount.value}`,
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
              }, null, 8, ["text", "class"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(visibleAvatars.value, (avatar, count) => {
                var _a4;
                return openBlock(), createBlock(resolveDynamicComponent(avatar), {
                  key: count,
                  class: ui.value.base({ class: (_a4 = props.ui) == null ? void 0 : _a4.base })
                }, null, 8, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "UAvatarGroup" });

const theme$2 = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-(--ui-text-muted)",
    "avatar": "shrink-0"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-center"
      },
      "vertical": {
        "root": "flex flex-col"
      }
    },
    "to": {
      "true": {
        "name": [
          "text-(--ui-text) peer-hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-(--ui-text-muted-toned)",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115"
      },
      "false": {
        "name": "text-(--ui-text-highlighted)",
        "description": ""
      }
    },
    "size": {
      "3xs": {
        "root": "gap-1",
        "wrapper": "flex items-center gap-1",
        "name": "text-xs",
        "description": "text-xs"
      },
      "2xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "sm": {
        "root": "gap-2",
        "name": "text-xs",
        "description": "text-xs"
      },
      "md": {
        "root": "gap-2",
        "name": "text-sm",
        "description": "text-xs"
      },
      "lg": {
        "root": "gap-2.5",
        "name": "text-sm",
        "description": "text-sm"
      },
      "xl": {
        "root": "gap-2.5",
        "name": "text-base",
        "description": "text-sm"
      },
      "2xl": {
        "root": "gap-3",
        "name": "text-base",
        "description": "text-base"
      },
      "3xl": {
        "root": "gap-3",
        "name": "text-lg",
        "description": "text-base"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};

var _a$2;
const appConfigUser = _appConfig;
const user = tv$1({ extend: tv$1(theme$2), ...((_a$2 = appConfigUser.uiPro) == null ? void 0 : _a$2.user) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "User",
  __ssrInlineRender: true,
  props: {
    as: {},
    name: {},
    description: {},
    avatar: {},
    chip: { type: [Boolean, Object] },
    size: {},
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
    const ui = computed(() => user({
      size: props.size,
      orientation: props.orientation,
      to: !!props.to || !!props.onClick
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UChip = __nuxt_component_0$1;
      const _component_UAvatar = __nuxt_component_3;
      const _component_ULink = __nuxt_component_0$2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {}, () => {
              var _a4;
              if (_ctx.chip && _ctx.avatar) {
                _push2(ssrRenderComponent(_component_UChip, mergeProps({ inset: "" }, typeof _ctx.chip === "object" ? _ctx.chip : {}, { size: _ctx.size }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a5, _b2;
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: _ctx.name }, _ctx.avatar, {
                        size: _ctx.size,
                        class: ui.value.avatar({ class: (_a5 = props.ui) == null ? void 0 : _a5.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UAvatar, mergeProps({ alt: _ctx.name }, _ctx.avatar, {
                          size: _ctx.size,
                          class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (_ctx.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: _ctx.name }, _ctx.avatar, {
                  size: _ctx.size,
                  class: ui.value.avatar({ class: (_a4 = props.ui) == null ? void 0 : _a4.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": _ctx.name }, { to: _ctx.to, target: _ctx.target, ..._ctx.$attrs }, {
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
              if (_ctx.name || !!slots.name) {
                _push2(`<p class="${ssrRenderClass(ui.value.name({ class: (_a4 = props.ui) == null ? void 0 : _a4.name }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {}, () => {
                var _a4;
                return [
                  _ctx.chip && _ctx.avatar ? (openBlock(), createBlock(_component_UChip, mergeProps({
                    key: 0,
                    inset: ""
                  }, typeof _ctx.chip === "object" ? _ctx.chip : {}, { size: _ctx.size }), {
                    default: withCtx(() => {
                      var _a5;
                      return [
                        createVNode(_component_UAvatar, mergeProps({ alt: _ctx.name }, _ctx.avatar, {
                          size: _ctx.size,
                          class: ui.value.avatar({ class: (_a5 = props.ui) == null ? void 0 : _a5.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }),
                    _: 1
                  }, 16, ["size"])) : _ctx.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                    key: 1,
                    alt: _ctx.name
                  }, _ctx.avatar, {
                    size: _ctx.size,
                    class: ui.value.avatar({ class: (_a4 = props.ui) == null ? void 0 : _a4.avatar })
                  }), null, 16, ["alt", "size", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_b = props.ui) == null ? void 0 : _b.wrapper })
              }, [
                _ctx.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                  key: 0,
                  "aria-label": _ctx.name
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
                    _ctx.name || !!slots.name ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: ui.value.name({ class: (_a4 = props.ui) == null ? void 0 : _a4.name })
                    }, [
                      renderSlot(_ctx.$slots, "name", {}, () => [
                        createTextVNode(toDisplayString(_ctx.name), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
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

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UUser = Object.assign(_sfc_main$3, { __name: "UUser" });

const theme$1 = {
  "slots": {
    "root": "relative group/blog-post flex flex-col rounded-[calc(var(--ui-radius)*2)] overflow-hidden",
    "header": "relative overflow-hidden aspect-[16/9] w-full pointer-events-none",
    "body": "min-w-0 flex-1 flex flex-col",
    "footer": "",
    "image": "object-cover object-top w-full h-full",
    "title": "text-xl text-pretty font-semibold text-(--ui-text-highlighted)",
    "description": "mt-1 text-base text-pretty",
    "authors": "pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5",
    "avatar": "",
    "meta": "flex items-center gap-2 mb-2",
    "date": "text-sm",
    "badge": ""
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "lg:grid lg:grid-cols-2 lg:items-center gap-x-8",
        "body": "justify-center p-4 sm:p-6 lg:px-0"
      },
      "vertical": {
        "root": "flex flex-col",
        "body": "p-4 sm:p-6"
      }
    },
    "variant": {
      "outline": {
        "root": "bg-(--ui-bg) ring ring-(--ui-border)",
        "date": "text-(--ui-text-toned)",
        "description": "text-(--ui-text-muted)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50",
        "date": "text-(--ui-text-muted)",
        "description": "text-(--ui-text-toned)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",
        "date": "text-(--ui-text-muted)",
        "description": "text-(--ui-text-toned)"
      },
      "ghost": {
        "date": "text-(--ui-text-toned)",
        "description": "text-(--ui-text-muted)",
        "header": "shadow-lg rounded-[calc(var(--ui-radius)*2)]"
      },
      "naked": {
        "root": "p-0 sm:p-0",
        "date": "text-(--ui-text-toned)",
        "description": "text-(--ui-text-muted)",
        "header": "shadow-lg rounded-[calc(var(--ui-radius)*2)]"
      }
    },
    "to": {
      "true": {
        "root": [
          "transition"
        ],
        "image": "transform transition-transform duration-200 group-hover/blog-post:scale-110",
        "avatar": "transform transition-transform duration-200 hover:scale-115"
      }
    },
    "image": {
      "true": ""
    }
  },
  "compoundVariants": [
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
        "root": "hover:bg-(--ui-bg-elevated) hover:ring-(--ui-border-accented)"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-elevated)/50",
        "header": [
          "group-hover/blog-post:shadow-none",
          "transition-all"
        ]
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "vertical",
      "class": {
        "header": "group-hover/blog-post:rounded-b-none"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "horizontal",
      "class": {
        "header": "group-hover/blog-post:rounded-r-none"
      }
    },
    {
      "orientation": "vertical",
      "image": false,
      "variant": "naked",
      "class": {
        "body": "p-0 sm:p-0"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};

var _a$1;
const appConfigBlogPost = _appConfig;
const blogPost = tv$1({ extend: tv$1(theme$1), ...((_a$1 = appConfigBlogPost.uiPro) == null ? void 0 : _a$1.blogPost) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    as: { default: "article" },
    title: {},
    description: {},
    date: {},
    badge: {},
    authors: {},
    image: {},
    orientation: { default: "vertical" },
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
    const ui = computed(() => blogPost({
      orientation: props.orientation,
      variant: props.variant,
      image: !!props.image,
      to: !!props.to || !!props.onClick
    }));
    const { locale } = useLocale();
    const formatter = useDateFormatter(locale.value.code);
    const date = computed(() => {
      if (!props.date) {
        return;
      }
      try {
        return formatter.custom(new Date(props.date), { dateStyle: "medium" });
      } catch {
        return props.date;
      }
    });
    const datetime = computed(() => {
      var _a2;
      if (!props.date) {
        return;
      }
      try {
        return (_a2 = new Date(props.date)) == null ? void 0 : _a2.toISOString();
      } catch {
        return void 0;
      }
    });
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Post link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ULink = __nuxt_component_0$2;
      const _component_UBadge = __nuxt_component_0$3;
      const _component_UAvatarGroup = __nuxt_component_2;
      const _component_UAvatar = __nuxt_component_3;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            if (_ctx.image || !!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a4;
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof _ctx.image === "string" ? { src: _ctx.image, alt: _ctx.title } : { alt: _ctx.title, ..._ctx.image }, {
                  class: ui.value.image({ class: (_a4 = props.ui) == null ? void 0 : _a4.image, to: !!_ctx.to })
                }), null), _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
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
            ssrRenderSlot(_ctx.$slots, "body", {}, () => {
              var _a4, _b2, _c2, _d2, _e2;
              if (date.value || !!slots.date || (_ctx.badge || !!slots.badge)) {
                _push2(`<div class="${ssrRenderClass(ui.value.meta({ class: (_a4 = props.ui) == null ? void 0 : _a4.meta }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
                  var _a5;
                  if (_ctx.badge) {
                    _push2(ssrRenderComponent(_component_UBadge, mergeProps({
                      color: "neutral",
                      variant: "subtle"
                    }, typeof _ctx.badge === "string" ? { label: _ctx.badge } : _ctx.badge, {
                      class: ui.value.badge({ class: (_a5 = props.ui) == null ? void 0 : _a5.badge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "date", {}, () => {
                  var _a5;
                  if (date.value) {
                    _push2(`<time${ssrRenderAttr("datetime", datetime.value)} class="${ssrRenderClass(ui.value.date({ class: (_a5 = props.ui) == null ? void 0 : _a5.date }))}"${_scopeId}>${ssrInterpolate(date.value)}</time>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.title || !!slots.title) {
                _push2(`<h2 class="${ssrRenderClass(ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_d2 = _ctx.authors) == null ? void 0 : _d2.length) || !!slots.authors) {
                _push2(`<div class="${ssrRenderClass(ui.value.authors({ class: (_e2 = props.ui) == null ? void 0 : _e2.authors }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "authors", {}, () => {
                  var _a5;
                  if ((_a5 = _ctx.authors) == null ? void 0 : _a5.length) {
                    _push2(`<!--[-->`);
                    if (_ctx.authors.length > 1) {
                      _push2(ssrRenderComponent(_component_UAvatarGroup, null, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            ssrRenderList(_ctx.authors, (author, index) => {
                              var _a6;
                              _push3(ssrRenderComponent(_component_ULink, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                class: ui.value.avatar({ class: (_a6 = props.ui) == null ? void 0 : _a6.avatar, to: !!author.to }),
                                raw: ""
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, author.avatar), null, _parent4, _scopeId3));
                                  } else {
                                    return [
                                      createVNode(_component_UAvatar, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.authors, (author, index) => {
                                var _a6;
                                return openBlock(), createBlock(_component_ULink, {
                                  key: index,
                                  to: author.to,
                                  target: author.target,
                                  class: ui.value.avatar({ class: (_a6 = props.ui) == null ? void 0 : _a6.avatar, to: !!author.to }),
                                  raw: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UAvatar, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "target", "class"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent2, _scopeId));
                    } else {
                      _push2(ssrRenderComponent(UUser, _ctx.authors[0], null, _parent2, _scopeId));
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.image || !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => {
                  var _a4;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof _ctx.image === "string" ? { src: _ctx.image, alt: _ctx.title } : { alt: _ctx.title, ..._ctx.image }, {
                      class: ui.value.image({ class: (_a4 = props.ui) == null ? void 0 : _a4.image, to: !!_ctx.to })
                    }), null, 16, ["class"]))
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
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
                renderSlot(_ctx.$slots, "body", {}, () => {
                  var _a4, _b2, _c2, _d2, _e2;
                  return [
                    date.value || !!slots.date || (_ctx.badge || !!slots.badge) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.meta({ class: (_a4 = props.ui) == null ? void 0 : _a4.meta })
                    }, [
                      renderSlot(_ctx.$slots, "badge", {}, () => {
                        var _a5;
                        return [
                          _ctx.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "subtle"
                          }, typeof _ctx.badge === "string" ? { label: _ctx.badge } : _ctx.badge, {
                            class: ui.value.badge({ class: (_a5 = props.ui) == null ? void 0 : _a5.badge })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      renderSlot(_ctx.$slots, "date", {}, () => {
                        var _a5;
                        return [
                          date.value ? (openBlock(), createBlock("time", {
                            key: 0,
                            datetime: datetime.value,
                            class: ui.value.date({ class: (_a5 = props.ui) == null ? void 0 : _a5.date })
                          }, toDisplayString(date.value), 11, ["datetime"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    _ctx.title || !!slots.title ? (openBlock(), createBlock("h2", {
                      key: 1,
                      class: ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                    }, [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(_ctx.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    ((_d2 = _ctx.authors) == null ? void 0 : _d2.length) || !!slots.authors ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: ui.value.authors({ class: (_e2 = props.ui) == null ? void 0 : _e2.authors })
                    }, [
                      renderSlot(_ctx.$slots, "authors", {}, () => {
                        var _a5;
                        return [
                          ((_a5 = _ctx.authors) == null ? void 0 : _a5.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            _ctx.authors.length > 1 ? (openBlock(), createBlock(_component_UAvatarGroup, { key: 0 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.authors, (author, index) => {
                                  var _a6;
                                  return openBlock(), createBlock(_component_ULink, {
                                    key: index,
                                    to: author.to,
                                    target: author.target,
                                    class: ui.value.avatar({ class: (_a6 = props.ui) == null ? void 0 : _a6.avatar, to: !!author.to }),
                                    raw: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UAvatar, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "target", "class"]);
                                }), 128))
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(UUser, mergeProps({ key: 1 }, _ctx.authors[0]), null, 16))
                          ], 64)) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true)
                  ];
                })
              ], 2),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UBlogPost = Object.assign(_sfc_main$2, { __name: "UBlogPost" });

const theme = {
  "base": "flex flex-col gap-8 lg:gap-y-16",
  "variants": {
    "orientation": {
      "horizontal": "sm:grid sm:grid-cols-2 lg:grid-cols-3",
      "vertical": ""
    }
  }
};

var _a;
const appConfigBlogPosts = _appConfig;
const blogPosts = tv$1({ extend: tv$1(theme), ...((_a = appConfigBlogPosts.uiPro) == null ? void 0 : _a.blogPosts) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogPosts",
  __ssrInlineRender: true,
  props: {
    as: {},
    posts: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: unref(blogPosts)({ orientation: _ctx.orientation, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.posts, (post, index) => {
                _push2(ssrRenderComponent(UBlogPost, mergeProps({
                  key: index,
                  orientation: _ctx.orientation === "vertical" ? "horizontal" : "vertical",
                  ref_for: true
                }, post), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.posts, (post, index) => {
                  return openBlock(), createBlock(UBlogPost, mergeProps({
                    key: index,
                    orientation: _ctx.orientation === "vertical" ? "horizontal" : "vertical",
                    ref_for: true
                  }, post), null, 16, ["orientation"]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UBlogPosts = Object.assign(_sfc_main$1, { __name: "UBlogPosts" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const page = ref(1);
    const items = ref(Array(55));
    const { t } = useI18n({
      useScope: "global"
    });
    const blogPosts = [
      {
        title: "Nuxt 3.9",
        description: "Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive...",
        image: {
          src: "https://picsum.photos/id/10/640/360",
          alt: "Nuxt 3.9"
        }
      },
      {
        title: "Nuxt DevTools 1.0",
        description: "Nuxt DevTools v1.0 is out, generally available to all Nuxt projects!",
        image: {
          src: "https://picsum.photos/id/11/640/360",
          alt: "Nuxt DevTools 1.0"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      }
    ];
    useSeoMeta({
      title: t("newsroom.title"),
      ogTitle: t("newsroom.title"),
      description: t("newsroom.description"),
      ogDescription: t("newsroom.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPagination = __nuxt_component_0;
      _push(ssrRenderComponent(unref(UPageSection), mergeProps({
        title: _ctx.$t("newsroom.title"),
        description: _ctx.$t("newsroom.description")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UBlogPosts), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(blogPosts, (post, index) => {
                    _push3(ssrRenderComponent(unref(UBlogPost), mergeProps({
                      key: index,
                      ref_for: true
                    }, post, {
                      to: unref(localePath)("/newsroom/1")
                    }), null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                      return createVNode(unref(UBlogPost), mergeProps({
                        key: index,
                        ref_for: true
                      }, post, {
                        to: unref(localePath)("/newsroom/1")
                      }), null, 16, ["to"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center opacity-75"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: page.value,
              "onUpdate:modelValue": ($event) => page.value = $event,
              "page-count": 5,
              total: items.value.length
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(UBlogPosts), null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                    return createVNode(unref(UBlogPost), mergeProps({
                      key: index,
                      ref_for: true
                    }, post, {
                      to: unref(localePath)("/newsroom/1")
                    }), null, 16, ["to"]);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-center opacity-75" }, [
                createVNode(_component_UPagination, {
                  modelValue: page.value,
                  "onUpdate:modelValue": ($event) => page.value = $event,
                  "page-count": 5,
                  total: items.value.length
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsroom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
