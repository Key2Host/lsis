import { hasInjectionContext, inject, getCurrentInstance, onMounted, isRef, watch, onScopeDispose, ref, reactive, defineComponent, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';
import { m as defu } from '../nitro/nitro.mjs';
import { G as useNuxtApp, H as injectHead$1, I as useRuntimeConfig } from './server.mjs';
import { useScript as useScript$2 } from 'unhead/scripts';
import { useEventListener } from '@vueuse/core';
import { tryOnMounted, tryOnScopeDispose } from '@vueuse/shared';

const onNuxtReady = (callback) => {
  {
    return;
  }
};

const headSymbol = "usehead";
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}

function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      var _a;
      if (i) {
        (_a = script._cbs[key]) == null ? void 0 : _a.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  onScopeDispose(() => {
    var _a;
    (_a = script._triggerAbortController) == null ? void 0 : _a.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = (options == null ? void 0 : options.head) || injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger)) {
    const refTrigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(refTrigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off == null ? void 0 : off();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    s._statusRef.value = s.status;
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_, key, a) {
      return Reflect.get(_, key === "status" ? "_statusRef" : key, a);
    }
  });
}

function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  var _a, _b;
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, (_a = useNuxtScriptRuntimeConfig()) == null ? void 0 : _a.defaultScriptOptions);
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head || injectHead$1();
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!((_b = nuxtApp.$scripts) == null ? void 0 : _b[id]);
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
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
    const { onLoaded } = useScriptCloudflareTurnstile({
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
//# sourceMappingURL=NuxtTurnstile.vue.mjs.map
