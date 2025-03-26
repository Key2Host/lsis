import { t as tv, U as UIcon, c as UAvatar, g as get, d as _appConfig, u as useToast, a as __nuxt_component_1, b as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, ref, h } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { _ as __nuxt_component_4 } from './Table.vue.mjs';
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
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './tv.mjs';
import '@tanstack/vue-table';

const theme = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden",
      "transition-colors"
    ],
    "content": "focus:outline-none w-full",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",
        "trigger": "flex-1 w-full",
        "indicator": "rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"
      },
      "link": {
        "list": "border-(--ui-border)",
        "indicator": "rounded-full"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};

var _a;
const appConfigTabs = _appConfig;
const tabs = tv({ extend: tv(theme), ...((_a = appConfigTabs.ui) == null ? void 0 : _a.tabs) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    as: {},
    items: {},
    color: {},
    variant: {},
    size: {},
    orientation: { default: "horizontal" },
    content: { type: Boolean, default: true },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    defaultValue: { default: "0" },
    modelValue: {},
    activationMode: {},
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "activationMode", "unmountOnHide"), emits);
    const ui = computed(() => tabs({
      color: props.color,
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.items, (item, index) => {
                    var _a5;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: item.value || String(index),
                      disabled: item.disabled,
                      class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index
                          }, () => {
                            var _a7, _b4, _c;
                            if (item.icon) {
                              _push4(ssrRenderComponent(UIcon, {
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(UAvatar, mergeProps({
                                size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                ref_for: true
                              }, item.avatar, {
                                class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span class="${ssrRenderClass(ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index
                          }, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b3, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!_ctx.content) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                var _a4;
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b2, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!_ctx.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item, index) => {
                var _a4;
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "UTabs" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const UButton = __nuxt_component_1;
    const UDropdownMenu = __nuxt_component_0$1;
    ref("");
    const toast = useToast();
    const data = ref([]);
    const columns = [
      {
        accessorKey: "id",
        header: ({ column }) => {
          const isSorted = column.getIsSorted();
          return h(UButton, {
            color: "neutral",
            variant: "ghost",
            label: "",
            icon: isSorted ? isSorted === "asc" ? "i-lucide-arrow-up-narrow-wide" : "i-lucide-arrow-down-wide-narrow" : "i-lucide-arrow-up-down",
            class: "-mx-2.5",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          });
        },
        cell: ({ row }) => `${row.getValue("id")}`
      },
      {
        accessorKey: "orderno",
        header: "Bestellnummer",
        cell: ({ row }) => `${row.getValue("orderno")}`
      },
      {
        accessorKey: "service",
        header: "Service",
        cell: ({ row }) => `${row.getValue("invoiceno")}`
      },
      {
        accessorKey: "datetime",
        header: ({ column }) => {
          const isSorted = column.getIsSorted();
          return h(UButton, {
            color: "neutral",
            variant: "ghost",
            label: "Datum",
            icon: isSorted ? isSorted === "asc" ? "i-lucide-arrow-up-narrow-wide" : "i-lucide-arrow-down-wide-narrow" : "i-lucide-arrow-up-down",
            class: "-mx-2.5",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          });
        },
        cell: ({ row }) => {
          const date = new Date(row.getValue("datetime"));
          if (isNaN(date.getTime())) {
            return "Ungültiges Datum";
          }
          return date.toLocaleString("de-DE", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });
        }
      },
      {
        id: "actions",
        cell: ({ row }) => {
          return h(
            "div",
            { class: "text-right" },
            h(
              UDropdownMenu,
              {
                content: { align: "end" },
                items: getRowItems(row)
              },
              () => h(UButton, {
                icon: "i-lucide-ellipsis-vertical",
                color: "neutral",
                variant: "ghost",
                class: "ml-auto"
              })
            )
          );
        }
      }
    ];
    function getRowItems(row) {
      return [
        {
          type: "label",
          label: "Aktionen"
        },
        {
          label: "Bestellnummer kopieren",
          onSelect() {
            (void 0).clipboard.writeText(row.original.orderno);
            toast.add({
              title: "Bestellnummer in die Zwischenablage kopiert!",
              color: "success",
              icon: "i-lucide-circle-check"
            });
          }
        },
        {
          type: "separator"
        },
        {
          label: "Service verwalten",
          onSelect() {
            (void 0).clipboard.writeText(row.original.orderno);
            toast.add({
              title: "Aktuell nicht verfügbar!",
              color: "error",
              icon: "i-lucide-circle-check"
            });
          }
        },
        {
          label: "Zahlungsdetails anzeigen",
          onSelect() {
            (void 0).clipboard.writeText(row.original.orderno);
            toast.add({
              title: "Aktuell nicht verfügbar!",
              color: "error",
              icon: "i-lucide-circle-check"
            });
          }
        }
      ];
    }
    const tabItems = [{
      label: "Aktiv",
      value: "active"
    }, {
      label: "Vergangen",
      value: "past"
    }];
    const selectedTab = ref("active");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCard = __nuxt_component_0;
      const _component_UTabs = __nuxt_component_3;
      const _component_UTable = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UPageCard, mergeProps({
        variant: "subtle",
        class: "overflow-auto"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex px-4 py-3.5 border-b border-(--ui-border-accented)"${_scopeId}><span class="font-bold text-lg"${_scopeId}>Bestellungen</span>`);
            _push2(ssrRenderComponent(_component_UTabs, {
              modelValue: selectedTab.value,
              "onUpdate:modelValue": ($event) => selectedTab.value = $event,
              items: tabItems,
              class: "min-w-48 max-w-64 ml-auto",
              content: false,
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UTable, {
              loading: loading.value,
              key: data.value.length,
              data: data.value,
              columns,
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex px-4 py-3.5 border-b border-(--ui-border-accented)" }, [
                createVNode("span", { class: "font-bold text-lg" }, "Bestellungen"),
                createVNode(_component_UTabs, {
                  modelValue: selectedTab.value,
                  "onUpdate:modelValue": ($event) => selectedTab.value = $event,
                  items: tabItems,
                  class: "min-w-48 max-w-64 ml-auto",
                  content: false,
                  size: "xs"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              (openBlock(), createBlock(_component_UTable, {
                loading: loading.value,
                key: data.value.length,
                data: data.value,
                columns,
                class: "w-full"
              }, null, 8, ["loading", "data"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/finances/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders.vue.mjs.map
