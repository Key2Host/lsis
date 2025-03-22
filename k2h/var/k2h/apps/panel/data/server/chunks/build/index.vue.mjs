import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_3, c as __nuxt_component_2 } from './NotificationIndicator.vue.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import './DashboardSidebarToggle.vue.mjs';
import 'reka-ui';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UDashboardPanel = __nuxt_component_0;
  const _component_UDashboardNavbar = __nuxt_component_1;
  const _component_UDashboardSidebarCollapse = __nuxt_component_2;
  const _component_NotificationIndicator = __nuxt_component_3;
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
            } else {
              return [
                createVNode(_component_NotificationIndicator)
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
              createVNode(_component_NotificationIndicator)
            ]),
            _: 1
          })
        ];
      }
    }),
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Coming Soon `);
      } else {
        return [
          createTextVNode(" Coming Soon ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
