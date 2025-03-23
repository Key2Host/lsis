import { defineComponent, useSlots, computed, inject, ref, useId, provide, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Primitive, Label } from 'reka-ui';
import { t as tv, i as inputIdInjectionKey, h as formFieldInjectionKey, _ as _appConfig } from './server.mjs';

const theme = {
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

var _a;
const appConfigFormField = _appConfig;
const formField = tv({ extend: tv(theme), ...((_a = appConfigFormField.ui) == null ? void 0 : _a.formField) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "UFormField" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=FormField.vue.mjs.map
