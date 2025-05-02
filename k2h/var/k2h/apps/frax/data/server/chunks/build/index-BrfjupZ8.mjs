import { defineComponent, ref, withAsyncContext, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSlots, computed, renderSlot, Fragment, renderList, reactive, useTemplateRef, createSlots, useId, inject, provide, readonly, resolveDynamicComponent, mergeModels, useModel, toRef, toRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useForwardPropsEmits, Primitive, ProgressRoot, ProgressIndicator, useForwardProps, Label, CheckboxRoot, CheckboxIndicator, useFilter, ComboboxGroup, ComboboxItem, ComboboxRoot, ComboboxAnchor, ComboboxTrigger, ComboboxPortal, ComboboxContent, FocusScope, ComboboxInput, ComboboxEmpty, ComboboxViewport, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxArrow } from 'reka-ui';
import { i as useToast, b as useI18n, d as useSeoMeta, J as _sfc_main$8, f as __nuxt_component_3$1, k as _sfc_main$u, _ as _sfc_main$z, G as _sfc_main$b, m as useLocale, u as useAppConfig, r as reactivePick, n as tv$1, H as useLocalePro, t as tv, l as _sfc_main$l, I as _sfc_main$c, o as omit, p as useEventBus, q as formBusInjectionKey, s as formInputsInjectionKey, v as formLoadingInjectionKey, w as formOptionsInjectionKey, x as useFormField, y as usePortal, z as useButtonGroup, A as useComponentIcons, B as createReusableTemplate, C as isArrayOfArray, D as get, E as compare, F as _sfc_main$x } from './server.mjs';
import { n as defu } from '../nitro/nitro.mjs';
import { _ as _sfc_main$a } from './Chip-BqYVcE-F.mjs';
import { _ as _sfc_main$9 } from './Alert-DBUdoNqq.mjs';
import { _ as __nuxt_component_2$1 } from './NuxtTurnstile-ChfjPKRw.mjs';
import axios from 'axios';
import { _ as _sfc_main$7 } from './Tooltip-Bc5tZYap.mjs';
import { loadStripe } from '@stripe/stripe-js';
import { u as useCartStore } from './cart-D33wMGUr.mjs';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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
import 'better-sqlite3';
import 'ipx';
import 'unhead/scripts';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const theme$4 = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-accented",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out",
    "status": "flex justify-end text-dimmed transition-[width] duration-200",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-primary",
        "steps": "text-primary"
      },
      "secondary": {
        "indicator": "bg-secondary",
        "steps": "text-secondary"
      },
      "success": {
        "indicator": "bg-success",
        "steps": "text-success"
      },
      "info": {
        "indicator": "bg-info",
        "steps": "text-info"
      },
      "warning": {
        "indicator": "bg-warning",
        "steps": "text-warning"
      },
      "error": {
        "indicator": "bg-error",
        "steps": "text-error"
      },
      "neutral": {
        "indicator": "bg-inverted",
        "steps": "text-inverted"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-muted"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};
const _sfc_main$6 = {
  __name: "UProgress",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    max: { type: [Number, Array], required: false },
    status: { type: Boolean, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    animation: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    getValueLabel: { type: Function, required: false },
    modelValue: { type: [Number, null], required: false, default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "getValueLabel", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      return {
        [props.orientation === "vertical" ? "height" : "width"]: percent.value ? `${percent.value}%` : "fit-content"
      };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.progress) || {} })({
        animation: props.animation,
        size: props.size,
        color: props.color,
        orientation: props.orientation,
        inverted: props.inverted
      });
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
            if (!isIndeterminate.value && (__props.status || !!slots.status)) {
              _push2(`<div class="${ssrRenderClass(ui.value.status({ class: (_a2 = props.ui) == null ? void 0 : _a2.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot), mergeProps(unref(rootProps), {
              max: realMax.value,
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator), {
                    class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div class="${ssrRenderClass(ui.value.steps({ class: (_c = props.ui) == null ? void 0 : _c.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.max, (step, index) => {
                var _a3;
                _push2(`<div class="${ssrRenderClass(ui.value.step({ class: (_a3 = props.ui) == null ? void 0 : _a3.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (__props.status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.status({ class: (_d = props.ui) == null ? void 0 : _d.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot), mergeProps(unref(rootProps), {
                max: realMax.value,
                class: ui.value.base({ class: (_e = props.ui) == null ? void 0 : _e.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.steps({ class: (_f = props.ui) == null ? void 0 : _f.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.max, (step, index) => {
                  var _a3;
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: ui.value.step({ class: (_a3 = props.ui) == null ? void 0 : _a3.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
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
function validateSchema(state, schema) {
  if (isStandardSchema(schema)) {
    return validateStandardSchema(state, schema);
  } else if (isJoiSchema(schema)) {
    return validateJoiSchema(state, schema);
  } else if (isYupSchema(schema)) {
    return validateYupSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
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
const theme$3 = {
  "base": ""
};
const _sfc_main$5 = {
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], required: false },
    schema: { type: null, required: false },
    state: { type: Object, required: true },
    validate: { type: Function, required: false },
    validateOn: { type: Array, required: false, default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean, required: false },
    validateOnInputDelay: { type: Number, required: false, default: 300 },
    transform: { type: Boolean, required: false, default: true },
    attach: { type: Boolean, required: false, default: true },
    loadingAuto: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    onSubmit: { type: Function, required: false }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.form) || {} });
    });
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.attach && inject(
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
        var _a;
        return {
          ...err,
          id: (err == null ? void 0 : err.name) ? (_a = inputs.value[err.name]) == null ? void 0 : _a.id : void 0
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
          var _a, _b, _c;
          const pattern = (_b = (_a = inputs.value) == null ? void 0 : _a[name]) == null ? void 0 : _b.pattern;
          return name === error.name || pattern && ((_c = error.name) == null ? void 0 : _c.match(pattern));
        }));
        const pathErrors = (await getErrors()).filter((error) => names.some((name) => {
          var _a, _b, _c;
          const pattern = (_b = (_a = inputs.value) == null ? void 0 : _a[name]) == null ? void 0 : _b.pattern;
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
      var _a;
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await ((_a = props.onSubmit) == null ? void 0 : _a.call(props, event));
        dirtyFields.clear();
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
      loading,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: ui.value({ class: props.class }),
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
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
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
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
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
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed opacity-75"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    icon: { type: String, required: false },
    indeterminateIcon: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: [String, Number, Object, null], required: false },
    id: { type: String, required: false },
    defaultValue: { type: [Boolean, String], required: false }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: [Boolean, String], ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.checkbox) || {} })({
        size: size.value,
        color: color.value,
        variant: props.variant,
        indicator: props.indicator,
        required: props.required,
        disabled: disabled.value
      });
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.variant === "list" ? __props.as : unref(Label),
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), {
                    class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3, _c2, _d2;
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$z, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$z, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$z, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$z, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_d2 = props.ui) == null ? void 0 : _d2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, {
                      default: withCtx(() => {
                        var _a4, _b3;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$z, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$z, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.variant === "list" ? unref(Label) : "p"), {
                  for: unref(id),
                  class: ui.value.label({ class: (_d = props.ui) == null ? void 0 : _d.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
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
                  default: withCtx(({ modelValue: modelValue2 }) => {
                    var _a3;
                    return [
                      createVNode(unref(CheckboxIndicator), {
                        class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b2;
                          return [
                            modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$z, {
                              key: 0,
                              name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                              class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                            }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$z, {
                              key: 1,
                              name: __props.icon || unref(appConfig).ui.icons.check,
                              class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                            }, null, 8, ["name", "class"]))
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(__props.variant === "list" ? unref(Label) : "p"), {
                  key: 0,
                  for: unref(id),
                  class: ui.value.label({ class: (_i = props.ui) == null ? void 0 : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "base": [
      "relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-dimmed",
    "arrow": "fill-default",
    "content": [
      "max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto",
      "origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"
    ],
    "viewport": "divide-y divide-default scroll-py-1",
    "group": "p-1 isolate",
    "empty": "py-2 text-center text-sm text-muted",
    "label": "font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": [
      "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemLabel": "truncate",
    "input": "border-b border-default",
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
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USelectMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { type: String, required: false },
    placeholder: { type: String, required: false },
    searchInput: { type: [Boolean, Object], required: false, default: true },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false },
    selectedIcon: { type: String, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    valueKey: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    items: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    createItem: { type: [Boolean, String, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    resetSearchTermOnBlur: { type: Boolean, required: false, default: true },
    resetSearchTermOnSelect: { type: Boolean, required: false, default: true },
    highlightOnHover: { type: Boolean, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const searchInputProps = toRef(() => defu(props.searchInput, { placeholder: t("selectMenu.search"), variant: "none" }));
    const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.selectMenu) || {} })({
        color: color.value,
        variant: props.variant,
        size: selectSize == null ? void 0 : selectSize.value,
        loading: props.loading,
        highlight: highlight.value,
        leading: isLeading.value || !!props.avatar || !!slots.leading,
        trailing: isTrailing.value || !!slots.trailing,
        buttonGroup: orientation.value
      });
    });
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
    const groups = computed(
      () => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
    );
    const items = computed(() => groups.value.flatMap((group) => group));
    const filteredGroups = computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (typeof item !== "object" || item === null) {
          return contains(String(item), searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => contains(get(item, field), searchTerm.value));
      })).filter((group) => group.filter(
        (item) => !isSelectItem(item) || (!item.type || !["label", "separator"].includes(item.type))
      ).length > 0);
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
      if (props.resetSearchTermOnSelect) {
        searchTerm.value = "";
      }
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
    function onSelect(e, item) {
      var _a;
      if (!isSelectItem(item)) {
        return;
      }
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      (_a = item.onSelect) == null ? void 0 : _a.call(item, e);
    }
    function isSelectItem(item) {
      return typeof item === "object" && item !== null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxGroup), {
              class: ui.value.group({ class: (_a = props.ui) == null ? void 0 : _a.group })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxItem), {
                    class: ui.value.item({ class: (_a2 = props.ui) == null ? void 0 : _a2.item }),
                    value: searchTerm.value,
                    onSelect: ($event) => emits("create", searchTerm.value)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemLabel }))}"${_scopeId3}>`);
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
                        var _a3;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemLabel })
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
                  var _a2;
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: (_a2 = props.ui) == null ? void 0 : _a2.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemLabel })
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
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxTrigger), {
                    class: ui.value.base({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.base] }),
                    tabindex: "0"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c, _d;
                      if (_push4) {
                        if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
                          _push4(`<span class="${ssrRenderClass(ui.value.leading({ class: (_a2 = props.ui) == null ? void 0 : _a2.leading }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a3, _b3, _c2;
                            if (unref(isLeading) && unref(leadingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$z, {
                                name: unref(leadingIconName),
                                class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (!!__props.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$x, mergeProps({
                                size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                              }, __props.avatar, {
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
                            var _a3, _b3;
                            _push4(`<!--[-->`);
                            if (displayedModelValue) {
                              _push4(`<span class="${ssrRenderClass(ui.value.value({ class: (_a3 = props.ui) == null ? void 0 : _a3.value }))}"${_scopeId3}>${ssrInterpolate(displayedModelValue)}</span>`);
                            } else {
                              _push4(`<span class="${ssrRenderClass(ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder }))}"${_scopeId3}>${ssrInterpolate(__props.placeholder ?? " ")}</span>`);
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
                            var _a3;
                            if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$z, {
                                name: unref(trailingIconName),
                                class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
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
                          unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a3, _b3, _c2;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, __props.avatar, {
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
                              var _a3, _b3;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a3 = props.ui) == null ? void 0 : _a3.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                                }, toDisplayString(__props.placeholder ?? " "), 3))
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
                              var _a3;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_b = props.ui) == null ? void 0 : _b.base] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_a2 = props.ui) == null ? void 0 : _a2.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a3, _b3, _c;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, __props.avatar, {
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
                              var _a3, _b3;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a3 = props.ui) == null ? void 0 : _a3.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                                }, toDisplayString(__props.placeholder ?? " "), 3))
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
                              var _a3;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(trailingIconName),
                                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
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
            _push2(ssrRenderComponent(unref(ComboboxPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    class: ui.value.content({ class: (_a = props.ui) == null ? void 0 : _a.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(FocusScope), {
                          trapped: "",
                          class: ui.value.focusScope({ class: (_a2 = props.ui) == null ? void 0 : _a2.focusScope })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a3, _b3, _c2, _d2;
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push5, _parent5, _scopeId4);
                              if (!!__props.searchInput) {
                                _push5(ssrRenderComponent(unref(ComboboxInput), {
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    var _a4, _b4;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$b, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$b, mergeProps({
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
                                class: ui.value.empty({ class: (_a3 = props.ui) == null ? void 0 : _a3.empty })
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
                                      var _a4;
                                      _push6(ssrRenderComponent(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(group, (item, index) => {
                                              var _a5, _b4, _c3;
                                              _push7(`<!--[-->`);
                                              if (isSelectItem(item) && item.type === "label") {
                                                _push7(ssrRenderComponent(unref(ComboboxLabel), {
                                                  class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
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
                                              } else if (isSelectItem(item) && item.type === "separator") {
                                                _push7(ssrRenderComponent(unref(ComboboxSeparator), {
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(unref(ComboboxItem), {
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: isSelectItem(item) && item.disabled,
                                                  value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: ($event) => onSelect($event, item)
                                                }, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      ssrRenderSlot(_ctx.$slots, "item", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a6, _b5;
                                                        ssrRenderSlot(_ctx.$slots, "item-leading", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a7, _b6, _c4, _d3, _e;
                                                          if (isSelectItem(item) && item.icon) {
                                                            _push8(ssrRenderComponent(_sfc_main$z, {
                                                              name: item.icon,
                                                              class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                            }, null, _parent8, _scopeId7));
                                                          } else if (isSelectItem(item) && item.avatar) {
                                                            _push8(ssrRenderComponent(_sfc_main$x, mergeProps({
                                                              size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                              ref_for: true
                                                            }, item.avatar, {
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, _parent8, _scopeId7));
                                                          } else if (isSelectItem(item) && item.chip) {
                                                            _push8(ssrRenderComponent(_sfc_main$a, mergeProps({
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
                                                        _push8(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          _push8(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, props.labelKey) : item)}`);
                                                        }, _push8, _parent8, _scopeId7);
                                                        _push8(`</span><span class="${ssrRenderClass(ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }, null, _push8, _parent8, _scopeId7);
                                                        _push8(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                            var _a7, _b6;
                                                            if (_push9) {
                                                              _push9(ssrRenderComponent(_sfc_main$z, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
                                                              }, null, _parent9, _scopeId8));
                                                            } else {
                                                              return [
                                                                createVNode(_sfc_main$z, {
                                                                  name: __props.selectedIcon || unref(appConfig).ui.icons.check,
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
                                                          var _a6, _b5;
                                                          return [
                                                            renderSlot(_ctx.$slots, "item-leading", {
                                                              item,
                                                              index
                                                            }, () => {
                                                              var _a7, _b6, _c4, _d3, _e;
                                                              return [
                                                                isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                                  key: 0,
                                                                  name: item.icon,
                                                                  class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                                }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                                  key: 1,
                                                                  size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                                  ref_for: true
                                                                }, item.avatar, {
                                                                  class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                                }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                              class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                            }, [
                                                              renderSlot(_ctx.$slots, "item-label", {
                                                                item,
                                                                index
                                                              }, () => [
                                                                createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                                  var _a7;
                                                                  return [
                                                                    createVNode(_sfc_main$z, {
                                                                      name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                      class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                                var _a5, _b4, _c3;
                                                return openBlock(), createBlock(Fragment, {
                                                  key: `group-${groupIndex}-${index}`
                                                }, [
                                                  isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                    key: 0,
                                                    class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                    key: 1,
                                                    class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                  }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                    key: 2,
                                                    class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                    disabled: isSelectItem(item) && item.disabled,
                                                    value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                    onSelect: ($event) => onSelect($event, item)
                                                  }, {
                                                    default: withCtx(() => [
                                                      renderSlot(_ctx.$slots, "item", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a6, _b5;
                                                        return [
                                                          renderSlot(_ctx.$slots, "item-leading", {
                                                            item,
                                                            index
                                                          }, () => {
                                                            var _a7, _b6, _c4, _d3, _e;
                                                            return [
                                                              isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                                key: 0,
                                                                name: item.icon,
                                                                class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                              }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                                key: 1,
                                                                size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                                ref_for: true
                                                              }, item.avatar, {
                                                                class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                              }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                            class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                          }, [
                                                            renderSlot(_ctx.$slots, "item-label", {
                                                              item,
                                                              index
                                                            }, () => [
                                                              createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                                var _a7;
                                                                return [
                                                                  createVNode(_sfc_main$z, {
                                                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                    class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                        var _a4;
                                        return openBlock(), createBlock(unref(ComboboxGroup), {
                                          key: `group-${groupIndex}`,
                                          class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                              var _a5, _b4, _c3;
                                              return openBlock(), createBlock(Fragment, {
                                                key: `group-${groupIndex}-${index}`
                                              }, [
                                                isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                  key: 0,
                                                  class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                  key: 1,
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                  key: 2,
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: isSelectItem(item) && item.disabled,
                                                  value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: ($event) => onSelect($event, item)
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item", {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a6, _b5;
                                                      return [
                                                        renderSlot(_ctx.$slots, "item-leading", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a7, _b6, _c4, _d3, _e;
                                                          return [
                                                            isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                              key: 0,
                                                              name: item.icon,
                                                              class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                            }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                              key: 1,
                                                              size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                              ref_for: true
                                                            }, item.avatar, {
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                          class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                        }, [
                                                          renderSlot(_ctx.$slots, "item-label", {
                                                            item,
                                                            index
                                                          }, () => [
                                                            createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                              var _a7;
                                                              return [
                                                                createVNode(_sfc_main$z, {
                                                                  name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                  class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                              ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode(_sfc_main$b, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
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
                                      var _a4;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a5, _b4, _c3;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                disabled: isSelectItem(item) && item.disabled,
                                                value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                onSelect: ($event) => onSelect($event, item)
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a6, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b6, _c4, _d3, _e;
                                                        return [
                                                          isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                        class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                            var _a7;
                                                            return [
                                                              createVNode(_sfc_main$z, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                }, 8, ["class"]),
                                renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!__props.arrow) {
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
                              var _a3, _b3;
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode(_sfc_main$b, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a3 = props.ui) == null ? void 0 : _a3.empty })
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
                                      var _a4;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a5, _b4, _c2;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                                disabled: isSelectItem(item) && item.disabled,
                                                value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                onSelect: ($event) => onSelect($event, item)
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a6, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b6, _c3, _d2, _e;
                                                        return [
                                                          isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                        class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                            var _a7;
                                                            return [
                                                              createVNode(_sfc_main$z, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                }, 8, ["class"]),
                                renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
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
                        var _a2, _b2;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a2 = props.ui) == null ? void 0 : _a2.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a3, _b3;
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode(_sfc_main$b, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a3 = props.ui) == null ? void 0 : _a3.empty })
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
                                      var _a4;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a5, _b4, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: isSelectItem(item) && item.disabled,
                                                value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                onSelect: ($event) => onSelect($event, item)
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a6, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b6, _c2, _d, _e;
                                                        return [
                                                          isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                        class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                            var _a7;
                                                            return [
                                                              createVNode(_sfc_main$z, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                }, 8, ["class"]),
                                renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
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
                  var _a;
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.base] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => {
                        var _a2, _b;
                        return [
                          unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: (_a2 = props.ui) == null ? void 0 : _a2.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a3, _b2, _c;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                }, __props.avatar, {
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
                              var _a3, _b2;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a3 = props.ui) == null ? void 0 : _a3.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b2 = props.ui) == null ? void 0 : _b2.placeholder })
                                }, toDisplayString(__props.placeholder ?? " "), 3))
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
                              var _a3;
                              return [
                                unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(trailingIconName),
                                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
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
              createVNode(unref(ComboboxPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: (_a = props.ui) == null ? void 0 : _a.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a2, _b;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a2 = props.ui) == null ? void 0 : _a2.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a3, _b2;
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode(_sfc_main$b, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a3 = props.ui) == null ? void 0 : _a3.empty })
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
                                      var _a4;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a4 = props.ui) == null ? void 0 : _a4.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a5, _b3, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a5 = props.ui) == null ? void 0 : _a5.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: isSelectItem(item) && item.disabled,
                                                value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                                onSelect: ($event) => onSelect($event, item)
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a6, _b4;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b5, _c2, _d, _e;
                                                        return [
                                                          isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                                            key: 1,
                                                            size: ((_b5 = props.ui) == null ? void 0 : _b5.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
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
                                                        class: ui.value.itemLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
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
                                                            var _a7;
                                                            return [
                                                              createVNode(_sfc_main$z, {
                                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemTrailingIcon })
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
                                }, 8, ["class"]),
                                renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b = props.ui) == null ? void 0 : _b.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "w-full space-y-6",
    "header": "flex flex-col text-center",
    "leading": "mb-2",
    "leadingIcon": "size-8 shrink-0",
    "title": "text-xl text-pretty font-semibold text-highlighted",
    "description": "mt-1 text-base text-pretty text-muted",
    "body": "gap-y-6 flex flex-col",
    "providers": "space-y-3",
    "separator": "",
    "form": "space-y-5",
    "footer": "text-sm text-center text-muted mt-2"
  }
};
const _sfc_main$2 = {
  __name: "UAuthForm",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    icon: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    fields: { type: Array, required: false },
    providers: { type: Array, required: false },
    separator: { type: null, required: false, default: "or" },
    submit: { type: null, required: false },
    schema: { type: null, required: false },
    validate: { type: null, required: false },
    validateOn: { type: null, required: false },
    validateOnInputDelay: { type: null, required: false },
    disabled: { type: null, required: false },
    loading: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
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
    const { t } = useLocalePro();
    const appConfig = useAppConfig();
    const formRef = useTemplateRef("formRef");
    const passwordVisibility = ref(false);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.authForm) || {} })();
    });
    __expose({
      formRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$z;
      const _component_UButton = _sfc_main$u;
      const _component_USeparator = _sfc_main$l;
      const _component_UForm = _sfc_main$5;
      const _component_UFormField = _sfc_main$c;
      const _component_UCheckbox = _sfc_main$4;
      const _component_USelectMenu = _sfc_main$3;
      const _component_UInput = _sfc_main$b;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            if (__props.icon || !!slots.icon || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a3, _b2, _c2;
                if (__props.icon || !!slots.leading) {
                  _push2(`<div class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                    var _a4;
                    if (__props.icon) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: __props.icon,
                        class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.title || !!slots.title) {
                  _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push2(`${ssrInterpolate(__props.title)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.description || !!slots.description) {
                  _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                    _push2(`${ssrInterpolate(__props.description)}`);
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
            _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
            if ((_c = __props.providers) == null ? void 0 : _c.length) {
              _push2(`<div class="${ssrRenderClass(ui.value.providers({ class: (_d = props.ui) == null ? void 0 : _d.providers }))}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.providers, (provider, index) => {
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
            if (((_e = __props.providers) == null ? void 0 : _e.length) && ((_f = __props.fields) == null ? void 0 : _f.length)) {
              _push2(ssrRenderComponent(_component_USeparator, mergeProps(typeof __props.separator === "object" ? __props.separator : { label: __props.separator }, {
                class: ui.value.separator({ class: (_g = props.ui) == null ? void 0 : _g.separator })
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_h = __props.fields) == null ? void 0 : _h.length) {
              _push2(ssrRenderComponent(_component_UForm, {
                ref_key: "formRef",
                ref: formRef,
                state,
                schema: __props.schema,
                validate: __props.validate,
                "validate-on": __props.validateOn,
                class: ui.value.form({ class: (_i = props.ui) == null ? void 0 : _i.form }),
                disabled: __props.disabled,
                onSubmit: ($event) => emits("submit", $event)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.fields, (field) => {
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
                                        icon: passwordVisibility.value ? unref(appConfig).ui.icons.eyeOff : unref(appConfig).ui.icons.eye,
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
                                          icon: passwordVisibility.value ? unref(appConfig).ui.icons.eyeOff : unref(appConfig).ui.icons.eye,
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
                                      icon: passwordVisibility.value ? unref(appConfig).ui.icons.eyeOff : unref(appConfig).ui.icons.eye,
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
                      block: "",
                      loading: __props.loading
                    }, __props.submit), null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.fields, (field) => {
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
                                    icon: passwordVisibility.value ? unref(appConfig).ui.icons.eyeOff : unref(appConfig).ui.icons.eye,
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
                        block: "",
                        loading: __props.loading
                      }, __props.submit), null, 16, ["label", "loading"])
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
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_j = props.ui) == null ? void 0 : _j.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon || !!slots.icon || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_k = props.ui) == null ? void 0 : _k.header })
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => {
                  var _a3, _b2, _c2;
                  return [
                    __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {}, () => {
                        var _a4;
                        return [
                          __props.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: __props.icon,
                            class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                    }, [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(__props.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.body({ class: (_l = props.ui) == null ? void 0 : _l.body })
              }, [
                ((_m = __props.providers) == null ? void 0 : _m.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.providers({ class: (_n = props.ui) == null ? void 0 : _n.providers })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.providers, (provider, index) => {
                    return openBlock(), createBlock(_component_UButton, mergeProps({
                      key: index,
                      block: "",
                      color: "neutral",
                      variant: "subtle",
                      ref_for: true
                    }, provider), null, 16);
                  }), 128))
                ], 2)) : createCommentVNode("", true),
                ((_o = __props.providers) == null ? void 0 : _o.length) && ((_p = __props.fields) == null ? void 0 : _p.length) ? (openBlock(), createBlock(_component_USeparator, mergeProps({ key: 1 }, typeof __props.separator === "object" ? __props.separator : { label: __props.separator }, {
                  class: ui.value.separator({ class: (_q = props.ui) == null ? void 0 : _q.separator })
                }), null, 16, ["class"])) : createCommentVNode("", true),
                ((_r = __props.fields) == null ? void 0 : _r.length) ? (openBlock(), createBlock(_component_UForm, {
                  key: 2,
                  ref_key: "formRef",
                  ref: formRef,
                  state,
                  schema: __props.schema,
                  validate: __props.validate,
                  "validate-on": __props.validateOn,
                  class: ui.value.form({ class: (_s = props.ui) == null ? void 0 : _s.form }),
                  disabled: __props.disabled,
                  onSubmit: ($event) => emits("submit", $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.fields, (field) => {
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
                                  icon: passwordVisibility.value ? unref(appConfig).ui.icons.eyeOff : unref(appConfig).ui.icons.eye,
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
                      block: "",
                      loading: __props.loading
                    }, __props.submit), null, 16, ["label", "loading"])
                  ]),
                  _: 3
                }, 8, ["state", "schema", "validate", "validate-on", "class", "disabled", "onSubmit"])) : createCommentVNode("", true)
              ], 2),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.footer({ class: (_t = props.ui) == null ? void 0 : _t.footer })
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
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
      placeholder: t("authform.inputs.email.placeholder")
    }, {
      name: "password",
      label: t("authform.inputs.password.label"),
      type: "password",
      placeholder: t("authform.inputs.password.placeholder")
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
        (void 0).location.reload();
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
          duration: 2500,
          title: t("authform.errorModal.title")
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAuthForm = _sfc_main$2;
      const _component_UAlert = _sfc_main$9;
      const _component_NuxtTurnstile = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UAuthForm, mergeProps({
        fields,
        submit: { label: _ctx.$t("authform.inputs.submit.label") },
        title: _ctx.$t("authform.title"),
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
            _push2(`<a href="https://auth.key2host.com/recover" target="_blank" class="text-primary font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("authform.resetPW"))}?</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://auth.key2host.com/recover",
                target: "_blank",
                class: "text-primary font-medium"
              }, toDisplayString(_ctx.$t("authform.resetPW")) + "?", 1)
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
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AuthForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const step = ref(1);
    const userName = ref("");
    const stripePromise = loadStripe("pk_test_51QslnTCh2zruBO1L6TygyC6pozDvJ8LtsSTArhoWDmriYwZqk6I9a25CyjvP9IovXAgUBtgUpKlrxTfeB8j7bbWp00PzBrxeFI");
    const stripe = ([__temp, __restore] = withAsyncContext(() => stripePromise), __temp = await __temp, __restore(), __temp);
    const toast = useToast();
    const cart = useCartStore();
    const { t } = useI18n({
      useScope: "global"
    });
    const voucherCode = ref("");
    const voucherLoading = ref(false);
    function iconForType(type) {
      switch (type) {
        case "webspace":
          return "i-heroicons-cloud";
        case "domain":
          return "i-heroicons-at-symbol";
        case "vps":
        case "root":
          return "i-heroicons-server";
        case "dedicated":
          return "i-heroicons-server-stack";
        case "lic":
          return "i-heroicons-key";
        default:
          return "i-heroicons-question-mark-circle";
      }
    }
    function capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    async function submitVoucher() {
      voucherLoading.value = true;
      const voucher = voucherCode.value;
      try {
        const response = await axios.post(
          "https://saci.key2host.com/api/vouchers/check",
          { code: voucher },
          { withCredentials: true }
        );
        const voucherID = response.data.id;
        const voucherName = response.data.name;
        const voucherAmount = response.data.amount_off;
        const voucherPercent = response.data.percent_off;
        cart.addVoucher({ id: voucherID, name: voucherName, amount: voucherAmount, percent: voucherPercent });
        toast.add({
          icon: "i-heroicons-check-circle",
          title: "Gutschein eingelöst",
          description: "Der Gutschein wurde akzeptiert und beim bezahlen eingelöst.",
          color: "success",
          duration: 2500
        });
      } catch (error) {
        toast.add({
          icon: "i-heroicons-x-circle",
          title: "Ungültiger Gutschein",
          description: "Der Gutschein wurde nicht akzeptiert, da dieser ungültig ist.",
          color: "error",
          duration: 2500
        });
      }
      voucherLoading.value = false;
    }
    async function buy() {
      var _a;
      step.value = 3;
      try {
        const payload = {
          item: cart.item,
          ...((_a = cart.voucher) == null ? void 0 : _a.id) && { voucher: cart.voucher.id }
        };
        const response = await axios.post(
          "https://saci.key2host.com/api/orders/",
          payload,
          { withCredentials: true }
        );
        const id = response.data.id;
        const result = await stripe.redirectToCheckout({
          sessionId: id
        });
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("checkout.index.errorModal.description"),
          color: "error",
          title: t("checkout.index.errorModal.title"),
          duration: 5e3
        });
        setTimeout(() => {
          history.back();
        }, 5e3);
      }
    }
    async function fetchData() {
      try {
        const response = await axios.get("https://saci.key2host.com/api/auth/hello/", {
          withCredentials: true
        });
        if (response.data.user && response.data.user.fullname) {
          userName.value = response.data.user.fullname;
        }
        step.value = 2;
      } catch (error) {
      }
    }
    fetchData();
    useSeoMeta({
      title: t("checkout.index.title"),
      ogTitle: t("checkout.index.title"),
      description: t("checkout.index.description"),
      ogDescription: t("checkout.index.description"),
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UProgress = _sfc_main$6;
      const _component_UCard = _sfc_main$8;
      const _component_AuthForm = __nuxt_component_2;
      const _component_NuxtLinkLocale = __nuxt_component_3$1;
      const _component_UButton = _sfc_main$u;
      const _component_UIcon = _sfc_main$z;
      const _component_UTooltip = _sfc_main$7;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-wrap justify-center gap-4 my-10 max-sm:max-w-[425px] max-md:max-w-[700px] max-lg:max-w-[900px] mx-auto" }, _attrs))}><div class="w-full max-w-6xl">`);
      if (unref(step) != 3) {
        _push(ssrRenderComponent(_component_UProgress, {
          modelValue: unref(step),
          "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
          max: 3
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UProgress, { animation: "carousel" }, null, _parent));
      }
      if (unref(step) == 1) {
        _push(ssrRenderComponent(_component_UCard, { class: "mt-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.1.title"))}</p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.1.description"))}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("checkout.index.steps.1.title")), 1),
                createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("checkout.index.steps.1.description")), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col md:flex-row gap-6"${_scopeId}><div class="w-full md:w-1/2 flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AuthForm, null, null, _parent2, _scopeId));
              _push2(`</div><div class="hidden md:block w-px bg-gray-300 dark:bg-gray-600"${_scopeId}></div><div class="w-full md:w-1/2 flex flex-col items-center justify-center text-center"${_scopeId}><h1 class="text-2xl"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.1.noaccount.title"))}</h1><p class="mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.1.noaccount.description"))}</p>`);
              _push2(ssrRenderComponent(_component_NuxtLinkLocale, {
                to: "https://auth.key2host.com/sign-up",
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, { class: "mt-4 w-full max-w-xs flex items-center justify-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("checkout.index.steps.1.noaccount.actions.createAccount"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("checkout.index.steps.1.noaccount.actions.createAccount")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, { class: "mt-4 w-full max-w-xs flex items-center justify-center" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("checkout.index.steps.1.noaccount.actions.createAccount")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col md:flex-row gap-6" }, [
                  createVNode("div", { class: "w-full md:w-1/2 flex justify-center" }, [
                    createVNode(_component_AuthForm)
                  ]),
                  createVNode("div", { class: "hidden md:block w-px bg-gray-300 dark:bg-gray-600" }),
                  createVNode("div", { class: "w-full md:w-1/2 flex flex-col items-center justify-center text-center" }, [
                    createVNode("h1", { class: "text-2xl" }, toDisplayString(_ctx.$t("checkout.index.steps.1.noaccount.title")), 1),
                    createVNode("p", { class: "mt-1" }, toDisplayString(_ctx.$t("checkout.index.steps.1.noaccount.description")), 1),
                    createVNode(_component_NuxtLinkLocale, {
                      to: "https://auth.key2host.com/sign-up",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, { class: "mt-4 w-full max-w-xs flex items-center justify-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("checkout.index.steps.1.noaccount.actions.createAccount")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(step) == 2) {
        _push(ssrRenderComponent(_component_UCard, { class: "mt-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-between items-center"${_scopeId}><div${_scopeId}><p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId}> Warenkorb </p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Überprüfe ob deine Bestellung korrekt ist. </p></div>`);
              if (!unref(cart).isEmpty) {
                _push2(ssrRenderComponent(_component_UButton, {
                  onClick: ($event) => unref(cart).clearAll(),
                  size: "md",
                  color: "error",
                  variant: "ghost",
                  icon: "i-heroicons-trash"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Warenkorb "),
                    createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Überprüfe ob deine Bestellung korrekt ist. ")
                  ]),
                  !unref(cart).isEmpty ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    onClick: ($event) => unref(cart).clearAll(),
                    size: "md",
                    color: "error",
                    variant: "ghost",
                    icon: "i-heroicons-trash"
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(cart).isEmpty) {
                _push2(`<div class="flex items-center justify-center bg-gray-100 rounded-md"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.isEmpty"))}. </div></div>`);
              } else {
                _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 flex flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UCard, { class: "flex flex-col justify-center" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-4 items-center justify-center"${_scopeId2}><div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-gray-50"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: iconForType(unref(cart).item.type),
                        class: "w-10 h-10 text-gray-600"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="flex-1"${_scopeId2}><div class="flex justify-between text-base font-medium"${_scopeId2}><h3 class="truncate"${_scopeId2}>${ssrInterpolate(unref(cart).item.name)}</h3><p class="ml-4"${_scopeId2}>${ssrInterpolate(unref(cart).item.amount.toFixed(2))} €</p></div><p class="mt-1 text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(capitalize(unref(cart).item.type))}</p></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-4 items-center justify-center" }, [
                          createVNode("div", { class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-gray-50" }, [
                            createVNode(_component_UIcon, {
                              name: iconForType(unref(cart).item.type),
                              class: "w-10 h-10 text-gray-600"
                            }, null, 8, ["name"])
                          ]),
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", { class: "flex justify-between text-base font-medium" }, [
                              createVNode("h3", { class: "truncate" }, toDisplayString(unref(cart).item.name), 1),
                              createVNode("p", { class: "ml-4" }, toDisplayString(unref(cart).item.amount.toFixed(2)) + " €", 1)
                            ]),
                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(capitalize(unref(cart).item.type)), 1)
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UCard, { class: "h-full flex flex-col justify-between" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}><h2 class="text-lg font-medium mb-2"${_scopeId2}>Preisübersicht</h2><div class="flex justify-between mt-2"${_scopeId2}><span${_scopeId2}>Zwischensumme:</span><span${_scopeId2}>${ssrInterpolate(unref(cart).subTotalPrice)} €</span></div>`);
                      if (unref(cart).voucher) {
                        _push3(`<div${_scopeId2}><hr class="my-2"${_scopeId2}><div class="flex justify-between mt-2"${_scopeId2}><span class="flex items-center gap-2"${_scopeId2}> Gutscheincode `);
                        _push3(ssrRenderComponent(_component_UButton, {
                          onClick: ($event) => unref(cart).clearVoucher(),
                          size: "xs",
                          color: "error",
                          variant: "ghost",
                          icon: "i-heroicons-trash"
                        }, null, _parent3, _scopeId2));
                        _push3(`</span>`);
                        if (unref(cart).voucher.amount) {
                          _push3(`<span${_scopeId2}> - ${ssrInterpolate((unref(cart).voucher.amount / 100).toFixed(2))} € </span>`);
                        } else if (unref(cart).voucher.percent) {
                          _push3(`<span${_scopeId2}> - ${ssrInterpolate(unref(cart).voucher.percent)} % </span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div><small class="opacity-75"${_scopeId2}>${ssrInterpolate(unref(cart).voucher.name)}</small></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<hr class="my-2"${_scopeId2}><div class="flex justify-between font-semibold"${_scopeId2}><span${_scopeId2}>Gesamt:</span><span${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UTooltip, {
                        text: "Preise inkl. gesetzl. USt.",
                        delay: 0,
                        placement: "top"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help"${_scopeId3}>${ssrInterpolate(unref(cart).totalPrice)} € </span>`);
                          } else {
                            return [
                              createVNode("span", { class: "underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help" }, toDisplayString(unref(cart).totalPrice) + " € ", 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</span></div></div><div class="mt-4"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        disabled: unref(cart).isEmpty,
                        onClick: ($event) => buy(),
                        color: "neutral",
                        label: "Zur Bezahlung",
                        icon: "i-heroicons-shopping-cart",
                        trailing: "",
                        size: "xl",
                        block: "",
                        class: { "disabled:cursor-not-allowed": unref(cart).isEmpty },
                        autofocus: ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-lg font-medium mb-2" }, "Preisübersicht"),
                          createVNode("div", { class: "flex justify-between mt-2" }, [
                            createVNode("span", null, "Zwischensumme:"),
                            createVNode("span", null, toDisplayString(unref(cart).subTotalPrice) + " €", 1)
                          ]),
                          unref(cart).voucher ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("hr", { class: "my-2" }),
                            createVNode("div", { class: "flex justify-between mt-2" }, [
                              createVNode("span", { class: "flex items-center gap-2" }, [
                                createTextVNode(" Gutscheincode "),
                                createVNode(_component_UButton, {
                                  onClick: ($event) => unref(cart).clearVoucher(),
                                  size: "xs",
                                  color: "error",
                                  variant: "ghost",
                                  icon: "i-heroicons-trash"
                                }, null, 8, ["onClick"])
                              ]),
                              unref(cart).voucher.amount ? (openBlock(), createBlock("span", { key: 0 }, " - " + toDisplayString((unref(cart).voucher.amount / 100).toFixed(2)) + " € ", 1)) : unref(cart).voucher.percent ? (openBlock(), createBlock("span", { key: 1 }, " - " + toDisplayString(unref(cart).voucher.percent) + " % ", 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("small", { class: "opacity-75" }, toDisplayString(unref(cart).voucher.name), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("hr", { class: "my-2" }),
                          createVNode("div", { class: "flex justify-between font-semibold" }, [
                            createVNode("span", null, "Gesamt:"),
                            createVNode("span", null, [
                              createVNode(_component_UTooltip, {
                                text: "Preise inkl. gesetzl. USt.",
                                delay: 0,
                                placement: "top"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help" }, toDisplayString(unref(cart).totalPrice) + " € ", 1)
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_component_UButton, {
                            disabled: unref(cart).isEmpty,
                            onClick: ($event) => buy(),
                            color: "neutral",
                            label: "Zur Bezahlung",
                            icon: "i-heroicons-shopping-cart",
                            trailing: "",
                            size: "xl",
                            block: "",
                            class: { "disabled:cursor-not-allowed": unref(cart).isEmpty },
                            autofocus: ""
                          }, null, 8, ["disabled", "onClick", "class"])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<form class="mt-6 flex flex-col items-center w-full"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormGroup, {
                  ui: { container: "mt-3" },
                  class: "text-center w-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: unref(voucherCode),
                        "onUpdate:modelValue": ($event) => isRef(voucherCode) ? voucherCode.value = $event : null,
                        type: "text",
                        placeholder: "Gebe dein Gutscheincode ein",
                        required: "",
                        size: "xl",
                        autocomplete: "off",
                        class: "w-full",
                        disabled: unref(voucherLoading)
                      }, {
                        trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UButton, {
                              type: "submit",
                              size: "xs",
                              class: "rounded-full",
                              icon: "i-heroicons-check-circle",
                              loading: unref(voucherLoading)
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                class: "rounded-full",
                                icon: "i-heroicons-check-circle",
                                loading: unref(voucherLoading)
                              }, null, 8, ["loading"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(voucherCode),
                          "onUpdate:modelValue": ($event) => isRef(voucherCode) ? voucherCode.value = $event : null,
                          type: "text",
                          placeholder: "Gebe dein Gutscheincode ein",
                          required: "",
                          size: "xl",
                          autocomplete: "off",
                          class: "w-full",
                          disabled: unref(voucherLoading)
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UButton, {
                              type: "submit",
                              size: "xs",
                              class: "rounded-full",
                              icon: "i-heroicons-check-circle",
                              loading: unref(voucherLoading)
                            }, null, 8, ["loading"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</form></div></div>`);
              }
            } else {
              return [
                unref(cart).isEmpty ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-center bg-gray-100 rounded-md"
                }, [
                  createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, toDisplayString(_ctx.$t("cart.isEmpty")) + ". ", 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-1 lg:grid-cols-3 gap-6"
                }, [
                  createVNode("div", { class: "lg:col-span-2 flex flex-col" }, [
                    createVNode(_component_UCard, { class: "flex flex-col justify-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-4 items-center justify-center" }, [
                          createVNode("div", { class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-gray-50" }, [
                            createVNode(_component_UIcon, {
                              name: iconForType(unref(cart).item.type),
                              class: "w-10 h-10 text-gray-600"
                            }, null, 8, ["name"])
                          ]),
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", { class: "flex justify-between text-base font-medium" }, [
                              createVNode("h3", { class: "truncate" }, toDisplayString(unref(cart).item.name), 1),
                              createVNode("p", { class: "ml-4" }, toDisplayString(unref(cart).item.amount.toFixed(2)) + " €", 1)
                            ]),
                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(capitalize(unref(cart).item.type)), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode(_component_UCard, { class: "h-full flex flex-col justify-between" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-lg font-medium mb-2" }, "Preisübersicht"),
                          createVNode("div", { class: "flex justify-between mt-2" }, [
                            createVNode("span", null, "Zwischensumme:"),
                            createVNode("span", null, toDisplayString(unref(cart).subTotalPrice) + " €", 1)
                          ]),
                          unref(cart).voucher ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("hr", { class: "my-2" }),
                            createVNode("div", { class: "flex justify-between mt-2" }, [
                              createVNode("span", { class: "flex items-center gap-2" }, [
                                createTextVNode(" Gutscheincode "),
                                createVNode(_component_UButton, {
                                  onClick: ($event) => unref(cart).clearVoucher(),
                                  size: "xs",
                                  color: "error",
                                  variant: "ghost",
                                  icon: "i-heroicons-trash"
                                }, null, 8, ["onClick"])
                              ]),
                              unref(cart).voucher.amount ? (openBlock(), createBlock("span", { key: 0 }, " - " + toDisplayString((unref(cart).voucher.amount / 100).toFixed(2)) + " € ", 1)) : unref(cart).voucher.percent ? (openBlock(), createBlock("span", { key: 1 }, " - " + toDisplayString(unref(cart).voucher.percent) + " % ", 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("small", { class: "opacity-75" }, toDisplayString(unref(cart).voucher.name), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("hr", { class: "my-2" }),
                          createVNode("div", { class: "flex justify-between font-semibold" }, [
                            createVNode("span", null, "Gesamt:"),
                            createVNode("span", null, [
                              createVNode(_component_UTooltip, {
                                text: "Preise inkl. gesetzl. USt.",
                                delay: 0,
                                placement: "top"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "underline decoration-dotted decoration-1 decoration-black/75 dark:decoration-white/75 underline-offset-2 cursor-help" }, toDisplayString(unref(cart).totalPrice) + " € ", 1)
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_component_UButton, {
                            disabled: unref(cart).isEmpty,
                            onClick: ($event) => buy(),
                            color: "neutral",
                            label: "Zur Bezahlung",
                            icon: "i-heroicons-shopping-cart",
                            trailing: "",
                            size: "xl",
                            block: "",
                            class: { "disabled:cursor-not-allowed": unref(cart).isEmpty },
                            autofocus: ""
                          }, null, 8, ["disabled", "onClick", "class"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      class: "mt-6 flex flex-col items-center w-full",
                      onSubmit: withModifiers(submitVoucher, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        ui: { container: "mt-3" },
                        class: "text-center w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(voucherCode),
                            "onUpdate:modelValue": ($event) => isRef(voucherCode) ? voucherCode.value = $event : null,
                            type: "text",
                            placeholder: "Gebe dein Gutscheincode ein",
                            required: "",
                            size: "xl",
                            autocomplete: "off",
                            class: "w-full",
                            disabled: unref(voucherLoading)
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                class: "rounded-full",
                                icon: "i-heroicons-check-circle",
                                loading: unref(voucherLoading)
                              }, null, 8, ["loading"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(step) == 3) {
        _push(ssrRenderComponent(_component_UCard, { class: "mt-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.2.title"))}</p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.2.description"))}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("checkout.index.steps.2.title")), 1),
                createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("checkout.index.steps.2.description")), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-center bg-gray-100 rounded-md"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("checkout.index.steps.2.waitForPaymentProvider"))}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-center bg-gray-100 rounded-md" }, [
                  createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, toDisplayString(_ctx.$t("checkout.index.steps.2.waitForPaymentProvider")), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(step) == 2) {
        _push(`<small class="opacity-75">${ssrInterpolate(_ctx.$t("checkout.index.steps.2.loggedInAs"))} ${ssrInterpolate(unref(userName))}. <span class="text-primary underline cursor-pointer">${ssrInterpolate(_ctx.$t("checkout.index.steps.2.notYou"))}?</span></small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BrfjupZ8.mjs.map
