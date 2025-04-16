import { t as tv$1, _ as __nuxt_component_4, U as UAvatar, a as _appConfig, f as formBusInjectionKey, b as formInputsInjectionKey, c as formLoadingInjectionKey, d as formOptionsInjectionKey, u as useAppConfig, e as useFormField, g as useAvatarGroup, h as useLocale, i as useButtonGroup, j as useComponentIcons, k as get, l as compare, m as defineLocale, n as en$1, o as localeContextInjectionKey, p as buildLocaleContext, q as __nuxt_component_5$1, r as omit, s as useNuxtApp, v as injectHead$1, w as useRuntimeConfig, x as useToast, y as useI18n, z as useSeoMeta } from './server.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderSlot, toDisplayString, useSSRContext, useId, inject, provide, ref, readonly, resolveDynamicComponent, mergeModels, useModel, createTextVNode, toRef, withModifiers, renderList, toRaw, reactive, createSlots, hasInjectionContext, getCurrentInstance, onMounted, isRef, watch, onScopeDispose, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardProps, Separator, Primitive, CheckboxRoot, CheckboxIndicator, Label, Slot, useFilter, useForwardPropsEmits, ComboboxGroup, ComboboxItem, ComboboxRoot, ComboboxAnchor, ComboboxTrigger, ComboboxPortal, ComboboxContent, FocusScope, ComboboxInput, ComboboxEmpty, ComboboxViewport, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxArrow } from 'reka-ui';
import { reactivePick, useEventBus, createReusableTemplate, createSharedComposable, useEventListener } from '@vueuse/core';
import { _ as __nuxt_component_4$1, a as __nuxt_component_3$1 } from './Input.vue.mjs';
import { m as defu, p as publicAssetsURL } from '../nitro/nitro.mjs';
import { createTV } from 'tailwind-variants';
import { useScript as useScript$2 } from 'unhead/scripts';
import { tryOnMounted, tryOnScopeDispose } from '@vueuse/shared';
import axios from 'axios';
import { _ as _imports_0$1 } from './virtual_public2.mjs';
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
import '@iconify/utils/lib/css/icon';
import 'reka-ui/namespaced';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import '@iconify/utils';
import 'ipx';

const theme$6 = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-(--ui-text) flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-(--ui-primary)"
      },
      "secondary": {
        "border": "border-(--ui-secondary)"
      },
      "success": {
        "border": "border-(--ui-success)"
      },
      "info": {
        "border": "border-(--ui-info)"
      },
      "warning": {
        "border": "border-(--ui-warning)"
      },
      "error": {
        "border": "border-(--ui-error)"
      },
      "neutral": {
        "border": "border-(--ui-border)"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};

var _a$7;
const appConfigSeparator = _appConfig;
const separator = tv$1({ extend: tv$1(theme$6), ...((_a$7 = appConfigSeparator.ui) == null ? void 0 : _a$7.separator) || {} });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    as: {},
    label: {},
    icon: {},
    avatar: {},
    color: {},
    size: {},
    type: {},
    orientation: { default: "horizontal" },
    class: {},
    ui: {},
    decorative: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => separator({
      color: props.color,
      orientation: props.orientation,
      size: props.size,
      type: props.type
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.border({ class: (_a3 = props.ui) == null ? void 0 : _a3.border }))}"${_scopeId}></div>`);
            if (_ctx.label || _ctx.icon || _ctx.avatar || !!slots.default) {
              _push2(`<!--[--><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                var _a4, _b2, _c2, _d2;
                if (_ctx.label) {
                  _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
                } else if (_ctx.icon) {
                  _push2(ssrRenderComponent(__nuxt_component_4, {
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (_ctx.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.border({ class: (_c = props.ui) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.border({ class: (_d = props.ui) == null ? void 0 : _d.border })
              }, null, 2),
              _ctx.label || _ctx.icon || _ctx.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4, _b2, _c2, _d2;
                    return [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label })
                      }, toDisplayString(_ctx.label), 3)) : _ctx.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                        key: 1,
                        name: _ctx.icon,
                        class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : _ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                        key: 2,
                        size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, _ctx.avatar, {
                        class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  class: ui.value.border({ class: (_f = props.ui) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$9, { __name: "USeparator" });

function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
function isValibotSchema(schema) {
  return "_run" in schema || typeof schema === "function" && "schema" in schema;
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state, schema) {
  var _a;
  const result = await schema["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: ((_a = result.issues) == null ? void 0 : _a.map((issue) => {
        var _a2;
        return {
          name: ((_a2 = issue.path) == null ? void 0 : _a2.map((item) => typeof item === "object" ? item.key : item).join(".")) || "",
          message: issue.message
        };
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateYupSchema(state, schema) {
  try {
    const result = await schema.validate(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isYupError(error)) {
      const errors = error.inner.map((issue) => ({
        name: issue.path ?? "",
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
async function validateZodSchema(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    const errors = result.error.issues.map((issue) => ({
      name: issue.path.join("."),
      message: issue.message
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    result: result.data,
    errors: null
  };
}
async function validateJoiSchema(state, schema) {
  try {
    const result = await schema.validateAsync(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isJoiError(error)) {
      const errors = error.details.map((issue) => ({
        name: issue.path.join("."),
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateValibotSchema(state, schema) {
  const result = await ("_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  if (!result.issues || result.issues.length === 0) {
    const output = "output" in result ? result.output : "value" in result ? result.value : null;
    return {
      errors: null,
      result: output
    };
  }
  const errors = result.issues.map((issue) => {
    var _a;
    return {
      name: ((_a = issue.path) == null ? void 0 : _a.map((item) => item.key).join(".")) || "",
      message: issue.message
    };
  });
  return {
    errors,
    result: null
  };
}
function validateSchema(state, schema) {
  if (isZodSchema(schema)) {
    return validateZodSchema(state, schema);
  } else if (isJoiSchema(schema)) {
    return validateJoiSchema(state, schema);
  } else if (isStandardSchema(schema)) {
    return validateStandardSchema(state, schema);
  } else if (isValibotSchema(schema)) {
    return validateValibotSchema(state, schema);
  } else if (isYupSchema(schema)) {
    return validateYupSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class FormValidationException extends Error {
  constructor(formId, errors, childErrors) {
    super("Form validation exception");
    __publicField(this, "formId");
    __publicField(this, "errors");
    __publicField(this, "children");
    this.formId = formId;
    this.errors = errors;
    this.children = childErrors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}

const theme$5 = {
  "base": ""
};

var _a$6;
const appConfigForm = _appConfig;
const form = tv$1({ extend: tv$1(theme$5), ...((_a$6 = appConfigForm.ui) == null ? void 0 : _a$6.form) || {} });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    id: {},
    schema: {},
    state: {},
    validate: {},
    validateOn: { default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean },
    validateOnInputDelay: { default: 300 },
    class: {},
    transform: { type: Boolean, default: true },
    onSubmit: {}
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = inject(
      formBusInjectionKey,
      void 0
    );
    provide(formBusInjectionKey, bus);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide("form-errors", errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    const dirtyFields = /* @__PURE__ */ new Set();
    const touchedFields = /* @__PURE__ */ new Set();
    const blurredFields = /* @__PURE__ */ new Set();
    function resolveErrorIds(errs) {
      return errs.map((err) => {
        var _a2;
        return {
          ...err,
          id: (err == null ? void 0 : err.name) ? (_a2 = inputs.value[err.name]) == null ? void 0 : _a2.id : void 0
        };
      });
    }
    const transformedState = ref(null);
    async function getErrors() {
      let errs = props.validate ? await props.validate(props.state) ?? [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await validateSchema(props.state, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          transformedState.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: true, transform: false }) {
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      const nestedValidatePromises = !names && opts.nested ? Array.from(nestedForms.value.values()).map(
        ({ validate }) => validate(opts).then(() => void 0).catch((error) => {
          if (!(error instanceof FormValidationException)) {
            throw error;
          }
          return error;
        })
      ) : [];
      if (names) {
        const otherErrors = errors.value.filter((error) => !names.some((name) => {
          var _a2, _b, _c;
          const pattern = (_b = (_a2 = inputs.value) == null ? void 0 : _a2[name]) == null ? void 0 : _b.pattern;
          return name === error.name || pattern && ((_c = error.name) == null ? void 0 : _c.match(pattern));
        }));
        const pathErrors = (await getErrors()).filter((error) => names.some((name) => {
          var _a2, _b, _c;
          const pattern = (_b = (_a2 = inputs.value) == null ? void 0 : _a2[name]) == null ? void 0 : _b.pattern;
          return name === error.name || pattern && ((_c = error.name) == null ? void 0 : _c.match(pattern));
        }));
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      const childErrors = (await Promise.all(nestedValidatePromises)).filter((val) => val !== void 0);
      if (errors.value.length + childErrors.length > 0) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value, childErrors);
      }
      if (opts.transform) {
        Object.assign(props.state, transformedState.value);
      }
      return props.state;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      var _a2;
      loading.value = true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await ((_a2 = props.onSubmit) == null ? void 0 : _a2.call(props, event));
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors,
          children: error.children
        };
        emits("error", errorEvent);
      } finally {
        loading.value = false;
      }
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    __expose({
      validate: _validate,
      errors,
      setErrors(errs, name) {
        if (name) {
          errors.value = errors.value.filter((error) => error.name !== name).concat(resolveErrorIds(errs));
        } else {
          errors.value = resolveErrorIds(errs);
        }
      },
      async submit() {
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (name) {
          return errors.value.filter((err) => err.name === name);
        }
        return errors.value;
      },
      clear(name) {
        if (name) {
          errors.value = errors.value.filter((err) => err.name !== name);
        } else {
          errors.value = [];
        }
      },
      disabled,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: unref(form)({ class: props.class }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { errors: errors.value }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { errors: errors.value })
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$8, { __name: "UForm" });

const theme$4 = {
  "slots": {
    "root": "relative flex items-start",
    "base": "shrink-0 flex items-center justify-center rounded-(--ui-radius) text-(--ui-bg) ring ring-inset ring-(--ui-border-accented) focus-visible:outline-2 focus-visible:outline-offset-2",
    "container": "flex items-center",
    "wrapper": "ms-2",
    "icon": "shrink-0 size-full",
    "label": "block font-medium text-(--ui-text)",
    "description": "text-(--ui-text-muted)"
  },
  "variants": {
    "color": {
      "primary": "focus-visible:outline-(--ui-primary)",
      "secondary": "focus-visible:outline-(--ui-secondary)",
      "success": "focus-visible:outline-(--ui-success)",
      "info": "focus-visible:outline-(--ui-info)",
      "warning": "focus-visible:outline-(--ui-warning)",
      "error": "focus-visible:outline-(--ui-error)",
      "neutral": "focus-visible:outline-(--ui-border-inverted)"
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-error)"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75",
        "description": "cursor-not-allowed opacity-75"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "checked": true,
      "class": "ring-2 ring-(--ui-primary) bg-(--ui-primary)"
    },
    {
      "color": "secondary",
      "checked": true,
      "class": "ring-2 ring-(--ui-secondary) bg-(--ui-secondary)"
    },
    {
      "color": "success",
      "checked": true,
      "class": "ring-2 ring-(--ui-success) bg-(--ui-success)"
    },
    {
      "color": "info",
      "checked": true,
      "class": "ring-2 ring-(--ui-info) bg-(--ui-info)"
    },
    {
      "color": "warning",
      "checked": true,
      "class": "ring-2 ring-(--ui-warning) bg-(--ui-warning)"
    },
    {
      "color": "error",
      "checked": true,
      "class": "ring-2 ring-(--ui-error) bg-(--ui-error)"
    },
    {
      "color": "neutral",
      "checked": true,
      "class": "ring-2 ring-(--ui-border-inverted) bg-(--ui-bg-inverted)"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};

var _a$5;
const appConfigCheckbox = _appConfig;
const checkbox = tv$1({ extend: tv$1(theme$4), ...((_a$5 = appConfigCheckbox.ui) == null ? void 0 : _a$5.checkbox) || {} });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    label: {},
    description: {},
    color: {},
    size: {},
    icon: {},
    indeterminateIcon: {},
    class: {},
    ui: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    defaultValue: { type: [Boolean, String] }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const appConfig = useAppConfig();
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => checkbox({
      size: size.value,
      color: color.value,
      required: props.required,
      disabled: disabled.value,
      checked: Boolean(modelValue.value ?? props.defaultValue)
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), { "as-child": "" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b2, _c2, _d2;
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(__nuxt_component_4, {
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(__nuxt_component_4, {
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_4, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_4, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_d2 = props.ui) == null ? void 0 : _d2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b2;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_4, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_4, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.label || !!slots.label || (_ctx.description || !!slots.description)) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (_ctx.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  class: ui.value.label({ class: (_d = props.ui) == null ? void 0 : _d.label })
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
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  class: ui.value.base({ class: (_g = props.ui) == null ? void 0 : _g.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b2;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_4, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_4, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              _ctx.label || !!slots.label || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  class: ui.value.label({ class: (_i = props.ui) == null ? void 0 : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                      createTextVNode(toDisplayString(_ctx.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$7, { __name: "UCheckbox" });

const theme$3 = {
  "slots": {
    "root": "relative inline-flex items-center justify-center shrink-0",
    "base": "rounded-full ring ring-(--ui-bg) flex items-center justify-center text-(--ui-bg) font-medium whitespace-nowrap"
  },
  "variants": {
    "color": {
      "primary": "bg-(--ui-primary)",
      "secondary": "bg-(--ui-secondary)",
      "success": "bg-(--ui-success)",
      "info": "bg-(--ui-info)",
      "warning": "bg-(--ui-warning)",
      "error": "bg-(--ui-error)",
      "neutral": "bg-(--ui-text-muted)"
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

var _a$4;
const appConfigChip = _appConfig;
const chip = tv$1({ extend: tv$1(theme$3), ...((_a$4 = appConfigChip.ui) == null ? void 0 : _a$4.chip) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Chip",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    text: {},
    color: {},
    size: {},
    position: {},
    inset: { type: Boolean, default: false },
    standalone: { type: Boolean, default: false },
    class: {},
    ui: {}
  }, {
    "show": { type: Boolean, ...{ default: true } },
    "showModifiers": {}
  }),
  emits: ["update:show"],
  setup(__props) {
    const props = __props;
    const show = useModel(__props, "show");
    const { size } = useAvatarGroup(props);
    const ui = computed(() => chip({
      color: props.color,
      size: size.value,
      position: props.position,
      inset: props.inset,
      standalone: props.standalone
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
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
              _push2(`<span class="${ssrRenderClass(ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                _push2(`${ssrInterpolate(_ctx.text)}`);
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
                  createTextVNode(toDisplayString(_ctx.text), 1)
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

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const UChip = Object.assign(_sfc_main$6, { __name: "UChip" });

const theme$2 = {
  "slots": {
    "base": [
      "relative group rounded-[calc(var(--ui-radius)*1.5)] inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-(--ui-text-dimmed)",
    "arrow": "fill-(--ui-border)",
    "content": "max-h-60 w-(--reka-popper-anchor-width) bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] pointer-events-auto",
    "viewport": "divide-y divide-(--ui-border) scroll-py-1",
    "group": "p-1 isolate",
    "empty": "py-2 text-center text-sm text-(--ui-text-muted)",
    "label": "font-semibold text-(--ui-text-highlighted)",
    "separator": "-mx-1 my-1 h-px bg-(--ui-border)",
    "item": [
      "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75 text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text)",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemLabel": "truncate",
    "input": "border-b border-(--ui-border)",
    "focusScope": "flex flex-col min-h-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6"
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

var _a$3;
const appConfigSelectMenu = _appConfig;
const selectMenu = tv$1({ extend: tv$1(theme$2), ...((_a$3 = appConfigSelectMenu.ui) == null ? void 0 : _a$3.selectMenu) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "SelectMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: {},
    placeholder: {},
    searchInput: { type: [Boolean, Object], default: true },
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    trailingIcon: {},
    selectedIcon: {},
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    valueKey: {},
    labelKey: { default: "label" },
    items: {},
    defaultValue: {},
    modelValue: {},
    multiple: { type: Boolean },
    highlight: { type: Boolean },
    createItem: { type: [Boolean, String, Object] },
    filterFields: {},
    ignoreFilter: { type: Boolean },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    resetSearchTermOnBlur: { type: Boolean, default: true },
    highlightOnHover: { type: Boolean },
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "searchTerm": { default: "" },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["highlight", "update:open", "change", "blur", "focus", "create", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm");
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "highlightOnHover"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const searchInputProps = toRef(() => defu(props.searchInput, { placeholder: t("selectMenu.search"), variant: "none" }));
    const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const ui = computed(() => selectMenu({
      color: color.value,
      variant: props.variant,
      size: selectSize == null ? void 0 : selectSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        return value.map((v) => displayValue(v)).filter(Boolean).join(", ");
      }
      if (!props.valueKey) {
        return value && (typeof value === "object" ? get(value, props.labelKey) : value);
      }
      const item = items.value.find((item2) => compare(typeof item2 === "object" ? get(item2, props.valueKey) : item2, value));
      return item && (typeof item === "object" ? get(item, props.labelKey) : item);
    }
    const groups = computed(() => {
      var _a2;
      return ((_a2 = props.items) == null ? void 0 : _a2.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    const items = computed(() => groups.value.flatMap((group) => group));
    const filteredGroups = computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (typeof item !== "object") {
          return contains(item, searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => contains(get(item, field), searchTerm.value));
      })).filter((group) => group.filter((item) => !item.type || !["label", "separator"].includes(item.type)).length > 0);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group));
    const createItem = computed(() => {
      if (!props.createItem || !searchTerm.value) {
        return false;
      }
      const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
      if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") {
        return !filteredItems.value.find((item) => compare(item, newItem, props.valueKey));
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onUpdateOpen(value) {
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (props.resetSearchTermOnBlur) {
          const STATE_ANIMATION_DELAY_MS = 100;
          timeoutId = setTimeout(() => {
            searchTerm.value = "";
          }, STATE_ANIMATION_DELAY_MS);
        }
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
        clearTimeout(timeoutId);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxGroup), {
              class: ui.value.group({ class: (_a2 = props.ui) == null ? void 0 : _a2.group })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxItem), {
                    class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }),
                    value: searchTerm.value,
                    onSelect: ($event) => emits("create", searchTerm.value)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3;
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel }))}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                          _push4(`${ssrInterpolate(unref(t)("selectMenu.create", { label: searchTerm.value }))}`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }),
                      _: 3
                    }, 8, ["class", "value", "onSelect"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxGroup), {
                class: ui.value.group({ class: (_b = props.ui) == null ? void 0 : _b.group })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }),
                      _: 3
                    }, 8, ["class", "value", "onSelect"])
                  ];
                }),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        "ignore-filter": "",
        "as-child": "",
        name: unref(name),
        disabled: unref(disabled),
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxAnchor), { "as-child": "" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxTrigger), {
                    class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] }),
                    tabindex: "0"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2, _c, _d;
                      if (_push4) {
                        if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
                          _push4(`<span class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3, _c2;
                            if (unref(isLeading) && unref(leadingIconName)) {
                              _push4(ssrRenderComponent(__nuxt_component_4, {
                                name: unref(leadingIconName),
                                class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (!!_ctx.avatar) {
                              _push4(ssrRenderComponent(UAvatar, mergeProps({
                                size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                              }, _ctx.avatar, {
                                class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open
                        }, () => {
                          _push4(`<!--[-->`);
                          ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                            var _a4, _b3;
                            _push4(`<!--[-->`);
                            if (displayedModelValue) {
                              _push4(`<span class="${ssrRenderClass(ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value }))}"${_scopeId3}>${ssrInterpolate(displayedModelValue)}</span>`);
                            } else {
                              _push4(`<span class="${ssrRenderClass(ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder }))}"${_scopeId3}>${ssrInterpolate(_ctx.placeholder ?? " ")}</span>`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        }, _push4, _parent4, _scopeId3);
                        if (unref(isTrailing) || !!slots.trailing) {
                          _push4(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4;
                            if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(__nuxt_component_4, {
                                name: unref(trailingIconName),
                                class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4, _b3, _c2;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, _ctx.avatar, {
                                  class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "default", {
                            modelValue,
                            open
                          }, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                              var _a4, _b3;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                                }, toDisplayString(_ctx.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
                          }, [
                            renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_b = props.ui) == null ? void 0 : _b.base] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => {
                        var _a3, _b2;
                        return [
                          unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4, _b3, _c;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, _ctx.avatar, {
                                  class: ui.value.itemLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.itemLeadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "default", {
                            modelValue,
                            open
                          }, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                              var _a4, _b3;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                                }, toDisplayString(_ctx.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing })
                          }, [
                            renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
                                  key: 0,
                                  name: unref(trailingIconName),
                                  class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(FocusScope), {
                          trapped: "",
                          class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a4, _b3, _c2, _d2;
                            if (_push5) {
                              if (!!_ctx.searchInput) {
                                _push5(ssrRenderComponent(unref(ComboboxInput), {
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    var _a5, _b4;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(__nuxt_component_4$1, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(__nuxt_component_4$1, mergeProps({
                                          autofocus: "",
                                          autocomplete: "off"
                                        }, searchInputProps.value, {
                                          class: ui.value.input({ class: (_b4 = props.ui) == null ? void 0 : _b4.input })
                                        }), null, 16, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(ComboboxEmpty), {
                                class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                      _push6(`${ssrInterpolate(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData"))}`);
                                    }, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ComboboxViewport), {
                                class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (createItem.value && createItemPosition.value === "top") {
                                      _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<!--[-->`);
                                    ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      _push6(ssrRenderComponent(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(group, (item, index) => {
                                              var _a6, _b4, _c3;
                                              _push7(`<!--[-->`);
                                              if ((item == null ? void 0 : item.type) === "label") {
                                                _push7(ssrRenderComponent(unref(ComboboxLabel), {
                                                  class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                }, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else if ((item == null ? void 0 : item.type) === "separator") {
                                                _push7(ssrRenderComponent(unref(ComboboxSeparator), {
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(unref(ComboboxItem), {
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: item.disabled,
                                                  value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: item.onSelect
                                                }, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      ssrRenderSlot(_ctx.$slots, "item", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b5;
                                                        ssrRenderSlot(_ctx.$slots, "item-leading", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a8, _b6, _c4, _d3, _e;
                                                          if (item.icon) {
                                                            _push8(ssrRenderComponent(__nuxt_component_4, {
                                                              name: item.icon,
                                                              class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                            }, null, _parent8, _scopeId7));
                                                          } else if (item.avatar) {
                                                            _push8(ssrRenderComponent(UAvatar, mergeProps({
                                                              size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                              ref_for: true
                                                            }, item.avatar, {
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, _parent8, _scopeId7));
                                                          } else if (item.chip) {
                                                            _push8(ssrRenderComponent(UChip, mergeProps({
                                                              size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                              inset: "",
                                                              standalone: "",
                                                              ref_for: true
                                                            }, item.chip, {
                                                              class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                            }), null, _parent8, _scopeId7));
                                                          } else {
                                                            _push8(`<!---->`);
                                                          }
                                                        }, _push8, _parent8, _scopeId7);
                                                        _push8(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          _push8(`${ssrInterpolate(typeof item === "object" ? unref(get)(item, props.labelKey) : item)}`);
                                                        }, _push8, _parent8, _scopeId7);
                                                        _push8(`</span><span class="${ssrRenderClass(ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }, null, _push8, _parent8, _scopeId7);
                                                        _push8(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                            var _a8, _b6;
                                                            if (_push9) {
                                                              _push9(ssrRenderComponent(__nuxt_component_4, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                              }, null, _parent9, _scopeId8));
                                                            } else {
                                                              return [
                                                                createVNode(__nuxt_component_4, {
                                                                  name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                                  class: ui.value.itemTrailingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingIcon })
                                                                }, null, 8, ["name", "class"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                        _push8(`</span>`);
                                                      }, _push8, _parent8, _scopeId7);
                                                    } else {
                                                      return [
                                                        renderSlot(_ctx.$slots, "item", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a7, _b5;
                                                          return [
                                                            renderSlot(_ctx.$slots, "item-leading", {
                                                              item,
                                                              index
                                                            }, () => {
                                                              var _a8, _b6, _c4, _d3, _e;
                                                              return [
                                                                item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                                  key: 0,
                                                                  name: item.icon,
                                                                  class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                                  key: 1,
                                                                  size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                                  ref_for: true
                                                                }, item.avatar, {
                                                                  class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                                }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                                  key: 2,
                                                                  size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                                  inset: "",
                                                                  standalone: "",
                                                                  ref_for: true
                                                                }, item.chip, {
                                                                  class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                              ];
                                                            }),
                                                            createVNode("span", {
                                                              class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                            }, [
                                                              renderSlot(_ctx.$slots, "item-label", {
                                                                item,
                                                                index
                                                              }, () => [
                                                                createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                              ])
                                                            ], 2),
                                                            createVNode("span", {
                                                              class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                            }, [
                                                              renderSlot(_ctx.$slots, "item-trailing", {
                                                                item,
                                                                index
                                                              }),
                                                              createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                                default: withCtx(() => {
                                                                  var _a8;
                                                                  return [
                                                                    createVNode(__nuxt_component_4, {
                                                                      name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                                }, _parent7, _scopeId6));
                                              }
                                              _push7(`<!--]-->`);
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                                var _a6, _b4, _c3;
                                                return openBlock(), createBlock(Fragment, {
                                                  key: `group-${groupIndex}-${index}`
                                                }, [
                                                  (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                    key: 0,
                                                    class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                    key: 1,
                                                    class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                  }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                    key: 2,
                                                    class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                    disabled: item.disabled,
                                                    value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                    onSelect: item.onSelect
                                                  }, {
                                                    default: withCtx(() => [
                                                      renderSlot(_ctx.$slots, "item", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b5;
                                                        return [
                                                          renderSlot(_ctx.$slots, "item-leading", {
                                                            item,
                                                            index
                                                          }, () => {
                                                            var _a8, _b6, _c4, _d3, _e;
                                                            return [
                                                              item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                                key: 0,
                                                                name: item.icon,
                                                                class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                                key: 1,
                                                                size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                                ref_for: true
                                                              }, item.avatar, {
                                                                class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                              }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                                key: 2,
                                                                size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                                inset: "",
                                                                standalone: "",
                                                                ref_for: true
                                                              }, item.chip, {
                                                                class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                            ];
                                                          }),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                          }, [
                                                            renderSlot(_ctx.$slots, "item-label", {
                                                              item,
                                                              index
                                                            }, () => [
                                                              createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                            ])
                                                          ], 2),
                                                          createVNode("span", {
                                                            class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                          }, [
                                                            renderSlot(_ctx.$slots, "item-trailing", {
                                                              item,
                                                              index
                                                            }),
                                                            createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                              default: withCtx(() => {
                                                                var _a8;
                                                                return [
                                                                  createVNode(__nuxt_component_4, {
                                                                    name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                                  }, 1032, ["class", "disabled", "value", "onSelect"]))
                                                ], 64);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (createItem.value && createItemPosition.value === "bottom") {
                                      _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                        var _a5;
                                        return openBlock(), createBlock(unref(ComboboxGroup), {
                                          key: `group-${groupIndex}`,
                                          class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                              var _a6, _b4, _c3;
                                              return openBlock(), createBlock(Fragment, {
                                                key: `group-${groupIndex}-${index}`
                                              }, [
                                                (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                  key: 0,
                                                  class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                  key: 1,
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                  key: 2,
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: item.disabled,
                                                  value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: item.onSelect
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item", {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a7, _b5;
                                                      return [
                                                        renderSlot(_ctx.$slots, "item-leading", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a8, _b6, _c4, _d3, _e;
                                                          return [
                                                            item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                              key: 0,
                                                              name: item.icon,
                                                              class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                              key: 1,
                                                              size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                              ref_for: true
                                                            }, item.avatar, {
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                              key: 2,
                                                              size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                              inset: "",
                                                              standalone: "",
                                                              ref_for: true
                                                            }, item.chip, {
                                                              class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                          ];
                                                        }),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                        }, [
                                                          renderSlot(_ctx.$slots, "item-label", {
                                                            item,
                                                            index
                                                          }, () => [
                                                            createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                          ])
                                                        ], 2),
                                                        createVNode("span", {
                                                          class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                        }, [
                                                          renderSlot(_ctx.$slots, "item-trailing", {
                                                            item,
                                                            index
                                                          }),
                                                          createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                            default: withCtx(() => {
                                                              var _a8;
                                                              return [
                                                                createVNode(__nuxt_component_4, {
                                                                  name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                                }, 1032, ["class", "disabled", "value", "onSelect"]))
                                              ], 64);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]);
                                      }), 128)),
                                      createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_4$1, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_c2 = props.ui) == null ? void 0 : _c2.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_d2 = props.ui) == null ? void 0 : _d2.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c3;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c4, _d3, _e;
                                                        return [
                                                          item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(__nuxt_component_4, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(ComboboxArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_c = props.ui) == null ? void 0 : _c.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_4$1, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c2;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c3, _d2, _e;
                                                        return [
                                                          item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(__nuxt_component_4, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_d = props.ui) == null ? void 0 : _d.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a3, _b2;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_4$1, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c2, _d, _e;
                                                        return [
                                                          item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d = props.ui) == null ? void 0 : _d.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(__nuxt_component_4, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxAnchor), { "as-child": "" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => {
                        var _a3, _b;
                        return [
                          unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4, _b2, _c;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, _ctx.avatar, {
                                  class: ui.value.itemLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.itemLeadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "default", {
                            modelValue,
                            open
                          }, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                              var _a4, _b2;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b2 = props.ui) == null ? void 0 : _b2.placeholder })
                                }, toDisplayString(_ctx.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.trailing({ class: (_b = props.ui) == null ? void 0 : _b.trailing })
                          }, [
                            renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(__nuxt_component_4, {
                                  key: 0,
                                  name: unref(trailingIconName),
                                  class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }),
                _: 2
              }, 1024),
              createVNode(unref(ComboboxPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a3, _b;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b2;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_4$1, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b3, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b4;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b5, _c2, _d, _e;
                                                        return [
                                                          item.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 1,
                                                            size: ((_b5 = props.ui) == null ? void 0 : _b5.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d = props.ui) == null ? void 0 : _d.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(__nuxt_component_4, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b = props.ui) == null ? void 0 : _b.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$5, { __name: "USelectMenu" });

const en = defineLocale({
  ...en$1,
  messages: {
    ...en$1.messages,
    authForm: {
      submit: "Continue",
      hidePassword: "Hide password",
      showPassword: "Show password"
    },
    banner: {
      close: "Close"
    },
    colorMode: {
      system: "System",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search..."
    },
    contentToc: {
      title: "On this page"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search..."
    },
    dashboardSidebarCollapse: {
      expand: "Expand sidebar",
      collapse: "Collapse sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Back to home"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    prose: {
      pre: {
        copy: "Copy code to clipboard"
      }
    }
  }
});

const _useLocalePro = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocalePro = createSharedComposable(_useLocalePro);

const theme$1 = {
  "slots": {
    "root": "w-full space-y-6",
    "header": "flex flex-col text-center",
    "leading": "mb-2",
    "leadingIcon": "size-8 shrink-0",
    "title": "text-xl text-pretty font-semibold text-(--ui-text-highlighted)",
    "description": "mt-1 text-base text-pretty text-(--ui-text-muted)",
    "body": "gap-y-6 flex flex-col",
    "providers": "space-y-3",
    "separator": "",
    "form": "space-y-5",
    "footer": "text-sm text-center text-(--ui-text-muted) mt-2"
  }
};

var _a$2;
const appConfigTv = _appConfig;
const tv = createTV((_a$2 = appConfigTv.ui) == null ? void 0 : _a$2.tv);

var _a$1;
const appConfig = _appConfig;
const authForm = tv({ extend: tv(theme$1), ...((_a$1 = appConfig.uiPro) == null ? void 0 : _a$1.authForm) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AuthForm",
  __ssrInlineRender: true,
  props: {
    as: {},
    icon: {},
    title: {},
    description: {},
    fields: {},
    providers: {},
    separator: { default: "or" },
    submit: {},
    schema: {},
    validate: {},
    validateOn: {},
    validateOnInputDelay: {},
    disabled: { type: Boolean },
    class: {},
    ui: {}
  },
  emits: ["submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const state = reactive((props.fields || []).reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.defaultValue;
      }
      return acc;
    }, {}));
    const emits = __emit;
    const slots = useSlots();
    const appConfig2 = useAppConfig();
    const { t } = useLocalePro();
    const formRef = ref();
    const passwordVisibility = ref(false);
    const ui = authForm();
    __expose({
      formRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UIcon = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5$1;
      const _component_USeparator = __nuxt_component_1$1;
      const _component_UForm = __nuxt_component_3;
      const _component_UFormField = __nuxt_component_3$1;
      const _component_UCheckbox = __nuxt_component_5;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UInput = __nuxt_component_4$1;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            if (_ctx.icon || !!slots.icon || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || !!slots.header) {
              _push2(`<div class="${ssrRenderClass(unref(ui).header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a4, _b2, _c2;
                if (_ctx.icon || !!slots.leading) {
                  _push2(`<div class="${ssrRenderClass(unref(ui).leading({ class: (_a4 = props.ui) == null ? void 0 : _a4.leading }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                    var _a5;
                    if (_ctx.icon) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: _ctx.icon,
                        class: unref(ui).leadingIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.leadingIcon })
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.title || !!slots.title) {
                  _push2(`<div class="${ssrRenderClass(unref(ui).title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push2(`${ssrInterpolate(_ctx.title)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.description || !!slots.description) {
                  _push2(`<div class="${ssrRenderClass(unref(ui).description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                    _push2(`${ssrInterpolate(_ctx.description)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(unref(ui).body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
            if ((_c = _ctx.providers) == null ? void 0 : _c.length) {
              _push2(`<div class="${ssrRenderClass(unref(ui).providers({ class: (_d = props.ui) == null ? void 0 : _d.providers }))}"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.providers, (provider, index) => {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({
                  key: index,
                  block: "",
                  color: "neutral",
                  variant: "subtle",
                  ref_for: true
                }, provider), null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_e = _ctx.providers) == null ? void 0 : _e.length) && ((_f = _ctx.fields) == null ? void 0 : _f.length)) {
              _push2(ssrRenderComponent(_component_USeparator, mergeProps(typeof _ctx.separator === "object" ? _ctx.separator : { label: _ctx.separator }, {
                class: unref(ui).separator({ class: (_g = props.ui) == null ? void 0 : _g.separator })
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_h = _ctx.fields) == null ? void 0 : _h.length) {
              _push2(ssrRenderComponent(_component_UForm, {
                ref_key: "formRef",
                ref: formRef,
                state,
                schema: _ctx.schema,
                validate: _ctx.validate,
                "validate-on": _ctx.validateOn,
                class: unref(ui).form({ class: (_i = props.ui) == null ? void 0 : _i.form }),
                onSubmit: ($event) => emits("submit", $event)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.fields, (field) => {
                      _push3(ssrRenderComponent(_component_UFormField, {
                        key: field.name,
                        label: field.type === "checkbox" ? "" : field.label ?? "",
                        description: field.description,
                        help: field.help,
                        hint: field.hint,
                        name: field.name,
                        size: field.size,
                        required: field.required
                      }, createSlots({
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field }), () => {
                              if (field.type === "checkbox") {
                                _push4(ssrRenderComponent(_component_UCheckbox, mergeProps({
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["description", "help", "hint", "size"])), null, _parent4, _scopeId3));
                              } else if (field.type === "select") {
                                _push4(ssrRenderComponent(_component_USelectMenu, mergeProps({
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["description", "help", "hint", "size"])), null, _parent4, _scopeId3));
                              } else if (field.type === "password") {
                                _push4(ssrRenderComponent(_component_UInput, mergeProps({
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  type: passwordVisibility.value ? "text" : "password",
                                  ref_for: true
                                }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type", "required", "defaultValue"]), { ui: { root: "w-full" } }), {
                                  trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(_component_UButton, {
                                        color: "neutral",
                                        variant: "link",
                                        size: "sm",
                                        icon: passwordVisibility.value ? unref(appConfig2).ui.icons.eyeOff : unref(appConfig2).ui.icons.eye,
                                        "aria-label": passwordVisibility.value ? unref(t)("authForm.hidePassword") : unref(t)("authForm.showPassword"),
                                        "aria-pressed": passwordVisibility.value,
                                        "aria-controls": "password",
                                        onClick: ($event) => passwordVisibility.value = !passwordVisibility.value
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(_component_UButton, {
                                          color: "neutral",
                                          variant: "link",
                                          size: "sm",
                                          icon: passwordVisibility.value ? unref(appConfig2).ui.icons.eyeOff : unref(appConfig2).ui.icons.eye,
                                          "aria-label": passwordVisibility.value ? unref(t)("authForm.hidePassword") : unref(t)("authForm.showPassword"),
                                          "aria-pressed": passwordVisibility.value,
                                          "aria-controls": "password",
                                          onClick: ($event) => passwordVisibility.value = !passwordVisibility.value
                                        }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(ssrRenderComponent(_component_UInput, mergeProps({
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["label", "description", "help", "hint", "size", "required", "defaultValue"]), { ui: { root: "w-full" } }), null, _parent4, _scopeId3));
                              }
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field }), () => [
                                field.type === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                                  key: 0,
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "select" ? (openBlock(), createBlock(_component_USelectMenu, mergeProps({
                                  key: 1,
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "password" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                                  key: 2,
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  type: passwordVisibility.value ? "text" : "password",
                                  ref_for: true
                                }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type", "required", "defaultValue"]), { ui: { root: "w-full" } }), {
                                  trailing: withCtx(() => [
                                    createVNode(_component_UButton, {
                                      color: "neutral",
                                      variant: "link",
                                      size: "sm",
                                      icon: passwordVisibility.value ? unref(appConfig2).ui.icons.eyeOff : unref(appConfig2).ui.icons.eye,
                                      "aria-label": passwordVisibility.value ? unref(t)("authForm.hidePassword") : unref(t)("authForm.showPassword"),
                                      "aria-pressed": passwordVisibility.value,
                                      "aria-controls": "password",
                                      onClick: ($event) => passwordVisibility.value = !passwordVisibility.value
                                    }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                                  ]),
                                  _: 2
                                }, 1040, ["modelValue", "onUpdate:modelValue", "type"])) : (openBlock(), createBlock(_component_UInput, mergeProps({
                                  key: 3,
                                  modelValue: state[field.name],
                                  "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                  ref_for: true
                                }, unref(omit)(field, ["label", "description", "help", "hint", "size", "required", "defaultValue"]), { ui: { root: "w-full" } }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, [
                        !!slots[`${field.name}-label`] ? {
                          name: "label",
                          fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, `${field.name}-label`, {}, null, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, `${field.name}-label`)
                              ];
                            }
                          }),
                          key: "0"
                        } : void 0,
                        !!slots[`${field.name}-description`] ? {
                          name: "description",
                          fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, `${field.name}-description`, {}, null, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, `${field.name}-description`)
                              ];
                            }
                          }),
                          key: "1"
                        } : void 0,
                        !!slots[`${field.name}-hint`] ? {
                          name: "hint",
                          fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, `${field.name}-hint`, {}, null, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, `${field.name}-hint`)
                              ];
                            }
                          }),
                          key: "2"
                        } : void 0,
                        !!slots[`${field.name}-help`] ? {
                          name: "help",
                          fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, `${field.name}-help`, {}, null, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, `${field.name}-help`)
                              ];
                            }
                          }),
                          key: "3"
                        } : void 0,
                        !!slots[`${field.name}-error`] ? {
                          name: "error",
                          fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, `${field.name}-error`, {}, null, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, `${field.name}-error`)
                              ];
                            }
                          }),
                          key: "4"
                        } : void 0
                      ]), _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    if (!!slots.validation) {
                      ssrRenderSlot(_ctx.$slots, "validation", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UButton, mergeProps({
                      type: "submit",
                      label: unref(t)("authForm.submit"),
                      block: ""
                    }, _ctx.submit), null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.fields, (field) => {
                        return openBlock(), createBlock(_component_UFormField, {
                          key: field.name,
                          label: field.type === "checkbox" ? "" : field.label ?? "",
                          description: field.description,
                          help: field.help,
                          hint: field.hint,
                          name: field.name,
                          size: field.size,
                          required: field.required
                        }, createSlots({
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field }), () => [
                              field.type === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                                key: 0,
                                modelValue: state[field.name],
                                "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                ref_for: true
                              }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "select" ? (openBlock(), createBlock(_component_USelectMenu, mergeProps({
                                key: 1,
                                modelValue: state[field.name],
                                "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                ref_for: true
                              }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "password" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                                key: 2,
                                modelValue: state[field.name],
                                "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                type: passwordVisibility.value ? "text" : "password",
                                ref_for: true
                              }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type", "required", "defaultValue"]), { ui: { root: "w-full" } }), {
                                trailing: withCtx(() => [
                                  createVNode(_component_UButton, {
                                    color: "neutral",
                                    variant: "link",
                                    size: "sm",
                                    icon: passwordVisibility.value ? unref(appConfig2).ui.icons.eyeOff : unref(appConfig2).ui.icons.eye,
                                    "aria-label": passwordVisibility.value ? unref(t)("authForm.hidePassword") : unref(t)("authForm.showPassword"),
                                    "aria-pressed": passwordVisibility.value,
                                    "aria-controls": "password",
                                    onClick: ($event) => passwordVisibility.value = !passwordVisibility.value
                                  }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                                ]),
                                _: 2
                              }, 1040, ["modelValue", "onUpdate:modelValue", "type"])) : (openBlock(), createBlock(_component_UInput, mergeProps({
                                key: 3,
                                modelValue: state[field.name],
                                "onUpdate:modelValue": ($event) => state[field.name] = $event,
                                ref_for: true
                              }, unref(omit)(field, ["label", "description", "help", "hint", "size", "required", "defaultValue"]), { ui: { root: "w-full" } }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                            ])
                          ]),
                          _: 2
                        }, [
                          !!slots[`${field.name}-label`] ? {
                            name: "label",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, `${field.name}-label`)
                            ]),
                            key: "0"
                          } : void 0,
                          !!slots[`${field.name}-description`] ? {
                            name: "description",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, `${field.name}-description`)
                            ]),
                            key: "1"
                          } : void 0,
                          !!slots[`${field.name}-hint`] ? {
                            name: "hint",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, `${field.name}-hint`)
                            ]),
                            key: "2"
                          } : void 0,
                          !!slots[`${field.name}-help`] ? {
                            name: "help",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, `${field.name}-help`)
                            ]),
                            key: "3"
                          } : void 0,
                          !!slots[`${field.name}-error`] ? {
                            name: "error",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, `${field.name}-error`)
                            ]),
                            key: "4"
                          } : void 0
                        ]), 1032, ["label", "description", "help", "hint", "name", "size", "required"]);
                      }), 128)),
                      !!slots.validation ? renderSlot(_ctx.$slots, "validation", { key: 0 }) : createCommentVNode("", true),
                      createVNode(_component_UButton, mergeProps({
                        type: "submit",
                        label: unref(t)("authForm.submit"),
                        block: ""
                      }, _ctx.submit), null, 16, ["label"])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(unref(ui).footer({ class: (_j = props.ui) == null ? void 0 : _j.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.icon || !!slots.icon || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(ui).header({ class: (_k = props.ui) == null ? void 0 : _k.header })
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => {
                  var _a4, _b2, _c2;
                  return [
                    _ctx.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: unref(ui).leading({ class: (_a4 = props.ui) == null ? void 0 : _a4.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {}, () => {
                        var _a5;
                        return [
                          _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: _ctx.icon,
                            class: unref(ui).leadingIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.leadingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: unref(ui).title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: unref(ui).description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                    }, [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(_ctx.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: unref(ui).body({ class: (_l = props.ui) == null ? void 0 : _l.body })
              }, [
                ((_m = _ctx.providers) == null ? void 0 : _m.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).providers({ class: (_n = props.ui) == null ? void 0 : _n.providers })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.providers, (provider, index) => {
                    return openBlock(), createBlock(_component_UButton, mergeProps({
                      key: index,
                      block: "",
                      color: "neutral",
                      variant: "subtle",
                      ref_for: true
                    }, provider), null, 16);
                  }), 128))
                ], 2)) : createCommentVNode("", true),
                ((_o = _ctx.providers) == null ? void 0 : _o.length) && ((_p = _ctx.fields) == null ? void 0 : _p.length) ? (openBlock(), createBlock(_component_USeparator, mergeProps({ key: 1 }, typeof _ctx.separator === "object" ? _ctx.separator : { label: _ctx.separator }, {
                  class: unref(ui).separator({ class: (_q = props.ui) == null ? void 0 : _q.separator })
                }), null, 16, ["class"])) : createCommentVNode("", true),
                ((_r = _ctx.fields) == null ? void 0 : _r.length) ? (openBlock(), createBlock(_component_UForm, {
                  key: 2,
                  ref_key: "formRef",
                  ref: formRef,
                  state,
                  schema: _ctx.schema,
                  validate: _ctx.validate,
                  "validate-on": _ctx.validateOn,
                  class: unref(ui).form({ class: (_s = props.ui) == null ? void 0 : _s.form }),
                  onSubmit: ($event) => emits("submit", $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.fields, (field) => {
                      return openBlock(), createBlock(_component_UFormField, {
                        key: field.name,
                        label: field.type === "checkbox" ? "" : field.label ?? "",
                        description: field.description,
                        help: field.help,
                        hint: field.hint,
                        name: field.name,
                        size: field.size,
                        required: field.required
                      }, createSlots({
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field }), () => [
                            field.type === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                              key: 0,
                              modelValue: state[field.name],
                              "onUpdate:modelValue": ($event) => state[field.name] = $event,
                              ref_for: true
                            }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "select" ? (openBlock(), createBlock(_component_USelectMenu, mergeProps({
                              key: 1,
                              modelValue: state[field.name],
                              "onUpdate:modelValue": ($event) => state[field.name] = $event,
                              ref_for: true
                            }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "password" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                              key: 2,
                              modelValue: state[field.name],
                              "onUpdate:modelValue": ($event) => state[field.name] = $event,
                              type: passwordVisibility.value ? "text" : "password",
                              ref_for: true
                            }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type", "required", "defaultValue"]), { ui: { root: "w-full" } }), {
                              trailing: withCtx(() => [
                                createVNode(_component_UButton, {
                                  color: "neutral",
                                  variant: "link",
                                  size: "sm",
                                  icon: passwordVisibility.value ? unref(appConfig2).ui.icons.eyeOff : unref(appConfig2).ui.icons.eye,
                                  "aria-label": passwordVisibility.value ? unref(t)("authForm.hidePassword") : unref(t)("authForm.showPassword"),
                                  "aria-pressed": passwordVisibility.value,
                                  "aria-controls": "password",
                                  onClick: ($event) => passwordVisibility.value = !passwordVisibility.value
                                }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                              ]),
                              _: 2
                            }, 1040, ["modelValue", "onUpdate:modelValue", "type"])) : (openBlock(), createBlock(_component_UInput, mergeProps({
                              key: 3,
                              modelValue: state[field.name],
                              "onUpdate:modelValue": ($event) => state[field.name] = $event,
                              ref_for: true
                            }, unref(omit)(field, ["label", "description", "help", "hint", "size", "required", "defaultValue"]), { ui: { root: "w-full" } }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                          ])
                        ]),
                        _: 2
                      }, [
                        !!slots[`${field.name}-label`] ? {
                          name: "label",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-label`)
                          ]),
                          key: "0"
                        } : void 0,
                        !!slots[`${field.name}-description`] ? {
                          name: "description",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-description`)
                          ]),
                          key: "1"
                        } : void 0,
                        !!slots[`${field.name}-hint`] ? {
                          name: "hint",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-hint`)
                          ]),
                          key: "2"
                        } : void 0,
                        !!slots[`${field.name}-help`] ? {
                          name: "help",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-help`)
                          ]),
                          key: "3"
                        } : void 0,
                        !!slots[`${field.name}-error`] ? {
                          name: "error",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, `${field.name}-error`)
                          ]),
                          key: "4"
                        } : void 0
                      ]), 1032, ["label", "description", "help", "hint", "name", "size", "required"]);
                    }), 128)),
                    !!slots.validation ? renderSlot(_ctx.$slots, "validation", { key: 0 }) : createCommentVNode("", true),
                    createVNode(_component_UButton, mergeProps({
                      type: "submit",
                      label: unref(t)("authForm.submit"),
                      block: ""
                    }, _ctx.submit), null, 16, ["label"])
                  ]),
                  _: 3
                }, 8, ["state", "schema", "validate", "validate-on", "class", "onSubmit"])) : createCommentVNode("", true)
              ], 2),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: unref(ui).footer({ class: (_t = props.ui) == null ? void 0 : _t.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$4, { __name: "UAuthForm" });

const theme = {
  "slots": {
    "root": "relative overflow-hidden w-full rounded-[calc(var(--ui-radius)*2)] p-4 flex gap-2.5",
    "wrapper": "min-w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium",
    "description": "text-sm opacity-90",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex flex-wrap gap-1.5 shrink-0",
    "close": "p-0"
  },
  "variants": {
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
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-primary) text-(--ui-bg)"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-secondary) text-(--ui-bg)"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-success) text-(--ui-bg)"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-info) text-(--ui-bg)"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-warning) text-(--ui-bg)"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-error) text-(--ui-bg)"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error)"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "root": "text-(--ui-bg) bg-(--ui-bg-inverted)"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border)"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 ring ring-inset ring-(--ui-border-accented)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid"
  }
};

var _a;
const appConfigAlert = _appConfig;
const alert = tv$1({ extend: tv$1(theme), ...((_a = appConfigAlert.ui) == null ? void 0 : _a.alert) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    icon: {},
    avatar: {},
    color: {},
    variant: {},
    orientation: { default: "vertical" },
    actions: {},
    close: { type: [Boolean, Object] },
    closeIcon: {},
    class: {},
    ui: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = computed(() => alert({
      color: props.color,
      variant: props.variant,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a4, _b2, _c2;
              if (_ctx.avatar) {
                _push2(ssrRenderComponent(UAvatar, mergeProps({
                  size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                }, _ctx.avatar, {
                  class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                }), null, _parent2, _scopeId));
              } else if (_ctx.icon) {
                _push2(ssrRenderComponent(__nuxt_component_4, {
                  name: _ctx.icon,
                  class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_b = props.ui) == null ? void 0 : _b.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c = props.ui) == null ? void 0 : _c.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.orientation === "vertical" && ((_d = _ctx.actions) == null ? void 0 : _d.length)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_e = props.ui) == null ? void 0 : _e.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.actions, (action, index) => {
                  _push2(ssrRenderComponent(__nuxt_component_5$1, mergeProps({
                    key: index,
                    size: "xs",
                    ref_for: true
                  }, action), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.orientation === "horizontal" && ((_f = _ctx.actions) == null ? void 0 : _f.length) || _ctx.close) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_g = props.ui) == null ? void 0 : _g.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (_ctx.orientation === "horizontal" && ((_h = _ctx.actions) == null ? void 0 : _h.length)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(_ctx.actions, (action, index) => {
                    _push2(ssrRenderComponent(__nuxt_component_5$1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                var _a4;
                if (_ctx.close) {
                  _push2(ssrRenderComponent(__nuxt_component_5$1, mergeProps({
                    icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                    size: "md",
                    color: "neutral",
                    variant: "link",
                    "aria-label": unref(t)("alert.close")
                  }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                    class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b2, _c2;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                  }), null, 16, ["size", "class"])) : _ctx.icon ? (openBlock(), createBlock(__nuxt_component_4, {
                    key: 1,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.title({ class: (_j = props.ui) == null ? void 0 : _j.title })
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(_ctx.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.description({ class: (_k = props.ui) == null ? void 0 : _k.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.orientation === "vertical" && ((_l = _ctx.actions) == null ? void 0 : _l.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: (_m = props.ui) == null ? void 0 : _m.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                      return openBlock(), createBlock(__nuxt_component_5$1, mergeProps({
                        key: index,
                        size: "xs",
                        ref_for: true
                      }, action), null, 16);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.orientation === "horizontal" && ((_n = _ctx.actions) == null ? void 0 : _n.length) || _ctx.close ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: (_o = props.ui) == null ? void 0 : _o.actions, orientation: "horizontal" })
              }, [
                _ctx.orientation === "horizontal" && ((_p = _ctx.actions) == null ? void 0 : _p.length) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                    return openBlock(), createBlock(__nuxt_component_5$1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, 16);
                  }), 128))
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                  var _a4;
                  return [
                    _ctx.close ? (openBlock(), createBlock(__nuxt_component_5$1, mergeProps({
                      key: 0,
                      icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                      size: "md",
                      color: "neutral",
                      variant: "link",
                      "aria-label": unref(t)("alert.close")
                    }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                      class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                      onClick: ($event) => emits("update:open", false)
                    }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
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

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UAlert" });

const onNuxtReady = (callback) => {
  {
    return;
  }
};

const headSymbol = "usehead";
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}

function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      var _a;
      if (i) {
        (_a = script._cbs[key]) == null ? void 0 : _a.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  onScopeDispose(() => {
    var _a;
    (_a = script._triggerAbortController) == null ? void 0 : _a.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = (options == null ? void 0 : options.head) || injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger)) {
    const refTrigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(refTrigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off == null ? void 0 : off();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    s._statusRef.value = s.status;
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_, key, a) {
      return Reflect.get(_, key === "status" ? "_statusRef" : key, a);
    }
  });
}

function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  var _a, _b;
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, (_a = useNuxtScriptRuntimeConfig()) == null ? void 0 : _a.defaultScriptOptions);
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head || injectHead$1();
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!((_b = nuxtApp.$scripts) == null ? void 0 : _b[id]);
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}

function scriptRuntimeConfig(key) {
  return (useRuntimeConfig().public.scripts || {})[key];
}
function useRegistryScript(registryKey, optionsFn, _userOptions) {
  const scriptConfig = scriptRuntimeConfig(registryKey);
  const userOptions = Object.assign(_userOptions || {}, typeof scriptConfig === "object" ? scriptConfig : {});
  const options = optionsFn(userOptions);
  const scriptInput = defu(userOptions.scriptInput, options.scriptInput, { key: registryKey });
  const scriptOptions = Object.assign((userOptions == null ? void 0 : userOptions.scriptOptions) || {}, options.scriptOptions || {});
  const init = scriptOptions.beforeInit;
  scriptOptions.beforeInit = () => {
    init == null ? void 0 : init();
  };
  return useScript(scriptInput, scriptOptions);
}

function useScriptCloudflareTurnstile(userOptions) {
  return useRegistryScript("cloudflareTurnstile", () => ({
    scriptInput: {
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js"
    },
    scriptOptions: {
      use: () => (void 0).turnstile
    }
  }), userOptions);
}

function useScriptTriggerElement(options) {
  const { el, trigger } = options;
  const triggers = (Array.isArray(options.trigger) ? options.trigger : [options.trigger]).filter(Boolean);
  if (!trigger || triggers.includes("immediate") || triggers.includes("onNuxtReady")) {
    return "onNuxtReady";
  }
  if (triggers.some((t) => ["visibility", "visible"].includes(t))) {
    {
      return new Promise(() => {
      });
    }
  }
  const ssrAttrs = {};
  {
    triggers.forEach((trigger2) => {
      ssrAttrs[`on${trigger2}`] = `this.dataset.script_${trigger2} = true`;
    });
  }
  const p = new Promise((resolve) => {
    const target = typeof el !== "undefined" ? el : (void 0).body;
    const _ = useEventListener(
      target,
      triggers,
      () => {
        _();
        resolve(true);
      },
      { once: true, passive: true }
    );
    tryOnMounted(() => {
      watch(target, ($el) => {
        if ($el) {
          triggers.forEach((trigger2) => {
            if ($el.dataset[`script_${trigger2}`]) {
              _();
              resolve(true);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    tryOnScopeDispose(() => resolve(false));
  });
  return Object.assign(p, { ssrAttrs });
}

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NuxtTurnstile",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    trigger: { type: [String, Array, Boolean] },
    element: { default: "div" },
    siteKey: {},
    options: { default: () => ({}) },
    resetInterval: { default: 1e3 * 250 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    useRuntimeConfig().public.turnstile;
    const el = ref();
    ref(false);
    const { onLoaded } = useScriptCloudflareTurnstile({
      scriptOptions: {
        trigger: useScriptTriggerElement({ trigger: props.trigger, el })
      }
    });
    const reset = () => {
    };
    __expose({ reset });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.element), mergeProps({
        ref_key: "el",
        ref: el
      }, _attrs), null), _parent);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/turnstile/dist/runtime/components/NuxtTurnstile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "NuxtTurnstile" });

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthForm",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const errorMessage = ref("");
    const { t } = useI18n({
      useScope: "global"
    });
    const fields = [{
      name: "email",
      label: t("authform.inputs.email.label"),
      type: "text",
      placeholder: t("authform.inputs.email.placeholder"),
      size: "xl"
    }, {
      name: "password",
      label: t("authform.inputs.password.label"),
      type: "password",
      placeholder: t("authform.inputs.password.placeholder"),
      size: "xl"
    }];
    const turnstile = ref();
    const turnstileToken = ref("");
    async function onSubmit(form) {
      var _a;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.data.email)) {
        errorMessage.value = "Die E-Mail ist ungültig.";
        return;
      }
      if (form.data.password.length <= 0) {
        errorMessage.value = "Das Passwort ist ungültig.";
        return;
      }
      try {
        const response = await axios.post(
          "/api/validateTurnstile",
          {
            "token": turnstileToken.value
          }
        );
        (_a = turnstile.value) == null ? void 0 : _a.reset();
        if (!response.data.success) {
          toast.add({
            icon: "i-heroicons-exclamation-triangle",
            description: "Das CAPTCHA wurde abgelehnt. Versuche es später erneut.",
            color: "error",
            title: "CAPTCHA-Problem",
            duration: 5e3
          });
          errorMessage.value = "Das CAPTCHA wurde abgelehnt. Versuche es später erneut.";
          return;
        }
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: "Das CAPTCHA konnte nicht überprüft werden. Versuche es später erneut.",
          color: "error",
          title: "CAPTCHA-Fehler",
          duration: 5e3
        });
        errorMessage.value = "Das CAPTCHA konnte nicht überprüft werden. Versuche es später erneut.";
        return;
      }
      try {
        await axios.post("https://saci.key2host.com/api/auth/login", {
          email: form.data.email,
          password: form.data.password
        }, {
          withCredentials: true
        });
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: "Du hast dich angemeldet und wirst jetzt weitergeleitet...",
          color: "success",
          title: "Login erfolgreich",
          duration: 5e3
        });
        setTimeout(() => {
          (void 0).location.href = "https://cp.key2host.com";
        }, 5e3);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = t("authform.errorModal.wrongCred");
        } else if (error.response && error.response.status === 403) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = t("authform.errorModal.suspended");
        } else {
          console.error("Fehler bei der API-Anfrage:", error.message);
          errorMessage.value = t("authform.errorModal.err");
        }
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: errorMessage.value,
          color: "error",
          title: t("authform.errorModal.title"),
          duration: 2500
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAuthForm = __nuxt_component_0$1;
      const _component_UAlert = __nuxt_component_1;
      const _component_NuxtTurnstile = __nuxt_component_2;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_UAuthForm, mergeProps({
        fields,
        submitButton: { label: _ctx.$t("authform.inputs.submit.label") },
        validate: _ctx.validate,
        ui: { base: "text-center", footer: "text-center" },
        onSubmit
      }, _attrs), {
        validation: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(errorMessage)) {
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "error",
                icon: "i-heroicons-information-circle-20-solid",
                title: unref(errorMessage)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_NuxtTurnstile, {
              ref_key: "turnstile",
              ref: turnstile,
              modelValue: unref(turnstileToken),
              "onUpdate:modelValue": ($event) => isRef(turnstileToken) ? turnstileToken.value = $event : null,
              options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              unref(errorMessage) ? (openBlock(), createBlock(_component_UAlert, {
                key: 0,
                color: "error",
                icon: "i-heroicons-information-circle-20-solid",
                title: unref(errorMessage)
              }, null, 8, ["title"])) : createCommentVNode("", true),
              createVNode(_component_NuxtTurnstile, {
                ref_key: "turnstile",
                ref: turnstile,
                modelValue: unref(turnstileToken),
                "onUpdate:modelValue": ($event) => isRef(turnstileToken) ? turnstileToken.value = $event : null,
                options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ];
          }
        }),
        "password-hint": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/recover",
              class: "text-primary font-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("authform.resetPW"))}?`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("authform.resetPW")) + "?", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouterLink, {
                to: "/recover",
                class: "text-primary font-medium"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("authform.resetPW")) + "?", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AuthForm" });

const _imports_0 = publicAssetsURL("/video/Intro.mp4");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Anmelden",
      ogTitle: "Anmelden",
      description: "Anmelden",
      ogDescription: "Anmelden"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthForm = __nuxt_component_0;
      const _component_USeparator = __nuxt_component_1$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="flex h-full flex-col lg:flex-row"><div class="hidden lg:block w-1/2 h-full"><video${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover" autoplay playsinline muted></video></div><div class="w-full lg:w-1/2 h-full flex items-center justify-center"><div class="max-w-lg px-4 lg:px-0"><div class="text-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="Key2Host Logo" width="50" height="50" class="block lg:hidden mx-auto mb-4"><h1 class="text-4xl font-bold mb-4">Anmelden</h1><p class="text-lg mb-4"> Bitte melde dich mit deinen Zugangsdaten an, um auf dein Hosting-Dashboard zuzugreifen. </p></div>`);
      _push(ssrRenderComponent(_component_AuthForm, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, { class: "my-5" }, null, _parent));
      _push(`<div class="text-center"> Du besitzt kein Konto? `);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/sign-up",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Jetzt Konto erstellen!`);
          } else {
            return [
              createTextVNode("Jetzt Konto erstellen!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
