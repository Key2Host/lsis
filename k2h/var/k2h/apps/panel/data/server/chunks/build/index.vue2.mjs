import { _ as __nuxt_component_0, c as __nuxt_component_8, a as __nuxt_component_1$2, b as __nuxt_component_3 } from './NotificationIndicator.vue.mjs';
import { _ as __nuxt_component_2 } from './DashboardSidebarCollapse.vue.mjs';
import { _ as __nuxt_component_4$1 } from './DashboardSearchButton.vue.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, useSlots, computed, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv, a as _appConfig, u as useLocale, e as useAppConfig, U as UAvatar, f as UIcon, c as __nuxt_component_1, g as useState } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './PageCard.vue.mjs';
import { _ as __nuxt_component_4 } from './Progress.vue.mjs';
import { _ as __nuxt_component_1$1 } from './Badge.vue.mjs';
import './DashboardSidebarToggle.vue.mjs';
import './tv.mjs';
import 'tailwind-variants';
import '@vueuse/core';
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

const theme$1 = {
  "base": "animate-pulse rounded-[calc(var(--ui-radius)*1.5)] bg-(--ui-bg-elevated)"
};

var _a$1;
const appConfigSkeleton = _appConfig;
const skeleton = tv({ extend: tv(theme$1), ...((_a$1 = appConfigSkeleton.ui) == null ? void 0 : _a$1.skeleton) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(skeleton)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "USkeleton" });

const theme = {
  "slots": {
    "root": "relative overflow-hidden w-full rounded-[calc(var(--ui-radius)*2)] p-4 flex gap-2.5",
    "wrapper": "min-w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium",
    "description": "text-sm opacity-90",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex flex-wrap gap-1.5 shrink-0",
    "close": "p-0"
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
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-primary) text-(--ui-bg)"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-secondary) text-(--ui-bg)"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-success) text-(--ui-bg)"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-info) text-(--ui-bg)"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-warning) text-(--ui-bg)"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-error) text-(--ui-bg)"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error)"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "root": "text-(--ui-bg) bg-(--ui-bg-inverted)"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border)"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 ring ring-inset ring-(--ui-border-accented)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid"
  }
};

var _a;
const appConfigAlert = _appConfig;
const alert = tv({ extend: tv(theme), ...((_a = appConfigAlert.ui) == null ? void 0 : _a.alert) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    icon: {},
    avatar: {},
    color: {},
    variant: {},
    orientation: { default: "vertical" },
    actions: {},
    close: { type: [Boolean, Object] },
    closeIcon: {},
    class: {},
    ui: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = computed(() => alert({
      color: props.color,
      variant: props.variant,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a4, _b2, _c2;
              if (_ctx.avatar) {
                _push2(ssrRenderComponent(UAvatar, mergeProps({
                  size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                }, _ctx.avatar, {
                  class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                }), null, _parent2, _scopeId));
              } else if (_ctx.icon) {
                _push2(ssrRenderComponent(UIcon, {
                  name: _ctx.icon,
                  class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_b = props.ui) == null ? void 0 : _b.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c = props.ui) == null ? void 0 : _c.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.orientation === "vertical" && ((_d = _ctx.actions) == null ? void 0 : _d.length)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_e = props.ui) == null ? void 0 : _e.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.actions, (action, index) => {
                  _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                    key: index,
                    size: "xs",
                    ref_for: true
                  }, action), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.orientation === "horizontal" && ((_f = _ctx.actions) == null ? void 0 : _f.length) || _ctx.close) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_g = props.ui) == null ? void 0 : _g.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (_ctx.orientation === "horizontal" && ((_h = _ctx.actions) == null ? void 0 : _h.length)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(_ctx.actions, (action, index) => {
                    _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                var _a4;
                if (_ctx.close) {
                  _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                    icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                    size: "md",
                    color: "neutral",
                    variant: "link",
                    "aria-label": unref(t)("alert.close")
                  }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                    class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b2, _c2;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                  }), null, 16, ["size", "class"])) : _ctx.icon ? (openBlock(), createBlock(UIcon, {
                    key: 1,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.title({ class: (_j = props.ui) == null ? void 0 : _j.title })
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(_ctx.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.description({ class: (_k = props.ui) == null ? void 0 : _k.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.orientation === "vertical" && ((_l = _ctx.actions) == null ? void 0 : _l.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: (_m = props.ui) == null ? void 0 : _m.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                      return openBlock(), createBlock(__nuxt_component_1, mergeProps({
                        key: index,
                        size: "xs",
                        ref_for: true
                      }, action), null, 16);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.orientation === "horizontal" && ((_n = _ctx.actions) == null ? void 0 : _n.length) || _ctx.close ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: (_o = props.ui) == null ? void 0 : _o.actions, orientation: "horizontal" })
              }, [
                _ctx.orientation === "horizontal" && ((_p = _ctx.actions) == null ? void 0 : _p.length) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                    return openBlock(), createBlock(__nuxt_component_1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, 16);
                  }), 128))
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                  var _a4;
                  return [
                    _ctx.close ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                      key: 0,
                      icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                      size: "md",
                      color: "neutral",
                      variant: "link",
                      "aria-label": unref(t)("alert.close")
                    }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                      class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                      onClick: ($event) => emits("update:open", false)
                    }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                  ];
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "UAlert" });

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const greeting = useState("greeting", () => "");
    const randomQuote = useState("randomQuote", () => "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = __nuxt_component_0;
      const _component_UDashboardNavbar = __nuxt_component_1$2;
      const _component_UDashboardSidebarCollapse = __nuxt_component_2;
      const _component_NotificationIndicator = __nuxt_component_3;
      const _component_UDashboardSearchButton = __nuxt_component_4$1;
      const _component_USkeleton = __nuxt_component_5;
      const _component_UAlert = __nuxt_component_6;
      const _component_UPageCard = __nuxt_component_0$1;
      const _component_UTooltip = __nuxt_component_8;
      const _component_UProgress = __nuxt_component_4;
      const _component_UButton = __nuxt_component_1;
      const _component_UBadge = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UDashboardPanel, mergeProps({ id: "home" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: "Übersicht",
              ui: { right: "gap-3" }
            }, {
              leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardSidebarCollapse, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardSidebarCollapse)
                  ];
                }
              }),
              right: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NotificationIndicator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardSearchButton, {
                    collapsed: true,
                    class: "flex md:hidden"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NotificationIndicator),
                    createVNode(_component_UDashboardSearchButton, {
                      collapsed: true,
                      class: "flex md:hidden"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: "Übersicht",
                ui: { right: "gap-3" }
              }, {
                leading: withCtx(() => [
                  createVNode(_component_UDashboardSidebarCollapse)
                ]),
                right: withCtx(() => [
                  createVNode(_component_NotificationIndicator),
                  createVNode(_component_UDashboardSearchButton, {
                    collapsed: true,
                    class: "flex md:hidden"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl"${_scopeId}><span class="font-bold flex items-center"${_scopeId}>`);
            if (!unref(greeting)) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-6 w-[150px] mb-3" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->${ssrInterpolate(unref(greeting))}, Lukas! 👋 <!--]-->`);
            }
            _push2(`</span><span class="text-sm flex items-center"${_scopeId}>`);
            if (!unref(randomQuote)) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-[250px]" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->${ssrInterpolate(unref(randomQuote))}<!--]-->`);
            }
            _push2(`</span></h1><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAlert, {
              color: "warning",
              title: "Instabile Version",
              description: "Die aktuelle Version der WebApp befindet sich in der Alpha-Phase und ist daher nicht stabil. Es kann zu Fehlern und Abstürzen kommen...",
              icon: "i-heroicons-exclamation-triangle"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(4, (n) => {
              _push2(`<div class="w-full md:w-1/2 px-2 mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPageCard, {
                icon: "i-heroicons-globe-europe-africa",
                variant: "soft"
              }, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xl"${_scopeId2}>Webhosting (Small + Domain)</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-xl" }, "Webhosting (Small + Domain)")
                    ];
                  }
                }),
                description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-2 gap-4 max-sm:grid-cols-1 my-4"${_scopeId2}><span class="text-xs -mb-2 block sm:hidden"${_scopeId2}>Prozessor (CPU)</span>`);
                    _push3(ssrRenderComponent(_component_UTooltip, {
                      text: "Prozessor (CPU)",
                      "delay-duration": 0
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UProgress, {
                            modelValue: 31,
                            max: 100,
                            size: "lg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UProgress, {
                              modelValue: 31,
                              max: 100,
                              size: "lg"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-xs -mb-2 block sm:hidden"${_scopeId2}>Arbeitsspeicher (RAM)</span>`);
                    _push3(ssrRenderComponent(_component_UTooltip, {
                      text: "Arbeitsspeicher (RAM)",
                      "delay-duration": 0
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UProgress, {
                            modelValue: 64,
                            max: 100,
                            size: "lg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UProgress, {
                              modelValue: 64,
                              max: 100,
                              size: "lg"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-xs -mb-2 block sm:hidden"${_scopeId2}>Speicherauslastung</span>`);
                    _push3(ssrRenderComponent(_component_UTooltip, {
                      text: "Speicherauslastung",
                      "delay-duration": 0
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UProgress, {
                            modelValue: 12,
                            max: 100,
                            size: "lg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UProgress, {
                              modelValue: 12,
                              max: 100,
                              size: "lg"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-xs -mb-2 block sm:hidden"${_scopeId2}>Traffic</span>`);
                    _push3(ssrRenderComponent(_component_UTooltip, {
                      text: "Traffic",
                      "delay-duration": 0
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UProgress, {
                            modelValue: 4,
                            max: 100,
                            size: "lg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UProgress, {
                              modelValue: 4,
                              max: 100,
                              size: "lg"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      class: "mb-2",
                      to: "/service/1",
                      block: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Server verwalten`);
                        } else {
                          return [
                            createTextVNode("Server verwalten")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UBadge, {
                      icon: "i-heroicons-no-symbol",
                      size: "sm",
                      color: "error",
                      variant: "outline"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Offline`);
                        } else {
                          return [
                            createTextVNode("Offline")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-2 gap-4 max-sm:grid-cols-1 my-4" }, [
                        createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Prozessor (CPU)"),
                        createVNode(_component_UTooltip, {
                          text: "Prozessor (CPU)",
                          "delay-duration": 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UProgress, {
                              modelValue: 31,
                              max: 100,
                              size: "lg"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Arbeitsspeicher (RAM)"),
                        createVNode(_component_UTooltip, {
                          text: "Arbeitsspeicher (RAM)",
                          "delay-duration": 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UProgress, {
                              modelValue: 64,
                              max: 100,
                              size: "lg"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Speicherauslastung"),
                        createVNode(_component_UTooltip, {
                          text: "Speicherauslastung",
                          "delay-duration": 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UProgress, {
                              modelValue: 12,
                              max: 100,
                              size: "lg"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Traffic"),
                        createVNode(_component_UTooltip, {
                          text: "Traffic",
                          "delay-duration": 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UProgress, {
                              modelValue: 4,
                              max: 100,
                              size: "lg"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UButton, {
                        class: "mb-2",
                        to: "/service/1",
                        block: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Server verwalten")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UBadge, {
                        icon: "i-heroicons-no-symbol",
                        size: "sm",
                        color: "error",
                        variant: "outline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Offline")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h1", { class: "text-2xl" }, [
                createVNode("span", { class: "font-bold flex items-center" }, [
                  !unref(greeting) ? (openBlock(), createBlock(_component_USkeleton, {
                    key: 0,
                    class: "h-6 w-[150px] mb-3"
                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(unref(greeting)) + ", Lukas! 👋 ", 1)
                  ], 64))
                ]),
                createVNode("span", { class: "text-sm flex items-center" }, [
                  !unref(randomQuote) ? (openBlock(), createBlock(_component_USkeleton, {
                    key: 0,
                    class: "h-4 w-[250px]"
                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(unref(randomQuote)), 1)
                  ], 64))
                ])
              ]),
              createVNode("div", { class: "w-full" }, [
                createVNode(_component_UAlert, {
                  color: "warning",
                  title: "Instabile Version",
                  description: "Die aktuelle Version der WebApp befindet sich in der Alpha-Phase und ist daher nicht stabil. Es kann zu Fehlern und Abstürzen kommen...",
                  icon: "i-heroicons-exclamation-triangle"
                })
              ]),
              createVNode("div", { class: "flex flex-wrap" }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                  return createVNode("div", {
                    key: n,
                    class: "w-full md:w-1/2 px-2 mb-4"
                  }, [
                    createVNode(_component_UPageCard, {
                      icon: "i-heroicons-globe-europe-africa",
                      variant: "soft"
                    }, {
                      title: withCtx(() => [
                        createVNode("span", { class: "text-xl" }, "Webhosting (Small + Domain)")
                      ]),
                      description: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-2 gap-4 max-sm:grid-cols-1 my-4" }, [
                          createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Prozessor (CPU)"),
                          createVNode(_component_UTooltip, {
                            text: "Prozessor (CPU)",
                            "delay-duration": 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UProgress, {
                                modelValue: 31,
                                max: 100,
                                size: "lg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Arbeitsspeicher (RAM)"),
                          createVNode(_component_UTooltip, {
                            text: "Arbeitsspeicher (RAM)",
                            "delay-duration": 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UProgress, {
                                modelValue: 64,
                                max: 100,
                                size: "lg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Speicherauslastung"),
                          createVNode(_component_UTooltip, {
                            text: "Speicherauslastung",
                            "delay-duration": 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UProgress, {
                                modelValue: 12,
                                max: 100,
                                size: "lg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-xs -mb-2 block sm:hidden" }, "Traffic"),
                          createVNode(_component_UTooltip, {
                            text: "Traffic",
                            "delay-duration": 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UProgress, {
                                modelValue: 4,
                                max: 100,
                                size: "lg"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_UButton, {
                          class: "mb-2",
                          to: "/service/1",
                          block: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Server verwalten")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UBadge, {
                          icon: "i-heroicons-no-symbol",
                          size: "sm",
                          color: "error",
                          variant: "outline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Offline")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
