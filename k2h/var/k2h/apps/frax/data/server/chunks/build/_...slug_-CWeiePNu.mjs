import { _ as _sfc_main$5 } from './PageSection-L79DhNqT.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, useSlots, computed, mergeProps, renderSlot, createTextVNode, Fragment, renderList, toRaw, resolveComponent, defineAsyncComponent, h, getCurrentInstance, reactive, watch, Text, Comment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { a as useLocalePath, Z as useRoute, U as useAsyncData, $ as createError, d as useSeoMeta, m as useLocale, u as useAppConfig, n as tv$1, R as _sfc_main$v, X as pickLinkProps, Y as _sfc_main$w, _ as _sfc_main$z, F as _sfc_main$x, D as get$1, B as createReusableTemplate, t as tv, M as useRuntimeConfig } from './server.mjs';
import { _ as _sfc_main$6 } from './PageBody-DQTQFfQj.mjs';
import { V as pascalCase, W as kebabCase, h as destr } from '../nitro/nitro.mjs';
import { find, html } from 'property-information';
import { f as flatUnwrap, n as nodeTextContent } from './node-HU5lVDmC.mjs';
import { q as queryCollection, a as queryCollectionItemSurroundings } from './app-tjEfcztH.mjs';
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

function decompressTree(input) {
  return {
    type: "root",
    children: input.value.map(decompressNode)
  };
}
function decompressNode(input) {
  if (typeof input === "string") {
    return {
      type: "text",
      value: input
    };
  }
  const [tag, props, ...children] = input;
  return {
    type: "element",
    tag,
    props,
    children: children.map(decompressNode)
  };
}
const theme$1 = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
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
          "hover:text-default",
          "transition-colors"
        ]
      }
    }
  ]
};
const _sfc_main$4 = {
  __name: "UBreadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    items: { type: Array, required: false },
    separatorIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.breadcrumb) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-label": "breadcrumb",
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<ol class="${ssrRenderClass(ui.value.list({ class: (_a2 = props.ui) == null ? void 0 : _a2.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              var _a3, _b2;
              _push2(`<!--[--><li class="${ssrRenderClass(ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$v, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  var _a4, _b3;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$w, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                      class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a5;
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, () => {
                              var _a6, _b4, _c;
                              if (item.icon) {
                                _push4(ssrRenderComponent(_sfc_main$z, {
                                  name: item.icon,
                                  class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active: index === __props.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(_sfc_main$x, mergeProps({
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === __props.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get$1)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              index
                            }, () => {
                              var _a5;
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => {
                                  var _a6, _b4, _c;
                                  return [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active: index === __props.items.length - 1 })
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                      key: 1,
                                      size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize(),
                                      ref_for: true
                                    }, item.avatar, {
                                      class: ui.value.linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === __props.items.length - 1 })
                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: index === __props.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get$1)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: index === __props.items.length - 1,
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
                      createVNode(_sfc_main$w, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                        class: ui.value.link({ class: [(_b3 = props.ui) == null ? void 0 : _b3.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a5;
                            return [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => {
                                var _a6, _b4, _c;
                                return [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                    key: 0,
                                    name: item.icon,
                                    class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active: index === __props.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                    key: 1,
                                    size: ((_b4 = props.ui) == null ? void 0 : _b4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize(),
                                    ref_for: true
                                  }, item.avatar, {
                                    class: ui.value.linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === __props.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ];
                              }),
                              unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get$1)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: index === __props.items.length - 1,
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
              if (index < __props.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", {}, () => {
                  var _a4;
                  _push2(ssrRenderComponent(_sfc_main$z, {
                    name: separatorIcon.value,
                    class: ui.value.separatorIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.separatorIcon })
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
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  var _a3, _b2;
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item })
                    }, [
                      createVNode(_sfc_main$v, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => {
                          var _a4;
                          return [
                            createVNode(_sfc_main$w, mergeProps({ ref_for: true }, slotProps, {
                              as: "span",
                              "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                              class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot || "item", {
                                  item,
                                  index
                                }, () => {
                                  var _a5;
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                      item,
                                      active: index === __props.items.length - 1,
                                      index
                                    }, () => {
                                      var _a6, _b3, _c;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                          key: 0,
                                          name: item.icon,
                                          class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active: index === __props.items.length - 1 })
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                          key: 1,
                                          size: ((_b3 = props.ui) == null ? void 0 : _b3.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize(),
                                          ref_for: true
                                        }, item.avatar, {
                                          class: ui.value.linkLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.linkLeadingAvatar, active: index === __props.items.length - 1 })
                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                        item,
                                        active: index === __props.items.length - 1,
                                        index
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get$1)(item, props.labelKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true),
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                      item,
                                      active: index === __props.items.length - 1,
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
                    index < __props.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                    }, [
                      renderSlot(_ctx.$slots, "separator", {}, () => {
                        var _a4;
                        return [
                          createVNode(_sfc_main$z, {
                            name: separatorIcon.value,
                            class: ui.value.separatorIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.separatorIcon })
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
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    const value = get(obj, key);
    if (value !== void 0) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function get(obj, key) {
  return key.split(".").reduce((acc, k) => acc && acc[k], obj);
}
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const specialParentTags = ["math", "svg"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const _sfc_main$3 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) to bind to the component
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: void 0
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  async setup(props) {
    var _a, _b, _c;
    const app = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app;
    const $nuxt = app == null ? void 0 : app.$nuxt;
    const route = ($nuxt == null ? void 0 : $nuxt.$route) || ($nuxt == null ? void 0 : $nuxt._route);
    const { mdc } = ((_c = $nuxt == null ? void 0 : $nuxt.$config) == null ? void 0 : _c.public) || {};
    const tags = computed(() => {
      var _a2, _b2, _c2, _d;
      return {
        ...((_a2 = mdc == null ? void 0 : mdc.components) == null ? void 0 : _a2.prose) && props.prose !== false ? proseComponentMap : {},
        ...((_b2 = mdc == null ? void 0 : mdc.components) == null ? void 0 : _b2.map) || {},
        ...toRaw(((_d = (_c2 = props.data) == null ? void 0 : _c2.mdc) == null ? void 0 : _d.components) || {}),
        ...props.components
      };
    });
    const contentKey = computed(() => {
      var _a2;
      const components2 = (((_a2 = props.body) == null ? void 0 : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components2)).sort().join(".");
    });
    const runtimeData = reactive({
      ...props.data
    });
    watch(() => props.data, (newData) => {
      Object.assign(runtimeData, newData);
    });
    await resolveContentComponents(props.body, { tags: tags.value });
    function updateRuntimeData(code, value) {
      const lastIndex = code.split(".").length - 1;
      return code.split(".").reduce((o, k, i) => {
        if (i == lastIndex && o) {
          o[k] = value;
          return o[k];
        }
        return typeof o === "object" ? o[k] : void 0;
      }, runtimeData);
    }
    return { tags, contentKey, route, runtimeData, updateRuntimeData };
  },
  render(ctx) {
    var _a, _b;
    const { tags, tag, body, data, contentKey, route, unwrap, runtimeData, updateRuntimeData } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route, runtimeData, updateRuntimeData };
    const component = tag !== false ? resolveComponentInstance(tag || ((_a = meta.component) == null ? void 0 : _a.name) || meta.component || "div") : void 0;
    return component ? h(component, { ...(_b = meta.component) == null ? void 0 : _b.props, class: ctx.class, ...this.$attrs, key: contentKey }, { default: defaultSlotRenderer }) : defaultSlotRenderer == null ? void 0 : defaultSlotRenderer();
    function defaultSlotRenderer() {
      const defaultSlot = _renderSlots(body, h, { documentMeta: meta, parentScope: meta, resolveComponent: resolveComponentInstance });
      if (!(defaultSlot == null ? void 0 : defaultSlot.default)) {
        return null;
      }
      if (unwrap) {
        return flatUnwrap(
          defaultSlot.default(),
          typeof unwrap === "string" ? unwrap.split(" ") : ["*"]
        );
      }
      return defaultSlot.default();
    }
  }
});
function _renderNode(node, h2, options, keyInParent) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const _resolveComponent = isUnresolvableTag(renderTag) ? (component2) => component2 : resolveComponent2;
  if (renderTag === "script") {
    return h2(
      "pre",
      { class: "script-to-pre" },
      "<script>\n" + nodeTextContent(node) + "\n<\/script>"
    );
  }
  const component = _resolveComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  if (keyInParent) {
    props.key = keyInParent;
  }
  return h2(
    component,
    props,
    _renderSlots(
      node,
      h2,
      {
        documentMeta,
        parentScope: { ...parentScope, ...props },
        resolveComponent: _resolveComponent
      }
    )
  );
}
function _renderSlots(node, h2, options) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].children.push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || { props: {}, children: [] };
    if (node2.type === "element") {
      data[slotName].props = node2.props;
      data[slotName].children.push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: { props: {}, children: [] }
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, { props, children: children2 }]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = (data = {}) => {
      const scopedProps = pick(data, Object.keys(props || {}));
      let vNodes = children2.map((child, index) => {
        var _a;
        return _renderNode(
          child,
          h2,
          {
            documentMeta,
            parentScope: { ...parentScope, ...scopedProps },
            resolveComponent: resolveComponent2
          },
          String(((_a = child.props) == null ? void 0 : _a.key) || index)
        );
      });
      if (props == null ? void 0 : props.unwrap) {
        vNodes = flatUnwrap(vNodes, props.unwrap);
      }
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a, _b;
  const data = {
    ...documentMeta.runtimeData,
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return void 0;
  }, data);
  const defaultValue = (_b = node.props) == null ? void 0 : _b.defaultValue;
  return h2(Text, value ?? defaultValue ?? "");
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key)) {
      return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
  var _a;
  const propName = ((_a = key.match(/^v-model:([^=]+)/)) == null ? void 0 : _a[1]) || "modelValue";
  const field = native ? "value" : propName;
  const event = native ? "onInput" : `onUpdate:${propName}`;
  data[field] = evalInContext(value, documentMeta.runtimeData);
  data[event] = (e) => {
    var _a2;
    documentMeta.updateRuntimeData(value, native ? (_a2 = e.target) == null ? void 0 : _a2.value : e);
  };
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveComponentInstance = (component) => {
  if (typeof component === "string") {
    if (htmlTags.includes(component)) {
      return component;
    }
    const _component = resolveComponent(pascalCase(component), false);
    if (!component || (_component == null ? void 0 : _component.name) === "AsyncComponentWrapper") {
      return _component;
    }
    if (typeof _component === "string") {
      return _component;
    }
    if ("setup" in _component) {
      return defineAsyncComponent(() => new Promise((resolve) => resolve(_component)));
    }
    return _component;
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function isUnresolvableTag(tag) {
  return specialParentTags.includes(tag);
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components2 = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components2.map(async (c) => {
    if ((c == null ? void 0 : c.render) || (c == null ? void 0 : c.ssrRender) || (c == null ? void 0 : c.__ssrInlineRender)) {
      return;
    }
    const resolvedComponent = resolveComponentInstance(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    if (isUnresolvableTag(renderTag)) {
      return [];
    }
    const components22 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components22.push(renderTag);
    }
    for (const child of node.children || []) {
      components22.push(...loadComponents(child, documentMeta));
    }
    return components22;
  }
}
function findMappedTag(node, tags) {
  var _a;
  const tag = node.tag;
  if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MDCRenderer = Object.assign(_sfc_main$3, { __name: "MDCRenderer" });
const globalComponents = ["ProseA", "ProseAccordion", "ProseAccordionItem", "ProseBadge", "ProseBlockquote", "ProseCallout", "ProseCard", "ProseCardGroup", "ProseCode", "ProseCodeCollapse", "ProseCodeGroup", "ProseCodeIcon", "ProseCodePreview", "ProseCodeTree", "ProseCollapsible", "ProseEm", "ProseField", "ProseFieldGroup", "ProseH1", "ProseH2", "ProseH3", "ProseH4", "ProseHr", "ProseIcon", "ProseImg", "ProseKbd", "ProseLi", "ProseOl", "ProseP", "ProsePre", "ProseScript", "ProseSteps", "ProseStrong", "ProseTable", "ProseTabs", "ProseTabsItem", "ProseTbody", "ProseTd", "ProseTh", "ProseThead", "ProseTr", "ProseUl", "ProseCaution", "ProseNote", "ProseTip", "ProseWarning", "ProseH5", "ProseH6", "Icon"];
const localComponents = [];
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  globalComponents,
  localComponents
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "ContentRenderer",
  __ssrInlineRender: true,
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(__props) {
    const renderFunctions = ["render", "ssrRender", "__ssrInlineRender"];
    const props = __props;
    const debug = false;
    const body = computed(() => {
      let body2 = props.value.body || props.value;
      if (props.excerpt && props.value.excerpt) {
        body2 = props.value.excerpt;
      }
      if (body2.type === "minimal") {
        return decompressTree(body2);
      }
      return body2;
    });
    const isEmpty = computed(() => {
      var _a, _b;
      return !((_b = (_a = body.value) == null ? void 0 : _a.children) == null ? void 0 : _b.length);
    });
    const data = computed(() => {
      const { body: body2, excerpt, ...data2 } = props.value;
      return {
        ...data2,
        ...props.data
      };
    });
    const proseComponentMap2 = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
    const { mdc } = useRuntimeConfig().public || {};
    const tags = computed(() => {
      var _a, _b, _c, _d;
      return {
        ...((_a = mdc == null ? void 0 : mdc.components) == null ? void 0 : _a.prose) && props.prose !== false ? proseComponentMap2 : {},
        ...((_b = mdc == null ? void 0 : mdc.components) == null ? void 0 : _b.map) || {},
        ...toRaw(((_d = (_c = props.data) == null ? void 0 : _c.mdc) == null ? void 0 : _d.components) || {}),
        ...props.components
      };
    });
    const componentsMap = computed(() => {
      return body.value ? resolveContentComponents2(body.value, { tags: tags.value }) : {};
    });
    function resolveVueComponent(component) {
      let _component = component;
      if (typeof component === "string") {
        if (htmlTags.includes(component)) {
          return component;
        }
        if (globalComponents.includes(pascalCase(component))) {
          _component = resolveComponent(component, false);
        } else if (localComponents.includes(pascalCase(component))) {
          const loader = () => {
            return Promise.resolve().then(function() {
              return components;
            }).then((m) => {
              const comp = m[pascalCase(component)];
              return comp ? comp() : void 0;
            });
          };
          _component = defineAsyncComponent(loader);
        }
        if (typeof _component === "string") {
          return _component;
        }
      }
      if (!_component) {
        return _component;
      }
      const componentObject = _component;
      if ("__asyncLoader" in componentObject) {
        return componentObject;
      }
      if ("setup" in componentObject) {
        return defineAsyncComponent(() => Promise.resolve(componentObject));
      }
      return componentObject;
    }
    function resolveContentComponents2(body2, meta) {
      if (!body2) {
        return;
      }
      const components2 = Array.from(new Set(loadComponents(body2, meta)));
      const result = {};
      for (const [tag, component] of components2) {
        if (result[tag]) {
          continue;
        }
        if (typeof component === "object" && renderFunctions.some((fn) => Object.hasOwnProperty.call(component, fn))) {
          result[tag] = component;
          continue;
        }
        result[tag] = resolveVueComponent(component);
      }
      return result;
    }
    function loadComponents(node, documentMeta) {
      const tag = node.tag;
      if (node.type === "text" || tag === "binding" || node.type === "comment") {
        return [];
      }
      const renderTag = findMappedTag2(node, documentMeta.tags);
      const components2 = [];
      if (node.type !== "root" && !htmlTags.includes(renderTag)) {
        components2.push([tag, renderTag]);
      }
      for (const child of node.children || []) {
        components2.push(...loadComponents(child, documentMeta));
      }
      return components2;
    }
    function findMappedTag2(node, tags2) {
      var _a;
      const tag = node.tag;
      if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
        return tag;
      }
      return tags2[tag] || tags2[pascalCase(tag)] || tags2[kebabCase(node.tag)] || tag;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!isEmpty.value) {
        _push(ssrRenderComponent(MDCRenderer, mergeProps({
          body: body.value,
          data: data.value,
          class: props.class,
          tag: props.tag,
          prose: props.prose,
          unwrap: props.unwrap,
          components: componentsMap.value,
          "data-content-id": unref(debug) ? __props.value.id : void 0
        }, _attrs), null, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "empty", {
          body: body.value,
          data: data.value,
          dataContentId: unref(debug) ? __props.value.id : void 0
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "ContentRenderer" });
const theme = {
  "slots": {
    "root": "grid grid-cols-1 sm:grid-cols-2 gap-8",
    "link": [
      "group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary",
      "transition-colors"
    ],
    "linkLeading": [
      "inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50",
      "transition"
    ],
    "linkLeadingIcon": [
      "size-5 shrink-0 text-highlighted group-hover:text-primary",
      "transition-[color,translate]"
    ],
    "linkTitle": "font-medium text-[15px] text-highlighted mb-1 truncate",
    "linkDescription": "text-sm text-muted line-clamp-2"
  },
  "variants": {
    "direction": {
      "left": {
        "linkLeadingIcon": [
          "group-active:-translate-x-0.5"
        ]
      },
      "right": {
        "link": "text-right",
        "linkLeadingIcon": [
          "group-active:translate-x-0.5"
        ]
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UContentSurround",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prevIcon: { type: String, required: false },
    nextIcon: { type: String, required: false },
    surround: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate({
      props: {
        link: Object,
        icon: String,
        direction: String
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.contentSurround) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ULink = _sfc_main$v;
      const _component_UIcon = _sfc_main$z;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ link, icon, direction }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (link) {
              _push2(ssrRenderComponent(_component_ULink, {
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [(_a2 = props.ui) == null ? void 0 : _a2.link, link.class], direction })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "link", { link }, () => {
                      var _a3, _b2, _c;
                      _push3(`<div class="${ssrRenderClass(ui.value.linkLeading({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLeading }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-leading", { link }, () => {
                        var _a4;
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, direction })
                        }, null, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div><p class="${ssrRenderClass(ui.value.linkTitle({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTitle }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-title", { link }, () => {
                        _push3(`${ssrInterpolate(link.title)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p><p class="${ssrRenderClass(ui.value.linkDescription({ class: (_c = props.ui) == null ? void 0 : _c.linkDescription }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-description", { link }, () => {
                        _push3(`${ssrInterpolate(link.description)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "link", { link }, () => {
                        var _a3, _b2, _c;
                        return [
                          createVNode("div", {
                            class: ui.value.linkLeading({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLeading })
                          }, [
                            renderSlot(_ctx.$slots, "link-leading", { link }, () => {
                              var _a4;
                              return [
                                createVNode(_component_UIcon, {
                                  name: link.icon || icon,
                                  class: ui.value.linkLeadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, direction })
                                }, null, 8, ["name", "class"])
                              ];
                            })
                          ], 2),
                          createVNode("p", {
                            class: ui.value.linkTitle({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTitle })
                          }, [
                            renderSlot(_ctx.$slots, "link-title", { link }, () => [
                              createTextVNode(toDisplayString(link.title), 1)
                            ])
                          ], 2),
                          createVNode("p", {
                            class: ui.value.linkDescription({ class: (_c = props.ui) == null ? void 0 : _c.linkDescription })
                          }, [
                            renderSlot(_ctx.$slots, "link-description", { link }, () => [
                              createTextVNode(toDisplayString(link.description), 1)
                            ])
                          ], 2)
                        ];
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span class="hidden lg:block"${_scopeId}> </span>`);
            }
          } else {
            return [
              link ? (openBlock(), createBlock(_component_ULink, {
                key: 0,
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [(_b = props.ui) == null ? void 0 : _b.link, link.class], direction })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "link", { link }, () => {
                    var _a3, _b2, _c;
                    return [
                      createVNode("div", {
                        class: ui.value.linkLeading({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLeading })
                      }, [
                        renderSlot(_ctx.$slots, "link-leading", { link }, () => {
                          var _a4;
                          return [
                            createVNode(_component_UIcon, {
                              name: link.icon || icon,
                              class: ui.value.linkLeadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, direction })
                            }, null, 8, ["name", "class"])
                          ];
                        })
                      ], 2),
                      createVNode("p", {
                        class: ui.value.linkTitle({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTitle })
                      }, [
                        renderSlot(_ctx.$slots, "link-title", { link }, () => [
                          createTextVNode(toDisplayString(link.title), 1)
                        ])
                      ], 2),
                      createVNode("p", {
                        class: ui.value.linkDescription({ class: (_c = props.ui) == null ? void 0 : _c.linkDescription })
                      }, [
                        renderSlot(_ctx.$slots, "link-description", { link }, () => [
                          createTextVNode(toDisplayString(link.description), 1)
                        ])
                      ], 2)
                    ];
                  })
                ]),
                _: 2
              }, 1032, ["to", "class"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "hidden lg:block"
              }, " "))
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.surround) {
        _push(ssrRenderComponent(unref(Primitive), {
          as: __props.as,
          class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[0],
                icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                direction: "left"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[1],
                icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                direction: "right"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[0],
                  icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                  direction: "left"
                }, null, 8, ["link", "icon"]),
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[1],
                  icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                  direction: "right"
                }, null, 8, ["link", "icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("newsroom").path(route.path).first(),
      "$H3lX3p5hVG"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${route.path}-surround`,
      () => queryCollectionItemSurroundings("newsroom", route.path, {
        fields: ["description"]
      })
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    function truncate(text, length) {
      return text.length > length ? text.substring(0, length) + "…" : text;
    }
    const links = [{
      label: "Newsroom",
      to: localePath("/newsroom"),
      icon: "i-heroicons-newspaper"
    }, {
      label: truncate(page.value.title, 25),
      icon: "i-heroicons-link"
    }];
    useSeoMeta({
      title: page.value.title,
      ogTitle: page.value.title,
      description: page.value.description,
      ogDescription: page.value.description,
      robots: "noindex, nofollow",
      ogImage: page.value.image,
      twitterImage: page.value.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$5;
      const _component_UBreadcrumb = _sfc_main$4;
      const _component_UPageBody = _sfc_main$6;
      const _component_ContentRenderer = __nuxt_component_3;
      const _component_UContentSurround = _sfc_main$1;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPageSection, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center text-center space-y-6"${_scopeId}><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(page).title)}</h1><div class="opacity-70"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBreadcrumb, { items: links }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full max-w-5xl"${_scopeId}><img${ssrRenderAttr("src", unref(page).image)}${ssrRenderAttr("alt", unref(page).title)} class="rounded-3xl w-full h-auto shadow-xl ring-1 ring-gray-300/30 dark:ring-white/10 transition-transform duration-300 hover:scale-[1.02]"${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(_component_UPageBody, { class: "w-full max-w-5xl text-lg md:text-xl mx-auto space-y-10" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(page).body) {
                      _push3(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(page).date) {
                      _push3(`<div class="text-center text-sm text-gray-500 italic"${_scopeId2}>${ssrInterpolate(_ctx.$t("newsroom.published") + " " + formatDate(unref(page).date))}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                        key: 0,
                        value: unref(page)
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      unref(page).date ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-center text-sm text-gray-500 italic"
                      }, toDisplayString(_ctx.$t("newsroom.published") + " " + formatDate(unref(page).date)), 1)) : createCommentVNode("", true),
                      createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center text-center space-y-6" }, [
                  createVNode("h1", { class: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white" }, toDisplayString(unref(page).title), 1),
                  createVNode("div", { class: "opacity-70" }, [
                    createVNode(_component_UBreadcrumb, { items: links })
                  ]),
                  createVNode("div", { class: "w-full max-w-5xl" }, [
                    createVNode("img", {
                      src: unref(page).image,
                      alt: unref(page).title,
                      class: "rounded-3xl w-full h-auto shadow-xl ring-1 ring-gray-300/30 dark:ring-white/10 transition-transform duration-300 hover:scale-[1.02]"
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode(_component_UPageBody, { class: "w-full max-w-5xl text-lg md:text-xl mx-auto space-y-10" }, {
                  default: withCtx(() => [
                    unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                      key: 0,
                      value: unref(page)
                    }, null, 8, ["value"])) : createCommentVNode("", true),
                    unref(page).date ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center text-sm text-gray-500 italic"
                    }, toDisplayString(_ctx.$t("newsroom.published") + " " + formatDate(unref(page).date)), 1)) : createCommentVNode("", true),
                    createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsroom/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CWeiePNu.mjs.map
