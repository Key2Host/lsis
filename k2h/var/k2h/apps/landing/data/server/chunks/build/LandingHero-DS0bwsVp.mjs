import { D as useUI, a6 as __nuxt_component_0$d, Q as __nuxt_component_0$9 } from './server.mjs';
import { defineComponent, computed, toRef, mergeProps, unref, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { twJoin } from 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.orientation === "vertical" && "flex flex-col",
        props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      const base = props.orientation === "vertical" ? "text-center" : "";
      const links = twJoin(
        "mt-10 flex flex-wrap gap-x-6 gap-y-3",
        props.orientation === "vertical" && "justify-center"
      );
      return {
        wrapper: "py-24 sm:py-32 md:py-40 relative",
        container,
        base,
        headline: "mb-10",
        title: "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
        description: "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
        links
      };
    });
    const { ui, attrs } = useUI("landing.hero", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$d;
      const _component_UButton = __nuxt_component_0$9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
            if (_ctx.$slots.headline) {
              _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</h1>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
              _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).base
              }, [
                _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline")
                ], 2)) : createCommentVNode("", true),
                createVNode("h1", {
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                ((_b = __props.links) == null ? void 0 : _b.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ULandingHero" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=LandingHero-DS0bwsVp.mjs.map
