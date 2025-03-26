import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_3 } from './NotificationIndicator.vue.mjs';
import { _ as __nuxt_component_2 } from './DashboardSidebarCollapse.vue.mjs';
import { _ as __nuxt_component_4 } from './DashboardToolbar.vue.mjs';
import { _ as __nuxt_component_5 } from './NavigationMenu.vue.mjs';
import { _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './DashboardSidebarToggle.vue.mjs';
import 'reka-ui';
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
import './Badge.vue.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "finances",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [[{
      label: "Transaktionen",
      icon: "i-lucide-chart-area",
      to: "/finances",
      exact: true
    }, {
      label: "Bestellungen",
      icon: "i-lucide-logs",
      to: "/finances/orders",
      exact: true
    }, {
      label: "Zahlungsmethoden",
      icon: "i-lucide-hand-coins",
      to: "/finances/payment"
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
        id: "finances",
        ui: { body: "lg:py-12" }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, { title: "Finanzen" }, {
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
              createVNode(_component_UDashboardNavbar, { title: "Finanzen" }, {
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
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/finances.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=finances.vue.mjs.map
