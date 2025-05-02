import { defineComponent, ref, withAsyncContext, computed, unref, withCtx, mergeProps, createBlock, openBlock, Fragment, renderList, renderSlot, useSlots, createVNode, resolveDynamicComponent, createCommentVNode, toDisplayString, createTextVNode, provide, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n, O as useAsyncData, d as useSeoMeta, u as useAppConfig, t as tv, m as useLocale, M as getSlotChildrenText, N as ImageComponent, L as _sfc_main$v, e as _sfc_main$o, C as _sfc_main$x, n as tv$1, k as _sfc_main$u, K as avatarGroupInjectionKey } from './server.mjs';
import { q as queryCollection } from './app-0EaPdPfQ.mjs';
import { Primitive, useDateFormatter, useForwardPropsEmits, PaginationRoot, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast } from 'reka-ui';
import { _ as _sfc_main$7 } from './Chip-DhmDMzRt.mjs';
import { _ as _sfc_main$6 } from './PageSection-VgfDQh5Y.mjs';
import { reactivePick } from '@vueuse/core';
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
import 'better-sqlite3';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme$4 = {
  "slots": {
    "root": "inline-flex flex-row-reverse justify-end",
    "base": "relative rounded-full ring-bg first:me-0"
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
const _sfc_main$5 = {
  __name: "UAvatarGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    size: { type: null, required: false },
    max: { type: [Number, String], required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.avatarGroup) || {} })({
        size: props.size
      });
    });
    const max = computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const children = computed(() => {
      var _a;
      let children2 = (_a = slots.default) == null ? void 0 : _a.call(slots);
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
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (hiddenCount.value > 0) {
              _push2(ssrRenderComponent(_sfc_main$x, {
                text: `+${hiddenCount.value}`,
                class: ui.value.base({ class: (_a2 = props.ui) == null ? void 0 : _a2.base })
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(visibleAvatars.value, (avatar, count) => {
              var _a3;
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(avatar), {
                key: count,
                class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base })
              }, null), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              hiddenCount.value > 0 ? (openBlock(), createBlock(_sfc_main$x, {
                key: 0,
                text: `+${hiddenCount.value}`,
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
              }, null, 8, ["text", "class"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(visibleAvatars.value, (avatar, count) => {
                var _a3;
                return openBlock(), createBlock(resolveDynamicComponent(avatar), {
                  key: count,
                  class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base })
                }, null, 8, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-muted",
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
          "text-default peer-hover:text-highlighted",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-toned",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115"
      },
      "false": {
        "name": "text-highlighted",
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
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UUser",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    avatar: { type: Object, required: false },
    chip: { type: [Boolean, Object], required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: null, required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.uiPro) == null ? void 0 : _a.user) || {} })({
        size: props.size,
        orientation: props.orientation,
        to: !!props.to || !!props.onClick
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UChip = _sfc_main$7;
      const _component_UAvatar = _sfc_main$x;
      const _component_ULink = _sfc_main$v;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {}, () => {
              var _a3;
              if (__props.chip && __props.avatar) {
                _push2(ssrRenderComponent(_component_UChip, mergeProps({ inset: "" }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b2;
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                        size: __props.size,
                        class: ui.value.avatar({ class: (_a4 = props.ui) == null ? void 0 : _a4.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                          size: __props.size,
                          class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (__props.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                  size: __props.size,
                  class: ui.value.avatar({ class: (_a3 = props.ui) == null ? void 0 : _a3.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.wrapper }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": __props.name }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
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
              var _a3, _b2;
              if (__props.name || !!slots.name) {
                _push2(`<p class="${ssrRenderClass(ui.value.name({ class: (_a3 = props.ui) == null ? void 0 : _a3.name }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${ssrInterpolate(__props.name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
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
                var _a3;
                return [
                  __props.chip && __props.avatar ? (openBlock(), createBlock(_component_UChip, mergeProps({
                    key: 0,
                    inset: ""
                  }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createVNode(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                          size: __props.size,
                          class: ui.value.avatar({ class: (_a4 = props.ui) == null ? void 0 : _a4.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }),
                    _: 1
                  }, 16, ["size"])) : __props.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                    key: 1,
                    alt: __props.name
                  }, __props.avatar, {
                    size: __props.size,
                    class: ui.value.avatar({ class: (_a3 = props.ui) == null ? void 0 : _a3.avatar })
                  }), null, 16, ["alt", "size", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_b = props.ui) == null ? void 0 : _b.wrapper })
              }, [
                __props.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                  key: 0,
                  "aria-label": __props.name
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
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
                  var _a3, _b2;
                  return [
                    __props.name || !!slots.name ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: ui.value.name({ class: (_a3 = props.ui) == null ? void 0 : _a3.name })
                    }, [
                      renderSlot(_ctx.$slots, "name", {}, () => [
                        createTextVNode(toDisplayString(__props.name), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description })
                    }, [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(__props.description), 1)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative group/blog-post flex flex-col rounded-lg overflow-hidden",
    "header": "relative overflow-hidden aspect-[16/9] w-full pointer-events-none",
    "body": "min-w-0 flex-1 flex flex-col",
    "footer": "",
    "image": "object-cover object-top w-full h-full",
    "title": "text-xl text-pretty font-semibold text-highlighted",
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
        "root": "bg-default ring ring-default",
        "date": "text-toned",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "date": "text-muted",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "date": "text-muted",
        "description": "text-toned"
      },
      "ghost": {
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
      },
      "naked": {
        "root": "p-0 sm:p-0",
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
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
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated hover:ring-accented"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50",
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
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UBlogPost",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "article" },
    title: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: [String, Date], required: false },
    badge: { type: null, required: false },
    authors: { type: Array, required: false },
    image: { type: [String, Object], required: false },
    orientation: { type: null, required: false, default: "vertical" },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: null, required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { locale } = useLocale();
    const appConfig = useAppConfig();
    const formatter = useDateFormatter(locale.value.code);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.uiPro) == null ? void 0 : _a.blogPost) || {} })({
        orientation: props.orientation,
        variant: props.variant,
        image: !!props.image,
        to: !!props.to || !!props.onClick
      });
    });
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
      var _a;
      if (!props.date) {
        return;
      }
      try {
        return (_a = new Date(props.date)) == null ? void 0 : _a.toISOString();
      } catch {
        return void 0;
      }
    });
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Post link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ULink = _sfc_main$v;
      const _component_UBadge = _sfc_main$o;
      const _component_UAvatarGroup = _sfc_main$5;
      const _component_UAvatar = _sfc_main$x;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (__props.image || !!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a3;
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
                  class: ui.value.image({ class: (_a3 = props.ui) == null ? void 0 : _a3.image, to: !!__props.to })
                }), null), _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
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
              var _a3, _b2, _c2, _d2, _e2;
              if (date.value || !!slots.date || (__props.badge || !!slots.badge)) {
                _push2(`<div class="${ssrRenderClass(ui.value.meta({ class: (_a3 = props.ui) == null ? void 0 : _a3.meta }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
                  var _a4;
                  if (__props.badge) {
                    _push2(ssrRenderComponent(_component_UBadge, mergeProps({
                      color: "neutral",
                      variant: "subtle"
                    }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                      class: ui.value.badge({ class: (_a4 = props.ui) == null ? void 0 : _a4.badge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "date", {}, () => {
                  var _a4;
                  if (date.value) {
                    _push2(`<time${ssrRenderAttr("datetime", datetime.value)} class="${ssrRenderClass(ui.value.date({ class: (_a4 = props.ui) == null ? void 0 : _a4.date }))}"${_scopeId}>${ssrInterpolate(date.value)}</time>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.title || !!slots.title) {
                _push2(`<h2 class="${ssrRenderClass(ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_d2 = __props.authors) == null ? void 0 : _d2.length) || !!slots.authors) {
                _push2(`<div class="${ssrRenderClass(ui.value.authors({ class: (_e2 = props.ui) == null ? void 0 : _e2.authors }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "authors", {}, () => {
                  var _a4;
                  if ((_a4 = __props.authors) == null ? void 0 : _a4.length) {
                    _push2(`<!--[-->`);
                    if (__props.authors.length > 1) {
                      _push2(ssrRenderComponent(_component_UAvatarGroup, null, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.authors, (author, index) => {
                              var _a5;
                              _push3(ssrRenderComponent(_component_ULink, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                class: ui.value.avatar({ class: (_a5 = props.ui) == null ? void 0 : _a5.avatar, to: !!author.to }),
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
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                                var _a5;
                                return openBlock(), createBlock(_component_ULink, {
                                  key: index,
                                  to: author.to,
                                  target: author.target,
                                  class: ui.value.avatar({ class: (_a5 = props.ui) == null ? void 0 : _a5.avatar, to: !!author.to }),
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
                      _push2(ssrRenderComponent(_sfc_main$4, __props.authors[0], null, _parent2, _scopeId));
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
              __props.image || !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => {
                  var _a3;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
                      class: ui.value.image({ class: (_a3 = props.ui) == null ? void 0 : _a3.image, to: !!__props.to })
                    }), null, 16, ["class"]))
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
              }, [
                __props.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                  key: 0,
                  "aria-label": ariaLabel.value
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
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
                  var _a3, _b2, _c2, _d2, _e2;
                  return [
                    date.value || !!slots.date || (__props.badge || !!slots.badge) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.meta({ class: (_a3 = props.ui) == null ? void 0 : _a3.meta })
                    }, [
                      renderSlot(_ctx.$slots, "badge", {}, () => {
                        var _a4;
                        return [
                          __props.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "subtle"
                          }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                            class: ui.value.badge({ class: (_a4 = props.ui) == null ? void 0 : _a4.badge })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      renderSlot(_ctx.$slots, "date", {}, () => {
                        var _a4;
                        return [
                          date.value ? (openBlock(), createBlock("time", {
                            key: 0,
                            datetime: datetime.value,
                            class: ui.value.date({ class: (_a4 = props.ui) == null ? void 0 : _a4.date })
                          }, toDisplayString(date.value), 11, ["datetime"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                      key: 1,
                      class: ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                    }, [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(__props.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    ((_d2 = __props.authors) == null ? void 0 : _d2.length) || !!slots.authors ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: ui.value.authors({ class: (_e2 = props.ui) == null ? void 0 : _e2.authors })
                    }, [
                      renderSlot(_ctx.$slots, "authors", {}, () => {
                        var _a4;
                        return [
                          ((_a4 = __props.authors) == null ? void 0 : _a4.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            __props.authors.length > 1 ? (openBlock(), createBlock(_component_UAvatarGroup, { key: 0 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_component_ULink, {
                                    key: index,
                                    to: author.to,
                                    target: author.target,
                                    class: ui.value.avatar({ class: (_a5 = props.ui) == null ? void 0 : _a5.avatar, to: !!author.to }),
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
                            })) : (openBlock(), createBlock(_sfc_main$4, mergeProps({ key: 1 }, __props.authors[0]), null, 16))
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "base": "flex flex-col gap-8 lg:gap-y-16",
  "variants": {
    "orientation": {
      "horizontal": "sm:grid sm:grid-cols-2 lg:grid-cols-3",
      "vertical": ""
    }
  }
};
const _sfc_main$2 = {
  __name: "UBlogPosts",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    posts: { type: Array, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.uiPro) == null ? void 0 : _a.blogPosts) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value({ orientation: __props.orientation, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(__props.posts, (post, index) => {
                _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
                  key: index,
                  orientation: __props.orientation === "vertical" ? "horizontal" : "vertical",
                  ref_for: true
                }, post), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post, index) => {
                  return openBlock(), createBlock(_sfc_main$3, mergeProps({
                    key: index,
                    orientation: __props.orientation === "vertical" ? "horizontal" : "vertical",
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
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
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
const _sfc_main$1 = {
  __name: "UPagination",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    firstIcon: { type: String, required: false },
    prevIcon: { type: String, required: false },
    nextIcon: { type: String, required: false },
    lastIcon: { type: String, required: false },
    ellipsisIcon: { type: String, required: false },
    color: { type: null, required: false, default: "neutral" },
    variant: { type: null, required: false, default: "outline" },
    activeColor: { type: null, required: false, default: "primary" },
    activeVariant: { type: null, required: false, default: "solid" },
    showControls: { type: Boolean, required: false, default: true },
    size: { type: null, required: false, default: "md" },
    to: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultPage: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    itemsPerPage: { type: Number, required: false, default: 10 },
    page: { type: Number, required: false },
    showEdges: { type: Boolean, required: false, default: false },
    siblingCount: { type: Number, required: false, default: 2 },
    total: { type: Number, required: false, default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.pagination) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), {
              class: ui.value.list({ class: (_a2 = props.ui) == null ? void 0 : _a2.list })
            }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  if (__props.showControls || !!slots.first) {
                    _push3(ssrRenderComponent(unref(PaginationFirst), {
                      "as-child": "",
                      class: ui.value.first({ class: (_a3 = props.ui) == null ? void 0 : _a3.first })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            var _a4;
                            _push4(ssrRenderComponent(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: firstIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, 1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "first", {}, () => {
                              var _a4;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: firstIcon.value,
                                  to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, 1)
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
                  if (__props.showControls || !!slots.prev) {
                    _push3(ssrRenderComponent(unref(PaginationPrev), {
                      "as-child": "",
                      class: ui.value.prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            var _a4;
                            _push4(ssrRenderComponent(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "prev", {}, () => {
                              var _a4;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: prevIcon.value,
                                  to: page > 1 ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page - 1) : void 0
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
                    var _a4, _b3;
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        key: index,
                        "as-child": "",
                        value: item.value,
                        class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a5;
                              _push4(ssrRenderComponent(_sfc_main$u, {
                                color: page === item.value ? __props.activeColor : __props.color,
                                variant: page === item.value ? __props.activeVariant : __props.variant,
                                size: __props.size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: (_a5 = __props.to) == null ? void 0 : _a5.call(__props, item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                                var _a5;
                                return [
                                  createVNode(_sfc_main$u, {
                                    color: page === item.value ? __props.activeColor : __props.color,
                                    variant: page === item.value ? __props.activeVariant : __props.variant,
                                    size: __props.size,
                                    label: String(item.value),
                                    ui: { label: ui.value.label() },
                                    to: (_a5 = __props.to) == null ? void 0 : _a5.call(__props, item.value),
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
                        class: ui.value.ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "ellipsis", {}, () => {
                              _push4(ssrRenderComponent(_sfc_main$u, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                                createVNode(_sfc_main$u, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
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
                  if (__props.showControls || !!slots.next) {
                    _push3(ssrRenderComponent(unref(PaginationNext), {
                      "as-child": "",
                      class: ui.value.next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            var _a4;
                            _push4(ssrRenderComponent(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "next", {}, () => {
                              var _a4;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: nextIcon.value,
                                  to: page < pageCount ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page + 1) : void 0
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
                  if (__props.showControls || !!slots.last) {
                    _push3(ssrRenderComponent(unref(PaginationLast), {
                      "as-child": "",
                      class: ui.value.last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            var _a4;
                            _push4(ssrRenderComponent(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: lastIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "last", {}, () => {
                              var _a4;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: lastIcon.value,
                                  to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, pageCount)
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
                    __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: ui.value.first({ class: (_e = props.ui) == null ? void 0 : _e.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: firstIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: ui.value.prev({ class: (_f = props.ui) == null ? void 0 : _f.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a4, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a5;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: page === item.value ? __props.activeColor : __props.color,
                                  variant: page === item.value ? __props.activeVariant : __props.variant,
                                  size: __props.size,
                                  label: String(item.value),
                                  ui: { label: ui.value.label() },
                                  to: (_a5 = __props.to) == null ? void 0 : _a5.call(__props, item.value),
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
                          class: ui.value.ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(_sfc_main$u, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: ui.value.next({ class: (_g = props.ui) == null ? void 0 : _g.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: ui.value.last({ class: (_h = props.ui) == null ? void 0 : _h.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: lastIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, pageCount)
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
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(({ items }) => {
                  var _a3, _b2, _c, _d;
                  return [
                    __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: ui.value.first({ class: (_a3 = props.ui) == null ? void 0 : _a3.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: firstIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: ui.value.prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a4, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a5;
                              return [
                                createVNode(_sfc_main$u, {
                                  color: page === item.value ? __props.activeColor : __props.color,
                                  variant: page === item.value ? __props.activeVariant : __props.variant,
                                  size: __props.size,
                                  label: String(item.value),
                                  ui: { label: ui.value.label() },
                                  to: (_a5 = __props.to) == null ? void 0 : _a5.call(__props, item.value),
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
                          class: ui.value.ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(_sfc_main$u, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: ui.value.next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a4 = __props.to) == null ? void 0 : _a4.call(__props, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: ui.value.last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$u, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: lastIcon.value,
                              to: (_a4 = __props.to) == null ? void 0 : _a4.call(__props, pageCount)
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n({
      useScope: "global"
    });
    const page = ref(1);
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "news",
      () => queryCollection("newsroom").all()
    )), __temp = await __temp, __restore(), __temp);
    if (!posts.value || posts.value.length === 0) {
      posts.value = [];
    }
    const paginatedPosts = computed(() => {
      const start = (page.value - 1) * 6;
      const end = start + 6;
      return posts.value.slice(start, end);
    });
    useSeoMeta({
      title: t("newsroom.title"),
      ogTitle: t("newsroom.title"),
      description: t("newsroom.description"),
      ogDescription: t("newsroom.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        title: _ctx.$t("newsroom.title"),
        description: _ctx.$t("newsroom.description")
      }, null, _parent));
      _push(`<section class="max-w-[90%] mx-auto mb-10">`);
      if (unref(posts).length != 0) {
        _push(ssrRenderComponent(unref(_sfc_main$2), { class: "mb-10" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(paginatedPosts.value, (post, index) => {
                _push2(ssrRenderComponent(unref(_sfc_main$3), mergeProps({
                  key: index,
                  to: post.path,
                  ref_for: true
                }, post), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(paginatedPosts.value, (post, index) => {
                  return openBlock(), createBlock(unref(_sfc_main$3), mergeProps({
                    key: index,
                    to: post.path,
                    ref_for: true
                  }, post), null, 16, ["to"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<p class="text-center mb-40 text-xl"> Keine Posts gefunden </p>`);
      }
      _push(`<div class="flex justify-center mt-8">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        page: page.value,
        "onUpdate:page": ($event) => page.value = $event,
        total: unref(posts).length,
        "items-per-page": 6
      }, null, _parent));
      _push(`</div></section><!--]-->`);
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
//# sourceMappingURL=index-DxudoMJq.mjs.map
