import { _ as __nuxt_component_0 } from './LandingSection-bJhjn_Li.mjs';
import { _ as __nuxt_component_2 } from './BlogPost-Dj4-cIlr.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './server.mjs';
import 'tailwind-merge';
import './NuxtImg-CoGydqfj.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Newsroom",
      ogTitle: "Newsroom",
      description: "",
      ogDescription: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UBlogPost = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ULandingSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBlogPost, {
              title: "Nuxt 3.9",
              description: "Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive server components, new composables, a new loading API and more.",
              date: "Dec 25, 2023",
              orientation: "vertical",
              image: { src: "https://picsum.photos/640/360", alt: "Nuxt 3.9" },
              authors: [{ name: "Daniel Roe", avatar: { src: "https://github.com/danielroe.png", target: "_blank" }, to: "https://twitter.com/danielcroe" }],
              badge: { label: "Release" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBlogPost, {
                title: "Nuxt 3.9",
                description: "Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive server components, new composables, a new loading API and more.",
                date: "Dec 25, 2023",
                orientation: "vertical",
                image: { src: "https://picsum.photos/640/360", alt: "Nuxt 3.9" },
                authors: [{ name: "Daniel Roe", avatar: { src: "https://github.com/danielroe.png", target: "_blank" }, to: "https://twitter.com/danielcroe" }],
                badge: { label: "Release" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsroom/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CkG9lXOw.mjs.map
