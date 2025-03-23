import { u as useLocale, t as tv, a as _appConfig, b as useToast, c as __nuxt_component_1, d as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { U as UInput } from './Input.vue.mjs';
import { defineComponent, mergeModels, useSlots, computed, useModel, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext, ref, h } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { H as upperFirst } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { reactiveOmit } from '@vueuse/core';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'reka-ui/namespaced';
import './tv.mjs';
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

const theme = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full overflow-clip",
    "caption": "sr-only",
    "thead": "relative [&>tr]:after:absolute [&>tr]:after:inset-x-0 [&>tr]:after:bottom-0 [&>tr]:after:h-px [&>tr]:after:bg-(--ui-border-accented)",
    "tbody": "divide-y divide-(--ui-border) [&>tr]:data-[selectable=true]:hover:bg-(--ui-bg-elevated)/50 [&>tr]:data-[selectable=true]:focus-visible:outline-(--ui-primary)",
    "tr": "data-[selected=true]:bg-(--ui-bg-elevated)/50",
    "th": "px-4 py-3.5 text-sm text-(--ui-text-highlighted) text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-(--ui-text-muted) whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "empty": "py-6 text-center text-sm text-(--ui-text-muted)",
    "loading": "py-6 text-center"
  },
  "variants": {
    "pinned": {
      "true": {
        "th": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
        "td": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-(--ui-bg)/75 z-[1] backdrop-blur"
      }
    },
    "loading": {
      "true": {
        "thead": "after:absolute after:bottom-0 after:inset-x-0 after:h-px"
      }
    },
    "loadingAnimation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "loadingColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "loading": true,
      "loadingColor": "primary",
      "class": {
        "thead": "after:bg-(--ui-primary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-(--ui-secondary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-(--ui-success)"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-(--ui-info)"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-(--ui-warning)"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-(--ui-error)"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel",
      "class": {
        "thead": "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel-inverse",
      "class": {
        "thead": "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "swing",
      "class": {
        "thead": "after:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "elastic",
      "class": {
        "thead": "after:animate-[elastic_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "loadingColor": "primary",
    "loadingAnimation": "carousel"
  }
};

var _a;
const appConfigTable = _appConfig;
const table = tv({ extend: tv(theme), ...((_a = appConfigTable.ui) == null ? void 0 : _a.table) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    data: {},
    columns: {},
    caption: {},
    sticky: { type: Boolean },
    loading: { type: Boolean },
    loadingColor: {},
    loadingAnimation: {},
    globalFilterOptions: {},
    columnFiltersOptions: {},
    columnPinningOptions: {},
    columnSizingOptions: {},
    visibilityOptions: {},
    sortingOptions: {},
    groupingOptions: {},
    expandedOptions: {},
    rowSelectionOptions: {},
    rowPinningOptions: {},
    paginationOptions: {},
    facetedOptions: {},
    onSelect: { type: Function },
    class: {},
    ui: {},
    state: {},
    onStateChange: { type: Function },
    renderFallbackValue: {},
    _features: {},
    autoResetAll: { type: Boolean },
    debugAll: { type: Boolean },
    debugCells: { type: Boolean },
    debugColumns: { type: Boolean },
    debugHeaders: { type: Boolean },
    debugRows: { type: Boolean },
    debugTable: { type: Boolean },
    defaultColumn: {},
    getRowId: { type: Function },
    getSubRows: { type: Function },
    initialState: {},
    mergeOptions: { type: Function },
    meta: {}
  }, {
    "globalFilter": { default: void 0 },
    "globalFilterModifiers": {},
    "columnFilters": { default: [] },
    "columnFiltersModifiers": {},
    "columnOrder": { default: [] },
    "columnOrderModifiers": {},
    "columnVisibility": { default: {} },
    "columnVisibilityModifiers": {},
    "columnPinning": { default: {} },
    "columnPinningModifiers": {},
    "columnSizing": { default: {} },
    "columnSizingModifiers": {},
    "columnSizingInfo": { default: {} },
    "columnSizingInfoModifiers": {},
    "rowSelection": { default: {} },
    "rowSelectionModifiers": {},
    "rowPinning": { default: {} },
    "rowPinningModifiers": {},
    "sorting": { default: [] },
    "sortingModifiers": {},
    "grouping": { default: [] },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object], ...{ default: {} } },
    "expandedModifiers": {},
    "pagination": { default: {} },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const data = computed(() => props.data ?? []);
    const columns = computed(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) })));
    const ui = computed(() => table({
      sticky: props.sticky,
      loading: props.loading,
      loadingColor: props.loadingColor,
      loadingAnimation: props.loadingAnimation
    }));
    const globalFilterState = useModel(__props, "globalFilter");
    const columnFiltersState = useModel(__props, "columnFilters");
    const columnOrderState = useModel(__props, "columnOrder");
    const columnVisibilityState = useModel(__props, "columnVisibility");
    const columnPinningState = useModel(__props, "columnPinning");
    const columnSizingState = useModel(__props, "columnSizing");
    const columnSizingInfoState = useModel(__props, "columnSizingInfo");
    const rowSelectionState = useModel(__props, "rowSelection");
    const rowPinningState = useModel(__props, "rowPinning");
    const sortingState = useModel(__props, "sorting");
    const groupingState = useModel(__props, "grouping");
    const expandedState = useModel(__props, "expanded");
    const paginationState = useModel(__props, "pagination");
    const tableApi = useVueTable({
      ...reactiveOmit(props, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"),
      data,
      columns: columns.value,
      getCoreRowModel: getCoreRowModel(),
      ...props.globalFilterOptions || {},
      onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState),
      ...props.columnFiltersOptions || {},
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState),
      onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState),
      ...props.visibilityOptions || {},
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState),
      ...props.columnPinningOptions || {},
      onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState),
      ...props.columnSizingOptions || {},
      onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState),
      onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState),
      ...props.rowSelectionOptions || {},
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState),
      ...props.rowPinningOptions || {},
      onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState),
      ...props.sortingOptions || {},
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState),
      ...props.groupingOptions || {},
      onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState),
      ...props.expandedOptions || {},
      getExpandedRowModel: getExpandedRowModel(),
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState),
      ...props.paginationOptions || {},
      onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState),
      ...props.facetedOptions || {},
      state: {
        get globalFilter() {
          return globalFilterState.value;
        },
        get columnFilters() {
          return columnFiltersState.value;
        },
        get columnOrder() {
          return columnOrderState.value;
        },
        get columnVisibility() {
          return columnVisibilityState.value;
        },
        get columnPinning() {
          return columnPinningState.value;
        },
        get expanded() {
          return expandedState.value;
        },
        get rowSelection() {
          return rowSelectionState.value;
        },
        get sorting() {
          return sortingState.value;
        },
        get grouping() {
          return groupingState.value;
        },
        get rowPinning() {
          return rowPinningState.value;
        },
        get columnSizing() {
          return columnSizingState.value;
        },
        get columnSizingInfo() {
          return columnSizingInfoState.value;
        },
        get pagination() {
          return paginationState.value;
        }
      }
    });
    function valueUpdater(updaterOrValue, ref) {
      ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
    }
    function handleRowSelect(row, e) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(row, e);
    }
    __expose({
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<table class="${ssrRenderClass(ui.value.base({ class: [(_a3 = props.ui) == null ? void 0 : _a3.base] }))}"${_scopeId}>`);
            if (_ctx.caption) {
              _push2(`<caption class="${ssrRenderClass(ui.value.caption({ class: [(_b = props.ui) == null ? void 0 : _b.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(_ctx.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead class="${ssrRenderClass(ui.value.thead({ class: [(_c = props.ui) == null ? void 0 : _c.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              var _a4;
              _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                var _a5, _b2, _c2;
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())} class="${ssrRenderClass(ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => {
                  if (!header.isPlaceholder) {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: header.column.columnDef.header,
                      props: header.getContext()
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--></thead><tbody class="${ssrRenderClass(ui.value.tbody({ class: [(_d = props.ui) == null ? void 0 : _d.tbody] }))}"${_scopeId}>`);
            if ((_e = unref(tableApi).getRowModel().rows) == null ? void 0 : _e.length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(tableApi).getRowModel().rows, (row) => {
                var _a4, _b2, _c2;
                _push2(`<!--[--><tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
                ssrRenderList(row.getVisibleCells(), (cell) => {
                  var _a5, _b3, _c3;
                  _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())} class="${ssrRenderClass(ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: cell.column.columnDef.cell,
                      props: cell.getContext()
                    }, null, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</td>`);
                });
                _push2(`<!--]--></tr>`);
                if (row.getIsExpanded()) {
                  _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} class="${ssrRenderClass(ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
                  _push2(`</td></tr>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else if (_ctx.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_f = columns.value) == null ? void 0 : _f.length)} class="${ssrRenderClass(ui.value.loading({ class: (_g = props.ui) == null ? void 0 : _g.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_h = columns.value) == null ? void 0 : _h.length)} class="${ssrRenderClass(ui.value.empty({ class: (_i = props.ui) == null ? void 0 : _i.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            _push2(`</tbody></table>`);
          } else {
            return [
              createVNode("table", {
                class: ui.value.base({ class: [(_j = props.ui) == null ? void 0 : _j.base] })
              }, [
                _ctx.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  class: ui.value.caption({ class: [(_k = props.ui) == null ? void 0 : _k.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(_ctx.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  class: ui.value.thead({ class: [(_l = props.ui) == null ? void 0 : _l.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    var _a4;
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        var _a5, _b2, _c2;
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          class: ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() })
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 10, ["data-pinned"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 2),
                createVNode("tbody", {
                  class: ui.value.tbody({ class: [(_m = props.ui) == null ? void 0 : _m.tbody] })
                }, [
                  ((_n = unref(tableApi).getRowModel().rows) == null ? void 0 : _n.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(tableApi).getRowModel().rows, (row) => {
                    var _a4, _b2, _c2;
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode("tr", {
                        "data-selected": row.getIsSelected(),
                        "data-selectable": !!props.onSelect,
                        "data-expanded": row.getIsExpanded(),
                        role: props.onSelect ? "button" : void 0,
                        tabindex: props.onSelect ? 0 : void 0,
                        class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }),
                        onClick: ($event) => handleRowSelect(row, $event)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                          var _a5, _b3, _c3;
                          return openBlock(), createBlock("td", {
                            key: cell.id,
                            "data-pinned": cell.column.getIsPinned(),
                            class: ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() })
                          }, [
                            renderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => [
                              createVNode(unref(FlexRender), {
                                render: cell.column.columnDef.cell,
                                props: cell.getContext()
                              }, null, 8, ["render", "props"])
                            ])
                          ], 10, ["data-pinned"]);
                        }), 128))
                      ], 10, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick"]),
                      row.getIsExpanded() ? (openBlock(), createBlock("tr", {
                        key: 0,
                        class: ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] })
                      }, [
                        createVNode("td", {
                          colspan: row.getAllCells().length,
                          class: ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] })
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { row })
                        ], 10, ["colspan"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : _ctx.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
                    createVNode("td", {
                      colspan: (_o = columns.value) == null ? void 0 : _o.length,
                      class: ui.value.loading({ class: (_p = props.ui) == null ? void 0 : _p.loading })
                    }, [
                      renderSlot(_ctx.$slots, "loading")
                    ], 10, ["colspan"])
                  ])) : (openBlock(), createBlock("tr", { key: 2 }, [
                    createVNode("td", {
                      colspan: (_q = columns.value) == null ? void 0 : _q.length,
                      class: ui.value.empty({ class: (_r = props.ui) == null ? void 0 : _r.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", {}, () => [
                        createTextVNode(toDisplayString(unref(t)("table.noData")), 1)
                      ])
                    ], 10, ["colspan"])
                  ]))
                ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "UTable" });

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
