import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { c as useLocale, h as useAppConfig, t as tv, L as __nuxt_component_0$1, M as pickLinkProps, U as ULinkBase, j as __nuxt_component_1, p as __nuxt_component_3, n as get, _ as _appConfig, u as useLocalePath, b as useSeoMeta } from './server.mjs';
import { U as UPageSection } from './PageSection.vue.mjs';
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
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'vaul-vue';
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-(--ui-primary)",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-(--ui-text-muted)"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-(--ui-primary) font-semibold"
      },
      "false": {
        "link": "text-(--ui-text-muted) font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    }
  ]
};

var _a;
const appConfigBreadcrumb = _appConfig;
const breadcrumb = tv({ extend: tv(theme), ...((_a = appConfigBreadcrumb.ui) == null ? void 0 : _a.breadcrumb) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { default: "nav" },
    items: {},
    separatorIcon: {},
    labelKey: { default: "label" },
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = breadcrumb();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "aria-label": "breadcrumb",
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(`<ol class="${ssrRenderClass(unref(ui).list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, index) => {
              var _a4, _b2;
              _push2(`<!--[--><li class="${ssrRenderClass(unref(ui).item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(__nuxt_component_0$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  var _a5, _b3;
                  if (_push3) {
                    _push3(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": active && index === _ctx.items.length - 1 ? "page" : void 0,
                      class: unref(ui).link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a6;
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === _ctx.items.length - 1,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              if (item.icon) {
                                _push4(ssrRenderComponent(__nuxt_component_1, {
                                  name: item.icon,
                                  class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(__nuxt_component_3, mergeProps({
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span class="${ssrRenderClass(unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLabel }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === _ctx.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              index
                            }, () => {
                              var _a6;
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                }, () => {
                                  var _a7, _b4, _c;
                                  return [
                                    item.icon ? (openBlock(), createBlock(__nuxt_component_1, {
                                      key: 0,
                                      name: item.icon,
                                      class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_3, mergeProps({
                                      key: 1,
                                      size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                      ref_for: true
                                    }, item.avatar, {
                                      class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLabel })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: index === _ctx.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                })
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": active && index === _ctx.items.length - 1 ? "page" : void 0,
                        class: unref(ui).link({ class: [(_b3 = props.ui) == null ? void 0 : _b3.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a6;
                            return [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              }, () => {
                                var _a7, _b4, _c;
                                return [
                                  item.icon ? (openBlock(), createBlock(__nuxt_component_1, {
                                    key: 0,
                                    name: item.icon,
                                    class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_3, mergeProps({
                                    key: 1,
                                    size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                    ref_for: true
                                  }, item.avatar, {
                                    class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ];
                              }),
                              unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLabel })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              })
                            ];
                          })
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < _ctx.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" class="${ssrRenderClass(unref(ui).separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", {}, () => {
                  var _a5;
                  _push2(ssrRenderComponent(__nuxt_component_1, {
                    name: separatorIcon.value,
                    class: unref(ui).separatorIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.separatorIcon })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              createVNode("ol", {
                class: unref(ui).list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  var _a4, _b2;
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      class: unref(ui).item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                    }, [
                      createVNode(__nuxt_component_0$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => {
                          var _a5;
                          return [
                            createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                              as: "span",
                              "aria-current": active && index === _ctx.items.length - 1 ? "page" : void 0,
                              class: unref(ui).link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot || "item", {
                                  item,
                                  index
                                }, () => {
                                  var _a6;
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                      item,
                                      active: index === _ctx.items.length - 1,
                                      index
                                    }, () => {
                                      var _a7, _b3, _c;
                                      return [
                                        item.icon ? (openBlock(), createBlock(__nuxt_component_1, {
                                          key: 0,
                                          name: item.icon,
                                          class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_3, mergeProps({
                                          key: 1,
                                          size: ((_b3 = props.ui) == null ? void 0 : _b3.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                          ref_for: true
                                        }, item.avatar, {
                                          class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLabel })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                        item,
                                        active: index === _ctx.items.length - 1,
                                        index
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true),
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                      item,
                                      active: index === _ctx.items.length - 1,
                                      index
                                    })
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["aria-current", "class"])
                          ];
                        }),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < _ctx.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      class: unref(ui).separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                    }, [
                      renderSlot(_ctx.$slots, "separator", {}, () => {
                        var _a5;
                        return [
                          createVNode(__nuxt_component_1, {
                            name: separatorIcon.value,
                            class: unref(ui).separatorIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.separatorIcon })
                          }, null, 8, ["name", "class"])
                        ];
                      })
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "UBreadcrumb" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const links = [{
      label: "Newsroom",
      to: localePath("/newsroom"),
      icon: "i-heroicons-newspaper"
    }, {
      label: "Kategorie",
      to: localePath("/newsroom/category"),
      icon: "i-heroicons-tag"
    }, {
      label: "Beispiel Beitrag",
      icon: "i-heroicons-link"
    }];
    useSeoMeta({
      title: "Newsroom",
      ogTitle: "Newsroom",
      description: "",
      ogDescription: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumb = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(UPageSection), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center min-h-[65vh]"${_scopeId}><h1 class="text-5xl font-bold"${_scopeId}>Beispiel Beitrag</h1><div class="flex justify-center opacity-75 mb-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBreadcrumb, { items: links }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center"${_scopeId}><img src="https://picsum.photos/id/12/640/360" alt="Blog Image" class="rounded-lg mt-4 w-[100vh] h-auto"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center min-h-[65vh]" }, [
                createVNode("h1", { class: "text-5xl font-bold" }, "Beispiel Beitrag"),
                createVNode("div", { class: "flex justify-center opacity-75 mb-4 mt-4" }, [
                  createVNode(_component_UBreadcrumb, { items: links })
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("img", {
                    src: "https://picsum.photos/id/12/640/360",
                    alt: "Blog Image",
                    class: "rounded-lg mt-4 w-[100vh] h-auto"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center"><div><div class="w-full max-w-6xl text-xl"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</div><div class="mt-10 mb-4 opacity-25">${ssrInterpolate(_ctx.$t("newsroom.published") + " 01.01.1998")}</div></div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsroom/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue.mjs.map
