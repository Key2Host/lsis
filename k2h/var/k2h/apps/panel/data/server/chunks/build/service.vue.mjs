import { i as useRoute, j as __nuxt_component_0, d as __nuxt_component_1, _ as __nuxt_component_6 } from './server.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_3 } from './NotificationIndicator.vue.mjs';
import { _ as __nuxt_component_4 } from './DashboardToolbar.vue.mjs';
import { _ as __nuxt_component_5 } from './NavigationMenu.vue.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './DashboardSidebarToggle.vue.mjs';
import './tv.mjs';
import './Badge.vue.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const serviceId = route.params.id;
    const isValid = serviceId == "1";
    const type = ref(1);
    const linksWebspace = [
      [
        {
          label: "Übersicht",
          icon: "i-lucide-server",
          to: "/service/" + serviceId,
          exact: true
        },
        {
          label: "Einstellungen",
          icon: "i-lucide-cog",
          to: "/service/" + serviceId + "/settings"
        }
      ]
    ];
    const linksDomain = [
      [
        {
          label: "Übersicht",
          icon: "i-lucide-server",
          to: "/service/" + serviceId,
          exact: true
        },
        {
          label: "DNS",
          icon: "i-lucide-globe",
          to: "/service/" + serviceId + "/dns",
          exact: true
        },
        {
          label: "Einstellungen",
          icon: "i-lucide-cog",
          to: "/service/" + serviceId + "/settings"
        }
      ]
    ];
    const linksVPSROOT = [[
      {
        label: "Übersicht",
        icon: "i-lucide-server",
        to: "/service/" + serviceId,
        exact: true
      },
      {
        label: "Sicherheit",
        icon: "i-lucide-lock",
        to: "/service/" + serviceId + "/security"
      },
      {
        label: "Netzwerk",
        icon: "i-lucide-network",
        to: "/service/" + serviceId + "/network"
      },
      {
        label: "Einstellungen",
        icon: "i-lucide-cog",
        to: "/service/" + serviceId + "/settings"
      }
    ]];
    const navMenu = computed(() => {
      if (type.value == 0) return linksWebspace;
      if (type.value == 1) return linksDomain;
      if (type.value == 2) return linksVPSROOT;
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = __nuxt_component_1;
      const _component_UDashboardPanel = __nuxt_component_0$1;
      const _component_UDashboardNavbar = __nuxt_component_1$1;
      const _component_NotificationIndicator = __nuxt_component_3;
      const _component_UDashboardToolbar = __nuxt_component_4;
      const _component_UNavigationMenu = __nuxt_component_5;
      const _component_NuxtPage = __nuxt_component_6;
      if (!isValid) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen text-center mx-auto" }, _attrs))}><div><h1 class="text-6xl font-bold mb-2">Error 404</h1><p class="text-xl">Server nicht gefunden</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, { class: "mt-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Zurück zur Startseite`);
                  } else {
                    return [
                      createTextVNode("Zurück zur Startseite")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, { class: "mt-6" }, {
                  default: withCtx(() => [
                    createTextVNode("Zurück zur Startseite")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_UDashboardPanel, mergeProps({
          id: "settings",
          ui: { body: "lg:py-12" }
        }, _attrs), {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UDashboardNavbar, { title: "Webspace (#123123)" }, {
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
                      items: unref(navMenu),
                      highlight: "",
                      class: "-mx-1 flex-1"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      icon: "i-lucide-square-chevron-left",
                      to: "/"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Zurück`);
                        } else {
                          return [
                            createTextVNode("Zurück")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UNavigationMenu, {
                        items: unref(navMenu),
                        highlight: "",
                        class: "-mx-1 flex-1"
                      }, null, 8, ["items"]),
                      createVNode(_component_UButton, {
                        icon: "i-lucide-square-chevron-left",
                        to: "/"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Zurück")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UDashboardNavbar, { title: "Webspace (#123123)" }, {
                  right: withCtx(() => [
                    createVNode(_component_NotificationIndicator)
                  ]),
                  _: 1
                }),
                createVNode(_component_UDashboardToolbar, null, {
                  default: withCtx(() => [
                    createVNode(_component_UNavigationMenu, {
                      items: unref(navMenu),
                      highlight: "",
                      class: "-mx-1 flex-1"
                    }, null, 8, ["items"]),
                    createVNode(_component_UButton, {
                      icon: "i-lucide-square-chevron-left",
                      to: "/"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Zurück")
                      ]),
                      _: 1
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
      }
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=service.vue.mjs.map
