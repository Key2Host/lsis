import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { a as _appConfig } from './server.mjs';
import { t as tv } from './tv.mjs';

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
const _sfc_main = /* @__PURE__ */ defineComponent({
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "UDashboardToolbar" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=DashboardToolbar.vue.mjs.map
