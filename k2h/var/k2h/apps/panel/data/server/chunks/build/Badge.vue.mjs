import { defineComponent, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { k as useButtonGroup, l as useComponentIcons, t as tv, U as UIcon, f as UAvatar, _ as _appConfig } from './server.mjs';

const theme = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-(--ui-primary) text-(--ui-bg)"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-(--ui-secondary) text-(--ui-bg)"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-(--ui-success) text-(--ui-bg)"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-(--ui-info) text-(--ui-bg)"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-(--ui-warning) text-(--ui-bg)"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-(--ui-error) text-(--ui-bg)"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-(--ui-success)/10 text-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-(--ui-info)/10 text-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-(--ui-error)/10 text-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-bg-inverted)"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-(--ui-text) bg-(--ui-bg-elevated)"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};

var _a;
const appConfigBadge = _appConfig;
const badge = tv({ extend: tv(theme), ...((_a = appConfigBadge.ui) == null ? void 0 : _a.badge) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    as: { default: "span" },
    label: {},
    color: {},
    variant: {},
    size: {},
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => badge({
      color: props.color,
      variant: props.variant,
      size: buttonGroupSize.value || props.size,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a3, _b, _c;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(UIcon, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!_ctx.avatar) {
                _push2(ssrRenderComponent(UAvatar, mergeProps({
                  size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, _ctx.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3;
              if (_ctx.label) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a3;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(UIcon, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a3, _b, _c;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                    key: 1,
                    size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a3;
                return [
                  _ctx.label ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                  }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a3;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(UIcon, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "UBadge" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Badge.vue.mjs.map
