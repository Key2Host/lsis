import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_3, c as __nuxt_component_2 } from './NotificationIndicator.vue.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { _ as _appConfig, a as __nuxt_component_6 } from './server.mjs';
import { t as tv } from './tv.mjs';
import { _ as __nuxt_component_5 } from './NavigationMenu.vue.mjs';
import './DashboardSidebarToggle.vue.mjs';
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
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './Badge.vue.mjs';

const theme = {
  "slots": {
    "root": "shrink-0 flex items-center justify-between border-b border-(--ui-border) px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]",
    "left": "flex items-center gap-1.5",
    "right": "flex items-center gap-1.5"
  }
};

var _a;
const appConfigdashboardToolbar = _appConfig;
const dashboardToolbar = tv({ extend: tv(theme), ...((_a = appConfigdashboardToolbar.uiPro) == null ? void 0 : _a.dashboardToolbar) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardToolbar",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const ui = dashboardToolbar();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3, _b;
              _push2(`<div class="${ssrRenderClass(unref(ui).left({ class: [(_a3 = props.ui) == null ? void 0 : _a3.left] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "left", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(unref(ui).right({ class: [(_b = props.ui) == null ? void 0 : _b.right] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a3, _b;
                return [
                  createVNode("div", {
                    class: unref(ui).left({ class: [(_a3 = props.ui) == null ? void 0 : _a3.left] })
                  }, [
                    renderSlot(_ctx.$slots, "left")
                  ], 2),
                  createVNode("div", {
                    class: unref(ui).right({ class: [(_b = props.ui) == null ? void 0 : _b.right] })
                  }, [
                    renderSlot(_ctx.$slots, "right")
                  ], 2)
                ];
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "UDashboardToolbar" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [[{
      label: "Kontoinformationen",
      icon: "i-lucide-user",
      to: "/settings",
      exact: true
    }, {
      label: "Benachrichtigungen",
      icon: "i-lucide-bell",
      to: "/settings/notifications"
    }, {
      label: "Sicherheit",
      icon: "i-lucide-shield",
      to: "/settings/security"
    }]];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = __nuxt_component_0;
      const _component_UDashboardNavbar = __nuxt_component_1;
      const _component_UDashboardSidebarCollapse = __nuxt_component_2;
      const _component_NotificationIndicator = __nuxt_component_3;
      const _component_UDashboardToolbar = __nuxt_component_4;
      const _component_UNavigationMenu = __nuxt_component_5;
      const _component_NuxtPage = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UDashboardPanel, mergeProps({
        id: "settings",
        ui: { body: "lg:py-12" }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, { title: "Einstellungen" }, {
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
                } else {
                  return [
                    createVNode(_component_NotificationIndicator)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDashboardToolbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UNavigationMenu, {
                    items: links,
                    highlight: "",
                    class: "-mx-1 flex-1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UNavigationMenu, {
                      items: links,
                      highlight: "",
                      class: "-mx-1 flex-1"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, { title: "Einstellungen" }, {
                leading: withCtx(() => [
                  createVNode(_component_UDashboardSidebarCollapse)
                ]),
                right: withCtx(() => [
                  createVNode(_component_NotificationIndicator)
                ]),
                _: 1
              }),
              createVNode(_component_UDashboardToolbar, null, {
                default: withCtx(() => [
                  createVNode(_component_UNavigationMenu, {
                    items: links,
                    highlight: "",
                    class: "-mx-1 flex-1"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto" }, [
                createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings.vue.mjs.map
