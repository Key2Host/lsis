import { h as useAppConfig, s as tv, K as __nuxt_component_0$1, j as __nuxt_component_1, v as __nuxt_component_2$1, _ as _appConfig, c as useLocale, t as tv$1, z as useToast, u as useLocalePath, a as useI18n, b as useSeoMeta, A as useCartStore } from './server.mjs';
import { defineComponent, useSlots, computed, unref, withCtx, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, createVNode, mergeProps, Fragment, renderList, useSSRContext, mergeModels, useModel, withAsyncContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { createReusableTemplate, reactiveOmit } from '@vueuse/core';
import { _ as __nuxt_component_1$1 } from './Skeleton.vue.mjs';
import { U as upperFirst } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as __nuxt_component_3 } from './Alert.vue.mjs';
import { U as UPageSection } from './PageSection.vue.mjs';
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
import 'tailwind-variants';
import 'vaul-vue';
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

const theme$2 = {
  "slots": {
    "root": "relative grid rounded-[calc(var(--ui-radius)*2.5)] p-6 lg:p-8 xl:p-10 gap-6",
    "header": "",
    "body": "flex flex-col min-w-0",
    "footer": "flex flex-col gap-6 items-center",
    "titleWrapper": "flex items-center gap-3",
    "title": "text-(--ui-text-highlighted) text-2xl sm:text-3xl text-pretty font-semibold",
    "description": "text-base text-pretty mt-2",
    "priceWrapper": "flex items-center gap-1",
    "price": "text-(--ui-text-highlighted) text-3xl sm:text-4xl font-semibold",
    "discount": "text-(--ui-text-muted) line-through text-xl sm:text-2xl",
    "billing": "flex flex-col justify-between min-w-0",
    "billingPeriod": "text-(--ui-text-toned) truncate text-xs font-medium",
    "billingCycle": "text-(--ui-text-muted) truncate text-xs font-medium",
    "features": "flex flex-col gap-3 flex-1 mt-6 grow-0",
    "feature": "flex items-center gap-2 min-w-0",
    "featureIcon": "size-5 shrink-0 text-(--ui-primary)",
    "featureTitle": "text-sm truncate",
    "badge": "",
    "button": "",
    "tagline": "text-base font-semibold text-(--ui-text)",
    "terms": "text-xs/5 text-(--ui-text-muted) text-center text-balance"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-(--ui-border)",
        "body": "lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center",
        "footer": "lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto",
        "features": "lg:grid lg:grid-cols-2 lg:mt-12"
      },
      "vertical": {
        "footer": "justify-end",
        "priceWrapper": "mt-6"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-(--ui-bg-inverted)",
        "title": "text-(--ui-bg)",
        "description": "text-(--ui-text-dimmed)",
        "price": "text-(--ui-bg)",
        "discount": "text-(--ui-text-dimmed)",
        "billingCycle": "text-(--ui-text-dimmed)",
        "billingPeriod": "text-(--ui-text-dimmed)",
        "featureTitle": "text-(--ui-text-dimmed)"
      },
      "outline": {
        "root": "bg-(--ui-bg) ring ring-inset ring-(--ui-border)",
        "description": "text-(--ui-text-muted)",
        "featureTitle": "text-(--ui-text-muted)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50",
        "description": "text-(--ui-text-toned)",
        "featureTitle": "text-(--ui-text-toned)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
        "description": "text-(--ui-text)",
        "featureTitle": "text-(--ui-text)"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2 ring-inset ring-(--ui-primary)"
      }
    },
    "scale": {
      "true": {
        "root": "lg:scale-[1.1] lg:z-[1]"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "soft",
      "class": {
        "root": "divide-(--ui-border-accented)"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "subtle",
      "class": {
        "root": "divide-(--ui-border-accented)"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};

var _a$2;
const appConfigPricingPlan = _appConfig;
const pricingPlan = tv({ extend: tv(theme$2), ...((_a$2 = appConfigPricingPlan.uiPro) == null ? void 0 : _a$2.pricingPlan) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PricingPlan",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    badge: {},
    billingCycle: {},
    billingPeriod: {},
    price: {},
    discount: {},
    features: {},
    button: {},
    tagline: {},
    terms: {},
    orientation: { default: "vertical" },
    variant: {},
    highlight: { type: Boolean },
    scale: { type: Boolean },
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const [DefinePriceTemplate, ReusePriceTemplate] = createReusableTemplate();
    const ui = computed(() => pricingPlan({
      orientation: props.orientation,
      variant: props.variant,
      highlight: props.highlight,
      scale: props.scale
    }));
    const features = computed(() => {
      var _a2;
      return (_a2 = props.features) == null ? void 0 : _a2.map((feature) => typeof feature === "string" ? { title: feature } : feature);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UBadge = __nuxt_component_0$1;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefinePriceTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if (_ctx.discount || _ctx.price || !!slots.discount || !!slots.price || _ctx.billingCycle || _ctx.billingPeriod || !!slots.billing) {
              _push2(`<div class="${ssrRenderClass(ui.value.priceWrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.priceWrapper }))}"${_scopeId}>`);
              if (_ctx.discount && _ctx.price || !!slots.discount) {
                _push2(`<div class="${ssrRenderClass(ui.value.discount({ class: (_b = props.ui) == null ? void 0 : _b.discount }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "discount", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.discount || _ctx.price || !!slots.price) {
                _push2(`<div class="${ssrRenderClass(ui.value.price({ class: (_c = props.ui) == null ? void 0 : _c.price }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "price", {}, () => {
                  _push2(`${ssrInterpolate(_ctx.discount || _ctx.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.billingCycle || _ctx.billingPeriod || !!slots.billing) {
                _push2(`<div class="${ssrRenderClass(ui.value.billing({ class: (_d = props.ui) == null ? void 0 : _d.billing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "billing", {}, () => {
                  var _a4, _b2;
                  _push2(`<span class="${ssrRenderClass(ui.value.billingPeriod({ class: (_a4 = props.ui) == null ? void 0 : _a4.billingPeriod }))}"${_scopeId}>${ssrInterpolate(_ctx.billingPeriod || " ")}</span>`);
                  if (_ctx.billingCycle) {
                    _push2(`<span class="${ssrRenderClass(ui.value.billingCycle({ class: (_b2 = props.ui) == null ? void 0 : _b2.billingCycle }))}"${_scopeId}>${ssrInterpolate(_ctx.billingCycle)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.discount || _ctx.price || !!slots.discount || !!slots.price || _ctx.billingCycle || _ctx.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.priceWrapper({ class: (_e = props.ui) == null ? void 0 : _e.priceWrapper })
              }, [
                _ctx.discount && _ctx.price || !!slots.discount ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.discount({ class: (_f = props.ui) == null ? void 0 : _f.discount })
                }, [
                  renderSlot(_ctx.$slots, "discount", {}, () => [
                    createTextVNode(toDisplayString(_ctx.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.discount || _ctx.price || !!slots.price ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.price({ class: (_g = props.ui) == null ? void 0 : _g.price })
                }, [
                  renderSlot(_ctx.$slots, "price", {}, () => [
                    createTextVNode(toDisplayString(_ctx.discount || _ctx.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.billingCycle || _ctx.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.billing({ class: (_h = props.ui) == null ? void 0 : _h.billing })
                }, [
                  renderSlot(_ctx.$slots, "billing", {}, () => {
                    var _a4, _b2;
                    return [
                      createVNode("span", {
                        class: ui.value.billingPeriod({ class: (_a4 = props.ui) == null ? void 0 : _a4.billingPeriod })
                      }, toDisplayString(_ctx.billingPeriod || " "), 3),
                      _ctx.billingCycle ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.billingCycle({ class: (_b2 = props.ui) == null ? void 0 : _b2.billingCycle })
                      }, toDisplayString(_ctx.billingCycle), 3)) : createCommentVNode("", true)
                    ];
                  })
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            if (!!slots.header && _ctx.orientation === "vertical") {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.titleWrapper({ class: (_c = props.ui) == null ? void 0 : _c.titleWrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_d = props.ui) == null ? void 0 : _d.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
              var _a4;
              if (_ctx.badge) {
                _push2(ssrRenderComponent(_component_UBadge, mergeProps({
                  color: "primary",
                  variant: "subtle"
                }, typeof _ctx.badge === "string" ? { label: _ctx.badge } : _ctx.badge, {
                  class: ui.value.badge({ class: (_a4 = props.ui) == null ? void 0 : _a4.badge })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.orientation === "vertical") {
              _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (((_f = features.value) == null ? void 0 : _f.length) || !!slots.features) {
              _push2(`<ul class="${ssrRenderClass(ui.value.features({ class: (_g = props.ui) == null ? void 0 : _g.features }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(features.value, (feature, index) => {
                  var _a4, _b2, _c2;
                  _push2(`<li class="${ssrRenderClass(ui.value.feature({ class: (_a4 = props.ui) == null ? void 0 : _a4.feature }))}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: feature.icon || unref(appConfig).ui.icons.success,
                    class: ui.value.featureIcon({ class: (_b2 = props.ui) == null ? void 0 : _b2.featureIcon })
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass(ui.value.featureTitle({ class: (_c2 = props.ui) == null ? void 0 : _c2.featureTitle }))}"${_scopeId}>${ssrInterpolate(feature.title)}</span></li>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</ul>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.terms || (_ctx.button || !!slots.button) || _ctx.orientation === "horizontal" || _ctx.tagline || !!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_h = props.ui) == null ? void 0 : _h.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                var _a4, _b2;
                if (_ctx.tagline) {
                  _push2(`<p class="${ssrRenderClass(ui.value.tagline({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagline }))}"${_scopeId}>${ssrInterpolate(_ctx.tagline)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.orientation === "horizontal") {
                  _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "button", {}, () => {
                  var _a5, _b3;
                  if (_ctx.button) {
                    _push2(ssrRenderComponent(_component_UButton, mergeProps({ block: true, size: "lg", ..._ctx.button }, {
                      class: ui.value.button({ class: (_a5 = props.ui) == null ? void 0 : _a5.button }),
                      onClick: (_b3 = _ctx.button) == null ? void 0 : _b3.onClick
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                if (_ctx.terms) {
                  _push2(`<p class="${ssrRenderClass(ui.value.terms({ class: (_b2 = props.ui) == null ? void 0 : _b2.terms }))}"${_scopeId}>${ssrInterpolate(_ctx.terms)}</p>`);
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
              !!slots.header && _ctx.orientation === "vertical" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_i = props.ui) == null ? void 0 : _i.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.body({ class: (_j = props.ui) == null ? void 0 : _j.body })
              }, [
                createVNode("div", {
                  class: ui.value.titleWrapper({ class: (_k = props.ui) == null ? void 0 : _k.titleWrapper })
                }, [
                  _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.title({ class: (_l = props.ui) == null ? void 0 : _l.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "badge", {}, () => {
                    var _a4;
                    return [
                      _ctx.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                        key: 0,
                        color: "primary",
                        variant: "subtle"
                      }, typeof _ctx.badge === "string" ? { label: _ctx.badge } : _ctx.badge, {
                        class: ui.value.badge({ class: (_a4 = props.ui) == null ? void 0 : _a4.badge })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.description({ class: (_m = props.ui) == null ? void 0 : _m.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.orientation === "vertical" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                ((_n = features.value) == null ? void 0 : _n.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                  key: 2,
                  class: ui.value.features({ class: (_o = props.ui) == null ? void 0 : _o.features })
                }, [
                  renderSlot(_ctx.$slots, "features", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(features.value, (feature, index) => {
                      var _a4, _b2, _c2;
                      return openBlock(), createBlock("li", {
                        key: index,
                        class: ui.value.feature({ class: (_a4 = props.ui) == null ? void 0 : _a4.feature })
                      }, [
                        createVNode(_component_UIcon, {
                          name: feature.icon || unref(appConfig).ui.icons.success,
                          class: ui.value.featureIcon({ class: (_b2 = props.ui) == null ? void 0 : _b2.featureIcon })
                        }, null, 8, ["name", "class"]),
                        createVNode("span", {
                          class: ui.value.featureTitle({ class: (_c2 = props.ui) == null ? void 0 : _c2.featureTitle })
                        }, toDisplayString(feature.title), 3)
                      ], 2);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.terms || (_ctx.button || !!slots.button) || _ctx.orientation === "horizontal" || _ctx.tagline || !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.footer({ class: (_p = props.ui) == null ? void 0 : _p.footer })
              }, [
                renderSlot(_ctx.$slots, "footer", {}, () => {
                  var _a4, _b2;
                  return [
                    _ctx.tagline ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: ui.value.tagline({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagline })
                    }, toDisplayString(_ctx.tagline), 3)) : createCommentVNode("", true),
                    _ctx.orientation === "horizontal" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "button", {}, () => {
                      var _a5, _b3;
                      return [
                        _ctx.button ? (openBlock(), createBlock(_component_UButton, mergeProps({ key: 0 }, { block: true, size: "lg", ..._ctx.button }, {
                          class: ui.value.button({ class: (_a5 = props.ui) == null ? void 0 : _a5.button }),
                          onClick: (_b3 = _ctx.button) == null ? void 0 : _b3.onClick
                        }), null, 16, ["class", "onClick"])) : createCommentVNode("", true)
                      ];
                    }),
                    _ctx.terms ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: ui.value.terms({ class: (_b2 = props.ui) == null ? void 0 : _b2.terms })
                    }, toDisplayString(_ctx.terms), 3)) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "UPricingPlan" });

const theme$1 = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full overflow-clip",
    "caption": "sr-only",
    "thead": "relative [&>tr]:after:absolute [&>tr]:after:inset-x-0 [&>tr]:after:bottom-0 [&>tr]:after:h-px [&>tr]:after:bg-(--ui-border-accented)",
    "tbody": "divide-y divide-(--ui-border) [&>tr]:data-[selectable=true]:hover:bg-(--ui-bg-elevated)/50 [&>tr]:data-[selectable=true]:focus-visible:outline-(--ui-primary)",
    "tr": "data-[selected=true]:bg-(--ui-bg-elevated)/50",
    "th": "px-4 py-3.5 text-sm text-(--ui-text-highlighted) text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-(--ui-text-muted) whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "empty": "py-6 text-center text-sm text-(--ui-text-muted)",
    "loading": "py-6 text-center"
  },
  "variants": {
    "pinned": {
      "true": {
        "th": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
        "td": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-(--ui-bg)/75 z-[1] backdrop-blur"
      }
    },
    "loading": {
      "true": {
        "thead": "after:absolute after:bottom-0 after:inset-x-0 after:h-px"
      }
    },
    "loadingAnimation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "loadingColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "loading": true,
      "loadingColor": "primary",
      "class": {
        "thead": "after:bg-(--ui-primary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-(--ui-secondary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-(--ui-success)"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-(--ui-info)"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-(--ui-warning)"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-(--ui-error)"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel",
      "class": {
        "thead": "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel-inverse",
      "class": {
        "thead": "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "swing",
      "class": {
        "thead": "after:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "elastic",
      "class": {
        "thead": "after:animate-[elastic_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "loadingColor": "primary",
    "loadingAnimation": "carousel"
  }
};

var _a$1;
const appConfigTable = _appConfig;
const table = tv$1({ extend: tv$1(theme$1), ...((_a$1 = appConfigTable.ui) == null ? void 0 : _a$1.table) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    data: {},
    columns: {},
    caption: {},
    sticky: { type: Boolean },
    loading: { type: Boolean },
    loadingColor: {},
    loadingAnimation: {},
    globalFilterOptions: {},
    columnFiltersOptions: {},
    columnPinningOptions: {},
    columnSizingOptions: {},
    visibilityOptions: {},
    sortingOptions: {},
    groupingOptions: {},
    expandedOptions: {},
    rowSelectionOptions: {},
    rowPinningOptions: {},
    paginationOptions: {},
    facetedOptions: {},
    onSelect: { type: Function },
    class: {},
    ui: {},
    state: {},
    onStateChange: { type: Function },
    renderFallbackValue: {},
    _features: {},
    autoResetAll: { type: Boolean },
    debugAll: { type: Boolean },
    debugCells: { type: Boolean },
    debugColumns: { type: Boolean },
    debugHeaders: { type: Boolean },
    debugRows: { type: Boolean },
    debugTable: { type: Boolean },
    defaultColumn: {},
    getRowId: { type: Function },
    getSubRows: { type: Function },
    initialState: {},
    mergeOptions: { type: Function },
    meta: {}
  }, {
    "globalFilter": { default: void 0 },
    "globalFilterModifiers": {},
    "columnFilters": { default: [] },
    "columnFiltersModifiers": {},
    "columnOrder": { default: [] },
    "columnOrderModifiers": {},
    "columnVisibility": { default: {} },
    "columnVisibilityModifiers": {},
    "columnPinning": { default: {} },
    "columnPinningModifiers": {},
    "columnSizing": { default: {} },
    "columnSizingModifiers": {},
    "columnSizingInfo": { default: {} },
    "columnSizingInfoModifiers": {},
    "rowSelection": { default: {} },
    "rowSelectionModifiers": {},
    "rowPinning": { default: {} },
    "rowPinningModifiers": {},
    "sorting": { default: [] },
    "sortingModifiers": {},
    "grouping": { default: [] },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object], ...{ default: {} } },
    "expandedModifiers": {},
    "pagination": { default: {} },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const data = computed(() => props.data ?? []);
    const columns = computed(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) })));
    const ui = computed(() => table({
      sticky: props.sticky,
      loading: props.loading,
      loadingColor: props.loadingColor,
      loadingAnimation: props.loadingAnimation
    }));
    const globalFilterState = useModel(__props, "globalFilter");
    const columnFiltersState = useModel(__props, "columnFilters");
    const columnOrderState = useModel(__props, "columnOrder");
    const columnVisibilityState = useModel(__props, "columnVisibility");
    const columnPinningState = useModel(__props, "columnPinning");
    const columnSizingState = useModel(__props, "columnSizing");
    const columnSizingInfoState = useModel(__props, "columnSizingInfo");
    const rowSelectionState = useModel(__props, "rowSelection");
    const rowPinningState = useModel(__props, "rowPinning");
    const sortingState = useModel(__props, "sorting");
    const groupingState = useModel(__props, "grouping");
    const expandedState = useModel(__props, "expanded");
    const paginationState = useModel(__props, "pagination");
    const tableApi = useVueTable({
      ...reactiveOmit(props, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"),
      data,
      columns: columns.value,
      getCoreRowModel: getCoreRowModel(),
      ...props.globalFilterOptions || {},
      onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState),
      ...props.columnFiltersOptions || {},
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState),
      onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState),
      ...props.visibilityOptions || {},
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState),
      ...props.columnPinningOptions || {},
      onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState),
      ...props.columnSizingOptions || {},
      onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState),
      onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState),
      ...props.rowSelectionOptions || {},
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState),
      ...props.rowPinningOptions || {},
      onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState),
      ...props.sortingOptions || {},
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState),
      ...props.groupingOptions || {},
      onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState),
      ...props.expandedOptions || {},
      getExpandedRowModel: getExpandedRowModel(),
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState),
      ...props.paginationOptions || {},
      onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState),
      ...props.facetedOptions || {},
      state: {
        get globalFilter() {
          return globalFilterState.value;
        },
        get columnFilters() {
          return columnFiltersState.value;
        },
        get columnOrder() {
          return columnOrderState.value;
        },
        get columnVisibility() {
          return columnVisibilityState.value;
        },
        get columnPinning() {
          return columnPinningState.value;
        },
        get expanded() {
          return expandedState.value;
        },
        get rowSelection() {
          return rowSelectionState.value;
        },
        get sorting() {
          return sortingState.value;
        },
        get grouping() {
          return groupingState.value;
        },
        get rowPinning() {
          return rowPinningState.value;
        },
        get columnSizing() {
          return columnSizingState.value;
        },
        get columnSizingInfo() {
          return columnSizingInfoState.value;
        },
        get pagination() {
          return paginationState.value;
        }
      }
    });
    function valueUpdater(updaterOrValue, ref) {
      ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
    }
    function handleRowSelect(row, e) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(row, e);
    }
    __expose({
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<table class="${ssrRenderClass(ui.value.base({ class: [(_a3 = props.ui) == null ? void 0 : _a3.base] }))}"${_scopeId}>`);
            if (_ctx.caption) {
              _push2(`<caption class="${ssrRenderClass(ui.value.caption({ class: [(_b = props.ui) == null ? void 0 : _b.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(_ctx.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead class="${ssrRenderClass(ui.value.thead({ class: [(_c = props.ui) == null ? void 0 : _c.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              var _a4;
              _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                var _a5, _b2, _c2;
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())} class="${ssrRenderClass(ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => {
                  if (!header.isPlaceholder) {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: header.column.columnDef.header,
                      props: header.getContext()
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--></thead><tbody class="${ssrRenderClass(ui.value.tbody({ class: [(_d = props.ui) == null ? void 0 : _d.tbody] }))}"${_scopeId}>`);
            if ((_e = unref(tableApi).getRowModel().rows) == null ? void 0 : _e.length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(tableApi).getRowModel().rows, (row) => {
                var _a4, _b2, _c2;
                _push2(`<!--[--><tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
                ssrRenderList(row.getVisibleCells(), (cell) => {
                  var _a5, _b3, _c3;
                  _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())} class="${ssrRenderClass(ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: cell.column.columnDef.cell,
                      props: cell.getContext()
                    }, null, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</td>`);
                });
                _push2(`<!--]--></tr>`);
                if (row.getIsExpanded()) {
                  _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} class="${ssrRenderClass(ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
                  _push2(`</td></tr>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else if (_ctx.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_f = columns.value) == null ? void 0 : _f.length)} class="${ssrRenderClass(ui.value.loading({ class: (_g = props.ui) == null ? void 0 : _g.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_h = columns.value) == null ? void 0 : _h.length)} class="${ssrRenderClass(ui.value.empty({ class: (_i = props.ui) == null ? void 0 : _i.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            _push2(`</tbody></table>`);
          } else {
            return [
              createVNode("table", {
                class: ui.value.base({ class: [(_j = props.ui) == null ? void 0 : _j.base] })
              }, [
                _ctx.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  class: ui.value.caption({ class: [(_k = props.ui) == null ? void 0 : _k.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(_ctx.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  class: ui.value.thead({ class: [(_l = props.ui) == null ? void 0 : _l.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    var _a4;
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        var _a5, _b2, _c2;
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          class: ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() })
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 10, ["data-pinned"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 2),
                createVNode("tbody", {
                  class: ui.value.tbody({ class: [(_m = props.ui) == null ? void 0 : _m.tbody] })
                }, [
                  ((_n = unref(tableApi).getRowModel().rows) == null ? void 0 : _n.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(tableApi).getRowModel().rows, (row) => {
                    var _a4, _b2, _c2;
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode("tr", {
                        "data-selected": row.getIsSelected(),
                        "data-selectable": !!props.onSelect,
                        "data-expanded": row.getIsExpanded(),
                        role: props.onSelect ? "button" : void 0,
                        tabindex: props.onSelect ? 0 : void 0,
                        class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }),
                        onClick: ($event) => handleRowSelect(row, $event)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                          var _a5, _b3, _c3;
                          return openBlock(), createBlock("td", {
                            key: cell.id,
                            "data-pinned": cell.column.getIsPinned(),
                            class: ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() })
                          }, [
                            renderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => [
                              createVNode(unref(FlexRender), {
                                render: cell.column.columnDef.cell,
                                props: cell.getContext()
                              }, null, 8, ["render", "props"])
                            ])
                          ], 10, ["data-pinned"]);
                        }), 128))
                      ], 10, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick"]),
                      row.getIsExpanded() ? (openBlock(), createBlock("tr", {
                        key: 0,
                        class: ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] })
                      }, [
                        createVNode("td", {
                          colspan: row.getAllCells().length,
                          class: ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] })
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { row })
                        ], 10, ["colspan"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : _ctx.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
                    createVNode("td", {
                      colspan: (_o = columns.value) == null ? void 0 : _o.length,
                      class: ui.value.loading({ class: (_p = props.ui) == null ? void 0 : _p.loading })
                    }, [
                      renderSlot(_ctx.$slots, "loading")
                    ], 10, ["colspan"])
                  ])) : (openBlock(), createBlock("tr", { key: 2 }, [
                    createVNode("td", {
                      colspan: (_q = columns.value) == null ? void 0 : _q.length,
                      class: ui.value.empty({ class: (_r = props.ui) == null ? void 0 : _r.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", {}, () => [
                        createTextVNode(toDisplayString(unref(t)("table.noData")), 1)
                      ])
                    ], 10, ["colspan"])
                  ]))
                ], 2)
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UTable" });

const theme = {
  "base": "flex flex-col gap-y-8",
  "variants": {
    "orientation": {
      "horizontal": "lg:grid lg:grid-cols-[repeat(var(--count),minmax(0,1fr))]",
      "vertical": ""
    },
    "compact": {
      "false": "gap-x-8"
    },
    "scale": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "compact": false,
      "scale": true,
      "class": "lg:gap-x-13"
    }
  ]
};

var _a;
const appConfigPricingPlans = _appConfig;
const pricingPlans = tv({ extend: tv(theme), ...((_a = appConfigPricingPlans.uiPro) == null ? void 0 : _a.pricingPlans) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PricingPlans",
  __ssrInlineRender: true,
  props: {
    as: {},
    plans: {},
    orientation: { default: "horizontal" },
    compact: { type: Boolean, default: false },
    scale: { type: Boolean, default: false },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const count = computed(() => {
      var _a2, _b, _c, _d;
      return ((_a2 = props.plans) == null ? void 0 : _a2.length) || ((_d = (_c = (_b = slots.default) == null ? void 0 : _b.call(slots)) == null ? void 0 : _c.flatMap(mapSlot).filter(Boolean)) == null ? void 0 : _d.length) || 3;
    });
    function mapSlot(slot) {
      if (typeof slot.type === "symbol") {
        if (slot.children && Array.isArray(slot.children)) {
          return slot.children.map(mapSlot);
        }
        return;
      }
      return slot;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPricingPlan = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: unref(pricingPlans)({ class: props.class, compact: _ctx.compact, scale: _ctx.scale, orientation: _ctx.orientation }),
        style: { "--count": count.value }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.plans, (plan, index) => {
                _push2(ssrRenderComponent(_component_UPricingPlan, mergeProps({
                  key: index,
                  orientation: _ctx.orientation === "vertical" ? "horizontal" : "vertical",
                  ref_for: true
                }, plan), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plans, (plan, index) => {
                  return openBlock(), createBlock(_component_UPricingPlan, mergeProps({
                    key: index,
                    orientation: _ctx.orientation === "vertical" ? "horizontal" : "vertical",
                    ref_for: true
                  }, plan), null, 16, ["orientation"]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UPricingPlans = Object.assign(_sfc_main$1, { __name: "UPricingPlans" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const localePath = useLocalePath();
    const { t } = useI18n({
      useScope: "global"
    });
    const columns = [{
      accessorKey: "feature",
      header: ""
    }, {
      accessorKey: "weblite",
      header: "WebLite"
    }, {
      accessorKey: "webpro",
      header: "WebPro"
    }, {
      accessorKey: "webmax",
      header: "WebMax"
    }];
    const items = [{
      feature: t("products.webspace.tablerows.1"),
      weblite: "2 GB",
      webpro: "5 GB",
      webmax: "10 GB"
    }, {
      feature: t("products.webspace.tablerows.2"),
      weblite: "1",
      webpro: "1",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.3"),
      weblite: "3",
      webpro: "∞",
      webmax: "∞"
    }, {
      feature: t("products.webspace.tablerows.4"),
      weblite: "1",
      webpro: "3",
      webmax: "10"
    }, {
      feature: t("products.webspace.tablerows.5"),
      weblite: "1",
      webpro: "3",
      webmax: "10"
    }, {
      feature: t("products.webspace.tablerows.6"),
      weblite: "1",
      webpro: "2",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.7"),
      weblite: "1",
      webpro: "1",
      webmax: "3"
    }, {
      feature: t("products.webspace.tablerows.8"),
      weblite: t("products.webspace.tablerows.yes"),
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.9"),
      weblite: t("products.webspace.tablerows.yes"),
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.10"),
      weblite: "Fair-Use",
      webpro: "Fair-Use",
      webmax: "Fair-Use"
    }, {
      feature: t("products.webspace.tablerows.11"),
      weblite: "128 M",
      webpro: "256 M",
      webmax: "512 M"
    }, {
      feature: t("products.webspace.tablerows.12"),
      weblite: "64 M",
      webpro: "128 M",
      webmax: "256 M"
    }, {
      feature: t("products.webspace.tablerows.13"),
      weblite: "Ja",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.14"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.15"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.16"),
      weblite: "",
      webpro: t("products.webspace.tablerows.yes"),
      webmax: t("products.webspace.tablerows.yes")
    }, {
      feature: t("products.webspace.tablerows.17"),
      weblite: "",
      webpro: "1",
      webmax: "∞"
    }, {
      feature: t("products.webspace.tablerows.18"),
      weblite: "",
      webpro: "",
      webmax: t("products.webspace.tablerows.yes")
    }];
    const packages = [];
    const fetchPackageInfo = async () => {
      try {
        const response = await fetch("https://saci.key2host.com/api/user/getWebspaceInfo");
        const data = await response.json();
        if (Array.isArray(data.packages)) {
          data.packages.forEach((price) => {
            packages.push({
              name: price.name,
              amount: price.amount,
              priceID: price.priceID
            });
          });
        } else {
          toast.add({
            icon: "i-heroicons-exclamation-triangle",
            description: t("products.webspace.errors.emptydata.description"),
            color: "error",
            title: t("products.webspace.errors.emptydata.title"),
            timeout: 5e3,
            pauseTimeoutOnHover: true
          });
          return;
        }
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("products.webspace.errors.nodata.description"),
          color: "error",
          title: t("products.webspace.errors.nodata.title"),
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
        return;
      }
    };
    const buy = async (p) => {
      const cart = useCartStore();
      const selectedPackage = packages[parseInt(p) - 1];
      if (selectedPackage) {
        cart.addToBasket({ type: "webspace", name: selectedPackage.name, amount: selectedPackage.amount, id: selectedPackage.priceID });
        cart.openSlideover();
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchPackageInfo()), await __temp, __restore();
    useSeoMeta({
      title: t("products.webspace.title"),
      ogTitle: t("products.webspace.title"),
      description: t("products.webspace.description"),
      ogDescription: t("products.webspace.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPricingPlan = __nuxt_component_0;
      const _component_USkeleton = __nuxt_component_1$1;
      const _component_UTable = __nuxt_component_2;
      const _component_UAlert = __nuxt_component_3;
      _push(`<!--[--><div class="min-h-[91vh]">`);
      _push(ssrRenderComponent(unref(UPageSection), {
        headline: _ctx.$t("products.webspace.headline"),
        title: _ctx.$t("products.webspace.title"),
        orientation: "horizontal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="opacity-50"${_scopeId}>${ssrInterpolate(_ctx.$t("products.webspace.description"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.webspace.description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4 max-md:max-w-[350px] max-w-[90%] mx-auto">`);
      _push(ssrRenderComponent(unref(UPricingPlans), {
        compact: false,
        class: "mt-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(packages, (packageItem, index) => {
              _push2(ssrRenderComponent(_component_UPricingPlan, {
                key: packageItem.priceID,
                title: packageItem.name,
                price: packageItem.amount + "€",
                discount: "",
                cycle: "/" + _ctx.$t("products.webspace.cycle"),
                button: { label: _ctx.$t("products.webspace.addBasket"), onClick() {
                  buy(index + 1);
                } },
                orientation: "vertical"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!packages || packages.length === 0) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-64 rounded-md border border-gray-300" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(packages, (packageItem, index) => {
                return createVNode(_component_UPricingPlan, {
                  key: packageItem.priceID,
                  title: packageItem.name,
                  price: packageItem.amount + "€",
                  discount: "",
                  cycle: "/" + _ctx.$t("products.webspace.cycle"),
                  button: { label: _ctx.$t("products.webspace.addBasket"), onClick() {
                    buy(index + 1);
                  } },
                  orientation: "vertical"
                }, null, 8, ["title", "price", "cycle", "button"]);
              }), 64)),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 0,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 1,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true),
              !packages || packages.length === 0 ? (openBlock(), createBlock(_component_USkeleton, {
                key: 2,
                class: "h-64 rounded-md border border-gray-300"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-wrap justify-center gap-4 mb-12"><div class="w-full max-w-6xl">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: items,
        columns
      }, null, _parent));
      _push(ssrRenderComponent(_component_UAlert, {
        class: "mt-4",
        color: "neutral",
        variant: "subtle",
        actions: [{ label: _ctx.$t("products.webspace.domain.action"), to: unref(localePath)("/products/domain"), size: "md" }]
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("products.webspace.domain.title"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-lg" }, toDisplayString(_ctx.$t("products.webspace.domain.title")), 1)
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("products.webspace.domain.description"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("products.webspace.domain.description")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/webspace/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue8.mjs.map
