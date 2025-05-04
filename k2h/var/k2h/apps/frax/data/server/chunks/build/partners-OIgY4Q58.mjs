import { M as Motion, _ as _sfc_main$1 } from './PageSection-Bp1Prz50.mjs';
import { _ as _sfc_main$2 } from './PageGrid-jMdvXiF3.mjs';
import { _ as _sfc_main$3 } from './PageCard-BAQPfmtU.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n, d as useSeoMeta } from './server.mjs';
import 'hey-listen';
import 'reka-ui';
import '../nitro/nitro.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "partners",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "global"
    });
    const partners = ref([
      {
        name: "DJ MPL",
        logo: "/img/partners/dj_mpl.svg",
        url: "https://www.dj-mpl.de/",
        slogan: "Musik von 50er bis Techno"
      }
    ]);
    useSeoMeta({
      title: t("partners.title"),
      ogTitle: t("partners.title"),
      description: t("partners.description"),
      ogDescription: t("partners.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Motion = Motion;
      const _component_UPageSection = _sfc_main$1;
      const _component_UPageGrid = _sfc_main$2;
      const _component_UPageCard = _sfc_main$3;
      _push(ssrRenderComponent(_component_Motion, mergeProps({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: _ctx.$t("partners.title"),
              description: _ctx.$t("partners.description")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, {
                    id: "features",
                    class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(partners.value, (partner, index) => {
                          _push4(ssrRenderComponent(_component_Motion, {
                            key: index,
                            initial: { opacity: 0, scale: 0.95, y: 20 },
                            whileInView: { opacity: 1, scale: 1, y: 0 },
                            transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
                            viewport: "{ once: true }"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UPageCard, {
                                  to: partner.url,
                                  target: "_blank"
                                }, {
                                  description: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex items-center"${_scopeId5}><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", partner.name + " Logo")} class="rounded-lg w-32 h-32"${_scopeId5}><div class="ml-4"${_scopeId5}><span class="text-xl font-bold"${_scopeId5}>${ssrInterpolate(partner.name)}</span><br${_scopeId5}><span class="text-sm"${_scopeId5}>${ssrInterpolate(partner.slogan)}</span></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode("img", {
                                            src: partner.logo,
                                            alt: partner.name + " Logo",
                                            class: "rounded-lg w-32 h-32"
                                          }, null, 8, ["src", "alt"]),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("span", { class: "text-xl font-bold" }, toDisplayString(partner.name), 1),
                                            createVNode("br"),
                                            createVNode("span", { class: "text-sm" }, toDisplayString(partner.slogan), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UPageCard, {
                                    to: partner.url,
                                    target: "_blank"
                                  }, {
                                    description: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("img", {
                                          src: partner.logo,
                                          alt: partner.name + " Logo",
                                          class: "rounded-lg w-32 h-32"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode("div", { class: "ml-4" }, [
                                          createVNode("span", { class: "text-xl font-bold" }, toDisplayString(partner.name), 1),
                                          createVNode("br"),
                                          createVNode("span", { class: "text-sm" }, toDisplayString(partner.slogan), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index) => {
                            return openBlock(), createBlock(_component_Motion, {
                              key: index,
                              initial: { opacity: 0, scale: 0.95, y: 20 },
                              whileInView: { opacity: 1, scale: 1, y: 0 },
                              transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
                              viewport: "{ once: true }"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UPageCard, {
                                  to: partner.url,
                                  target: "_blank"
                                }, {
                                  description: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("img", {
                                        src: partner.logo,
                                        alt: partner.name + " Logo",
                                        class: "rounded-lg w-32 h-32"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode("div", { class: "ml-4" }, [
                                        createVNode("span", { class: "text-xl font-bold" }, toDisplayString(partner.name), 1),
                                        createVNode("br"),
                                        createVNode("span", { class: "text-sm" }, toDisplayString(partner.slogan), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["transition"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, {
                      id: "features",
                      class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index) => {
                          return openBlock(), createBlock(_component_Motion, {
                            key: index,
                            initial: { opacity: 0, scale: 0.95, y: 20 },
                            whileInView: { opacity: 1, scale: 1, y: 0 },
                            transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
                            viewport: "{ once: true }"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UPageCard, {
                                to: partner.url,
                                target: "_blank"
                              }, {
                                description: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("img", {
                                      src: partner.logo,
                                      alt: partner.name + " Logo",
                                      class: "rounded-lg w-32 h-32"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", { class: "ml-4" }, [
                                      createVNode("span", { class: "text-xl font-bold" }, toDisplayString(partner.name), 1),
                                      createVNode("br"),
                                      createVNode("span", { class: "text-sm" }, toDisplayString(partner.slogan), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1032, ["transition"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageSection, {
                title: _ctx.$t("partners.title"),
                description: _ctx.$t("partners.description")
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageGrid, {
                    id: "features",
                    class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index) => {
                        return openBlock(), createBlock(_component_Motion, {
                          key: index,
                          initial: { opacity: 0, scale: 0.95, y: 20 },
                          whileInView: { opacity: 1, scale: 1, y: 0 },
                          transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
                          viewport: "{ once: true }"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UPageCard, {
                              to: partner.url,
                              target: "_blank"
                            }, {
                              description: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("img", {
                                    src: partner.logo,
                                    alt: partner.name + " Logo",
                                    class: "rounded-lg w-32 h-32"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", { class: "ml-4" }, [
                                    createVNode("span", { class: "text-xl font-bold" }, toDisplayString(partner.name), 1),
                                    createVNode("br"),
                                    createVNode("span", { class: "text-sm" }, toDisplayString(partner.slogan), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1032, ["transition"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partners-OIgY4Q58.mjs.map
