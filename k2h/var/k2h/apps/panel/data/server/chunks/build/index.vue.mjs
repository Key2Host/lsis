import { u as useToast, a as __nuxt_component_1, b as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { U as UInput } from './Input.vue.mjs';
import { _ as __nuxt_component_4 } from './Table.vue.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createBlock, openBlock, h, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
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
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './tv.mjs';
import '@tanstack/vue-table';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const UButton = __nuxt_component_1;
    const UDropdownMenu = __nuxt_component_0$1;
    const globalFilter = ref("");
    const toast = useToast();
    const data = ref([]);
    const columns = [
      {
        accessorKey: "id",
        header: ({ column }) => {
          const isSorted = column.getIsSorted();
          return h(UButton, {
            color: "neutral",
            variant: "ghost",
            label: "",
            icon: isSorted ? isSorted === "asc" ? "i-lucide-arrow-up-narrow-wide" : "i-lucide-arrow-down-wide-narrow" : "i-lucide-arrow-up-down",
            class: "-mx-2.5",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          });
        },
        cell: ({ row }) => `${row.getValue("id")}`
      },
      {
        accessorKey: "invoiceno",
        header: "Rechnungsnummer",
        cell: ({ row }) => `${row.getValue("invoiceno")}`
      },
      {
        accessorKey: "datetime",
        header: ({ column }) => {
          const isSorted = column.getIsSorted();
          return h(UButton, {
            color: "neutral",
            variant: "ghost",
            label: "Datum",
            icon: isSorted ? isSorted === "asc" ? "i-lucide-arrow-up-narrow-wide" : "i-lucide-arrow-down-wide-narrow" : "i-lucide-arrow-up-down",
            class: "-mx-2.5",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          });
        },
        cell: ({ row }) => {
          const date = new Date(row.getValue("datetime"));
          if (isNaN(date.getTime())) {
            return "Ungültiges Datum";
          }
          return date.toLocaleString("de-DE", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });
        }
      },
      {
        accessorKey: "cost",
        header: ({ column }) => {
          const isSorted = column.getIsSorted();
          return h(UButton, {
            color: "neutral",
            variant: "ghost",
            label: "Betrag",
            icon: isSorted ? isSorted === "asc" ? "i-lucide-arrow-up-narrow-wide" : "i-lucide-arrow-down-wide-narrow" : "i-lucide-arrow-up-down",
            class: "-mx-2.5",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          });
        },
        cell: ({ row }) => {
          const cost = row.getValue("cost");
          return h("div", [
            `${cost}`
          ]);
        }
      },
      {
        id: "actions",
        cell: ({ row }) => {
          return h(
            "div",
            { class: "text-right" },
            h(
              UDropdownMenu,
              {
                content: { align: "end" },
                items: getRowItems(row)
              },
              () => h(UButton, {
                icon: "i-lucide-ellipsis-vertical",
                color: "neutral",
                variant: "ghost",
                class: "ml-auto"
              })
            )
          );
        }
      }
    ];
    function getRowItems(row) {
      return [
        {
          type: "label",
          label: "Aktionen"
        },
        {
          label: "Rechnungsnummer kopieren",
          onSelect() {
            (void 0).clipboard.writeText(row.original.invoiceno);
            toast.add({
              title: "Rechnungsnummer in die Zwischenablage kopiert!",
              color: "success",
              icon: "i-lucide-circle-check"
            });
          }
        },
        {
          type: "separator"
        },
        {
          label: "Rechnung herunterladen",
          onSelect() {
            (void 0).clipboard.writeText(row.original.invoiceno);
            toast.add({
              title: "Aktuell nicht verfügbar!",
              color: "error",
              icon: "i-lucide-circle-check"
            });
          }
        },
        {
          label: "Zahlungsdetails anzeigen",
          onSelect() {
            (void 0).clipboard.writeText(row.original.invoiceno);
            toast.add({
              title: "Aktuell nicht verfügbar!",
              color: "error",
              icon: "i-lucide-circle-check"
            });
          }
        }
      ];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCard = __nuxt_component_0;
      const _component_UInput = UInput;
      const _component_UTable = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UPageCard, mergeProps({
        variant: "subtle",
        class: "overflow-auto"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex px-4 py-3.5 border-b border-(--ui-border-accented)"${_scopeId}><span class="font-bold text-lg"${_scopeId}>Transaktionen</span>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: globalFilter.value,
              "onUpdate:modelValue": ($event) => globalFilter.value = $event,
              class: "max-w-sm ml-auto",
              placeholder: "Filter..."
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UTable, {
              loading: loading.value,
              key: data.value.length,
              data: data.value,
              "global-filter": globalFilter.value,
              "onUpdate:globalFilter": ($event) => globalFilter.value = $event,
              columns,
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex px-4 py-3.5 border-b border-(--ui-border-accented)" }, [
                createVNode("span", { class: "font-bold text-lg" }, "Transaktionen"),
                createVNode(_component_UInput, {
                  modelValue: globalFilter.value,
                  "onUpdate:modelValue": ($event) => globalFilter.value = $event,
                  class: "max-w-sm ml-auto",
                  placeholder: "Filter..."
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              (openBlock(), createBlock(_component_UTable, {
                loading: loading.value,
                key: data.value.length,
                data: data.value,
                "global-filter": globalFilter.value,
                "onUpdate:globalFilter": ($event) => globalFilter.value = $event,
                columns,
                class: "w-full"
              }, null, 8, ["loading", "data", "global-filter", "onUpdate:globalFilter"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/finances/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
