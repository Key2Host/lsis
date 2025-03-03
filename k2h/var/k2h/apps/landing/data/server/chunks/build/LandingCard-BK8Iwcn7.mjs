import { _ as _export_sfc, ac as nuxtLinkProps, ak as config$i, D as useUI, a9 as getNuxtLinkProps, ad as getSlotChildrenText, Y as __nuxt_component_0$4, a8 as __nuxt_component_0$e, z as __nuxt_component_1$3 } from './server.mjs';
import { defineComponent, computed, useSlots, ref, toRef, unref, mergeProps, withCtx, createVNode, renderSlot, createCommentVNode, createBlock, openBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { twJoin } from 'tailwind-merge';
import { createSharedComposable, defaultWindow, watchThrottled, unrefElement, useMouse } from '@vueuse/core';

const useSharedMouse = createSharedComposable(useMouse);
function useSharedMouseInElement(target, options = {}) {
  const { x, y } = useSharedMouse(options);
  const targetRef = ref(target ?? void 0);
  const elementX = ref(0);
  const elementY = ref(0);
  if (defaultWindow) {
    watchThrottled(
      [targetRef, x, y],
      () => {
        var _a;
        const el = unrefElement(targetRef);
        if (!el) {
          return;
        }
        const { left, top } = el.getBoundingClientRect();
        const eX = x.value - (left + defaultWindow.scrollX);
        const eY = y.value - (top + defaultWindow.scrollY);
        if (Math.abs(eX) > 1500 || Math.abs(eY) > 1500 || ((_a = defaultWindow.screen) == null ? void 0 : _a.width) <= 800) {
          return;
        }
        elementX.value = eX;
        elementY.value = eY;
      },
      { immediate: true, throttle: 50 }
    );
  }
  return {
    x,
    y,
    elementX,
    elementY
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingCard",
  __ssrInlineRender: true,
  props: {
    ...nuxtLinkProps,
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "primary"
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
    const colorLight = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$i[props.color]) == null ? void 0 : _a["500"]) || config$i[props.color] || props.color;
    });
    const colorDark = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$i[props.color]) == null ? void 0 : _a["400"]) || config$i[props.color] || props.color;
    });
    const config$1 = computed(() => {
      const base = twJoin(
        "gap-x-8 gap-y-4 rounded-xl flex-1",
        props.orientation === "vertical" && "flex flex-col",
        !!slots.default && props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      return {
        wrapper: "relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",
        to: "transition-shadow duration-200",
        base: "flex-1 flex flex-col overflow-hidden",
        container: "",
        body: {
          base
        },
        background: "bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",
        ring: "",
        rounded: "rounded-xl",
        shadow: "",
        icon: {
          wrapper: "mb-2 pointer-events-none",
          base: "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
        },
        title: "text-gray-900 dark:text-white text-base font-bold truncate",
        description: "text-[15px] text-gray-500 dark:text-gray-400 mt-1"
      };
    });
    const el = ref();
    const slots = useSlots();
    const { elementX, elementY } = useSharedMouseInElement(el);
    const { ui, attrs } = useUI("landing.card", toRef(props, "ui"), config$1, toRef(props, "class"), true);
    const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$4;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UIcon = __nuxt_component_1$3;
      const _cssVars = { style: {
        "--a3ecdd52": unref(colorLight),
        "--0ddb8715": unref(colorDark)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        style: {
          "--x": `${unref(elementX)}px`,
          "--y": `${unref(elementY)}px`
        },
        class: [unref(ui).wrapper, _ctx.to && [unref(ui).to, "to"]]
      }, unref(attrs), _attrs, _cssVars))} data-v-437fae84>`);
      _push(ssrRenderComponent(_component_UCard, { ui: unref(ui) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).container)}" data-v-437fae84${_scopeId}>`);
            if (_ctx.to) {
              _push2(ssrRenderComponent(_component_NuxtLink, mergeProps({ "aria-label": unref(ariaLabel) }, unref(nuxtLinkBind), {
                class: "focus:outline-none",
                tabindex: "-1"
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true" data-v-437fae84${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon || _ctx.$slots.icon) {
              _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}" data-v-437fae84${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: __props.icon,
                  class: unref(ui).icon.base
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.title || _ctx.$slots.title) {
              _push2(`<p class="${ssrRenderClass(unref(ui).title)}" data-v-437fae84${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}" data-v-437fae84${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "container", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.$slots.default) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: unref(ui).container
              }, [
                _ctx.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                  key: 0,
                  "aria-label": unref(ariaLabel)
                }, unref(nuxtLinkBind), {
                  class: "focus:outline-none",
                  tabindex: "-1"
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).icon.wrapper
                }, [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(_component_UIcon, {
                      name: __props.icon,
                      class: unref(ui).icon.base
                    }, null, 8, ["name", "class"])
                  ], true)
                ], 2)) : createCommentVNode("", true),
                __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ], true)
                ], 2)) : createCommentVNode("", true),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ], true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "container", {}, void 0, true)
              ], 2),
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-437fae84"]]), { __name: "ULandingCard" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=LandingCard-BK8Iwcn7.mjs.map
