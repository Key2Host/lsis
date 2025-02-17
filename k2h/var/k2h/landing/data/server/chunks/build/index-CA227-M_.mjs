import { _ as __nuxt_component_2$1, a as __nuxt_component_0$1, b as __nuxt_component_5 } from './Alert-CSXSXC1a.mjs';
import { a as o$2, b as u$7, c as c$1, f as f$1, w as w$2, t as t$2, i as i$1, d as f$2, E as E$2, e as u$4, A as A$3, T as T$2, g as i$6, s as s$3, h as i$4, N as N$4, l as l$2, j as i$2, k as u$5, q as w$4, r as h$1, v as p, _ as _export_sfc, x as mergeConfig, y as select, z as appConfig, B as selectMenu, C as __nuxt_component_1$3, D as __nuxt_component_4$3, F as useUI, G as usePopper, H as useInjectButtonGroup, I as useFormGroup, J as twMerge, K as get, L as s$5, U as useToast, V as useCartStore, u as useSeoMeta, O as O$2, m as o$1, o as o$4, n as t$1, p as n$2, M as omit, W as __nuxt_component_0$4, X as __nuxt_component_0$e, P as __nuxt_component_0$9, Q as __nuxt_component_2$3, R as __nuxt_component_4, S as __nuxt_component_7 } from './server.mjs';
import { defineComponent, computed, ref, watch, provide, h, cloneVNode, reactive, toRaw, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick, useId, readonly, useSSRContext, toRef, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, resolveComponent, resolveDynamicComponent, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, Transition, createSlots } from 'vue';
import { useEventBus, useDebounceFn, computedAsync } from '@vueuse/core';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { o as defu, s as isEqual } from '../nitro/nitro.mjs';
import { twJoin } from 'tailwind-merge';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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

function d(u2, e2, r) {
  let i2 = ref(r == null ? undefined : r.value), f2 = computed(() => u2.value !== undefined);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? undefined : e2(t2);
  }];
}
function i() {
  let o2 = o$4();
  return onUnmounted(() => o2.dispose()), o2;
}
function t() {
  let e2 = i();
  return (o2) => {
    e2.dispose(), e2.nextFrame(o2);
  };
}
var g = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g || {});
function e(i2 = {}, s2 = null, t2 = []) {
  for (let [r, n2] of Object.entries(i2)) o(t2, f(s2, r), n2);
  return t2;
}
function f(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o(i2, s2, t2) {
  if (Array.isArray(t2)) for (let [r, n2] of t2.entries()) o(i2, f(s2, r.toString()), n2);
  else t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e(t2, s2, i2);
}
function De(a, h2) {
  return a === h2;
}
var Ee = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Ee || {}), Ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ve || {}), ke = ((y) => (y[y.Pointer = 0] = "Pointer", y[y.Focus = 1] = "Focus", y[y.Other = 2] = "Other", y))(ke || {});
let ne = Symbol("ComboboxContext");
function K(a) {
  let h2 = inject(ne, null);
  if (h2 === null) {
    let r = new Error(`<${a} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, K), r;
  }
  return h2;
}
let ie = Symbol("VirtualContext"), Ae$1 = defineComponent({ name: "VirtualProvider", setup(a, { slots: h$12 }) {
  let r = K("VirtualProvider"), y = computed(() => {
    let c2 = o$2(r.optionsRef);
    if (!c2) return { start: 0, end: 0 };
    let f2 = (undefined).getComputedStyle(c2);
    return { start: parseFloat(f2.paddingBlockStart || f2.paddingTop), end: parseFloat(f2.paddingBlockEnd || f2.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: y.value.start, scrollPaddingEnd: y.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$2(r.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var c2;
    return (c2 = r.virtual.value) == null ? undefined : c2.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r.virtual.value ? o2 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (c2) => {
    if (c2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== undefined || r.activationTrigger.value === 0) return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && o2.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((c2) => cloneVNode(h$12.default({ option: r.virtual.value.options[c2.index], open: r.comboboxState.value === 0 })[0], { key: `${e2.value}-${c2.index}`, "data-index": c2.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": c2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c2.start}px)`, overflowAnchor: "none" } })))];
} }), lt = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: undefined }, defaultValue: { type: [Object, String, Number, Boolean], default: undefined }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a, { slots: h$12, attrs: r, emit: y }) {
  let o2 = ref(1), u$22 = ref(null), e$1 = ref(null), c$1$1 = ref(null), f2 = ref(null), S = ref({ static: false, hold: false }), v = ref([]), d$1 = ref(null), D = ref(2), E$1 = ref(false);
  function w$12(t2 = (n2) => n2) {
    let n2 = d$1.value !== null ? v.value[d$1.value] : null, s2 = t2(v.value.slice()), b = s2.length > 0 && s2[0].dataRef.order.value !== null ? s2.sort((C, A2) => C.dataRef.order.value - A2.dataRef.order.value) : O$2(s2, (C) => o$2(C.dataRef.domRef)), O$1 = n2 ? b.indexOf(n2) : null;
    return O$1 === -1 && (O$1 = null), { options: b, activeOptionIndex: O$1 };
  }
  let M = computed(() => a.multiple ? 1 : 0), $2 = computed(() => a.nullable), [B, p2] = d(computed(() => a.modelValue), (t2) => y("update:modelValue", t2), computed(() => a.defaultValue)), R = computed(() => B.value === undefined ? u$7(M.value, { [1]: [], [0]: undefined }) : B.value), V = null, i2 = null;
  function I(t2) {
    return u$7(M.value, { [0]() {
      return p2 == null ? undefined : p2(t2);
    }, [1]: () => {
      let n2 = toRaw(l2.value.value).slice(), s2 = toRaw(t2), b = n2.findIndex((O2) => l2.compare(s2, toRaw(O2)));
      return b === -1 ? n2.push(s2) : n2.splice(b, 1), p2 == null ? undefined : p2(n2);
    } });
  }
  let T$1 = computed(() => {
  });
  watch([T$1], ([t2], [n2]) => {
    if (l2.virtual.value && t2 && n2 && d$1.value !== null) {
      let s2 = t2.indexOf(n2[d$1.value]);
      s2 !== -1 ? d$1.value = s2 : d$1.value = null;
    }
  });
  let l2 = { comboboxState: o2, value: R, mode: M, compare(t2, n2) {
    if (typeof a.by == "string") {
      let s2 = a.by;
      return (t2 == null ? undefined : t2[s2]) === (n2 == null ? undefined : n2[s2]);
    }
    return a.by === null ? De(t2, n2) : a.by(t2, n2);
  }, calculateIndex(t2) {
    return l2.virtual.value ? a.by === null ? l2.virtual.value.options.indexOf(t2) : l2.virtual.value.options.findIndex((n2) => l2.compare(n2, t2)) : v.value.findIndex((n2) => l2.compare(n2.dataRef.value, t2));
  }, defaultValue: computed(() => a.defaultValue), nullable: $2, immediate: computed(() => false), virtual: computed(() => null), inputRef: e$1, labelRef: u$22, buttonRef: c$1$1, optionsRef: f2, disabled: computed(() => a.disabled), options: v, change(t2) {
    p2(t2);
  }, activeOptionIndex: computed(() => {
    if (E$1.value && d$1.value === null && (l2.virtual.value ? l2.virtual.value.options.length > 0 : v.value.length > 0)) {
      if (l2.virtual.value) {
        let n2 = l2.virtual.value.options.findIndex((s2) => {
          var b;
          return !((b = l2.virtual.value) != null && b.disabled(s2));
        });
        if (n2 !== -1) return n2;
      }
      let t2 = v.value.findIndex((n2) => !n2.dataRef.disabled);
      if (t2 !== -1) return t2;
    }
    return d$1.value;
  }), activationTrigger: D, optionsPropsRef: S, closeCombobox() {
    E$1.value = false, !a.disabled && o2.value !== 1 && (o2.value = 1, d$1.value = null);
  }, openCombobox() {
    if (E$1.value = true, !a.disabled && o2.value !== 0) {
      if (l2.value.value) {
        let t2 = l2.calculateIndex(l2.value.value);
        t2 !== -1 && (d$1.value = t2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(t2) {
    D.value = t2;
  }, goToOption(t2, n2, s2) {
    E$1.value = false, V !== null && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      if (a.disabled || f2.value && !S.value.static && o2.value === 1) return;
      if (l2.virtual.value) {
        d$1.value = t2 === c$1.Specific ? n2 : f$1({ focus: t2 }, { resolveItems: () => l2.virtual.value.options, resolveActiveIndex: () => {
          var C, A2;
          return (A2 = (C = l2.activeOptionIndex.value) != null ? C : l2.virtual.value.options.findIndex((j) => {
            var q;
            return !((q = l2.virtual.value) != null && q.disabled(j));
          })) != null ? A2 : null;
        }, resolveDisabled: (C) => l2.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), D.value = s2 != null ? s2 : 2;
        return;
      }
      let b = w$12();
      if (b.activeOptionIndex === null) {
        let C = b.options.findIndex((A2) => !A2.dataRef.disabled);
        C !== -1 && (b.activeOptionIndex = C);
      }
      let O2 = t2 === c$1.Specific ? n2 : f$1({ focus: t2 }, { resolveItems: () => b.options, resolveActiveIndex: () => b.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d$1.value = O2, D.value = s2 != null ? s2 : 2, v.value = b.options;
    });
  }, selectOption(t2) {
    let n2 = v.value.find((b) => b.id === t2);
    if (!n2) return;
    let { dataRef: s2 } = n2;
    I(s2.value);
  }, selectActiveOption() {
    if (l2.activeOptionIndex.value !== null) {
      if (l2.virtual.value) I(l2.virtual.value.options[l2.activeOptionIndex.value]);
      else {
        let { dataRef: t2 } = v.value[l2.activeOptionIndex.value];
        I(t2.value);
      }
      l2.goToOption(c$1.Specific, l2.activeOptionIndex.value);
    }
  }, registerOption(t2, n2) {
    let s2 = reactive({ id: t2, dataRef: n2 });
    if (l2.virtual.value) {
      v.value.push(s2);
      return;
    }
    i2 && cancelAnimationFrame(i2);
    let b = w$12((O2) => (O2.push(s2), O2));
    d$1.value === null && l2.isSelected(n2.value.value) && (b.activeOptionIndex = b.options.indexOf(s2)), v.value = b.options, d$1.value = b.activeOptionIndex, D.value = 2, b.options.some((O2) => !o$2(O2.dataRef.domRef)) && (i2 = requestAnimationFrame(() => {
      let O2 = w$12();
      v.value = O2.options, d$1.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(t2, n2) {
    if (V !== null && cancelAnimationFrame(V), n2 && (E$1.value = true), l2.virtual.value) {
      v.value = v.value.filter((b) => b.id !== t2);
      return;
    }
    let s2 = w$12((b) => {
      let O2 = b.findIndex((C) => C.id === t2);
      return O2 !== -1 && b.splice(O2, 1), b;
    });
    v.value = s2.options, d$1.value = s2.activeOptionIndex, D.value = 2;
  }, isSelected(t2) {
    return u$7(M.value, { [0]: () => l2.compare(toRaw(l2.value.value), toRaw(t2)), [1]: () => toRaw(l2.value.value).some((n2) => l2.compare(toRaw(n2), toRaw(t2))) });
  }, isActive(t2) {
    return d$1.value === l2.calculateIndex(t2);
  } };
  w$2([e$1, c$1$1, f2], () => l2.closeCombobox(), computed(() => o2.value === 0)), provide(ne, l2), t$2(computed(() => u$7(o2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let g2 = computed(() => {
    var t2;
    return (t2 = o$2(e$1)) == null ? undefined : t2.closest("form");
  });
  return onMounted(() => {
    watch([g2], () => {
      if (!g2.value || a.defaultValue === undefined) return;
      function t2() {
        l2.change(a.defaultValue);
      }
      return g2.value.addEventListener("reset", t2), () => {
        var n2;
        (n2 = g2.value) == null || n2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    var C, A2, j;
    let { name: t2, disabled: n2, form: s2, ...b } = a, O2 = { open: o2.value === 0, disabled: n2, activeIndex: l2.activeOptionIndex.value, activeOption: l2.activeOptionIndex.value === null ? null : l2.virtual.value ? l2.virtual.value.options[(C = l2.activeOptionIndex.value) != null ? C : 0] : (j = (A2 = l2.options.value[l2.activeOptionIndex.value]) == null ? undefined : A2.dataRef.value) != null ? j : null, value: R.value };
    return h(Fragment, [...t2 != null && R.value != null ? e({ [t2]: R.value }).map(([q, ue]) => h(f$2, E$2({ features: u$4.Hidden, key: q, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, disabled: n2, name: q, value: ue }))) : [], A$3({ theirProps: { ...r, ...T$2(b, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: h$12, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a, { attrs: h2, slots: r }) {
  var e2;
  let y = (e2 = a.id) != null ? e2 : `headlessui-combobox-label-${i$6()}`, o2 = K("ComboboxLabel");
  function u2() {
    var c2;
    (c2 = o$2(o2.inputRef)) == null || c2.focus({ preventScroll: true });
  }
  return () => {
    let c2 = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...f2 } = a, S = { id: y, ref: o2.labelRef, onClick: u2 };
    return A$3({ ourProps: S, theirProps: f2, slot: c2, attrs: h2, slots: r, name: "ComboboxLabel" });
  };
} });
let nt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a, { attrs: h2, slots: r, expose: y }) {
  var S;
  let o2 = (S = a.id) != null ? S : `headlessui-combobox-button-${i$6()}`, u2 = K("ComboboxButton");
  y({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(v) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (v.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$2(u2.inputRef)) == null ? undefined : d2.focus({ preventScroll: true });
    }));
  }
  function c$1$1(v) {
    switch (v.key) {
      case o$1.ArrowDown:
        v.preventDefault(), v.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? undefined : d2.focus({ preventScroll: true });
        });
        return;
      case o$1.ArrowUp:
        v.preventDefault(), v.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c$1.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? undefined : d2.focus({ preventScroll: true });
        });
        return;
      case o$1.Escape:
        if (u2.comboboxState.value !== 0) return;
        v.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && v.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? undefined : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let f2 = s$3(computed(() => ({ as: a.as, type: h2.type })), u2.buttonRef);
  return () => {
    var E2, w2;
    let v = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a, D = { ref: u2.buttonRef, id: o2, type: f2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (E2 = o$2(u2.optionsRef)) == null ? undefined : E2.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(w2 = o$2(u2.labelRef)) == null ? undefined : w2.id, o2].join(" ") : undefined, disabled: u2.disabled.value === true ? true : undefined, onKeydown: c$1$1, onClick: e2 };
    return A$3({ ourProps: D, theirProps: d2, slot: v, attrs: h2, slots: r, name: "ComboboxButton" });
  };
} }), it = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: undefined }, id: { type: String, default: null } }, emits: { change: (a) => true }, setup(a, { emit: h2, attrs: r, slots: y, expose: o2 }) {
  var V;
  let u$12 = (V = a.id) != null ? V : `headlessui-combobox-input-${i$6()}`, e2 = K("ComboboxInput"), c$1$1 = computed(() => i$4(o$2(e2.inputRef))), f2 = { value: false };
  o2({ el: e2.inputRef, $el: e2.inputRef });
  function S() {
    e2.change(null);
    let i2 = o$2(e2.optionsRef);
    i2 && (i2.scrollTop = 0), e2.goToOption(c$1.Nothing);
  }
  let v = computed(() => {
    var I;
    let i2 = e2.value.value;
    return o$2(e2.inputRef) ? typeof a.displayValue != "undefined" && i2 !== undefined ? (I = a.displayValue(i2)) != null ? I : "" : typeof i2 == "string" ? i2 : "" : "";
  });
  onMounted(() => {
    watch([v, e2.comboboxState, c$1$1], ([i2, I], [T2, l2]) => {
      if (f2.value) return;
      let g2 = o$2(e2.inputRef);
      g2 && ((l2 === 0 && I === 1 || i2 !== T2) && (g2.value = i2), requestAnimationFrame(() => {
        var s2;
        if (f2.value || !g2 || ((s2 = c$1$1.value) == null ? undefined : s2.activeElement) !== g2) return;
        let { selectionStart: t2, selectionEnd: n2 } = g2;
        Math.abs((n2 != null ? n2 : 0) - (t2 != null ? t2 : 0)) === 0 && t2 === 0 && g2.setSelectionRange(g2.value.length, g2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([i2], [I]) => {
      if (i2 === 0 && I === 1) {
        if (f2.value) return;
        let T2 = o$2(e2.inputRef);
        if (!T2) return;
        let l2 = T2.value, { selectionStart: g2, selectionEnd: t2, selectionDirection: n2 } = T2;
        T2.value = "", T2.value = l2, n2 !== null ? T2.setSelectionRange(g2, t2, n2) : T2.setSelectionRange(g2, t2);
      }
    });
  });
  let d2 = ref(false);
  function D() {
    d2.value = true;
  }
  function E2() {
    o$4().nextFrame(() => {
      d2.value = false;
    });
  }
  let w2 = t();
  function M(i2) {
    switch (f2.value = true, w2(() => {
      f2.value = false;
    }), i2.key) {
      case o$1.Enter:
        if (f2.value = false, e2.comboboxState.value !== 0 || d2.value) return;
        if (i2.preventDefault(), i2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$1.ArrowDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$7(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Next), [1]: () => e2.openCombobox() });
      case o$1.ArrowUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$7(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c$1.Last);
          });
        } });
      case o$1.Home:
        if (i2.shiftKey) break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$1.PageUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$1.End:
        if (i2.shiftKey) break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1.PageDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1.Escape:
        if (f2.value = false, e2.comboboxState.value !== 0) return;
        i2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && i2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && S(), e2.closeCombobox();
        break;
      case o$1.Tab:
        if (f2.value = false, e2.comboboxState.value !== 0) return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function $2(i2) {
    h2("change", i2), e2.nullable.value && e2.mode.value === 0 && i2.target.value === "" && S(), e2.openCombobox();
  }
  function B(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    if (f2.value = false, !((l2 = o$2(e2.optionsRef)) != null && l2.contains(I)) && !((g2 = o$2(e2.buttonRef)) != null && g2.contains(I)) && e2.comboboxState.value === 0) return i2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? S() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function p2(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    (l2 = o$2(e2.buttonRef)) != null && l2.contains(I) || (g2 = o$2(e2.optionsRef)) != null && g2.contains(I) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$4().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let R = computed(() => {
    var i2, I, T2, l2;
    return (l2 = (T2 = (I = a.defaultValue) != null ? I : e2.defaultValue.value !== undefined ? (i2 = a.displayValue) == null ? undefined : i2.call(a, e2.defaultValue.value) : null) != null ? T2 : e2.defaultValue.value) != null ? l2 : "";
  });
  return () => {
    var t2, n2, s2, b, O2, C, A2;
    let i2 = { open: e2.comboboxState.value === 0 }, { displayValue: I, onChange: T2, ...l2 } = a, g2 = { "aria-controls": (t2 = e2.optionsRef.value) == null ? undefined : t2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? undefined : e2.virtual.value ? (n2 = e2.options.value.find((j) => !e2.virtual.value.disabled(j.dataRef.value) && e2.compare(j.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? undefined : n2.id : (s2 = e2.options.value[e2.activeOptionIndex.value]) == null ? undefined : s2.id, "aria-labelledby": (C = (b = o$2(e2.labelRef)) == null ? undefined : b.id) != null ? C : (O2 = o$2(e2.buttonRef)) == null ? undefined : O2.id, "aria-autocomplete": "list", id: u$12, onCompositionstart: D, onCompositionend: E2, onKeydown: M, onInput: $2, onFocus: p2, onBlur: B, role: "combobox", type: (A2 = r.type) != null ? A2 : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: R.value, disabled: e2.disabled.value === true ? true : undefined };
    return A$3({ ourProps: g2, theirProps: l2, slot: i2, attrs: r, slots: y, features: N$4.RenderStrategy | N$4.Static, name: "ComboboxInput" });
  };
} }), ut = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a, { attrs: h$12, slots: r, expose: y }) {
  let o2 = K("ComboboxOptions"), u2 = `headlessui-combobox-options-${i$6()}`;
  y({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a.hold;
  });
  let e2 = l$2(), c2 = computed(() => e2 !== null ? (e2.value & i$1.Open) === i$1.Open : o2.comboboxState.value === 0);
  i$2({ container: computed(() => o$2(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(S) {
    return S.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : S.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S) {
    S.setAttribute("role", "none");
  } });
  function f2(S) {
    S.preventDefault();
  }
  return () => {
    var D, E2, w2;
    let S = { open: o2.comboboxState.value === 0 }, v = { "aria-labelledby": (w2 = (D = o$2(o2.labelRef)) == null ? undefined : D.id) != null ? w2 : (E2 = o$2(o2.buttonRef)) == null ? undefined : E2.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : undefined, onMousedown: f2 }, d2 = T$2(a, ["hold"]);
    return A$3({ ourProps: v, theirProps: d2, slot: S, attrs: h$12, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r, default: () => [h(Ae$1, {}, r.default)] } : r, features: N$4.RenderStrategy | N$4.Static, visible: c2.value, name: "ComboboxOptions" });
  };
} }), rt = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a, { slots: h2, attrs: r, expose: y }) {
  let o2 = K("ComboboxOption"), u2 = `headlessui-combobox-option-${i$6()}`, e2 = ref(null), c$1$1 = computed(() => a.disabled);
  y({ el: e2, $el: e2 });
  let f2 = computed(() => {
    var p2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a.value) : o2.activeOptionIndex.value === null ? false : ((p2 = o2.options.value[o2.activeOptionIndex.value]) == null ? undefined : p2.id) === u2;
  }), S = computed(() => o2.isSelected(a.value)), v = inject(ie, null), d2 = computed(() => ({ disabled: a.disabled, value: a.value, domRef: e2, order: computed(() => a.order) }));
  onMounted(() => o2.registerOption(u2, d2)), onUnmounted(() => o2.unregisterOption(u2, f2.value)), watchEffect(() => {
    let p2 = o$2(e2);
    p2 && (v == null || v.value.measureElement(p2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && f2.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, R;
      return (R = (p2 = o$2(e2)) == null ? undefined : p2.scrollIntoView) == null ? undefined : R.call(p2, { block: "nearest" });
    }));
  });
  function D(p2) {
    p2.preventDefault(), p2.button === g.Left && (c$1$1.value || (o2.selectOption(u2), n$2() || requestAnimationFrame(() => {
      var R;
      return (R = o$2(o2.inputRef)) == null ? undefined : R.focus({ preventScroll: true });
    }), o2.mode.value === 0 && o2.closeCombobox()));
  }
  function E2() {
    var R;
    if (a.disabled || (R = o2.virtual.value) != null && R.disabled(a.value)) return o2.goToOption(c$1.Nothing);
    let p2 = o2.calculateIndex(a.value);
    o2.goToOption(c$1.Specific, p2);
  }
  let w2 = u$5();
  function M(p2) {
    w2.update(p2);
  }
  function $2(p2) {
    var V;
    if (!w2.wasMoved(p2) || a.disabled || (V = o2.virtual.value) != null && V.disabled(a.value) || f2.value) return;
    let R = o2.calculateIndex(a.value);
    o2.goToOption(c$1.Specific, R, 0);
  }
  function B(p2) {
    var R;
    w2.wasMoved(p2) && (a.disabled || (R = o2.virtual.value) != null && R.disabled(a.value) || f2.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c$1.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a, R = { active: f2.value, selected: S.value, disabled: p2 }, V = { id: u2, ref: e2, role: "option", tabIndex: p2 === true ? undefined : -1, "aria-disabled": p2 === true ? true : undefined, "aria-selected": S.value, disabled: undefined, onMousedown: D, onFocus: E2, onPointerenter: M, onMouseenter: M, onPointermove: $2, onMousemove: $2, onPointerleave: B, onMouseleave: B }, i2 = T$2(a, ["order", "value"]);
    return A$3({ ourProps: V, theirProps: i2, slot: R, attrs: r, slots: h2, name: "ComboboxOption" });
  };
} });
function pe(o2, b) {
  return o2 === b;
}
var ce = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ce || {}), ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(ve || {}), be = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(be || {});
function me(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, A), r;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: undefined }, defaultValue: { type: [Object, String, Number, Boolean], default: undefined }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b, attrs: r, emit: w$2$1 }) {
  let n2 = ref(1), e$1 = ref(null), f2 = ref(null), v = ref(null), s2 = ref([]), m = ref(""), p2 = ref(null), a = ref(1);
  function u$22(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s2.value[p2.value] : null, l2 = O$2(t2(s2.value.slice()), (O2) => o$2(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y, L] = d(computed(() => o2.modelValue), (t2) => w$2$1("update:modelValue", t2), computed(() => o2.defaultValue)), M = computed(() => y.value === undefined ? u$7(D.value, { [1]: [], [0]: undefined }) : y.value), k = { listboxState: n2, value: M, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? undefined : t2[l2]) === (i2 == null ? undefined : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e$1, buttonRef: f2, optionsRef: v, disabled: computed(() => o2.disabled), options: s2, searchQuery: m, activeOptionIndex: p2, activationTrigger: a, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1) return;
    let d2 = u$22(), O2 = f$1(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m.value = "", p2.value = O2, a.value = l2 != null ? l2 : 1, s2.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1) return;
    let l2 = m.value !== "" ? 0 : 1;
    m.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s2.value.slice(p2.value + l2).concat(s2.value.slice(0, p2.value + l2)) : s2.value).find((I) => I.dataRef.textValue.startsWith(m.value) && !I.dataRef.disabled), h2 = O2 ? s2.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m.value !== "" && (m.value = "");
  }, registerOption(t2, i2) {
    let l2 = u$22((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s2.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u$22((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s2.value = i2.options, p2.value = i2.activeOptionIndex, a.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L(t2);
  }, select(t2) {
    o2.disabled || L(u$7(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w$2([f2, v], (t2, i2) => {
    var l2;
    k.closeListbox(), w$4(i2, h$1.Loose) || (t2.preventDefault(), (l2 = o$2(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k), t$2(computed(() => u$7(n2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$2(f2)) == null ? undefined : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === undefined) return;
      function t2() {
        k.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h$12 = { open: n2.value === 0, disabled: l2, value: M.value };
    return h(Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I, Q]) => h(f$2, E$2({ features: u$4.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I, value: Q }))) : [], A$3({ ourProps: {}, theirProps: { ...r, ...T$2(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h$12, slots: b, attrs: r, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${i$6()}`, n2 = A("ListboxLabel");
  function e2() {
    var v;
    (v = o$2(n2.buttonRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s2 } = o2, m = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$3({ ourProps: m, theirProps: s2, slot: v, attrs: b, slots: r, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${i$6()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a) {
    switch (a.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        a.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$1.ArrowUp:
        a.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v(a) {
    switch (a.key) {
      case o$1.Space:
        a.preventDefault();
        break;
    }
  }
  function s$12(a) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$2(e2.buttonRef)) == null ? undefined : u2.focus({ preventScroll: true });
    })) : (a.preventDefault(), e2.openListbox(), me(() => {
      var u2;
      return (u2 = o$2(e2.optionsRef)) == null ? undefined : u2.focus({ preventScroll: true });
    })));
  }
  let m = s$3(computed(() => ({ as: o2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y, L;
    let a = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y = o$2(e2.optionsRef)) == null ? undefined : y.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o$2(e2.labelRef)) == null ? undefined : L.id, n2].join(" ") : undefined, disabled: e2.disabled.value === true ? true : undefined, onKeydown: f2, onKeyup: v, onClick: s$12 };
    return A$3({ ourProps: D, theirProps: u2, slot: a, attrs: b, slots: r, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${i$6()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(a) {
    switch (f2.value && clearTimeout(f2.value), a.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "") return a.preventDefault(), a.stopPropagation(), e2.search(a.key);
      case o$1.Enter:
        if (a.preventDefault(), a.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? undefined : u2.focus({ preventScroll: true });
        }));
        break;
      case u$7(e2.orientation.value, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Next);
      case u$7(e2.orientation.value, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.First);
      case o$1.End:
      case o$1.PageDown:
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1.Escape:
        a.preventDefault(), a.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? undefined : u2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (e2.search(a.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l$2(), m = computed(() => s2 !== null ? (s2.value & i$1.Open) === i$1.Open : e2.listboxState.value === 0);
  return () => {
    var y, L;
    let a = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y = e2.options.value[e2.activeOptionIndex.value]) == null ? undefined : y.id, "aria-multiselectable": e2.mode.value === 1 ? true : undefined, "aria-labelledby": (L = o$2(e2.buttonRef)) == null ? undefined : L.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$3({ ourProps: D, theirProps: u2, slot: a, attrs: b, slots: r, features: N$4.RenderStrategy | N$4.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b, attrs: r, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${i$6()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s2 = computed(() => u$7(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m = computed(() => u$7(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? undefined : i2.id) === n2;
  }, [0]: () => s2.value })), p$1 = p(f2), a = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n2, a)), onUnmounted(() => e2.unregisterOption(n2)), onMounted(() => {
    watch([e2.listboxState, s2], () => {
      e2.listboxState.value === 0 && s2.value && u$7(e2.mode.value, { [1]: () => {
        m.value && e2.goToOption(c$1.Specific, n2);
      }, [0]: () => {
        e2.goToOption(c$1.Specific, n2);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$2(f2)) == null ? undefined : t2.scrollIntoView) == null ? undefined : i2.call(t2, { block: "nearest" });
    });
  });
  function u$12(t2) {
    if (o2.disabled) return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$2(e2.buttonRef)) == null ? undefined : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled) return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n2);
  }
  let y = u$5();
  function L(t2) {
    y.update(t2);
  }
  function M(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value || e2.goToOption(c$1.Specific, n2, 0));
  }
  function k(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? undefined : -1, "aria-disabled": t2 === true ? true : undefined, "aria-selected": s2.value, disabled: undefined, onClick: u$12, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k, onMouseleave: k };
    return A$3({ ourProps: h2, theirProps: O2, slot: i2, attrs: r, slots: b, name: "ListboxOption" });
  };
} });
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$4 = defineComponent({
  props: {
    schema: {
      type: [Object, Function],
      default: undefined
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId();
    const bus = useEventBus(`form-${formId}`);
    const parsedValue = ref(null);
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        const { errors: errors2, result } = await parseSchema(props.state, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          parsedValue.value = result;
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent) return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        event.data = props.schema ? parsedValue.value : props.state;
        emit("submit", event);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit,
      errors: readonly(errors)
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== undefined;
}
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isJoiSchema(schema) {
  return schema.validateAsync !== undefined && schema.id !== undefined;
}
function isJoiError(error) {
  return error.isJoi === true;
}
function isValibotSchema(schema) {
  return "_parse" in schema || "_run" in schema || typeof schema === "function" && "schema" in schema;
}
function isZodSchema(schema) {
  return schema.parse !== undefined;
}
async function validateValibotSchema(state, schema) {
  const result = await ("_parse" in schema ? schema._parse(state) : "_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  if (!result.issues || result.issues.length === 0) {
    const output = "output" in result ? result.output : "value" in result ? result.value : null;
    return {
      errors: null,
      result: output
    };
  }
  const errors = result.issues.map((issue) => {
    var _a;
    return {
      path: ((_a = issue.path) == null ? undefined : _a.map((item) => item.key).join(".")) || "",
      message: issue.message
    };
  });
  return {
    errors,
    result: null
  };
}
async function validateJoiSchema(state, schema) {
  try {
    const result = await schema.validateAsync(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isJoiError(error)) {
      const errors = error.details.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateZodSchema(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    const errors = result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    result: result.data,
    errors: null
  };
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      path: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
async function validateYupSchema(state, schema) {
  try {
    const result = await schema.validate(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isYupError(error)) {
      const errors = error.inner.map((issue) => ({
        path: issue.path ?? "",
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
function parseSchema(state, schema) {
  if (isZodSchema(schema)) {
    return validateZodSchema(state, schema);
  } else if (isJoiSchema(schema)) {
    return validateJoiSchema(state, schema);
  } else if (isValibotSchema(schema)) {
    return validateValibotSchema(state, schema);
  } else if (isYupSchema(schema)) {
    return validateYupSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", { errors: _ctx.errors }, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "UForm" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$3 = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_1$3,
    UAvatar: __nuxt_component_4$3
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: undefined
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
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
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: () => configMenu.default.searchablePlaceholder.label
    },
    searchableLazy: {
      type: Boolean,
      default: false
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: [String, Function],
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
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
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const by = computed(() => {
      if (!props.by) return undefined;
      if (typeof props.by === "function") {
        return props.by;
      }
      const key = props.by;
      const hasDot = key.indexOf(".");
      if (hasDot > 0) {
        return (a, z) => {
          return accessor(a, key) === accessor(z, key);
        };
      }
      return key;
    });
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        return props.query ?? internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selected = computed(() => {
      function compareValues(value1, value2) {
        if (by.value && typeof by.value !== "function" && typeof value1 === "object" && typeof value2 === "object") {
          return isEqual(value1[by.value], value2[by.value]);
        }
        return isEqual(value1, value2);
      }
      function getValue(value) {
        if (props.valueAttribute) {
          return accessor(value, props.valueAttribute);
        }
        return value;
      }
      if (props.multiple) {
        const modelValue = props.modelValue;
        if (!Array.isArray(modelValue) || !modelValue.length) {
          return [];
        }
        return options.value.filter((option) => {
          const optionValue = getValue(option);
          return modelValue.some((value) => compareValues(value, optionValue));
        });
      }
      return options.value.find((option) => {
        const optionValue = getValue(option);
        return compareValues(optionValue, toRaw(props.modelValue));
      }) ?? props.modelValue;
    });
    const label = computed(() => {
      if (!props.modelValue) return null;
      if (Array.isArray(props.modelValue) && props.modelValue.length) {
        return `${props.modelValue.length} selected`;
      } else if (["string", "number"].includes(typeof props.modelValue)) {
        return props.valueAttribute ? accessor(selected.value, props.optionAttribute) : props.modelValue;
      }
      return accessor(props.modelValue, props.optionAttribute);
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? undefined : _a[color.value]) == null ? undefined : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? undefined : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && (!props.modelValue || Array.isArray(props.modelValue) && !props.modelValue.length) && ui.value.placeholder, props.selectClass);
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
    const debouncedSearch = props.searchable && typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : undefined;
    const options = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      return props.options || [];
    }, [], {
      lazy: props.searchableLazy
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, (match) => `\\${match}`);
    }
    function accessor(obj, key) {
      return get(obj, key);
    }
    const filteredOptions = computed(() => {
      if (!query.value || debouncedSearch) {
        return options.value;
      }
      const escapedQuery = escapeRegExp(query.value);
      return options.value.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? undefined : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(escapedQuery, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== undefined && String(child).search(new RegExp(escapedQuery, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : accessor(option, props.optionAttribute) === query.value);
        if (existingOption) {
          return null;
        }
      }
      if (typeof props.showCreateOptionWhen === "function") {
        if (!props.showCreateOptionWhen(query.value, filteredOptions.value)) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      selected,
      label,
      accessor,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange,
      // eslint-disable-next-line vue/no-dupe-keys
      by
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$3;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_4$3;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.multiple ? Array.isArray(_ctx.modelValue) ? _ctx.modelValue : [] : _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || " ")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || " "), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected: optionSelected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute))}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (optionSelected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected: optionSelected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                              ])
                            ], 2),
                            optionSelected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected: optionSelected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute))}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected: optionSelected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? undefined : _a.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!((_b = _ctx.filteredOptions) == null ? undefined : _b.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.empty.label)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected: optionSelected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                            ])
                          ], 2),
                          optionSelected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected: optionSelected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_c = _ctx.filteredOptions) == null ? undefined : _c.length) ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                    ])
                  ], 2)) : !((_d = _ctx.filteredOptions) == null ? undefined : _d.length) ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || " "), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                          key: 0,
                          "display-value": () => _ctx.query,
                          name: "q",
                          placeholder: _ctx.searchablePlaceholder,
                          autofocus: "",
                          autocomplete: "off",
                          class: _ctx.uiMenu.input,
                          onChange: _ctx.onQueryChange
                        }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                            key: index,
                            as: "template",
                            value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                            disabled: option.disabled
                          }, {
                            default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                              createVNode("li", {
                                class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                              }, [
                                createVNode("div", {
                                  class: _ctx.uiMenu.option.container
                                }, [
                                  renderSlot(_ctx.$slots, "option", {
                                    option,
                                    active,
                                    selected: optionSelected
                                  }, () => [
                                    option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: option.icon,
                                      class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                      "aria-hidden": "true"
                                    }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                      class: _ctx.uiMenu.option.avatar.base,
                                      "aria-hidden": "true"
                                    }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.uiMenu.option.chip.base,
                                      style: { background: `#${option.chip}` }
                                    }, null, 6)) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                                  ])
                                ], 2),
                                optionSelected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: _ctx.selectedIcon,
                                    class: _ctx.uiMenu.option.selectedIcon.base,
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 128)),
                        _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: 1,
                          value: _ctx.createOption,
                          as: "template"
                        }, {
                          default: withCtx(({ active, selected: optionSelected }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option-create", {
                                  option: _ctx.createOption,
                                  active,
                                  selected: optionSelected
                                }, () => [
                                  createVNode("span", {
                                    class: _ctx.uiMenu.option.create
                                  }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                                ])
                              ], 2)
                            ], 2)
                          ]),
                          _: 3
                        }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? undefined : _a.length) ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: _ctx.uiMenu.option.empty
                        }, [
                          renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                            createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                          ])
                        ], 2)) : !((_b = _ctx.filteredOptions) == null ? undefined : _b.length) ? (openBlock(), createBlock("p", {
                          key: 3,
                          class: _ctx.uiMenu.empty
                        }, [
                          renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                            createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "USelectMenu" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AuthForm",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    align: {
      type: String,
      default: "bottom"
    },
    loading: {
      type: Boolean,
      default: false
    },
    fields: {
      type: Array,
      default: () => []
    },
    providers: {
      type: Array,
      default: () => []
    },
    submitButton: {
      type: Object,
      default: () => ({})
    },
    passwordToggle: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Object,
      default: undefined
    },
    validate: {
      type: [Function, Array],
      default: undefined
    },
    validateOn: {
      type: Array,
      default: () => ["submit"]
    },
    divider: {
      type: String,
      default: "or"
    },
    class: {
      type: [String, Object, Array],
      default: undefined
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["submit"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const config2 = computed(() => {
      const container = twJoin(
        "gap-y-6 flex flex-col",
        props.align === "top" && "flex-col-reverse"
      );
      return {
        wrapper: "w-full max-w-sm space-y-6",
        base: "",
        container,
        title: "text-2xl text-gray-900 dark:text-white font-bold",
        description: "text-gray-500 dark:text-gray-400 mt-1",
        icon: {
          wrapper: "mb-2 pointer-events-none",
          base: "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
        },
        providers: "space-y-3",
        form: "space-y-6",
        footer: "text-sm text-gray-500 dark:text-gray-400 mt-2",
        passwordToggle: {
          showIcon: "i-heroicons-eye",
          hideIcon: "i-heroicons-eye-slash"
        },
        default: {
          submitButton: {
            label: "Continue"
          },
          passwordToggle: {
            color: "gray",
            variant: "link"
          }
        }
      };
    });
    const formRef = ref();
    const { ui, attrs } = useUI("auth.form", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const state = reactive(Object.values(props.fields).reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {}));
    const passwordVisibility = ref(false);
    function togglePasswordVisibility() {
      passwordVisibility.value = !passwordVisibility.value;
    }
    __expose({
      formRef,
      state
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UDivider = __nuxt_component_2$3;
      const _component_UForm = __nuxt_component_3;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UCheckbox = __nuxt_component_0$1;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UInput = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.icon || _ctx.$slots.icon || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description)) {
        _push(`<div class="${ssrRenderClass(unref(ui).base)}">`);
        if (__props.icon || _ctx.$slots.icon) {
          _push(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}">`);
          ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
            _push(ssrRenderComponent(_component_UIcon, {
              name: __props.icon,
              class: unref(ui).icon.base
            }, null, _parent));
          }, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.title || _ctx.$slots.title) {
          _push(`<div class="${ssrRenderClass(unref(ui).title)}">`);
          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
            _push(`${ssrInterpolate(__props.title)}`);
          }, _push, _parent);
          _push(`</div>`);
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).container)}">`);
      if ((_a = __props.providers) == null ? undefined : _a.length) {
        _push(`<div class="${ssrRenderClass(unref(ui).providers)}"><!--[-->`);
        ssrRenderList(__props.providers, (provider, index) => {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            key: index,
            ref_for: true
          }, provider, {
            block: "",
            onClick: provider.click
          }), null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = __props.providers) == null ? undefined : _b.length) && ((_c = __props.fields) == null ? undefined : _c.length)) {
        _push(ssrRenderComponent(_component_UDivider, { label: __props.divider }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_d = __props.fields) == null ? undefined : _d.length) {
        _push(ssrRenderComponent(_component_UForm, {
          ref_key: "formRef",
          ref: formRef,
          state,
          schema: __props.schema,
          validate: __props.validate,
          "validate-on": __props.validateOn,
          class: unref(ui).form,
          onSubmit: ($event) => _ctx.$emit("submit", $event.data)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.fields, (field) => {
                _push2(ssrRenderComponent(_component_UFormGroup, {
                  key: field.name,
                  label: field.type === "checkbox" ? "" : field.label ?? "",
                  description: field.description,
                  help: field.help,
                  hint: field.hint,
                  name: field.name,
                  size: field.size
                }, createSlots({
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field: unref(omit)(field, ["description", "help", "hint", "size"]) }), () => {
                        if (field.type === "checkbox") {
                          _push3(ssrRenderComponent(_component_UCheckbox, mergeProps({
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["description", "help", "hint", "size"])), null, _parent3, _scopeId2));
                        } else if (field.type === "select") {
                          _push3(ssrRenderComponent(_component_USelectMenu, mergeProps({
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["description", "help", "hint", "size"])), null, _parent3, _scopeId2));
                        } else if (field.type === "password") {
                          _push3(ssrRenderComponent(_component_UInput, mergeProps({
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            type: passwordVisibility.value ? "text" : "password",
                            ref_for: true
                          }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type"]), { ui: { icon: { trailing: { pointer: "" } } } }), createSlots({ _: 2 }, [
                            __props.passwordToggle ? {
                              name: "trailing",
                              fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ...unref(ui).default.passwordToggle, ...__props.passwordToggle }, {
                                    icon: passwordVisibility.value ? unref(ui).passwordToggle.hideIcon : unref(ui).passwordToggle.showIcon,
                                    padded: false,
                                    onClick: togglePasswordVisibility
                                  }), null, _parent4, _scopeId3));
                                } else {
                                  return [
                                    createVNode(_component_UButton, mergeProps({ ref_for: true }, { ...unref(ui).default.passwordToggle, ...__props.passwordToggle }, {
                                      icon: passwordVisibility.value ? unref(ui).passwordToggle.hideIcon : unref(ui).passwordToggle.showIcon,
                                      padded: false,
                                      onClick: togglePasswordVisibility
                                    }), null, 16, ["icon"])
                                  ];
                                }
                              }),
                              key: "0"
                            } : undefined
                          ]), _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_UInput, mergeProps({
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["label", "description", "help", "hint", "size"])), null, _parent3, _scopeId2));
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field: unref(omit)(field, ["description", "help", "hint", "size"]) }), () => [
                          field.type === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                            key: 0,
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "select" ? (openBlock(), createBlock(_component_USelectMenu, mergeProps({
                            key: 1,
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "password" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                            key: 2,
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            type: passwordVisibility.value ? "text" : "password",
                            ref_for: true
                          }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type"]), { ui: { icon: { trailing: { pointer: "" } } } }), createSlots({ _: 2 }, [
                            __props.passwordToggle ? {
                              name: "trailing",
                              fn: withCtx(() => [
                                createVNode(_component_UButton, mergeProps({ ref_for: true }, { ...unref(ui).default.passwordToggle, ...__props.passwordToggle }, {
                                  icon: passwordVisibility.value ? unref(ui).passwordToggle.hideIcon : unref(ui).passwordToggle.showIcon,
                                  padded: false,
                                  onClick: togglePasswordVisibility
                                }), null, 16, ["icon"])
                              ]),
                              key: "0"
                            } : undefined
                          ]), 1040, ["modelValue", "onUpdate:modelValue", "type"])) : (openBlock(), createBlock(_component_UInput, mergeProps({
                            key: 3,
                            modelValue: state[field.name],
                            "onUpdate:modelValue": ($event) => state[field.name] = $event,
                            ref_for: true
                          }, unref(omit)(field, ["label", "description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"]))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, [
                  _ctx.$slots[`${field.name}-label`] ? {
                    name: "label",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `${field.name}-label`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `${field.name}-label`)
                        ];
                      }
                    }),
                    key: "0"
                  } : undefined,
                  _ctx.$slots[`${field.name}-description`] ? {
                    name: "description",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `${field.name}-description`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `${field.name}-description`)
                        ];
                      }
                    }),
                    key: "1"
                  } : undefined,
                  _ctx.$slots[`${field.name}-hint`] ? {
                    name: "hint",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `${field.name}-hint`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `${field.name}-hint`)
                        ];
                      }
                    }),
                    key: "2"
                  } : undefined,
                  _ctx.$slots[`${field.name}-help`] ? {
                    name: "help",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `${field.name}-help`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `${field.name}-help`)
                        ];
                      }
                    }),
                    key: "3"
                  } : undefined,
                  _ctx.$slots[`${field.name}-error`] ? {
                    name: "error",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `${field.name}-error`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `${field.name}-error`)
                        ];
                      }
                    }),
                    key: "4"
                  } : undefined
                ]), _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              ssrRenderSlot(_ctx.$slots, "validation", {}, null, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(_component_UButton, mergeProps({
                type: "submit",
                block: "",
                loading: __props.loading
              }, { ...unref(ui).default.submitButton, ...__props.submitButton }), null, _parent2, _scopeId));
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.fields, (field) => {
                  return openBlock(), createBlock(_component_UFormGroup, {
                    key: field.name,
                    label: field.type === "checkbox" ? "" : field.label ?? "",
                    description: field.description,
                    help: field.help,
                    hint: field.hint,
                    name: field.name,
                    size: field.size
                  }, createSlots({
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, `${field.name}-field`, mergeProps({ ref_for: true }, { state, field: unref(omit)(field, ["description", "help", "hint", "size"]) }), () => [
                        field.type === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                          key: 0,
                          modelValue: state[field.name],
                          "onUpdate:modelValue": ($event) => state[field.name] = $event,
                          ref_for: true
                        }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "select" ? (openBlock(), createBlock(_component_USelectMenu, mergeProps({
                          key: 1,
                          modelValue: state[field.name],
                          "onUpdate:modelValue": ($event) => state[field.name] = $event,
                          ref_for: true
                        }, unref(omit)(field, ["description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"])) : field.type === "password" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 2,
                          modelValue: state[field.name],
                          "onUpdate:modelValue": ($event) => state[field.name] = $event,
                          type: passwordVisibility.value ? "text" : "password",
                          ref_for: true
                        }, unref(omit)(field, ["label", "description", "help", "hint", "size", "type"]), { ui: { icon: { trailing: { pointer: "" } } } }), createSlots({ _: 2 }, [
                          __props.passwordToggle ? {
                            name: "trailing",
                            fn: withCtx(() => [
                              createVNode(_component_UButton, mergeProps({ ref_for: true }, { ...unref(ui).default.passwordToggle, ...__props.passwordToggle }, {
                                icon: passwordVisibility.value ? unref(ui).passwordToggle.hideIcon : unref(ui).passwordToggle.showIcon,
                                padded: false,
                                onClick: togglePasswordVisibility
                              }), null, 16, ["icon"])
                            ]),
                            key: "0"
                          } : undefined
                        ]), 1040, ["modelValue", "onUpdate:modelValue", "type"])) : (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 3,
                          modelValue: state[field.name],
                          "onUpdate:modelValue": ($event) => state[field.name] = $event,
                          ref_for: true
                        }, unref(omit)(field, ["label", "description", "help", "hint", "size"])), null, 16, ["modelValue", "onUpdate:modelValue"]))
                      ])
                    ]),
                    _: 2
                  }, [
                    _ctx.$slots[`${field.name}-label`] ? {
                      name: "label",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `${field.name}-label`)
                      ]),
                      key: "0"
                    } : undefined,
                    _ctx.$slots[`${field.name}-description`] ? {
                      name: "description",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `${field.name}-description`)
                      ]),
                      key: "1"
                    } : undefined,
                    _ctx.$slots[`${field.name}-hint`] ? {
                      name: "hint",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `${field.name}-hint`)
                      ]),
                      key: "2"
                    } : undefined,
                    _ctx.$slots[`${field.name}-help`] ? {
                      name: "help",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `${field.name}-help`)
                      ]),
                      key: "3"
                    } : undefined,
                    _ctx.$slots[`${field.name}-error`] ? {
                      name: "error",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `${field.name}-error`)
                      ]),
                      key: "4"
                    } : undefined
                  ]), 1032, ["label", "description", "help", "hint", "name", "size"]);
                }), 128)),
                renderSlot(_ctx.$slots, "validation"),
                createVNode(_component_UButton, mergeProps({
                  type: "submit",
                  block: "",
                  loading: __props.loading
                }, { ...unref(ui).default.submitButton, ...__props.submitButton }), null, 16, ["loading"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.footer) {
        _push(`<div class="${ssrRenderClass(unref(ui).footer)}">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/auth/AuthForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UAuthForm" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthForm",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const errorMessage = ref("");
    const form = reactive({
      email: "",
      password: "",
      rememberMe: false
    });
    const fields = [{
      name: "email",
      label: "E-Mail",
      type: "text",
      placeholder: "Deine E-Mail Adresse",
      value: form.email
    }, {
      name: "password",
      label: "Passwort",
      type: "password",
      placeholder: "Dein Passwort",
      value: form.password
    }];
    const validate = (state) => {
      const errors = [];
      if (!state.email) errors.push({ path: "email", message: "E-Mail wird benötigt!" });
      if (!state.password) errors.push({ path: "password", message: "Passwort wird benötigt!" });
      return errors;
    };
    async function onSubmit(data) {
      try {
        const response = await axios.post("http://localhost:80/api/auth/login", {
          email: data.email,
          password: data.password
        }, {
          withCredentials: true
        });
        (void 0).location.reload();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "Die E-Mail oder das Passwort sind falsch.";
        } else if (error.response && error.response.status === 403) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "Ihr Nutzerkonto wurde gesperrt. Einige Funktionen stehen nicht zur Verfügung.";
        } else {
          console.error("Fehler bei der API-Anfrage:", error.message);
          errorMessage.value = "Fehler bei der API-Anfrage. Bitte später erneut versuchen.";
        }
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: errorMessage.value,
          color: "red",
          timeout: 2500,
          title: "Sicherheitsmeldung"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAuthForm = __nuxt_component_0;
      const _component_UAlert = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UAuthForm, mergeProps({
        fields,
        submitButton: { label: "Anmelden" },
        validate,
        title: "Anmeldung",
        align: "top",
        ui: { base: "text-center", footer: "text-center" },
        onSubmit
      }, _attrs), {
        validation: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(errorMessage)) {
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "red",
                icon: "i-heroicons-information-circle-20-solid",
                title: unref(errorMessage)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(errorMessage) ? (openBlock(), createBlock(_component_UAlert, {
                key: 0,
                color: "red",
                icon: "i-heroicons-information-circle-20-solid",
                title: unref(errorMessage)
              }, null, 8, ["title"])) : createCommentVNode("", true)
            ];
          }
        }),
        "password-hint": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://auth.key2host.com/recover" target="_blank" class="text-primary font-medium"${_scopeId}>Passwort vergessen?</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://auth.key2host.com/recover",
                target: "_blank",
                class: "text-primary font-medium"
              }, "Passwort vergessen?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AuthForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const step = ref(1);
    const userName = ref("");
    const stripePromise = loadStripe("pk_test_51QslnTCh2zruBO1L6TygyC6pozDvJ8LtsSTArhoWDmriYwZqk6I9a25CyjvP9IovXAgUBtgUpKlrxTfeB8j7bbWp00PzBrxeFI");
    const stripe = ([__temp, __restore] = withAsyncContext(() => stripePromise), __temp = await __temp, __restore(), __temp);
    const toast = useToast();
    const cart = useCartStore();
    async function buy() {
      try {
        const response = await axios.post(
          "https://saci.key2host.com/api/user/buy/",
          { items: cart.items },
          { withCredentials: true }
        );
        const id = response.data.id;
        const result = await stripe.redirectToCheckout({
          sessionId: id
        });
      } catch (error) {
        console.error(error);
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: "Die Transaktion konnte nicht erstellt werden. Sollte dieser Fehler bestehen, melde dich bitte beim Support.",
          color: "red",
          title: "Zahlung fehlgeschlagen",
          timeout: 5e3,
          pauseTimeoutOnHover: true,
          callback: () => {
            history.back();
          }
        });
      }
    }
    async function fetchData() {
      try {
        const response = await axios.get("https://saci.key2host.com/api/user/hello/", {
          withCredentials: true
        });
        step.value = 2;
        if (response.data.user && response.data.user.name) {
          userName.value = response.data.user.name;
        }
        buy();
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    useSeoMeta({
      title: "Bezahlvorgang",
      ogTitle: "Bezahlvorgang",
      description: "Coming Soon",
      ogDescription: "Coming Soon",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UProgress = __nuxt_component_2$1;
      const _component_UCard = __nuxt_component_0$4;
      const _component_AuthForm = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_UButton = __nuxt_component_0$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-wrap justify-center gap-4 mt-4" }, _attrs))}><div class="w-full max-w-6xl">`);
      if (unref(step) != 2) {
        _push(ssrRenderComponent(_component_UProgress, {
          value: unref(step),
          max: 3
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UProgress, { animation: "carousel" }, null, _parent));
      }
      if (unref(step) == 1) {
        _push(ssrRenderComponent(_component_UCard, { class: "mt-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId}> Anmelden / Registrieren </p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Erstelle ein Konto oder logge dich ein, um die Bestellung abzuschließen. </p>`);
            } else {
              return [
                createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Anmelden / Registrieren "),
                createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Erstelle ein Konto oder logge dich ein, um die Bestellung abzuschließen. ")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col md:flex-row gap-6"${_scopeId}><div class="w-full md:w-1/2 flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AuthForm, null, null, _parent2, _scopeId));
              _push2(`</div><div class="hidden md:block w-px bg-gray-300 dark:bg-gray-600"${_scopeId}></div><div class="w-full md:w-1/2 flex flex-col items-center justify-center text-center"${_scopeId}><h1 class="text-2xl"${_scopeId}>Du besitzt kein Konto?</h1><p class="mt-1"${_scopeId}>Kein Problem, erstelle dir jetzt ein Konto!</p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "https://auth.key2host.com/signup",
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "black",
                      class: "mt-4 w-full max-w-xs flex items-center justify-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Konto erstellen `);
                        } else {
                          return [
                            createTextVNode(" Konto erstellen ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        color: "black",
                        class: "mt-4 w-full max-w-xs flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Konto erstellen ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col md:flex-row gap-6" }, [
                  createVNode("div", { class: "w-full md:w-1/2 flex justify-center" }, [
                    createVNode(_component_AuthForm)
                  ]),
                  createVNode("div", { class: "hidden md:block w-px bg-gray-300 dark:bg-gray-600" }),
                  createVNode("div", { class: "w-full md:w-1/2 flex flex-col items-center justify-center text-center" }, [
                    createVNode("h1", { class: "text-2xl" }, "Du besitzt kein Konto?"),
                    createVNode("p", { class: "mt-1" }, "Kein Problem, erstelle dir jetzt ein Konto!"),
                    createVNode(_component_NuxtLink, {
                      to: "https://auth.key2host.com/signup",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "black",
                          class: "mt-4 w-full max-w-xs flex items-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Konto erstellen ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(step) == 2) {
        _push(ssrRenderComponent(_component_UCard, { class: "mt-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId}> Zahlung abschließen </p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Wähle eine der Zahlungsmethoden, um deine Produkte zu bezahlen. </p>`);
            } else {
              return [
                createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Zahlung abschließen "),
                createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Wähle eine der Zahlungsmethoden, um deine Produkte zu bezahlen. ")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-center bg-gray-100"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}> Warten auf Zahlungsdienstleister... </div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-center bg-gray-100" }, [
                  createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, " Warten auf Zahlungsdienstleister... ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(step) != 1) {
        _push(`<small class="opacity-75"> Angemeldet als ${ssrInterpolate(unref(userName) || "Unbekannter Nutzer")}. <a href="" class="text-primary underline">Nicht du?</a></small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CA227-M_.mjs.map
