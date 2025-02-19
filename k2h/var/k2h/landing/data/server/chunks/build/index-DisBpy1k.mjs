import { _ as __nuxt_component_0 } from './LandingSection-bJhjn_Li.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, computed, toRef, unref } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useSeoMeta, F as useUI } from './server.mjs';
import { _ as __nuxt_component_2 } from './BlogPost-Dj4-cIlr.mjs';
import 'tailwind-merge';
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
import './NuxtImg-CoGydqfj.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogList",
  __ssrInlineRender: true,
  props: {
    orientation: {
      type: String,
      default: "horizontal"
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
        horizontal: "flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",
        vertical: "flex flex-col gap-y-16 w-full"
      }[props.orientation];
      return {
        wrapper
      };
    });
    const { ui, attrs } = useUI("blog.list", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/blog/BlogList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UBlogList" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Newsroom",
      ogTitle: "Newsroom",
      description: "",
      ogDescription: ""
    });
    const blogPosts = [
      {
        title: "Nuxt 3.9",
        description: "Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive...",
        image: {
          src: "https://picsum.photos/id/10/640/360",
          alt: "Nuxt 3.9"
        }
      },
      {
        title: "Nuxt DevTools 1.0",
        description: "Nuxt DevTools v1.0 is out, generally available to all Nuxt projects!",
        image: {
          src: "https://picsum.photos/id/11/640/360",
          alt: "Nuxt DevTools 1.0"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      },
      {
        title: "Nuxt 3.8",
        description: "Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app...",
        image: {
          src: "https://picsum.photos/id/12/640/360",
          alt: "Nuxt 3.8"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UBlogList = __nuxt_component_1;
      const _component_UBlogPost = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ULandingSection, mergeProps({
        title: "Newsroom",
        description: "Read the latest news from our blog."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBlogList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(blogPosts, (post, index) => {
                    _push3(ssrRenderComponent(_component_UBlogPost, mergeProps({
                      key: index,
                      ref_for: true
                    }, post), null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                      return createVNode(_component_UBlogPost, mergeProps({
                        key: index,
                        ref_for: true
                      }, post), null, 16);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBlogList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                    return createVNode(_component_UBlogPost, mergeProps({
                      key: index,
                      ref_for: true
                    }, post), null, 16);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsroom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DisBpy1k.mjs.map
