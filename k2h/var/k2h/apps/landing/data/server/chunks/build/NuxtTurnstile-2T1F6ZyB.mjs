import { defineComponent, ref, createVNode, resolveDynamicComponent, mergeProps, watch, reactive, useSSRContext } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';
import { k as defu } from '../nitro/nitro.mjs';
import { a5 as useRuntimeConfig, a2 as useNuxtApp, a3 as injectHead, a4 as useScript$1, a6 as parseURL, a7 as useHead } from './server.mjs';
import { resolveScriptKey } from 'unhead';
import { useEventListener } from '@vueuse/core';
import { tryOnMounted, tryOnScopeDispose } from '@vueuse/shared';

const onNuxtReady = (callback) => {
  {
    return;
  }
};
function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
const ValidPreloadTriggers = ["onNuxtReady", "client"];
const PreconnectServerModes = ["preconnect", "dns-prefetch"];
function warmup(_, rel, head) {
  const { src } = _;
  const $url = parseURL(src);
  const isPreconnect = rel && PreconnectServerModes.includes(rel);
  const href = isPreconnect ? `${$url.protocol}${$url.host}` : src;
  const isCrossOrigin = !!$url.host;
  if (!rel || isPreconnect && !isCrossOrigin) {
    return;
  }
  const link = {
    href,
    rel,
    ...pick(_, [
      // shared keys between script and link
      "crossorigin",
      "referrerpolicy",
      "fetchpriority",
      "integrity"
      // ignore id
    ])
  };
  const defaults = { fetchpriority: "low" };
  if (rel === "preload") {
    defaults.as = "script";
  }
  if (isCrossOrigin) {
    defaults.crossorigin = "anonymous";
    defaults.referrerpolicy = "no-referrer";
  }
  return useHead({ link: [defu(link, defaults)] }, { head, tagPriority: "high" });
}
function useScript(input, options) {
  var _a, _b;
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, (_a = useNuxtScriptRuntimeConfig()) == null ? void 0 : _a.defaultScriptOptions);
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  const head = options.head || injectHead();
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!((_b = nuxtApp.$scripts) == null ? void 0 : _b[id]);
  if (!options.warmupStrategy && ValidPreloadTriggers.includes(String(options.trigger))) {
    options.warmupStrategy = "preload";
  }
  if (options.trigger === "onNuxtReady") {
    options.trigger = onNuxtReady;
  }
  const instance = useScript$1(input, options);
  instance.warmup = (rel) => {
    if (!instance._warmupEl) {
      instance._warmupEl = warmup(input, rel, head);
    }
  };
  if (options.warmupStrategy) {
    instance.warmup(options.warmupStrategy);
  }
  const _remove = instance.remove;
  instance.remove = () => {
    var _a2;
    (_a2 = instance._warmupEl) == null ? void 0 : _a2.dispose();
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}
function scriptRuntimeConfig(key) {
  return (useRuntimeConfig().public.scripts || {})[key];
}
function useRegistryScript(registryKey, optionsFn, _userOptions) {
  const scriptConfig = scriptRuntimeConfig(registryKey);
  const userOptions = Object.assign(_userOptions || {}, typeof scriptConfig === "object" ? scriptConfig : {});
  const options = optionsFn(userOptions);
  const scriptInput = defu(userOptions.scriptInput, options.scriptInput, { key: registryKey });
  const scriptOptions = Object.assign((userOptions == null ? void 0 : userOptions.scriptOptions) || {}, options.scriptOptions || {});
  const init = scriptOptions.beforeInit;
  scriptOptions.beforeInit = () => {
    init == null ? void 0 : init();
  };
  return useScript(scriptInput, scriptOptions);
}
function pick(obj, keys) {
  const res = {};
  for (const k of keys) {
    if (k in obj) {
      res[k] = obj[k];
    }
  }
  return res;
}
function useScriptCloudflareTurnstile(userOptions) {
  return useRegistryScript("cloudflareTurnstile", () => ({
    scriptInput: {
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js"
    },
    scriptOptions: {
      use: () => (void 0).turnstile
    }
  }), userOptions);
}
function useScriptTriggerElement(options) {
  const { el, trigger } = options;
  const triggers = (Array.isArray(options.trigger) ? options.trigger : [options.trigger]).filter(Boolean);
  if (!trigger || triggers.includes("immediate") || triggers.includes("onNuxtReady")) {
    return "onNuxtReady";
  }
  if (triggers.some((t) => ["visibility", "visible"].includes(t))) {
    {
      return new Promise(() => {
      });
    }
  }
  const ssrAttrs = {};
  {
    triggers.forEach((trigger2) => {
      ssrAttrs[`on${trigger2}`] = `this.dataset.script_${trigger2} = true`;
    });
  }
  const p = new Promise((resolve) => {
    const target = typeof el !== "undefined" ? el : (void 0).body;
    const _ = useEventListener(
      target,
      triggers,
      () => {
        _();
        resolve(true);
      },
      { once: true, passive: true }
    );
    tryOnMounted(() => {
      watch(target, ($el) => {
        if ($el) {
          triggers.forEach((trigger2) => {
            if ($el.dataset[`script_${trigger2}`]) {
              _();
              resolve(true);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    tryOnScopeDispose(() => resolve(false));
  });
  return Object.assign(p, { ssrAttrs });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NuxtTurnstile",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    trigger: { type: [String, Array, Boolean] },
    element: { default: "div" },
    siteKey: {},
    options: { default: () => ({}) },
    resetInterval: { default: 1e3 * 250 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    useRuntimeConfig().public.turnstile;
    const el = ref();
    ref(false);
    const { render, reset: _reset, remove } = useScriptCloudflareTurnstile({
      scriptOptions: {
        trigger: useScriptTriggerElement({ trigger: props.trigger, el })
      }
    });
    const reset = () => {
    };
    __expose({ reset });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.element), mergeProps({
        ref_key: "el",
        ref: el
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/turnstile/dist/runtime/components/NuxtTurnstile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "NuxtTurnstile" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=NuxtTurnstile-2T1F6ZyB.mjs.map
