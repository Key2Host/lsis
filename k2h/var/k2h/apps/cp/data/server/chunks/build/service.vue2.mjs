import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_6, d as __nuxt_component_3 } from './UserMenu.vue.mjs';
import { _ as __nuxt_component_4 } from './DashboardSearchButton.vue.mjs';
import { _ as __nuxt_component_5 } from './NavigationMenu.vue.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'reka-ui';
import './DashboardSidebarToggle.vue.mjs';
import './server.mjs';
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
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './tv.mjs';
import '@vueuse/integrations/useFuse';
import './Input.vue.mjs';
import 'vaul-vue';
import 'axios';
import './Badge.vue.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const collapsed = ref(true);
    const links = [
      [
        {
          label: "Übersicht",
          icon: "i-lucide-house",
          to: "/",
          badge: "4",
          onSelect: () => {
            open.value = false;
          }
        },
        {
          label: "Finanzen",
          to: "/finances",
          icon: "i-lucide-credit-card",
          children: [
            {
              label: "Transaktionen",
              to: "/finances",
              exact: true,
              onSelect: () => {
                open.value = false;
              }
            },
            {
              label: "Zahlungsmethoden",
              to: "/finances/payment",
              onSelect: () => {
                open.value = false;
              }
            }
          ]
        },
        {
          label: "Einstellungen",
          to: "/settings",
          icon: "i-lucide-settings",
          children: [
            {
              label: "Kontoinformationen",
              to: "/settings",
              exact: true,
              onSelect: () => {
                open.value = false;
              }
            },
            {
              label: "Benachrichtigungen",
              to: "/settings/notifications",
              onSelect: () => {
                open.value = false;
              }
            },
            {
              label: "Sicherheit",
              to: "/settings/security",
              onSelect: () => {
                open.value = false;
              }
            }
          ]
        }
      ]
    ];
    const groups = computed(() => [{
      id: "links",
      label: "Go to",
      items: links.flat()
    }, {
      id: "other",
      label: "Weiteres",
      items: [{
        label: "Störungen",
        icon: "i-lucide-bug",
        to: "https://status.key2host.com",
        target: "_blank"
      }, {
        label: "Dokumentation",
        icon: "i-lucide-message-circle",
        to: "https://docs.key2host.com",
        target: "_blank"
      }, {
        label: "Hilfe & Support",
        icon: "i-lucide-info",
        to: "https://help.key2host.com",
        target: "_blank"
      }]
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardGroup = __nuxt_component_0;
      const _component_UDashboardSearch = __nuxt_component_1;
      const _component_UDashboardSidebar = __nuxt_component_2;
      const _component_CompanyMenu = __nuxt_component_3;
      const _component_UDashboardSearchButton = __nuxt_component_4;
      const _component_UNavigationMenu = __nuxt_component_5;
      const _component_UserMenu = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UDashboardGroup, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardSearch, {
              groups: groups.value,
              colorMode: false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDashboardSidebar, {
              collapsed: collapsed.value,
              "onUpdate:collapsed": ($event) => collapsed.value = $event,
              "collapsed-size": 1,
              class: "bg-(--ui-bg-elevated)/25",
              ui: { footer: "lg:border-t lg:border-(--ui-border)" }
            }, {
              header: withCtx(({ collapsed: collapsed2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CompanyMenu, { collapsed: collapsed2 }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CompanyMenu, { collapsed: collapsed2 }, null, 8, ["collapsed"])
                  ];
                }
              }),
              default: withCtx(({ collapsed: collapsed2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardSearchButton, {
                    collapsed: collapsed2,
                    class: "bg-transparent ring-(--ui-border) hidden md:flex"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UNavigationMenu, {
                    collapsed: collapsed2,
                    items: links[0],
                    orientation: "vertical"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UNavigationMenu, {
                    collapsed: collapsed2,
                    items: links[1],
                    orientation: "vertical",
                    class: "mt-auto"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardSearchButton, {
                      collapsed: collapsed2,
                      class: "bg-transparent ring-(--ui-border) hidden md:flex"
                    }, null, 8, ["collapsed"]),
                    createVNode(_component_UNavigationMenu, {
                      collapsed: collapsed2,
                      items: links[0],
                      orientation: "vertical"
                    }, null, 8, ["collapsed", "items"]),
                    createVNode(_component_UNavigationMenu, {
                      collapsed: collapsed2,
                      items: links[1],
                      orientation: "vertical",
                      class: "mt-auto"
                    }, null, 8, ["collapsed", "items"])
                  ];
                }
              }),
              footer: withCtx(({ collapsed: collapsed2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UserMenu, { collapsed: collapsed2 }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UserMenu, { collapsed: collapsed2 }, null, 8, ["collapsed"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(_component_UDashboardSearch, {
                groups: groups.value,
                colorMode: false
              }, null, 8, ["groups"]),
              createVNode(_component_UDashboardSidebar, {
                collapsed: collapsed.value,
                "onUpdate:collapsed": ($event) => collapsed.value = $event,
                "collapsed-size": 1,
                class: "bg-(--ui-bg-elevated)/25",
                ui: { footer: "lg:border-t lg:border-(--ui-border)" }
              }, {
                header: withCtx(({ collapsed: collapsed2 }) => [
                  createVNode(_component_CompanyMenu, { collapsed: collapsed2 }, null, 8, ["collapsed"])
                ]),
                default: withCtx(({ collapsed: collapsed2 }) => [
                  createVNode(_component_UDashboardSearchButton, {
                    collapsed: collapsed2,
                    class: "bg-transparent ring-(--ui-border) hidden md:flex"
                  }, null, 8, ["collapsed"]),
                  createVNode(_component_UNavigationMenu, {
                    collapsed: collapsed2,
                    items: links[0],
                    orientation: "vertical"
                  }, null, 8, ["collapsed", "items"]),
                  createVNode(_component_UNavigationMenu, {
                    collapsed: collapsed2,
                    items: links[1],
                    orientation: "vertical",
                    class: "mt-auto"
                  }, null, 8, ["collapsed", "items"])
                ]),
                footer: withCtx(({ collapsed: collapsed2 }) => [
                  createVNode(_component_UserMenu, { collapsed: collapsed2 }, null, 8, ["collapsed"])
                ]),
                _: 1
              }, 8, ["collapsed", "onUpdate:collapsed"]),
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=service.vue2.mjs.map
