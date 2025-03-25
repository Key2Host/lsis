import { e as useAppConfig, c as __nuxt_component_1, a as _appConfig } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useForwardProps } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { u as useDashboard, a as useLocalePro } from './DashboardSidebarToggle.vue.mjs';
import { t as tv } from './tv.mjs';

const theme = {
  "base": "hidden lg:flex",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
};

var _a;
const appConfigDashboardSidebarCollapse = _appConfig;
const dashboardSidebarCollapse = tv({ extend: tv(theme), ...((_a = appConfigDashboardSidebarCollapse.uiPro) == null ? void 0 : _a.dashboardSidebarCollapse) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardSidebarCollapse",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    color: { default: "neutral" },
    variant: { default: "ghost" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
    const appConfig = useAppConfig();
    const { sidebarCollapsed, collapseSidebar } = useDashboard({ sidebarCollapsed: ref(false), collapseSidebar: () => {
    } });
    const { t } = useLocalePro();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UButton, mergeProps(unref(rootProps), {
        "aria-label": unref(sidebarCollapsed) ? unref(t)("dashboardSidebarCollapse.expand") : unref(t)("dashboardSidebarCollapse.collapse"),
        icon: unref(sidebarCollapsed) ? unref(appConfig).ui.icons.panelOpen : unref(appConfig).ui.icons.panelClose,
        class: unref(dashboardSidebarCollapse)({ class: props.class, side: props.side }),
        onClick: ($event) => {
          var _a2;
          return (_a2 = unref(collapseSidebar)) == null ? void 0 : _a2(!unref(sidebarCollapsed));
        }
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "UDashboardSidebarCollapse" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=DashboardSidebarCollapse.vue.mjs.map
