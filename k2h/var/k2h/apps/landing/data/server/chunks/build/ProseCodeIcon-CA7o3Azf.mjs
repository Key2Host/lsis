import { C as useUI, y as __nuxt_component_1$3 } from './server.mjs';
import { defineComponent, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    filename: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const config = {
      "package.json": "i-vscode-icons-file-type-node",
      "tsconfig.json": "i-vscode-icons-file-type-tsconfig",
      ".npmrc": "i-vscode-icons-file-type-npm",
      ".editorconfig": "i-vscode-icons-file-type-editorconfig",
      ".eslintrc": "i-vscode-icons-file-type-eslint",
      ".eslintrc.cjs": "i-vscode-icons-file-type-eslint",
      ".eslintignore": "i-vscode-icons-file-type-eslint",
      "eslint.config.js": "i-vscode-icons-file-type-eslint",
      "eslint.config.mjs": "i-vscode-icons-file-type-eslint",
      "eslint.config.cjs": "i-vscode-icons-file-type-eslint",
      ".gitignore": "i-vscode-icons-file-type-git",
      "yarn.lock": "i-vscode-icons-file-type-yarn",
      ".env": "i-vscode-icons-file-type-dotenv",
      ".env.example": "i-vscode-icons-file-type-dotenv",
      ".vscode/settings.json": "i-vscode-icons-file-type-vscode",
      "nuxt": "i-vscode-icons-file-type-nuxt",
      ".nuxtrc": "i-vscode-icons-file-type-nuxt",
      ".nuxtignore": "i-vscode-icons-file-type-nuxt",
      "nuxt.config.js": "i-vscode-icons-file-type-nuxt",
      "nuxt.config.ts": "i-vscode-icons-file-type-nuxt",
      "nuxt.schema.ts": "i-vscode-icons-file-type-nuxt",
      "tailwind.config.js": "i-vscode-icons-file-type-tailwind",
      "tailwind.config.ts": "i-vscode-icons-file-type-tailwind",
      "vue": "i-vscode-icons-file-type-vue",
      "ts": "i-vscode-icons-file-type-typescript",
      "tsx": "i-vscode-icons-file-type-typescript",
      "mjs": "i-vscode-icons-file-type-js",
      "cjs": "i-vscode-icons-file-type-js",
      "js": "i-vscode-icons-file-type-js",
      "jsx": "i-vscode-icons-file-type-js",
      "md": "i-vscode-icons-file-type-markdown",
      "py": "i-vscode-icons-file-type-python",
      "ico": "i-vscode-icons-file-type-favicon",
      "npm": "i-vscode-icons-file-type-npm",
      "pnpm": "i-vscode-icons-file-type-pnpm",
      "npx": "i-vscode-icons-file-type-npm",
      "yarn": "i-vscode-icons-file-type-yarn",
      "bun": "i-vscode-icons-file-type-bun",
      "yml": "i-vscode-icons-file-type-yaml",
      "terminal": "i-heroicons-command-line",
      "csv": "i-vscode-icons-file-type-text",
      "cs": "i-vscode-icons-file-type-csharp",
      "asm": "i-vscode-icons-file-type-assembly",
      "f": "i-vscode-icons-file-type-fortran",
      "hs": "i-vscode-icons-file-type-haskell",
      "fs": "i-vscode-icons-file-type-fsharp",
      "kt": "i-vscode-icons-file-type-kotlin",
      "rs": "i-vscode-icons-file-type-rust",
      "rb": "i-vscode-icons-file-type-ruby",
      "lsp": "i-vscode-icons-file-type-lisp",
      "exs": "i-vscode-icons-file-type-elixir",
      "erl": "i-vscode-icons-file-type-erlang",
      "sbt": "i-vscode-icons-file-type-scala",
      "h": "i-vscode-icons-file-type-cppheader",
      "ino": "i-vscode-icons-file-type-arduino",
      "pl": "i-vscode-icons-file-type-perl",
      "jl": "i-vscode-icons-file-type-julia",
      "dart": "i-vscode-icons-file-type-dartlang"
    };
    const { ui } = useUI("content.prose.code.icon", void 0, config, void 0, true);
    const extension = computed(() => {
      var _a;
      return (((_a = props.filename) == null ? void 0 : _a.split(".").pop()) || "").toLowerCase();
    });
    const hasIcon = computed(() => props.icon || ui.value[extension.value] || props.filename.includes("."));
    const icon = computed(() => {
      var _a, _b, _c;
      return (_c = props.icon) != null ? _c : props.filename && ((_b = (_a = ui.value[props.filename.split("/").pop()]) != null ? _a : ui.value[extension.value]) != null ? _b : `i-vscode-icons-file-type-${extension.value}`);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$3;
      if (unref(hasIcon)) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps({
          name: unref(icon).split(" ").pop(),
          class: "size-4"
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ProseCodeIcon" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=ProseCodeIcon-CA7o3Azf.mjs.map
