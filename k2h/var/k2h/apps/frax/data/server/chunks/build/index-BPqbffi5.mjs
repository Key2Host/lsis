import { _ as _sfc_main$3 } from './PageHero-CUSKVwEs.mjs';
import { a as useLocalePath, b as useI18n, c as useHead, d as useSeoMeta, _ as _sfc_main$z, e as _sfc_main$o, f as __nuxt_component_3$1, u as useAppConfig, t as tv } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, computed, mergeProps, createBlock, openBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { Primitive } from 'reka-ui';
import { _ as _sfc_main$4 } from './PageSection-L79DhNqT.mjs';
import { _ as _sfc_main$5 } from './PageGrid-jMdvXiF3.mjs';
import { _ as _sfc_main$6 } from './PageCard-mXkQPsP4.mjs';
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

const _imports_0 = publicAssetsURL("/video/Intro.mp4");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-2a92cdde><div class="bg-background border-gradient rounded-xl p-4" data-v-2a92cdde><div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-950/10 dark:border-white/10" data-v-2a92cdde><video${ssrRenderAttr("src", _imports_0)} autoplay playsinline muted data-v-2a92cdde></video></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IntroVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a92cdde"]]), { __name: "IntroVideo" });
const theme = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "[animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$1 = {
  __name: "UPageMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageMarquee) || {} })({
        pauseOnHover: props.pauseOnHover,
        orientation: props.orientation,
        reverse: props.reverse,
        overlay: props.overlay
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              var _a2;
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: [(_a2 = props.ui) == null ? void 0 : _a2.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                var _a2;
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ui.value.content({ class: [(_a2 = props.ui) == null ? void 0 : _a2.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const { t } = useI18n({
      useScope: "global"
    });
    useHead({
      titleTemplate: "%s"
    });
    useSeoMeta({
      title: t("index.hero.title"),
      ogTitle: t("index.hero.title"),
      description: t("index.hero.description"),
      ogDescription: t("index.hero.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$3;
      const _component_UBadge = _sfc_main$o;
      const _component_NuxtLinkLocale = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$z;
      const _component_IntroVideo = __nuxt_component_4;
      const _component_UPageMarquee = _sfc_main$1;
      const _component_UPageSection = _sfc_main$4;
      const _component_UPageGrid = _sfc_main$5;
      const _component_UPageCard = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: _ctx.$t("index.hero.title"),
        description: _ctx.$t("index.hero.description"),
        links: [
          { color: "neutral", label: _ctx.$t("index.hero.links.news"), icon: "i-heroicons-newspaper", trailing: true, to: unref(localePath)("/newsroom"), size: "xl" },
          { variant: "outline", color: "neutral", label: _ctx.$t("index.hero.links.startnow"), icon: "i-heroicons-arrow-right-20-solid", size: "xl", to: unref(localePath)("https://auth.key2host.com/"), target: "_blank" }
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
                  _push3(ssrRenderComponent(_component_NuxtLinkLocale, {
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
                  _push3(` ${ssrInterpolate(_ctx.$t("index.hero.headline"))} `);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-top-right-on-square-20-solid",
                    class: "ml-1 w-4 h-4 pointer-events-none"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLinkLocale, {
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
                    createTextVNode(" " + toDisplayString(_ctx.$t("index.hero.headline")) + " ", 1),
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
                  createVNode(_component_NuxtLinkLocale, {
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
                  createTextVNode(" " + toDisplayString(_ctx.$t("index.hero.headline")) + " ", 1),
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
            _push2(ssrRenderComponent(_component_IntroVideo, null, null, _parent2, _scopeId));
            _push2(`<h1 class="text-center text-lg mt-4 font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("index.partners.title"))}</h1>`);
            _push2(ssrRenderComponent(_component_UPageMarquee, null, {
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
                    name: "i-simple-icons-nginx",
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
                      name: "i-simple-icons-nginx",
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
              createVNode(_component_IntroVideo),
              createVNode("h1", { class: "text-center text-lg mt-4 font-bold" }, toDisplayString(_ctx.$t("index.partners.title")), 1),
              createVNode(_component_UPageMarquee, null, {
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
                    name: "i-simple-icons-nginx",
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
      _push(ssrRenderComponent(_component_UPageSection, {
        title: _ctx.$t("index.features.title"),
        description: _ctx.$t("index.features.description"),
        headline: _ctx.$t("index.features.headline")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageGrid, { class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.1.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.1.description"),
                    icon: "i-heroicons-cog"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.2.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.2.description"),
                    icon: "i-heroicons-rocket-launch"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.3.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.3.description"),
                    icon: "i-heroicons-shield-check"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.4.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.4.description"),
                    icon: "i-heroicons-question-mark-circle"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.5.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.5.description"),
                    icon: "i-heroicons-globe-europe-africa"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.6.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.6.description"),
                    icon: "i-heroicons-lock-closed"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.1.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.1.description"),
                      icon: "i-heroicons-cog"
                    }, null, 8, ["title", "description"]),
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.2.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.2.description"),
                      icon: "i-heroicons-rocket-launch"
                    }, null, 8, ["title", "description"]),
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.3.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.3.description"),
                      icon: "i-heroicons-shield-check"
                    }, null, 8, ["title", "description"]),
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.4.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.4.description"),
                      icon: "i-heroicons-question-mark-circle"
                    }, null, 8, ["title", "description"]),
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.5.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.5.description"),
                      icon: "i-heroicons-globe-europe-africa"
                    }, null, 8, ["title", "description"]),
                    createVNode(_component_UPageCard, {
                      title: _ctx.$t("index.features.items.6.title"),
                      spotlight: "",
                      description: _ctx.$t("index.features.items.6.description"),
                      icon: "i-heroicons-lock-closed"
                    }, null, 8, ["title", "description"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageGrid, { class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]" }, {
                default: withCtx(() => [
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.1.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.1.description"),
                    icon: "i-heroicons-cog"
                  }, null, 8, ["title", "description"]),
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.2.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.2.description"),
                    icon: "i-heroicons-rocket-launch"
                  }, null, 8, ["title", "description"]),
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.3.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.3.description"),
                    icon: "i-heroicons-shield-check"
                  }, null, 8, ["title", "description"]),
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.4.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.4.description"),
                    icon: "i-heroicons-question-mark-circle"
                  }, null, 8, ["title", "description"]),
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.5.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.5.description"),
                    icon: "i-heroicons-globe-europe-africa"
                  }, null, 8, ["title", "description"]),
                  createVNode(_component_UPageCard, {
                    title: _ctx.$t("index.features.items.6.title"),
                    spotlight: "",
                    description: _ctx.$t("index.features.items.6.description"),
                    icon: "i-heroicons-lock-closed"
                  }, null, 8, ["title", "description"])
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BPqbffi5.mjs.map
