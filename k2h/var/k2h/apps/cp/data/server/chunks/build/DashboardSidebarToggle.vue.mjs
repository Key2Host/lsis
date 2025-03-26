import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, computed, isRef, watch, toRef, inject } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive, createContext, useForwardProps } from 'reka-ui';
import { d as _appConfig, v as useCookie, w as defineLocale, x as en$1, y as localeContextInjectionKey, z as buildLocaleContext, f as useAppConfig, a as __nuxt_component_1$1 } from './server.mjs';
import { t as tv } from './tv.mjs';
import { useStorage, createSharedComposable, reactivePick } from '@vueuse/core';

const theme$1 = {
  "base": "hidden lg:block touch-none select-none cursor-ew-resize relative before:absolute before:inset-y-0 before:-left-1.5 before:-right-1.5"
};

var _a$1;
const appConfig = _appConfig;
const dashboardResizeHandle = tv({ extend: tv(theme$1), ...((_a$1 = appConfig.uiPro) == null ? void 0 : _a$1.dashboardResizeHandle) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardResizeHandle",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref: "handleRef",
        as: _ctx.as,
        role: "separator",
        class: unref(dashboardResizeHandle)({ class: props.class })
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

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardResizeHandle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UDashboardResizeHandle" });

const [useDashboard, provideDashboardContext] = createContext("DashboardGroup");

const useResizable = (key, options = {}, { collapsed = ref(false) } = {}) => {
  const el = ref(null);
  const opts = computed(() => ({
    minSize: 0,
    maxSize: 100,
    defaultSize: 0,
    storage: "cookie",
    persistent: true,
    collapsible: false,
    collapsedSize: 0,
    resizable: true,
    ...isRef(options) ? options.value : options
  }));
  const defaultStorageValue = {
    size: opts.value.defaultSize,
    collapsed: unref(collapsed) ?? false
  };
  const storageData = opts.value.persistent && (opts.value.resizable || opts.value.collapsible) ? opts.value.storage === "cookie" ? useCookie(key, { default: () => defaultStorageValue }) : useStorage(key, defaultStorageValue) : ref(defaultStorageValue);
  const isCollapsed = computed({
    get: () => storageData.value.collapsed,
    set: (value) => {
      if (!opts.value.collapsible) {
        if (isRef(collapsed)) {
          collapsed.value = value;
        }
        return;
      }
      storageData.value.collapsed = value;
    }
  });
  const previousSize = ref(opts.value.defaultSize);
  const size = computed({
    get: () => storageData.value.size,
    set: (value) => {
      storageData.value.size = value;
    }
  });
  const currentSize = computed(() => isCollapsed.value ? opts.value.collapsedSize : size.value);
  const isDragging = ref(false);
  const onMouseMove = (e, initialPos, initialSize) => {
    var _a;
    if (!el.value || !opts.value.resizable) {
      return;
    }
    const parentSize = ((_a = el.value.parentElement) == null ? void 0 : _a.offsetWidth) || 1;
    const delta = e.clientX - initialPos;
    const newSize = initialSize + delta;
    const newPercentage = newSize / parentSize * 100;
    if (opts.value.collapsible && newPercentage < opts.value.collapsedSize + 4) {
      collapse(true);
      return;
    } else if (isCollapsed.value) {
      collapse(false);
    }
    size.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newPercentage));
  };
  const onMouseDown = (e) => {
    if (!el.value || !opts.value.resizable) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const elWidth = el.value.getBoundingClientRect().width;
    if (!elWidth) {
      return;
    }
    const initialX = e.clientX;
    const initialWidth = elWidth;
    isDragging.value = true;
    const handleMouseMove = (e2) => {
      onMouseMove(e2, initialX, initialWidth);
    };
    const handleMouseUp = () => {
      isDragging.value = false;
      (void 0).removeEventListener("mousemove", handleMouseMove);
      (void 0).removeEventListener("mouseup", handleMouseUp);
    };
    (void 0).addEventListener("mousemove", handleMouseMove);
    (void 0).addEventListener("mouseup", handleMouseUp);
  };
  const onTouchMove = (e, initialPos, initialSize) => {
    var _a;
    if (!el.value || !opts.value.resizable || !e.touches[0]) {
      return;
    }
    const parentSize = ((_a = el.value.parentElement) == null ? void 0 : _a.offsetWidth) || 1;
    const delta = e.touches[0].clientX - initialPos;
    const newSize = initialSize + delta;
    const newPercentage = newSize / parentSize * 100;
    if (opts.value.collapsible && newPercentage < opts.value.collapsedSize + 4) {
      collapse(true);
      return;
    } else if (isCollapsed.value) {
      collapse(false);
    }
    size.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newPercentage));
  };
  const onTouchStart = (e) => {
    if (!el.value || !opts.value.resizable || !e.touches[0]) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const elWidth = el.value.getBoundingClientRect().width;
    if (!elWidth) {
      return;
    }
    const initialX = e.touches[0].clientX;
    const initialWidth = elWidth;
    isDragging.value = true;
    const handleTouchMove = (e2) => {
      onTouchMove(e2, initialX, initialWidth);
    };
    const handleTouchEnd = () => {
      isDragging.value = false;
      (void 0).removeEventListener("touchmove", handleTouchMove);
      (void 0).removeEventListener("touchend", handleTouchEnd);
      (void 0).removeEventListener("touchcancel", handleTouchEnd);
    };
    (void 0).addEventListener("touchmove", handleTouchMove, { passive: false });
    (void 0).addEventListener("touchend", handleTouchEnd);
    (void 0).addEventListener("touchcancel", handleTouchEnd);
  };
  const collapse = (value) => {
    if (!opts.value.collapsible) {
      return;
    }
    const newCollapsed = value ?? !isCollapsed.value;
    if (newCollapsed && !isCollapsed.value) {
      previousSize.value = size.value;
    } else if (!newCollapsed && isCollapsed.value) {
      size.value = previousSize.value;
    }
    isCollapsed.value = newCollapsed;
  };
  const setSize = (newSize) => {
    if (isCollapsed.value) {
      previousSize.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newSize));
    } else {
      size.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newSize));
    }
  };
  if (isRef(collapsed)) {
    watch(collapsed, (value) => {
      if (!opts.value.collapsible) {
        return;
      }
      if (storageData.value.collapsed !== value) {
        storageData.value.collapsed = value;
      }
    });
  }
  return {
    el,
    size: currentSize,
    isDragging,
    isCollapsed,
    onMouseDown,
    onTouchStart,
    setSize,
    collapse
  };
};

const en = defineLocale({
  ...en$1,
  messages: {
    ...en$1.messages,
    authForm: {
      submit: "Continue",
      hidePassword: "Hide password",
      showPassword: "Show password"
    },
    banner: {
      close: "Close"
    },
    colorMode: {
      system: "System",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search..."
    },
    contentToc: {
      title: "On this page"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search..."
    },
    dashboardSidebarCollapse: {
      expand: "Expand sidebar",
      collapse: "Collapse sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Back to home"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    prose: {
      pre: {
        copy: "Copy code to clipboard"
      }
    }
  }
});

const _useLocalePro = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocalePro = createSharedComposable(_useLocalePro);

const theme = {
  "base": "lg:hidden",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
};

var _a;
const appConfigDashboardSidebarToggle = _appConfig;
const dashboardSidebarToggle = tv({ extend: tv(theme), ...((_a = appConfigDashboardSidebarToggle.uiPro) == null ? void 0 : _a.dashboardSidebarToggle) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardSidebarToggle",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    color: { default: "neutral" },
    variant: { default: "ghost" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
    const appConfig = useAppConfig();
    const { sidebarOpen, toggleSidebar } = useDashboard({ sidebarOpen: ref(false), toggleSidebar: () => {
    } });
    const { t } = useLocalePro();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UButton, mergeProps(unref(rootProps), {
        "aria-label": unref(sidebarOpen) ? unref(t)("dashboardSidebarToggle.close") : unref(t)("dashboardSidebarToggle.open"),
        icon: unref(sidebarOpen) ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu,
        class: unref(dashboardSidebarToggle)({ class: props.class, side: props.side }),
        onClick: unref(toggleSidebar)
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UDashboardSidebarToggle" });

export { __nuxt_component_1 as _, useLocalePro as a, useResizable as b, __nuxt_component_0 as c, provideDashboardContext as p, useDashboard as u };
//# sourceMappingURL=DashboardSidebarToggle.vue.mjs.map
