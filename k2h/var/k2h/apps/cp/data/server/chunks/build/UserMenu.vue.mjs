import { defineComponent, ref, unref, mergeProps, withCtx, renderSlot, useSSRContext, mergeModels, useSlots, useModel, computed, createSlots, createBlock, createCommentVNode, openBlock, createVNode, createTextVNode, toDisplayString, Fragment, renderList, toRef, toHandlers, useId, withAsyncContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, useForwardProps, ListboxRoot, ListboxFilter, ListboxContent, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator } from 'reka-ui';
import { p as provideDashboardContext, u as useDashboard, a as useLocalePro, b as useResizable, c as __nuxt_component_0$1, _ as __nuxt_component_1$3 } from './DashboardSidebarToggle.vue.mjs';
import { b as _appConfig, u as useLocale, f as useAppConfig, t as tv$1, d as __nuxt_component_1$2, g as get, r as omit, q as ULink, s as pickLinkProps, v as ULinkBase, U as UIcon, a as UAvatar, m as UChip, k as UKbd, h as useState, w as defineShortcuts, x as UModal, y as USlideover, e as __nuxt_component_0$2 } from './server.mjs';
import { t as tv } from './tv.mjs';
import { n as defu } from '../nitro/nitro.mjs';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { useFuse } from '@vueuse/integrations/useFuse';
import { U as UInput } from './Input.vue.mjs';
import { DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerTitle, DrawerDescription } from 'vaul-vue';
import axios from 'axios';

const theme$4 = {
  "base": "fixed inset-0 flex overflow-hidden"
};

var _a$4;
const appConfig$1 = _appConfig;
const dashboardGroup = tv({ extend: tv(theme$4), ...((_a$4 = appConfig$1.uiPro) == null ? void 0 : _a$4.dashboardGroup) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DashboardGroup",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {},
    storage: { default: "cookie" },
    storageKey: { default: "dashboard" },
    persistent: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    provideDashboardContext({
      storage: props.storage,
      storageKey: props.storageKey,
      persistent: props.persistent,
      sidebarOpen: ref(false),
      toggleSidebar: () => {
      },
      sidebarCollapsed: ref(false),
      collapseSidebar: () => {
      },
      searchOpen: ref(false),
      toggleSearch: () => {
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(dashboardGroup)({ class: props.class })
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
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "UDashboardGroup" });

function truncateHTMLFromStart(html, maxLength) {
  let truncated = "";
  let totalLength = 0;
  let insideTag = false;
  for (let i = html.length - 1; i >= 0; i--) {
    if (html[i] === ">") {
      insideTag = true;
    } else if (html[i] === "<") {
      insideTag = false;
      truncated = html[i] + truncated;
      continue;
    }
    if (!insideTag) {
      totalLength++;
    }
    if (totalLength <= maxLength) {
      truncated = html[i] + truncated;
    } else {
      truncated = "..." + truncated;
      break;
    }
  }
  return truncated;
}
function highlight(item, searchTerm, forceKey, omitKeys) {
  var _a;
  function generateHighlightedText(value, indices = []) {
    value = value || "";
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;
    indices.forEach((region) => {
      if (region.length === 2 && region[0] === region[1]) {
        return;
      }
      const lastIndiceNextIndex = region[1] + 1;
      const isMatched = lastIndiceNextIndex - region[0] >= searchTerm.length;
      content += [
        value.substring(nextUnhighlightedRegionStartingIndex, region[0]),
        isMatched && `<mark>`,
        value.substring(region[0], lastIndiceNextIndex),
        isMatched && "</mark>"
      ].filter(Boolean).join("");
      nextUnhighlightedRegionStartingIndex = lastIndiceNextIndex;
    });
    content += value.substring(nextUnhighlightedRegionStartingIndex);
    const markIndex = content.indexOf("<mark>");
    if (markIndex !== -1) {
      content = truncateHTMLFromStart(content, content.length - markIndex);
    }
    return content;
  }
  if (!((_a = item.matches) == null ? void 0 : _a.length)) {
    return;
  }
  for (const match of item.matches) {
    if (forceKey && match.key !== forceKey) {
      continue;
    }
    if (omitKeys == null ? void 0 : omitKeys.includes(match.key)) {
      continue;
    }
    return generateHighlightedText(match.value, match.indices);
  }
}

const theme$3 = {
  "slots": {
    "root": "flex flex-col min-h-0 min-w-0 divide-y divide-(--ui-border)",
    "input": "[&>input]:h-12",
    "close": "",
    "content": "relative overflow-hidden flex flex-col",
    "viewport": "relative divide-y divide-(--ui-border) scroll-py-1 overflow-y-auto flex-1 focus:outline-none",
    "group": "p-1 isolate",
    "empty": "py-6 text-center text-sm text-(--ui-text-muted)",
    "label": "px-2 py-1.5 text-xs font-semibold text-(--ui-text-highlighted)",
    "item": "group relative w-full flex items-center gap-2 px-2 py-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0 size-5",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "2xs",
    "itemLeadingChip": "shrink-0 size-5",
    "itemLeadingChipSize": "md",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0 size-5",
    "itemTrailingHighlightedIcon": "shrink-0 size-5 text-(--ui-text-dimmed) hidden group-data-highlighted:inline-flex",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5",
    "itemTrailingKbdsSize": "md",
    "itemLabel": "truncate space-x-1 rtl:space-x-reverse text-(--ui-text-dimmed)",
    "itemLabelBase": "text-(--ui-text-highlighted) [&>mark]:text-(--ui-bg) [&>mark]:bg-(--ui-primary)",
    "itemLabelPrefix": "text-(--ui-text)",
    "itemLabelSuffix": "text-(--ui-text-dimmed) [&>mark]:text-(--ui-bg) [&>mark]:bg-(--ui-primary)"
  },
  "variants": {
    "active": {
      "true": {
        "item": "text-(--ui-text-highlighted) before:bg-(--ui-bg-elevated)",
        "itemLeadingIcon": "text-(--ui-text)"
      },
      "false": {
        "item": [
          "text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    }
  }
};

var _a$3;
const appConfigCommandPalette = _appConfig;
const commandPalette = tv$1({ extend: tv$1(theme$3), ...((_a$3 = appConfigCommandPalette.ui) == null ? void 0 : _a$3.commandPalette) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CommandPalette",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    icon: {},
    selectedIcon: {},
    placeholder: {},
    autofocus: { type: Boolean, default: true },
    close: { type: [Boolean, Object] },
    closeIcon: {},
    groups: {},
    fuse: {},
    labelKey: { default: "label" },
    class: {},
    ui: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: { default: "" },
    defaultValue: {},
    highlightOnHover: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "searchTerm": { default: "" },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm");
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover"), emits);
    const inputProps = useForwardProps(reactivePick(props, "loading", "loadingIcon"));
    const ui = commandPalette();
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        ignoreLocation: true,
        threshold: 0.1,
        keys: [props.labelKey, "suffix"]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const items = computed(() => {
      var _a2;
      return ((_a2 = props.groups) == null ? void 0 : _a2.filter((group) => {
        if (!group.id) {
          console.warn(`[@nuxt/ui] CommandPalette group is missing an \`id\` property`);
          return false;
        }
        if (group.ignoreFilter) {
          return false;
        }
        return true;
      }).flatMap((group) => {
        var _a3;
        return ((_a3 = group.items) == null ? void 0 : _a3.map((item) => ({ ...item, group: group.id }))) || [];
      })) || [];
    });
    const { results: fuseResults } = useFuse(searchTerm, items, fuse);
    function getGroupWithItems(group, items2) {
      if ((group == null ? void 0 : group.postFilter) && typeof group.postFilter === "function") {
        items2 = group.postFilter(searchTerm.value, items2);
      }
      return {
        ...group,
        items: items2.slice(0, fuse.value.resultLimit).map((item) => {
          return {
            ...item,
            labelHtml: highlight(item, searchTerm.value, props.labelKey),
            suffixHtml: highlight(item, searchTerm.value, void 0, [props.labelKey])
          };
        })
      };
    }
    const groups = computed(() => {
      var _a2, _b, _c;
      const groupsById = fuseResults.value.reduce((acc, result) => {
        var _a3, _b2;
        const { item, matches } = result;
        if (!item.group) {
          return acc;
        }
        acc[_a3 = item.group] || (acc[_a3] = []);
        (_b2 = acc[item.group]) == null ? void 0 : _b2.push({ ...item, matches });
        return acc;
      }, {});
      const fuseGroups = Object.entries(groupsById).map(([id, items2]) => {
        var _a3;
        const group = (_a3 = props.groups) == null ? void 0 : _a3.find((group2) => group2.id === id);
        if (!group) {
          return;
        }
        return getGroupWithItems(group, items2);
      }).filter((group) => !!group);
      const nonFuseGroups = ((_c = (_b = (_a2 = props.groups) == null ? void 0 : _a2.map((group, index) => ({ ...group, index }))) == null ? void 0 : _b.filter((group) => {
        var _a3;
        return group.ignoreFilter && ((_a3 = group.items) == null ? void 0 : _a3.length);
      })) == null ? void 0 : _c.map((group) => ({ ...getGroupWithItems(group, group.items || []), index: group.index }))) || [];
      return nonFuseGroups.reduce((acc, group) => {
        acc.splice(group.index, 0, group);
        return acc;
      }, [...fuseGroups]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ListboxFilter), {
              modelValue: searchTerm.value,
              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(UInput, mergeProps({
                    placeholder: _ctx.placeholder || unref(t)("commandPalette.placeholder"),
                    variant: "none",
                    autofocus: _ctx.autofocus,
                    size: "lg"
                  }, unref(inputProps), {
                    icon: _ctx.icon || unref(appConfig).ui.icons.search,
                    class: unref(ui).input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                  }), createSlots({ _: 2 }, [
                    _ctx.close || !!slots.close ? {
                      name: "trailing",
                      fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "close", { ui: unref(ui) }, () => {
                            var _a5;
                            if (_ctx.close) {
                              _push4(ssrRenderComponent(__nuxt_component_1$2, mergeProps({
                                icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                class: unref(ui).close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "close", { ui: unref(ui) }, () => {
                              var _a5;
                              return [
                                _ctx.close ? (openBlock(), createBlock(__nuxt_component_1$2, mergeProps({
                                  key: 0,
                                  icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                  size: "md",
                                  color: "neutral",
                                  variant: "ghost",
                                  "aria-label": unref(t)("commandPalette.close")
                                }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                  class: unref(ui).close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close }),
                                  onClick: ($event) => emits("update:open", false)
                                }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        }
                      }),
                      key: "0"
                    } : void 0
                  ]), _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(UInput, mergeProps({
                      placeholder: _ctx.placeholder || unref(t)("commandPalette.placeholder"),
                      variant: "none",
                      autofocus: _ctx.autofocus,
                      size: "lg"
                    }, unref(inputProps), {
                      icon: _ctx.icon || unref(appConfig).ui.icons.search,
                      class: unref(ui).input({ class: (_b2 = props.ui) == null ? void 0 : _b2.input })
                    }), createSlots({ _: 2 }, [
                      _ctx.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: unref(ui) }, () => {
                            var _a5;
                            return [
                              _ctx.close ? (openBlock(), createBlock(__nuxt_component_1$2, mergeProps({
                                key: 0,
                                icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                class: unref(ui).close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["placeholder", "autofocus", "icon", "class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ListboxContent), {
              class: unref(ui).content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c, _d, _e, _f;
                if (_push3) {
                  if ((_a4 = groups.value) == null ? void 0 : _a4.length) {
                    _push3(`<div class="${ssrRenderClass(unref(ui).viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(groups.value, (group, groupIndex) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ListboxGroup), {
                        key: `group-${groupIndex}`,
                        class: unref(ui).group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a6, _b3;
                          if (_push4) {
                            if (unref(get)(group, props.labelKey)) {
                              _push4(ssrRenderComponent(unref(ListboxGroupLabel), {
                                class: unref(ui).label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(unref(get)(group, props.labelKey))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--[-->`);
                            ssrRenderList(group.items, (item, index) => {
                              _push4(ssrRenderComponent(unref(ListboxItem), {
                                key: `group-${groupIndex}-${index}`,
                                value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                disabled: item.disabled,
                                "as-child": "",
                                onSelect: item.onSelect
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }, _push6, _parent6, _scopeId5) => {
                                        var _a7, _b4;
                                        if (_push6) {
                                          _push6(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: unref(ui).item({ class: (_a7 = props.ui) == null ? void 0 : _a7.item, active: active || item.active })
                                          }), {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b5;
                                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a9, _b6, _c2, _d2, _e2, _f2;
                                                    if (item.loading) {
                                                      _push7(ssrRenderComponent(UIcon, {
                                                        name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (item.icon) {
                                                      _push7(ssrRenderComponent(UIcon, {
                                                        name: item.icon,
                                                        class: unref(ui).itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (item.avatar) {
                                                      _push7(ssrRenderComponent(UAvatar, mergeProps({
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, _parent7, _scopeId6));
                                                    } else if (item.chip) {
                                                      _push7(ssrRenderComponent(UChip, mergeProps({
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  if (item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`]) {
                                                    _push7(`<span class="${ssrRenderClass(unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active }))}"${_scopeId6}>`);
                                                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b6, _c2;
                                                      if (item.prefix) {
                                                        _push7(`<span class="${ssrRenderClass(unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix }))}"${_scopeId6}>${ssrInterpolate(item.prefix)}</span>`);
                                                      } else {
                                                        _push7(`<!---->`);
                                                      }
                                                      _push7(`<span class="${ssrRenderClass(unref(ui).itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }))}"${_scopeId6}>${(item.labelHtml || unref(get)(item, props.labelKey)) ?? ""}</span><span class="${ssrRenderClass(unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }))}"${_scopeId6}>${(item.suffixHtml || item.suffix) ?? ""}</span>`);
                                                    }, _push7, _parent7, _scopeId6);
                                                    _push7(`</span>`);
                                                  } else {
                                                    _push7(`<!---->`);
                                                  }
                                                  _push7(`<span class="${ssrRenderClass(unref(ui).itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId6}>`);
                                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a9, _b6, _c2;
                                                    if ((_a9 = item.kbds) == null ? void 0 : _a9.length) {
                                                      _push7(`<span class="${ssrRenderClass(unref(ui).itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds }))}"${_scopeId6}><!--[-->`);
                                                      ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                                                        var _a10;
                                                        _push7(ssrRenderComponent(UKbd, mergeProps({
                                                          key: kbdIndex,
                                                          size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                          ref_for: true
                                                        }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent7, _scopeId6));
                                                      });
                                                      _push7(`<!--]--></span>`);
                                                    } else if (group.highlightedIcon) {
                                                      _push7(ssrRenderComponent(UIcon, {
                                                        name: group.highlightedIcon,
                                                        class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                      }, null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  _push7(ssrRenderComponent(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      var _a9, _b6;
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(UIcon, {
                                                          name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: unref(ui).itemTrailingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(`</span>`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a9, _b6, _c2, _d2, _e2, _f2;
                                                        return [
                                                          item.loading ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                            class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                          }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 1,
                                                            name: item.icon,
                                                            class: unref(ui).itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 2,
                                                            size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 3,
                                                            size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                        key: 0,
                                                        class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                      }, [
                                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a9, _b6, _c2;
                                                          return [
                                                            item.prefix ? (openBlock(), createBlock("span", {
                                                              key: 0,
                                                              class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                            }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                            createVNode("span", {
                                                              class: unref(ui).itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }),
                                                              innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                            }, null, 10, ["innerHTML"]),
                                                            createVNode("span", {
                                                              class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                              innerHTML: item.suffixHtml || item.suffix
                                                            }, null, 10, ["innerHTML"])
                                                          ];
                                                        })
                                                      ], 2)) : createCommentVNode("", true),
                                                      createVNode("span", {
                                                        class: unref(ui).itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a9, _b6, _c2;
                                                          return [
                                                            ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                              key: 0,
                                                              class: unref(ui).itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds })
                                                            }, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                                var _a10;
                                                                return openBlock(), createBlock(UKbd, mergeProps({
                                                                  key: kbdIndex,
                                                                  size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                                  ref_for: true
                                                                }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                              }), 128))
                                                            ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                              key: 1,
                                                              name: group.highlightedIcon,
                                                              class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ];
                                                        }),
                                                        createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a9;
                                                            return [
                                                              createVNode(UIcon, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                              }, null, 8, ["name", "class"])
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ], 2)
                                                    ];
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                              class: unref(ui).item({ class: (_b4 = props.ui) == null ? void 0 : _b4.item, active: active || item.active })
                                            }), {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b5;
                                                  return [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b6, _c2, _d2, _e2, _f2;
                                                      return [
                                                        item.loading ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                          class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                        }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 1,
                                                          name: item.icon,
                                                          class: unref(ui).itemLeadingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLeadingIcon, active: active || item.active })
                                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                          key: 2,
                                                          size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                          ref_for: true
                                                        }, item.avatar, {
                                                          class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                          key: 3,
                                                          size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                          inset: "",
                                                          standalone: "",
                                                          ref_for: true
                                                        }, item.chip, {
                                                          class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a9, _b6, _c2;
                                                        return [
                                                          item.prefix ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                          createVNode("span", {
                                                            class: unref(ui).itemLabelBase({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemLabelBase, active: active || item.active }),
                                                            innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                          }, null, 10, ["innerHTML"]),
                                                          createVNode("span", {
                                                            class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                            innerHTML: item.suffixHtml || item.suffix
                                                          }, null, 10, ["innerHTML"])
                                                        ];
                                                      })
                                                    ], 2)) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: unref(ui).itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a9, _b6, _c2;
                                                        return [
                                                          ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: unref(ui).itemTrailingKbds({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingKbds })
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                              var _a10;
                                                              return openBlock(), createBlock(UKbd, mergeProps({
                                                                key: kbdIndex,
                                                                size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                                ref_for: true
                                                              }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                            }), 128))
                                                          ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                            key: 1,
                                                            name: group.highlightedIcon,
                                                            class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => {
                                                          var _a9;
                                                          return [
                                                            createVNode(UIcon, {
                                                              name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                              class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                            }, null, 8, ["name", "class"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ];
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                        default: withCtx(({ active, ...slotProps }) => {
                                          var _a7;
                                          return [
                                            createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                              class: unref(ui).item({ class: (_a7 = props.ui) == null ? void 0 : _a7.item, active: active || item.active })
                                            }), {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b4;
                                                  return [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b5, _c2, _d2, _e2, _f2;
                                                      return [
                                                        item.loading ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                          class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                        }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 1,
                                                          name: item.icon,
                                                          class: unref(ui).itemLeadingIcon({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLeadingIcon, active: active || item.active })
                                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                          key: 2,
                                                          size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                          ref_for: true
                                                        }, item.avatar, {
                                                          class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                          key: 3,
                                                          size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                          inset: "",
                                                          standalone: "",
                                                          ref_for: true
                                                        }, item.chip, {
                                                          class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a9, _b5, _c2;
                                                        return [
                                                          item.prefix ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                          createVNode("span", {
                                                            class: unref(ui).itemLabelBase({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLabelBase, active: active || item.active }),
                                                            innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                          }, null, 10, ["innerHTML"]),
                                                          createVNode("span", {
                                                            class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                            innerHTML: item.suffixHtml || item.suffix
                                                          }, null, 10, ["innerHTML"])
                                                        ];
                                                      })
                                                    ], 2)) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: unref(ui).itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                    }, [
                                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a9, _b5, _c2;
                                                        return [
                                                          ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: unref(ui).itemTrailingKbds({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailingKbds })
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                              var _a10;
                                                              return openBlock(), createBlock(UKbd, mergeProps({
                                                                key: kbdIndex,
                                                                size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                                ref_for: true
                                                              }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                            }), 128))
                                                          ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                            key: 1,
                                                            name: group.highlightedIcon,
                                                            class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => {
                                                          var _a9;
                                                          return [
                                                            createVNode(UIcon, {
                                                              name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                              class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                            }, null, 8, ["name", "class"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ];
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: unref(ui).label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${groupIndex}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a7;
                                        return [
                                          createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: unref(ui).item({ class: (_a7 = props.ui) == null ? void 0 : _a7.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a8, _b4;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a9, _b5, _c2, _d2, _e2, _f2;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(UIcon, {
                                                        key: 0,
                                                        name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: unref(ui).itemLeadingIcon({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                        key: 3,
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b5, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelBase({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: unref(ui).itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b5, _c2;
                                                      return [
                                                        ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemTrailingKbds({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a10;
                                                            return openBlock(), createBlock(UKbd, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a9;
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="${ssrRenderClass(unref(ui).empty({ class: (_c = props.ui) == null ? void 0 : _c.empty }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                      _push3(`${ssrInterpolate(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData"))}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    ((_d = groups.value) == null ? void 0 : _d.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: unref(ui).viewport({ class: (_e = props.ui) == null ? void 0 : _e.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ListboxGroup), {
                          key: `group-${groupIndex}`,
                          class: unref(ui).group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: unref(ui).label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${groupIndex}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a7;
                                        return [
                                          createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: unref(ui).item({ class: (_a7 = props.ui) == null ? void 0 : _a7.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a8, _b3;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a9, _b4, _c2, _d2, _e2, _f2;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(UIcon, {
                                                        key: 0,
                                                        name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: unref(ui).itemLeadingIcon({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: unref(ui).itemLeadingAvatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                        key: 3,
                                                        size: ((_e2 = props.ui) == null ? void 0 : _e2.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: unref(ui).itemLeadingChip({ class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b4, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelBase({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: unref(ui).itemTrailing({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b4, _c2;
                                                      return [
                                                        ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemTrailingKbds({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a10;
                                                            return openBlock(), createBlock(UKbd, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a9;
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: unref(ui).empty({ class: (_f = props.ui) == null ? void 0 : _f.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ListboxFilter), {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                "as-child": ""
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(UInput, mergeProps({
                      placeholder: _ctx.placeholder || unref(t)("commandPalette.placeholder"),
                      variant: "none",
                      autofocus: _ctx.autofocus,
                      size: "lg"
                    }, unref(inputProps), {
                      icon: _ctx.icon || unref(appConfig).ui.icons.search,
                      class: unref(ui).input({ class: (_a4 = props.ui) == null ? void 0 : _a4.input })
                    }), createSlots({ _: 2 }, [
                      _ctx.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: unref(ui) }, () => {
                            var _a5;
                            return [
                              _ctx.close ? (openBlock(), createBlock(__nuxt_component_1$2, mergeProps({
                                key: 0,
                                icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                class: unref(ui).close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["placeholder", "autofocus", "icon", "class"])
                  ];
                }),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(ListboxContent), {
                class: unref(ui).content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => {
                  var _a4, _b2, _c;
                  return [
                    ((_a4 = groups.value) == null ? void 0 : _a4.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: unref(ui).viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ListboxGroup), {
                          key: `group-${groupIndex}`,
                          class: unref(ui).group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                key: 0,
                                class: unref(ui).label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ListboxItem), {
                                  key: `group-${groupIndex}-${index}`,
                                  value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml"]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a7;
                                        return [
                                          createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: unref(ui).item({ class: (_a7 = props.ui) == null ? void 0 : _a7.item, active: active || item.active })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a8, _b3;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a9, _b4, _c2, _d, _e, _f;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(UIcon, {
                                                        key: 0,
                                                        name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                                                        class: unref(ui).itemLeadingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon, loading: true })
                                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: unref(ui).itemLeadingIcon({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLeadingIcon, active: active || item.active })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                        key: 2,
                                                        size: ((_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatarSize) || unref(ui).itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: unref(ui).itemLeadingAvatar({ class: (_d = props.ui) == null ? void 0 : _d.itemLeadingAvatar, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                        key: 3,
                                                        size: ((_e = props.ui) == null ? void 0 : _e.itemLeadingChipSize) || unref(ui).itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: unref(ui).itemLeadingChip({ class: (_f = props.ui) == null ? void 0 : _f.itemLeadingChip, active: active || item.active })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: unref(ui).itemLabel({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel, active: active || item.active })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b4, _c2;
                                                      return [
                                                        item.prefix ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemLabelPrefix({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix })
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelBase({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemLabelBase, active: active || item.active }),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, ["innerHTML"]),
                                                        createVNode("span", {
                                                          class: unref(ui).itemLabelSuffix({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLabelSuffix, active: active || item.active }),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, ["innerHTML"])
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: unref(ui).itemTrailing({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a9, _b4, _c2;
                                                      return [
                                                        ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: unref(ui).itemTrailingKbds({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailingKbds })
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                                            var _a10;
                                                            return openBlock(), createBlock(UKbd, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui).itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(UIcon, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: unref(ui).itemTrailingHighlightedIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemTrailingHighlightedIcon })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(ListboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a9;
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: unref(ui).itemTrailingIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled", "onSelect"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: unref(ui).empty({ class: (_c = props.ui) == null ? void 0 : _c.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$5, { __name: "UCommandPalette" });

const theme$2 = {
  "slots": {
    "modal": "sm:max-w-3xl sm:h-[28rem]"
  }
};

const useColorMode = () => {
  return useState("color-mode").value;
};

var _a$2;
const appConfigDashboardSearch = _appConfig;
const dashboardSearch = tv({ extend: tv(theme$2), ...((_a$2 = appConfigDashboardSearch.uiPro) == null ? void 0 : _a$2.dashboardSearch) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DashboardSearch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: {},
    placeholder: {},
    loading: { type: Boolean },
    loadingIcon: {},
    shortcut: { default: "meta_k" },
    groups: {},
    fuse: {},
    colorMode: { type: Boolean, default: true },
    class: {},
    ui: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {},
    "searchTerm": { default: "" },
    "searchTermModifiers": {}
  }),
  emits: ["update:open", "update:searchTerm"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open");
    const searchTerm = useModel(__props, "searchTerm");
    const dashboardContext = useDashboard();
    dashboardContext.searchOpen = open;
    dashboardContext.toggleSearch = () => {
      open.value = !open.value;
    };
    const appConfig = useAppConfig();
    const colorMode = useColorMode();
    const { t } = useLocalePro();
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {}
    }));
    const ui = dashboardSearch();
    const groups = computed(() => {
      const groups2 = [];
      groups2.push(...props.groups || []);
      if (props.colorMode && !(colorMode == null ? void 0 : colorMode.forced)) {
        groups2.push({
          id: "theme",
          label: t("dashboardSearch.theme"),
          items: [{
            label: t("colorMode.system"),
            icon: appConfig.ui.icons.system,
            active: colorMode.preference === "system",
            onSelect: () => {
              colorMode.preference = "system";
            }
          }, {
            label: t("colorMode.light"),
            icon: appConfig.ui.icons.light,
            active: colorMode.preference === "light",
            onSelect: () => {
              colorMode.preference = "light";
            }
          }, {
            label: t("colorMode.dark"),
            icon: appConfig.ui.icons.dark,
            active: colorMode.preference === "dark",
            onSelect: () => {
              colorMode.preference = "dark";
            }
          }]
        });
      }
      return groups2;
    });
    function onSelect(item) {
      if (item.disabled) {
        return;
      }
      open.value = false;
      searchTerm.value = "";
    }
    defineShortcuts({
      [props.shortcut]: {
        usingInput: true,
        handler: () => open.value = !open.value
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = UModal;
      const _component_UCommandPalette = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        class: unref(ui).modal({ class: props.class })
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCommandPalette, {
              "search-term": searchTerm.value,
              "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
              icon: _ctx.icon,
              placeholder: _ctx.placeholder,
              loading: _ctx.loading,
              "loading-icon": _ctx.loadingIcon,
              groups: groups.value,
              fuse: fuse.value,
              close: "",
              "onUpdate:modelValue": onSelect,
              "onUpdate:open": ($event) => open.value = $event
            }, createSlots({ _: 2 }, [
              renderList(slots, (_2, name) => {
                return {
                  name,
                  fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, name, slotData)
                      ];
                    }
                  })
                };
              })
            ]), _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCommandPalette, {
                "search-term": searchTerm.value,
                "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
                icon: _ctx.icon,
                placeholder: _ctx.placeholder,
                loading: _ctx.loading,
                "loading-icon": _ctx.loadingIcon,
                groups: groups.value,
                fuse: fuse.value,
                close: "",
                "onUpdate:modelValue": onSelect,
                "onUpdate:open": ($event) => open.value = $event
              }, createSlots({ _: 2 }, [
                renderList(slots, (_2, name) => {
                  return {
                    name,
                    fn: withCtx((slotData) => [
                      renderSlot(_ctx.$slots, name, slotData)
                    ])
                  };
                })
              ]), 1032, ["search-term", "onUpdate:searchTerm", "icon", "placeholder", "loading", "loading-icon", "groups", "fuse", "onUpdate:open"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearch.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "UDashboardSearch" });

const theme$1 = {
  "slots": {
    "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
    "content": "fixed bg-(--ui-bg) ring ring-(--ui-border) flex focus:outline-none",
    "handle": "shrink-0 rounded-full bg-(--ui-bg-accented)",
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-(--ui-text-highlighted) font-semibold",
    "description": "mt-1 text-(--ui-text-muted) text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-[calc(var(--ui-radius)*2)] after:hidden"
      }
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "w-12 h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "h-12 w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-[calc(var(--ui-radius)*2)]"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-[calc(var(--ui-radius)*2)]"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-[calc(var(--ui-radius)*2)]"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-[calc(var(--ui-radius)*2)]"
      }
    }
  ]
};

var _a$1;
const appConfigDrawer = _appConfig;
const drawer = tv$1({ extend: tv$1(theme$1), ...((_a$1 = appConfigDrawer.ui) == null ? void 0 : _a$1.drawer) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    inset: { type: Boolean },
    content: {},
    overlay: { type: Boolean, default: true },
    handle: { type: Boolean, default: true },
    portal: { type: Boolean, default: true },
    dismissible: { type: Boolean },
    class: {},
    ui: {},
    activeSnapPoint: {},
    closeThreshold: {},
    defaultOpen: { type: Boolean },
    direction: { default: "bottom" },
    fadeFromIndex: {},
    fixed: { type: Boolean },
    modal: { type: Boolean },
    nested: { type: Boolean },
    open: { type: Boolean },
    scrollLockTimeout: {},
    shouldScaleBackground: { type: Boolean },
    snapPoints: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "defaultOpen", "dismissible", "fadeFromIndex", "fixed", "modal", "nested", "direction", "open", "scrollLockTimeout", "shouldScaleBackground", "snapPoints"), emits);
    const contentProps = toRef(() => props.content);
    const contentEvents = {
      closeAutoFocus: (e) => e.preventDefault()
    };
    const ui = computed(() => drawer({
      direction: props.direction,
      inset: props.inset
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  if (_ctx.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "handle", {}, () => {
                          var _a3;
                          if (_ctx.handle) {
                            _push4(`<div class="${ssrRenderClass(ui.value.handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle }))}"${_scopeId3}></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2, _d2;
                          _push4(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b3;
                              if (_ctx.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (_ctx.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "handle", {}, () => {
                            var _a3;
                            return [
                              _ctx.handle ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle })
                              }, null, 2)) : createCommentVNode("", true)
                            ];
                          }),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2, _d2;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b3;
                                    return [
                                      _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "handle", {}, () => {
                          var _a3;
                          return [
                            _ctx.handle ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle })
                            }, null, 2)) : createCommentVNode("", true)
                          ];
                        }),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2, _d2;
                          return [
                            createVNode("div", {
                              class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                            }, [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a4, _b3;
                                  return [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "handle", {}, () => {
                          var _a3;
                          return [
                            _ctx.handle ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle })
                            }, null, 2)) : createCommentVNode("", true)
                          ];
                        }),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c, _d;
                          return [
                            createVNode("div", {
                              class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                            }, [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a4, _b3;
                                  return [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_c = props.ui) == null ? void 0 : _c.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_d = props.ui) == null ? void 0 : _d.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UDrawer = Object.assign(_sfc_main$3, { __name: "UDrawer" });

const theme = {
  "slots": {
    "root": "hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) border-r border-(--ui-border) shrink-0",
    "header": "h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4",
    "body": "flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2",
    "footer": "shrink-0 flex items-center gap-1.5 px-4 py-2",
    "toggle": "",
    "handle": "",
    "content": "lg:hidden",
    "overlay": "lg:hidden"
  },
  "variants": {
    "menu": {
      "true": {
        "header": "sm:px-6",
        "body": "sm:px-6",
        "footer": "sm:px-6"
      }
    },
    "toggleSide": {
      "left": {
        "toggle": ""
      },
      "right": {
        "toggle": "ms-auto"
      }
    }
  }
};

var _a;
const appConfig = _appConfig;
const dashboardSidebar = tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.dashboardSidebar) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardSidebar",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    mode: { default: "slideover" },
    menu: {},
    toggle: { type: [Boolean, Object], default: true },
    toggleSide: { default: "left" },
    class: {},
    ui: {},
    id: {},
    minSize: { default: 10 },
    maxSize: { default: 20 },
    defaultSize: { default: 15 },
    resizable: { type: Boolean, default: false },
    collapsible: { type: Boolean, default: false },
    collapsedSize: { default: 0 }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {},
    "collapsed": { type: Boolean, ...{ default: false } },
    "collapsedModifiers": {}
  }),
  emits: ["update:open", "update:collapsed"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open");
    const collapsed = useModel(__props, "collapsed");
    const dashboardContext = useDashboard({ storageKey: "dashboard" });
    const id = `${dashboardContext.storageKey}-sidebar-${props.id || useId()}`;
    const { size, collapse, isCollapsed, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })), { collapsed });
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    dashboardContext.sidebarCollapsed = isCollapsed;
    dashboardContext.collapseSidebar = collapse;
    dashboardContext.sidebarOpen = open;
    dashboardContext.toggleSidebar = () => {
      open.value = !open.value;
    };
    const ui = dashboardSidebar();
    const Menu = computed(() => ({
      slideover: USlideover,
      modal: UModal,
      drawer: UDrawer
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, props.mode === "modal" ? { fullscreen: true, transition: false } : props.mode === "slideover" ? { side: "left" } : {}));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f;
      const _component_UDashboardSidebarToggle = __nuxt_component_0$1;
      const _component_UDashboardResizeHandle = __nuxt_component_1$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: _ctx.toggle
            }, () => {
              var _a3;
              if (_ctx.toggle) {
                _push2(ssrRenderComponent(_component_UDashboardSidebarToggle, mergeProps(typeof _ctx.toggle === "object" ? _ctx.toggle : {}, {
                  side: _ctx.toggleSide,
                  class: unref(ui).toggle({ class: (_a3 = props.ui) == null ? void 0 : _a3.toggle, toggleSide: _ctx.toggleSide })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: _ctx.toggle
              }, () => {
                var _a3;
                return [
                  _ctx.toggle ? (openBlock(), createBlock(_component_UDashboardSidebarToggle, mergeProps({ key: 0 }, typeof _ctx.toggle === "object" ? _ctx.toggle : {}, {
                    side: _ctx.toggleSide,
                    class: unref(ui).toggle({ class: (_a3 = props.ui) == null ? void 0 : _a3.toggle, toggleSide: _ctx.toggleSide })
                  }), null, 16, ["side", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div${ssrRenderAttr("id", id)}${ssrRenderAttr("data-collapsed", unref(isCollapsed))}${ssrRenderAttr("data-dragging", unref(isDragging))} class="${ssrRenderClass(unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }))}" style="${ssrRenderStyle({ width: `${unref(size) || 0}%` })}">`);
      if (!!slots.header) {
        _push(`<div class="${ssrRenderClass(unref(ui).header({ class: (_b = props.ui) == null ? void 0 : _b.header }))}">`);
        ssrRenderSlot(_ctx.$slots, "header", {
          collapsed: unref(isCollapsed),
          collapse: unref(collapse)
        }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).body({ class: (_c = props.ui) == null ? void 0 : _c.body }))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {
        collapsed: unref(isCollapsed),
        collapse: unref(collapse)
      }, null, _push, _parent);
      _push(`</div>`);
      if (!!slots.footer) {
        _push(`<div class="${ssrRenderClass(unref(ui).footer({ class: (_d = props.ui) == null ? void 0 : _d.footer }))}">`);
        ssrRenderSlot(_ctx.$slots, "footer", {
          collapsed: unref(isCollapsed),
          collapse: unref(collapse)
        }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "resize-handle", {
        onMouseDown: unref(onMouseDown),
        onTouchStart: unref(onTouchStart)
      }, () => {
        var _a3;
        if (_ctx.resizable) {
          _push(ssrRenderComponent(_component_UDashboardResizeHandle, {
            "aria-controls": id,
            class: unref(ui).handle({ class: (_a3 = props.ui) == null ? void 0 : _a3.handle }),
            onMousedown: unref(onMouseDown),
            onTouchstart: unref(onTouchStart)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, menuProps.value, {
        ui: {
          overlay: unref(ui).overlay({ class: (_e = props.ui) == null ? void 0 : _e.overlay }),
          content: unref(ui).content({ class: (_f = props.ui) == null ? void 0 : _f.content })
        }
      }), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, () => {
              var _a3, _b2, _c2;
              if (_ctx.mode !== "drawer") {
                _push2(`<div class="${ssrRenderClass(unref(ui).header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header, menu: true }))}"${_scopeId}>`);
                if (_ctx.toggleSide === "left") {
                  _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                if (_ctx.toggleSide === "right") {
                  _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass(unref(ui).body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body, menu: true }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              if (!!slots.footer) {
                _push2(`<div class="${ssrRenderClass(unref(ui).footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer, menu: true }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", {}, () => {
                var _a3, _b2, _c2;
                return [
                  _ctx.mode !== "drawer" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: unref(ui).header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header, menu: true })
                  }, [
                    _ctx.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "header"),
                    _ctx.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 1 })) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createVNode("div", {
                    class: unref(ui).body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body, menu: true })
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: unref(ui).footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer, menu: true })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UDashboardSidebar" });

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CompanyMenu",
  __ssrInlineRender: true,
  props: {
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const teams = ref([{
      label: "Persönlich",
      avatar: {
        src: "https://github.com/nuxt.png",
        alt: "Nuxt"
      }
    }, {
      label: "My Company",
      avatar: {
        src: "https://github.com/nuxt-hub.png",
        alt: "NuxtHub"
      }
    }]);
    const selectedTeam = ref(teams.value[0]);
    const items = computed(() => {
      return [teams.value.map((team) => ({
        ...team,
        onSelect() {
          selectedTeam.value = team;
        }
      })), [{
        label: "Team erstellen",
        icon: "i-lucide-circle-plus"
      }, {
        label: "Teams verwalten",
        icon: "i-lucide-cog"
      }]];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdownMenu = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UDropdownMenu, mergeProps({
        items: unref(items),
        content: { align: "center", collisionPadding: 12 },
        ui: { content: _ctx.collapsed ? "w-40" : "w-(--reka-dropdown-menu-trigger-width)" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, mergeProps({
              ...unref(selectedTeam),
              label: _ctx.collapsed ? void 0 : (_a = unref(selectedTeam)) == null ? void 0 : _a.label,
              trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
            }, {
              color: "neutral",
              variant: "ghost",
              block: "",
              square: _ctx.collapsed,
              class: ["data-[state=open]:bg-(--ui-bg-elevated)", [!_ctx.collapsed && "py-2"]],
              ui: {
                trailingIcon: "text-(--ui-text-dimmed)"
              }
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, mergeProps({
                ...unref(selectedTeam),
                label: _ctx.collapsed ? void 0 : (_b = unref(selectedTeam)) == null ? void 0 : _b.label,
                trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
              }, {
                color: "neutral",
                variant: "ghost",
                block: "",
                square: _ctx.collapsed,
                class: ["data-[state=open]:bg-(--ui-bg-elevated)", [!_ctx.collapsed && "py-2"]],
                ui: {
                  trailingIcon: "text-(--ui-text-dimmed)"
                }
              }), null, 16, ["square", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanyMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "CompanyMenu" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserMenu",
  __ssrInlineRender: true,
  props: {
    collapsed: { type: Boolean }
  },
  async setup(__props) {
    let __temp, __restore;
    const user = ref({
      name: "Max Mustermann",
      avatar: {
        src: "https://github.com/benjamincanac.png",
        alt: "Max Mustermann"
      }
    });
    try {
      const response = ([__temp, __restore] = withAsyncContext(() => axios.get("https://saci.key2host.com/api/user/hello/", {
        withCredentials: true
      })), __temp = await __temp, __restore(), __temp);
      if (response.data.user && response.data.user.fullname) {
        user.value.name = response.data.user.fullname;
      }
    } catch (error) {
    }
    const items = computed(() => [[{
      type: "label",
      label: user.value.name,
      avatar: user.value.avatar
    }], [{
      label: "Mein Profil",
      icon: "i-lucide-user",
      to: "/profile"
    }, {
      label: "Rechnungen",
      icon: "i-lucide-credit-card",
      to: "/invoices"
    }, {
      label: "Einstellungen",
      icon: "i-lucide-settings",
      to: "/settings"
    }], [{
      label: "Störungen",
      icon: "i-lucide-bug",
      to: "https://status.key2host.com",
      target: "_blank"
    }, {
      label: "Dokumentation",
      icon: "i-lucide-message-circle",
      to: "https://wiki.key2host.com",
      target: "_blank"
    }, {
      label: "Hilfe & Support",
      icon: "i-lucide-info",
      to: "https://help.key2host.com",
      target: "_blank"
    }], [{
      label: "Abmelden",
      icon: "i-lucide-log-out",
      color: "error",
      to: "#"
    }]]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdownMenu = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UDropdownMenu, mergeProps({
        items: unref(items),
        content: { align: "center", collisionPadding: 12 },
        ui: { content: _ctx.collapsed ? "w-48" : "w-(--reka-dropdown-menu-trigger-width)" }
      }, _attrs), {
        "chip-leading": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "--chip": `var(--color-${item.chip}-400)` })}" class="ms-0.5 size-2 rounded-full bg-(--chip)"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", {
                style: { "--chip": `var(--color-${item.chip}-400)` },
                class: "ms-0.5 size-2 rounded-full bg-(--chip)"
              }, null, 4)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, mergeProps({
              ...unref(user),
              label: _ctx.collapsed ? void 0 : (_a = unref(user)) == null ? void 0 : _a.name,
              trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
            }, {
              color: "neutral",
              variant: "ghost",
              block: "",
              square: _ctx.collapsed,
              class: "data-[state=open]:bg-(--ui-bg-elevated)",
              ui: {
                trailingIcon: "text-(--ui-text-dimmed)"
              }
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, mergeProps({
                ...unref(user),
                label: _ctx.collapsed ? void 0 : (_b = unref(user)) == null ? void 0 : _b.name,
                trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
              }, {
                color: "neutral",
                variant: "ghost",
                block: "",
                square: _ctx.collapsed,
                class: "data-[state=open]:bg-(--ui-bg-elevated)",
                ui: {
                  trailingIcon: "text-(--ui-text-dimmed)"
                }
              }), null, 16, ["square"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "UserMenu" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_2 as b, __nuxt_component_6 as c, __nuxt_component_3 as d };
//# sourceMappingURL=UserMenu.vue.mjs.map
