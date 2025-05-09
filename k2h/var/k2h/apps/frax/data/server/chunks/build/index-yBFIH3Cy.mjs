import { M as Motion, _ as _sfc_main$4 } from './PageSection-Bp1Prz50.mjs';
import { i as useToast, a2 as useRouter, a as useLocalePath, b as useI18n, d as useSeoMeta, u as useAppConfig, t as tv, A as createReusableTemplate, e as _sfc_main$o, _ as _sfc_main$z, k as _sfc_main$u, m as useLocale, n as tv$1, a7 as reactiveOmit } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, mergeModels, createTextVNode, useSlots, computed, mergeProps, renderSlot, ref, useModel, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { _ as _sfc_main$5 } from './Skeleton-CNUiTn1T.mjs';
import { X as upperFirst } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$6 } from './Alert-Bx92A5TZ.mjs';
import { u as useCartStore } from './cart-D33wMGUr.mjs';
import 'hey-listen';
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

const theme$2 = {
  "slots": {
    "root": "relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6",
    "header": "",
    "body": "flex flex-col min-w-0",
    "footer": "flex flex-col gap-6 items-center",
    "titleWrapper": "flex items-center gap-3",
    "title": "text-highlighted text-2xl sm:text-3xl text-pretty font-semibold",
    "description": "text-muted text-base text-pretty mt-2",
    "priceWrapper": "flex items-center gap-1",
    "price": "text-highlighted text-3xl sm:text-4xl font-semibold",
    "discount": "text-muted line-through text-xl sm:text-2xl",
    "billing": "flex flex-col justify-between min-w-0",
    "billingPeriod": "text-toned truncate text-xs font-medium",
    "billingCycle": "text-muted truncate text-xs font-medium",
    "features": "flex flex-col gap-3 flex-1 mt-6 grow-0",
    "feature": "flex items-center gap-2 min-w-0",
    "featureIcon": "size-5 shrink-0 text-primary",
    "featureTitle": "text-muted text-sm truncate",
    "badge": "",
    "button": "",
    "tagline": "text-base font-semibold text-default",
    "terms": "text-xs/5 text-muted text-center text-balance"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-default",
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
        "root": "bg-inverted",
        "title": "text-inverted",
        "description": "text-dimmed",
        "price": "text-inverted",
        "discount": "text-dimmed",
        "billingCycle": "text-dimmed",
        "billingPeriod": "text-dimmed",
        "featureTitle": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default"
      },
      "soft": {
        "root": "bg-elevated/50"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2 ring-inset ring-primary"
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
        "root": "divide-accented"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "subtle",
      "class": {
        "root": "divide-accented"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$3 = {
  __name: "UPricingPlan",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    badge: { type: null, required: false },
    billingCycle: { type: String, required: false },
    billingPeriod: { type: String, required: false },
    price: { type: String, required: false },
    discount: { type: String, required: false },
    features: { type: Array, required: false },
    button: { type: null, required: false },
    tagline: { type: String, required: false },
    terms: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    variant: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    scale: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const [DefinePriceTemplate, ReusePriceTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pricingPlan) || {} })({
        orientation: props.orientation,
        variant: props.variant,
        highlight: props.highlight,
        scale: props.scale
      });
    });
    const features = computed(() => {
      var _a;
      return (_a = props.features) == null ? void 0 : _a.map((feature) => typeof feature === "string" ? { title: feature } : feature);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UBadge = _sfc_main$o;
      const _component_UIcon = _sfc_main$z;
      const _component_UButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefinePriceTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if (__props.discount || __props.price || !!slots.discount || !!slots.price || __props.billingCycle || __props.billingPeriod || !!slots.billing) {
              _push2(`<div class="${ssrRenderClass(ui.value.priceWrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.priceWrapper }))}"${_scopeId}>`);
              if (__props.discount && __props.price || !!slots.discount) {
                _push2(`<div class="${ssrRenderClass(ui.value.discount({ class: (_b = props.ui) == null ? void 0 : _b.discount }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "discount", {}, () => {
                  _push2(`${ssrInterpolate(__props.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.discount || __props.price || !!slots.price) {
                _push2(`<div class="${ssrRenderClass(ui.value.price({ class: (_c = props.ui) == null ? void 0 : _c.price }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "price", {}, () => {
                  _push2(`${ssrInterpolate(__props.discount || __props.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.billingCycle || __props.billingPeriod || !!slots.billing) {
                _push2(`<div class="${ssrRenderClass(ui.value.billing({ class: (_d = props.ui) == null ? void 0 : _d.billing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "billing", {}, () => {
                  var _a3, _b2;
                  _push2(`<span class="${ssrRenderClass(ui.value.billingPeriod({ class: (_a3 = props.ui) == null ? void 0 : _a3.billingPeriod }))}"${_scopeId}>${ssrInterpolate(__props.billingPeriod || " ")}</span>`);
                  if (__props.billingCycle) {
                    _push2(`<span class="${ssrRenderClass(ui.value.billingCycle({ class: (_b2 = props.ui) == null ? void 0 : _b2.billingCycle }))}"${_scopeId}>${ssrInterpolate(__props.billingCycle)}</span>`);
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
              __props.discount || __props.price || !!slots.discount || !!slots.price || __props.billingCycle || __props.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.priceWrapper({ class: (_e = props.ui) == null ? void 0 : _e.priceWrapper })
              }, [
                __props.discount && __props.price || !!slots.discount ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.discount({ class: (_f = props.ui) == null ? void 0 : _f.discount })
                }, [
                  renderSlot(_ctx.$slots, "discount", {}, () => [
                    createTextVNode(toDisplayString(__props.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.discount || __props.price || !!slots.price ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.price({ class: (_g = props.ui) == null ? void 0 : _g.price })
                }, [
                  renderSlot(_ctx.$slots, "price", {}, () => [
                    createTextVNode(toDisplayString(__props.discount || __props.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.billingCycle || __props.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.billing({ class: (_h = props.ui) == null ? void 0 : _h.billing })
                }, [
                  renderSlot(_ctx.$slots, "billing", {}, () => {
                    var _a3, _b2;
                    return [
                      createVNode("span", {
                        class: ui.value.billingPeriod({ class: (_a3 = props.ui) == null ? void 0 : _a3.billingPeriod })
                      }, toDisplayString(__props.billingPeriod || " "), 3),
                      __props.billingCycle ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.billingCycle({ class: (_b2 = props.ui) == null ? void 0 : _b2.billingCycle })
                      }, toDisplayString(__props.billingCycle), 3)) : createCommentVNode("", true)
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
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            if (!!slots.header && __props.orientation === "vertical") {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.titleWrapper({ class: (_c = props.ui) == null ? void 0 : _c.titleWrapper }))}"${_scopeId}>`);
            if (__props.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_d = props.ui) == null ? void 0 : _d.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
              var _a3;
              if (__props.badge) {
                _push2(ssrRenderComponent(_component_UBadge, mergeProps({
                  color: "primary",
                  variant: "subtle"
                }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                  class: ui.value.badge({ class: (_a3 = props.ui) == null ? void 0 : _a3.badge })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (__props.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "vertical") {
              _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (((_f = features.value) == null ? void 0 : _f.length) || !!slots.features) {
              _push2(`<ul class="${ssrRenderClass(ui.value.features({ class: (_g = props.ui) == null ? void 0 : _g.features }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(features.value, (feature, index) => {
                  var _a3, _b2, _c2;
                  _push2(`<li class="${ssrRenderClass(ui.value.feature({ class: (_a3 = props.ui) == null ? void 0 : _a3.feature }))}"${_scopeId}>`);
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
            if (__props.terms || (__props.button || !!slots.button) || __props.orientation === "horizontal" || __props.tagline || !!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_h = props.ui) == null ? void 0 : _h.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                var _a3, _b2;
                if (__props.tagline) {
                  _push2(`<p class="${ssrRenderClass(ui.value.tagline({ class: (_a3 = props.ui) == null ? void 0 : _a3.tagline }))}"${_scopeId}>${ssrInterpolate(__props.tagline)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.orientation === "horizontal") {
                  _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "button", {}, () => {
                  var _a4, _b3;
                  if (__props.button) {
                    _push2(ssrRenderComponent(_component_UButton, mergeProps({ block: true, size: "lg", ...__props.button }, {
                      class: ui.value.button({ class: (_a4 = props.ui) == null ? void 0 : _a4.button }),
                      onClick: (_b3 = __props.button) == null ? void 0 : _b3.onClick
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                if (__props.terms) {
                  _push2(`<p class="${ssrRenderClass(ui.value.terms({ class: (_b2 = props.ui) == null ? void 0 : _b2.terms }))}"${_scopeId}>${ssrInterpolate(__props.terms)}</p>`);
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
              !!slots.header && __props.orientation === "vertical" ? (openBlock(), createBlock("div", {
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
                  __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.title({ class: (_l = props.ui) == null ? void 0 : _l.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "badge", {}, () => {
                    var _a3;
                    return [
                      __props.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                        key: 0,
                        color: "primary",
                        variant: "subtle"
                      }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                        class: ui.value.badge({ class: (_a3 = props.ui) == null ? void 0 : _a3.badge })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.description({ class: (_m = props.ui) == null ? void 0 : _m.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.orientation === "vertical" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                ((_n = features.value) == null ? void 0 : _n.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                  key: 2,
                  class: ui.value.features({ class: (_o = props.ui) == null ? void 0 : _o.features })
                }, [
                  renderSlot(_ctx.$slots, "features", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(features.value, (feature, index) => {
                      var _a3, _b2, _c2;
                      return openBlock(), createBlock("li", {
                        key: index,
                        class: ui.value.feature({ class: (_a3 = props.ui) == null ? void 0 : _a3.feature })
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
              __props.terms || (__props.button || !!slots.button) || __props.orientation === "horizontal" || __props.tagline || !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.footer({ class: (_p = props.ui) == null ? void 0 : _p.footer })
              }, [
                renderSlot(_ctx.$slots, "footer", {}, () => {
                  var _a3, _b2;
                  return [
                    __props.tagline ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: ui.value.tagline({ class: (_a3 = props.ui) == null ? void 0 : _a3.tagline })
                    }, toDisplayString(__props.tagline), 3)) : createCommentVNode("", true),
                    __props.orientation === "horizontal" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "button", {}, () => {
                      var _a4, _b3;
                      return [
                        __props.button ? (openBlock(), createBlock(_component_UButton, mergeProps({ key: 0 }, { block: true, size: "lg", ...__props.button }, {
                          class: ui.value.button({ class: (_a4 = props.ui) == null ? void 0 : _a4.button }),
                          onClick: (_b3 = __props.button) == null ? void 0 : _b3.onClick
                        }), null, 16, ["class", "onClick"])) : createCommentVNode("", true)
                      ];
                    }),
                    __props.terms ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: ui.value.terms({ class: (_b2 = props.ui) == null ? void 0 : _b2.terms })
                    }, toDisplayString(__props.terms), 3)) : createCommentVNode("", true)
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full overflow-clip",
    "caption": "sr-only",
    "thead": "relative [&>tr]:after:absolute [&>tr]:after:inset-x-0 [&>tr]:after:bottom-0 [&>tr]:after:h-px [&>tr]:after:bg-(--ui-border-accented)",
    "tbody": "divide-y divide-default [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary",
    "tr": "data-[selected=true]:bg-elevated/50",
    "th": "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "empty": "py-6 text-center text-sm text-muted",
    "loading": "py-6 text-center"
  },
  "variants": {
    "pinned": {
      "true": {
        "th": "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
        "td": "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur"
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
        "thead": "after:bg-primary"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-secondary"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-success"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-info"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-warning"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-error"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-inverted"
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
const _sfc_main$2 = {
  __name: "UTable",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    data: { type: Array, required: false },
    columns: { type: Array, required: false },
    caption: { type: String, required: false },
    meta: { type: Object, required: false },
    empty: { type: String, required: false },
    sticky: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingColor: { type: null, required: false },
    loadingAnimation: { type: null, required: false },
    watchOptions: { type: Object, required: false, default: () => ({
      deep: true
    }) },
    globalFilterOptions: { type: Object, required: false },
    columnFiltersOptions: { type: Object, required: false },
    columnPinningOptions: { type: Object, required: false },
    columnSizingOptions: { type: Object, required: false },
    visibilityOptions: { type: Object, required: false },
    sortingOptions: { type: Object, required: false },
    groupingOptions: { type: Object, required: false },
    expandedOptions: { type: Object, required: false },
    rowSelectionOptions: { type: Object, required: false },
    rowPinningOptions: { type: Object, required: false },
    paginationOptions: { type: Object, required: false },
    facetedOptions: { type: Object, required: false },
    onSelect: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    state: { type: Object, required: false },
    onStateChange: { type: Function, required: false },
    renderFallbackValue: { type: null, required: false },
    _features: { type: Array, required: false },
    autoResetAll: { type: Boolean, required: false },
    debugAll: { type: Boolean, required: false },
    debugCells: { type: Boolean, required: false },
    debugColumns: { type: Boolean, required: false },
    debugHeaders: { type: Boolean, required: false },
    debugRows: { type: Boolean, required: false },
    debugTable: { type: Boolean, required: false },
    defaultColumn: { type: Object, required: false },
    getRowId: { type: Function, required: false },
    getSubRows: { type: Function, required: false },
    initialState: { type: Object, required: false },
    mergeOptions: { type: Function, required: false }
  }, {
    "globalFilter": { type: String, ...{ default: void 0 } },
    "globalFilterModifiers": {},
    "columnFilters": { type: Array, ...{ default: [] } },
    "columnFiltersModifiers": {},
    "columnOrder": { type: Array, ...{ default: [] } },
    "columnOrderModifiers": {},
    "columnVisibility": { type: Object, ...{ default: {} } },
    "columnVisibilityModifiers": {},
    "columnPinning": { type: Object, ...{ default: {} } },
    "columnPinningModifiers": {},
    "columnSizing": { type: Object, ...{ default: {} } },
    "columnSizingModifiers": {},
    "columnSizingInfo": { type: Object, ...{ default: {} } },
    "columnSizingInfoModifiers": {},
    "rowSelection": { type: Object, ...{ default: {} } },
    "rowSelectionModifiers": {},
    "rowPinning": { type: Object, ...{ default: {} } },
    "rowPinningModifiers": {},
    "sorting": { type: Array, ...{ default: [] } },
    "sortingModifiers": {},
    "grouping": { type: Array, ...{ default: [] } },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object], ...{ default: {} } },
    "expandedModifiers": {},
    "pagination": { type: Object, ...{ default: {} } },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const data = ref(props.data ?? []);
    const columns = computed(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) })));
    const meta = computed(() => props.meta ?? {});
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.table) || {} })({
        sticky: props.sticky,
        loading: props.loading,
        loadingColor: props.loadingColor,
        loadingAnimation: props.loadingAnimation
      });
    });
    const globalFilterState = useModel(__props, "globalFilter", { type: String, ...{ default: void 0 } });
    const columnFiltersState = useModel(__props, "columnFilters", { type: Array, ...{ default: [] } });
    const columnOrderState = useModel(__props, "columnOrder", { type: Array, ...{ default: [] } });
    const columnVisibilityState = useModel(__props, "columnVisibility", { type: Object, ...{ default: {} } });
    const columnPinningState = useModel(__props, "columnPinning", { type: Object, ...{ default: {} } });
    const columnSizingState = useModel(__props, "columnSizing", { type: Object, ...{ default: {} } });
    const columnSizingInfoState = useModel(__props, "columnSizingInfo", { type: Object, ...{ default: {} } });
    const rowSelectionState = useModel(__props, "rowSelection", { type: Object, ...{ default: {} } });
    const rowPinningState = useModel(__props, "rowPinning", { type: Object, ...{ default: {} } });
    const sortingState = useModel(__props, "sorting", { type: Array, ...{ default: [] } });
    const groupingState = useModel(__props, "grouping", { type: Array, ...{ default: [] } });
    const expandedState = useModel(__props, "expanded", { type: [Boolean, Object], ...{ default: {} } });
    const paginationState = useModel(__props, "pagination", { type: Object, ...{ default: {} } });
    const tableRef = ref();
    const tableApi = useVueTable({
      ...reactiveOmit(props, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"),
      data,
      columns: columns.value,
      meta: meta.value,
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
    function valueUpdater(updaterOrValue, ref2) {
      ref2.value = typeof updaterOrValue === "function" ? updaterOrValue(ref2.value) : updaterOrValue;
    }
    function handleRowSelect(row, e) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button") || target.closest("a");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(row, e);
    }
    watch(
      () => props.data,
      () => {
        data.value = props.data ? [...props.data] : [];
      },
      props.watchOptions
    );
    __expose({
      tableRef,
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<table class="${ssrRenderClass(ui.value.base({ class: [(_a2 = props.ui) == null ? void 0 : _a2.base] }))}"${_scopeId}>`);
            if (__props.caption || !!slots.caption) {
              _push2(`<caption class="${ssrRenderClass(ui.value.caption({ class: [(_b = props.ui) == null ? void 0 : _b.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(__props.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead class="${ssrRenderClass(ui.value.thead({ class: [(_c = props.ui) == null ? void 0 : _c.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              var _a3;
              _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_a3 = props.ui) == null ? void 0 : _a3.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                var _a4, _b2, _c2, _d2, _e2;
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())}${ssrRenderAttr("colspan", header.colSpan > 1 ? header.colSpan : void 0)} class="${ssrRenderClass(ui.value.th({
                  class: [
                    (_a4 = props.ui) == null ? void 0 : _a4.th,
                    typeof ((_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th) === "function" ? header.column.columnDef.meta.class.th(header) : (_e2 = (_d2 = header.column.columnDef.meta) == null ? void 0 : _d2.class) == null ? void 0 : _e2.th
                  ],
                  pinned: !!header.column.getIsPinned()
                }))}"${_scopeId}>`);
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
                var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
                _push2(`<!--[--><tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} class="${ssrRenderClass(ui.value.tr({
                  class: [
                    (_a3 = props.ui) == null ? void 0 : _a3.tr,
                    typeof ((_c2 = (_b2 = unref(tableApi).options.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.tr) === "function" ? unref(tableApi).options.meta.class.tr(row) : (_e2 = (_d2 = unref(tableApi).options.meta) == null ? void 0 : _d2.class) == null ? void 0 : _e2.tr
                  ]
                }))}"${_scopeId}><!--[-->`);
                ssrRenderList(row.getVisibleCells(), (cell) => {
                  var _a4, _b3, _c3, _d3, _e3;
                  _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())} class="${ssrRenderClass(ui.value.td({
                    class: [
                      (_a4 = props.ui) == null ? void 0 : _a4.td,
                      typeof ((_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td) === "function" ? cell.column.columnDef.meta.class.td(cell) : (_e3 = (_d3 = cell.column.columnDef.meta) == null ? void 0 : _d3.class) == null ? void 0 : _e3.td
                    ],
                    pinned: !!cell.column.getIsPinned()
                  }))}"${_scopeId}>`);
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
                  _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_f2 = props.ui) == null ? void 0 : _f2.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} class="${ssrRenderClass(ui.value.td({ class: [(_g2 = props.ui) == null ? void 0 : _g2.td] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
                  _push2(`</td></tr>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else if (__props.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_f = columns.value) == null ? void 0 : _f.length)} class="${ssrRenderClass(ui.value.loading({ class: (_g = props.ui) == null ? void 0 : _g.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_h = columns.value) == null ? void 0 : _h.length)} class="${ssrRenderClass(ui.value.empty({ class: (_i = props.ui) == null ? void 0 : _i.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(__props.empty || unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            _push2(`</tbody></table>`);
          } else {
            return [
              createVNode("table", {
                ref_key: "tableRef",
                ref: tableRef,
                class: ui.value.base({ class: [(_j = props.ui) == null ? void 0 : _j.base] })
              }, [
                __props.caption || !!slots.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  class: ui.value.caption({ class: [(_k = props.ui) == null ? void 0 : _k.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(__props.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  class: ui.value.thead({ class: [(_l = props.ui) == null ? void 0 : _l.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    var _a3;
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      class: ui.value.tr({ class: [(_a3 = props.ui) == null ? void 0 : _a3.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        var _a4, _b2, _c2, _d2, _e2;
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          colspan: header.colSpan > 1 ? header.colSpan : void 0,
                          class: ui.value.th({
                            class: [
                              (_a4 = props.ui) == null ? void 0 : _a4.th,
                              typeof ((_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th) === "function" ? header.column.columnDef.meta.class.th(header) : (_e2 = (_d2 = header.column.columnDef.meta) == null ? void 0 : _d2.class) == null ? void 0 : _e2.th
                            ],
                            pinned: !!header.column.getIsPinned()
                          })
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 10, ["data-pinned", "colspan"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 2),
                createVNode("tbody", {
                  class: ui.value.tbody({ class: [(_m = props.ui) == null ? void 0 : _m.tbody] })
                }, [
                  ((_n = unref(tableApi).getRowModel().rows) == null ? void 0 : _n.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(tableApi).getRowModel().rows, (row) => {
                    var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode("tr", {
                        "data-selected": row.getIsSelected(),
                        "data-selectable": !!props.onSelect,
                        "data-expanded": row.getIsExpanded(),
                        role: props.onSelect ? "button" : void 0,
                        tabindex: props.onSelect ? 0 : void 0,
                        class: ui.value.tr({
                          class: [
                            (_a3 = props.ui) == null ? void 0 : _a3.tr,
                            typeof ((_c2 = (_b2 = unref(tableApi).options.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.tr) === "function" ? unref(tableApi).options.meta.class.tr(row) : (_e2 = (_d2 = unref(tableApi).options.meta) == null ? void 0 : _d2.class) == null ? void 0 : _e2.tr
                          ]
                        }),
                        onClick: ($event) => handleRowSelect(row, $event)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                          var _a4, _b3, _c3, _d3, _e3;
                          return openBlock(), createBlock("td", {
                            key: cell.id,
                            "data-pinned": cell.column.getIsPinned(),
                            class: ui.value.td({
                              class: [
                                (_a4 = props.ui) == null ? void 0 : _a4.td,
                                typeof ((_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td) === "function" ? cell.column.columnDef.meta.class.td(cell) : (_e3 = (_d3 = cell.column.columnDef.meta) == null ? void 0 : _d3.class) == null ? void 0 : _e3.td
                              ],
                              pinned: !!cell.column.getIsPinned()
                            })
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
                        class: ui.value.tr({ class: [(_f2 = props.ui) == null ? void 0 : _f2.tr] })
                      }, [
                        createVNode("td", {
                          colspan: row.getAllCells().length,
                          class: ui.value.td({ class: [(_g2 = props.ui) == null ? void 0 : _g2.td] })
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { row })
                        ], 10, ["colspan"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : __props.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
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
                        createTextVNode(toDisplayString(__props.empty || unref(t)("table.noData")), 1)
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
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
const _sfc_main$1 = {
  __name: "UPricingPlans",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    plans: { type: Array, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    compact: { type: Boolean, required: false, default: false },
    scale: { type: Boolean, required: false, default: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pricingPlans) || {} });
    });
    const count = computed(() => {
      var _a, _b, _c, _d;
      return ((_a = props.plans) == null ? void 0 : _a.length) || ((_d = (_c = (_b = slots.default) == null ? void 0 : _b.call(slots)) == null ? void 0 : _c.flatMap(mapSlot).filter(Boolean)) == null ? void 0 : _d.length) || 3;
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
      const _component_UPricingPlan = _sfc_main$3;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value({ class: props.class, compact: __props.compact, scale: __props.scale, orientation: __props.orientation }),
        style: { "--count": count.value }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(__props.plans, (plan, index) => {
                _push2(ssrRenderComponent(_component_UPricingPlan, mergeProps({
                  key: index,
                  orientation: __props.orientation === "vertical" ? "horizontal" : "vertical",
                  ref_for: true
                }, plan), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan, index) => {
                  return openBlock(), createBlock(_component_UPricingPlan, mergeProps({
                    key: index,
                    orientation: __props.orientation === "vertical" ? "horizontal" : "vertical",
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const router = useRouter();
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
        const response = await fetch("https://saci.key2host.com/api/products/webspace");
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
            duration: 5e3
          });
          return;
        }
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("products.webspace.errors.nodata.description"),
          color: "error",
          title: t("products.webspace.errors.nodata.title"),
          duration: 5e3
        });
        return;
      }
    };
    const buy = async (p) => {
      const cart = useCartStore();
      const selectedPackage = packages[parseInt(p) - 1];
      if (selectedPackage) {
        cart.setItem({
          id: selectedPackage.priceID,
          name: selectedPackage.name,
          type: "webspace",
          amount: selectedPackage.amount
        });
        router.push("/checkout");
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
      const _component_Motion = Motion;
      const _component_UPricingPlan = _sfc_main$3;
      const _component_USkeleton = _sfc_main$5;
      const _component_UTable = _sfc_main$2;
      const _component_UAlert = _sfc_main$6;
      _push(`<!--[--><div class="min-h-[92vh]">`);
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              headline: _ctx.$t("products.webspace.headline"),
              title: _ctx.$t("products.webspace.title"),
              orientation: "horizontal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="opacity-50"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.webspace.description"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.webspace.description")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                headline: _ctx.$t("products.webspace.headline"),
                title: _ctx.$t("products.webspace.title"),
                orientation: "horizontal"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "opacity-50" }, toDisplayString(_ctx.$t("products.webspace.description")), 1)
                ]),
                _: 1
              }, 8, ["headline", "title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4 max-md:max-w-[350px] max-w-[90%] mx-auto">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        compact: false,
        class: "mt-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(packages, (packageItem, index) => {
              _push2(ssrRenderComponent(_component_Motion, {
                key: packageItem.priceID,
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UPricingPlan, {
                      title: packageItem.name,
                      price: packageItem.amount + "€",
                      discount: "",
                      cycle: "/" + _ctx.$t("products.webspace.cycle"),
                      button: { label: _ctx.$t("products.webspace.addBasket"), onClick() {
                        buy(index + 1);
                      } },
                      orientation: "vertical"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UPricingPlan, {
                        title: packageItem.name,
                        price: packageItem.amount + "€",
                        discount: "",
                        cycle: "/" + _ctx.$t("products.webspace.cycle"),
                        button: { label: _ctx.$t("products.webspace.addBasket"), onClick() {
                          buy(index + 1);
                        } },
                        orientation: "vertical"
                      }, null, 8, ["title", "price", "cycle", "button"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
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
                return createVNode(_component_Motion, {
                  key: packageItem.priceID,
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UPricingPlan, {
                      title: packageItem.name,
                      price: packageItem.amount + "€",
                      discount: "",
                      cycle: "/" + _ctx.$t("products.webspace.cycle"),
                      button: { label: _ctx.$t("products.webspace.addBasket"), onClick() {
                        buy(index + 1);
                      } },
                      orientation: "vertical"
                    }, null, 8, ["title", "price", "cycle", "button"])
                  ]),
                  _: 2
                }, 1024);
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
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut", delay: 1 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="opacity-25"${_scopeId}>Preise inkl. gesetzl. USt.</span>`);
          } else {
            return [
              createVNode("span", { class: "opacity-25" }, "Preise inkl. gesetzl. USt.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-wrap justify-center gap-4 mb-12"><div class="w-full max-w-6xl">`);
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.2, delay: 0.4, ease: "easeOut" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: items,
              columns
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                data: items,
                columns
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.4, ease: "easeOut", delay: 0.4 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UAlert, {
              class: "mt-4",
              color: "neutral",
              variant: "subtle",
              actions: [{ label: _ctx.$t("products.webspace.domain.action"), to: unref(localePath)("/products/domain"), size: "md" }]
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-lg"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.webspace.domain.title"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-lg" }, toDisplayString(_ctx.$t("products.webspace.domain.title")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("products.webspace.domain.description"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("products.webspace.domain.description")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UAlert, {
                class: "mt-4",
                color: "neutral",
                variant: "subtle",
                actions: [{ label: _ctx.$t("products.webspace.domain.action"), to: unref(localePath)("/products/domain"), size: "md" }]
              }, {
                title: withCtx(() => [
                  createVNode("span", { class: "text-lg" }, toDisplayString(_ctx.$t("products.webspace.domain.title")), 1)
                ]),
                description: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("products.webspace.domain.description")), 1)
                ]),
                _: 1
              }, 8, ["actions"])
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
//# sourceMappingURL=index-yBFIH3Cy.mjs.map
