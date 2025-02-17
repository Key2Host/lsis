import { _ as __nuxt_component_0 } from './LandingHero-CV1LSvXp.mjs';
import { _ as _export_sfc, a1 as useHead, u as useSeoMeta, F as useUI, X as __nuxt_component_0$e, a0 as getNuxtLinkProps, a2 as __nuxt_component_1$2, C as __nuxt_component_1$3, W as __nuxt_component_0$4, D as __nuxt_component_4$3 } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, createTextVNode, mergeProps, computed, toRef, unref, openBlock, createBlock, renderSlot, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0$1 } from './LandingSection-bJhjn_Li.mjs';
import { _ as __nuxt_component_7 } from './PageGrid-Bo6wnstB.mjs';
import { _ as __nuxt_component_1 } from './LandingCard-ChX3qaiO.mjs';
import { _ as __nuxt_component_1$1 } from './PageColumns-D1EC_Nhp.mjs';
import 'tailwind-merge';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';

const _imports_0 = publicAssetsURL("/vid/Key2host.mp4");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-e4060487><div class="bg-background border-gradient rounded-xl p-4" data-v-e4060487><div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-950/10 dark:border-white/10" data-v-e4060487><video${ssrRenderAttr("src", _imports_0)} autoplay playsinline muted data-v-e4060487></video></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImagePlaceholder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e4060487"]]), { __name: "ImagePlaceholder" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingLogos",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: undefined
    },
    align: {
      type: String,
      default: "center"
    },
    class: {
      type: [String, Object, Array],
      default: undefined
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config = computed(() => {
      const wrapper = {
        center: "text-center",
        right: "text-right",
        left: "text-left"
      }[props.align];
      return {
        wrapper,
        title: "text-lg font-semibold leading-8 text-gray-900 dark:text-white",
        images: "mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"
      };
    });
    const { ui, attrs } = useUI("landing.logos", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.title) {
        _push(`<h2 class="${ssrRenderClass(unref(ui).title)}">${ssrInterpolate(__props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).images)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingLogos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "ULandingLogos" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingTestimonial",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: undefined
    },
    quote: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      default: undefined
    },
    card: {
      type: Boolean,
      default: true
    },
    class: {
      type: [String, Object, Array],
      default: undefined
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config = computed(() => {
      const card = {};
      if (!props.card) {
        card.ring = "";
        card.rounded = "";
        card.background = "";
        card.shadow = "";
        card.divide = "";
      }
      const padding = props.card ? undefined : "";
      return {
        ...card,
        body: {
          base: "flex flex-col",
          padding
        },
        wrapper: "relative",
        quote: "text-gray-600 dark:text-gray-300",
        icon: {
          wrapper: "mb-6 flex",
          base: "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
        },
        author: {
          wrapper: "flex items-center gap-3 mt-6 relative",
          name: "font-semibold text-gray-900 dark:text-white text-sm",
          description: "text-gray-500 dark:text-gray-400 text-sm",
          avatar: {
            base: "",
            size: "md"
          }
        }
      };
    });
    const { ui, attrs } = useUI("landing.testimonial", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$4;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UAvatar = __nuxt_component_4$3;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), { ui: unref(ui) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (__props.icon || _ctx.$slots.icon) {
              _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}"${_scopeId}>`);
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
            if (__props.quote || _ctx.$slots.quote) {
              _push2(`<q class="${ssrRenderClass(unref(ui).quote)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "quote", {}, () => {
                _push2(`${ssrInterpolate(__props.quote)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</q>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.author) {
              _push2(`<div class="${ssrRenderClass(unref(ui).author.wrapper)}"${_scopeId}>`);
              if (__props.author.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({
                  alt: __props.author.name
                }, { size: unref(ui).author.avatar.size, ...__props.author.avatar }, {
                  class: unref(ui).author.avatar.base
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>`);
              if (__props.author.to) {
                _push2(ssrRenderComponent(unref(__nuxt_component_0$e), mergeProps({
                  "aria-label": __props.author.name
                }, unref(getNuxtLinkProps)(__props.author), {
                  class: "focus:outline-none",
                  tabindex: "-1"
                }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
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
              _push2(`<p class="${ssrRenderClass(unref(ui).author.name)}"${_scopeId}>${ssrInterpolate(__props.author.name)}</p><p class="${ssrRenderClass(unref(ui).author.description)}"${_scopeId}>${ssrInterpolate(__props.author.description)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).icon.wrapper
                }, [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(_component_UIcon, {
                      name: __props.icon,
                      class: unref(ui).icon.base
                    }, null, 8, ["name", "class"])
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.quote || _ctx.$slots.quote ? (openBlock(), createBlock("q", {
                  key: 1,
                  class: unref(ui).quote
                }, [
                  renderSlot(_ctx.$slots, "quote", {}, () => [
                    createTextVNode(toDisplayString(__props.quote), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.author ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).author.wrapper
                }, [
                  __props.author.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                    key: 0,
                    alt: __props.author.name
                  }, { size: unref(ui).author.avatar.size, ...__props.author.avatar }, {
                    class: unref(ui).author.avatar.base
                  }), null, 16, ["alt", "class"])) : createCommentVNode("", true),
                  createVNode("div", null, [
                    __props.author.to ? (openBlock(), createBlock(unref(__nuxt_component_0$e), mergeProps({
                      key: 0,
                      "aria-label": __props.author.name
                    }, unref(getNuxtLinkProps)(__props.author), {
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
                    createVNode("p", {
                      class: unref(ui).author.name
                    }, toDisplayString(__props.author.name), 3),
                    createVNode("p", {
                      class: unref(ui).author.description
                    }, toDisplayString(__props.author.description), 3)
                  ])
                ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingTestimonial.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_10 = Object.assign(_sfc_main$1, { __name: "ULandingTestimonial" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s"
    });
    useSeoMeta({
      title: "Dein Weg ins Internet mit Key2Host",
      ogTitle: "Dein Weg ins Internet mit Key2Host",
      description: "",
      ogDescription: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingHero = __nuxt_component_0;
      const _component_UBadge = __nuxt_component_1$2;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_ImagePlaceholder = __nuxt_component_4;
      const _component_ULandingLogos = __nuxt_component_5;
      const _component_ULandingSection = __nuxt_component_0$1;
      const _component_UPageGrid = __nuxt_component_7;
      const _component_ULandingCard = __nuxt_component_1;
      const _component_UPageColumns = __nuxt_component_1$1;
      const _component_ULandingTestimonial = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ULandingHero, {
        title: "Dein Weg ins Internet mit Key2Host",
        description: "Warum kompliziert, wenn es auch einfach geht? Mit Key2Host hast du alles, was du brauchst, an einem Ort. Ob Hosting, Domains oder Lizenzen – wir sind dein Schlüssel zur digitalen Welt.",
        links: [
          { label: "Produkte durchsuchen", icon: "i-heroicons-shopping-bag", trailing: true, to: "#products", size: "xl" },
          { label: "Jetzt loslegen", icon: "i-heroicons-arrow-right-20-solid", size: "xl", color: "gray", to: "https://cp.key2host.com/", target: "_blank" }
        ]
      }, {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              variant: "subtle",
              size: "lg",
              class: "relative rounded-full font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://docs.key2host.com/",
                    target: "_blank",
                    class: "focus:outline-none",
                    tabindex: "-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="absolute inset-0" aria-hidden="true"${_scopeId3}></span>`);
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
                  }, _parent3, _scopeId2));
                  _push3(` Zur Dokumentation `);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-top-right-on-square-20-solid",
                    class: "ml-1 w-4 h-4 pointer-events-none"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "https://docs.key2host.com/",
                      target: "_blank",
                      class: "focus:outline-none",
                      tabindex: "-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "absolute inset-0",
                          "aria-hidden": "true"
                        })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Zur Dokumentation "),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-top-right-on-square-20-solid",
                      class: "ml-1 w-4 h-4 pointer-events-none"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                variant: "subtle",
                size: "lg",
                class: "relative rounded-full font-semibold"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "https://docs.key2host.com/",
                    target: "_blank",
                    class: "focus:outline-none",
                    tabindex: "-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Zur Dokumentation "),
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-arrow-top-right-on-square-20-solid",
                    class: "ml-1 w-4 h-4 pointer-events-none"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ImagePlaceholder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ULandingLogos, {
              title: "Die Besten der Welt vertrauen auf uns",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-simple-icons-cloudflare",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-simple-icons-mysql",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-simple-icons-docker",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-simple-icons-debian",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-simple-icons-nuxt",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-cloudflare",
                      class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-mysql",
                      class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-docker",
                      class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-debian",
                      class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-nuxt",
                      class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ImagePlaceholder),
              createVNode(_component_ULandingLogos, {
                title: "Die Besten der Welt vertrauen auf uns",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: "i-simple-icons-cloudflare",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }),
                  createVNode(_component_UIcon, {
                    name: "i-simple-icons-mysql",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }),
                  createVNode(_component_UIcon, {
                    name: "i-simple-icons-docker",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }),
                  createVNode(_component_UIcon, {
                    name: "i-simple-icons-debian",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  }),
                  createVNode(_component_UIcon, {
                    name: "i-simple-icons-nuxt",
                    class: "w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        title: "Warum Key2Host?",
        description: "Wieso Sie sich für Key2Host entscheiden sollten, stellen wir Ihnen transparent zur Verfügung. Hier finden Sie unsere wichtigsten Features!",
        headline: "Features"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageGrid, {
              id: "features",
              class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "Einfache Verwaltung",
                    description: "Unsere Plattform ist so gestaltet, dass auch Einsteiger sie problemlos nutzen können. Starten Sie mit Key2Host, selbst wenn Sie keine Vorkenntnisse haben!",
                    icon: "i-heroicons-cog"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "Hohe Performance",
                    description: "Erleben Sie blitzschnelle Ladezeiten, selbst bei hoher Auslastung – dank unserer leistungsstarken und zuverlässigen Infrastruktur.",
                    icon: "i-heroicons-rocket-launch"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "Sicherheit",
                    description: "Mit höchsten Sicherheitsstandards und regelmäßigen Updates schützen wir Ihre Daten und halten Schwachstellen fern.",
                    icon: "i-heroicons-shield-check"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "24/7 Support",
                    description: "Unser erfahrenes Support-Team steht Ihnen rund um die Uhr zur Verfügung, um alle Fragen schnell und kompetent zu beantworten.",
                    icon: "i-heroicons-question-mark-circle"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "Globale Standorte",
                    description: "Mit unseren Server-Standorten in vielen Ländern garantieren wir Ihnen weltweit optimale Verfügbarkeit und schnelle Verbindungen.",
                    icon: "i-heroicons-globe-europe-africa"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingCard, {
                    title: "Datenschutz",
                    description: "Wir garantieren Ihnen höchste Standards im Umgang mit Ihren Daten – sicher, transparent und DSGVO-konform.",
                    icon: "i-heroicons-lock-closed"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ULandingCard, {
                      title: "Einfache Verwaltung",
                      description: "Unsere Plattform ist so gestaltet, dass auch Einsteiger sie problemlos nutzen können. Starten Sie mit Key2Host, selbst wenn Sie keine Vorkenntnisse haben!",
                      icon: "i-heroicons-cog"
                    }),
                    createVNode(_component_ULandingCard, {
                      title: "Hohe Performance",
                      description: "Erleben Sie blitzschnelle Ladezeiten, selbst bei hoher Auslastung – dank unserer leistungsstarken und zuverlässigen Infrastruktur.",
                      icon: "i-heroicons-rocket-launch"
                    }),
                    createVNode(_component_ULandingCard, {
                      title: "Sicherheit",
                      description: "Mit höchsten Sicherheitsstandards und regelmäßigen Updates schützen wir Ihre Daten und halten Schwachstellen fern.",
                      icon: "i-heroicons-shield-check"
                    }),
                    createVNode(_component_ULandingCard, {
                      title: "24/7 Support",
                      description: "Unser erfahrenes Support-Team steht Ihnen rund um die Uhr zur Verfügung, um alle Fragen schnell und kompetent zu beantworten.",
                      icon: "i-heroicons-question-mark-circle"
                    }),
                    createVNode(_component_ULandingCard, {
                      title: "Globale Standorte",
                      description: "Mit unseren Server-Standorten in vielen Ländern garantieren wir Ihnen weltweit optimale Verfügbarkeit und schnelle Verbindungen.",
                      icon: "i-heroicons-globe-europe-africa"
                    }),
                    createVNode(_component_ULandingCard, {
                      title: "Datenschutz",
                      description: "Wir garantieren Ihnen höchste Standards im Umgang mit Ihren Daten – sicher, transparent und DSGVO-konform.",
                      icon: "i-heroicons-lock-closed"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageGrid, {
                id: "features",
                class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ULandingCard, {
                    title: "Einfache Verwaltung",
                    description: "Unsere Plattform ist so gestaltet, dass auch Einsteiger sie problemlos nutzen können. Starten Sie mit Key2Host, selbst wenn Sie keine Vorkenntnisse haben!",
                    icon: "i-heroicons-cog"
                  }),
                  createVNode(_component_ULandingCard, {
                    title: "Hohe Performance",
                    description: "Erleben Sie blitzschnelle Ladezeiten, selbst bei hoher Auslastung – dank unserer leistungsstarken und zuverlässigen Infrastruktur.",
                    icon: "i-heroicons-rocket-launch"
                  }),
                  createVNode(_component_ULandingCard, {
                    title: "Sicherheit",
                    description: "Mit höchsten Sicherheitsstandards und regelmäßigen Updates schützen wir Ihre Daten und halten Schwachstellen fern.",
                    icon: "i-heroicons-shield-check"
                  }),
                  createVNode(_component_ULandingCard, {
                    title: "24/7 Support",
                    description: "Unser erfahrenes Support-Team steht Ihnen rund um die Uhr zur Verfügung, um alle Fragen schnell und kompetent zu beantworten.",
                    icon: "i-heroicons-question-mark-circle"
                  }),
                  createVNode(_component_ULandingCard, {
                    title: "Globale Standorte",
                    description: "Mit unseren Server-Standorten in vielen Ländern garantieren wir Ihnen weltweit optimale Verfügbarkeit und schnelle Verbindungen.",
                    icon: "i-heroicons-globe-europe-africa"
                  }),
                  createVNode(_component_ULandingCard, {
                    title: "Datenschutz",
                    description: "Wir garantieren Ihnen höchste Standards im Umgang mit Ihren Daten – sicher, transparent und DSGVO-konform.",
                    icon: "i-heroicons-lock-closed"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: "Rezensionen",
        title: "Was unsere Kunden sagen",
        description: "Proident sunt exercitation minim laborum enim laboris labore esse."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageColumns, {
              id: "testimonials",
              class: "xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
                    author: {
                      name: "Rose Roberson",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=1" }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
                    author: {
                      name: "Chace Rodgers",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=7" }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.",
                    author: {
                      name: "Cornelius Sheppard",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=3" }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.",
                    author: {
                      name: "Destinee Woods",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=5" }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
                    author: {
                      name: "Kaleb Mccormick",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=8" }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ULandingTestimonial, {
                    quote: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt. Aute est dolore commodo sint officia ad laboris dolor magna aliquip exercitation tempor commodo.",
                    author: {
                      name: "Jazmin Mccall",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=9" }
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
                      author: {
                        name: "Rose Roberson",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=1" }
                      }
                    }),
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
                      author: {
                        name: "Chace Rodgers",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=7" }
                      }
                    }),
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.",
                      author: {
                        name: "Cornelius Sheppard",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=3" }
                      }
                    }),
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.",
                      author: {
                        name: "Destinee Woods",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=5" }
                      }
                    }),
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
                      author: {
                        name: "Kaleb Mccormick",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=8" }
                      }
                    }),
                    createVNode(_component_ULandingTestimonial, {
                      quote: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt. Aute est dolore commodo sint officia ad laboris dolor magna aliquip exercitation tempor commodo.",
                      author: {
                        name: "Jazmin Mccall",
                        description: "CEO at Company",
                        avatar: { src: "https://i.pravatar.cc/120?img=9" }
                      }
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageColumns, {
                id: "testimonials",
                class: "xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
                    author: {
                      name: "Rose Roberson",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=1" }
                    }
                  }),
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
                    author: {
                      name: "Chace Rodgers",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=7" }
                    }
                  }),
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.",
                    author: {
                      name: "Cornelius Sheppard",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=3" }
                    }
                  }),
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.",
                    author: {
                      name: "Destinee Woods",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=5" }
                    }
                  }),
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
                    author: {
                      name: "Kaleb Mccormick",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=8" }
                    }
                  }),
                  createVNode(_component_ULandingTestimonial, {
                    quote: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt. Aute est dolore commodo sint officia ad laboris dolor magna aliquip exercitation tempor commodo.",
                    author: {
                      name: "Jazmin Mccall",
                      description: "CEO at Company",
                      avatar: { src: "https://i.pravatar.cc/120?img=9" }
                    }
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BMv6U4sh.mjs.map
