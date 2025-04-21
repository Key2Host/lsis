import { U as UPageSection } from './PageSection.vue.mjs';
import { _ as __nuxt_component_7 } from './PageGrid.vue.mjs';
import { _ as __nuxt_component_2 } from './PageCard.vue.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as useI18n, b as useSeoMeta } from './server.mjs';
import 'reka-ui';
import '@vueuse/core';
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
import 'ipx';
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
      const _component_UPageSection = UPageSection;
      const _component_UPageGrid = __nuxt_component_7;
      const _component_UPageCard = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: _ctx.$t("partners.title"),
        description: _ctx.$t("partners.description")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageGrid, {
              id: "features",
              class: "scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(partners.value, (partner, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      to: partner.url,
                      target: "_blank"
                    }, {
                      description: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", partner.name + " Logo")} class="rounded-lg w-32 h-32"${_scopeId3}><div class="ml-4"${_scopeId3}><span class="text-xl font-bold"${_scopeId3}>${ssrInterpolate(partner.name)}</span><br${_scopeId3}><span class="text-sm"${_scopeId3}>${ssrInterpolate(partner.slogan)}</span></div></div>`);
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
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
                      }, 1032, ["to"]);
                    }), 128))
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
                  (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index) => {
                    return openBlock(), createBlock(_component_UPageCard, {
                      key: index,
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
                    }, 1032, ["to"]);
                  }), 128))
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partners.vue.mjs.map
