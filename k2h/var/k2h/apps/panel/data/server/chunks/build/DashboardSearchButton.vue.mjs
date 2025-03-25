import { e as useAppConfig, c as __nuxt_component_1, j as UKbd, a as _appConfig } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, createSlots, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { useForwardProps } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { u as useDashboard, a as useLocalePro } from './DashboardSidebarToggle.vue.mjs';
import { t as tv } from './tv.mjs';

const theme = {
  "slots": {
    "base": "",
    "trailing": "flex items-center gap-0.5 ms-auto"
  }
};

var _a;
const appConfigDashboardSearchButton = _appConfig;
const dashboardSearchButton = tv({ extend: tv(theme), ...((_a = appConfigDashboardSearchButton.uiPro) == null ? void 0 : _a.dashboardSearchButton) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardSearchButton",
  __ssrInlineRender: true,
  props: {
    icon: {},
    label: {},
    color: { default: "neutral" },
    variant: { default: "outline" },
    size: {},
    collapsed: { type: Boolean, default: false },
    kbds: { default: () => ["meta", "k"] },
    ui: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
    const appConfig = useAppConfig();
    const { toggleSearch } = useDashboard({ searchOpen: ref(false), toggleSearch: () => {
    } });
    const { t } = useLocalePro();
    const ui = dashboardSearchButton();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1;
      const _component_UKbd = UKbd;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        icon: _ctx.icon || unref(appConfig).ui.icons.search,
        label: _ctx.label || unref(t)("dashboardSearchButton.label")
      }, {
        ...unref(rootProps),
        ..._ctx.collapsed ? {
          "square": true,
          "label": void 0,
          "aria-label": _ctx.label || unref(t)("dashboardSearchButton.label")
        } : {}
      }, {
        class: unref(ui).base({ class: props.class }),
        onClick: unref(toggleSearch)
      }, _attrs), createSlots({ _: 2 }, [
        !_ctx.collapsed ? {
          name: "trailing",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="${ssrRenderClass(unref(ui).trailing({ class: (_a2 = props.ui) == null ? void 0 : _a2.trailing }))}"${_scopeId}>`);
              if ((_b = _ctx.kbds) == null ? void 0 : _b.length) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.kbds, (kbd, index) => {
                  _push2(ssrRenderComponent(_component_UKbd, mergeProps({
                    key: index,
                    variant: "subtle",
                    ref_for: true
                  }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: unref(ui).trailing({ class: (_c = props.ui) == null ? void 0 : _c.trailing })
                }, [
                  ((_d = _ctx.kbds) == null ? void 0 : _d.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.kbds, (kbd, index) => {
                    return openBlock(), createBlock(_component_UKbd, mergeProps({
                      key: index,
                      variant: "subtle",
                      ref_for: true
                    }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16);
                  }), 128)) : createCommentVNode("", true)
                ], 2)
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearchButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "UDashboardSearchButton" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=DashboardSearchButton.vue.mjs.map
