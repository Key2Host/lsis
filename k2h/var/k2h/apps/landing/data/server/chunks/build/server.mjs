import * as e$1 from 'vue';
import { defineComponent, computed, useAttrs, toValue, ref, getCurrentInstance, provide, inject, h as h$1, resolveComponent, onMounted, onUnmounted, watchEffect, hasInjectionContext, shallowRef, toRef, onServerPrefetch, isRef, cloneVNode, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString as toDisplayString$1, withKeys, Transition, createBlock, withDirectives, openBlock, vShow, watch, useId, resolveDynamicComponent, createCommentVNode, Fragment, unref, normalizeClass, nextTick, Teleport, reactive, version, defineAsyncComponent, useSSRContext, useSlots, shallowReactive, Suspense, createElementBlock, createApp, Text, withAsyncContext, createSlots, renderList, withModifiers, onErrorCaptured, effectScope, isReadonly, isShallow, isReactive, toRaw, getCurrentScope } from 'vue';
import { D as defuFn, E as klona, k as defu, F as createDefu, G as destr, H as parse$1, I as getRequestHeader, J as isEqual$1, K as getContext, L as setCookie, M as getCookie, N as deleteCookie, O as sanitizeStatusCode, P as diff, $ as $fetch$1, Q as baseURL, p as publicAssetsURL, c as createError$1, R as createHooks, S as toRouteMatcher, T as createRouter$1, U as getRequestHeaders } from '../nitro/nitro.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'pinia';
import { getActiveHead, CapoPlugin } from 'unhead';
import { unpackMeta, defineHeadPlugin, composableNames } from '@unhead/shared';
import { RouterView, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION, isNavigationFailure } from 'vue-router';
import { deepPickUnsafe, deepOmitUnsafe } from 'deep-pick-omit';
import { useDebounceFn, createSharedComposable, useTimestamp } from '@vueuse/core';
import { extendTailwindMerge, twJoin, twMerge as twMerge$1 } from 'tailwind-merge';
import { Icon, getIcon, loadIcon as loadIcon$1, _api, disableCache, addAPIProvider, setCustomIconsLoader } from '@iconify/vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderTeleport, ssrRenderSuspense } from 'vue/server-renderer';
import { getIconCSS } from '@iconify/utils/lib/css/icon';
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

var _a;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "deep": false };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a2;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a2 = options.ssrContext) == null ? void 0 : _a2.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn2) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn2));
      }
      return callWithNuxt(nuxtApp, fn2);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a3;
    const unresolvedPluginsForThisPlugin = ((_a3 = plugin2.dependsOn) == null ? void 0 : _a3.filter((name) => plugins2.some((p2) => p2._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e2) => errors.push(e2)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i2 = 0; i2 < promiseDepth; i2++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn2 = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn2));
  }
}
function tryUseNuxtApp(id) {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input2) {
  return encode(typeof input2 === "string" ? input2 : JSON.stringify(input2)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s3 = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s3.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s3[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s3[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k2) => query[k2] !== void 0).map((k2) => encodeQueryItem(k2, query[k2])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input2 = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input2.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input2);
}
function withoutTrailingSlash(input2 = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input2) ? input2.slice(0, -1) : input2) || "/";
  }
  if (!hasTrailingSlash(input2, true)) {
    return input2 || "/";
  }
  let path = input2;
  let fragment = "";
  const fragmentIndex = input2.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input2.slice(0, fragmentIndex);
    fragment = input2.slice(fragmentIndex);
  }
  const [s0, ...s3] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s3.length > 0 ? `?${s3.join("?")}` : "") + fragment;
}
function withTrailingSlash(input2 = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input2.endsWith("/") ? input2 : input2 + "/";
  }
  if (hasTrailingSlash(input2, true)) {
    return input2 || "/";
  }
  let path = input2;
  let fragment = "";
  const fragmentIndex = input2.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input2.slice(0, fragmentIndex);
    fragment = input2.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s3] = path.split("?");
  return s0 + "/" + (s3.length > 0 ? `?${s3.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input2 = "") {
  return input2.startsWith("/");
}
function withLeadingSlash(input2 = "") {
  return hasLeadingSlash(input2) ? input2 : "/" + input2;
}
function withBase(input2, base) {
  if (isEmptyURL(base) || hasProtocol(input2)) {
    return input2;
  }
  const _base = withoutTrailingSlash(base);
  if (input2.startsWith(_base)) {
    return input2;
  }
  return joinURL(_base, input2);
}
function withQuery(input2, query) {
  const parsed = parseURL(input2);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input2) {
  let url = base || "";
  for (const segment of input2.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual(a2, b2, options = {}) {
  if (!options.trailingSlash) {
    a2 = withTrailingSlash(a2);
    b2 = withTrailingSlash(b2);
  }
  if (!options.leadingSlash) {
    a2 = withLeadingSlash(a2);
    b2 = withLeadingSlash(b2);
  }
  if (!options.encoding) {
    a2 = decode(a2);
    b2 = decode(b2);
  }
  return a2 === b2;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input2 = "", defaultProto) {
  const _specialProtoMatch = input2.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input2, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input2) : parsePath(input2);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input2.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash: hash2 } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol
  };
}
function parsePath(input2 = "") {
  const [pathname = "", search = "", hash2 = ""] = (input2.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash: hash2
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash2 = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || false;
  const mw = middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject$1(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject$1(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r2) => resolveUnrefHeadInput(r2));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput(root[k2]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
function useHead(input2, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input2, options);
    return head.push(input2, options);
  }
}
function clientUseHead(head, input2, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input2);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e2) => {
    entry2.patch(e2);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input2, options) {
  const { title, titleTemplate, ...meta } = input2;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t2) {
      const meta2 = unpackMeta({ ...t2._flatMeta });
      delete t2._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t2,
        meta: meta2
      };
    }
  });
}
function useServerHead(input2, options = {}) {
  const head = options.head || injectHead();
  delete options.head;
  if (head)
    return head.push(input2, { ...options, mode: "server" });
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher2.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r2 = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r2;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r2) => {
    var _a2;
    return ((_a2 = route.params[r2.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m2) => {
    var _a2;
    return ((_a2 = m2.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const component_45stubljRFnMG14V = {};
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "checkout-failed___en",
    path: "/en/checkout/failed",
    component: () => import('./failed-ciPUqt5d.mjs')
  },
  {
    name: "checkout-failed___de___default",
    path: "/checkout/failed",
    component: () => import('./failed-ciPUqt5d.mjs')
  },
  {
    name: "checkout-failed___de",
    path: "/de/checkout/failed",
    component: () => import('./failed-ciPUqt5d.mjs')
  },
  {
    name: "checkout___en",
    path: "/en/checkout",
    component: () => import('./index-L9y9_rpU.mjs')
  },
  {
    name: "checkout___de___default",
    path: "/checkout",
    component: () => import('./index-L9y9_rpU.mjs')
  },
  {
    name: "checkout___de",
    path: "/de/checkout",
    component: () => import('./index-L9y9_rpU.mjs')
  },
  {
    name: "checkout-success___en",
    path: "/en/checkout/success",
    component: () => import('./success-BgZsDqZY.mjs')
  },
  {
    name: "checkout-success___de___default",
    path: "/checkout/success",
    component: () => import('./success-BgZsDqZY.mjs')
  },
  {
    name: "checkout-success___de",
    path: "/de/checkout/success",
    component: () => import('./success-BgZsDqZY.mjs')
  },
  {
    name: "company-milestones___en",
    path: "/en/company/milestones",
    component: () => import('./milestones-DK-Z0igO.mjs')
  },
  {
    name: "company-milestones___de___default",
    path: "/company/milestones",
    component: () => import('./milestones-DK-Z0igO.mjs')
  },
  {
    name: "company-milestones___de",
    path: "/de/company/milestones",
    component: () => import('./milestones-DK-Z0igO.mjs')
  },
  {
    name: "company-partners___en",
    path: "/en/company/partners",
    component: () => import('./partners-B1Aj4kVf.mjs')
  },
  {
    name: "company-partners___de___default",
    path: "/company/partners",
    component: () => import('./partners-B1Aj4kVf.mjs')
  },
  {
    name: "company-partners___de",
    path: "/de/company/partners",
    component: () => import('./partners-B1Aj4kVf.mjs')
  },
  {
    name: "contact___en",
    path: "/en/contact",
    component: () => import('./contact-Uk0oJYTU.mjs')
  },
  {
    name: "contact___de___default",
    path: "/contact",
    component: () => import('./contact-Uk0oJYTU.mjs')
  },
  {
    name: "contact___de",
    path: "/de/contact",
    component: () => import('./contact-Uk0oJYTU.mjs')
  },
  {
    name: "index___en",
    path: "/en",
    component: () => import('./index-WHMGPkFS.mjs')
  },
  {
    name: "index___de___default",
    path: "/",
    component: () => import('./index-WHMGPkFS.mjs')
  },
  {
    name: "index___de",
    path: "/de",
    component: () => import('./index-WHMGPkFS.mjs')
  },
  {
    name: "legal-notice___en",
    path: "/en/legal/notice",
    component: () => import('./notice-DutVcrVD.mjs')
  },
  {
    name: "legal-notice___de___default",
    path: "/legal/notice",
    component: () => import('./notice-DutVcrVD.mjs')
  },
  {
    name: "legal-notice___de",
    path: "/de/legal/notice",
    component: () => import('./notice-DutVcrVD.mjs')
  },
  {
    name: "legal-privacy___en",
    path: "/en/legal/privacy",
    component: () => import('./privacy-mSx3PS1F.mjs')
  },
  {
    name: "legal-privacy___de___default",
    path: "/legal/privacy",
    component: () => import('./privacy-mSx3PS1F.mjs')
  },
  {
    name: "legal-privacy___de",
    path: "/de/legal/privacy",
    component: () => import('./privacy-mSx3PS1F.mjs')
  },
  {
    name: "legal-tos___en",
    path: "/en/legal/tos",
    component: () => import('./tos-Ds9PEMb2.mjs')
  },
  {
    name: "legal-tos___de___default",
    path: "/legal/tos",
    component: () => import('./tos-Ds9PEMb2.mjs')
  },
  {
    name: "legal-tos___de",
    path: "/de/legal/tos",
    component: () => import('./tos-Ds9PEMb2.mjs')
  },
  {
    name: "newsroom-id___en",
    path: "/en/newsroom/:id()",
    component: () => import('./_id_-Bpj6rCHm.mjs')
  },
  {
    name: "newsroom-id___de___default",
    path: "/newsroom/:id()",
    component: () => import('./_id_-Bpj6rCHm.mjs')
  },
  {
    name: "newsroom-id___de",
    path: "/de/newsroom/:id()",
    component: () => import('./_id_-Bpj6rCHm.mjs')
  },
  {
    name: "newsroom___en",
    path: "/en/newsroom",
    component: () => import('./index-Cd9xo6tI.mjs')
  },
  {
    name: "newsroom___de___default",
    path: "/newsroom",
    component: () => import('./index-Cd9xo6tI.mjs')
  },
  {
    name: "newsroom___de",
    path: "/de/newsroom",
    component: () => import('./index-Cd9xo6tI.mjs')
  },
  {
    name: "products-dedicated___en",
    path: "/en/products/dedicated",
    component: () => import('./index-DCnUo6LU.mjs')
  },
  {
    name: "products-dedicated___de___default",
    path: "/products/dedicated",
    component: () => import('./index-DCnUo6LU.mjs')
  },
  {
    name: "products-dedicated___de",
    path: "/de/products/dedicated",
    component: () => import('./index-DCnUo6LU.mjs')
  },
  {
    name: "products-domain___en",
    path: "/en/products/domain",
    component: () => import('./index-N4dMETDG.mjs')
  },
  {
    name: "products-domain___de___default",
    path: "/products/domain",
    component: () => import('./index-N4dMETDG.mjs')
  },
  {
    name: "products-domain___de",
    path: "/de/products/domain",
    component: () => import('./index-N4dMETDG.mjs')
  },
  {
    name: "products-lic-cert___en",
    path: "/en/products/lic-cert",
    component: () => import('./index-B7mh1jHC.mjs')
  },
  {
    name: "products-lic-cert___de___default",
    path: "/products/lic-cert",
    component: () => import('./index-B7mh1jHC.mjs')
  },
  {
    name: "products-lic-cert___de",
    path: "/de/products/lic-cert",
    component: () => import('./index-B7mh1jHC.mjs')
  },
  {
    name: "products-vps-root___en",
    path: "/en/products/vps-root",
    component: () => import('./index-BCiCclzk.mjs')
  },
  {
    name: "products-vps-root___de___default",
    path: "/products/vps-root",
    component: () => import('./index-BCiCclzk.mjs')
  },
  {
    name: "products-vps-root___de",
    path: "/de/products/vps-root",
    component: () => import('./index-BCiCclzk.mjs')
  },
  {
    name: "products-webspace___en",
    path: "/en/products/webspace",
    component: () => import('./index-BAmt6Yb7.mjs')
  },
  {
    name: "products-webspace___de___default",
    path: "/products/webspace",
    component: () => import('./index-BAmt6Yb7.mjs')
  },
  {
    name: "products-webspace___de",
    path: "/de/products/webspace",
    component: () => import('./index-BAmt6Yb7.mjs')
  },
  {
    name: void 0 ,
    path: "/en/sitemap.xml",
    component: component_45stubljRFnMG14V
  },
  {
    name: void 0 ,
    path: "/sitemap.xml",
    component: component_45stubljRFnMG14V
  },
  {
    name: void 0 ,
    path: "/de/sitemap.xml",
    component: component_45stubljRFnMG14V
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r2) => {
    var _a2;
    return ((_a2 = route.params[r2.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index2) => {
      var _a2, _b;
      return comp.components && comp.components.default === ((_b = (_a2 = from.matched[index2]) == null ? void 0 : _a2.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve22) => setTimeout(resolve22, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function findHashPosition(hash2) {
  const el = (void 0).querySelector(hash2);
  if (el) {
    const top2 = Number.parseFloat(getComputedStyle(el).scrollMarginTop);
    return {
      el: hash2,
      behavior: "smooth",
      top: top2
    };
  }
}
const routerOptions1 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    if (history.state && history.state.stop) {
      return;
    }
    if (history.state && history.state.smooth) {
      return {
        el: history.state.smooth,
        behavior: "smooth"
      };
    }
    if (savedPosition) {
      return new Promise((resolve2) => {
        nuxtApp.hooks.hookOnce("page:finish", () => {
          setTimeout(() => resolve2(savedPosition), 50);
        });
      });
    }
    if (to.hash) {
      return new Promise((resolve2) => {
        if (to.path === from.path) {
          setTimeout(() => resolve2(findHashPosition(to.hash)), 50);
        } else {
          nuxtApp.hooks.hookOnce("page:finish", () => {
            setTimeout(() => resolve2(findHashPosition(to.hash)), 50);
          });
        }
      });
    }
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce("page:finish", () => {
        setTimeout(() => resolve2({ top: 0 }), 50);
      });
    });
  }
};
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const hashMode = routerOptions0.hashMode ?? false;
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0,
  ...routerOptions1
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history2 = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history: history2,
      routes: routes2
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes22) => routes22);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b2, _c2, _d;
      if (((_b2 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r2) => r2.default || r2)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve2, reject) => {
        try {
          resolve2(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header) {
      headers[key] = header;
    }
  }
  return headers;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies2 = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies2[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual$1(cookie.value, cookies2[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual$1(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return !hashMode && typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve2) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve2(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config2 = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a2;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject$1(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config2.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate: navigate2, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a2;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h$1(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate: navigate2,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h$1("a", { ref: el, href: href.value || null, rel, target }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$e = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const cfg0 = defineAppConfig({
  ui: {
    primary: "blue",
    gray: "slate",
    variables: {
      light: {
        background: "var(--color-gray-50)"
      },
      dark: {
        background: "var(--color-gray-950)"
      }
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
        color: "black"
      }
    },
    input: {
      rounded: "rounded-full"
    },
    header: {
      wrapper: "lg:!border-transparent bg-gray-50 dark:bg-gray-950",
      links: {
        wrapper: "ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full",
        base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity",
        active: "text-gray-900 dark:text-white after:opacity-100",
        inactive: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      }
    },
    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-8 lg:py-16"
      },
      bottom: {
        wrapper: "border-t border-gray-200 dark:border-gray-800"
      }
    },
    pricing: {
      card: {
        highlight: "ring-gray-900 dark:ring-white",
        features: {
          item: {
            icon: {
              base: "text-gray-900 dark:text-white"
            }
          }
        }
      }
    }
  }
});
const cfg1 = defineAppConfig({
  ui: {
    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-gray-700)"
      },
      dark: {
        background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)"
      },
      header: {
        height: "4rem"
      }
    },
    icons: {
      dark: "i-heroicons-moon-20-solid",
      light: "i-heroicons-sun-20-solid",
      system: "i-heroicons-computer-desktop-20-solid",
      search: "i-heroicons-magnifying-glass-20-solid",
      external: "i-heroicons-arrow-up-right-20-solid",
      chevron: "i-heroicons-chevron-down-20-solid",
      hash: "i-heroicons-hashtag-20-solid",
      menu: "i-heroicons-bars-3-20-solid",
      close: "i-heroicons-x-mark-20-solid",
      check: "i-heroicons-check-circle-20-solid"
    },
    presets: {
      button: {
        primary: {
          color: "white",
          variant: "solid"
        },
        secondary: {
          color: "gray",
          variant: "ghost"
        },
        input: {
          color: "white",
          variant: "outline",
          ui: {
            font: "",
            color: {
              white: {
                outline: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              }
            }
          }
        }
      }
    }
  }
});
const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
};
const appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(appConfig);
  }
  return nuxtApp._appConfig;
}
const _0_siteConfig_jtc2qNDx4l = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b;
    const stack = (_b = (_a2 = useRequestEvent()) == null ? void 0 : _a2.context) == null ? void 0 : _b.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack == null ? void 0 : stack.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn2] of reducers) {
      definePayloadReducer(reducer, fn2);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyCallout = defineAsyncComponent(() => import('./Callout-DMKZwg6J.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyCard = defineAsyncComponent(() => import('./Card-x8cycqmh.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyCardGroup = defineAsyncComponent(() => import('./CardGroup-CeVnXrZB.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyCodeGroup = defineAsyncComponent(() => import('./CodeGroup-CoaCL24q.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyCollapsible = defineAsyncComponent(() => import('./Collapsible-BRa8Pc2P.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyField = defineAsyncComponent(() => import('./Field-C4GabotK.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyFieldGroup = defineAsyncComponent(() => import('./FieldGroup-CNlAwXtE.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyShortcut = defineAsyncComponent(() => import('./Shortcut-W5aeoCMF.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyTabs = defineAsyncComponent(() => import('./Tabs-Cvfta96R.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseCode = defineAsyncComponent(() => import('./ProseCode-BSEGSEFM.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseCodeButton = defineAsyncComponent(() => import('./ProseCodeButton-z3t5dUJr.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseCodeIcon = defineAsyncComponent(() => import('./ProseCodeIcon-DCqOFRMp.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH1 = defineAsyncComponent(() => import('./ProseH1-BYSh1rSU.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH2 = defineAsyncComponent(() => import('./ProseH2-BFdXAhR3.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH3 = defineAsyncComponent(() => import('./ProseH3-D4MGsg8z.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH4 = defineAsyncComponent(() => import('./ProseH4-61kExXRY.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentDoc = defineAsyncComponent(() => import('./ContentDoc-Z3KrE-BH.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentList = defineAsyncComponent(() => import('./ContentList-Deh68ul1.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentNavigation = defineAsyncComponent(() => import('./ContentNavigation-BFtmEoXO.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentQuery = defineAsyncComponent(() => import('./ContentQuery-DqArMJKj.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentRenderer = defineAsyncComponent(() => import('./ContentRenderer-DcaAFW50.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./ContentRendererMarkdown-BS-phn5a.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyContentSlot = defineAsyncComponent(() => import('./ContentSlot-BuS_Inaf.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./DocumentDrivenEmpty-Cnbqc6qM.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./DocumentDrivenNotFound-CrGBz1Ho.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyMarkdown = defineAsyncComponent(() => import('./Markdown-B7hjVgod.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseCodeInline = defineAsyncComponent(() => import('./ProseCodeInline-CrWG38Gs.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProsePre = defineAsyncComponent(() => import('./ProsePre-DcM15k9X.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseA = defineAsyncComponent(() => import('./ProseA-C3PtzSzj.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseBlockquote = defineAsyncComponent(() => import('./ProseBlockquote-CvqcBul5.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseEm = defineAsyncComponent(() => import('./ProseEm-Cw25bCx-.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH5 = defineAsyncComponent(() => import('./ProseH5-CMm-32at.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseH6 = defineAsyncComponent(() => import('./ProseH6-DMXcJY20.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseHr = defineAsyncComponent(() => import('./ProseHr-CKKMz3aL.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseImg = defineAsyncComponent(() => import('./ProseImg-CBm1IziG.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseLi = defineAsyncComponent(() => import('./ProseLi-MCRnFbRm.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseOl = defineAsyncComponent(() => import('./ProseOl-B1vMyDPO.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseP = defineAsyncComponent(() => import('./ProseP-Bee1wMit.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseScript = defineAsyncComponent(() => import('./ProseScript-oII2Gzs4.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseStrong = defineAsyncComponent(() => import('./ProseStrong-BK8th2eH.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseTable = defineAsyncComponent(() => import('./ProseTable-lhlNJkLc.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseTbody = defineAsyncComponent(() => import('./ProseTbody-C4fOz6MZ.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseTd = defineAsyncComponent(() => import('./ProseTd-U2u0Cayl.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseTh = defineAsyncComponent(() => import('./ProseTh-BZvLP3m6.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseThead = defineAsyncComponent(() => import('./ProseThead-DfSXM-bt.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseTr = defineAsyncComponent(() => import('./ProseTr-mJRvyhzi.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyProseUl = defineAsyncComponent(() => import('./ProseUl-DGhBhT0w.mjs').then((r2) => r2["default"] || r2.default || r2));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return index;
}).then((r2) => r2["default"] || r2.default || r2));
const lazyGlobalComponents = [
  ["Callout", LazyCallout],
  ["Card", LazyCard],
  ["CardGroup", LazyCardGroup],
  ["CodeGroup", LazyCodeGroup],
  ["Collapsible", LazyCollapsible],
  ["Field", LazyField],
  ["FieldGroup", LazyFieldGroup],
  ["Shortcut", LazyShortcut],
  ["Tabs", LazyTabs],
  ["ProseCode", LazyProseCode],
  ["ProseCodeButton", LazyProseCodeButton],
  ["ProseCodeIcon", LazyProseCodeIcon],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Markdown", LazyMarkdown],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProsePre", LazyProsePre],
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseEm", LazyProseEm],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl],
  ["Icon", LazyIcon]
];
const components_plugin_zlvi6dcIsi = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
const _create = Object.create;
const create = (obj = null) => _create(obj);
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index2) => index2 === 0 ? str + item : str + separator + item, "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isObject(src2[key]) && !isObject(des2[key])) {
        des2[key] = Array.isArray(src2[key]) ? [] : create();
      }
      if (isNotObjectOrIsArray(des2[key]) || isNotObjectOrIsArray(src2[key])) {
        des2[key] = src2[key];
      } else {
        stack.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
const localeCodes = [
  "en",
  "de"
];
const localeLoaders = {
  "en": [{ key: "../../../../i18n/locales/en-US.json", load: () => import(
    './en-US-CYxKU5vj.mjs'
    /* webpackChunkName: "locale__Users_lpoggemann_GitHub_landing_i18n_locales_en_US_json" */
  ), cache: true }],
  "de": [{ key: "../../../../i18n/locales/de-DE.json", load: () => import(
    './de-DE-DKg3okgJ.mjs'
    /* webpackChunkName: "locale__Users_lpoggemann_GitHub_landing_i18n_locales_de_DE_json" */
  ), cache: true }]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "/Users/lpoggemann/GitHub/landing/i18n/locales/en-US.json"
      }
    ]
  },
  {
    "code": "de",
    "files": [
      {
        "path": "/Users/lpoggemann/GitHub/landing/i18n/locales/de-DE.json"
      }
    ]
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal";
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
function getNormalizedLocales(locales) {
  return locales.map((x2) => typeof x2 === "string" ? { code: x2 } : x2);
}
function getRouteName(routeName) {
  if (typeof routeName === "string") return routeName;
  if (routeName != null) return routeName.toString();
  return "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix,
  differentDomains
}) {
  const localizedRoutes = strategy !== "no_prefix" || differentDomains;
  let name = getRouteName(routeName) + (localizedRoutes ? routesNameSeparator + locale : "");
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index2, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l2) => l2.language.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index2 / browserLocales.length });
      break;
    }
  }
  for (const [index2, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l2) => l2.language.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index2 / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a2, b2) {
  if (a2.score === b2.score) {
    return b2.code.length - a2.code.length;
  }
  return b2.score - a2.score;
}
function findBrowserLocale(locales, browserLocales, {
  matcher = matchBrowserLocale,
  comparer = compareBrowserLocale
} = {}) {
  const normalizedLocales2 = [];
  for (const l2 of locales) {
    const { code } = l2;
    const language = l2.language || code;
    normalizedLocales2.push({ code, language });
  }
  const matchedLocales = matcher(normalizedLocales2, browserLocales);
  if (matchedLocales.length === 0) {
    return "";
  }
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales[0].code;
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
const localesPattern = `(${localeCodes.join("|")})`;
const regexpPath = getLocalesRegex(localeCodes);
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const getLocaleFromRoute = (route) => {
    let matches = null;
    if (typeof route === "string") {
      matches = route.match(regexpPath);
      return (matches == null ? void 0 : matches[1]) ?? "";
    }
    if (route.name) {
      matches = getRouteName(route.name).match(regexpName);
    } else if (route.path) {
      matches = route.path.match(regexpPath);
    }
    return (matches == null ? void 0 : matches[1]) ?? "";
  };
  return getLocaleFromRoute;
}
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = isFunction(resolver) ? await nuxt.runWithContext(() => resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) return [];
  if (Array.isArray(fallback)) return fallback;
  let fallbackLocales = [];
  if (typeof fallback === "string") {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) continue;
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
async function loadMessage(locale, { key, load }, nuxt) {
  let message = null;
  try {
    const getter = await load().then((r2) => "default" in r2 ? r2.default : r2);
    if (isFunction(getter)) {
      message = await nuxt.runWithContext(() => getter(locale));
    } else {
      message = getter;
      if (message != null && cacheMessages) {
        cacheMessages.set(key, message);
      }
    }
  } catch (e2) {
    console.error("Failed locale loading: " + e2.message);
  }
  return message;
}
async function loadLocale(locale, localeLoaders2, setter, nuxt) {
  const loaders = localeLoaders2[locale];
  if (loaders == null) {
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache) {
      message = cacheMessages.get(loader.key);
    } else {
      message = await nuxt.runWithContext(() => loadMessage(locale, loader, nuxt));
    }
    if (message != null) {
      deepCopy(message, targetMessage);
    }
  }
  setter(locale, targetMessage);
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer$3(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
function getRouteBaseName(common, route) {
  const _route = unref(route);
  if (_route == null || !_route.name) {
    return;
  }
  const name = getRouteName(_route.name);
  return name.split(common.runtimeConfig.public.i18n.routesNameSeparator)[0];
}
function localePath(common, route, locale) {
  var _a2;
  if (typeof route === "string" && hasProtocol(route, { acceptRelative: true })) {
    return route;
  }
  const localizedRoute = resolveRoute(common, route, locale);
  return localizedRoute == null ? "" : ((_a2 = localizedRoute.redirectedFrom) == null ? void 0 : _a2.fullPath) || localizedRoute.fullPath;
}
function localeRoute(common, route, locale) {
  return resolveRoute(common, route, locale) ?? void 0;
}
function normalizeRawLocation(route) {
  if (typeof route !== "string") {
    return Object.assign({}, route);
  }
  if (route[0] === "/") {
    const { pathname: path, search, hash: hash2 } = parsePath(route);
    return { path, query: parseQuery(search), hash: hash2 };
  }
  return { name: route };
}
const isRouteLocationPathRaw = (val) => !!val.path && !val.name;
function resolveRouteObject(common, route, locale) {
  const runtimeI18n = common.runtimeConfig.public.i18n;
  if (isRouteLocationPathRaw(route)) {
    const resolved = resolve(common, route, locale);
    const resolvedName = getRouteBaseName(common, resolved);
    if (resolvedName) {
      resolved.name = getLocaleRouteName(resolvedName, locale, runtimeI18n);
      return resolved;
    }
    const prefixable2 = extendPrefixable(common.runtimeConfig);
    if (prefixable2({ ...runtimeI18n, currentLocale: locale })) {
      route.path = "/" + locale + route.path;
    }
    route.path = (runtimeI18n.trailingSlash ? withTrailingSlash : withoutTrailingSlash)(route.path, true);
    return route;
  }
  route.name || (route.name = getRouteBaseName(common, common.router.currentRoute.value));
  const localizedName = getLocaleRouteName(route.name, locale, runtimeI18n);
  if (common.router.hasRoute(localizedName)) {
    route.name = localizedName;
  }
  return route;
}
function resolveRoute(common, route, locale) {
  try {
    const _locale = locale || unref(getI18nTarget(common.i18n).locale);
    const normalized = normalizeRawLocation(route);
    const resolved = common.router.resolve(resolveRouteObject(common, normalized, _locale));
    if (resolved.name) {
      return resolved;
    }
    return common.router.resolve(route);
  } catch (e2) {
    if (isNavigationFailure(
      e2,
      1
      /* No match */
    )) {
      return null;
    }
  }
}
function getLocalizableMetaFromDynamicParams(common, route) {
  var _a2;
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) {
    return unref(common.metaState.value);
  }
  const meta = route.meta || {};
  return ((_a2 = unref(meta)) == null ? void 0 : _a2[DEFAULT_DYNAMIC_PARAMS_KEY]) || {};
}
function switchLocalePath(common, locale, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name = getRouteBaseName(common, route);
  if (!name) {
    return "";
  }
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale];
  const routeCopy = {
    name,
    params: Object.assign({}, route.params, resolvedParams),
    fullPath: route.fullPath,
    query: route.query,
    hash: route.hash,
    path: route.path,
    meta: route.meta
    // matched: route.matched,
    // redirectedFrom: route.redirectedFrom
  };
  const path = localePath(common, routeCopy, locale);
  const switchLocalePathIntercepter = extendSwitchLocalePathIntercepter(common.runtimeConfig);
  return switchLocalePathIntercepter(path, locale);
}
function resolve(common, route, locale) {
  if (common.runtimeConfig.public.i18n.strategy === "no_prefix") {
    return route;
  }
  if (common.runtimeConfig.public.i18n.strategy !== "prefix") {
    return common.router.resolve(route);
  }
  const restPath = route.path.slice(1);
  const targetPath = route.path[0] + locale + (restPath && "/" + restPath);
  const _route = common.router.options.routes.find((r2) => r2.path === targetPath);
  if (_route == null) {
    return route;
  }
  return common.router.resolve(Object.assign({}, route, _route, { path: targetPath }));
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
async function loadAndSetLocale(newLocale, initial = false) {
  const nuxtApp = useNuxtApp();
  const { differentDomains, skipSettingLocaleOnNavigate } = nuxtApp.$config.public.i18n;
  const opts = runtimeDetectBrowserLanguage();
  const oldLocale = unref(nuxtApp.$i18n.locale);
  const localeCodes2 = unref(nuxtApp.$i18n.localeCodes);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie) return;
    if (skipSettingLocaleOnNavigate) return;
    nuxtApp.$i18n.setLocaleCookie(locale);
  }
  const localeOverride = await nuxtApp.$i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const i18nFallbackLocales = unref(nuxtApp.$i18n.fallbackLocale);
  const setter = nuxtApp.$i18n.mergeLocaleMessage.bind(nuxtApp.$i18n);
  if (i18nFallbackLocales) {
    const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
    await Promise.all(fallbackLocales.map((locale) => loadLocale(locale, localeLoaders, setter, nuxtApp)));
  }
  await loadLocale(newLocale, localeLoaders, setter, nuxtApp);
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  nuxtApp._vueI18n.__setLocale(newLocale);
  await nuxtApp.$i18n.onLanguageSwitched(oldLocale, newLocale);
  return true;
}
function detectLocale(route, routeLocale, currentLocale, localeCookie) {
  const nuxtApp = useNuxtApp();
  const { strategy, defaultLocale, differentDomains, multiDomainLocales } = nuxtApp.$config.public.i18n;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
  const detectedBrowser = detectBrowserLanguage(route, localeCookie, currentLocale);
  if (detectedBrowser.locale && detectedBrowser.from != null && localeCodes.includes(detectedBrowser.locale)) {
    return detectedBrowser.locale;
  }
  let detected = "";
  if (differentDomains || multiDomainLocales) {
    detected || (detected = getLocaleDomain(normalizedLocales, strategy, route));
  } else if (strategy !== "no_prefix") {
    detected || (detected = routeLocale);
  }
  const cookieLocale = (localeCodes.includes(detectedBrowser.locale) || localeCookie && localeCodes.includes(localeCookie)) && _detectBrowserLanguage && _detectBrowserLanguage.useCookie && localeCookie;
  detected || (detected = cookieLocale || currentLocale || defaultLocale || "");
  return detected;
}
function detectRedirect({ to, from, locale, routeLocale }, inMiddleware = false) {
  if (routeLocale === locale || useNuxtApp().$i18n.strategy === "no_prefix") {
    return "";
  }
  const common = initCommonComposableOptions();
  let redirectPath = switchLocalePath(common, locale, to);
  if (inMiddleware && !redirectPath) {
    redirectPath = localePath(common, to.fullPath, locale);
  }
  if (isEqual(redirectPath, to.fullPath) || from && isEqual(redirectPath, from.fullPath)) {
    return "";
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
async function navigate({ nuxtApp, locale, route, redirectPath }, { status = 302, enableNavigate = false } = {}) {
  const { rootRedirect, differentDomains, multiDomainLocales, skipSettingLocaleOnNavigate, locales, strategy } = nuxtApp.$config.public.i18n;
  if (route.path === "/" && rootRedirect) {
    if (isString(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale);
    return _navigate(redirectPath, status);
  }
  if (multiDomainLocales && strategy === "prefix_except_default") {
    const host = getHost();
    const currentDomain = locales.find((locale2) => {
      var _a2;
      if (typeof locale2 !== "string") {
        return (_a2 = locale2.defaultForDomains) == null ? void 0 : _a2.find((domain) => domain === host);
      }
      return false;
    });
    const defaultLocaleForDomain = typeof currentDomain !== "string" ? currentDomain == null ? void 0 : currentDomain.code : void 0;
    if (route.path.startsWith(`/${defaultLocaleForDomain}`)) {
      return _navigate(route.path.replace(`/${defaultLocaleForDomain}`, ""), status);
    } else if (!route.path.startsWith(`/${locale}`) && locale !== defaultLocaleForDomain) {
      const getLocaleFromRoute = createLocaleFromRouteGetter();
      const oldLocale = getLocaleFromRoute(route.path);
      if (oldLocale !== "") {
        return _navigate(`/${locale + route.path.replace(`/${oldLocale}`, "")}`, status);
      } else {
        return _navigate(`/${locale + (route.path === "/" ? "" : route.path)}`, status);
      }
    } else if (redirectPath && route.path !== redirectPath) {
      return _navigate(redirectPath, status);
    }
    return;
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  }
}
function prefixable({ currentLocale, defaultLocale, strategy }) {
  return (
    // strategy has no prefixes
    strategy !== "no_prefix" && // strategy should not prefix default locale
    !(currentLocale === defaultLocale && (strategy === "prefix_and_default" || strategy === "prefix_except_default"))
  );
}
function extendPrefixable(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (opts) => {
    return prefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (path, locale) => {
    if (!runtimeConfig.public.i18n.differentDomains) {
      return path;
    }
    const domain = getDomainFromLocale(locale);
    return domain && joinURL(domain, path) || path;
  };
}
function extendBaseUrl() {
  return () => {
    const ctx = useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    }
    const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        return domain;
      }
    }
    if (baseUrl) {
      return baseUrl;
    }
    return baseUrl;
  };
}
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function wrapComposable(fn2, common = initCommonComposableOptions()) {
  return (...args) => fn2(common, ...args);
}
function parseAcceptLanguage(input2) {
  return input2.split(",").map((tag) => tag.split(";")[0]);
}
function getBrowserLocale() {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: detect && detect.cookieCrossOrigin ? "none" : "lax",
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure
  };
  if (detect && detect.cookieDomain) {
    cookieOptions.domain = detect.cookieDomain;
  }
  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null) {
    return;
  }
  if (localeCodes.includes(localeCode)) {
    return localeCode;
  }
  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
  return;
}
function setLocaleCookie(cookieRef, locale, detect) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  cookieRef.value = locale;
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  reason: "disabled"
  /* DISABLED */
};
function detectBrowserLanguage(route, localeCookie, locale = "") {
  const _detect = runtimeDetectBrowserLanguage();
  if (!_detect) {
    return DefaultDetectBrowserLanguageFromResult;
  }
  const nuxtApp = useNuxtApp();
  const strategy = nuxtApp.$i18n.strategy;
  const firstAccess = nuxtApp._vueI18n.__firstAccess;
  if (!firstAccess) {
    return {
      locale: strategy === "no_prefix" ? locale : "",
      reason: "first_access_only"
      /* FIRST_ACCESS */
    };
  }
  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = _detect;
  const path = isString(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root" && path !== "/") {
      return {
        locale: "",
        reason: "not_redirect_on_root"
        /* NO_REDIRECT_ROOT */
      };
    }
    if (redirectOn === "no prefix" && !alwaysRedirect && path.match(getLocalesRegex(localeCodes))) {
      return {
        locale: "",
        reason: "not_redirect_on_no_prefix"
        /* NO_REDIRECT_NO_PREFIX */
      };
    }
  }
  let from;
  const cookieMatch = useCookie2 && localeCookie || void 0;
  if (useCookie2) {
    from = "cookie";
  }
  const browserMatch = nuxtApp.$i18n.getBrowserLocale();
  if (!cookieMatch) {
    from = "navigator_or_header";
  }
  const matchedLocale = cookieMatch || browserMatch;
  const resolved = matchedLocale || fallbackLocale || "";
  if (!matchedLocale && fallbackLocale) {
    from = "fallback";
  }
  return { locale: resolved, from };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales, strategy, route) {
  let host = getHost() || "";
  const routePath = isObject(route) ? route.path : isString(route) ? route : "";
  if (host) {
    let matchingLocale;
    const matchingLocales = locales.filter((locale) => {
      if (locale && locale.domain) {
        let domain = locale.domain;
        if (hasProtocol(locale.domain)) {
          domain = locale.domain.replace(/(http|https):\/\//, "");
        }
        return domain === host;
      } else if (Array.isArray(locale == null ? void 0 : locale.domains)) {
        return locale.domains.includes(host);
      }
      return false;
    });
    if (matchingLocales.length === 1) {
      matchingLocale = matchingLocales[0];
    } else if (matchingLocales.length > 1) {
      if (strategy === "no_prefix") {
        console.warn(
          formatMessage(
            "Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!"
          )
        );
        matchingLocale = matchingLocales[0];
      } else {
        if (route) {
          if (routePath && routePath !== "") {
            const matches = routePath.match(getLocalesRegex(matchingLocales.map((l2) => l2.code)));
            if (matches && matches.length > 1) {
              matchingLocale = matchingLocales.find((l2) => l2.code === matches[1]);
            }
          }
        }
        if (!matchingLocale) {
          matchingLocale = matchingLocales.find(
            (l2) => Array.isArray(l2.defaultForDomains) ? l2.defaultForDomains.includes(host) : l2.domainDefault
          );
        }
      }
    }
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode) {
  var _a2, _b, _c;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const host = getHost();
  const config2 = runtimeConfig.public.i18n;
  const lang = normalizedLocales.find((locale) => locale.code === localeCode);
  const domain = ((_b = (_a2 = config2 == null ? void 0 : config2.domainLocales) == null ? void 0 : _a2[localeCode]) == null ? void 0 : _b.domain) || (lang == null ? void 0 : lang.domain) || ((_c = lang == null ? void 0 : lang.domains) == null ? void 0 : _c.find((v2) => v2 === host));
  if (domain) {
    if (hasProtocol(domain, { strict: true })) {
      return domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxtApp);
      protocol = req && isHTTPS(req) ? "https:" : "http:";
    }
    return protocol + "//" + domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
const runtimeDetectBrowserLanguage = (opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) => {
  if ((opts == null ? void 0 : opts.detectBrowserLanguage) === false) return false;
  return opts == null ? void 0 : opts.detectBrowserLanguage;
};
function setupMultiDomainLocales(nuxtContext, defaultLocaleDomain) {
  const { multiDomainLocales, strategy, routesNameSeparator, defaultLocaleRouteNameSuffix } = nuxtContext.$config.public.i18n;
  if (!multiDomainLocales) return;
  if (!(strategy === "prefix_except_default" || strategy === "prefix_and_default")) return;
  const router = useRouter();
  const defaultRouteSuffix = [routesNameSeparator, defaultLocaleRouteNameSuffix].join("");
  for (const route of router.getRoutes()) {
    const routeName = getRouteName(route.name);
    if (routeName.endsWith(defaultRouteSuffix)) {
      router.removeRoute(routeName);
      continue;
    }
    const routeNameLocale = routeName.split(routesNameSeparator)[1];
    if (routeNameLocale === defaultLocaleDomain) {
      router.addRoute({
        ...route,
        path: route.path === `/${routeNameLocale}` ? "/" : route.path.replace(`/${routeNameLocale}`, "")
      });
    }
  }
}
function getDefaultLocaleForDomain(nuxtContext) {
  const { locales, defaultLocale, multiDomainLocales } = nuxtContext.$config.public.i18n;
  let defaultLocaleDomain = defaultLocale || "";
  if (!multiDomainLocales) {
    return defaultLocaleDomain;
  }
  const host = getHost();
  const hasDefaultForDomains = locales.some(
    (l2) => typeof l2 !== "string" && Array.isArray(l2.defaultForDomains)
  );
  if (hasDefaultForDomains) {
    const findDefaultLocale = locales.find(
      (l2) => typeof l2 === "string" || !Array.isArray(l2.defaultForDomains) ? false : l2.defaultForDomains.includes(host ?? "")
    );
    defaultLocaleDomain = (findDefaultLocale == null ? void 0 : findDefaultLocale.code) ?? "";
  }
  return defaultLocaleDomain;
}
function creatHeadContext({ key, seo }) {
  const nuxtApp = useNuxtApp();
  const { defaultDirection } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const locale = unref(nuxtApp.$i18n.locale);
  const locales = getNormalizedLocales(unref(nuxtApp.$i18n.locales));
  const currentLocale = locales.find((l2) => l2.code === locale) || { code: locale };
  return {
    key,
    seo,
    locale,
    locales,
    currentDir: currentLocale.dir || defaultDirection,
    currentLocale,
    currentLanguage: currentLocale.language,
    baseUrl: getBaseUrl()
  };
}
function localeHead(common, { dir = true, lang = true, seo = true, key = "hid" }) {
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const ctx = creatHeadContext({ seo, key });
  if (!ctx.baseUrl) {
    console.warn("I18n `baseUrl` is required to generate valid SEO tag links.");
  }
  if (ctx.locales == null || ctx.baseUrl == null) {
    return metaObject;
  }
  if (dir) {
    metaObject.htmlAttrs.dir = ctx.currentDir;
  }
  if (lang && ctx.currentLanguage) {
    metaObject.htmlAttrs.lang = ctx.currentLanguage;
  }
  if (seo && ctx.locale && ctx.locales) {
    metaObject.link.push(
      ...getHreflangLinks(common, ctx),
      ...getCanonicalLink(common, ctx)
    );
    metaObject.meta.push(
      ...getOgUrl(common, ctx),
      ...getCurrentOgLocale(ctx),
      ...getAlternateOgLocales(ctx)
    );
  }
  return metaObject;
}
function getBaseUrl() {
  const nuxtApp = useNuxtApp();
  const i18n = getComposer$3(nuxtApp.$i18n);
  return joinURL(unref(i18n.baseUrl), nuxtApp.$config.app.baseURL);
}
function getHreflangLinks(common, ctx) {
  const { defaultLocale, strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const links = [];
  if (strategy === "no_prefix") return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of ctx.locales) {
    if (!locale.language) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = locale.language.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(locale.language, locale);
  }
  const strictCanonicals = common.runtimeConfig.public.i18n.experimental.alternateLinkCanonicalQueries === true;
  const routeWithoutQuery = strictCanonicals ? common.router.resolve({ query: {} }) : void 0;
  if (!common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR && strictCanonicals) {
    routeWithoutQuery.meta = common.router.currentRoute.value.meta;
  }
  for (const [language, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code, routeWithoutQuery);
    const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
    let href = toAbsoluteUrl(localePath2, ctx.baseUrl);
    if (canonicalQueryParams && strictCanonicals) {
      href = `${href}?${canonicalQueryParams}`;
    }
    if (localePath2) {
      links.push({
        [ctx.key]: `i18n-alt-${language}`,
        rel: "alternate",
        href,
        hreflang: language
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath(common, defaultLocale, routeWithoutQuery);
    const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
    let href = toAbsoluteUrl(localePath2, ctx.baseUrl);
    if (canonicalQueryParams && strictCanonicals) {
      href = `${href}?${canonicalQueryParams}`;
    }
    if (localePath2) {
      links.push({
        [ctx.key]: "i18n-xd",
        rel: "alternate",
        href,
        hreflang: "x-default"
      });
    }
  }
  return links;
}
function getCanonicalUrl(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  if (!currentRoute) return "";
  let href = toAbsoluteUrl(currentRoute.path, ctx.baseUrl);
  const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
  if (canonicalQueryParams) {
    href = `${href}?${canonicalQueryParams}`;
  }
  return href;
}
function getCanonicalLink(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-can", rel: "canonical", href }];
}
function getCanonicalQueryParams(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  const canonicalQueries = isObject(ctx.seo) && ctx.seo.canonicalQueries || [];
  const currentRouteQueryParams = (currentRoute == null ? void 0 : currentRoute.query) || {};
  const params = new URLSearchParams();
  for (const queryParamName of canonicalQueries) {
    if (queryParamName in currentRouteQueryParams) {
      const queryParamValue = currentRouteQueryParams[queryParamName];
      if (isArray(queryParamValue)) {
        queryParamValue.forEach((v2) => params.append(queryParamName, v2 || ""));
      } else {
        params.append(queryParamName, queryParamValue || "");
      }
    }
  }
  return params.toString() || void 0;
}
function getOgUrl(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-og-url", property: "og:url", content: href }];
}
function getCurrentOgLocale(ctx) {
  if (!ctx.currentLocale || !ctx.currentLanguage) return [];
  return [{ [ctx.key]: "i18n-og", property: "og:locale", content: hyphenToUnderscore(ctx.currentLanguage) }];
}
function getAlternateOgLocales(ctx) {
  const alternateLocales = ctx.locales.filter((locale) => locale.language && locale.language !== ctx.currentLanguage);
  return alternateLocales.map((locale) => ({
    [ctx.key]: `i18n-og-alt-${locale.language}`,
    property: "og:locale:alternate",
    content: hyphenToUnderscore(locale.language)
  }));
}
function hyphenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) return urlOrPath;
  return joinURL(baseUrl, urlOrPath);
}
/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset2) {
  return { line, column, offset: offset2 };
}
function createLocation(start2, end2, source) {
  const loc = { start: start2, end: end2 };
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14};
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
function createCompileError(code, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index22) => _buf[index22] === CHAR_CR && _buf[index22 + 1] === CHAR_LF;
  const isLF = (index22) => _buf[index22] === CHAR_LF;
  const isPS = (index22) => _buf[index22] === CHAR_PS;
  const isLS = (index22) => _buf[index22] === CHAR_LS;
  const isLineEnd = (index22) => isCRLF(index22) || isLF(index22) || isPS(index22) || isLS(index22);
  const index2 = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset2) => isCRLF(offset2) || isPS(offset2) || isLS(offset2) ? CHAR_LF : _buf[offset2];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset2 = 0) {
    _peekOffset = offset2;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index: index2,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code, pos, offset2, ...args) {
    const ctx = context();
    pos.column += offset2;
    pos.offset += offset2;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    13
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 7) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 7 || currentType === 11)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    const fn2 = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn2();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn2();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn2 = (hasSpace = false, prev = "") => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return hasSpace;
      } else if (ch === "@" || !ch) {
        return hasSpace;
      } else if (ch === "|") {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn2(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn2(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn2();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn2) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn2(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i2 = 0; i2 < digits; i2++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn2 = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn2(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn2(buf);
      }
    };
    return fn2("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 4 || context2.currentType === 5 || context2.currentType === 6)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 4, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 6, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 12, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 11, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 10, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset: offset2, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset2;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        13
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code, start2, offset2, ...args) {
    const end2 = tokenzer.currentPosition();
    end2.offset += offset2;
    end2.column += offset2;
    if (onError) {
      const loc = location ? createLocation(start2, end2) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset2, loc) {
    const node = { type };
    if (location) {
      node.start = offset2;
      node.end = offset2;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset2, pos, type) {
    if (location) {
      node.end = offset2;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index2) {
    const context = tokenizer.context();
    const { lastOffset: offset2, lastStartLoc: loc } = context;
    const node = startNode(5, offset2, loc);
    node.index = parseInt(index2, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset2, lastStartLoc: loc } = context;
    const node = startNode(4, offset2, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset2, lastStartLoc: loc } = context;
    const node = startNode(9, offset2, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset2, lastStartLoc: loc } = context;
    const node = startNode(8, offset2, loc);
    if (token.type !== 11) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset2, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 9) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 4:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 7: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 13 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset2, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset2, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset: offset2, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset2, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 13) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 13) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i2 = 0; i2 < nodes.length; i2++) {
    traverseNode(nodes[i2], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c2) => optimizeMessageNode(c2));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i2 = 0; i2 < message.items.length; i2++) {
      const item = message.items[i2];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i2 = 0; i2 < message.items.length; i2++) {
        const item = message.items[i2];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i2 = 0; i2 < cases.length; i2++) {
        minify(cases[i2]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i2 = 0; i2 < items.length; i2++) {
        minify(items[i2]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
  }
  delete node.type;
}
function createCodeGenerator(ast, options) {
  const { filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n2, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n2) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i2 = 0; i2 < length; i2++) {
    generateNode(generator, node.items[i2]);
    if (i2 === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i2 = 0; i2 < length; i2++) {
      generateNode(generator, node.cases[i2]);
      if (i2 === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    filename,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s3) => `${s3}: _${s3}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code, map } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(
      0
      /* NodeTypes.Resource */
    );
  }
  const type = resolveType(body);
  if (type === 1) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages, c2) => [
      ...messages,
      formatMessageParts(ctx, c2)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
const PROPS_BODY = ["b", "body"];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === "text" ? static_ : ctx.normalize([static_]);
  } else {
    const messages = resolveItems(node).reduce((acm, c2) => [...acm, formatMessagePart(ctx, c2)], []);
    return ctx.normalize(messages);
  }
}
const PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3: {
      return resolveValue$1(node, type);
    }
    case 9: {
      return resolveValue$1(node, type);
    }
    case 4: {
      const named = node;
      if (hasOwn(named, "k") && named.k) {
        return ctx.interpolate(ctx.named(named.k));
      }
      if (hasOwn(named, "key") && named.key) {
        return ctx.interpolate(ctx.named(named.key));
      }
      throw createUnhandleNodeError(type);
    }
    case 5: {
      const list = node;
      if (hasOwn(list, "i") && isNumber(list.i)) {
        return ctx.interpolate(ctx.list(list.i));
      }
      if (hasOwn(list, "index") && isNumber(list.index)) {
        return ctx.interpolate(ctx.list(list.index));
      }
      throw createUnhandleNodeError(type);
    }
    case 6: {
      const linked = node;
      const modifier = resolveLinkedModifier(linked);
      const key = resolveLinkedKey(linked);
      return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      return resolveValue$1(node, type);
    }
    case 8: {
      return resolveValue$1(node, type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const PROPS_TYPE = ["t", "type"];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(
      6
      /* NodeTypes.Linked */
    );
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i2 = 0; i2 < props.length; i2++) {
    const prop = props[i2];
    if (hasOwn(node, prop) && node[prop] != null) {
      return node[prop];
    }
  }
  return defaultValue;
}
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
const defaultOnCacheKey = (message) => message;
let compileCache = create();
function isMessageAST(val) {
  return isObject(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
// @__NO_SIDE_EFFECTS__
function compile(message, context) {
  if (isString(message)) {
    isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: "production" !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: COMPILE_ERROR_CODES_EXTEND_POINT,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return createCompileError(code, null, void 0);
}
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  if (isString(locale)) {
    return locale;
  } else {
    if (isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === "Function") {
        const resolve2 = locale();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start2) {
  return [.../* @__PURE__ */ new Set([
    start2,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start2]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start2) {
  const startLocale = isString(start2) ? start2 : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start2];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale = block[i2];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b2 = str.charCodeAt(str.length - 1);
  return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return ch;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c2;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c2 = path[index2];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    if (isFunction(last)) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
const VERSION$1 = "10.0.5";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
};
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || create();
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  return context;
}
const createResources = (locale) => ({ [locale]: create() });
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale)
    return false;
  return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index2 = locales.indexOf(targetLocale);
  if (index2 === -1) {
    return false;
  }
  for (let i2 = index2 + 1; i2 < locales.length; i2++) {
    if (isAlmostSameLocale(targetLocale, locales[i2])) {
      return true;
    }
  }
  return false;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || create();
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key, useLinked) {
    const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key, true)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign(create(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
  const locale = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || create()
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = create();
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    message = messages[targetLocale] || create();
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format2 = missingRet;
      }
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = create();
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue2(message, key);
    if (val == null && (fallbackContext || useLinked)) {
      const [, , message2] = resolveMessageFormat(
        fallbackContext || context,
        // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
        key,
        locale,
        fallbackLocale,
        fallbackWarn,
        missingWarn
      );
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "10.0.5";
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: CORE_ERROR_CODES_EXTEND_POINT,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32};
function createI18nError(code, ...args) {
  return createCompileError(code, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = create();
        }
        if (!isObject(currentObj[subKeys[i2]])) {
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i2]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || create();
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : create();
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn2, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if ("production" !== "production" || false) ;
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn2(_context);
    } finally {
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d2(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale2) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
    }, () => [key], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key, locale2]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    if (flatJson) {
      const _message = { [locale2]: message };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale2];
    }
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    const _message = { [locale2]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale2];
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te2;
    composer.tm = tm;
    composer.d = d2;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, create());
  }
}
function getFragmentableTag() {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = create();
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign(create(), attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h$1(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = create();
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign(create(), options2, { [prop]: props.format[prop] }) : options2;
      }, create());
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index2}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign(create(), attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h$1(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$1(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  const i18n = {
    // mode
    get mode() {
      return "composition";
    },
    // install plugin
    async install(app, ...options2) {
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n);
      if (isPlainObject(options2[0])) {
        const opts = options2[0];
        i18n.__composerExtend = opts.__composerExtend;
        i18n.__vueI18nExtend = opts.__vueI18nExtend;
      }
      let globalReleaseHandler = null;
      if (__globalInjection) {
        globalReleaseHandler = injectGlobalFields(app, i18n.global);
      }
      {
        apply(app, i18n, ...options2);
      }
      const unmountApp = app.unmount;
      app.unmount = () => {
        globalReleaseHandler && globalReleaseHandler();
        i18n.dispose();
        unmountApp();
      };
    },
    // global accessor
    get global() {
      return __global;
    },
    dispose() {
      globalScope.stop();
    },
    // @internal
    __instances,
    // @internal
    __getInstance,
    // @internal
    __setInstance,
    // @internal
    __deleteInstance
  };
  return i18n;
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  const obj = scope.run(() => createComposer(options));
  if (obj == null) {
    throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
  }
  return [scope, obj];
}
function getI18nInstance(instance) {
  const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
  if (!i18n) {
    throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
  }
  return i18n;
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
function useRouteBaseName() {
  return wrapComposable(getRouteBaseName);
}
function useLocalePath() {
  return wrapComposable(localePath);
}
function useLocaleRoute() {
  return wrapComposable(localeRoute);
}
function useLocaleLocation() {
  return wrapComposable(localeRoute);
}
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
const switch_locale_path_ssr_5csfIgkrBP = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(nuxt) {
    if (nuxt.$config.public.i18n.experimental.switchLocalePathLinkSSR !== true) return;
    const switchLocalePath2 = useSwitchLocalePath();
    const switchLocalePathLinkWrapperExpr = new RegExp(
      [
        `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
        `.+?`,
        `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`
      ].join(""),
      "g"
    );
    nuxt.hook("app:rendered", (ctx) => {
      var _a2;
      if (((_a2 = ctx.renderResult) == null ? void 0 : _a2.html) == null) return;
      ctx.renderResult.html = ctx.renderResult.html.replaceAll(
        switchLocalePathLinkWrapperExpr,
        (match, p1) => match.replace(/href="([^"]+)"/, `href="${encodeURI(switchLocalePath2(p1 ?? ""))}"`)
      );
    });
  }
});
const route_locale_detect_VrpP1JaYg8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:route-locale-detect",
  dependsOn: ["i18n:plugin"],
  async setup(nuxt) {
    let __temp, __restore;
    const nuxtApp = nuxt;
    const currentRoute = nuxtApp.$router.currentRoute;
    const getRouteLocale = createLocaleFromRouteGetter();
    async function handleRouteDetect(to) {
      let detected = detectLocale(to, getRouteLocale(to), unref(nuxtApp.$i18n.locale), nuxtApp.$i18n.getLocaleCookie());
      if (nuxtApp._vueI18n.__firstAccess) {
        nuxtApp._vueI18n.__setLocale(detected);
        const fallbackLocales = makeFallbackLocaleCodes(unref(nuxtApp._vueI18n.global.fallbackLocale), [detected]);
        await Promise.all(fallbackLocales.map((x2) => nuxtApp.$i18n.loadLocaleMessages(x2)));
        await nuxtApp.$i18n.loadLocaleMessages(detected);
      }
      const modified = await nuxtApp.runWithContext(() => loadAndSetLocale(detected, nuxtApp._vueI18n.__firstAccess));
      if (modified) {
        detected = unref(nuxtApp.$i18n.locale);
      }
      return detected;
    }
    [__temp, __restore] = executeAsync(() => handleRouteDetect(currentRoute.value)), await __temp, __restore();
    const localeChangeMiddleware = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
      let __temp2, __restore2;
      const locale = ([__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(() => handleRouteDetect(to))), __temp2 = await __temp2, __restore2(), __temp2);
      const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(
        () => detectRedirect({ to, from, locale, routeLocale: getRouteLocale(to) }, true)
      )), __temp2 = await __temp2, __restore2(), __temp2);
      nuxtApp._vueI18n.__firstAccess = false;
      return [__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(() => navigate({ nuxtApp, redirectPath, locale, route: to }))), __temp2 = await __temp2, __restore2(), __temp2;
    });
    addRouteMiddleware("locale-changing", localeChangeMiddleware, { global: true });
  }
});
function extendI18n(i18n, { extendComposer, extendComposerInstance }) {
  const scope = effectScope();
  const installI18n = i18n.install.bind(i18n);
  i18n.install = (app, ...options) => {
    const pluginOptions = Object.assign({}, options[0]);
    pluginOptions.__composerExtend = (c2) => {
      extendComposerInstance(c2, getComposer$3(i18n));
      return () => {
      };
    };
    if (i18n.mode === "legacy") {
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendComposerInstance(vueI18n, getComposer$3(vueI18n));
        return () => {
        };
      };
    }
    Reflect.apply(installI18n, i18n, [app, pluginOptions]);
    const globalComposer = getComposer$3(i18n);
    scope.run(() => {
      extendComposer(globalComposer);
      if (i18n.mode === "legacy" && isVueI18n(i18n.global)) {
        extendComposerInstance(i18n.global, getComposer$3(i18n.global));
      }
    });
    if (i18n.mode === "composition" && app.config.globalProperties.$i18n != null) {
      extendComposerInstance(app.config.globalProperties.$i18n, globalComposer);
    }
    if (app.unmount) {
      const unmountApp = app.unmount.bind(app);
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
const i18n_sq1MuCrqbC = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin",
  parallel: parallelPlugin,
  async setup(nuxt) {
    var _a2;
    let __temp, __restore;
    const nuxtApp = nuxt;
    const currentRoute = nuxtApp.$router.currentRoute;
    const defaultLocaleDomain = getDefaultLocaleForDomain(nuxtApp);
    setupMultiDomainLocales(nuxtApp, defaultLocaleDomain);
    const runtimeI18n = {
      ...nuxtApp.$config.public.i18n,
      defaultLocale: defaultLocaleDomain
    };
    nuxtApp.$config.public.i18n.defaultLocale = defaultLocaleDomain;
    runtimeI18n.baseUrl = extendBaseUrl();
    const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages = vueI18nOptions.messages || {};
    for (const l2 of localeCodes) {
      (_a2 = vueI18nOptions.messages)[l2] ?? (_a2[l2] = {});
    }
    vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
    if (defaultLocaleDomain) {
      vueI18nOptions.locale = defaultLocaleDomain;
    }
    const getRouteLocale = createLocaleFromRouteGetter();
    const localeCookie = getI18nCookie();
    const i18n = createI18n(vueI18nOptions);
    i18n.__firstAccess = true;
    i18n.__setLocale = (locale) => {
      const i2 = getI18nTarget(i18n);
      if (isRef(i2.locale)) {
        i2.locale.value = locale;
      } else {
        i2.locale = locale;
      }
    };
    nuxtApp._vueI18n = i18n;
    extendI18n(i18n, {
      extendComposer(composer) {
        const _locales = ref(runtimeI18n.locales);
        const _localeCodes = ref(localeCodes);
        const _baseUrl = ref("");
        composer.locales = computed(() => _locales.value);
        composer.localeCodes = computed(() => _localeCodes.value);
        composer.baseUrl = computed(() => _baseUrl.value);
        {
          _baseUrl.value = resolveBaseUrl(runtimeI18n.baseUrl, nuxtApp);
        }
        composer.strategy = runtimeI18n.strategy;
        composer.localeProperties = computed(
          () => normalizedLocales.find((l2) => l2.code === composer.locale.value) || { code: composer.locale.value }
        );
        composer.setLocale = async (locale) => {
          await loadAndSetLocale(locale, i18n.__firstAccess);
          if (composer.strategy === "no_prefix" || false) {
            await composer.loadLocaleMessages(locale);
            i18n.__setLocale(locale);
            return;
          }
          const route = currentRoute.value;
          const redirectPath = await nuxtApp.runWithContext(
            () => detectRedirect({ to: route, locale, routeLocale: getRouteLocale(route) })
          );
          await nuxtApp.runWithContext(
            () => navigate({ nuxtApp, redirectPath, locale, route }, { enableNavigate: true })
          );
        };
        composer.loadLocaleMessages = async (locale) => await loadLocale(locale, localeLoaders, composer.mergeLocaleMessage.bind(composer), nuxtApp);
        composer.differentDomains = runtimeI18n.differentDomains;
        composer.defaultLocale = runtimeI18n.defaultLocale;
        composer.getBrowserLocale = () => getBrowserLocale();
        composer.getLocaleCookie = () => getLocaleCookie(localeCookie, _detectBrowserLanguage, composer.defaultLocale);
        composer.setLocaleCookie = (locale) => setLocaleCookie(localeCookie, locale, _detectBrowserLanguage);
        composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", {
          oldLocale,
          newLocale,
          initialSetup,
          context
        });
        composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
        composer.finalizePendingLocaleChange = async () => {
          var _a3;
          if (!i18n.__pendingLocale) return;
          i18n.__setLocale(i18n.__pendingLocale);
          (_a3 = i18n.__resolvePendingLocalePromise) == null ? void 0 : _a3.call(i18n);
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      extendComposerInstance(instance, c2) {
        const props = [
          ["locales", () => c2.locales],
          ["localeCodes", () => c2.localeCodes],
          ["baseUrl", () => c2.baseUrl],
          ["strategy", () => c2.strategy],
          ["localeProperties", () => c2.localeProperties],
          ["setLocale", () => async (locale) => Reflect.apply(c2.setLocale, c2, [locale])],
          ["loadLocaleMessages", () => async (locale) => Reflect.apply(c2.loadLocaleMessages, c2, [locale])],
          ["differentDomains", () => c2.differentDomains],
          ["defaultLocale", () => c2.defaultLocale],
          ["getBrowserLocale", () => () => Reflect.apply(c2.getBrowserLocale, c2, [])],
          ["getLocaleCookie", () => () => Reflect.apply(c2.getLocaleCookie, c2, [])],
          ["setLocaleCookie", () => (locale) => Reflect.apply(c2.setLocaleCookie, c2, [locale])],
          [
            "onBeforeLanguageSwitch",
            () => (oldLocale, newLocale, initialSetup, context) => Reflect.apply(c2.onBeforeLanguageSwitch, c2, [oldLocale, newLocale, initialSetup, context])
          ],
          [
            "onLanguageSwitched",
            () => (oldLocale, newLocale) => Reflect.apply(c2.onLanguageSwitched, c2, [oldLocale, newLocale])
          ],
          ["finalizePendingLocaleChange", () => () => Reflect.apply(c2.finalizePendingLocaleChange, c2, [])],
          ["waitForPendingLocaleChange", () => () => Reflect.apply(c2.waitForPendingLocaleChange, c2, [])]
        ];
        for (const [key, get2] of props) {
          Object.defineProperty(instance, key, { get: get2 });
        }
      }
    });
    nuxt.vueApp.use(i18n);
    defineGetter(nuxtApp, "$i18n", getI18nTarget(i18n));
    return {
      provide: {
        /**
         * TODO: remove type assertions while type narrowing based on generated types
         */
        localeHead: wrapComposable(localeHead),
        localePath: useLocalePath(),
        localeRoute: useLocaleRoute(),
        getRouteBaseName: useRouteBaseName(),
        switchLocalePath: useSwitchLocalePath(),
        // TODO: remove in v10
        resolveRoute: wrapComposable(resolveRoute),
        // TODO: remove in v10
        localeLocation: useLocaleLocation()
      }
    };
  }
});
const robot_meta_server_8htXH4OkuR = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    var _a2;
    const event = useRequestEvent();
    const ctx = (_a2 = event == null ? void 0 : event.context) == null ? void 0 : _a2.robots;
    if (!ctx)
      return;
    const config2 = /* @__PURE__ */ useRuntimeConfig();
    useServerHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => {
            var _a3, _b, _c, _d;
            return ((_a3 = config2["nuxt-robots"]) == null ? void 0 : _a3.debug) && ((_b = ctx.debug) == null ? void 0 : _b.source) ? `${(_c = ctx.debug) == null ? void 0 : _c.source},${(_d = ctx.debug) == null ? void 0 : _d.line}` : void 0;
          }
        }
      ]
    });
  }
});
const i18n_Ug908EZNww = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:i18n",
  // @ts-expect-error untyped
  dependsOn: ["i18n:plugin", "i18n:plugin:ssg-detect", "i18n:plugin:route-locale-detect"],
  setup(nuxtApp) {
    var _a2;
    const i18n = nuxtApp.$i18n;
    if (!i18n)
      return;
    const stack = (_a2 = useRequestEvent()) == null ? void 0 : _a2.context.siteConfig;
    const i18nBaseUrl = toValue(i18n.baseUrl);
    if (i18nBaseUrl) {
      const siteConfig = stack.get({ resolveRefs: true });
      const currentUrl = siteConfig.url;
      if (currentUrl && !currentUrl.includes("localhost")) {
        const i18nURL = parseURL(i18nBaseUrl, "https://");
        const siteConfigURL = parseURL(currentUrl, "https://");
        if (i18nURL.host !== siteConfigURL.host) {
          if (siteConfig.env === "production") {
            console.error(`[Nuxt Site Config] Your I18n baseUrl \`${i18nURL.host}\` doesn't match your site url ${siteConfigURL.host}. This will cause production SEO issues. Either provide a matching baseUrl or remove the site url config.`);
          }
        }
      }
    }
    let siteConfigEntry;
    watch(i18n.locale, () => {
      if (siteConfigEntry) {
        siteConfigEntry();
      }
      siteConfigEntry = stack.push({
        _priority: -2,
        _context: "@nuxtjs/i18n",
        // @ts-expect-error untyped
        url: i18n.baseUrl,
        // @ts-expect-error untyped
        defaultLocale: i18n.defaultLocale,
        // @ts-expect-error untyped
        currentLocale: i18n.locale,
        // @ts-expect-error untyped
        description: computed(() => i18n.te("nuxtSiteConfig.description") ? i18n.t("nuxtSiteConfig.description") : void 0),
        // @ts-expect-error untyped
        name: computed(() => i18n.te("nuxtSiteConfig.name") ? i18n.t("nuxtSiteConfig.name") : void 0)
      });
    }, {
      immediate: true
    });
  }
});
function hydrateStore(store, {
  storage,
  serializer,
  key,
  debug,
  pick: pick2,
  omit: omit2,
  beforeHydrate,
  afterHydrate
}, context, runHooks = true) {
  try {
    if (runHooks)
      beforeHydrate == null ? void 0 : beforeHydrate(context);
    const fromStorage = storage.getItem(key);
    if (fromStorage) {
      const deserialized = serializer.deserialize(fromStorage);
      const picked = pick2 ? deepPickUnsafe(deserialized, pick2) : deserialized;
      const omitted = omit2 ? deepOmitUnsafe(picked, omit2) : picked;
      store.$patch(omitted);
    }
    if (runHooks)
      afterHydrate == null ? void 0 : afterHydrate(context);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function persistState(state, {
  storage,
  serializer,
  key,
  debug,
  pick: pick2,
  omit: omit2
}) {
  try {
    const picked = pick2 ? deepPickUnsafe(state, pick2) : state;
    const omitted = omit2 ? deepOmitUnsafe(picked, omit2) : picked;
    const toStorage = serializer.serialize(omitted);
    storage.setItem(key, toStorage);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function createPersistence(context, optionsParser, auto2) {
  const { pinia, store, options: { persist = auto2 } } = context;
  if (!persist)
    return;
  if (!(store.$id in pinia.state.value)) {
    const originalStore = pinia._s.get(store.$id.replace("__hot:", ""));
    if (originalStore)
      Promise.resolve().then(() => originalStore.$persist());
    return;
  }
  const persistenceOptions = Array.isArray(persist) ? persist : persist === true ? [{}] : [persist];
  const persistences = persistenceOptions.map(optionsParser);
  store.$hydrate = ({ runHooks = true } = {}) => {
    persistences.forEach((p2) => {
      hydrateStore(store, p2, context, runHooks);
    });
  };
  store.$persist = () => {
    persistences.forEach((p2) => {
      persistState(store.$state, p2);
    });
  };
  persistences.forEach((p2) => {
    hydrateStore(store, p2, context);
    store.$subscribe(
      (_mutation, state) => persistState(state, p2),
      { detached: true }
    );
  });
}
function cookies(options) {
  return {
    getItem: (key) => useCookie(
      key,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        decode: decodeURIComponent,
        readonly: true
      }
    ).value,
    setItem: (key, value) => useCookie(
      key,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        encode: encodeURIComponent
      }
    ).value = value
  };
}
function localStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
function sessionStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
const storages = {
  cookies,
  localStorage,
  sessionStorage
};
function piniaPlugin(context) {
  const config2 = /* @__PURE__ */ useRuntimeConfig();
  const options = config2.public.piniaPluginPersistedstate;
  createPersistence(
    context,
    (p2) => ({
      key: options.key ? options.key.replace(/%id/g, p2.key ?? context.store.$id) : p2.key ?? context.store.$id,
      debug: p2.debug ?? options.debug ?? false,
      serializer: p2.serializer ?? {
        serialize: (data) => JSON.stringify(data),
        deserialize: (data) => destr(data)
      },
      storage: p2.storage ?? (options.storage ? options.storage === "cookies" ? storages.cookies(options.cookieOptions) : storages[options.storage]() : storages.cookies()),
      beforeHydrate: p2.beforeHydrate,
      afterHydrate: p2.afterHydrate,
      pick: p2.pick,
      omit: p2.omit
    }),
    options.auto ?? false
  );
}
const plugin_PSbK9A48ZQ = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia-plugin-persistedstate",
  setup({ $pinia }) {
    $pinia.use(piniaPlugin);
  }
});
const slidOverInjectionKey = Symbol("nuxt-ui.slideover");
function _useSlideover() {
  const slideoverState = inject(slidOverInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!slideoverState) {
      throw new Error("useSlideover() is called without provider");
    }
    slideoverState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!slideoverState) return;
    isOpen.value = false;
  }
  function reset() {
    slideoverState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!slideoverState) return;
    slideoverState.value = {
      ...slideoverState.value,
      props: {
        ...slideoverState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
createSharedComposable(_useSlideover);
const slideovers_X7whXyrIWR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const slideoverState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(slidOverInjectionKey, slideoverState);
});
const modalInjectionKey = Symbol("nuxt-ui.modal");
function _useModal() {
  const modalState = inject(modalInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!modalState) {
      throw new Error("useModal() is called without provider");
    }
    modalState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!modalState) return;
    isOpen.value = false;
  }
  function reset() {
    modalState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!modalState) return;
    modalState.value = {
      ...modalState.value,
      props: {
        ...modalState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
createSharedComposable(_useModal);
const modals_oqljskDzoR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(modalInjectionKey, modalState);
});
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const uLinkProps = {
  as: {
    type: String,
    default: "button"
  },
  type: {
    type: String,
    default: "button"
  },
  disabled: {
    type: Boolean,
    default: null
  },
  active: {
    type: Boolean,
    default: void 0
  },
  exact: {
    type: Boolean,
    default: false
  },
  exactQuery: {
    type: Boolean,
    default: false
  },
  exactHash: {
    type: Boolean,
    default: false
  },
  inactiveClass: {
    type: String,
    default: void 0
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const getULinkProps = (props) => {
  const keys = [...Object.keys(nuxtLinkProps), ...Object.keys(uLinkProps), "ariaLabel", "title"];
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const twMerge = extendTailwindMerge(defu({
  extend: {
    classGroups: {
      icons: [(classPart) => classPart.startsWith("i-")]
    }
  }
}, (_a = appConfig.ui) == null ? void 0 : _a.tailwindMerge));
const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace === "default" || namespace.startsWith("default.")) {
    return false;
  }
  if (namespace === "popper" || namespace.startsWith("popper.")) {
    return false;
  }
  if (namespace.endsWith("avatar") && key === "size") {
    return false;
  }
  if (namespace.endsWith("chip") && key === "size") {
    return false;
  }
  if (namespace.endsWith("badge") && key === "size" || key === "color" || key === "variant") {
    return false;
  }
  if (typeof obj[key] === "string" && typeof value === "string" && obj[key] && value) {
    obj[key] = twMerge(obj[key], value);
    return true;
  }
});
function mergeConfig(strategy, ...configs) {
  if (strategy === "override") {
    return defu({}, ...configs);
  }
  return defuTwMerge({}, ...configs);
}
const rxHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function parseConfigValue(value) {
  return rxHex.test(value) ? hexToRgb(value) : value;
}
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_2, r2, g2, b2) {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  const result = rxHex.exec(hex);
  return result ? `${Number.parseInt(result[1], 16)} ${Number.parseInt(result[2], 16)} ${Number.parseInt(result[3], 16)}` : null;
}
function getSlotsChildren(slots) {
  var _a2;
  let children = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
  if (children == null ? void 0 : children.length) {
    children = children.flatMap((c2) => {
      var _a3, _b;
      if (typeof c2.type === "symbol") {
        if (typeof c2.children === "string") {
          return;
        }
        return c2.children;
      } else if (c2.type.name === "MDCSlot") {
        return (_b = (_a3 = c2.ctx.slots).default) == null ? void 0 : _b.call(_a3);
      }
      return c2;
    }).filter(Boolean);
  }
  return children || [];
}
function looseToNumber(val) {
  const n2 = Number.parseFloat(val);
  return Number.isNaN(n2) ? val : n2;
}
const _inherit = "inherit";
const _current = "currentColor";
const _transparent = "transparent";
const _black = "#000";
const _white = "#fff";
const _slate = { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617" };
const _gray = { "50": "rgb(var(--color-gray-50) / <alpha-value>)", "100": "rgb(var(--color-gray-100) / <alpha-value>)", "200": "rgb(var(--color-gray-200) / <alpha-value>)", "300": "rgb(var(--color-gray-300) / <alpha-value>)", "400": "rgb(var(--color-gray-400) / <alpha-value>)", "500": "rgb(var(--color-gray-500) / <alpha-value>)", "600": "rgb(var(--color-gray-600) / <alpha-value>)", "700": "rgb(var(--color-gray-700) / <alpha-value>)", "800": "rgb(var(--color-gray-800) / <alpha-value>)", "900": "rgb(var(--color-gray-900) / <alpha-value>)", "950": "rgb(var(--color-gray-950) / <alpha-value>)" };
const _zinc = { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b" };
const _neutral = { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a" };
const _stone = { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09" };
const _red = { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" };
const _orange = { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407" };
const _amber = { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03" };
const _yellow = { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" };
const _lime = { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05" };
const _green = { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16" };
const _emerald = { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22" };
const _teal = { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e" };
const _cyan = { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344" };
const _sky = { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" };
const _blue = { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" };
const _indigo = { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b" };
const _violet = { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065" };
const _purple = { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764" };
const _fuchsia = { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e" };
const _pink = { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724" };
const _rose = { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519" };
const _background = "rgb(var(--ui-background) / <alpha-value>)";
const _foreground = "rgb(var(--ui-foreground) / <alpha-value>)";
const _primary = { "50": "rgb(var(--color-primary-50) / <alpha-value>)", "100": "rgb(var(--color-primary-100) / <alpha-value>)", "200": "rgb(var(--color-primary-200) / <alpha-value>)", "300": "rgb(var(--color-primary-300) / <alpha-value>)", "400": "rgb(var(--color-primary-400) / <alpha-value>)", "500": "rgb(var(--color-primary-500) / <alpha-value>)", "600": "rgb(var(--color-primary-600) / <alpha-value>)", "700": "rgb(var(--color-primary-700) / <alpha-value>)", "800": "rgb(var(--color-primary-800) / <alpha-value>)", "900": "rgb(var(--color-primary-900) / <alpha-value>)", "950": "rgb(var(--color-primary-950) / <alpha-value>)", "DEFAULT": "rgb(var(--color-primary-DEFAULT) / <alpha-value>)" };
const _cool = { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712" };
const config$i = { "inherit": _inherit, "current": _current, "transparent": _transparent, "black": _black, "white": _white, "slate": _slate, "gray": _gray, "zinc": _zinc, "neutral": _neutral, "stone": _stone, "red": _red, "orange": _orange, "amber": _amber, "yellow": _yellow, "lime": _lime, "green": _green, "emerald": _emerald, "teal": _teal, "cyan": _cyan, "sky": _sky, "blue": _blue, "indigo": _indigo, "violet": _violet, "purple": _purple, "fuchsia": _fuchsia, "pink": _pink, "rose": _rose, "background": _background, "foreground": _foreground, "primary": _primary, "cool": _cool };
const colors_ETtiVmZNmO = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  useNuxtApp();
  const root = computed(() => {
    const primary = get(config$i, appConfig2.ui.primary);
    const gray = get(config$i, appConfig2.ui.gray);
    if (!primary) {
      console.warn(`[@nuxt/ui] Primary color '${appConfig2.ui.primary}' not found in Tailwind config`);
    }
    if (!gray) {
      console.warn(`[@nuxt/ui] Gray color '${appConfig2.ui.gray}' not found in Tailwind config`);
    }
    return `:root {
${Object.entries(primary || config$i.green).map(([key, value]) => `--color-primary-${key}: ${parseConfigValue(value)};`).join("\n")}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || config$i.cool).map(([key, value]) => `--color-gray-${key}: ${parseConfigValue(value)};`).join("\n")}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors"
    }]
  };
  useHead(headData);
});
const preference = "system";
const plugin_server_ano7jnMEqi = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a2;
  const colorMode = ((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const plugin_WLsn00x1qh = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a2, _b;
    const configs = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    disableCache("all");
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = ((_b = (_a2 = configs.app) == null ? void 0 : _a2.baseURL) == null ? void 0 : _b.replace(/\/$/, "")) ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e2) {
        console.error("Failed to load custom icons", e2);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
});
const presets_1aypKNZ222 = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  return {
    provide: {
      ui: appConfig2.ui.presets
    }
  };
});
const variables_kQtglGecod = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  useNuxtApp();
  const root = computed(() => {
    return `:root {
  --header-height: ${appConfig2.ui.variables.header.height};

  ${Object.entries(appConfig2.ui.variables.light).map(([key, value]) => `--ui-${key}: ${value};`).join("\n")}
}

.dark {
  ${Object.entries(appConfig2.ui.variables.dark).map(([key, value]) => `--ui-${key}: ${value};`).join("\n")}
}`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-variables"
    }]
  };
  useHead(headData);
});
const prerender_server_LXx1wM9sKF = /* @__PURE__ */ defineNuxtPlugin(async () => {
  {
    return;
  }
});
const ssg_detect_3fHkBxLtv0 = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:ssg-detect",
  dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
  enforce: "post",
  setup(nuxt) {
    return;
  }
});
const plugins = [
  payloadPlugin,
  unhead_KgADcZ0jPj,
  plugin$1,
  _0_siteConfig_jtc2qNDx4l,
  revive_payload_server_eJ33V7gbc6,
  plugin,
  components_plugin_zlvi6dcIsi,
  switch_locale_path_ssr_5csfIgkrBP,
  route_locale_detect_VrpP1JaYg8,
  i18n_sq1MuCrqbC,
  robot_meta_server_8htXH4OkuR,
  i18n_Ug908EZNww,
  plugin_PSbK9A48ZQ,
  slideovers_X7whXyrIWR,
  modals_oqljskDzoR,
  colors_ETtiVmZNmO,
  plugin_server_ano7jnMEqi,
  plugin_WLsn00x1qh,
  presets_1aypKNZ222,
  variables_kQtglGecod,
  prerender_server_LXx1wM9sKF,
  ssg_detect_3fHkBxLtv0
];
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a2;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a2 = appConfig2.ui) == null ? void 0 : _a2.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    "xs": "h-6 w-6 text-xs",
    "sm": "h-8 w-8 text-sm",
    "md": "h-10 w-10 text-base",
    "lg": "h-12 w-12 text-lg",
    "xl": "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      "xs": "h-3 w-3",
      "sm": "h-4 w-4",
      "md": "h-5 w-5",
      "lg": "h-6 w-6",
      "xl": "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  gap: {
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-1",
    lg: "gap-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const chip = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",
  background: "bg-{color}-500 dark:bg-{color}-400",
  position: {
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-left": "bottom-0 left-0"
  },
  translate: {
    "top-right": "-translate-y-1/2 translate-x-1/2 transform",
    "bottom-right": "translate-y-1/2 translate-x-1/2 transform",
    "top-left": "-translate-y-1/2 -translate-x-1/2 transform",
    "bottom-left": "translate-y-1/2 -translate-x-1/2 transform"
  },
  size: {
    "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
    "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
    "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
    "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
    "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
    "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
    "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
    "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
    "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
  },
  default: {
    size: "sm",
    color: "primary",
    position: "top-right",
    inset: false
  }
};
const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const dropdown = {
  wrapper: "relative inline-flex text-left rtl:text-right",
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-48",
  height: "",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  divide: "divide-y divide-gray-200 dark:divide-gray-700",
  padding: "p-1",
  item: {
    base: "group flex items-center gap-1.5 w-full",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    active: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",
    inactive: "text-gray-700 dark:text-gray-200",
    disabled: "cursor-not-allowed opacity-50",
    icon: {
      base: "flex-shrink-0 w-5 h-5",
      active: "text-gray-500 dark:text-gray-400",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    label: "truncate",
    shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition duration-100 ease-out",
    enterFromClass: "transform scale-95 opacity-0",
    enterToClass: "transform scale-100 opacity-100",
    leaveActiveClass: "transition duration-75 ease-in",
    leaveFromClass: "transform scale-100 opacity-100",
    leaveToClass: "transform scale-95 opacity-0"
  },
  popper: {
    placement: "bottom-end",
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const accordion = {
  wrapper: "w-full flex flex-col",
  container: "w-full flex flex-col",
  item: {
    base: "",
    size: "text-sm",
    color: "text-gray-500 dark:text-gray-400",
    padding: "pt-1.5 pb-3",
    icon: "ms-auto transform transition-transform duration-200 flex-shrink-0"
  },
  transition: {
    enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
    leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
  },
  default: {
    openIcon: "i-heroicons-chevron-down-20-solid",
    closeIcon: "",
    class: "mb-1.5 w-full",
    variant: "soft",
    truncate: true
  }
};
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"
  },
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      "xs": "ps-8",
      "sm": "ps-9",
      "md": "ps-10",
      "lg": "ps-11",
      "xl": "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      "xs": "pe-8",
      "sm": "pe-9",
      "md": "pe-10",
      "lg": "pe-11",
      "xl": "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid",
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
({
  ...input
});
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-400 dark:text-gray-500",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
const selectMenu = {
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty",
    searchablePlaceholder: {
      label: "Search..."
    },
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        "xs": "border-t-[2px]",
        "sm": "border-t-[3px]",
        "md": "border-t-[4px]",
        "lg": "border-t-[5px]",
        "xl": "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        "xs": "border-s-[2px]",
        "sm": "border-s-[3px]",
        "md": "border-s-[4px]",
        "lg": "border-s-[5px]",
        "xl": "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs",
    type: "solid"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  height: "h-screen max-h-96",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-20 group",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",
  shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5",
  middot: "mx-1 text-gray-700 dark:text-gray-200",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow$1,
    base: "[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"
  }
};
const popover = {
  wrapper: "relative",
  container: "z-50 group",
  trigger: "inline-flex w-full",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  overlay: {
    base: "fixed inset-0 transition-opacity z-50",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enterActiveClass: "ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: arrow$1
};
const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
const notifications = {
  wrapper: "fixed flex flex-col justify-end z-[55]",
  position: "bottom-0 end-0",
  width: "w-full sm:w-96",
  container: "px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const config$h = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$A = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config$h);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __nuxt_component_0$d = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$k]]), { __name: "UContainer" });
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$4() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$4();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s3;
}
var r$2;
let n$4 = Symbol("headlessui.useid"), o$3 = 0;
const i$6 = (r$2 = e$1.useId) != null ? r$2 : function() {
  return e$1.inject(n$4, () => `${++o$3}`)();
};
function s$5(t2) {
  e$1.provide(n$4, t2);
}
function o$2(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$7(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
}
var i$5 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$4 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$3 = new s$4();
function i$4(r2) {
  if (c$3.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$2(r2);
    if (n2) return n2.ownerDocument;
  }
  return void 0;
}
let c$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$5 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$5 || {}), T$3 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$3 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$3(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$4(e2)) == null ? void 0 : t2.body) ? false : u$7(r2, { [0]() {
    return e2.matches(c$2);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$2)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function _(e2) {
  let r2 = i$4(e2);
  nextTick(() => {
    r2 && !w$4(r2.activeElement, 0) && S$1(e2);
  });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$2)) != null ? t2 : false;
}
function O$2(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$2(e2, r2) {
  return P(E$3(), r2, { relativeTo: e2 });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O$2(e2) : e2 : E$3(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s3 = p2 + a2;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$3() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$3();
}
function u$6(e2, t2, n2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$2(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$6("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$6("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2) return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
}
function s$3(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$2(e2) && o$2(e2) instanceof HTMLButtonElement && !((u2 = o$2(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$5() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$2({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value) return;
    let l2 = i$4(e2);
    if (!l2) return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); ) d2(n2.currentNode);
  });
}
var N$4 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$4 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$3({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$7(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$2(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v$1(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function E$2(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2) t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T$2(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v$1(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$4 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$4 || {});
let f$2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$3({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
let t$1 = [];
function u$3(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f$1(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$3(l2);
  }
}
function E$1(n2, e2, o2, r2) {
  c$3.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$2(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$4(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$2({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$2(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$7(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$5.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$5.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$2(o2) instanceof HTMLElement && T2.add(o$2(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$3(T2, d2) || (s3.value ? P(o$2(o2), u$7(f2.value, { [d$3.Forwards]: () => N$5.Next, [d$3.Backwards]: () => N$5.Previous }) | N$5.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$4(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$2({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value) return;
      let f2 = o$2(n2);
      f2 && t$4(() => {
        var F2, H2;
        if (!i2.value) return;
        let a2 = o$2(r2), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$5.First | N$5.NoScroll) === T$3.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$2(n2) instanceof HTMLElement && m2.add(o$2(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$3(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$3(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$2(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$4();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a$1 = a$2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$4(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$1.subscribe(() => {
  let e2 = a$1.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a$1.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$1.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a2, n2) {
  let i2 = m$2(a$1), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a$1.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a$1.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$2(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$2({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$4(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$2(t2)) || e2.contains((a2 = (f2 = o$2(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$2, { features: u$4.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h$1(f$2, { features: u$4.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k$1({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$6()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$3({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$4(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U$2(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U$2(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $$1 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$4(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2) return;
    let a2 = o$2(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$3({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$3({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T$1(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T$1), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$6()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$4(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k2 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z2 } = N$2({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee2 = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te2 = computed(() => N2 || U2.value ? false : k2.value), le2 = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le2, te2);
  let ae2 = computed(() => w2.value ? true : k2.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae2), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$7(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re2 = k$1({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k2.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o$1.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue2 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue2, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$2(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re2.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($$1, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue$1, { initialFocus: a2, containers: B2, features: k2.value ? u$7(ee2.value, { parent: ue$1.features.RestoreFocus, leaf: ue$1.features.All & ~ue$1.features.FocusLock }) : ue$1.features.None }, () => h$1(X, {}, () => A$3({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$4.RenderStrategy | N$4.Static, name: "Dialog" })))))), h$1(Z2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$6()}`, s3 = T$1("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$3({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$6()}`, n2 = T$1("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($$1, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge$1 = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$6()}`, n2 = T$1("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$6()}`, s3 = T$1("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$3({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O$1(t2) {
  let r2 = inject(T, null);
  if (r2 === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O$1), o2;
  }
  return r2;
}
let k = Symbol("DisclosurePanelContext");
function U$1() {
  return inject(k, null);
}
let N$1 = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t2, { slots: r2, attrs: o2 }) {
  let s3 = ref(t2.defaultOpen ? 0 : 1), e2 = ref(null), i2 = ref(null), n2 = { buttonId: ref(`headlessui-disclosure-button-${i$6()}`), panelId: ref(`headlessui-disclosure-panel-${i$6()}`), disclosureState: s3, panel: e2, button: i2, toggleDisclosure() {
    s3.value = u$7(s3.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s3.value !== 1 && (s3.value = 1);
  }, close(l2) {
    n2.closeDisclosure();
    let a2 = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o$2(l2) : o$2(n2.button) : o$2(n2.button))();
    a2 == null || a2.focus();
  } };
  return provide(T, n2), t$2(computed(() => u$7(s3.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let { defaultOpen: l2, ...a2 } = t2, c2 = { open: s3.value === 0, close: n2.close };
    return A$3({ theirProps: a2, ourProps: {}, slot: c2, slots: r2, attrs: o2, name: "Disclosure" });
  };
} }), Q$1 = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o2, expose: s3 }) {
  let e2 = O$1("DisclosureButton"), i2 = U$1(), n2 = computed(() => i2 === null ? false : i2.value === e2.panelId.value);
  onMounted(() => {
    n2.value || t2.id !== null && (e2.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n2.value || (e2.buttonId.value = null);
  });
  let l2 = ref(null);
  s3({ el: l2, $el: l2 }), n2.value || watchEffect(() => {
    e2.button.value = l2.value;
  });
  let a2 = s$3(computed(() => ({ as: t2.as, type: r2.type })), l2);
  function c2() {
    var u2;
    t2.disabled || (n2.value ? (e2.toggleDisclosure(), (u2 = o$2(e2.button)) == null || u2.focus()) : e2.toggleDisclosure());
  }
  function D(u2) {
    var S2;
    if (!t2.disabled) if (n2.value) switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e2.toggleDisclosure(), (S2 = o$2(e2.button)) == null || S2.focus();
        break;
    }
    else switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e2.toggleDisclosure();
        break;
    }
  }
  function v2(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e2.disclosureState.value === 0 }, { id: S2, ...K } = t2, M2 = n2.value ? { ref: l2, type: a2.value, onClick: c2, onKeydown: D } : { id: (C = e2.buttonId.value) != null ? C : S2, ref: l2, type: a2.value, "aria-expanded": e2.disclosureState.value === 0, "aria-controls": e2.disclosureState.value === 0 || o$2(e2.panel) ? e2.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c2, onKeydown: D, onKeyup: v2 };
    return A$3({ ourProps: M2, theirProps: K, slot: u2, attrs: r2, slots: o2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o2, expose: s3 }) {
  let e2 = O$1("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e2.panelId.value = t2.id);
  }), onUnmounted(() => {
    e2.panelId.value = null;
  }), s3({ el: e2.panel, $el: e2.panel }), provide(k, e2.panelId);
  let i2 = l$2(), n2 = computed(() => i2 !== null ? (i2.value & i$1.Open) === i$1.Open : e2.disclosureState.value === 0);
  return () => {
    var v2;
    let l2 = { open: e2.disclosureState.value === 0, close: e2.close }, { id: a2, ...c2 } = t2, D = { id: (v2 = e2.panelId.value) != null ? v2 : a2, ref: e2.panel };
    return A$3({ ourProps: D, theirProps: c2, slot: l2, attrs: r2, slots: o2, features: N$4.RenderStrategy | N$4.Static, visible: n2.value, name: "DisclosurePanel" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement)) return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g$2(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string") return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$2(a2);
    if (!e2) return "";
    let l2 = e2.innerText;
    if (t2.value === l2) return r2.value;
    let u2 = g$2(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Z = ((i2) => (i2[i2.Open = 0] = "Open", i2[i2.Closed = 1] = "Closed", i2))(Z || {}), ee = ((i2) => (i2[i2.Pointer = 0] = "Pointer", i2[i2.Other = 1] = "Other", i2))(ee || {});
function te(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let A = Symbol("MenuContext");
function O(o2) {
  let M2 = inject(A, null);
  if (M2 === null) {
    let i2 = new Error(`<${o2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i2, O), i2;
  }
  return M2;
}
let ge$2 = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(o2, { slots: M2, attrs: i2 }) {
  let I2 = ref(1), p2 = ref(null), e2 = ref(null), r2 = ref([]), f2 = ref(""), d2 = ref(null), g2 = ref(1);
  function b2(t2 = (a2) => a2) {
    let a2 = d2.value !== null ? r2.value[d2.value] : null, n2 = O$2(t2(r2.value.slice()), (v2) => o$2(v2.dataRef.domRef)), s3 = a2 ? n2.indexOf(a2) : null;
    return s3 === -1 && (s3 = null), { items: n2, activeItemIndex: s3 };
  }
  let l2 = { menuState: I2, buttonRef: p2, itemsRef: e2, items: r2, searchQuery: f2, activeItemIndex: d2, activationTrigger: g2, closeMenu: () => {
    I2.value = 1, d2.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t2, a2, n2) {
    let s3 = b2(), v2 = f$1(t2 === c$1.Specific ? { focus: c$1.Specific, id: a2 } : { focus: t2 }, { resolveItems: () => s3.items, resolveActiveIndex: () => s3.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.disabled });
    f2.value = "", d2.value = v2, g2.value = n2 != null ? n2 : 1, r2.value = s3.items;
  }, search(t2) {
    let n2 = f2.value !== "" ? 0 : 1;
    f2.value += t2.toLowerCase();
    let v2 = (d2.value !== null ? r2.value.slice(d2.value + n2).concat(r2.value.slice(0, d2.value + n2)) : r2.value).find((h2) => h2.dataRef.textValue.startsWith(f2.value) && !h2.dataRef.disabled), u2 = v2 ? r2.value.indexOf(v2) : -1;
    u2 === -1 || u2 === d2.value || (d2.value = u2, g2.value = 1);
  }, clearSearch() {
    f2.value = "";
  }, registerItem(t2, a2) {
    let n2 = b2((s3) => [...s3, { id: t2, dataRef: a2 }]);
    r2.value = n2.items, d2.value = n2.activeItemIndex, g2.value = 1;
  }, unregisterItem(t2) {
    let a2 = b2((n2) => {
      let s3 = n2.findIndex((v2) => v2.id === t2);
      return s3 !== -1 && n2.splice(s3, 1), n2;
    });
    r2.value = a2.items, d2.value = a2.activeItemIndex, g2.value = 1;
  } };
  return w$2([p2, e2], (t2, a2) => {
    var n2;
    l2.closeMenu(), w$4(a2, h.Loose) || (t2.preventDefault(), (n2 = o$2(p2)) == null || n2.focus());
  }, computed(() => I2.value === 0)), provide(A, l2), t$2(computed(() => u$7(I2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let t2 = { open: I2.value === 0, close: l2.closeMenu };
    return A$3({ ourProps: {}, theirProps: o2, slot: t2, slots: M2, attrs: i2, name: "Menu" });
  };
} }), Se$2 = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: M2, slots: i2, expose: I2 }) {
  var b2;
  let p2 = (b2 = o2.id) != null ? b2 : `headlessui-menu-button-${i$6()}`, e2 = O("MenuButton");
  I2({ el: e2.buttonRef, $el: e2.buttonRef });
  function r2(l2) {
    switch (l2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.First);
        });
        break;
      case o$1.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.Last);
        });
        break;
    }
  }
  function f2(l2) {
    switch (l2.key) {
      case o$1.Space:
        l2.preventDefault();
        break;
    }
  }
  function d2(l2) {
    o2.disabled || (e2.menuState.value === 0 ? (e2.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$2(e2.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e2.openMenu(), te(() => {
      var t2;
      return (t2 = o$2(e2.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let g2 = s$3(computed(() => ({ as: o2.as, type: M2.type })), e2.buttonRef);
  return () => {
    var n2;
    let l2 = { open: e2.menuState.value === 0 }, { ...t2 } = o2, a2 = { ref: e2.buttonRef, id: p2, type: g2.value, "aria-haspopup": "menu", "aria-controls": (n2 = o$2(e2.itemsRef)) == null ? void 0 : n2.id, "aria-expanded": e2.menuState.value === 0, onKeydown: r2, onKeyup: f2, onClick: d2 };
    return A$3({ ourProps: a2, theirProps: t2, slot: l2, attrs: M2, slots: i2, name: "MenuButton" });
  };
} }), Me = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: M2, slots: i2, expose: I2 }) {
  var l2;
  let p2 = (l2 = o2.id) != null ? l2 : `headlessui-menu-items-${i$6()}`, e2 = O("MenuItems"), r2 = ref(null);
  I2({ el: e2.itemsRef, $el: e2.itemsRef }), i$2({ container: computed(() => o$2(e2.itemsRef)), enabled: computed(() => e2.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function f2(t2) {
    var a2;
    switch (r2.value && clearTimeout(r2.value), t2.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "") return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeItemIndex.value !== null) {
          let s3 = e2.items.value[e2.activeItemIndex.value];
          (a2 = o$2(s3.dataRef.domRef)) == null || a2.click();
        }
        e2.closeMenu(), _(o$2(e2.buttonRef));
        break;
      case o$1.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Next);
      case o$1.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => {
          var n2;
          return (n2 = o$2(e2.buttonRef)) == null ? void 0 : n2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => v$2(o$2(e2.buttonRef), t2.shiftKey ? N$5.Previous : N$5.Next));
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), r2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  function d2(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  let g2 = l$2(), b2 = computed(() => g2 !== null ? (g2.value & i$1.Open) === i$1.Open : e2.menuState.value === 0);
  return () => {
    var s3, v2;
    let t2 = { open: e2.menuState.value === 0 }, { ...a2 } = o2, n2 = { "aria-activedescendant": e2.activeItemIndex.value === null || (s3 = e2.items.value[e2.activeItemIndex.value]) == null ? void 0 : s3.id, "aria-labelledby": (v2 = o$2(e2.buttonRef)) == null ? void 0 : v2.id, id: p2, onKeydown: f2, onKeyup: d2, role: "menu", tabIndex: 0, ref: e2.itemsRef };
    return A$3({ ourProps: n2, theirProps: a2, slot: t2, attrs: M2, slots: i2, features: N$4.RenderStrategy | N$4.Static, visible: b2.value, name: "MenuItems" });
  };
} }), be = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: M2, attrs: i2, expose: I2 }) {
  var v2;
  let p$1 = (v2 = o2.id) != null ? v2 : `headlessui-menu-item-${i$6()}`, e2 = O("MenuItem"), r2 = ref(null);
  I2({ el: r2, $el: r2 });
  let f2 = computed(() => e2.activeItemIndex.value !== null ? e2.items.value[e2.activeItemIndex.value].id === p$1 : false), d2 = p(r2), g2 = computed(() => ({ disabled: o2.disabled, get textValue() {
    return d2();
  }, domRef: r2 }));
  onMounted(() => e2.registerItem(p$1, g2)), onUnmounted(() => e2.unregisterItem(p$1)), watchEffect(() => {
    e2.menuState.value === 0 && f2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var u2, h2;
      return (h2 = (u2 = o$2(r2)) == null ? void 0 : u2.scrollIntoView) == null ? void 0 : h2.call(u2, { block: "nearest" });
    });
  });
  function b2(u2) {
    if (o2.disabled) return u2.preventDefault();
    e2.closeMenu(), _(o$2(e2.buttonRef));
  }
  function l2() {
    if (o2.disabled) return e2.goToItem(c$1.Nothing);
    e2.goToItem(c$1.Specific, p$1);
  }
  let t2 = u$5();
  function a2(u2) {
    t2.update(u2);
  }
  function n2(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value || e2.goToItem(c$1.Specific, p$1, 0));
  }
  function s3(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value && e2.goToItem(c$1.Nothing));
  }
  return () => {
    let { disabled: u2, ...h2 } = o2, C = { active: f2.value, disabled: u2, close: e2.closeMenu };
    return A$3({ ourProps: { id: p$1, ref: r2, role: "menuitem", tabIndex: u2 === true ? void 0 : -1, "aria-disabled": u2 === true ? true : void 0, onClick: b2, onFocus: l2, onPointerenter: a2, onMouseenter: a2, onPointermove: n2, onMousemove: n2, onPointerleave: s3, onMouseleave: s3 }, theirProps: { ...i2, ...h2 }, slot: C, attrs: i2, slots: M2, name: "MenuItem" });
  };
} });
var Se$1 = ((s3) => (s3[s3.Open = 0] = "Open", s3[s3.Closed = 1] = "Closed", s3))(Se$1 || {});
let re = Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s3 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, U), s3;
  }
  return P2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge$1() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s3, expose: h$2 }) {
  var u2;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t2 = ref(1), o2 = ref(null), y2 = ref(null), v2 = ref(null), m2 = ref(null), b2 = computed(() => i$4(f2)), E2 = computed(() => {
    var L2, $2;
    if (!o$2(o2) || !o$2(m2)) return false;
    for (let x2 of (void 0).querySelectorAll("body > *")) if (Number(x2 == null ? void 0 : x2.contains(o$2(o2))) ^ Number(x2 == null ? void 0 : x2.contains(o$2(m2)))) return true;
    let e2 = E$3(), r2 = e2.indexOf(o$2(o2)), l2 = (r2 + e2.length - 1) % e2.length, g2 = (r2 + 1) % e2.length, G = e2[l2], C = e2[g2];
    return !((L2 = o$2(m2)) != null && L2.contains(G)) && !(($2 = o$2(m2)) != null && $2.contains(C));
  }), a2 = { popoverState: t2, buttonId: ref(null), panelId: ref(null), panel: m2, button: o2, isPortalled: E2, beforePanelSentinel: y2, afterPanelSentinel: v2, togglePopover() {
    t2.value = u$7(t2.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t2.value !== 1 && (t2.value = 1);
  }, close(e2) {
    a2.closePopover();
    let r2 = (() => e2 ? e2 instanceof HTMLElement ? e2 : e2.value instanceof HTMLElement ? o$2(e2) : o$2(a2.button) : o$2(a2.button))();
    r2 == null || r2.focus();
  } };
  provide(re, a2), t$2(computed(() => u$7(t2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let S2 = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
    a2.closePopover();
  } }, c2 = ae(), I2 = c2 == null ? void 0 : c2.registerPopover, [F2, w2] = q(), i2 = N$2({ mainTreeNodeRef: c2 == null ? void 0 : c2.mainTreeNodeRef, portals: F2, defaultContainers: [o2, m2] });
  function p2() {
    var e2, r2, l2, g2;
    return (g2 = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? g2 : ((e2 = b2.value) == null ? void 0 : e2.activeElement) && (((r2 = o$2(o2)) == null ? void 0 : r2.contains(b2.value.activeElement)) || ((l2 = o$2(m2)) == null ? void 0 : l2.contains(b2.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S2)), E$1((u2 = b2.value) == null ? void 0 : u2.defaultView, "focus", (e2) => {
    var r2, l2;
    e2.target !== void 0 && e2.target instanceof HTMLElement && t2.value === 0 && (p2() || o2 && m2 && (i2.contains(e2.target) || (r2 = o$2(a2.beforePanelSentinel)) != null && r2.contains(e2.target) || (l2 = o$2(a2.afterPanelSentinel)) != null && l2.contains(e2.target) || a2.closePopover()));
  }, true), w$2(i2.resolveContainers, (e2, r2) => {
    var l2;
    a2.closePopover(), w$4(r2, h.Loose) || (e2.preventDefault(), (l2 = o$2(o2)) == null || l2.focus());
  }, computed(() => t2.value === 0)), () => {
    let e2 = { open: t2.value === 0, close: a2.close };
    return h$1(Fragment, [h$1(w2, {}, () => A$3({ theirProps: { ...d2, ...s3 }, ourProps: { ref: f2 }, slot: e2, slots: P2, attrs: s3, name: "Popover" })), h$1(i2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
  var u2;
  let f2 = (u2 = d2.id) != null ? u2 : `headlessui-popover-button-${i$6()}`, t2 = U("PopoverButton"), o2 = computed(() => i$4(t2.button));
  h2({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = f2;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let y2 = ae(), v2 = y2 == null ? void 0 : y2.closeOthers, m2 = ge$1(), b2 = computed(() => m2 === null ? false : m2.value === t2.panelId.value), E2 = ref(null), a2 = `headlessui-focus-sentinel-${i$6()}`;
  b2.value || watchEffect(() => {
    t2.button.value = o$2(E2);
  });
  let S2 = s$3(computed(() => ({ as: d2.as, type: P$1.type })), E2);
  function c2(e2) {
    var r2, l2, g2, G, C;
    if (b2.value) {
      if (t2.popoverState.value === 1) return;
      switch (e2.key) {
        case o$1.Space:
        case o$1.Enter:
          e2.preventDefault(), (l2 = (r2 = e2.target).click) == null || l2.call(r2), t2.closePopover(), (g2 = o$2(t2.button)) == null || g2.focus();
          break;
      }
    } else switch (e2.key) {
      case o$1.Space:
      case o$1.Enter:
        e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
        break;
      case o$1.Escape:
        if (t2.popoverState.value !== 0) return v2 == null ? void 0 : v2(t2.buttonId.value);
        if (!o$2(t2.button) || (G = o2.value) != null && G.activeElement && !((C = o$2(t2.button)) != null && C.contains(o2.value.activeElement))) return;
        e2.preventDefault(), e2.stopPropagation(), t2.closePopover();
        break;
    }
  }
  function I2(e2) {
    b2.value || e2.key === o$1.Space && e2.preventDefault();
  }
  function F2(e2) {
    var r2, l2;
    d2.disabled || (b2.value ? (t2.closePopover(), (r2 = o$2(t2.button)) == null || r2.focus()) : (e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o$2(t2.button)) == null || l2.focus()));
  }
  function w2(e2) {
    e2.preventDefault(), e2.stopPropagation();
  }
  let i2 = n();
  function p2() {
    let e2 = o$2(t2.panel);
    if (!e2) return;
    function r2() {
      u$7(i2.value, { [d$3.Forwards]: () => P(e2, N$5.First), [d$3.Backwards]: () => P(e2, N$5.Last) }) === T$3.Error && P(E$3().filter((g2) => g2.dataset.headlessuiFocusGuard !== "true"), u$7(i2.value, { [d$3.Forwards]: N$5.Next, [d$3.Backwards]: N$5.Previous }), { relativeTo: o$2(t2.button) });
    }
    r2();
  }
  return () => {
    let e2 = t2.popoverState.value === 0, r2 = { open: e2 }, { ...l2 } = d2, g2 = b2.value ? { ref: E2, type: S2.value, onKeydown: c2, onClick: F2 } : { ref: E2, id: f2, type: S2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$2(t2.panel) ? t2.panelId.value : void 0, disabled: d2.disabled ? true : void 0, onKeydown: c2, onKeyup: I2, onClick: F2, onMousedown: w2 };
    return h$1(Fragment, [A$3({ ourProps: g2, theirProps: { ...P$1, ...l2 }, slot: r2, attrs: P$1, slots: s3, name: "PopoverButton" }), e2 && !b2.value && t2.isPortalled.value && h$1(f$2, { id: a2, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p2 })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s3 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${i$6()}`, t2 = l$2(), o2 = computed(() => t2 !== null ? (t2.value & i$1.Open) === i$1.Open : h2.popoverState.value === 0);
  function y2() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A$3({ ourProps: { id: f2, "aria-hidden": true, onClick: y2 }, theirProps: d2, slot: v2, attrs: P2, slots: s3, features: N$4.RenderStrategy | N$4.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
  var w2;
  let f2 = (w2 = d2.id) != null ? w2 : `headlessui-popover-panel-${i$6()}`, { focus: t2 } = d2, o2 = U("PopoverPanel"), y2 = computed(() => i$4(o2.panel)), v2 = `headlessui-focus-sentinel-before-${i$6()}`, m2 = `headlessui-focus-sentinel-after-${i$6()}`;
  h2({ el: o2.panel, $el: o2.panel }), onMounted(() => {
    o2.panelId.value = f2;
  }), onUnmounted(() => {
    o2.panelId.value = null;
  }), provide(ue, o2.panelId), watchEffect(() => {
    var p2, u2;
    if (!t2 || o2.popoverState.value !== 0 || !o2.panel) return;
    let i2 = (p2 = y2.value) == null ? void 0 : p2.activeElement;
    (u2 = o$2(o2.panel)) != null && u2.contains(i2) || P(o$2(o2.panel), N$5.First);
  });
  let b2 = l$2(), E2 = computed(() => b2 !== null ? (b2.value & i$1.Open) === i$1.Open : o2.popoverState.value === 0);
  function a2(i2) {
    var p2, u2;
    switch (i2.key) {
      case o$1.Escape:
        if (o2.popoverState.value !== 0 || !o$2(o2.panel) || y2.value && !((p2 = o$2(o2.panel)) != null && p2.contains(y2.value.activeElement))) return;
        i2.preventDefault(), i2.stopPropagation(), o2.closePopover(), (u2 = o$2(o2.button)) == null || u2.focus();
        break;
    }
  }
  function S2(i2) {
    var u2, e2, r2, l2, g2;
    let p2 = i2.relatedTarget;
    p2 && o$2(o2.panel) && ((u2 = o$2(o2.panel)) != null && u2.contains(p2) || (o2.closePopover(), ((r2 = (e2 = o$2(o2.beforePanelSentinel)) == null ? void 0 : e2.contains) != null && r2.call(e2, p2) || (g2 = (l2 = o$2(o2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g2.call(l2, p2)) && p2.focus({ preventScroll: true })));
  }
  let c2 = n();
  function I2() {
    let i2 = o$2(o2.panel);
    if (!i2) return;
    function p2() {
      u$7(c2.value, { [d$3.Forwards]: () => {
        var e2;
        P(i2, N$5.First) === T$3.Error && ((e2 = o$2(o2.afterPanelSentinel)) == null || e2.focus());
      }, [d$3.Backwards]: () => {
        var u2;
        (u2 = o$2(o2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p2();
  }
  function F2() {
    let i2 = o$2(o2.panel);
    if (!i2) return;
    function p2() {
      u$7(c2.value, { [d$3.Forwards]: () => {
        let u2 = o$2(o2.button), e2 = o$2(o2.panel);
        if (!u2) return;
        let r2 = E$3(), l2 = r2.indexOf(u2), g2 = r2.slice(0, l2 + 1), C = [...r2.slice(l2 + 1), ...g2];
        for (let L2 of C.slice()) if (L2.dataset.headlessuiFocusGuard === "true" || e2 != null && e2.contains(L2)) {
          let $2 = C.indexOf(L2);
          $2 !== -1 && C.splice($2, 1);
        }
        P(C, N$5.First, { sorted: false });
      }, [d$3.Backwards]: () => {
        var e2;
        P(i2, N$5.Previous) === T$3.Error && ((e2 = o$2(o2.button)) == null || e2.focus());
      } });
    }
    p2();
  }
  return () => {
    let i2 = { open: o2.popoverState.value === 0, close: o2.close }, { focus: p2, ...u2 } = d2, e2 = { ref: o2.panel, id: f2, onKeydown: a2, onFocusout: t2 && o2.popoverState.value === 0 ? S2 : void 0, tabIndex: -1 };
    return A$3({ ourProps: e2, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s3, default: (...r2) => {
      var l2;
      return [h$1(Fragment, [E2.value && o2.isPortalled.value && h$1(f$2, { id: v2, ref: o2.beforePanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 }), (l2 = s3.default) == null ? void 0 : l2.call(s3, ...r2), E2.value && o2.isPortalled.value && h$1(f$2, { id: m2, ref: o2.afterPanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F2 })])];
    } }, features: N$4.RenderStrategy | N$4.Static, visible: E2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s3, expose: h2 }) {
  let f2 = ref(null), t2 = shallowRef([]), o2 = computed(() => i$4(f2)), y2 = v();
  h2({ el: f2, $el: f2 });
  function v$12(a2) {
    let S2 = t2.value.indexOf(a2);
    S2 !== -1 && t2.value.splice(S2, 1);
  }
  function m2(a2) {
    return t2.value.push(a2), () => {
      v$12(a2);
    };
  }
  function b2() {
    var c2;
    let a2 = o2.value;
    if (!a2) return false;
    let S2 = a2.activeElement;
    return (c2 = o$2(f2)) != null && c2.contains(S2) ? true : t2.value.some((I2) => {
      var F2, w2;
      return ((F2 = a2.getElementById(I2.buttonId.value)) == null ? void 0 : F2.contains(S2)) || ((w2 = a2.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S2));
    });
  }
  function E2(a2) {
    for (let S2 of t2.value) S2.buttonId.value !== a2 && S2.close();
  }
  return provide(le, { registerPopover: m2, unregisterPopover: v$12, isFocusWithinPopoverGroup: b2, closeOthers: E2, mainTreeNodeRef: y2.mainTreeNodeRef }), () => h$1(Fragment, [A$3({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s3, name: "PopoverGroup" }), h$1(y2.MainTreeNode)]);
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called) return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$4();
  if (!e2) return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$4(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$7(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$4.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2()) return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = i$6(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$7(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z2 = g(e2.leaveFrom), ee2 = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$2(d2);
        if (o2 instanceof Comment && o2.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te2(o2) {
    let E2 = I2.value && !A2.value, p2 = o$2(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M2, X, _2, (V2) => {
      b2.value = false, V2 === g$1.Finished && l2();
    }) : L$1(p2, Y, Z2, ee2, _2, (V2) => {
      b2.value = false, V2 === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te2(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$7(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V2, enterTo: Ce, entered: ye2, leave: be2, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re2 = { ...U2, ...A2.value && v2.value && c$3.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$3({ theirProps: re2, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$2(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
function getWindow(node) {
  if (node == null) {
    return void 0;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || void 0 : void 0;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (void 0).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (void 0).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : void 0, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (void 0).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve2) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve2(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve2) {
          instance.forceUpdate();
          resolve2(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = void 0;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const config$g = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
const _sfc_main$z = defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: Ge,
    HPopoverPanel: je
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: () => config$g.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$g.default.closeDelay
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config$g, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container2] = usePopper(popper2.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a2, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a2 = props.popper) == null ? void 0 : _a2.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !popoverApi.value || props.mode === "click") {
        return;
      }
      if (popoverApi.value.popoverState === 0) {
        popoverApi.value.closePopover();
      } else {
        popoverApi.value.togglePopover();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        if (popoverApi.value.togglePopover) {
          popoverApi.value.togglePopover();
        }
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        if (popoverApi.value.closePopover) {
          popoverApi.value.closePopover();
        }
        closeTimeout = null;
      }, props.closeDelay);
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!popoverApi.value) return;
      if (oldValue === void 0 || newValue === oldValue) return;
      if (newValue) {
        popoverApi.value.popoverState = 0;
      } else {
        popoverApi.value.closePopover();
      }
    });
    watch(() => {
      var _a2;
      return (_a2 = popoverApi.value) == null ? void 0 : _a2.popoverState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container: container2,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.overlay) {
          _push2(`<template>`);
          if (open) {
            _push2(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</template>`);
        } else {
          _push2(`<!---->`);
        }
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          _ctx.overlay ? (openBlock(), createBlock(Transition, mergeProps({
            key: 0,
            appear: ""
          }, _ctx.ui.overlay.transition), {
            default: withCtx(() => [
              open ? (openBlock(), createBlock("div", {
                key: 0,
                class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
              }, null, 2)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040)) : createCommentVNode("", true),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HPopoverPanel, {
                    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "panel", {
                        open,
                        close
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])
              ]),
              _: 2
            }, 1040)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __nuxt_component_0$c = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$j]]), { __name: "UPopover" });
const _sfc_main$y = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q2) => {
        if (q2.type === "added") {
          filtered.push(q2.key);
        }
        return filtered;
      }, []);
      return isEqual$1(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual$1(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$e;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate: navigate2, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : void 0
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : void 0,
              onClick: (e2) => !isExternal && !_ctx.disabled && navigate2(e2)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __nuxt_component_0$b = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$i]]), { __name: "ULink" });
async function loadIcon(name, timeout) {
  if (!name)
    return null;
  const _icon = getIcon(name);
  if (_icon)
    return _icon;
  let timeoutWarn;
  const load = loadIcon$1(name).catch(() => {
    console.warn(`[Icon] failed to load icon \`${name}\``);
    return null;
  });
  if (timeout > 0)
    await Promise.race([
      load,
      new Promise((resolve2) => {
        timeoutWarn = setTimeout(() => {
          console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
          resolve2();
        }, timeout);
      })
    ]).finally(() => clearTimeout(timeoutWarn));
  else
    await load;
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a2, b2) => b2.length - a2.length);
  return computed(() => {
    var _a2;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a2 = options.aliases) == null ? void 0 : _a2[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c2) => resolved.startsWith(c2 + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize ?? options.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    onServerPrefetch(async () => {
      var _a2;
      {
        const configs = (/* @__PURE__ */ useRuntimeConfig()).icon || {};
        if (!((_a2 = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a2.includes(cssClass.value))) {
          const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
          if (!icon)
            return null;
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
          return null;
        }
      }
    });
    return () => h$1("span", { class: ["iconify", cssClass.value] });
  }
});
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value, options.fetchTimeout),
          { deep: false }
        );
      }
    }
    return () => h$1(Icon, {
      icon: name.value,
      ssr: true,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize ?? options.customize
    }, slots);
  }
});
const __nuxt_component_0$a = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const runtimeOptions = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a2;
        return ((_a2 = nuxtApp.vueApp) == null ? void 0 : _a2.component(name.value)) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || runtimeOptions.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || runtimeOptions.customize;
    return () => h$1(
      component.value,
      {
        ...runtimeOptions.attrs,
        name: name.value,
        class: runtimeOptions.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false,
      default: null
    }
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$a;
  _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$props, _attrs), null, _parent));
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$h]]), { __name: "UIcon" });
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "HeaderPopoverLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "p-2 space-y-1",
      base: "block px-2 py-1.5 rounded-md flex items-start gap-1.5",
      active: "bg-gray-100/50 dark:bg-gray-800/50 text-primary",
      inactive: "hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
      label: "font-semibold text-sm/6 inline-block relative",
      description: "text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2",
      icon: {
        base: "w-4 h-4 flex-shrink-0 mt-1"
      },
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("header.popover.links", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      if ((_a2 = __props.links) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(ui).wrapper
        }, unref(attrs), _attrs))}><!--[-->`);
        ssrRenderList(__props.links, (link, index2) => {
          _push(ssrRenderComponent(_component_ULink, mergeProps({
            key: index2,
            ref_for: true
          }, unref(getULinkProps)(link), {
            class: unref(ui).base,
            "active-class": unref(ui).active,
            "inactive-class": unref(ui).inactive,
            onClick: link.click
          }), {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.icon) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: link.icon,
                    class: unref(twMerge$1)(unref(ui).icon.base, link.iconClass)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p class="${ssrRenderClass([link.target === "_blank" && "pr-3"])}"${_scopeId}><span class="${ssrRenderClass(unref(ui).label)}"${_scopeId}>${ssrInterpolate(link.label)} `);
                if (link.target === "_blank") {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
                if (link.description) {
                  _push2(`<span class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>${ssrInterpolate(link.description)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</p>`);
              } else {
                return [
                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: link.icon,
                    class: unref(twMerge$1)(unref(ui).icon.base, link.iconClass)
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                  createVNode("p", {
                    class: [link.target === "_blank" && "pr-3"]
                  }, [
                    createVNode("span", {
                      class: unref(ui).label
                    }, [
                      createTextVNode(toDisplayString$1(link.label) + " ", 1),
                      link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: unref(ui).externalIcon.name,
                        class: unref(ui).externalIcon.base
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ], 2),
                    link.description ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: unref(ui).description
                    }, toDisplayString$1(link.description), 3)) : createCommentVNode("", true)
                  ], 2)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/header/HeaderPopoverLinks.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __nuxt_component_3$1 = Object.assign(_sfc_main$w, { __name: "UHeaderPopoverLinks" });
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "HeaderLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "flex items-center gap-x-8",
      base: "text-sm/6 font-semibold flex items-center gap-1",
      active: "text-primary",
      inactive: "hover:text-primary",
      trailingIcon: {
        name: appConfig2.ui.icons.chevron,
        base: "w-5 h-5 transform transition-transform duration-200 flex-shrink-0",
        active: "rotate-180",
        inactive: ""
      },
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
      },
      default: {
        popover: {
          mode: "hover",
          openDelay: 0,
          ui: {
            width: "max-w-[16rem]"
          }
        }
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("header.links", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UPopover = __nuxt_component_0$c;
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UHeaderPopoverLinks = __nuxt_component_3$1;
      if ((_a2 = __props.links) == null ? void 0 : _a2.length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({
          class: unref(ui).wrapper
        }, unref(attrs), _attrs))}><!--[-->`);
        ssrRenderList(__props.links, (link, index2) => {
          var _a3;
          _push(`<li class="relative">`);
          if ((_a3 = link.children) == null ? void 0 : _a3.length) {
            _push(ssrRenderComponent(_component_UPopover, mergeProps({ ref_for: true }, unref(ui).default.popover), {
              default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, unref(getULinkProps)(link), {
                    class: unref(ui).base,
                    "active-class": unref(ui).active,
                    "inactive-class": unref(ui).inactive,
                    onClick: link.click
                  }), {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, "label", { link }, () => {
                          _push3(`${ssrInterpolate(link.label)}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: unref(ui).trailingIcon.name,
                          class: [unref(ui).trailingIcon.base, open ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "label", { link }, () => [
                            createTextVNode(toDisplayString$1(link.label), 1)
                          ]),
                          createVNode(_component_UIcon, {
                            name: unref(ui).trailingIcon.name,
                            class: [unref(ui).trailingIcon.base, open ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                          }, null, 8, ["name", "class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_ULink, mergeProps({ ref_for: true }, unref(getULinkProps)(link), {
                      class: unref(ui).base,
                      "active-class": unref(ui).active,
                      "inactive-class": unref(ui).inactive,
                      onClick: link.click
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "label", { link }, () => [
                          createTextVNode(toDisplayString$1(link.label), 1)
                        ]),
                        createVNode(_component_UIcon, {
                          name: unref(ui).trailingIcon.name,
                          class: [unref(ui).trailingIcon.base, open ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                        }, null, 8, ["name", "class"])
                      ]),
                      _: 2
                    }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                  ];
                }
              }),
              panel: withCtx(({ close }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  ssrRenderSlot(_ctx.$slots, "panel", {
                    link,
                    close
                  }, () => {
                    _push2(ssrRenderComponent(_component_UHeaderPopoverLinks, {
                      links: link.children,
                      onClick: close
                    }, null, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "panel", {
                      link,
                      close
                    }, () => [
                      createVNode(_component_UHeaderPopoverLinks, {
                        links: link.children,
                        onClick: close
                      }, null, 8, ["links", "onClick"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, unref(getULinkProps)(link), {
              class: unref(ui).base,
              "active-class": unref(ui).active,
              "inactive-class": unref(ui).inactive,
              onClick: link.click
            }), {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  ssrRenderSlot(_ctx.$slots, "label", { link }, () => {
                    _push2(`${ssrInterpolate(link.label)}`);
                  }, _push2, _parent2, _scopeId);
                  if (link.target === "_blank") {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: unref(ui).externalIcon.name,
                      class: unref(ui).externalIcon.base
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    renderSlot(_ctx.$slots, "label", { link }, () => [
                      createTextVNode(toDisplayString$1(link.label), 1)
                    ]),
                    link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: unref(ui).externalIcon.name,
                      class: unref(ui).externalIcon.base
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/header/HeaderLinks.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __nuxt_component_2$5 = Object.assign(_sfc_main$v, { __name: "UHeaderLinks" });
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  return {
    size: computed(() => {
      if (!(groupContext == null ? void 0 : groupContext.value)) return props.size;
      return (groupContext == null ? void 0 : groupContext.value.size) ?? ui.value.default.size;
    }),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1) return ui.value.rounded;
      if (groupContext.value.children.length === 1) return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0) return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1) return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$f = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$u = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3,
    ULink: __nuxt_component_0$b
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$f.default.size,
      validator(value) {
        return Object.keys(config$f.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$f.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$f.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$f.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$f.variant),
          ...Object.values(config$f.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$f.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
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
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$f);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a2, _b;
      const variant = ((_b = (_a2 = ui.value.color) == null ? void 0 : _a2[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$b;
  const _component_UIcon = __nuxt_component_1$3;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString$1(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __nuxt_component_0$9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$g]]), { __name: "UButton" });
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AsideLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0",
      base: "flex items-center gap-1.5 lg:gap-2 group",
      active: "text-primary font-semibold",
      inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium",
      icon: {
        wrapper: "rounded-md p-1 inline-flex ring-inset ring-1",
        base: "w-4 h-4 flex-shrink-0",
        active: "bg-primary ring-primary text-background",
        inactive: "bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background"
      },
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
      },
      label: "text-sm/6 relative"
    }));
    const props = __props;
    const { ui, attrs } = useUI("aside.links", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      if ((_a2 = __props.links) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(ui).wrapper
        }, unref(attrs), _attrs))}><!--[-->`);
        ssrRenderList(__props.links, (link, index2) => {
          _push(ssrRenderComponent(_component_ULink, mergeProps({
            key: index2,
            ref_for: true
          }, unref(getULinkProps)(link), {
            class: unref(ui).base,
            "active-class": unref(ui).active,
            "inactive-class": unref(ui).inactive,
            onClick: link.click
          }), {
            default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.icon) {
                  _push2(`<div class="${ssrRenderClass([unref(ui).icon.wrapper, link.active || isActive ? unref(ui).icon.active : unref(ui).icon.inactive])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: link.icon,
                    class: unref(twMerge$1)(unref(ui).icon.base, link.iconClass)
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="${ssrRenderClass(unref(ui).label)}"${_scopeId}>${ssrInterpolate(link.label)} `);
                if (link.target === "_blank") {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                return [
                  link.icon ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: [unref(ui).icon.wrapper, link.active || isActive ? unref(ui).icon.active : unref(ui).icon.inactive]
                  }, [
                    createVNode(_component_UIcon, {
                      name: link.icon,
                      class: unref(twMerge$1)(unref(ui).icon.base, link.iconClass)
                    }, null, 8, ["name", "class"])
                  ], 2)) : createCommentVNode("", true),
                  createVNode("span", {
                    class: unref(ui).label
                  }, [
                    createTextVNode(toDisplayString$1(link.label) + " ", 1),
                    link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: unref(ui).externalIcon.name,
                      class: unref(ui).externalIcon.base
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/aside/AsideLinks.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __nuxt_component_4$5 = Object.assign(_sfc_main$t, { __name: "UAsideLinks" });
const getSlotChildrenText = (children) => children.map((node) => {
  if (!node.children || typeof node.children === "string") return node.children || "";
  else if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
  else if (node.children.default) return getSlotChildrenText(node.children.default());
}).join("");
const _useUIState = () => {
  const route = useRoute();
  const isHeaderDialogOpen = ref(false);
  const isContentSearchModalOpen = ref(false);
  const isDashboardSidebarSlideoverOpen = ref(false);
  const isDashboardSearchModalOpen = ref(false);
  function toggleContentSearch() {
    if (isHeaderDialogOpen.value) {
      isHeaderDialogOpen.value = false;
      setTimeout(() => {
        isContentSearchModalOpen.value = !isContentSearchModalOpen.value;
      }, 0);
      return;
    }
    isContentSearchModalOpen.value = !isContentSearchModalOpen.value;
  }
  function toggleDashboardSearch() {
    if (isDashboardSidebarSlideoverOpen.value) {
      isDashboardSidebarSlideoverOpen.value = false;
      setTimeout(() => {
        isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value;
      }, 200);
      return;
    }
    isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value;
  }
  watch(() => route.path, () => {
    isDashboardSidebarSlideoverOpen.value = false;
  });
  return {
    isHeaderDialogOpen,
    isContentSearchModalOpen,
    /**
     * @deprecated Use the new {@link isDashboardSidebarSlideoverOpen} ref instead.
     */
    isDashboardSidebarSlidoverOpen: isDashboardSidebarSlideoverOpen,
    isDashboardSidebarSlideoverOpen,
    isDashboardSearchModalOpen,
    toggleContentSearch,
    toggleDashboardSearch
  };
};
const useUIState = createSharedComposable(_useUIState);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String,
      default: "/"
    },
    title: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50",
      container: "flex items-center justify-between gap-3 h-[--header-height]",
      left: "lg:flex-1 flex items-center gap-1.5",
      center: "hidden lg:flex",
      right: "flex items-center justify-end lg:flex-1 gap-1.5",
      logo: "flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5",
      panel: {
        wrapper: "fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden",
        header: "px-4 sm:px-6",
        body: "px-4 sm:px-6 pt-3 pb-6"
      },
      button: {
        base: "lg:hidden",
        icon: {
          open: appConfig2.ui.icons.menu,
          close: appConfig2.ui.icons.close
        }
      }
    }));
    const props = __props;
    const route = useRoute();
    const slots = useSlots();
    const { $ui } = useNuxtApp();
    const { isHeaderDialogOpen } = useUIState();
    const { ui, attrs } = useUI("header", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const ariaLabel = computed(() => (props.title || slots.logo && getSlotChildrenText(slots.logo()) || "Logo").trim());
    watch(() => route.fullPath, () => {
      isHeaderDialogOpen.value = false;
    });
    s$5(() => useId());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$d;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UHeaderLinks = __nuxt_component_2$5;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UAsideLinks = __nuxt_component_4$5;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).left)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: __props.to,
                "aria-label": unref(ariaLabel),
                class: unref(ui).logo
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
                      _push3(`${ssrInterpolate(__props.title || "Nuxt UI Pro")}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "logo", {}, () => [
                        createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "center", {}, () => {
              _push2(ssrRenderComponent(_component_UHeaderLinks, {
                links: __props.links,
                class: unref(ui).center
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(unref(ui).right)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
              var _a2, _b;
              if (__props.links.length || _ctx.$slots.panel) {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({
                  class: unref(ui).button.base
                }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                  "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                  icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                  onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).left
              }, [
                renderSlot(_ctx.$slots, "left", {}, () => [
                  createVNode(_component_NuxtLink, {
                    to: __props.to,
                    "aria-label": unref(ariaLabel),
                    class: unref(ui).logo
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "logo", {}, () => [
                        createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["to", "aria-label", "class"])
                ])
              ], 2),
              renderSlot(_ctx.$slots, "center", {}, () => [
                createVNode(_component_UHeaderLinks, {
                  links: __props.links,
                  class: unref(ui).center
                }, null, 8, ["links", "class"])
              ]),
              createVNode("div", {
                class: unref(ui).right
              }, [
                renderSlot(_ctx.$slots, "right"),
                renderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
                  var _a2, _b;
                  return [
                    __props.links.length || _ctx.$slots.panel ? (openBlock(), createBlock(_component_UButton, mergeProps({
                      key: 0,
                      class: unref(ui).button.base
                    }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                      "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                      icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                      onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                    }), null, 16, ["class", "aria-label", "icon", "onClick"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(Se), {
        show: unref(isHeaderDialogOpen),
        as: "template"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ye), {
              as: "div",
              onClose: ($event) => isHeaderDialogOpen.value = false
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Ge$1), {
                    class: unref(ui).panel.wrapper
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass([unref(ui).panel.header, unref(ui).wrapper])}"${_scopeId3}><div class="${ssrRenderClass(unref(ui).container)}"${_scopeId3}><div class="${ssrRenderClass(unref(ui).left)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "left", {}, () => {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: __props.to,
                            "aria-label": unref(ariaLabel),
                            class: unref(ui).logo
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
                                  _push5(`${ssrInterpolate(__props.title || "Nuxt UI Pro")}`);
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "logo", {}, () => [
                                    createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        ssrRenderSlot(_ctx.$slots, "center", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`<div class="${ssrRenderClass(unref(ui).right)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push4, _parent4, _scopeId3);
                        ssrRenderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
                          var _a2, _b;
                          _push4(ssrRenderComponent(_component_UButton, mergeProps({
                            class: unref(ui).button.base
                          }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                            "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                            icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                            onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                          }), null, _parent4, _scopeId3));
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></div></div><div class="${ssrRenderClass(unref(ui).panel.body)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "panel", {}, () => {
                          _push4(ssrRenderComponent(_component_UAsideLinks, { links: __props.links }, null, _parent4, _scopeId3));
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: [unref(ui).panel.header, unref(ui).wrapper]
                          }, [
                            createVNode("div", {
                              class: unref(ui).container
                            }, [
                              createVNode("div", {
                                class: unref(ui).left
                              }, [
                                renderSlot(_ctx.$slots, "left", {}, () => [
                                  createVNode(_component_NuxtLink, {
                                    to: __props.to,
                                    "aria-label": unref(ariaLabel),
                                    class: unref(ui).logo
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "logo", {}, () => [
                                        createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["to", "aria-label", "class"])
                                ])
                              ], 2),
                              renderSlot(_ctx.$slots, "center"),
                              createVNode("div", {
                                class: unref(ui).right
                              }, [
                                renderSlot(_ctx.$slots, "right"),
                                renderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
                                  var _a2, _b;
                                  return [
                                    createVNode(_component_UButton, mergeProps({
                                      class: unref(ui).button.base
                                    }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                                      "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                                      icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                                      onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                                    }), null, 16, ["class", "aria-label", "icon", "onClick"])
                                  ];
                                })
                              ], 2)
                            ], 2)
                          ], 2),
                          createVNode("div", {
                            class: unref(ui).panel.body
                          }, [
                            renderSlot(_ctx.$slots, "panel", {}, () => [
                              createVNode(_component_UAsideLinks, { links: __props.links }, null, 8, ["links"])
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Ge$1), {
                      class: unref(ui).panel.wrapper
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: [unref(ui).panel.header, unref(ui).wrapper]
                        }, [
                          createVNode("div", {
                            class: unref(ui).container
                          }, [
                            createVNode("div", {
                              class: unref(ui).left
                            }, [
                              renderSlot(_ctx.$slots, "left", {}, () => [
                                createVNode(_component_NuxtLink, {
                                  to: __props.to,
                                  "aria-label": unref(ariaLabel),
                                  class: unref(ui).logo
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "logo", {}, () => [
                                      createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["to", "aria-label", "class"])
                              ])
                            ], 2),
                            renderSlot(_ctx.$slots, "center"),
                            createVNode("div", {
                              class: unref(ui).right
                            }, [
                              renderSlot(_ctx.$slots, "right"),
                              renderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
                                var _a2, _b;
                                return [
                                  createVNode(_component_UButton, mergeProps({
                                    class: unref(ui).button.base
                                  }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                                    "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                                    icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                                    onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                                  }), null, 16, ["class", "aria-label", "icon", "onClick"])
                                ];
                              })
                            ], 2)
                          ], 2)
                        ], 2),
                        createVNode("div", {
                          class: unref(ui).panel.body
                        }, [
                          renderSlot(_ctx.$slots, "panel", {}, () => [
                            createVNode(_component_UAsideLinks, { links: __props.links }, null, 8, ["links"])
                          ])
                        ], 2)
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ye), {
                as: "div",
                onClose: ($event) => isHeaderDialogOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(Ge$1), {
                    class: unref(ui).panel.wrapper
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: [unref(ui).panel.header, unref(ui).wrapper]
                      }, [
                        createVNode("div", {
                          class: unref(ui).container
                        }, [
                          createVNode("div", {
                            class: unref(ui).left
                          }, [
                            renderSlot(_ctx.$slots, "left", {}, () => [
                              createVNode(_component_NuxtLink, {
                                to: __props.to,
                                "aria-label": unref(ariaLabel),
                                class: unref(ui).logo
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "logo", {}, () => [
                                    createTextVNode(toDisplayString$1(__props.title || "Nuxt UI Pro"), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["to", "aria-label", "class"])
                            ])
                          ], 2),
                          renderSlot(_ctx.$slots, "center"),
                          createVNode("div", {
                            class: unref(ui).right
                          }, [
                            renderSlot(_ctx.$slots, "right"),
                            renderSlot(_ctx.$slots, "panel-button", { open: unref(isHeaderDialogOpen) }, () => {
                              var _a2, _b;
                              return [
                                createVNode(_component_UButton, mergeProps({
                                  class: unref(ui).button.base
                                }, (_b = (_a2 = unref($ui)) == null ? void 0 : _a2.button) == null ? void 0 : _b.secondary, {
                                  "aria-label": `${unref(isHeaderDialogOpen) ? "Close" : "Open"} Menu`,
                                  icon: unref(isHeaderDialogOpen) ? unref(ui).button.icon.close : unref(ui).button.icon.open,
                                  onClick: ($event) => isHeaderDialogOpen.value = !unref(isHeaderDialogOpen)
                                }), null, 16, ["class", "aria-label", "icon", "onClick"])
                              ];
                            })
                          ], 2)
                        ], 2)
                      ], 2),
                      createVNode("div", {
                        class: unref(ui).panel.body
                      }, [
                        renderSlot(_ctx.$slots, "panel", {}, () => [
                          createVNode(_component_UAsideLinks, { links: __props.links }, null, 8, ["links"])
                        ])
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/header/Header.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __nuxt_component_0$8 = Object.assign(_sfc_main$s, { __name: "UHeader" });
const NuxtLinkLocale = /* @__PURE__ */ defineNuxtLink({ ...nuxtLinkDefaults, componentName: "NuxtLinkLocale" });
const __nuxt_component_2$4 = defineComponent({
  name: "NuxtLinkLocale",
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath2 = useLocalePath();
    const resolvedPath = computed(() => {
      const destination = props.to ?? props.href;
      return destination != null ? localePath2(destination, props.locale) : destination;
    });
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = props.to ?? props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps2 = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => h$1(NuxtLinkLocale, getNuxtLinkProps2(), slots.default);
  }
});
const config$e = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$r = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$e.default.size,
      validator(value) {
        return Object.keys(config$e.size).includes(value);
      }
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
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$e);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_0$7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$f]]), { __name: "UKbd" });
const config$d = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$q = defineComponent({
  components: {
    UKbd: __nuxt_component_0$7
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: () => config$d.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$d.default.closeDelay
    },
    popper: {
      type: Object,
      default: () => ({})
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
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config$d, toRef(props, "class"));
    const popper2 = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container2] = usePopper(popper2.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    const isVisible = computed(() => !!(useSlots().text || props.text));
    function onMouseEnter() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container: container2,
      open,
      onMouseEnter,
      onMouseLeave,
      isVisible
    };
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a2;
  const _component_UKbd = __nuxt_component_0$7;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent && _ctx.isVisible) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if ((_a2 = _ctx.shortcuts) == null ? void 0 : _a2.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">·</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString$1(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_0$6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$e]]), { __name: "UTooltip" });
const config$c = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$p = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$c.default.icon
    },
    size: {
      type: String,
      default: () => config$c.default.size,
      validator(value) {
        return Object.keys(config$c.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$c.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$c.default.chipPosition,
      validator(value) {
        return Object.keys(config$c.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
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
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$c);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __nuxt_component_4$4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$d]]), { __name: "UAvatar" });
const config$b = mergeConfig(appConfig.ui.strategy, appConfig.ui.chip, chip);
const _sfc_main$o = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config$b.default.size,
      validator(value) {
        return Object.keys(config$b.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$b.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    position: {
      type: String,
      default: () => config$b.default.position,
      validator(value) {
        return Object.keys(config$b.position).includes(value);
      }
    },
    text: {
      type: [String, Number],
      default: null
    },
    inset: {
      type: Boolean,
      default: () => config$b.default.inset
    },
    show: {
      type: Boolean,
      default: true
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
  setup(props) {
    const { ui, attrs } = useUI("chip", toRef(props, "ui"), config$b, toRef(props, "class"));
    const chipClass = computed(() => {
      return twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.position[props.position],
        props.inset ? null : ui.value.translate[props.position],
        ui.value.background.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      chipClass
    };
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.show) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">`);
    ssrRenderSlot(_ctx.$slots, "content", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Chip.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_4$3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$c]]), { __name: "UChip" });
const config$a = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$n = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config$a.default.size,
      validator(value) {
        return Object.keys(config$a.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$a.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$a.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$a.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$a.variant),
          ...Object.values(config$a.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
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
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config$a);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.trailing || props.trailingIcon;
    });
    const badgeClass = computed(() => {
      var _a2, _b;
      const variant = ((_b = (_a2 = ui.value.color) == null ? void 0 : _a2[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    const leadingIconName = computed(() => {
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      badgeClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
    if (_ctx.isLeading && _ctx.leadingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if (_ctx.label) {
      _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
    if (_ctx.isTrailing && _ctx.trailingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$b]]), { __name: "UBadge" });
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardSidebarLinks",
  __ssrInlineRender: true,
  props: {
    draggable: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 0
    },
    links: {
      type: Array,
      default: () => []
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
  emits: ["update:links"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "relative !min-h-[auto] !min-w-[auto]",
      container: "!overflow-visible",
      base: "group relative flex items-center gap-1.5 px-2.5 py-1.5 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      active: "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",
      inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
      static: "text-gray-900 dark:text-white cursor-auto",
      icon: {
        base: "flex-shrink-0 w-5 h-5 relative",
        active: "text-gray-900 dark:text-white",
        inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
      },
      trailingIcon: {
        name: appConfig2.ui.icons.chevron,
        base: "ml-auto w-5 h-5 transform transition-transform duration-200 flex-shrink-0",
        active: "",
        inactive: "-rotate-90"
      },
      avatar: {
        base: "flex-shrink-0",
        size: "2xs"
      },
      chip: {
        base: "flex-shrink-0 mx-2.5",
        size: "sm"
      },
      badge: {
        base: "flex-shrink-0 ml-auto relative rounded",
        color: "gray",
        variant: "solid",
        size: "xs"
      },
      label: "text-sm truncate relative",
      dot: {
        wrapper: "w-px h-full mx-[9.5px] bg-gray-200 dark:bg-gray-700 relative",
        after: "after:absolute after:z-[1] after:w-px after:h-full after:bg-gray-200 after:dark:bg-gray-700 after:transform after:translate-y-full after:inset-x-0",
        base: "w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        active: "bg-gray-900 dark:bg-white",
        inactive: "bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-700 dark:group-hover:bg-gray-200"
      },
      tooltip: {
        strategy: "override",
        transition: {
          enterActiveClass: "transition ease-out duration-200",
          enterFromClass: "opacity-0",
          enterToClass: "opacity-100",
          leaveActiveClass: "transition ease-in duration-150",
          leaveFromClass: "opacity-100",
          leaveToClass: "opacity-0"
        }
      },
      transition: {
        enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
        leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
      }
    }));
    const props = __props;
    const emit = __emit;
    let Container;
    let Draggable;
    if (props.draggable) {
      [__temp, __restore] = withAsyncContext(() => import('vue3-smooth-dnd').then(({ Container: _Container, Draggable: _Draggable }) => {
        Container = _Container;
        Draggable = _Draggable;
      }).catch()), await __temp, __restore();
    }
    const isDragging = ref(false);
    const { ui, attrs } = useUI("dashboard.sidebar.links", toRef(props, "ui"), config2, toRef(props, "class"), true);
    function onEnter(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(_el) {
      const el = _el;
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(_el) {
      const el = _el;
      el.style.height = "auto";
    }
    function onLeave(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onDrop(results) {
      const { removedIndex, addedIndex, payload } = results;
      const links = [...props.links];
      if (removedIndex === null && addedIndex === null) {
        return;
      }
      let itemToAdd = payload;
      if (removedIndex !== null) {
        itemToAdd = links.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        links.splice(addedIndex, 0, itemToAdd);
      }
      emit("update:links", links);
    }
    function fixActionRestriction() {
      (void 0).body.classList.remove(
        "smooth-dnd-no-user-select",
        "smooth-dnd-disable-touch-action"
      );
    }
    s$5(() => useId());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0$6;
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UAvatar = __nuxt_component_4$4;
      const _component_UChip = __nuxt_component_4$3;
      const _component_UBadge = __nuxt_component_1$2;
      const _component_UDashboardSidebarLinks = __nuxt_component_4$2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.draggable && unref(Container) ? unref(Container) : "ul"), mergeProps({
        class: unref(ui).wrapper
      }, {
        ...__props.draggable ? { orientation: "vertical", behaviour: "contain", lockAxis: "y", tag: "ul" } : {},
        ...unref(attrs)
      }, {
        onDragStart: ($event) => isDragging.value = true,
        onDragEnd: ($event) => isDragging.value = false,
        onDrop,
        onTouchend: fixActionRestriction
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.links, (link, index2) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.draggable && unref(Draggable) ? unref(Draggable) : "li"), {
                key: index2,
                tag: "li",
                class: unref(ui).container
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(((_a2 = link.children) == null ? void 0 : _a2.length) ? unref(N$1) : "div"), {
                      "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                      as: "div"
                    }, {
                      default: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(((_a3 = link.children) == null ? void 0 : _a3.length) ? unref(Q$1) : "div"), { as: "template" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    var _a4, _b3, _c2, _d;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }, _push7, _parent7, _scopeId6) => {
                                          var _a5, _b4;
                                          if (_push7) {
                                            ssrRenderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a6;
                                              if (link.icon) {
                                                _push7(ssrRenderComponent(_component_UIcon, {
                                                  name: link.icon,
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, _parent7, _scopeId6));
                                              } else if (link.avatar) {
                                                _push7(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, _parent7, _scopeId6));
                                              } else if (link.chip) {
                                                _push7(ssrRenderComponent(_component_UChip, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, _parent7, _scopeId6));
                                              } else if (__props.level > 0) {
                                                _push7(`<span class="${ssrRenderClass([unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after])}"${_scopeId6}><span class="${ssrRenderClass([unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive])}"${_scopeId6}></span></span>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                            ssrRenderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => {
                                              if (link.label) {
                                                _push7(`<span class="${ssrRenderClass(unref(twMerge$1)(unref(ui).label, link.labelClass))}"${_scopeId6}>`);
                                                if (isActive) {
                                                  _push7(`<span class="sr-only"${_scopeId6}> Current page: </span>`);
                                                } else {
                                                  _push7(`<!---->`);
                                                }
                                                _push7(` ${ssrInterpolate(link.label)}</span>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                            if (((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false) {
                                              _push7(ssrRenderComponent(_component_UIcon, {
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            ssrRenderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => {
                                              if (link.badge) {
                                                _push7(ssrRenderComponent(_component_UBadge, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                          } else {
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a6;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString$1(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_b4 = link.children) == null ? void 0 : _b4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_c2 = link.children) == null ? void 0 : _c2.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                          class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                          "active-class": unref(ui).active,
                                          "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_d = link.children) == null ? void 0 : _d.length) ? unref(ui).static : unref(ui).inactive,
                                          draggable: "false",
                                          onClick: link.click
                                        }), {
                                          default: withCtx(({ isActive }) => {
                                            var _a5;
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a6;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString$1(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UTooltip, mergeProps({
                                    class: "flex",
                                    popper: { placement: "right" },
                                    prevent: !link.tooltip,
                                    ui: unref(ui).tooltip,
                                    ref_for: true
                                  }, link.tooltip), {
                                    default: withCtx(() => {
                                      var _a4, _b3;
                                      return [
                                        createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                          class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                          "active-class": unref(ui).active,
                                          "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                          draggable: "false",
                                          onClick: link.click
                                        }), {
                                          default: withCtx(({ isActive }) => {
                                            var _a5;
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a6;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString$1(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["prevent", "ui"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          _push4(``);
                          if (((_b2 = link.children) == null ? void 0 : _b2.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false)) {
                            _push4(ssrRenderComponent(unref(V), {
                              static: "",
                              as: "template"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UDashboardSidebarLinks, {
                                    level: __props.level + 1,
                                    links: link.children,
                                    draggable: link.draggable,
                                    ui: unref(ui),
                                    "onUpdate:links": ($event) => emit("update:links", $event)
                                  }, createSlots({ _: 2 }, [
                                    renderList(_ctx.$slots, (_4, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push6, _parent6, _scopeId5);
                                          } else {
                                            return [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ];
                                          }
                                        })
                                      };
                                    })
                                  ]), _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UDashboardSidebarLinks, {
                                      level: __props.level + 1,
                                      links: link.children,
                                      draggable: link.draggable,
                                      ui: unref(ui),
                                      "onUpdate:links": ($event) => emit("update:links", $event)
                                    }, createSlots({ _: 2 }, [
                                      renderList(_ctx.$slots, (_4, name) => {
                                        return {
                                          name,
                                          fn: withCtx((slotData) => [
                                            renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                          ])
                                        };
                                      })
                                    ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_c = link.children) == null ? void 0 : _c.length) ? unref(Q$1) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a4, _b3;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a5;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a6;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString$1(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a4;
                                return [
                                  ((_a4 = link.children) == null ? void 0 : _a4.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_3, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      _: 2
                    }), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(((_b = link.children) == null ? void 0 : _b.length) ? unref(N$1) : "div"), {
                        "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                        as: "div"
                      }, {
                        default: withCtx((slotProps) => {
                          var _a3;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_a3 = link.children) == null ? void 0 : _a3.length) ? unref(Q$1) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a4, _b2;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b2 = link.children) == null ? void 0 : _b2.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a5;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a6;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString$1(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a4;
                                return [
                                  ((_a4 = link.children) == null ? void 0 : _a4.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_3, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }),
                        _: 2
                      }, 1032, ["default-open"]))
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index2) => {
                return openBlock(), createBlock(resolveDynamicComponent(__props.draggable && unref(Draggable) ? unref(Draggable) : "li"), {
                  key: index2,
                  tag: "li",
                  class: unref(ui).container
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(((_a2 = link.children) == null ? void 0 : _a2.length) ? unref(N$1) : "div"), {
                        "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                        as: "div"
                      }, {
                        default: withCtx((slotProps) => {
                          var _a3;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_a3 = link.children) == null ? void 0 : _a3.length) ? unref(Q$1) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a4, _b;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b = link.children) == null ? void 0 : _b.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a5;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a6;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a6 = link.children) == null ? void 0 : _a6.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge$1)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index2 < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge$1)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString$1(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a5 = link.children) == null ? void 0 : _a5.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a4;
                                return [
                                  ((_a4 = link.children) == null ? void 0 : _a4.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_22, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }),
                        _: 2
                      }, 1032, ["default-open"]))
                    ];
                  }),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/dashboard/DashboardSidebarLinks.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_4$2 = Object.assign(_sfc_main$m, { __name: "UDashboardSidebarLinks" });
const config$9 = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$l = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3,
    UAvatar: __nuxt_component_4$4
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config$9.default.size,
      validator(value) {
        return Object.keys(config$9.border.size.horizontal).includes(value) || Object.keys(config$9.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: () => config$9.default.type,
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
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
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config$9);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  const _component_UAvatar = __nuxt_component_4$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_2$3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$a]]), { __name: "UDivider" });
const _imports_0 = publicAssetsURL("/img/brand/logo.svg");
const useScrollspy = () => {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  const updateHeadings = (headings) => {
    headings.forEach((heading) => {
      if (!observer.value) {
        return;
      }
      observer.value.observe(heading);
    });
  };
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useScrollspy();
    const localePath2 = useLocalePath();
    const { t: t2 } = useI18n({
      useScope: "global"
    });
    const links = computed(() => [{
      label: t2("menus.header.home"),
      to: localePath2("/"),
      icon: "i-heroicons-home"
    }, {
      label: t2("menus.header.products.title"),
      icon: "i-heroicons-shopping-cart",
      defaultOpen: false,
      children: [{
        label: t2("menus.header.products.items.1.title"),
        to: localePath2("/products/webspace"),
        icon: "i-heroicons-cloud",
        description: t2("menus.header.products.items.1.description")
      }, {
        label: t2("menus.header.products.items.2.title"),
        to: localePath2("/products/domain"),
        icon: "i-heroicons-at-symbol",
        description: t2("menus.header.products.items.2.description")
      }, {
        label: t2("menus.header.products.items.3.title"),
        to: localePath2("/products/vps-root"),
        icon: "i-heroicons-server",
        description: t2("menus.header.products.items.3.description")
      }, {
        label: t2("menus.header.products.items.4.title"),
        to: localePath2("/products/dedicated"),
        icon: "i-heroicons-server-stack",
        description: t2("menus.header.products.items.4.description")
      }, {
        label: t2("menus.header.products.items.5.title"),
        to: localePath2("/products/lic-cert"),
        icon: "i-heroicons-key",
        description: t2("menus.header.products.items.5.description")
      }]
    }, {
      label: t2("menus.header.news"),
      to: localePath2("/newsroom"),
      icon: "i-heroicons-newspaper"
    }, {
      label: t2("menus.header.contact"),
      to: localePath2("/contact"),
      icon: "i-heroicons-question-mark-circle"
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = __nuxt_component_0$8;
      const _component_NuxtLinkLocale = __nuxt_component_2$4;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UDashboardSidebarLinks = __nuxt_component_4$2;
      const _component_UDivider = __nuxt_component_2$3;
      _push(ssrRenderComponent(_component_UHeader, mergeProps({ links: unref(links) }, _attrs), {
        left: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLinkLocale, {
              to: "/",
              class: "flex items-center"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="Key2Host Logo" width="25px" height="25px"${_scopeId2}><span class="font-bold ml-2"${_scopeId2}>Key2Host</span>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Key2Host Logo",
                      width: "25px",
                      height: "25px"
                    }),
                    createVNode("span", { class: "font-bold ml-2" }, "Key2Host")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLinkLocale, {
                to: "/",
                class: "flex items-center"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Key2Host Logo",
                    width: "25px",
                    height: "25px"
                  }),
                  createVNode("span", { class: "font-bold ml-2" }, "Key2Host")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://cp.key2host.com/",
              target: "_blank"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.startnow"),
                    color: "white",
                    variant: "ghost",
                    "trailing-icon": "i-heroicons-arrow-right-20-solid",
                    class: "hidden lg:flex"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: unref(t2)("menus.header.buttons.startnow"),
                      color: "white",
                      variant: "ghost",
                      "trailing-icon": "i-heroicons-arrow-right-20-solid",
                      class: "hidden lg:flex"
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "https://cp.key2host.com/",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.startnow"),
                    color: "white",
                    variant: "ghost",
                    "trailing-icon": "i-heroicons-arrow-right-20-solid",
                    class: "hidden lg:flex"
                  }, null, 8, ["label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        panel: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardSidebarLinks, { links: unref(links) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDivider, { class: "my-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://auth.key2host.com/login",
              target: "_blank"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.login"),
                    color: "white",
                    block: "",
                    class: "mb-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: unref(t2)("menus.header.buttons.login"),
                      color: "white",
                      block: "",
                      class: "mb-3"
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://auth.key2host.com/signup",
              target: "_blank"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.signup"),
                    block: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: unref(t2)("menus.header.buttons.signup"),
                      block: ""
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardSidebarLinks, { links: unref(links) }, null, 8, ["links"]),
              createVNode(_component_UDivider, { class: "my-6" }),
              createVNode(_component_NuxtLink, {
                to: "https://auth.key2host.com/login",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.login"),
                    color: "white",
                    block: "",
                    class: "mb-3"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "https://auth.key2host.com/signup",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: unref(t2)("menus.header.buttons.signup"),
                    block: ""
                  }, null, 8, ["label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$5 = Object.assign(_sfc_main$k, { __name: "AppHeader" });
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Main",
  __ssrInlineRender: true,
  props: {
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
    const config2 = {
      wrapper: "min-h-[calc(100vh-var(--header-height))]"
    };
    const props = __props;
    const { ui, attrs } = useUI("main", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/main/Main.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$j, { __name: "UMain" });
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h$1(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2$2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h$1(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          {
            vnode = h$1(Suspense, {
              suspensible: true
            }, {
              default: () => {
                const providerVNode = h$1(RouteProvider, {
                  key: key || void 0,
                  vnode: slots.default ? h$1(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || void 0,
                  vnodeRef: pageRef
                });
                return providerVNode;
              }
            });
            return vnode;
          }
        }
      });
    };
  }
});
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index2 = newRoute.matched.findIndex((m2) => {
    var _a2;
    return ((_a2 = m2.components) == null ? void 0 : _a2.default) === (Component == null ? void 0 : Component.type);
  });
  return index2 < newRoute.matched.length - 1;
}
const config$8 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$i = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge$1,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$8, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$9]]), { __name: "UModal" });
const config$7 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$h = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$7);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$8]]), { __name: "UCard" });
const config$6 = mergeConfig(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
const _sfc_main$g = defineComponent({
  components: {
    HMenu: ge$2,
    HMenuButton: Se$2,
    HMenuItems: Me,
    HMenuItem: be,
    UIcon: __nuxt_component_1$3,
    UAvatar: __nuxt_component_4$4,
    UKbd: __nuxt_component_0$7
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: () => config$6.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$6.default.closeDelay
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("dropdown", toRef(props, "ui"), config$6, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container2] = usePopper(popper2.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a2, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a2 = props.popper) == null ? void 0 : _a2.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !menuApi.value || props.mode === "click") {
        return;
      }
      if (menuApi.value.menuState === 0) {
        menuApi.value.closeMenu();
      } else {
        menuApi.value.openMenu();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        if (menuApi.value.openMenu) {
          menuApi.value.openMenu();
        }
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        if (menuApi.value.closeMenu) {
          menuApi.value.closeMenu();
        }
        closeTimeout = null;
      }, props.closeDelay);
    }
    function onClick(e2, item, { href, navigate: navigate2, close, isExternal }) {
      if (item.click) {
        item.click(e2);
      }
      if (href && !isExternal) {
        navigate2(e2);
        close();
      }
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!menuApi.value) return;
      if (oldValue === void 0 || newValue === oldValue) return;
      if (newValue) {
        menuApi.value.openMenu();
      } else {
        menuApi.value.closeMenu();
      }
    });
    watch(() => {
      var _a2;
      return (_a2 = menuApi.value) == null ? void 0 : _a2.menuState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    const NuxtLink = __nuxt_component_0$e;
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container: container2,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave,
      onClick,
      getNuxtLinkProps,
      twMerge,
      twJoin,
      NuxtLink
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HMenu = resolveComponent("HMenu");
  const _component_HMenuButton = resolveComponent("HMenuButton");
  const _component_HMenuItems = resolveComponent("HMenuItems");
  const _component_NuxtLink = __nuxt_component_0$e;
  const _component_HMenuItem = resolveComponent("HMenuItem");
  const _component_UIcon = __nuxt_component_1$3;
  const _component_UAvatar = __nuxt_component_4$4;
  const _component_UKbd = __nuxt_component_0$7;
  _push(ssrRenderComponent(_component_HMenu, mergeProps({
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HMenuButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open && _ctx.items.length) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HMenuItems, {
            class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (subItems, index2) => {
                  _push3(`<div class="${ssrRenderClass(_ctx.ui.padding)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(subItems, (item, subIndex) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({
                      key: subIndex,
                      ref_for: true
                    }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                      default: withCtx(({ href, target, rel, navigate: navigate2, isExternal, isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_HMenuItem, {
                            disabled: item.disabled
                          }, {
                            default: withCtx(({ active, disabled: itemDisabled, close }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate: navigate2, close, isExternal })
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a2;
                                        if (item.icon) {
                                          _push6(ssrRenderComponent(_component_UIcon, {
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, _parent6, _scopeId5));
                                        } else if (item.avatar) {
                                          _push6(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.item.label, item.labelClass))}"${_scopeId5}>${ssrInterpolate(item.label)}</span>`);
                                        if ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) {
                                          _push6(`<span class="${ssrRenderClass(_ctx.ui.item.shortcuts)}"${_scopeId5}><!--[-->`);
                                          ssrRenderList(item.shortcuts, (shortcut) => {
                                            _push6(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                                              default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(shortcut)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString$1(shortcut), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]--></span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      }, _push6, _parent6, _scopeId5);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a2;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                              key: 1,
                                              ref_for: true
                                            }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString$1(item.label), 3),
                                            ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString$1(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                    href: !itemDisabled ? href : void 0,
                                    rel,
                                    target,
                                    class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                    onClick: ($event) => _ctx.onClick($event, item, { href, navigate: navigate2, close, isExternal })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a2;
                                        return [
                                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                            key: 0,
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                            key: 1,
                                            ref_for: true
                                          }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, 16, ["class"])) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                          }, toDisplayString$1(item.label), 3),
                                          ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: _ctx.ui.item.shortcuts
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                              return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString$1(shortcut), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ], 2)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate: navigate2, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a2;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                          key: 1,
                                          ref_for: true
                                        }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString$1(item.label), 3),
                                        ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString$1(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index2) => {
                    return openBlock(), createBlock("div", {
                      key: index2,
                      class: _ctx.ui.padding
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                        return openBlock(), createBlock(_component_NuxtLink, mergeProps({
                          key: subIndex,
                          ref_for: true
                        }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                          default: withCtx(({ href, target, rel, navigate: navigate2, isExternal, isActive }) => [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate: navigate2, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a2;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                          key: 1,
                                          ref_for: true
                                        }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString$1(item.label), 3),
                                        ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString$1(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ]),
                          _: 2
                        }, 1040);
                      }), 128))
                    ], 2);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HMenuButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          open && _ctx.items.length ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HMenuItems, {
                    class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index2) => {
                        return openBlock(), createBlock("div", {
                          key: index2,
                          class: _ctx.ui.padding
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                            return openBlock(), createBlock(_component_NuxtLink, mergeProps({
                              key: subIndex,
                              ref_for: true
                            }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                              default: withCtx(({ href, target, rel, navigate: navigate2, isExternal, isActive }) => [
                                createVNode(_component_HMenuItem, {
                                  disabled: item.disabled
                                }, {
                                  default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                    (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                      href: !itemDisabled ? href : void 0,
                                      rel,
                                      target,
                                      class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                      onClick: ($event) => _ctx.onClick($event, item, { href, navigate: navigate2, close, isExternal })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a2;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                              key: 1,
                                              ref_for: true
                                            }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString$1(item.label), 3),
                                            ((_a2 = item.shortcuts) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString$1(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                  ]),
                                  _: 2
                                }, 1032, ["disabled"])
                              ]),
                              _: 2
                            }, 1040);
                          }), 128))
                        ], 2);
                      }), 128))
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Dropdown.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$7]]), { __name: "UDropdown" });
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.accordion, accordion);
const configButton = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$f = defineComponent({
  components: {
    HDisclosure: N$1,
    HDisclosureButton: Q$1,
    HDisclosurePanel: V,
    UIcon: __nuxt_component_1$3,
    UButton: __nuxt_component_0$9
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String,
      default: () => config$5.default.openIcon
    },
    unmount: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: () => config$5.default.closeIcon
    },
    multiple: {
      type: Boolean,
      default: false
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
  emits: ["open", "close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("accordion", toRef(props, "ui"), config$5, toRef(props, "class"));
    const uiButton = computed(() => configButton);
    const buttonRefs = ref([]);
    const openedStates = computed(() => buttonRefs.value.map(({ open }) => open));
    watch(openedStates, (newValue, oldValue) => {
      for (const index2 in newValue) {
        const isOpenBefore = oldValue[index2];
        const isOpenAfter = newValue[index2];
        if (!isOpenBefore && isOpenAfter) {
          emit("open", index2);
        } else if (isOpenBefore && !isOpenAfter) {
          emit("close", index2);
        }
      }
    }, { immediate: true });
    function closeOthers(currentIndex, e2) {
      if (!props.items[currentIndex].closeOthers && props.multiple) {
        return;
      }
      buttonRefs.value.forEach((button2) => {
        if (button2.open) {
          button2.close(e2.target);
        }
      });
    }
    function onEnter(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(_el) {
      const el = _el;
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(_el) {
      const el = _el;
      el.style.height = "auto";
    }
    function onLeave(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      uiButton,
      attrs,
      buttonRefs,
      closeOthers,
      omit,
      onEnter,
      onBeforeLeave,
      onAfterEnter,
      onLeave
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HDisclosure = resolveComponent("HDisclosure");
  const _component_HDisclosureButton = resolveComponent("HDisclosureButton");
  const _component_UButton = __nuxt_component_0$9;
  const _component_UIcon = __nuxt_component_1$3;
  const _component_HDisclosurePanel = resolveComponent("HDisclosurePanel");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.items, (item, index2) => {
    _push(ssrRenderComponent(_component_HDisclosure, {
      key: index2,
      as: "div",
      class: _ctx.ui.container,
      "default-open": _ctx.defaultOpen || item.defaultOpen
    }, {
      default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_HDisclosureButton, {
            ref_for: true,
            ref: () => _ctx.buttonRefs[index2] = { open, close },
            as: "template",
            disabled: item.disabled,
            onClick: ($event) => _ctx.closeOthers(index2, $event),
            onKeydown: [($event) => _ctx.closeOthers(index2, $event), ($event) => _ctx.closeOthers(index2, $event)]
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  item,
                  index: index2,
                  open,
                  close
                }, () => {
                  _push3(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                            class: [
                              open && !_ctx.closeIcon ? "-rotate-180" : "",
                              _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                              _ctx.ui.item.icon
                            ]
                          }, null, 8, ["name", "class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default", {
                    item,
                    index: index2,
                    open,
                    close
                  }, () => [
                    createVNode(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                      trailing: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, 8, ["name", "class"])
                      ]),
                      _: 2
                    }, 1040)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(``);
          if (_ctx.unmount) {
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              unmount: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index: index2,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index: index2,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString$1(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<div style="${ssrRenderStyle(open ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              static: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index: index2,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index: index2,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString$1(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          }
        } else {
          return [
            createVNode(_component_HDisclosureButton, {
              ref_for: true,
              ref: () => _ctx.buttonRefs[index2] = { open, close },
              as: "template",
              disabled: item.disabled,
              onClick: ($event) => _ctx.closeOthers(index2, $event),
              onKeydown: [
                withKeys(($event) => _ctx.closeOthers(index2, $event), ["enter"]),
                withKeys(($event) => _ctx.closeOthers(index2, $event), ["space"])
              ]
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  item,
                  index: index2,
                  open,
                  close
                }, () => [
                  createVNode(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                        class: [
                          open && !_ctx.closeIcon ? "-rotate-180" : "",
                          _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                          _ctx.ui.item.icon
                        ]
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1040)
                ])
              ]),
              _: 2
            }, 1032, ["disabled", "onClick", "onKeydown"]),
            createVNode(Transition, mergeProps({ ref_for: true }, _ctx.ui.transition, {
              onEnter: _ctx.onEnter,
              onAfterEnter: _ctx.onAfterEnter,
              onBeforeLeave: _ctx.onBeforeLeave,
              onLeave: _ctx.onLeave
            }), {
              default: withCtx(() => [
                _ctx.unmount ? (openBlock(), createBlock(_component_HDisclosurePanel, {
                  key: 0,
                  class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                  unmount: ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index: index2,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString$1(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"])) : withDirectives((openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_HDisclosurePanel, {
                    class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index: index2,
                        open,
                        close
                      }, () => [
                        createTextVNode(toDisplayString$1(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 512)), [
                  [vShow, open]
                ])
              ]),
              _: 2
            }, 1040, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$6]]), { __name: "UAccordion" });
const useCookieNoticeStore = defineStore("cookienotice", {
  state: () => ({
    isOpen: false,
    showDetails: false,
    consent: null
  }),
  actions: {
    show() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
    },
    setConsent(type) {
      if (type === "needed") {
        this.consent = "needed";
      } else if (type === "all") {
        this.consent = "all";
      }
      this.isOpen = false;
    },
    isConsentAll() {
      return this.consent === "all";
    },
    checkConsent() {
      return this.consent != null;
    }
  },
  persist: {
    storage: storages.cookies({
      sameSite: "strict",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3)
    }),
    debug: true
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CookieNotice",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath2 = useLocalePath();
    const cookienotice = useCookieNoticeStore();
    const route = useRoute$1();
    const { t: t2 } = useI18n({
      useScope: "global"
    });
    const menu = [
      [{
        label: t2("cookienotice.details.title"),
        click: () => {
          cookienotice.showDetails = true;
        }
      }],
      [{
        label: t2("legal.notice.title"),
        to: localePath2("/legal/notice")
      }, {
        label: t2("legal.privacy.title"),
        to: localePath2("/legal/privacy")
      }]
    ];
    const neededCookies = [
      {
        label: "1. " + t2("cookienotice.details.needed.1.title"),
        content: t2("cookienotice.details.needed.1.description")
      },
      {
        label: "2. " + t2("cookienotice.details.needed.2.title"),
        content: t2("cookienotice.details.needed.2.description")
      },
      {
        label: "3. " + t2("cookienotice.details.needed.3.title"),
        content: t2("cookienotice.details.needed.3.description")
      }
    ];
    const optionalCookies = [];
    function check() {
      if (!cookienotice.checkConsent()) {
        if (route.path === "/legal/notice" || route.path === "/legal/privacy") {
          cookienotice.hide();
          return;
        }
        cookienotice.show();
      }
    }
    watch(() => route.path, () => {
      check();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_2$1;
      const _component_UCard = __nuxt_component_0$4;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UAccordion = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: unref(cookienotice).isOpen,
        "onUpdate:modelValue": ($event) => unref(cookienotice).isOpen = $event,
        "prevent-close": ""
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(cookienotice).showDetails) {
              _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between w-full"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> 🍪 ${ssrInterpolate(_ctx.$t("cookienotice.start.title"))}</h3>`);
                    _push3(ssrRenderComponent(_component_UDropdown, {
                      items: menu,
                      popper: { placement: "bottom-start" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            color: "white",
                            "trailing-icon": "i-heroicons-cog",
                            class: "opacity-75"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UButton, {
                              color: "white",
                              "trailing-icon": "i-heroicons-cog",
                              class: "opacity-75"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between w-full" }, [
                        createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " 🍪 " + toDisplayString$1(_ctx.$t("cookienotice.start.title")), 1),
                        createVNode(_component_UDropdown, {
                          items: menu,
                          popper: { placement: "bottom-start" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              color: "white",
                              "trailing-icon": "i-heroicons-cog",
                              class: "opacity-75"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                footer: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-between w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      onClick: ($event) => unref(cookienotice).setConsent("needed")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("cookienotice.start.actions.needed"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.needed")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      class: "ml-auto",
                      onClick: ($event) => unref(cookienotice).setConsent("all"),
                      autofocus: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("cookienotice.start.actions.all"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.all")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UButton, {
                          variant: "outline",
                          onClick: ($event) => unref(cookienotice).setConsent("needed")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.needed")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          class: "ml-auto",
                          onClick: ($event) => unref(cookienotice).setConsent("all"),
                          autofocus: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.all")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="max-h-[425px] overflow-y-auto"${_scopeId2}><p class="mb-4"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.start.description.1"))}</p><p class="mb-4"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.start.description.2"))}</p><p class="mb-4"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.start.description.3"))}</p><p${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.start.description.4"))}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "max-h-[425px] overflow-y-auto" }, [
                        createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.1")), 1),
                        createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.2")), 1),
                        createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.3")), 1),
                        createVNode("p", null, toDisplayString$1(_ctx.$t("cookienotice.start.description.4")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between w-full"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.details.title"))}</h3></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between w-full" }, [
                        createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString$1(_ctx.$t("cookienotice.details.title")), 1)
                      ])
                    ];
                  }
                }),
                footer: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      onClick: ($event) => unref(cookienotice).showDetails = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("cookienotice.details.actions.back"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.details.actions.back")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        onClick: ($event) => unref(cookienotice).showDetails = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.details.actions.back")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="max-h-[425px] overflow-y-auto"${_scopeId2}>`);
                    if (neededCookies && neededCookies.length != 0) {
                      _push3(`<div${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.details.needed.title"))}</h3>`);
                      _push3(ssrRenderComponent(_component_UAccordion, {
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        items: neededCookies
                      }, null, _parent3, _scopeId2));
                      _push3(`<hr class="my-4"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (optionalCookies && optionalCookies.length != 0) {
                      _push3(`<div${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.details.optional.title"))}</h3>`);
                      _push3(ssrRenderComponent(_component_UAccordion, {
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        items: optionalCookies
                      }, null, _parent3, _scopeId2));
                      _push3(`<hr class="my-4"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-center opacity-75"${_scopeId2}>${ssrInterpolate(_ctx.$t("cookienotice.details.notice"))}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "max-h-[425px] overflow-y-auto" }, [
                        neededCookies && neededCookies.length != 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2" }, toDisplayString$1(_ctx.$t("cookienotice.details.needed.title")), 1),
                          createVNode(_component_UAccordion, {
                            color: "primary",
                            variant: "soft",
                            size: "sm",
                            items: neededCookies
                          }),
                          createVNode("hr", { class: "my-4" })
                        ])) : createCommentVNode("", true),
                        optionalCookies && optionalCookies.length != 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2" }, toDisplayString$1(_ctx.$t("cookienotice.details.optional.title")), 1),
                          createVNode(_component_UAccordion, {
                            color: "primary",
                            variant: "soft",
                            size: "sm",
                            items: optionalCookies
                          }),
                          createVNode("hr", { class: "my-4" })
                        ])) : createCommentVNode("", true),
                        createVNode("p", { class: "text-center opacity-75" }, toDisplayString$1(_ctx.$t("cookienotice.details.notice")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              !unref(cookienotice).showDetails ? (openBlock(), createBlock(_component_UCard, {
                key: 0,
                ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" }
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between w-full" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " 🍪 " + toDisplayString$1(_ctx.$t("cookienotice.start.title")), 1),
                    createVNode(_component_UDropdown, {
                      items: menu,
                      popper: { placement: "bottom-start" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "white",
                          "trailing-icon": "i-heroicons-cog",
                          class: "opacity-75"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode(_component_UButton, {
                      variant: "outline",
                      onClick: ($event) => unref(cookienotice).setConsent("needed")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.needed")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      class: "ml-auto",
                      onClick: ($event) => unref(cookienotice).setConsent("all"),
                      autofocus: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.start.actions.all")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "max-h-[425px] overflow-y-auto" }, [
                    createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.1")), 1),
                    createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.2")), 1),
                    createVNode("p", { class: "mb-4" }, toDisplayString$1(_ctx.$t("cookienotice.start.description.3")), 1),
                    createVNode("p", null, toDisplayString$1(_ctx.$t("cookienotice.start.description.4")), 1)
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_UCard, {
                key: 1,
                ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" }
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between w-full" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString$1(_ctx.$t("cookienotice.details.title")), 1)
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_UButton, {
                    onClick: ($event) => unref(cookienotice).showDetails = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString$1(_ctx.$t("cookienotice.details.actions.back")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "max-h-[425px] overflow-y-auto" }, [
                    neededCookies && neededCookies.length != 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2" }, toDisplayString$1(_ctx.$t("cookienotice.details.needed.title")), 1),
                      createVNode(_component_UAccordion, {
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        items: neededCookies
                      }),
                      createVNode("hr", { class: "my-4" })
                    ])) : createCommentVNode("", true),
                    optionalCookies && optionalCookies.length != 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white mb-2" }, toDisplayString$1(_ctx.$t("cookienotice.details.optional.title")), 1),
                      createVNode(_component_UAccordion, {
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        items: optionalCookies
                      }),
                      createVNode("hr", { class: "my-4" })
                    ])) : createCommentVNode("", true),
                    createVNode("p", { class: "text-center opacity-75" }, toDisplayString$1(_ctx.$t("cookienotice.details.notice")), 1)
                  ])
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieNotice.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$e, { __name: "CookieNotice" });
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$d = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge$1,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right", "top", "bottom"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$4, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      let enterFrom, leaveTo;
      switch (props.side) {
        case "left":
          enterFrom = ui.value.translate.left;
          leaveTo = ui.value.translate.left;
          break;
        case "right":
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
          break;
        case "top":
          enterFrom = ui.value.translate.top;
          leaveTo = ui.value.translate.top;
          break;
        case "bottom":
          enterFrom = ui.value.translate.bottom;
          leaveTo = ui.value.translate.bottom;
          break;
        default:
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
      }
      return {
        ...ui.value.transition,
        enterFrom,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo
      };
    });
    const sideType = computed(() => {
      switch (props.side) {
        case "left":
          return "horizontal";
        case "right":
          return "horizontal";
        case "top":
          return "vertical";
        case "bottom":
          return "vertical";
        default:
          return "right";
      }
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      sideType,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen,
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass, {
                  class: _ctx.transitionClass.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear", "class"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear", "class"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$5]]), { __name: "USlideover" });
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup2 = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup2) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup2.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup2.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup2.name.value] = formGroup2.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup2 == null ? void 0 : formGroup2.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup2 == null ? void 0 : formGroup2.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup2 == null ? void 0 : formGroup2.eagerValidation.value)) {
      emitFormEvent("input", formGroup2 == null ? void 0 : formGroup2.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => (inputProps == null ? void 0 : inputProps.id) ?? (formGroup2 == null ? void 0 : formGroup2.inputId.value)),
    name: computed(() => (inputProps == null ? void 0 : inputProps.name) ?? (formGroup2 == null ? void 0 : formGroup2.name.value)),
    size: computed(() => {
      var _a2;
      const formGroupSize = config2.size[formGroup2 == null ? void 0 : formGroup2.size.value] ? formGroup2 == null ? void 0 : formGroup2.size.value : null;
      return (inputProps == null ? void 0 : inputProps.size) ?? formGroupSize ?? ((_a2 = config2.default) == null ? void 0 : _a2.size);
    }),
    color: computed(() => {
      var _a2;
      return ((_a2 = formGroup2 == null ? void 0 : formGroup2.error) == null ? void 0 : _a2.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$c = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$3.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$3.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$3.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$3.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$3.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$3.variant),
          ...Object.values(config$3.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config$3, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config$3);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value || (value = null);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a2, _b;
      const variant = ((_b = (_a2 = ui.value.color) == null ? void 0 : _a2[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && ui.value.file.base,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.type === "hidden" ? "hidden" : _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.type === "file" ? _ctx.attrs : { ..._ctx.attrs, value: _ctx.modelValue }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$4]]), { __name: "UInput" });
const useCartStore = defineStore("cart", {
  state: () => ({
    isSlideoverOpen: false,
    items: []
  }),
  actions: {
    openSlideover() {
      this.isSlideoverOpen = true;
    },
    closeSlideover() {
      this.isSlideoverOpen = false;
    },
    addToBasket(product) {
      if (product.type == "domain") {
        const existingDomainItem = this.items.find((item) => item.id === product.id);
        if (existingDomainItem) {
          return;
        } else {
          this.items.push({ ...product, quantity: 1 });
        }
      } else {
        const existingItem = this.items.find((item) => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.items.push({ ...product, quantity: 1 });
        }
      }
    },
    changeQuantity(productId, newQuantity) {
      const item = this.items.find((item2) => item2.id === productId);
      if (item && newQuantity == 0) {
        this.removeFromBasket(productId);
      }
      if (item && newQuantity > 10) {
        item.quantity = 1;
      }
      if (item && newQuantity > 0 && newQuantity <= 10) {
        if (item.type == "domain") return;
        item.quantity = newQuantity;
      }
    },
    removeFromBasket(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearBasket() {
      this.items = [];
    }
  },
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + item.amount * item.quantity, 0).toFixed(2)
  },
  persist: true
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const remove = (id) => {
      cart.removeFromBasket(id);
      if (isCartEmpty()) cart.closeSlideover();
    };
    const isCartEmpty = () => {
      return cart.totalItems === 0;
    };
    const isDomainOnly = () => {
      const hasDomain = cart.items.some((item) => item.type === "domain");
      const hasOtherItems = cart.items.some((item) => item.type !== "domain");
      return hasDomain && hasOtherItems;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UCard = __nuxt_component_0$4;
      const _component_UInput = __nuxt_component_7;
      const _component_NuxtLinkLocale = __nuxt_component_2$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen" }, _attrs))}><div class="flex justify-between items-center p-4 sticky top-0 z-10"><button class="text-indigo-600 hover:text-indigo-500 block sm:hidden">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-x-mark",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><h2 class="text-3xl font-bold">${ssrInterpolate(_ctx.$t("cart.title"))}</h2><button class="text-red-600 hover:text-red-500">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-trash",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mt-2 mb-8 max-w-sm overflow-y-auto w-full mx-auto" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(cart).items.length === 0) {
              _push2(`<div class="p-4 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.isEmpty"))}.</div>`);
            } else {
              _push2(`<ul${_scopeId}><!--[-->`);
              ssrRenderList(unref(cart).items, (item) => {
                _push2(`<li class="flex py-6"${_scopeId}>`);
                if (item.type == "webspace") {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-cloud",
                    class: "w-10 h-10"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (item.type == "domain") {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-at-symbol",
                    class: "w-10 h-10"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (item.type == "vps" || item.type == "root") {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-server",
                    class: "w-10 h-10"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (item.type == "dedicated") {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-server-stack",
                    class: "w-10 h-10"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (item.type == "lic") {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-key",
                    class: "w-10 h-10"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<div class="size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-question-mark-circle",
                    class: "w-5 h-5"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`<div class="ml-4 flex flex-1 flex-col"${_scopeId}><div${_scopeId}><div class="flex justify-between text-base font-medium"${_scopeId}><h3${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="ml-4"${_scopeId}>${ssrInterpolate(item.amount + " €")}</p></div><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(item.type.charAt(0).toUpperCase() + item.type.slice(1))}</p></div><div class="flex flex-1 items-end justify-between text-sm"${_scopeId}>`);
                if (item.type == "domain") {
                  _push2(ssrRenderComponent(_component_UInput, {
                    type: "number",
                    size: "xs",
                    class: "max-w-[50px]",
                    modelValue: item.quantity,
                    onKeydown: () => {
                    },
                    disabled: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UInput, {
                    type: "number",
                    min: "1",
                    max: "10",
                    size: "xs",
                    class: "max-w-[50px]",
                    modelValue: item.quantity,
                    "onUpdate:modelValue": ($event) => unref(cart).changeQuantity(item.id, $event),
                    onKeydown: () => {
                    },
                    required: ""
                  }, null, _parent2, _scopeId));
                }
                _push2(`<div class="flex"${_scopeId}><button type="button" class="font-medium text-blue-600 hover:text-blue-700"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.remove"))}</button></div></div></div></li>`);
              });
              _push2(`<!--]--></ul>`);
            }
          } else {
            return [
              unref(cart).items.length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-4 text-center"
              }, toDisplayString$1(_ctx.$t("cart.isEmpty")) + ".", 1)) : (openBlock(), createBlock("ul", { key: 1 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(cart).items, (item) => {
                  return openBlock(), createBlock("li", {
                    key: item.id,
                    class: "flex py-6"
                  }, [
                    item.type == "webspace" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-cloud",
                        class: "w-10 h-10"
                      })
                    ])) : item.type == "domain" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-at-symbol",
                        class: "w-10 h-10"
                      })
                    ])) : item.type == "vps" || item.type == "root" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-server",
                        class: "w-10 h-10"
                      })
                    ])) : item.type == "dedicated" ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-server-stack",
                        class: "w-10 h-10"
                      })
                    ])) : item.type == "lic" ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-key",
                        class: "w-10 h-10"
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 5,
                      class: "size-24 shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-question-mark-circle",
                        class: "w-5 h-5"
                      })
                    ])),
                    createVNode("div", { class: "ml-4 flex flex-1 flex-col" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-between text-base font-medium" }, [
                          createVNode("h3", null, toDisplayString$1(item.name), 1),
                          createVNode("p", { class: "ml-4" }, toDisplayString$1(item.amount + " €"), 1)
                        ]),
                        createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString$1(item.type.charAt(0).toUpperCase() + item.type.slice(1)), 1)
                      ]),
                      createVNode("div", { class: "flex flex-1 items-end justify-between text-sm" }, [
                        item.type == "domain" ? (openBlock(), createBlock(_component_UInput, {
                          key: 0,
                          type: "number",
                          size: "xs",
                          class: "max-w-[50px]",
                          modelValue: item.quantity,
                          onKeydown: withModifiers(() => {
                          }, ["prevent"]),
                          disabled: ""
                        }, null, 8, ["modelValue", "onKeydown"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 1,
                          type: "number",
                          min: "1",
                          max: "10",
                          size: "xs",
                          class: "max-w-[50px]",
                          modelValue: item.quantity,
                          "onUpdate:modelValue": ($event) => unref(cart).changeQuantity(item.id, $event),
                          onKeydown: withModifiers(() => {
                          }, ["prevent"]),
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])),
                        createVNode("div", { class: "flex" }, [
                          createVNode("button", {
                            type: "button",
                            class: "font-medium text-blue-600 hover:text-blue-700",
                            onClick: ($event) => remove(item.id)
                          }, toDisplayString$1(_ctx.$t("cart.remove")), 9, ["onClick"])
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isDomainOnly()) {
        _push(`<div class="p-4 text-center text-red-600 font-semibold">${ssrInterpolate(_ctx.$t("cart.domainerror"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-4 sticky bottom-0 w-full z-10"><div class="flex justify-between items-center text-xl font-semibold"><span>${ssrInterpolate(_ctx.$t("cart.subtotal"))}</span><span>${ssrInterpolate(unref(cart).totalPrice)} €</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, { to: "/checkout" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrIncludeBooleanAttr(isCartEmpty() || isDomainOnly()) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled:cursor-not-allowed": isCartEmpty() || isDomainOnly() }, "mt-4 w-full py-3 bg-indigo-600 text-white font-medium text-lg rounded-md hover:bg-indigo-700 disabled:bg-gray-300"])}" autofocus${_scopeId}>${ssrInterpolate(_ctx.$t("cart.checkout"))}</button>`);
          } else {
            return [
              createVNode("button", {
                disabled: isCartEmpty() || isDomainOnly(),
                onClick: ($event) => unref(cart).closeSlideover(),
                class: ["mt-4 w-full py-3 bg-indigo-600 text-white font-medium text-lg rounded-md hover:bg-indigo-700 disabled:bg-gray-300", { "disabled:cursor-not-allowed": isCartEmpty() || isDomainOnly() }],
                autofocus: ""
              }, toDisplayString$1(_ctx.$t("cart.checkout")), 11, ["disabled", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_6$1 = Object.assign(_sfc_main$b, { __name: "Cart" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FooterLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6",
      base: "text-sm",
      active: "text-gray-900 dark:text-white font-medium",
      inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("footer.links", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      if ((_a2 = __props.links) == null ? void 0 : _a2.length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({
          class: unref(ui).wrapper
        }, unref(attrs), _attrs))}><!--[-->`);
        ssrRenderList(__props.links, (link, index2) => {
          _push(`<li class="relative">`);
          _push(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, unref(getULinkProps)(link), {
            class: unref(ui).base,
            "active-class": unref(ui).active,
            "inactive-class": unref(ui).inactive,
            onClick: link.click
          }), {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)} `);
                if (link.target === "_blank") {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createTextVNode(toDisplayString$1(link.label) + " ", 1),
                  link.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/footer/FooterLinks.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$a, { __name: "UFooterLinks" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const config2 = {
      wrapper: "relative",
      top: {
        wrapper: "",
        container: "py-8 lg:py-12"
      },
      bottom: {
        wrapper: "",
        container: "py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3",
        left: "flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1",
        center: "mt-3 lg:mt-0 lg:order-2 flex items-center justify-center",
        right: "lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
      }
    };
    const props = __props;
    const { ui, attrs } = useUI("footer", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$d;
      const _component_UFooterLinks = __nuxt_component_5;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (_ctx.$slots.top) {
        _push(`<div class="${ssrRenderClass(unref(ui).top.wrapper)}">`);
        _push(ssrRenderComponent(_component_UContainer, {
          class: unref(ui).top.container
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "top")
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).bottom.wrapper)}">`);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).bottom.container
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).bottom.right)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="${ssrRenderClass(unref(ui).bottom.center)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "center", {}, () => {
              _push2(ssrRenderComponent(_component_UFooterLinks, { links: __props.links }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div><div class="${ssrRenderClass(unref(ui).bottom.left)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "left", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).bottom.right
              }, [
                renderSlot(_ctx.$slots, "right")
              ], 2),
              createVNode("div", {
                class: unref(ui).bottom.center
              }, [
                renderSlot(_ctx.$slots, "center", {}, () => [
                  createVNode(_component_UFooterLinks, { links: __props.links }, null, 8, ["links"])
                ])
              ], 2),
              createVNode("div", {
                class: unref(ui).bottom.left
              }, [
                renderSlot(_ctx.$slots, "left")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></footer>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/footer/Footer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$9, { __name: "UFooter" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FooterColumns",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "xl:grid xl:grid-cols-3 xl:gap-8",
      left: "mb-10 xl:mb-0",
      center: "flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2",
      right: "mt-10 xl:mt-0",
      label: "text-sm/6 font-semibold text-gray-900 dark:text-white",
      list: "mt-6 space-y-4",
      base: "text-sm relative",
      active: "text-gray-900 dark:text-white font-medium",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("footer.columns", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = __nuxt_component_0$b;
      const _component_UIcon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (_ctx.$slots.left) {
        _push(`<div class="${ssrRenderClass(unref(ui).left)}">`);
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).center)}"><!--[-->`);
      ssrRenderList(__props.links, (link, index2) => {
        _push(`<div><h3 class="${ssrRenderClass(unref(ui).label)}">${ssrInterpolate(link.label)}</h3><ul role="list" class="${ssrRenderClass(unref(ui).list)}"><!--[-->`);
        ssrRenderList(link.children, (subLink, subIndex) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, unref(getULinkProps)(subLink), {
            class: unref(ui).base,
            "active-class": unref(ui).active,
            "inactive-class": unref(ui).inactive,
            onClick: subLink.click
          }), {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(subLink.label)} `);
                if (subLink.target === "_blank") {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createTextVNode(toDisplayString$1(subLink.label) + " ", 1),
                  subLink.target === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: unref(ui).externalIcon.name,
                    class: unref(ui).externalIcon.base
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div>`);
      if (_ctx.$slots.right) {
        _push(`<div class="${ssrRenderClass(unref(ui).right)}">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/footer/FooterColumns.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$8, { __name: "UFooterColumns" });
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$7 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$2, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a2, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a2 = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a2.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => ui.value.size[props.size ?? config$2.default.size]);
    const inputId = ref(useId());
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]), { __name: "UFormGroup" });
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_2, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a2;
      if (mounted.value) {
        return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ColorModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    useAppConfig();
    const { $ui } = useNuxtApp();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ClientOnly = __nuxt_component_0$1;
      if (!((_a2 = unref(colorMode)) == null ? void 0 : _a2.forced)) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
          fallback: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-8 h-8"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "w-8 h-8" })
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/color-mode/ColorModeButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$6, { __name: "UColorModeButton" });
function useToast() {
  const notifications2 = useState("notifications", () => []);
  function add(notification2) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification2
    };
    const index2 = notifications2.value.findIndex((n2) => n2.id === body.id);
    if (index2 === -1) {
      notifications2.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications2.value = notifications2.value.filter((n2) => n2.id !== id);
  }
  function update(id, notification2) {
    const index2 = notifications2.value.findIndex((n2) => n2.id === id);
    if (index2 !== -1) {
      const previous = notifications2.value[index2];
      notifications2.value.splice(index2, 1, { ...previous, ...notification2 });
    }
  }
  function clear() {
    notifications2.value = [];
  }
  return {
    add,
    remove,
    update,
    clear
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath2 = useLocalePath();
    const { t: t2 } = useI18n({
      useScope: "global"
    });
    const links = [{
      label: t2("menus.footer.products.title"),
      children: [{
        label: t2("menus.footer.products.items.1"),
        to: localePath2("/products/webspace")
      }, {
        label: t2("menus.footer.products.items.2"),
        to: localePath2("/products/domain")
      }, {
        label: t2("menus.footer.products.items.3"),
        to: localePath2("/products/vps-root")
      }, {
        label: t2("menus.footer.products.items.4"),
        to: localePath2("/products/dedicated")
      }, {
        label: t2("menus.footer.products.items.5"),
        to: localePath2("/products/lic-cert")
      }]
    }, {
      label: t2("menus.footer.help.title"),
      children: [{
        label: t2("menus.footer.help.items.1"),
        to: localePath2("/contact")
      }, {
        label: t2("menus.footer.help.items.2"),
        to: localePath2("/contact/#faq")
      }, {
        label: t2("menus.footer.help.items.3"),
        to: "https://help.key2host.com",
        target: "_blank"
      }, {
        label: t2("menus.footer.help.items.4"),
        to: "https://docs.key2host.com",
        target: "_blank"
      }, {
        label: t2("menus.footer.help.items.5"),
        to: "https://status.key2host.com",
        target: "_blank"
      }]
    }, {
      label: t2("menus.footer.company.title"),
      children: [{
        label: t2("menus.footer.company.items.1"),
        to: localePath2("/newsroom")
      }, {
        label: t2("menus.footer.company.items.2"),
        to: localePath2("/company/milestones")
      }, {
        label: t2("menus.footer.company.items.3"),
        to: "https://jobs.key2host.com",
        target: "_blank"
      }, {
        label: t2("menus.footer.company.items.4"),
        to: localePath2("/company/partners")
      }]
    }];
    const Legallinks = [{
      label: t2("menus.footer.legal.notice"),
      to: localePath2("/legal/notice")
    }, {
      label: t2("menus.footer.legal.privacy"),
      to: localePath2("/legal/privacy")
    }, {
      label: t2("menus.footer.legal.tos"),
      to: localePath2("/legal/tos")
    }];
    const toast = useToast();
    const email = ref("");
    const loading = ref(false);
    function onSubmit() {
      loading.value = true;
      setTimeout(() => {
        toast.add({
          icon: "i-heroicons-check-circle",
          title: t2("menus.footer.newsletter.successModal.title"),
          description: t2("menus.footer.newsletter.successModal.message"),
          color: "green",
          timeout: 2500
        });
        loading.value = false;
      }, 2500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFooter = __nuxt_component_0$2;
      const _component_UFooterColumns = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UInput = __nuxt_component_7;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UFooterLinks = __nuxt_component_5;
      const _component_UColorModeButton = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UFooter, _attrs, {
        top: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFooterColumns, {
              links,
              class: "flex flex-col items-center"
            }, {
              right: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="flex flex-col items-center w-full max-w-lg mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: unref(t2)("menus.footer.newsletter.title"),
                    ui: { container: "mt-3" },
                    class: "text-center w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          type: "email",
                          placeholder: unref(t2)("menus.footer.newsletter.placeholder"),
                          ui: { icon: { trailing: { pointer: "" } } },
                          required: "",
                          size: "xl",
                          autocomplete: "off",
                          class: "w-full",
                          disabled: unref(loading)
                        }, {
                          trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                icon: "i-heroicons-check-circle",
                                loading: unref(loading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UButton, {
                                  type: "submit",
                                  size: "xs",
                                  icon: "i-heroicons-check-circle",
                                  loading: unref(loading)
                                }, null, 8, ["loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            type: "email",
                            placeholder: unref(t2)("menus.footer.newsletter.placeholder"),
                            ui: { icon: { trailing: { pointer: "" } } },
                            required: "",
                            size: "xl",
                            autocomplete: "off",
                            class: "w-full",
                            disabled: unref(loading)
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                icon: "i-heroicons-check-circle",
                                loading: unref(loading)
                              }, null, 8, ["loading"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "flex flex-col items-center w-full max-w-lg mx-auto",
                      onSubmit: withModifiers(onSubmit, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        label: unref(t2)("menus.footer.newsletter.title"),
                        ui: { container: "mt-3" },
                        class: "text-center w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            type: "email",
                            placeholder: unref(t2)("menus.footer.newsletter.placeholder"),
                            ui: { icon: { trailing: { pointer: "" } } },
                            required: "",
                            size: "xl",
                            autocomplete: "off",
                            class: "w-full",
                            disabled: unref(loading)
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                icon: "i-heroicons-check-circle",
                                loading: unref(loading)
                              }, null, 8, ["loading"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFooterColumns, {
                links,
                class: "flex flex-col items-center"
              }, {
                right: withCtx(() => [
                  createVNode("form", {
                    class: "flex flex-col items-center w-full max-w-lg mx-auto",
                    onSubmit: withModifiers(onSubmit, ["prevent"])
                  }, [
                    createVNode(_component_UFormGroup, {
                      label: unref(t2)("menus.footer.newsletter.title"),
                      ui: { container: "mt-3" },
                      class: "text-center w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          type: "email",
                          placeholder: unref(t2)("menus.footer.newsletter.placeholder"),
                          ui: { icon: { trailing: { pointer: "" } } },
                          required: "",
                          size: "xl",
                          autocomplete: "off",
                          class: "w-full",
                          disabled: unref(loading)
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UButton, {
                              type: "submit",
                              size: "xs",
                              icon: "i-heroicons-check-circle",
                              loading: unref(loading)
                            }, null, 8, ["loading"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        left: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFooterLinks, { links: Legallinks }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFooterLinks, { links: Legallinks })
            ];
          }
        }),
        center: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-500 dark:text-gray-400 text-sm"${_scopeId}> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Key2Host - All Rights Reserved. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-sm" }, " Copyright © " + toDisplayString$1((/* @__PURE__ */ new Date()).getFullYear()) + " Key2Host - All Rights Reserved. ", 1)
            ];
          }
        }),
        right: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UColorModeButton, { size: "sm" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "https://instagram.com/key2host",
              target: "_blank",
              icon: "i-simple-icons-instagram",
              "aria-label": "Instagram",
              color: "gray",
              variant: "ghost"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "https://facebook.com/key2hostde",
              target: "_blank",
              icon: "i-simple-icons-facebook",
              "aria-label": "Facebook",
              color: "gray",
              variant: "ghost"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "https://x.com/key2hostde",
              target: "_blank",
              icon: "i-simple-icons-x",
              "aria-label": "X",
              color: "gray",
              variant: "ghost"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "https://discord.gg/R23NYcV4P4",
              target: "_blank",
              icon: "i-simple-icons-discord",
              "aria-label": "Discord",
              color: "gray",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UColorModeButton, { size: "sm" }),
              createVNode(_component_UButton, {
                to: "https://instagram.com/key2host",
                target: "_blank",
                icon: "i-simple-icons-instagram",
                "aria-label": "Instagram",
                color: "gray",
                variant: "ghost"
              }),
              createVNode(_component_UButton, {
                to: "https://facebook.com/key2hostde",
                target: "_blank",
                icon: "i-simple-icons-facebook",
                "aria-label": "Facebook",
                color: "gray",
                variant: "ghost"
              }),
              createVNode(_component_UButton, {
                to: "https://x.com/key2hostde",
                target: "_blank",
                icon: "i-simple-icons-x",
                "aria-label": "X",
                color: "gray",
                variant: "ghost"
              }),
              createVNode(_component_UButton, {
                to: "https://discord.gg/R23NYcV4P4",
                target: "_blank",
                icon: "i-simple-icons-discord",
                "aria-label": "Discord",
                color: "gray",
                variant: "ghost"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$5, { __name: "AppFooter" });
function useTimer(cb, interval, options) {
  let timer = null;
  const { pause: tPause, resume: tResume, timestamp } = useTimestamp({ ...{}, controls: true });
  const startTime = ref(null);
  const remaining = computed(() => {
    if (!startTime.value) {
      return 0;
    }
    return interval - (timestamp.value - startTime.value);
  });
  function set(...args) {
    timer = setTimeout(() => {
      timer = null;
      startTime.value = null;
      cb(...args);
    }, remaining.value);
  }
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function start2() {
    startTime.value = Date.now();
    set();
  }
  function stop() {
    clear();
    tPause();
  }
  function pause() {
    clear();
    tPause();
  }
  function resume() {
    set();
    tResume();
    startTime.value = (startTime.value || 0) + (Date.now() - timestamp.value);
  }
  start2();
  return {
    start: start2,
    stop,
    pause,
    resume,
    remaining
  };
}
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$3,
    UAvatar: __nuxt_component_4$4,
    UButton: __nuxt_component_0$9
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$1.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config$1.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    pauseTimeoutOnHover: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config$1);
    let timer = null;
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      var _a2, _b;
      return twMerge(twJoin(
        ui.value.wrapper,
        (_a2 = ui.value.background) == null ? void 0 : _a2.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow,
        (_b = ui.value.ring) == null ? void 0 : _b.replaceAll("{color}", props.color)
      ), props.class);
    });
    const progressClass = computed(() => {
      var _a2;
      return twJoin(
        ui.value.progress.base,
        (_a2 = ui.value.progress.background) == null ? void 0 : _a2.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      var _a2;
      return twJoin(
        ui.value.icon.base,
        (_a2 = ui.value.icon.color) == null ? void 0 : _a2.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
      if (props.pauseTimeoutOnHover && timer) {
        timer.pause();
      }
    }
    function onMouseleave() {
      if (props.pauseTimeoutOnHover && timer) {
        timer.resume();
      }
    }
    function onClose() {
      if (timer) {
        timer.stop();
      }
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (timer) {
        timer.stop();
      }
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    function initTimer() {
      if (timer) {
        timer.stop();
      }
      if (!props.timeout) {
        return;
      }
      timer = useTimer(() => {
        onClose();
      }, props.timeout);
      watchEffect(() => {
        remaining.value = timer.remaining.value;
      });
    }
    watch(() => props.timeout, initTimer);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  const _component_UAvatar = __nuxt_component_4$4;
  const _component_UButton = __nuxt_component_0$9;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !_ctx.title && !_ctx.$slots.title && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index2) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index2,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index2) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({
          key: index2,
          ref_for: true
        }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "UNotification" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.notifications, notifications);
const _sfc_main$3 = defineComponent({
  components: {
    UNotification: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("notifications", toRef(props, "ui"), config);
    const toast = useToast();
    const notifications2 = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toast,
      notifications: notifications2,
      wrapperClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0;
  ssrRenderTeleport(_push, (_push2) => {
    if (_ctx.notifications.length) {
      _push2(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.wrapperClass,
        role: "region"
      }, _ctx.attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
      ssrRenderList(_ctx.notifications, (notification2) => {
        _push2(`<div>`);
        _push2(ssrRenderComponent(_component_UNotification, mergeProps({ ref_for: true }, notification2, {
          class: notification2.click && "cursor-pointer",
          onClick: ($event) => notification2.click && notification2.click(notification2),
          onClose: ($event) => _ctx.toast.remove(notification2.id)
        }), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_2, name) => {
            return {
              name,
              fn: withCtx((slotData, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push3, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                  ];
                }
              })
            };
          })
        ]), _parent));
        _push2(`</div>`);
      });
      _push2(`<!--]--></div></div>`);
    } else {
      _push2(`<!---->`);
    }
  }, "body", false, _parent);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "UNotifications" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "apple-mobile-web-app-title", content: "Key2Host" },
        { name: "copyright", content: "© Key2Host - All Rights Reserved." }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/img/favicon/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/img/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/img/favicon/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/img/favicon/apple-touch-icon.png" },
        { rel: "manifest", href: "/img/favicon/site.webmanifest" }
      ],
      htmlAttrs: {
        lang: "en"
      },
      titleTemplate: "%s - Key2Host"
    });
    const cart = useCartStore();
    useSeoMeta({
      ogImage: "/img/brand/og.jpg",
      twitterImage: "/img/brand/og.jpg",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0$5;
      const _component_UMain = __nuxt_component_1$1;
      const _component_NuxtPage = __nuxt_component_2$2;
      const _component_CookieNotice = __nuxt_component_3;
      const _component_USlideover = __nuxt_component_4$1;
      const _component_UCard = __nuxt_component_0$4;
      const _component_Cart = __nuxt_component_6$1;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UBadge = __nuxt_component_1$2;
      const _component_AppFooter = __nuxt_component_9;
      const _component_UNotifications = __nuxt_component_10;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_UMain, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CookieNotice, null, null, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(cart).isSlideoverOpen,
        "onUpdate:modelValue": ($event) => unref(cart).isSlideoverOpen = $event
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { body: { base: "flex-1" }, ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Cart, { class: "w-full max-w-md" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Cart, { class: "w-full max-w-md" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { body: { base: "flex-1" }, ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                default: withCtx(() => [
                  createVNode(_component_Cart, { class: "w-full max-w-md" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(cart).totalItems != 0) {
        _push(`<div class="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition z-10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-shopping-cart",
          class: "w-5 h-5"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UBadge, {
          class: "absolute top-0 right-0 rounded-full",
          color: "gray",
          variant: "solid"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(cart).totalItems > 9 ? "9+" : unref(cart).totalItems)}`);
            } else {
              return [
                createTextVNode(toDisplayString$1(unref(cart).totalItems > 9 ? "9+" : unref(cart).totalItems), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
useSeoMeta({
  title: "Error 404",
  ogTitle: "Error 404",
  description: "Seite nicht gefunden.",
  ogDescription: "Seite nicht gefunden.",
  robots: "noindex, nofollow"
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  const _component_NuxtLink = __nuxt_component_0$e;
  const _component_UButton = __nuxt_component_0$9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-heroicons-face-frown",
    class: "h-[400px] w-[400px] mb-2"
  }, null, _parent));
  _push(`<h1 class="text-4xl">Seite nicht gefunden!</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UButton, { class: "mt-6" }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Zurück zur Startseite`);
            } else {
              return [
                createTextVNode("Zurück zur Startseite")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UButton, { class: "mt-6" }, {
            default: withCtx(() => [
              createTextVNode("Zurück zur Startseite")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p2 = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p2);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { useAppConfig as $, A$3 as A, __nuxt_component_4$4 as B, mergeConfig as C, useUI as D, E$2 as E, usePopper as F, useInjectButtonGroup as G, useFormGroup as H, twMerge as I, appConfig as J, get as K, s$5 as L, select as M, N$4 as N, O$2 as O, selectMenu as P, __nuxt_component_0$9 as Q, __nuxt_component_2$3 as R, __nuxt_component_4 as S, T$2 as T, omit as U, __nuxt_component_7 as V, useToast as W, useCartStore as X, __nuxt_component_0$4 as Y, __nuxt_component_2$4 as Z, _export_sfc as _, useI18n as a, __nuxt_component_0$3 as a0, useCookieNoticeStore as a1, __nuxt_component_0$e as a2, getNuxtLinkProps as a3, useHead as a4, __nuxt_component_1$2 as a5, __nuxt_component_0$d as a6, nuxtLinkProps as a7, getSlotChildrenText as a8, __nuxt_component_0$b as a9, getULinkProps as aa, getSlotsChildren as ab, avatar as ac, button as ad, __nuxt_component_2$1 as ae, config$i as af, N$1 as ag, Q$1 as ah, V as ai, __nuxt_component_0$7 as aj, useRequestEvent as ak, withLeadingSlash as al, hasProtocol as am, joinURL as an, parseURL as ao, encodeParam as ap, encodePath as aq, useNuxtApp as ar, useRuntimeConfig as as, useRoute as at, withTrailingSlash as au, withoutTrailingSlash as av, useAsyncData as aw, withBase as ax, useCookie as ay, useState as az, useSeoMeta as b, i$4 as c, o$2 as d, entry$1 as default, u$5 as e, i$1 as f, i$2 as g, u$7 as h, i$6 as i, f$2 as j, u$4 as k, l$2 as l, t$1 as m, o$1 as n, o$4 as o, c$1 as p, n$2 as q, f$1 as r, s$3 as s, t$2 as t, useLocalePath as u, p as v, w$2 as w, w$4 as x, h as y, __nuxt_component_1$3 as z };
//# sourceMappingURL=server.mjs.map
