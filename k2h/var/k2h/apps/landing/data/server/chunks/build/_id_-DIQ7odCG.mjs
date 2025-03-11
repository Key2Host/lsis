import { _ as __nuxt_component_0 } from './LandingSection-D8wZHn5-.mjs';
import { u as useLocalePath, b as useSeoMeta, _ as _export_sfc, ae as __nuxt_component_0$b, z as __nuxt_component_1$3, C as mergeConfig, D as useUI, I as twMerge, af as getULinkProps, J as appConfig } from './server.mjs';
import { defineComponent, withCtx, createVNode, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, toRef, useSSRContext } from 'vue';
import { twJoin } from 'tailwind-merge';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const breadcrumb = {
  wrapper: "relative min-w-0",
  ol: "flex items-center gap-x-1.5",
  li: "flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",
  base: "flex items-center gap-x-1.5 group font-semibold min-w-0",
  label: "block truncate",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    active: "",
    inactive: ""
  },
  divider: {
    base: "flex-shrink-0 w-5 h-5 rtl:rotate-180"
  },
  active: "text-primary-500 dark:text-primary-400",
  inactive: " hover:text-gray-700 dark:hover:text-gray-200",
  default: {
    divider: "i-heroicons-chevron-right-20-solid"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.breadcrumb, breadcrumb);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3,
    ULink: __nuxt_component_0$b
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    divider: {
      type: String,
      default: () => config.default.divider
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("breadcrumb", toRef(props, "ui"), config, toRef(props, "class"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$b;
  const _component_UIcon = __nuxt_component_1$3;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    "aria-label": "Breadcrumb",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><ol class="${ssrRenderClass(_ctx.ui.ol)}"><!--[-->`);
  ssrRenderList(_ctx.links, (link, index) => {
    _push(`<li class="${ssrRenderClass(_ctx.ui.li)}">`);
    _push(ssrRenderComponent(_component_ULink, mergeProps({
      as: "span",
      class: [_ctx.ui.base, index === _ctx.links.length - 1 ? _ctx.ui.active : !!link.to ? _ctx.ui.inactive : ""],
      "aria-current": index === _ctx.links.length - 1 ? "page" : void 0,
      ref_for: true
    }, _ctx.getULinkProps(link), {
      onClick: link.click
    }), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "icon", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "default", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.label) {
              _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "icon", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
              }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    if (index < _ctx.links.length - 1) {
      ssrRenderSlot(_ctx.$slots, "divider", {}, () => {
        if (_ctx.divider) {
          _push(`<!--[-->`);
          if (_ctx.divider.startsWith("i-")) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: _ctx.divider,
              class: _ctx.ui.divider.base,
              role: "presentation"
            }, null, _parent));
          } else {
            _push(`<span role="presentation">${ssrInterpolate(_ctx.divider)}</span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ol></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/navigation/Breadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "UBreadcrumb" });
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
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UBreadcrumb = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingSection, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center min-h-[65vh]"${_scopeId}><h1 class="text-5xl font-bold"${_scopeId}>Beispiel Beitrag</h1><div class="flex justify-center opacity-75 mb-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBreadcrumb, { links }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center"${_scopeId}><img src="https://picsum.photos/id/12/640/360" alt="Blog Image" class="rounded-lg mt-4 w-[100vh] h-auto"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center min-h-[65vh]" }, [
                createVNode("h1", { class: "text-5xl font-bold" }, "Beispiel Beitrag"),
                createVNode("div", { class: "flex justify-center opacity-75 mb-4 mt-4" }, [
                  createVNode(_component_UBreadcrumb, { links })
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
//# sourceMappingURL=_id_-DIQ7odCG.mjs.map
