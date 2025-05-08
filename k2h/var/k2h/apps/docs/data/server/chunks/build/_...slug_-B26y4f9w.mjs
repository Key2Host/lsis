import { _ as _sfc_main$8 } from './Page-dDPOZdcf.mjs';
import { H as useRoute, a as useAppConfig, N as useAsyncData, O as queryCollection, c as createError, P as queryCollectionItemSurroundings, A as useSeoMeta, Q as findPageHeadline, R as _sfc_main$8$1, w as tv, h as _sfc_main$o, k as _sfc_main$p, _ as _sfc_main$t, s as useLocalePro, F as useRouter, G as useNuxtApp, p as pickLinkProps, m as _sfc_main$q, I as useOgImageRuntimeConfig, J as setHeadOgImagePrebuilt, K as getOgImagePath, M as createOgImageMeta, D as decompressTree, E as useRuntimeConfig } from './server.mjs';
import { defineComponent, inject, withAsyncContext, computed, unref, createSlots, withCtx, createBlock, createCommentVNode, createVNode, openBlock, useSlots, mergeProps, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, withModifiers, ref, toValue, toRaw, watch, resolveComponent, defineAsyncComponent, h, getCurrentInstance, reactive, Text, Comment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui';
import { ac as pascalCase, am as kebabCase, a9 as toRouteMatcher, aa as createRouter, $ as withoutTrailingSlash, U as defu, ab as withoutBase, l as destr } from '../nitro/nitro.mjs';
import { find, html } from 'property-information';
import { f as flatUnwrap, n as nodeTextContent } from './node-HU5lVDmC.mjs';
import { createReusableTemplate, reactivePick } from '@vueuse/core';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'ipx';

const theme$4 = {
  "slots": {
    "root": "relative border-b border-default py-8",
    "container": "",
    "wrapper": "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
    "headline": "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5",
    "title": "text-3xl sm:text-4xl text-pretty font-bold text-highlighted",
    "description": "text-lg text-pretty text-muted",
    "links": "flex flex-wrap items-center gap-1.5"
  },
  "variants": {
    "title": {
      "true": {
        "description": "mt-4"
      }
    }
  }
};
const _sfc_main$7 = {
  __name: "UPageHeader",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageHeader) || {} })({
        title: !!props.title || !!slots.title
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = _sfc_main$o;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (__props.headline || !!slots.headline) {
              _push2(`<div class="${ssrRenderClass(ui.value.headline({ class: (_a2 = props.ui) == null ? void 0 : _a2.headline }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                _push2(`${ssrInterpolate(__props.headline)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
            if (__props.title || !!slots.title) {
              _push2(`<h1 class="${ssrRenderClass(ui.value.title({ class: (_d = props.ui) == null ? void 0 : _d.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</h1>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links) {
              _push2(`<div class="${ssrRenderClass(ui.value.links({ class: (_f = props.ui) == null ? void 0 : _f.links }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    color: "neutral",
                    variant: "outline",
                    ref_for: true
                  }, link), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_g = props.ui) == null ? void 0 : _g.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.headline({ class: (_h = props.ui) == null ? void 0 : _h.headline })
              }, [
                renderSlot(_ctx.$slots, "headline", {}, () => [
                  createTextVNode(toDisplayString(__props.headline), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                createVNode("div", {
                  class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
                }, [
                  __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                    key: 0,
                    class: ui.value.title({ class: (_k = props.ui) == null ? void 0 : _k.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  ((_l = __props.links) == null ? void 0 : _l.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: ui.value.links({ class: (_m = props.ui) == null ? void 0 : _m.links })
                  }, [
                    renderSlot(_ctx.$slots, "links", {}, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                        return openBlock(), createBlock(_component_UButton, mergeProps({
                          key: index,
                          color: "neutral",
                          variant: "outline",
                          ref_for: true
                        }, link), null, 16);
                      }), 128))
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 2),
                __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.description({ class: (_n = props.ui) == null ? void 0 : _n.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$3 = {
  "base": "mt-8 pb-24 space-y-12"
};
const _sfc_main$6 = {
  __name: "UPageBody",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageBody) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageBody.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
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
const _sfc_main$5 = defineComponent({
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
      const components = (((_a2 = props.body) == null ? void 0 : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
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
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
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
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MDCRenderer = Object.assign(_sfc_main$5, { __name: "MDCRenderer" });
const globalComponents = ["ProseA", "ProseAccordion", "ProseAccordionItem", "ProseBadge", "ProseBlockquote", "ProseCallout", "ProseCard", "ProseCardGroup", "ProseCode", "ProseCodeCollapse", "ProseCodeGroup", "ProseCodeIcon", "ProseCodePreview", "ProseCodeTree", "ProseCollapsible", "ProseEm", "ProseField", "ProseFieldGroup", "ProseH1", "ProseH2", "ProseH3", "ProseH4", "ProseHr", "ProseIcon", "ProseImg", "ProseKbd", "ProseLi", "ProseOl", "ProseP", "ProsePre", "ProseScript", "ProseSteps", "ProseStrong", "ProseTable", "ProseTabs", "ProseTabsItem", "ProseTbody", "ProseTd", "ProseTh", "ProseThead", "ProseTr", "ProseUl", "ProseCaution", "ProseNote", "ProseTip", "ProseWarning", "ProseH5", "ProseH6", "Icon"];
const localComponents = [];
const virtual_nuxt__2FUsers_2Flpoggemann_2FKey2Host_2Fdocs_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcontent_2Fcomponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  globalComponents,
  localComponents
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
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
              return virtual_nuxt__2FUsers_2Flpoggemann_2FKey2Host_2Fdocs_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcontent_2Fcomponents;
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
      const components = Array.from(new Set(loadComponents(body2, meta)));
      const result = {};
      for (const [tag, component] of components) {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "ContentRenderer" });
const theme$2 = {
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
const _sfc_main$3 = {
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
      return tv({ extend: tv(theme$2), ...((_a = appConfig.uiPro) == null ? void 0 : _a.contentSurround) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ULink = _sfc_main$p;
      const _component_UIcon = _sfc_main$t;
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useScrollspy() {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  function updateHeadings(headings) {
    headings.forEach((heading) => {
      if (!observer.value) {
        return;
      }
      observer.value.observe(heading);
    });
  }
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
}
const theme$1 = {
  "slots": {
    "root": "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
    "container": "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col",
    "top": "",
    "bottom": "mt-6 hidden lg:flex lg:flex-col gap-6",
    "trigger": "group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary",
    "title": "truncate",
    "trailing": "ms-auto inline-flex gap-1.5 items-center",
    "trailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "list": "min-w-0",
    "listWithChildren": "ms-3",
    "item": "min-w-0",
    "itemWithChildren": "",
    "link": "group relative text-sm flex items-center focus-visible:outline-primary py-1",
    "linkText": "truncate",
    "indicator": "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "highlightColor": {
      "primary": {
        "indicator": "bg-primary"
      },
      "secondary": {
        "indicator": "bg-secondary"
      },
      "success": {
        "indicator": "bg-success"
      },
      "info": {
        "indicator": "bg-info"
      },
      "warning": {
        "indicator": "bg-warning"
      },
      "error": {
        "indicator": "bg-error"
      },
      "neutral": {
        "indicator": "bg-inverted"
      }
    },
    "active": {
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    },
    "highlight": {
      "true": {
        "list": "ms-2.5 ps-4 border-s border-default",
        "item": "-ms-px"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error"
      }
    },
    {
      "color": "neutral",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary"
  }
};
const _sfc_main$2 = {
  __name: "UContentToc",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    trailingIcon: { type: String, required: false },
    title: { type: String, required: false },
    color: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false }
  },
  emits: ["update:open", "move"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "open", "defaultOpen"), emits);
    const { t } = useLocalePro();
    const router = useRouter();
    const appConfig = useAppConfig();
    const { activeHeadings, updateHeadings } = useScrollspy();
    const [DefineListTemplate, ReuseListTemplate] = createReusableTemplate({
      props: {
        links: Array,
        level: Number
      }
    });
    const [DefineTriggerTemplate, ReuseTriggerTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.uiPro) == null ? void 0 : _a.contentToc) || {} })({
        color: props.color,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    function scrollToHeading(id) {
      const encodedId = encodeURIComponent(id);
      router.push(`#${encodedId}`);
      emits("move", id);
    }
    {
      const nuxtApp = useNuxtApp();
      nuxtApp.hooks.hookOnce("page:finish", () => {
        updateHeadings([
          ...(void 0).querySelectorAll("h2"),
          ...(void 0).querySelectorAll("h3")
        ]);
      });
    }
    function flattenLinks(links) {
      return links.flatMap((link) => [link, ...link.children ? flattenLinks(link.children) : []]);
    }
    const indicatorStyle = computed(() => {
      var _a;
      if (!((_a = activeHeadings.value) == null ? void 0 : _a.length)) {
        return;
      }
      const flatLinks = flattenLinks(props.links || []);
      const activeIndex = flatLinks.findIndex((link) => activeHeadings.value.includes(link.id));
      const linkHeight = 28;
      const gapSize = 0;
      return {
        "--indicator-size": `${linkHeight * activeHeadings.value.length + gapSize * (activeHeadings.value.length - 1)}px`,
        "--indicator-position": activeIndex >= 0 ? `${activeIndex * (linkHeight + gapSize)}px` : "0px"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$t;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineListTemplate), null, {
        default: withCtx(({ links, level }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<ul class="${ssrRenderClass(level > 0 ? ui.value.listWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.listWithChildren }) : ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(links, (link, index) => {
              var _a3, _b2, _c2, _d2;
              _push2(`<li class="${ssrRenderClass(link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item }))}"${_scopeId}><a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(ui.value.link({ class: [(_c2 = props.ui) == null ? void 0 : _c2.link, link.class], active: unref(activeHeadings).includes(link.id) }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "link", { link }, () => {
                var _a4;
                _push2(`<span class="${ssrRenderClass(ui.value.linkText({ class: (_a4 = props.ui) == null ? void 0 : _a4.linkText }))}"${_scopeId}>${ssrInterpolate(link.text)}</span>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</a>`);
              if ((_d2 = link.children) == null ? void 0 : _d2.length) {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: link.children,
                  level: level + 1
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", {
                class: level > 0 ? ui.value.listWithChildren({ class: (_c = props.ui) == null ? void 0 : _c.listWithChildren }) : ui.value.list({ class: (_d = props.ui) == null ? void 0 : _d.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(links, (link, index) => {
                  var _a3, _b2, _c2, _d2;
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item })
                  }, [
                    createVNode("a", {
                      href: `#${link.id}`,
                      class: ui.value.link({ class: [(_c2 = props.ui) == null ? void 0 : _c2.link, link.class], active: unref(activeHeadings).includes(link.id) }),
                      onClick: withModifiers(($event) => scrollToHeading(link.id), ["prevent"])
                    }, [
                      renderSlot(_ctx.$slots, "link", { link }, () => {
                        var _a4;
                        return [
                          createVNode("span", {
                            class: ui.value.linkText({ class: (_a4 = props.ui) == null ? void 0 : _a4.linkText })
                          }, toDisplayString(link.text), 3)
                        ];
                      })
                    ], 10, ["href", "onClick"]),
                    ((_d2 = link.children) == null ? void 0 : _d2.length) ? (openBlock(), createBlock(unref(ReuseListTemplate), {
                      key: 0,
                      links: link.children,
                      level: level + 1
                    }, null, 8, ["links", "level"])) : createCommentVNode("", true)
                  ], 2);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineTriggerTemplate), null, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { open }, null, _push2, _parent2, _scopeId);
            _push2(`<span class="${ssrRenderClass(ui.value.title({ class: (_a2 = props.ui) == null ? void 0 : _a2.title }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { open }, () => {
              _push2(`${ssrInterpolate(__props.title || unref(t)("contentToc.title"))}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span><span class="${ssrRenderClass(ui.value.trailing({ class: (_b = props.ui) == null ? void 0 : _b.trailing }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "trailing", { open }, () => {
              var _a3;
              _push2(ssrRenderComponent(_component_UIcon, {
                name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { open }),
              createVNode("span", {
                class: ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title })
              }, [
                renderSlot(_ctx.$slots, "default", { open }, () => [
                  createTextVNode(toDisplayString(__props.title || unref(t)("contentToc.title")), 1)
                ])
              ], 2),
              createVNode("span", {
                class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { open }, () => {
                  var _a3;
                  return [
                    createVNode(_component_UIcon, {
                      name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                    }, null, 8, ["name", "class"])
                  ];
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        "default-open": __props.defaultOpen,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: (_b = props.ui) == null ? void 0 : _b.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = __props.links) == null ? void 0 : _c.length) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), {
                class: ui.value.trigger({ class: "lg:hidden" })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(CollapsibleContent), {
                class: ui.value.content({ class: [(_d = props.ui) == null ? void 0 : _d.content, "lg:hidden"] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    if (__props.highlight) {
                      _push3(`<div class="${ssrRenderClass(ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                      _push3(ssrRenderComponent(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      __props.highlight ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                        style: indicatorStyle.value
                      }, null, 6)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                        createVNode(unref(ReuseListTemplate), {
                          links: __props.links,
                          level: 0
                        }, null, 8, ["links"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="${ssrRenderClass(ui.value.trigger({ class: "hidden lg:flex" }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent2, _scopeId));
              _push2(`</p><div class="${ssrRenderClass(ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, "hidden lg:flex"] }))}"${_scopeId}>`);
              if (__props.highlight) {
                _push2(`<div class="${ssrRenderClass(ui.value.indicator({ class: (_f = props.ui) == null ? void 0 : _f.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: __props.links,
                  level: 0
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.bottom) {
              _push2(`<div class="${ssrRenderClass(ui.value.bottom({ class: (_g = props.ui) == null ? void 0 : _g.bottom }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_h = props.ui) == null ? void 0 : _h.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: (_i = props.ui) == null ? void 0 : _i.top })
                }, [
                  renderSlot(_ctx.$slots, "top", { links: __props.links })
                ], 2)) : createCommentVNode("", true),
                ((_j = __props.links) == null ? void 0 : _j.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(unref(CollapsibleTrigger), {
                    class: ui.value.trigger({ class: "lg:hidden" })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  createVNode(unref(CollapsibleContent), {
                    class: ui.value.content({ class: [(_k = props.ui) == null ? void 0 : _k.content, "lg:hidden"] })
                  }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        __props.highlight ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                          style: indicatorStyle.value
                        }, null, 6)) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                          createVNode(unref(ReuseListTemplate), {
                            links: __props.links,
                            level: 0
                          }, null, 8, ["links"])
                        ])
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]),
                  createVNode("p", {
                    class: ui.value.trigger({ class: "hidden lg:flex" })
                  }, [
                    createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                  ], 2),
                  createVNode("div", {
                    class: ui.value.content({ class: [(_l = props.ui) == null ? void 0 : _l.content, "hidden lg:flex"] })
                  }, [
                    __props.highlight ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.indicator({ class: (_m = props.ui) == null ? void 0 : _m.indicator }),
                      style: indicatorStyle.value
                    }, null, 6)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                      createVNode(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, 8, ["links"])
                    ])
                  ], 2)
                ], 64)) : createCommentVNode("", true),
                !!slots.bottom ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.bottom({ class: (_n = props.ui) == null ? void 0 : _n.bottom })
                }, [
                  renderSlot(_ctx.$slots, "bottom", { links: __props.links })
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "flex flex-col gap-3",
    "title": "text-sm font-semibold flex items-center gap-1.5",
    "list": "flex flex-col gap-2",
    "item": "relative",
    "link": "group text-sm flex items-center gap-1.5 focus-visible:outline-primary",
    "linkLeadingIcon": "size-5 shrink-0",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "size-3 absolute top-0 text-dimmed"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-medium"
      },
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageLinks",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    title: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageLinks) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ULink = _sfc_main$p;
      const _component_ULinkBase = _sfc_main$q;
      const _component_UIcon = _sfc_main$t;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            if (__props.title || !!slots.title) {
              _push2(`<p class="${ssrRenderClass(ui.value.title({ class: (_a2 = props.ui) == null ? void 0 : _a2.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="${ssrRenderClass(ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.links, (link, index) => {
              var _a3;
              _push2(`<li class="${ssrRenderClass(ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  var _a4, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                      class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, link.class], active })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "link", {
                            link,
                            active
                          }, () => {
                            var _a5, _b3;
                            ssrRenderSlot(_ctx.$slots, "link-leading", {
                              link,
                              active
                            }, () => {
                              var _a6;
                              if (link.icon) {
                                _push4(ssrRenderComponent(_component_UIcon, {
                                  name: link.icon,
                                  class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (link.label || !!slots["link-label"]) {
                              _push4(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel, active }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, "link-label", {
                                link,
                                active
                              }, () => {
                                _push4(`${ssrInterpolate(link.label)}`);
                              }, _push4, _parent4, _scopeId3);
                              if (link.target === "_blank") {
                                _push4(ssrRenderComponent(_component_UIcon, {
                                  name: unref(appConfig).ui.icons.external,
                                  class: ui.value.linkLabelExternalIcon({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkLabelExternalIcon, active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, "link-trailing", {
                              link,
                              active
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "link", {
                              link,
                              active
                            }, () => {
                              var _a5, _b3;
                              return [
                                renderSlot(_ctx.$slots, "link-leading", {
                                  link,
                                  active
                                }, () => {
                                  var _a6;
                                  return [
                                    link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: link.icon,
                                      class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel, active })
                                }, [
                                  renderSlot(_ctx.$slots, "link-label", {
                                    link,
                                    active
                                  }, () => [
                                    createTextVNode(toDisplayString(link.label), 1)
                                  ]),
                                  link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: unref(appConfig).ui.icons.external,
                                    class: ui.value.linkLabelExternalIcon({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkLabelExternalIcon, active })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "link-trailing", {
                                  link,
                                  active
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
                      createVNode(_component_ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                        class: ui.value.link({ class: [(_b2 = props.ui) == null ? void 0 : _b2.link, link.class], active })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "link", {
                            link,
                            active
                          }, () => {
                            var _a5, _b3;
                            return [
                              renderSlot(_ctx.$slots, "link-leading", {
                                link,
                                active
                              }, () => {
                                var _a6;
                                return [
                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: link.icon,
                                    class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ];
                              }),
                              link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel, active })
                              }, [
                                renderSlot(_ctx.$slots, "link-label", {
                                  link,
                                  active
                                }, () => [
                                  createTextVNode(toDisplayString(link.label), 1)
                                ]),
                                link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: unref(appConfig).ui.icons.external,
                                  class: ui.value.linkLabelExternalIcon({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkLabelExternalIcon, active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "link-trailing", {
                                link,
                                active
                              })
                            ];
                          })
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              __props.title || !!slots.title ? (openBlock(), createBlock("p", {
                key: 0,
                class: ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title })
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("ul", {
                class: ui.value.list({ class: (_d = props.ui) == null ? void 0 : _d.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                  var _a3;
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item })
                  }, [
                    createVNode(_component_ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a4;
                        return [
                          createVNode(_component_ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                            class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, link.class], active })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "link", {
                                link,
                                active
                              }, () => {
                                var _a5, _b2;
                                return [
                                  renderSlot(_ctx.$slots, "link-leading", {
                                    link,
                                    active
                                  }, () => {
                                    var _a6;
                                    return [
                                      link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                        key: 0,
                                        name: link.icon,
                                        class: ui.value.linkLeadingIcon({ class: (_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, active })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.linkLabel({ class: (_a5 = props.ui) == null ? void 0 : _a5.linkLabel, active })
                                  }, [
                                    renderSlot(_ctx.$slots, "link-label", {
                                      link,
                                      active
                                    }, () => [
                                      createTextVNode(toDisplayString(link.label), 1)
                                    ]),
                                    link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: unref(appConfig).ui.icons.external,
                                      class: ui.value.linkLabelExternalIcon({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLabelExternalIcon, active })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "link-trailing", {
                                    link,
                                    active
                                  })
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1040)
                  ], 2);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries((nitro == null ? void 0 : nitro.routeRules) || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}
function defineOgImage(_options = {}) {
  var _a, _b, _c;
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath).ogImage;
  if (!_options || ((_c = (_b = (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event.context._nitro) == null ? void 0 : _b.routeRules) == null ? void 0 : _c.ogImage) === false || typeof routeRules !== "undefined" && routeRules === false) {
    ogImageInstances.forEach((e) => {
      e.dispose();
    });
    nuxtApp.ssrContext._ogImageInstances = void 0;
    return;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  for (const key in routeRules) {
    if (options[key] === void 0)
      options[key] = routeRules[key];
  }
  for (const key in defaults) {
    if (options[key] === void 0)
      options[key] = defaults[key];
  }
  if (route.query)
    options._query = route.query;
  if (options.url) {
    setHeadOgImagePrebuilt(options);
    return;
  }
  const path = getOgImagePath(basePath, options);
  createOgImageMeta(path, options, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const { toc } = useAppConfig();
    const navigation = inject("navigation");
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => queryCollection("docs").path(route.path).first(), "$BPopkF1nvN")), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    }
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`${route.path}-surround`, () => {
      return queryCollectionItemSurroundings("docs", route.path, {
        fields: ["description"]
      });
    })), __temp = await __temp, __restore(), __temp);
    const title = ((_a = page.value.seo) == null ? void 0 : _a.title) || page.value.title;
    const description = ((_b = page.value.seo) == null ? void 0 : _b.description) || page.value.description;
    useSeoMeta({
      title,
      ogTitle: title,
      description,
      ogDescription: description
    });
    const headline = computed(() => findPageHeadline(navigation == null ? void 0 : navigation.value, page.value));
    defineOgImageComponent("Docs", {
      headline: headline.value
    });
    const links = computed(() => {
      var _a2;
      const links2 = [];
      return [...links2, ...((_a2 = toc == null ? void 0 : toc.bottom) == null ? void 0 : _a2.links) || []].filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d;
      const _component_UPage = _sfc_main$8;
      const _component_UPageHeader = _sfc_main$7;
      const _component_UPageBody = _sfc_main$6;
      const _component_ContentRenderer = __nuxt_component_3;
      const _component_USeparator = _sfc_main$8$1;
      const _component_UContentSurround = _sfc_main$3;
      const _component_UContentToc = _sfc_main$2;
      const _component_UPageLinks = _sfc_main$1;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, createSlots({
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPageHeader, {
                title: unref(page).title,
                description: unref(page).description,
                links: unref(page).links,
                headline: unref(headline)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    if (unref(page)) {
                      _push3(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_a3 = unref(surround)) == null ? void 0 : _a3.length) {
                      _push3(ssrRenderComponent(_component_USeparator, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                        key: 0,
                        value: unref(page)
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      ((_b3 = unref(surround)) == null ? void 0 : _b3.length) ? (openBlock(), createBlock(_component_USeparator, { key: 1 })) : createCommentVNode("", true),
                      createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPageHeader, {
                  title: unref(page).title,
                  description: unref(page).description,
                  links: unref(page).links,
                  headline: unref(headline)
                }, null, 8, ["title", "description", "links", "headline"]),
                createVNode(_component_UPageBody, null, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                        key: 0,
                        value: unref(page)
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      ((_a3 = unref(surround)) == null ? void 0 : _a3.length) ? (openBlock(), createBlock(_component_USeparator, { key: 1 })) : createCommentVNode("", true),
                      createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                    ];
                  }),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, [
          ((_d = (_c = (_b2 = (_a2 = unref(page)) == null ? void 0 : _a2.body) == null ? void 0 : _b2.toc) == null ? void 0 : _c.links) == null ? void 0 : _d.length) ? {
            name: "right",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3, _c2, _d2, _e, _f, _g, _h;
              if (_push2) {
                _push2(ssrRenderComponent(_component_UContentToc, {
                  title: (_a3 = unref(toc)) == null ? void 0 : _a3.title,
                  links: (_c2 = (_b3 = unref(page).body) == null ? void 0 : _b3.toc) == null ? void 0 : _c2.links
                }, createSlots({ _: 2 }, [
                  ((_d2 = unref(toc)) == null ? void 0 : _d2.bottom) ? {
                    name: "bottom",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a4, _b4, _c3, _d3, _e2, _f2, _g2, _h2, _i, _j, _k, _l;
                      if (_push3) {
                        _push3(`<div class="${ssrRenderClass([{ "!mt-6": (_c3 = (_b4 = (_a4 = unref(page).body) == null ? void 0 : _a4.toc) == null ? void 0 : _b4.links) == null ? void 0 : _c3.length }, "hidden lg:block space-y-6"])}"${_scopeId2}>`);
                        if ((_f2 = (_e2 = (_d3 = unref(page).body) == null ? void 0 : _d3.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) {
                          _push3(ssrRenderComponent(_component_USeparator, { type: "dashed" }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(ssrRenderComponent(_component_UPageLinks, {
                          title: unref(toc).bottom.title,
                          links: unref(links)
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: ["hidden lg:block space-y-6", { "!mt-6": (_i = (_h2 = (_g2 = unref(page).body) == null ? void 0 : _g2.toc) == null ? void 0 : _h2.links) == null ? void 0 : _i.length }]
                          }, [
                            ((_l = (_k = (_j = unref(page).body) == null ? void 0 : _j.toc) == null ? void 0 : _k.links) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_component_USeparator, {
                              key: 0,
                              type: "dashed"
                            })) : createCommentVNode("", true),
                            createVNode(_component_UPageLinks, {
                              title: unref(toc).bottom.title,
                              links: unref(links)
                            }, null, 8, ["title", "links"])
                          ], 2)
                        ];
                      }
                    }),
                    key: "0"
                  } : void 0
                ]), _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UContentToc, {
                    title: (_e = unref(toc)) == null ? void 0 : _e.title,
                    links: (_g = (_f = unref(page).body) == null ? void 0 : _f.toc) == null ? void 0 : _g.links
                  }, createSlots({ _: 2 }, [
                    ((_h = unref(toc)) == null ? void 0 : _h.bottom) ? {
                      name: "bottom",
                      fn: withCtx(() => {
                        var _a4, _b4, _c3, _d3, _e2, _f2;
                        return [
                          createVNode("div", {
                            class: ["hidden lg:block space-y-6", { "!mt-6": (_c3 = (_b4 = (_a4 = unref(page).body) == null ? void 0 : _a4.toc) == null ? void 0 : _b4.links) == null ? void 0 : _c3.length }]
                          }, [
                            ((_f2 = (_e2 = (_d3 = unref(page).body) == null ? void 0 : _d3.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_component_USeparator, {
                              key: 0,
                              type: "dashed"
                            })) : createCommentVNode("", true),
                            createVNode(_component_UPageLinks, {
                              title: unref(toc).bottom.title,
                              links: unref(links)
                            }, null, 8, ["title", "links"])
                          ], 2)
                        ];
                      }),
                      key: "0"
                    } : void 0
                  ]), 1032, ["title", "links"])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-B26y4f9w.mjs.map
