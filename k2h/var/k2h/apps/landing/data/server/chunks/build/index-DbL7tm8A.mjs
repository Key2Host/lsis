import { _ as __nuxt_component_0 } from './LandingSection-DxDwr353.mjs';
import { defineComponent, ref, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, computed, toRef, unref, useSlots, createCommentVNode, cloneVNode, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Y as useI18n, u as useSeoMeta, _ as _export_sfc, B as useUI, a5 as nuxtLinkProps, a1 as getNuxtLinkProps, a6 as getSlotChildrenText, X as __nuxt_component_0$e, a3 as __nuxt_component_1$2, y as __nuxt_component_4$3, M as __nuxt_component_0$9, z as mergeConfig, a9 as getSlotsChildren, G as twMerge, H as appConfig, ab as button, aa as avatar } from './server.mjs';
import { I as ImageComponent } from './NuxtImg-DXAKlIe0.mjs';
import { twJoin } from 'tailwind-merge';
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

const avatarGroup = {
  wrapper: "inline-flex flex-row-reverse justify-end",
  ring: "ring-2 ring-white dark:ring-gray-900",
  margin: "-me-1.5 first:me-0"
};
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const wrapper = {
        horizontal: "flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",
        vertical: "flex flex-col gap-y-16 w-full"
      }[props.orientation];
      return {
        wrapper
      };
    });
    const { ui, attrs } = useUI("blog.list", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/blog/BlogList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UBlogList" });
const avatarConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const avatarGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatarGroup, avatarGroup);
const __nuxt_component_3$1 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(avatarConfig.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
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
  setup(props, { slots }) {
    const { ui, attrs } = useUI("avatarGroup", toRef(props, "ui"), avatarGroupConfig, toRef(props, "class"));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_4$3, {
          size: props.size || avatarConfig.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: ui.value.wrapper, ...attrs.value }, clones.value);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    ...nuxtLinkProps,
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    date: {
      type: [String, Date],
      default: void 0
    },
    image: {
      type: [String, Object],
      default: void 0
    },
    badge: {
      type: Object,
      default: void 0
    },
    authors: {
      type: Array,
      default: void 0
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const config2 = computed(() => {
      const wrapper = twJoin(
        "relative group flex flex-col w-full gap-y-6",
        props.orientation === "horizontal" && (!!props.image || !!slots.image) ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center" : void 0
      );
      return {
        wrapper,
        image: {
          wrapper: "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
          base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
        },
        container: "flex flex-col justify-between flex-1",
        inner: "flex-1",
        badge: {
          wrapper: "mb-3",
          base: ""
        },
        title: "text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",
        description: "text-base text-gray-500 dark:text-gray-400 mt-1",
        date: "text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",
        authors: {
          wrapper: "relative flex items-center gap-x-3 mt-4",
          avatar: {
            base: "relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",
            size: "xs"
          }
        }
      };
    });
    const { ui, attrs } = useUI("blog.post", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Post link").trim());
    const datetime = computed(() => {
      if (!props.date) {
        return void 0;
      }
      try {
        return new Date(props.date).toISOString();
      } catch {
        return void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = ImageComponent;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UBadge = __nuxt_component_1$2;
      const _component_UAvatarGroup = __nuxt_component_3$1;
      const _component_UAvatar = __nuxt_component_4$3;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.image || _ctx.$slots.image) {
        _push(`<div class="${ssrRenderClass(unref(ui).image.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, () => {
          _push(ssrRenderComponent(_component_NuxtImg, mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
            class: unref(ui).image.base
          }), null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).container)}"><div class="${ssrRenderClass(unref(ui).inner)}">`);
      if (_ctx.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ "aria-label": unref(ariaLabel) }, unref(nuxtLinkBind), {
          class: "focus:outline-none",
          tabindex: "-1"
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.badge || _ctx.$slots.badge) {
        _push(`<div class="${ssrRenderClass(unref(ui).badge.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
          if (__props.badge) {
            _push(ssrRenderComponent(_component_UBadge, mergeProps({ variant: "subtle", ...__props.badge }, {
              class: unref(ui).badge.base
            }), null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.title || _ctx.$slots.title) {
        _push(`<h2 class="${ssrRenderClass(unref(ui).title)}">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description || _ctx.$slots.description) {
        _push(`<div class="${ssrRenderClass(unref(ui).description)}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (((_a = __props.authors) == null ? void 0 : _a.length) || _ctx.$slots.authors || (__props.date || _ctx.$slots.date)) {
        _push(`<div class="${ssrRenderClass(unref(ui).authors.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "authors", {}, () => {
          var _a2;
          if ((_a2 = __props.authors) == null ? void 0 : _a2.length) {
            _push(ssrRenderComponent(_component_UAvatarGroup, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.authors, (author, index) => {
                    _push2(ssrRenderComponent(_component_UAvatar, mergeProps({
                      key: index,
                      alt: author.name,
                      class: unref(ui).authors.avatar.base,
                      ref_for: true
                    }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (author.to) {
                            _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({ ref_for: true }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<span class="absolute inset-0" aria-hidden="true"${_scopeId3}></span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "absolute inset-0",
                                      "aria-hidden": "true"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                              key: 0,
                              ref_for: true
                            }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "absolute inset-0",
                                  "aria-hidden": "true"
                                })
                              ]),
                              _: 2
                            }, 1040)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                      return openBlock(), createBlock(_component_UAvatar, mergeProps({
                        key: index,
                        alt: author.name,
                        class: unref(ui).authors.avatar.base,
                        ref_for: true
                      }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                        default: withCtx(() => [
                          author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                            key: 0,
                            ref_for: true
                          }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                            class: "focus:outline-none",
                            tabindex: "-1"
                          }), {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "absolute inset-0",
                                "aria-hidden": "true"
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040, ["alt", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "date", {}, () => {
          if (__props.date) {
            _push(`<time${ssrRenderAttr("datetime", unref(datetime))} class="${ssrRenderClass(unref(ui).date)}">${ssrInterpolate(__props.date)}</time>`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/blog/BlogPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UBlogPost" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$1 = defineComponent({
  components: {
    UButton: __nuxt_component_0$9
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    to: {
      type: Function,
      default: null
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "…"
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r;
      const r2 = current + r;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r2 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i = 1; i <= totalPages; i++) {
          items.push(i);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped) items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r + 2 - totalPages;
        for (let i = current - r - addedItems; i <= current - r - 1; i++) {
          items.push(i);
        }
      }
      for (let i = Math.max(2, r1); i <= Math.min(totalPages, r2); i++) {
        items.push(i);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r - 2);
        for (let i = current + r + 1; i <= current + r + addedItems; i++) {
          items.push(i);
        }
      }
      if (afterWrapped) items.push(props.divider);
      if (r2 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_0$9;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", {
    onClick: _ctx.onClickFirst,
    canGoFirst: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", {
    onClick: _ctx.onClickPrev,
    canGoPrev: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage - 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    var _a;
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      to: typeof page === "number" ? (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, page) : null,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`,
      ref_for: true
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", {
    onClick: _ctx.onClickNext,
    canGoNext: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage + 1),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", {
    onClick: _ctx.onClickLast,
    canGoLast: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.pages.length),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "UPagination" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(1);
    const items = ref(Array(55));
    const { t } = useI18n({
      useScope: "global"
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
    useSeoMeta({
      title: t("newsroom.title"),
      ogTitle: t("newsroom.title"),
      description: t("newsroom.description"),
      ogDescription: t("newsroom.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UBlogList = __nuxt_component_1;
      const _component_UBlogPost = __nuxt_component_2;
      const _component_UPagination = __nuxt_component_3;
      _push(ssrRenderComponent(_component_ULandingSection, mergeProps({
        title: _ctx.$t("newsroom.title"),
        description: _ctx.$t("newsroom.description")
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
                    }, post, { to: "/newsroom/1" }), null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                      return createVNode(_component_UBlogPost, mergeProps({
                        key: index,
                        ref_for: true
                      }, post, { to: "/newsroom/1" }), null, 16);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center opacity-75"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: page.value,
              "onUpdate:modelValue": ($event) => page.value = $event,
              "page-count": 5,
              total: items.value.length
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UBlogList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(blogPosts, (post, index) => {
                    return createVNode(_component_UBlogPost, mergeProps({
                      key: index,
                      ref_for: true
                    }, post, { to: "/newsroom/1" }), null, 16);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-center opacity-75" }, [
                createVNode(_component_UPagination, {
                  modelValue: page.value,
                  "onUpdate:modelValue": ($event) => page.value = $event,
                  "page-count": 5,
                  total: items.value.length
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
              ])
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DbL7tm8A.mjs.map
