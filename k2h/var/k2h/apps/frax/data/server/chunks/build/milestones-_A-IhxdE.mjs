import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n, d as useSeoMeta } from './server.mjs';
import { _ as _sfc_main$1 } from './PageSection-VgfDQh5Y.mjs';
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
import 'reka-ui';
import '@vueuse/core';
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
  __name: "milestones",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "global"
    });
    const milestones = ref([
      {
        date: "13.11.2024",
        title: t("milestones.items.1.title"),
        description: t("milestones.items.1.description")
      },
      {
        date: "29.11.2024",
        title: t("milestones.items.2.title"),
        description: t("milestones.items.2.description")
      },
      {
        date: "04.12.2024",
        title: t("milestones.items.3.title"),
        description: t("milestones.items.3.description")
      },
      {
        date: "21.04.2025",
        title: t("milestones.items.4.title"),
        description: t("milestones.items.4.description")
      }
    ]);
    useSeoMeta({
      title: t("milestones.title"),
      ogTitle: t("milestones.title"),
      description: t("milestones.description"),
      ogDescription: t("milestones.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        title: _ctx.$t("milestones.title"),
        description: _ctx.$t("milestones.description")
      }, null, _parent));
      _push(`<div class="w-full px-4 mb-4"><div class="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto"><!--[-->`);
      ssrRenderList(milestones.value, (milestone, index) => {
        _push(`<div class="${ssrRenderClass([{
          "md:even:translate-x-[-100%] even:translate-x-0": index % 2 === 1,
          "md:w-max w-full z-[1]": true
        }, "flex md:flex-row flex-col md:items-center md:gap-2 group relative top-0 md:left-1/2 md:right-1/2"])}"><div class="pointer p-4 dark:bg-primary-500 bg-primary-200 aspect-square w-[125px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">${ssrInterpolate(milestone.date)}</div><div class="details md:max-w-sm p-5 bg-primary-200 dark:bg-primary-500 rounded-md my-3"><div class="text-xl">${ssrInterpolate(milestone.title)}</div>`);
        if (milestone.description) {
          _push(`<div><hr class="my-2 opacity-25"><span class="text-md">${ssrInterpolate(milestone.description)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/milestones.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=milestones-_A-IhxdE.mjs.map
