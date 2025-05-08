import { s as useLocalePro, v as useContentSearch, a as useAppConfig, o as omit, w as tv, x as _sfc_main$h, y as transformUI, q as useState, r as useKbd, g as useLocale, t as tv$1, h as _sfc_main$o, j as get, k as _sfc_main$p, p as pickLinkProps, m as _sfc_main$q, _ as _sfc_main$t, f as _sfc_main$r, n as _sfc_main$d, b as useFormField, d as useButtonGroup, e as useComponentIcons, u as useAvatarGroup, l as looseToNumber } from './server.mjs';
import { mergeModels, useSlots, useModel, computed, useTemplateRef, mergeProps, unref, isRef, withCtx, createSlots, renderList, renderSlot, createVNode, ref, toValue, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardPropsEmits, useForwardProps, ListboxRoot, ListboxFilter, ListboxContent, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, Primitive, Slot } from 'reka-ui';
import { U as defu } from '../nitro/nitro.mjs';
import { useDebounceFn, useActiveElement, useEventListener, reactivePick } from '@vueuse/core';
import { useFuse } from '@vueuse/integrations/useFuse';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'ipx';

function truncateHTMLFromStart(html, maxLength) {
  let truncated = "";
  let totalLength = 0;
  let insideTag = false;
  for (let i = html.length - 1; i >= 0; i--) {
    if (html[i] === ">") {
      insideTag = true;
    } else if (html[i] === "<") {
      insideTag = false;
      truncated = html[i] + truncated;
      continue;
    }
    if (!insideTag) {
      totalLength++;
    }
    if (totalLength <= maxLength) {
      truncated = html[i] + truncated;
    } else {
      truncated = "..." + truncated;
      break;
    }
  }
  return truncated;
}
function highlight(item, searchTerm, forceKey, omitKeys) {
  var _a;
  function generateHighlightedText(value, indices = []) {
    value = value || "";
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;
    indices.forEach((region) => {
      if (region.length === 2 && region[0] === region[1]) {
        return;
      }
      const lastIndiceNextIndex = region[1] + 1;
      const isMatched = lastIndiceNextIndex - region[0] >= searchTerm.length;
      content += [
        value.substring(nextUnhighlightedRegionStartingIndex, region[0]),
        isMatched && `<mark>`,
        value.substring(region[0], lastIndiceNextIndex),
        isMatched && "</mark>"
      ].filter(Boolean).join("");
      nextUnhighlightedRegionStartingIndex = lastIndiceNextIndex;
    });
    content += value.substring(nextUnhighlightedRegionStartingIndex);
    const markIndex = content.indexOf("<mark>");
    if (markIndex !== -1) {
      content = truncateHTMLFromStart(content, content.length - markIndex);
    }
    return content;
  }
  if (!((_a = item.matches) == null ? void 0 : _a.length)) {
    return;
  }
  for (const match of item.matches) {
    if (forceKey && match.key !== forceKey) {
      continue;
    }
    if (omitKeys == null ? void 0 : omitKeys.includes(match.key)) {
      continue;
    }
    return generateHighlightedText(match.value, match.indices);
  }
}
const theme$3 = {
  "slots": {
    "root": "relative inline-flex items-center justify-center shrink-0",
    "base": "rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap"
  },
  "variants": {
    "color": {
      "primary": "bg-primary",
      "secondary": "bg-secondary",
      "success": "bg-success",
      "info": "bg-info",
      "warning": "bg-warning",
      "error": "bg-error",
      "neutral": "bg-inverted"
    },
    "size": {
      "3xs": "h-[4px] min-w-[4px] text-[4px]",
      "2xs": "h-[5px] min-w-[5px] text-[5px]",
      "xs": "h-[6px] min-w-[6px] text-[6px]",
      "sm": "h-[7px] min-w-[7px] text-[7px]",
      "md": "h-[8px] min-w-[8px] text-[8px]",
      "lg": "h-[9px] min-w-[9px] text-[9px]",
      "xl": "h-[10px] min-w-[10px] text-[10px]",
      "2xl": "h-[11px] min-w-[11px] text-[11px]",
      "3xl": "h-[12px] min-w-[12px] text-[12px]"
    },
    "position": {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    "inset": {
      "false": ""
    },
    "standalone": {
      "false": "absolute"
    }
  },
  "compoundVariants": [
    {
      "position": "top-right",
      "inset": false,
      "class": "-translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "bottom-right",
      "inset": false,
      "class": "translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "top-left",
      "inset": false,
      "class": "-translate-y-1/2 -translate-x-1/2 transform"
    },
    {
      "position": "bottom-left",
      "inset": false,
      "class": "translate-y-1/2 -translate-x-1/2 transform"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "position": "top-right"
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UChip",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    text: { type: [String, Number], required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    position: { type: null, required: false },
    inset: { type: Boolean, required: false, default: false },
    standalone: { type: Boolean, required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "show": { type: Boolean, ...{ default: true } },
    "showModifiers": {}
  }),
  emits: ["update:show"],
  setup(__props) {
    const props = __props;
    const show = useModel(__props, "show", { type: Boolean, ...{ default: true } });
    const { size } = useAvatarGroup(props);
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.chip) || {} })({
        color: props.color,
        size: size.value,
        position: props.position,
        inset: props.inset,
        standalone: props.standalone
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(Slot), _ctx.$attrs, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (show.value) {
              _push2(`<span class="${ssrRenderClass(ui.value.base({ class: (_a2 = props.ui) == null ? void 0 : _a2.base }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Slot), _ctx.$attrs, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16),
              show.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
              }, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createTextVNode(toDisplayString(__props.text), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
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
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: null, required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false }
  }, {
    "modelValue": { type: [String, Number, null] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const [modelValue, modelModifiers] = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight: highlight2, disabled, emitFormFocus, ariaAttrs } = useFormField(props, {});
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.input) || {} })({
        type: props.type,
        color: color.value,
        variant: props.variant,
        size: inputSize == null ? void 0 : inputSize.value,
        loading: props.loading,
        highlight: highlight2.value,
        leading: isLeading.value || !!props.avatar || !!slots.leading,
        trailing: isTrailing.value || !!slots.trailing,
        buttonGroup: orientation.value
      });
    });
    const inputRef = ref(null);
    function updateInput(value) {
      if (modelModifiers.trim) {
        value = (value == null ? void 0 : value.trim()) ?? null;
      }
      if (modelModifiers.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.nullify) {
        value || (value = null);
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!modelModifiers.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (modelModifiers.lazy) {
        updateInput(value);
      }
      if (modelModifiers.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: __props.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: __props.placeholder,
              class: ui.value.base({ class: (_a2 = props.ui) == null ? void 0 : _a2.base }),
              disabled: unref(disabled),
              required: __props.required,
              autocomplete: __props.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span class="${ssrRenderClass(ui.value.leading({ class: (_b = props.ui) == null ? void 0 : _b.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                var _a3, _b2, _c2;
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$t, {
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$r, mergeProps({
                    size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_c = props.ui) == null ? void 0 : _c.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a3;
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$t, {
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: __props.placeholder,
                class: ui.value.base({ class: (_d = props.ui) == null ? void 0 : _d.base }),
                disabled: unref(disabled),
                required: __props.required,
                autocomplete: __props.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a3, _b2, _c2;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: unref(leadingIconName),
                      class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                    }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                      key: 1,
                      size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                    }, __props.avatar, {
                      class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                class: ui.value.trailing({ class: (_f = props.ui) == null ? void 0 : _f.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", {}, () => {
                  var _a3;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: unref(trailingIconName),
                      class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "flex flex-col min-h-0 min-w-0 divide-y divide-default",
    "input": "[&>input]:h-12",
    "close": "",
    "content": "relative overflow-hidden flex flex-col",
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1 focus:outline-none",
    "group": "p-1 isolate",
    "empty": "py-6 text-center text-sm text-muted",
    "label": "p-1.5 text-xs font-semibold text-highlighted",
    "item": "group relative w-full flex items-center gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0 size-5",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "2xs",
    "itemLeadingChip": "shrink-0 size-5",
    "itemLeadingChipSize": "md",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0 size-5",
    "itemTrailingHighlightedIcon": "shrink-0 size-5 text-dimmed hidden group-data-highlighted:inline-flex",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5",
    "itemTrailingKbdsSize": "md",
    "itemLabel": "truncate space-x-1 rtl:space-x-reverse text-dimmed",
    "itemLabelBase": "text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary",
    "itemLabelPrefix": "text-default",
    "itemLabelSuffix": "text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary"
  },
  "variants": {
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UCommandPalette",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    icon: { type: String, required: false },
    selectedIcon: { type: String, required: false },
    placeholder: { type: String, required: false },
    autofocus: { type: Boolean, required: false, default: true },
    close: { type: [Boolean, Object], required: false },
    closeIcon: { type: String, required: false },
    groups: { type: Array, required: false },
    fuse: { type: Object, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    modelValue: { type: null, required: false, default: "" },
    defaultValue: { type: null, required: false },
    highlightOnHover: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover"), emits);
    const inputProps = useForwardProps(reactivePick(props, "loading", "loadingIcon"));
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.commandPalette) || {} })();
    });
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        ignoreLocation: true,
        threshold: 0.1,
        keys: [props.labelKey, "suffix"]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const items = computed(() => {
      var _a;
      return ((_a = props.groups) == null ? void 0 : _a.filter((group) => {
        if (!group.id) {
          console.warn(`[@nuxt/ui] CommandPalette group is missing an \`id\` property`);
          return false;
        }
        if (group.ignoreFilter) {
          return false;
        }
        return true;
      }).flatMap((group) => {
        var _a2;
        return ((_a2 = group.items) == null ? void 0 : _a2.map((item) => ({ ...item, group: group.id }))) || [];
      })) || [];
    });
    const { results: fuseResults } = useFuse(searchTerm, items, fuse);
    function getGroupWithItems(group, items2) {
      if ((group == null ? void 0 : group.postFilter) && typeof group.postFilter === "function") {
        items2 = group.postFilter(searchTerm.value, items2);
      }
      return {
        ...group,
        items: items2.slice(0, fuse.value.resultLimit).map((item) => {
          return {
            ...item,
            labelHtml: highlight(item, searchTerm.value, props.labelKey),
            suffixHtml: highlight(item, searchTerm.value, void 0, [props.labelKey])
          };
        })
      };
    }
    const groups = computed(() => {
      var _a, _b, _c;
      const groupsById = fuseResults.value.reduce((acc, result) => {
        var _a2, _b2;
        const { item, matches } = result;
        if (!item.group) {
          return acc;
        }
        acc[_a2 = item.group] || (acc[_a2] = []);
        (_b2 = acc[item.group]) == null ? void 0 : _b2.push({ ...item, matches });
        return acc;
      }, {});
      const fuseGroups = Object.entries(groupsById).map(([id, items2]) => {
        var _a2;
        const group = (_a2 = props.groups) == null ? void 0 : _a2.find((group2) => group2.id === id);
        if (!group) {
          return;
        }
        return getGroupWithItems(group, items2);
      }).filter((group) => !!group);
      const nonFuseGroups = ((_c = (_b = (_a = props.groups) == null ? void 0 : _a.map((group, index) => ({ ...group, index }))) == null ? void 0 : _b.filter((group) => {
        var _a2;
        return group.ignoreFilter && ((_a2 = group.items) == null ? void 0 : _a2.length);
      })) == null ? void 0 : _c.map((group) => ({ ...getGroupWithItems(group, group.items || []), index: group.index }))) || [];
      return nonFuseGroups.reduce((acc, group) => {
        acc.splice(group.index, 0, group);
        return acc;
      }, [...fuseGroups]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ListboxFilter), {
              modelValue: searchTerm.value,
              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                    placeholder: __props.placeholder || unref(t)("commandPalette.placeholder"),
                    variant: "none",
                    autofocus: __props.autofocus
                  }, unref(inputProps), {
                    icon: __props.icon || unref(appConfig).ui.icons.search,
                    class: ui.value.input({ class: (_a3 = props.ui) == null ? void 0 : _a3.input })
                  }), createSlots({ _: 2 }, [
                    __props.close || !!slots.close ? {
                      name: "trailing",
                      fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                            var _a4;
                            if (__props.close) {
                              _push4(ssrRenderComponent(_sfc_main$o, mergeProps({
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                              var _a4;
                              return [
                                __props.close ? (openBlock(), createBlock(_sfc_main$o, mergeProps({
                                  key: 0,
                                  icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                  size: "md",
                                  color: "neutral",
                                  variant: "ghost",
                                  "aria-label": unref(t)("commandPalette.close")
                                }, typeof __props.close === "object" ? __props.close : {}, {
                                  class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                                  onClick: ($event) => emits("update:open", false)
                                }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        }
                      }),
                      key: "0"
                    } : void 0
                  ]), _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, mergeProps({
                      placeholder: __props.placeholder || unref(t)("commandPalette.placeholder"),
                      variant: "none",
                      autofocus: __props.autofocus
                    }, unref(inputProps), {
                      icon: __props.icon || unref(appConfig).ui.icons.search,
                      class: ui.value.input({ class: (_b2 = props.ui) == null ? void 0 : _b2.input })
                    }), createSlots({ _: 2 }, [
                      __props.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                            var _a4;
                            return [
                              __props.close ? (openBlock(), createBlock(_sfc_main$o, mergeProps({
                                key: 0,
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["placeholder", "autofocus", "icon", "class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ListboxContent), {
              class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f;
                if (_push3) {
                  if ((_a3 = groups.value) == null ? void 0 : _a3.length) {
                    _push3(`<div class="${ssrRenderClass(ui.value.viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(groups.value, (group) => {
                      var _a4;
                      _push3(ssrRenderComponent(unref(ListboxGroup), {
                        key: `group-${group.id}`,
                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a5, _b3;
                          if (_push4) {
                            if (unref(get)(group, props.labelKey)) {
                              _push4(ssrRenderComponent(unref(ListboxGroupLabel), {
                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(unref(get)(group, props.labelKey))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--[-->`);
                            ssrRenderList(group.items, (item, index) => {
                              _push4(ssrRenderComponent(unref(ListboxItem), {
                                key: `group-${group.id}-${index}`,
                                value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                disabled: item.disabled,
                                "as-child": "",
                                onSelect: item.onSelect
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_sfc_main$p, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }, _push6, _parent6, _scopeId5) => {
                                        var _a6, _b4;
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                            class: ui.value.item({ class: (_a6 = props.ui) == null ? void 0 : _a6.item, active: active || item.active })
                                          }), {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a7, _b5;
                                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b6, _c2, _d2, _e2, _f2;
                                                    if (item.loading) {
                                                      _push7(ssrRenderComponent(_sfc_main$t, {
                                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (item.icon) {
                                                      _push7(ssrRenderComponent(_sfc_main$t, {
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (item.avatar) {
                                                      _push7(ssrRenderComponent(_sfc_main$r, mergeProps({
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, _parent7, _scopeId6));
                                                    } else if (item.chip) {
                                                      _push7(ssrRenderComponent(_sfc_main$3, mergeProps({
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  if (item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`]) {
                                                    _push7(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active }))}"${_scopeId6}>`);
                                                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b6, _c2;
                                                      if (item.prefix) {
                                                        _push7(`<span class="${ssrRenderClass(ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix }))}"${_scopeId6}>${ssrInterpolate(item.prefix)}</span>`);
                                                      } else {
                                                        _push7(`<!---->`);
                                                      }
                                                      _push7(`<span class="${ssrRenderClass(ui.value.itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }))}"${_scopeId6}>${(item.labelHtml || unref(get)(item, props.labelKey)) ?? ""}</span><span class="${ssrRenderClass(ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }))}"${_scopeId6}>${(item.suffixHtml || item.suffix) ?? ""}</span>`);
                                                    }, _push7, _parent7, _scopeId6);
                                                    _push7(`</span>`);
                                                  } else {
                                                    _push7(`<!---->`);
                                                  }
                                                  _push7(`<span class="${ssrRenderClass(ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId6}>`);
                                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b6, _c2;
                                                    if ((_a8 = item.kbds) == null ? void 0 : _a8.length) {
                                                      _push7(`<span class="${ssrRenderClass(ui.value.itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds }))}"${_scopeId6}><!--[-->`);
                                                      ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                                                        var _a9;
                                                        _push7(ssrRenderComponent(_sfc_main$d, mergeProps({
                                                          key: kbdIndex,
                                                          size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                          ref_for: true
                                                        }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent7, _scopeId6));
                                                      });
                                                      _push7(`<!--]--></span>`);
                                                    } else if (group.highlightedIcon) {
                                                      _push7(ssrRenderComponent(_sfc_main$t, {
                                                        name: group.highlightedIcon,
                                                        class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                      }, null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  _push7(ssrRenderComponent(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      var _a8, _b6;
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_sfc_main$t, {
                                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_sfc_main$t, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(`</span>`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c2, _d2, _e2, _f2;
                                                        return [
                                                          item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                            key: 0,
                                                            name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                          }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                            key: 1,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                            key: 2,
                                                            size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                            key: 3,
                                                            size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                        key: 0,
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                      }, [
                                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a8, _b6, _c2;
                                                          return [
                                                            item.prefix ? (openBlock(), createBlock("span", {
                                                              key: 0,
                                                              class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                            }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                            createVNode("span", {
                                                              class: ui.value.itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }),
                                                              innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                            }, null, 10, ["innerHTML"]),
                                                            createVNode("span", {
                                                              class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                              innerHTML: item.suffixHtml || item.suffix
                                                            }, null, 10, ["innerHTML"])
                                                          ];
                                                        })
                                                      ], 2)) : createCommentVNode("", true),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a8, _b6, _c2;
                                                          return [
                                                            ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                              key: 0,
                                                              class: ui.value.itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds })
                                                            }, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                                var _a9;
                                                                return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                                  key: kbdIndex,
                                                                  size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                                  ref_for: true
                                                                }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                              }), 128))
                                                            ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                              key: 1,
                                                              name: group.highlightedIcon,
                                                              class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ];
                                                        }),
                                                        createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(_sfc_main$t, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                              }, null, 8, ["name", "class"])
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ], 2)
                                                    ];
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                              class: ui.value.item({ class: (_b4 = props.ui) == null ? void 0 : _b4.item, active: active || item.active })
                                            }), {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a7, _b5;
                                                  return [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b6, _c2, _d2, _e2, _f2;
                                                      return [
                                                        item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 0,
                                                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                          class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                        }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: item.icon,
                                                          class: ui.value.itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                          key: 2,
                                                          size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                          ref_for: true
                                                        }, item.avatar, {
                                                          class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                          key: 3,
                                                          size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                          inset: "",
                                                          standalone: "",
                                                          ref_for: true
                                                        }, item.chip, {
                                                          class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c2;
                                                        return [
                                                          item.prefix ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }),
                                                            innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                          }, null, 10, ["innerHTML"]),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                            innerHTML: item.suffixHtml || item.suffix
                                                          }, null, 10, ["innerHTML"])
                                                        ];
                                                      })
                                                    ], 2)) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c2;
                                                        return [
                                                          ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: ui.value.itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds })
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                              var _a9;
                                                              return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                                key: kbdIndex,
                                                                size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                                ref_for: true
                                                              }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                            }), 128))
                                                          ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                            key: 1,
                                                            name: group.highlightedIcon,
                                                            class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => {
                                                          var _a8;
                                                          return [
                                                            createVNode(_sfc_main$t, {
                                                              name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                              class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                            }, null, 8, ["name", "class"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ];
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$p, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                        default: withCtx(({ active, ...slotProps }) => {
                                          var _a6;
                                          return [
                                            createVNode(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                              class: ui.value.item({ class: (_a6 = props.ui) == null ? void 0 : _a6.item, active: active || item.active })
                                            }), {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a7, _b4;
                                                  return [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b5, _c2, _d2, _e2, _f2;
                                                      return [
                                                        item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 0,
                                                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                          class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                        }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: item.icon,
                                                          class: ui.value.itemLeadingIcon({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLeadingIcon, active: active || item.active })
                                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                          key: 2,
                                                          size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                          ref_for: true
                                                        }, item.avatar, {
                                                          class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                          key: 3,
                                                          size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                          inset: "",
                                                          standalone: "",
                                                          ref_for: true
                                                        }, item.chip, {
                                                          class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b5, _c2;
                                                        return [
                                                          item.prefix ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabelBase({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLabelBase, active: active || item.active }),
                                                            innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                          }, null, 10, ["innerHTML"]),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                            innerHTML: item.suffixHtml || item.suffix
                                                          }, null, 10, ["innerHTML"])
                                                        ];
                                                      })
                                                    ], 2)) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: ui.value.itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b5, _c2;
                                                        return [
                                                          ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: ui.value.itemTrailingKbds({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailingKbds })
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                              var _a9;
                                                              return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                                key: kbdIndex,
                                                                size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                                ref_for: true
                                                              }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                            }), 128))
                                                          ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                            key: 1,
                                                            name: group.highlightedIcon,
                                                            class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => {
                                                          var _a8;
                                                          return [
                                                            createVNode(_sfc_main$t, {
                                                              name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                              class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                            }, null, 8, ["name", "class"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ];
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${group.id}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$p, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a6;
                                        return [
                                          createVNode(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                            class: ui.value.item({ class: (_a6 = props.ui) == null ? void 0 : _a6.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a7, _b4;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b5, _c2, _d2, _e2, _f2;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 0,
                                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                        key: 3,
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b5, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelBase({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b5, _c2;
                                                      return [
                                                        ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemTrailingKbds({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a9;
                                                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a8;
                                                        return [
                                                          createVNode(_sfc_main$t, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="${ssrRenderClass(ui.value.empty({ class: (_c = props.ui) == null ? void 0 : _c.empty }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                      _push3(`${ssrInterpolate(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData"))}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    ((_d = groups.value) == null ? void 0 : _d.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.viewport({ class: (_e = props.ui) == null ? void 0 : _e.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ListboxGroup), {
                          key: `group-${group.id}`,
                          class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                        }, {
                          default: withCtx(() => {
                            var _a5;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${group.id}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$p, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a6;
                                        return [
                                          createVNode(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                            class: ui.value.item({ class: (_a6 = props.ui) == null ? void 0 : _a6.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a7, _b3;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b4, _c2, _d2, _e2, _f2;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 0,
                                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                        key: 3,
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b4, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelBase({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b4, _c2;
                                                      return [
                                                        ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemTrailingKbds({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a9;
                                                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a8;
                                                        return [
                                                          createVNode(_sfc_main$t, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.empty({ class: (_f = props.ui) == null ? void 0 : _f.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ListboxFilter), {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                "as-child": ""
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(_sfc_main$2, mergeProps({
                      placeholder: __props.placeholder || unref(t)("commandPalette.placeholder"),
                      variant: "none",
                      autofocus: __props.autofocus
                    }, unref(inputProps), {
                      icon: __props.icon || unref(appConfig).ui.icons.search,
                      class: ui.value.input({ class: (_a3 = props.ui) == null ? void 0 : _a3.input })
                    }), createSlots({ _: 2 }, [
                      __props.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                            var _a4;
                            return [
                              __props.close ? (openBlock(), createBlock(_sfc_main$o, mergeProps({
                                key: 0,
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["placeholder", "autofocus", "icon", "class"])
                  ];
                }),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(ListboxContent), {
                class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c;
                  return [
                    ((_a3 = groups.value) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ListboxGroup), {
                          key: `group-${group.id}`,
                          class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                        }, {
                          default: withCtx(() => {
                            var _a5;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${group.id}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$p, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a6;
                                        return [
                                          createVNode(_sfc_main$q, mergeProps({ ref_for: true }, slotProps, {
                                            class: ui.value.item({ class: (_a6 = props.ui) == null ? void 0 : _a6.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a7, _b3;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b4, _c2, _d, _e, _f;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 0,
                                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$r, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_d = props.ui) == null ? void 0 : _d.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                                        key: 3,
                                                        size: ((_e = props.ui) == null ? void 0 : _e.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_f = props.ui) == null ? void 0 : _f.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b4, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemLabelPrefix({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelBase({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b4, _c2;
                                                      return [
                                                        ((_a8 = item.kbds) == null ? void 0 : _a8.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: ui.value.itemTrailingKbds({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a9;
                                                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a9 = props.ui) == null ? void 0 : _a9.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: ui.value.itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a8;
                                                        return [
                                                          createVNode(_sfc_main$t, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.empty({ class: (_c = props.ui) == null ? void 0 : _c.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "modal": "sm:max-w-3xl sm:h-[28rem]",
    "input": "[&>input]:text-base/5"
  }
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
function defineShortcuts(config, options = {}) {
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, options.chainDelay ?? 800);
  const { macOS } = useKbd();
  const activeElement = useActiveElement();
  const onKeyDown = (e) => {
    if (!e.key) {
      return;
    }
    const alphabeticalKey = /^[a-z]{1}$/i.test(e.key);
    let chainedKey;
    chainedInputs.value.push(e.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.value.filter((s) => s.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.enabled) {
          e.preventDefault();
          shortcut.handler(e);
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.value.filter((s) => !s.chained)) {
      if (e.key.toLowerCase() !== shortcut.key) {
        continue;
      }
      if (e.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if (alphabeticalKey && e.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.enabled) {
        e.preventDefault();
        shortcut.handler();
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  const usingInput = computed(() => {
    var _a, _b, _c;
    const tagName = (_a = activeElement.value) == null ? void 0 : _a.tagName;
    const contentEditable = (_b = activeElement.value) == null ? void 0 : _b.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  const shortcuts = computed(() => {
    return Object.entries(toValue(config)).map(([key, shortcutConfig]) => {
      var _a, _b;
      if (!shortcutConfig) {
        return null;
      }
      let shortcut;
      if (key.includes("-") && key !== "-" && !((_a = key.match(chainedShortcutRegex)) == null ? void 0 : _a.length)) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      if (key.includes("_") && key !== "_" && !((_b = key.match(combinedShortcutRegex)) == null ? void 0 : _b.length)) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      const chained = key.includes("-") && key !== "-";
      if (chained) {
        shortcut = {
          key: key.toLowerCase(),
          metaKey: false,
          ctrlKey: false,
          shiftKey: false,
          altKey: false
        };
      } else {
        const keySplit = key.toLowerCase().split("_").map((k) => k);
        shortcut = {
          key: keySplit.filter((k) => !["meta", "command", "ctrl", "shift", "alt", "option"].includes(k)).join("_"),
          metaKey: keySplit.includes("meta") || keySplit.includes("command"),
          ctrlKey: keySplit.includes("ctrl"),
          shiftKey: keySplit.includes("shift"),
          altKey: keySplit.includes("alt") || keySplit.includes("option")
        };
      }
      shortcut.chained = chained;
      if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
        shortcut.metaKey = false;
        shortcut.ctrlKey = true;
      }
      if (typeof shortcutConfig === "function") {
        shortcut.handler = shortcutConfig;
      } else if (typeof shortcutConfig === "object") {
        shortcut = { ...shortcut, handler: shortcutConfig.handler };
      }
      if (!shortcut.handler) {
        console.trace("[Shortcut] Invalid value");
        return null;
      }
      let enabled = true;
      if (!shortcutConfig.usingInput) {
        enabled = !usingInput.value;
      } else if (typeof shortcutConfig.usingInput === "string") {
        enabled = usingInput.value === shortcutConfig.usingInput;
      }
      shortcut.enabled = enabled;
      return shortcut;
    }).filter(Boolean);
  });
  return useEventListener("keydown", onKeyDown);
}
const _sfc_main = {
  __name: "UContentSearch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: { type: String, required: false },
    placeholder: { type: String, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false },
    shortcut: { type: String, required: false, default: "meta_k" },
    links: { type: Array, required: false },
    navigation: { type: Array, required: false },
    groups: { type: Array, required: false },
    files: { type: Array, required: false },
    fuse: { type: Object, required: false },
    colorMode: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: void 0, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: ["update:searchTerm"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocalePro();
    const { open } = useContentSearch();
    const colorMode = useColorMode();
    const appConfig = useAppConfig();
    const proxySlots = omit(slots, ["content"]);
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        includeMatches: true
      }
    }));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.contentSearch) || {} })();
    });
    function mapLinksItems(links) {
      return links.flatMap((link) => {
        var _a;
        return [{
          ...link,
          suffix: link.description,
          icon: link.icon || appConfig.ui.icons.file
        }, ...((_a = link.children) == null ? void 0 : _a.map((child) => ({
          ...child,
          prefix: link.label + " >",
          suffix: child.description,
          icon: child.icon || link.icon || appConfig.ui.icons.file
        }))) || []];
      });
    }
    function mapNavigationItems(children, parent) {
      return children.flatMap((link) => {
        var _a, _b, _c;
        if ((_a = link.children) == null ? void 0 : _a.length) {
          return mapNavigationItems(link.children, link);
        }
        return ((_c = (_b = props.files) == null ? void 0 : _b.filter((file) => file.id === link.path || file.id.startsWith(`${link.path}#`))) == null ? void 0 : _c.map((file) => mapFile(file, link, parent))) || [];
      });
    }
    function mapFile(file, link, parent) {
      const prefix = [...new Set([parent == null ? void 0 : parent.title, ...file.titles].filter(Boolean))];
      return {
        prefix: (prefix == null ? void 0 : prefix.length) ? prefix.join(" > ") + " >" : void 0,
        label: file.id === link.path ? link.title : file.title,
        suffix: file.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
        to: file.id,
        icon: link.icon || (parent == null ? void 0 : parent.icon) || (file.level > 1 ? appConfig.ui.icons.hash : appConfig.ui.icons.file),
        level: file.level
      };
    }
    const groups = computed(() => {
      var _a, _b;
      const groups2 = [];
      if ((_a = props.links) == null ? void 0 : _a.length) {
        groups2.push({ id: "links", label: t("contentSearch.links"), items: mapLinksItems(props.links) });
      }
      if ((_b = props.navigation) == null ? void 0 : _b.length) {
        if (props.navigation.some((link) => {
          var _a2;
          return !!((_a2 = link.children) == null ? void 0 : _a2.length);
        })) {
          groups2.push(...props.navigation.map((group) => ({ id: group.path, label: group.title, items: mapNavigationItems(group.children || []), postFilter })));
        } else {
          groups2.push({ id: "docs", items: mapNavigationItems(props.navigation), postFilter });
        }
      }
      groups2.push(...props.groups || []);
      if (props.colorMode && !(colorMode == null ? void 0 : colorMode.forced)) {
        groups2.push({
          id: "theme",
          label: t("contentSearch.theme"),
          items: [{
            label: t("colorMode.system"),
            icon: appConfig.ui.icons.system,
            active: colorMode.preference === "system",
            onSelect: () => {
              colorMode.preference = "system";
            }
          }, {
            label: t("colorMode.light"),
            icon: appConfig.ui.icons.light,
            active: colorMode.preference === "light",
            onSelect: () => {
              colorMode.preference = "light";
            }
          }, {
            label: t("colorMode.dark"),
            icon: appConfig.ui.icons.dark,
            active: colorMode.preference === "dark",
            onSelect: () => {
              colorMode.preference = "dark";
            }
          }]
        });
      }
      return groups2;
    });
    function postFilter(query, items) {
      if (!query) {
        return items == null ? void 0 : items.filter((item) => item.level === 1);
      }
      return items;
    }
    function onSelect(item) {
      if (item.disabled) {
        return;
      }
      open.value = false;
      searchTerm.value = "";
    }
    defineShortcuts({
      [props.shortcut]: {
        usingInput: true,
        handler: () => open.value = !open.value
      }
    });
    const commandPaletteRef = useTemplateRef("commandPaletteRef");
    __expose({
      commandPaletteRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$h;
      const _component_UCommandPalette = _sfc_main$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        class: ui.value.modal({ class: props.class })
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, () => {
              _push2(ssrRenderComponent(_component_UCommandPalette, {
                ref_key: "commandPaletteRef",
                ref: commandPaletteRef,
                "search-term": searchTerm.value,
                "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
                icon: __props.icon,
                placeholder: __props.placeholder,
                loading: __props.loading,
                "loading-icon": __props.loadingIcon,
                groups: groups.value,
                fuse: fuse.value,
                ui: unref(transformUI)(unref(omit)(ui.value, ["modal"]), props.ui),
                close: "",
                "onUpdate:modelValue": onSelect,
                "onUpdate:open": ($event) => open.value = $event
              }, createSlots({ _: 2 }, [
                renderList(unref(proxySlots), (_2, name) => {
                  return {
                    name,
                    fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, name, slotData)
                        ];
                      }
                    })
                  };
                })
              ]), _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createVNode(_component_UCommandPalette, {
                  ref_key: "commandPaletteRef",
                  ref: commandPaletteRef,
                  "search-term": searchTerm.value,
                  "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
                  icon: __props.icon,
                  placeholder: __props.placeholder,
                  loading: __props.loading,
                  "loading-icon": __props.loadingIcon,
                  groups: groups.value,
                  fuse: fuse.value,
                  ui: unref(transformUI)(unref(omit)(ui.value, ["modal"]), props.ui),
                  close: "",
                  "onUpdate:modelValue": onSelect,
                  "onUpdate:open": ($event) => open.value = $event
                }, createSlots({ _: 2 }, [
                  renderList(unref(proxySlots), (_2, name) => {
                    return {
                      name,
                      fn: withCtx((slotData) => [
                        renderSlot(_ctx.$slots, name, slotData)
                      ])
                    };
                  })
                ]), 1032, ["search-term", "onUpdate:searchTerm", "icon", "placeholder", "loading", "loading-icon", "groups", "fuse", "ui", "onUpdate:open"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentSearch-mabYGoHN.mjs.map
