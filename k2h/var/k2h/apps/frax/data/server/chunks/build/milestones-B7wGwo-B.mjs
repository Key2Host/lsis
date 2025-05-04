import { M as Motion, _ as _sfc_main$1 } from './PageSection-Bp1Prz50.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      const _component_Motion = Motion;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              title: _ctx.$t("milestones.title"),
              description: _ctx.$t("milestones.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), {
                title: _ctx.$t("milestones.title"),
                description: _ctx.$t("milestones.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full px-4 mb-4"><div class="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto"><!--[-->`);
      ssrRenderList(milestones.value, (milestone, index) => {
        _push(ssrRenderComponent(_component_Motion, {
          key: index,
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
          viewport: "{ once: true }",
          class: ["flex md:flex-row flex-col md:items-center md:gap-2 group relative top-0 md:left-1/2 md:right-1/2", {
            "md:even:translate-x-[-100%] even:translate-x-0": index % 2 === 1,
            "md:w-max w-full z-[1]": true
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="pointer p-4 dark:bg-primary-500 bg-primary-200 aspect-square w-[125px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0"${_scopeId}>${ssrInterpolate(milestone.date)}</div><div class="details md:max-w-sm p-5 bg-primary-200 dark:bg-primary-500 rounded-md my-3"${_scopeId}><div class="text-xl"${_scopeId}>${ssrInterpolate(milestone.title)}</div>`);
              if (milestone.description) {
                _push2(`<div${_scopeId}><hr class="my-2 opacity-25"${_scopeId}><span class="text-md"${_scopeId}>${ssrInterpolate(milestone.description)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "pointer p-4 dark:bg-primary-500 bg-primary-200 aspect-square w-[125px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0" }, toDisplayString(milestone.date), 1),
                createVNode("div", { class: "details md:max-w-sm p-5 bg-primary-200 dark:bg-primary-500 rounded-md my-3" }, [
                  createVNode("div", { class: "text-xl" }, toDisplayString(milestone.title), 1),
                  milestone.description ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("hr", { class: "my-2 opacity-25" }),
                    createVNode("span", { class: "text-md" }, toDisplayString(milestone.description), 1)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
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
//# sourceMappingURL=milestones-B7wGwo-B.mjs.map
