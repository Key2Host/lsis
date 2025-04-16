import { defineComponent, useSlots, computed, inject, ref, useId, provide, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext, mergeModels, useModel } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive, Label } from 'reka-ui';
import { t as tv, B as inputIdInjectionKey, C as formFieldInjectionKey, a as _appConfig, e as useFormField, i as useButtonGroup, j as useComponentIcons, _ as __nuxt_component_4$1, U as UAvatar, D as looseToNumber } from './server.mjs';

const theme$1 = {
  "slots": {
    "root": "",
    "wrapper": "",
    "labelWrapper": "flex content-center items-center justify-between",
    "label": "block font-medium text-(--ui-text)",
    "container": "mt-1 relative",
    "description": "text-(--ui-text-muted)",
    "error": "mt-2 text-(--ui-error)",
    "hint": "text-(--ui-text-muted)",
    "help": "mt-2 text-(--ui-text-muted)"
  },
  "variants": {
    "size": {
      "xs": {
        "root": "text-xs"
      },
      "sm": {
        "root": "text-xs"
      },
      "md": {
        "root": "text-sm"
      },
      "lg": {
        "root": "text-sm"
      },
      "xl": {
        "root": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-error)"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};

var _a$1;
const appConfigFormField = _appConfig;
const formField = tv({ extend: tv(theme$1), ...((_a$1 = appConfigFormField.ui) == null ? void 0 : _a$1.formField) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    as: {},
    name: {},
    errorPattern: {},
    label: {},
    description: {},
    help: {},
    error: { type: [String, Boolean] },
    hint: {},
    size: {},
    required: { type: Boolean },
    eagerValidation: { type: Boolean },
    validateOnInputDelay: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => formField({
      size: props.size,
      required: props.required
    }));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a2, _b;
      return props.error || ((_b = (_a2 = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a2.find((error2) => error2.name && (error2.name === props.name || props.errorPattern && error2.name.match(props.errorPattern)))) == null ? void 0 : _b.message);
    });
    const id = ref(useId());
    const ariaId = id.value;
    provide(inputIdInjectionKey, id);
    provide(formFieldInjectionKey, computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern,
      hint: props.hint,
      description: props.description,
      ariaId
    })));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.label || !!slots.label) {
              _push2(`<div class="${ssrRenderClass(ui.value.labelWrapper({ class: (_b = props.ui) == null ? void 0 : _b.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label), {
                for: id.value,
                class: ui.value.label({ class: (_c = props.ui) == null ? void 0 : _c.label })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
                      _push3(`${ssrInterpolate(_ctx.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (_ctx.hint || !!slots.hint) {
                _push2(`<span${ssrRenderAttr("id", `${unref(ariaId)}-hint`)} class="${ssrRenderClass(ui.value.hint({ class: (_d = props.ui) == null ? void 0 : _d.hint }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "hint", { hint: _ctx.hint }, () => {
                  _push2(`${ssrInterpolate(_ctx.hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-description`)} class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([(_ctx.label || !!slots.label || _ctx.description || !!slots.description) && ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (typeof error.value === "string" && error.value || !!slots.error) {
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-error`)} class="${ssrRenderClass(ui.value.error({ class: (_g = props.ui) == null ? void 0 : _g.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else if (_ctx.help || !!slots.help) {
              _push2(`<p class="${ssrRenderClass(ui.value.help({ class: (_h = props.ui) == null ? void 0 : _h.help }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
                _push2(`${ssrInterpolate(_ctx.help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.labelWrapper({ class: (_j = props.ui) == null ? void 0 : _j.labelWrapper })
                }, [
                  createVNode(unref(Label), {
                    for: id.value,
                    class: ui.value.label({ class: (_k = props.ui) == null ? void 0 : _k.label })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  _ctx.hint || !!slots.hint ? (openBlock(), createBlock("span", {
                    key: 0,
                    id: `${unref(ariaId)}-hint`,
                    class: ui.value.hint({ class: (_l = props.ui) == null ? void 0 : _l.hint })
                  }, [
                    renderSlot(_ctx.$slots, "hint", { hint: _ctx.hint }, () => [
                      createTextVNode(toDisplayString(_ctx.hint), 1)
                    ])
                  ], 10, ["id"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  id: `${unref(ariaId)}-description`,
                  class: ui.value.description({ class: (_m = props.ui) == null ? void 0 : _m.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                class: [(_ctx.label || !!slots.label || _ctx.description || !!slots.description) && ui.value.container({ class: (_n = props.ui) == null ? void 0 : _n.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                typeof error.value === "string" && error.value || !!slots.error ? (openBlock(), createBlock("p", {
                  key: 0,
                  id: `${unref(ariaId)}-error`,
                  class: ui.value.error({ class: (_o = props.ui) == null ? void 0 : _o.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ])
                ], 10, ["id"])) : _ctx.help || !!slots.help ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.help({ class: (_p = props.ui) == null ? void 0 : _p.help })
                }, [
                  renderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => [
                    createTextVNode(toDisplayString(_ctx.help), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "UFormField" });

const theme = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--ui-text-dimmed)"
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
      "outline": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",
      "soft": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",
      "subtle": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
      "ghost": "text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-(--ui-text-highlighted) bg-transparent"
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
      "file": "file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-success)"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-info)"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-warning)"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-error)"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-border-inverted)"
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

var _a;
const appConfigInput = _appConfig;
const input = tv({ extend: tv(theme), ...((_a = appConfigInput.ui) == null ? void 0 : _a.input) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    id: {},
    name: {},
    type: { default: "text" },
    placeholder: {},
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    autofocusDelay: { default: 0 },
    disabled: { type: Boolean },
    highlight: { type: Boolean },
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {},
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const [modelValue, modelModifiers] = useModel(__props, "modelValue");
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => input({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize == null ? void 0 : inputSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
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
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: _ctx.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: _ctx.placeholder,
              class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base }),
              disabled: unref(disabled),
              required: _ctx.required,
              autocomplete: _ctx.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
              _push2(`<span class="${ssrRenderClass(ui.value.leading({ class: (_b = props.ui) == null ? void 0 : _b.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b2, _c2;
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(__nuxt_component_4$1, {
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!_ctx.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
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
                var _a4;
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(__nuxt_component_4$1, {
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
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
                type: _ctx.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: _ctx.placeholder,
                class: ui.value.base({ class: (_d = props.ui) == null ? void 0 : _d.base }),
                disabled: unref(disabled),
                required: _ctx.required,
                autocomplete: _ctx.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a4, _b2, _c2;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(__nuxt_component_4$1, {
                      key: 0,
                      name: unref(leadingIconName),
                      class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                    }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                      key: 1,
                      size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                    }, _ctx.avatar, {
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
                  var _a4;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(__nuxt_component_4$1, {
                      key: 0,
                      name: unref(trailingIconName),
                      class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "UInput" });

export { __nuxt_component_4 as _, __nuxt_component_3 as a };
//# sourceMappingURL=Input.vue.mjs.map
