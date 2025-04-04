import { U as UPageSection } from './PageSection.vue.mjs';
import { _ as __nuxt_component_7 } from './PageGrid.vue.mjs';
import { _ as __nuxt_component_2 } from './PageCard.vue.mjs';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { _ as __nuxt_component_1 } from './Skeleton.vue.mjs';
import { D as __nuxt_component_0, E as transformUI, s as tv, _ as _appConfig, z as useToast, F as useCookieNoticeStore, a as useI18n, b as useSeoMeta, C as __nuxt_component_2$1, v as __nuxt_component_2$2 } from './server.mjs';
import { _ as __nuxt_component_8 } from './NuxtTurnstile.vue.mjs';
import { defineComponent, useSlots, mergeProps, unref, createSlots, renderList, withCtx, renderSlot, useSSRContext, ref, computed, createVNode, createBlock, createTextVNode, toDisplayString, openBlock, withDirectives, vModelText } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import axios from 'axios';
import 'reka-ui';
import '@vueuse/core';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'unhead/scripts';
import '@vueuse/shared';

const theme = {
  "slots": {
    "trigger": "text-base",
    "body": "text-base text-(--ui-text-muted)"
  }
};

var _a;
const appConfigPageAccordion = _appConfig;
const pageAccordion = tv({ extend: tv(theme), ...((_a = appConfigPageAccordion.uiPro) == null ? void 0 : _a.pageAccordion) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageAccordion",
  __ssrInlineRender: true,
  props: {
    type: { default: "multiple" },
    ui: {}
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAccordion = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UAccordion, mergeProps({
        type: _ctx.type,
        "unmount-on-hide": false,
        ui: unref(transformUI)(unref(pageAccordion)())
      }, _attrs), createSlots({ _: 2 }, [
        renderList(slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotData, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, name, slotData, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, name, slotData)
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UPageAccordion = Object.assign(_sfc_main$1, { __name: "UPageAccordion" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const cookienotice = useCookieNoticeStore();
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const message = ref("");
    const messageSent = ref(false);
    const { t } = useI18n({
      useScope: "global"
    });
    const turnstile = ref();
    const turnstileToken = ref("");
    const wordCount = computed(() => {
      const trimmedMessage = message.value.trim();
      if (trimmedMessage === "") {
        return 0;
      }
      return trimmedMessage.split(/\s+/).length;
    });
    const wordCountColor = computed(() => {
      if (wordCount.value == 0) return;
      if (wordCount.value < 20) {
        return "red";
      } else if (wordCount.value > 500) {
        return "red";
      }
    });
    const faqItems = [
      {
        "label": t("contact.faq.items.1.title"),
        "content": t("contact.faq.items.1.description")
      },
      {
        "label": t("contact.faq.items.2.title"),
        "content": t("contact.faq.items.2.description")
      },
      {
        "label": t("contact.faq.items.3.title"),
        "content": t("contact.faq.items.3.description")
      },
      {
        "label": t("contact.faq.items.4.title"),
        "content": t("contact.faq.items.4.description")
      },
      {
        "label": t("contact.faq.items.5.title"),
        "content": t("contact.faq.items.5.description")
      },
      {
        "label": t("contact.faq.items.6.title"),
        "content": t("contact.faq.items.6.description")
      },
      {
        "label": t("contact.faq.items.7.title"),
        "content": t("contact.faq.items.7.description")
      }
    ];
    async function postContact(event) {
      var _a;
      event.preventDefault();
      if (wordCount.value < 20 || wordCount.value > 500) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("contact.contactform.lengthModal.description"),
          color: "error",
          title: t("contact.contactform.lengthModal.title"),
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
        return;
      }
      try {
        const response = await axios.post(
          "/api/validateTurnstile",
          {
            "token": turnstileToken.value
          }
        );
        (_a = turnstile.value) == null ? void 0 : _a.reset();
        if (!response.data.success) {
          toast.add({
            icon: "i-heroicons-exclamation-triangle",
            description: t("captcha.failed.description"),
            color: "error",
            title: t("captcha.failed.title"),
            timeout: 5e3,
            pauseTimeoutOnHover: true
          });
          return;
        }
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("captcha.error.description"),
          color: "error",
          title: t("captcha.error.title"),
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
      }
      try {
        await axios.post(
          "https://saci.key2host.com/api/public/contact/",
          {
            firstname: firstName.value,
            lastname: lastName.value,
            email: email.value,
            message: message.value
          }
        );
        messageSent.value = true;
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("contact.contactform.successModal.description"),
          color: "success",
          title: t("contact.contactform.successModal.title"),
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("contact.contactform.errorModal.description") + ": " + error,
          color: "error",
          title: t("contact.contactform.errorModal.title"),
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
      }
    }
    useSeoMeta({
      title: t("contact.hero.title"),
      ogTitle: t("contact.hero.title"),
      description: t("contact.hero.description"),
      ogDescription: t("contact.hero.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = UPageSection;
      const _component_UPageGrid = __nuxt_component_7;
      const _component_UPageCard = __nuxt_component_2;
      const _component_LMap = LMap;
      const _component_LTileLayer = LTileLayer;
      const _component_LMarker = LMarker;
      const _component_USkeleton = __nuxt_component_1;
      const _component_NuxtLinkLocale = __nuxt_component_2$1;
      const _component_NuxtTurnstile = __nuxt_component_8;
      const _component_UButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UPageSection, {
        title: _ctx.$t("contact.hero.title"),
        description: _ctx.$t("contact.hero.description")
      }, null, _parent));
      _push(ssrRenderComponent(_component_UPageGrid, { class: "flex justify-center items-stretch flex-wrap gap-4 m-4 sm:m-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "flex flex-col w-full max-w-[625px]",
              title: _ctx.$t("contact.information.title"),
              description: _ctx.$t("contact.information.description"),
              icon: "i-heroicons-question-mark-circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="mt-4 text-gray-700 space-y-2"${_scopeId2}><li${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.information.phone"))}:</strong> +49 1514 6274092</li><li${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.information.email"))}:</strong> help@key2host.com</li><li${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.information.address"))}:</strong> Ottenweg 19, 49479 Ibbenbüren</li></ul>`);
                  if (unref(cookienotice).isConsentAll()) {
                    _push3(`<div class="mt-4 w-full h-96 rounded-md border border-gray-300"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_LMap, {
                      class: "z-0",
                      ref: "map",
                      minZoom: 4,
                      zoom: 4,
                      maxZoom: 10,
                      center: [52.2697265, 7.7726088],
                      "use-global-leaflet": false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_LTileLayer, {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            attribution: "© <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>",
                            ",": "",
                            "layer-type": "base",
                            name: "Satellite"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_LMarker, { "lat-lng": [52.2697265, 7.7726088] }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_LTileLayer, {
                              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                              attribution: "© <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>",
                              ",": "",
                              "layer-type": "base",
                              name: "Satellite"
                            }),
                            createVNode(_component_LMarker, { "lat-lng": [52.2697265, 7.7726088] })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }, null, _parent3, _scopeId2));
                    _push3(`<small${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.information.nomaps"))}</small></div>`);
                  }
                } else {
                  return [
                    createVNode("ul", { class: "mt-4 text-gray-700 space-y-2" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.phone")) + ":", 1),
                        createTextVNode(" +49 1514 6274092")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.email")) + ":", 1),
                        createTextVNode(" help@key2host.com")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.address")) + ":", 1),
                        createTextVNode(" Ottenweg 19, 49479 Ibbenbüren")
                      ])
                    ]),
                    unref(cookienotice).isConsentAll() ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4 w-full h-96 rounded-md border border-gray-300"
                    }, [
                      createVNode(_component_LMap, {
                        class: "z-0",
                        ref: "map",
                        minZoom: 4,
                        zoom: 4,
                        maxZoom: 10,
                        center: [52.2697265, 7.7726088],
                        "use-global-leaflet": false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_LTileLayer, {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            attribution: "© <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>",
                            ",": "",
                            "layer-type": "base",
                            name: "Satellite"
                          }),
                          createVNode(_component_LMarker, { "lat-lng": [52.2697265, 7.7726088] })
                        ]),
                        _: 1
                      }, 512)
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }),
                      createVNode("small", null, toDisplayString(_ctx.$t("contact.information.nomaps")), 1)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "flex flex-col w-full max-w-[625px]",
              title: _ctx.$t("contact.contactform.title"),
              description: _ctx.$t("contact.contactform.description"),
              icon: "i-heroicons-chat-bubble-left-ellipsis"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="mt-4 space-y-4"${_scopeId2}><div class="flex space-x-4"${_scopeId2}><div class="flex-1"${_scopeId2}><label for="first-name" class="block text-sm font-medium text-gray-700"${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.firstname.label"))} <span class="text-red-500"${_scopeId2}>*</span></label><input id="first-name"${ssrRenderAttr("value", firstName.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.firstname.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div><div class="flex-1"${_scopeId2}><label for="last-name" class="block text-sm font-medium text-gray-700"${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.lastname.label"))} <span class="text-red-500"${_scopeId2}>*</span></label><input id="last-name"${ssrRenderAttr("value", lastName.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.lastname.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div></div><div${_scopeId2}><label for="email" class="block text-sm font-medium text-gray-700"${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.email.label"))} <span class="text-red-500"${_scopeId2}>*</span></label><input id="email"${ssrRenderAttr("value", email.value)} type="email"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.email.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div><div${_scopeId2}><label for="message" class="block text-sm font-medium text-gray-700"${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.message.label"))} <span class="text-red-500"${_scopeId2}>*</span></label><textarea id="message" rows="4"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.message.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}>${ssrInterpolate(message.value)}</textarea><p id="word-count" style="${ssrRenderStyle({ color: wordCountColor.value })}" class="text-sm text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.message.words"))}: ${ssrInterpolate(wordCount.value)} / 500</p></div><div class="flex items-center"${_scopeId2}><input id="privacy-policy" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}><label for="privacy-policy" class="ml-2 text-sm text-gray-700"${_scopeId2}>Hiermit erklären Sie sich mit unseren `);
                  _push3(ssrRenderComponent(_component_NuxtLinkLocale, {
                    to: "/legal/tos",
                    target: "_blank",
                    class: "text-primary font-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("menus.footer.legal.tos"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.tos")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` &amp; `);
                  _push3(ssrRenderComponent(_component_NuxtLinkLocale, {
                    to: "/legal/privacy",
                    target: "_blank",
                    class: "text-primary font-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("menus.footer.legal.privacy"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.privacy")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` einverstanden. </label></div>`);
                  _push3(ssrRenderComponent(_component_NuxtTurnstile, {
                    ref_key: "turnstile",
                    ref: turnstile,
                    modelValue: turnstileToken.value,
                    "onUpdate:modelValue": ($event) => turnstileToken.value = $event,
                    options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "neutral",
                    label: unref(t)("contact.contactform.inputs.submit"),
                    icon: "i-heroicons-paper-airplane",
                    trailing: "true",
                    size: "xl",
                    class: "mt-4",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: postContact,
                      class: "mt-4 space-y-4"
                    }, [
                      createVNode("div", { class: "flex space-x-4" }, [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("label", {
                            for: "first-name",
                            class: "block text-sm font-medium text-gray-700"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.firstname.label")) + " ", 1),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            id: "first-name",
                            "onUpdate:modelValue": ($event) => firstName.value = $event,
                            type: "text",
                            placeholder: _ctx.$t("contact.contactform.inputs.firstname.placeholder"),
                            required: "",
                            class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                            disabled: messageSent.value
                          }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                            [vModelText, firstName.value]
                          ])
                        ]),
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("label", {
                            for: "last-name",
                            class: "block text-sm font-medium text-gray-700"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.lastname.label")) + " ", 1),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            id: "last-name",
                            "onUpdate:modelValue": ($event) => lastName.value = $event,
                            type: "text",
                            placeholder: _ctx.$t("contact.contactform.inputs.lastname.placeholder"),
                            required: "",
                            class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                            disabled: messageSent.value
                          }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                            [vModelText, lastName.value]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "email",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.email.label")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "email",
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          type: "email",
                          placeholder: _ctx.$t("contact.contactform.inputs.email.placeholder"),
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                          [vModelText, email.value]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "message",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.message.label")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "message",
                          "onUpdate:modelValue": ($event) => message.value = $event,
                          rows: "4",
                          placeholder: _ctx.$t("contact.contactform.inputs.message.placeholder"),
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                          [vModelText, message.value]
                        ]),
                        createVNode("p", {
                          id: "word-count",
                          style: { color: wordCountColor.value },
                          class: "text-sm text-gray-500 mt-1"
                        }, toDisplayString(_ctx.$t("contact.contactform.inputs.message.words")) + ": " + toDisplayString(wordCount.value) + " / 500", 5)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("input", {
                          id: "privacy-policy",
                          type: "checkbox",
                          required: "",
                          class: "h-4 w-4 text-blue-600 border-gray-300 rounded",
                          disabled: messageSent.value
                        }, null, 8, ["disabled"]),
                        createVNode("label", {
                          for: "privacy-policy",
                          class: "ml-2 text-sm text-gray-700"
                        }, [
                          createTextVNode("Hiermit erklären Sie sich mit unseren "),
                          createVNode(_component_NuxtLinkLocale, {
                            to: "/legal/tos",
                            target: "_blank",
                            class: "text-primary font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.tos")), 1)
                            ]),
                            _: 1
                          }),
                          createTextVNode(" & "),
                          createVNode(_component_NuxtLinkLocale, {
                            to: "/legal/privacy",
                            target: "_blank",
                            class: "text-primary font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.privacy")), 1)
                            ]),
                            _: 1
                          }),
                          createTextVNode(" einverstanden. ")
                        ])
                      ]),
                      createVNode(_component_NuxtTurnstile, {
                        ref_key: "turnstile",
                        ref: turnstile,
                        modelValue: turnstileToken.value,
                        "onUpdate:modelValue": ($event) => turnstileToken.value = $event,
                        options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "neutral",
                        label: unref(t)("contact.contactform.inputs.submit"),
                        icon: "i-heroicons-paper-airplane",
                        trailing: "true",
                        size: "xl",
                        class: "mt-4",
                        autofocus: ""
                      }, null, 8, ["label"])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageCard, {
                class: "flex flex-col w-full max-w-[625px]",
                title: _ctx.$t("contact.information.title"),
                description: _ctx.$t("contact.information.description"),
                icon: "i-heroicons-question-mark-circle"
              }, {
                default: withCtx(() => [
                  createVNode("ul", { class: "mt-4 text-gray-700 space-y-2" }, [
                    createVNode("li", null, [
                      createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.phone")) + ":", 1),
                      createTextVNode(" +49 1514 6274092")
                    ]),
                    createVNode("li", null, [
                      createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.email")) + ":", 1),
                      createTextVNode(" help@key2host.com")
                    ]),
                    createVNode("li", null, [
                      createVNode("strong", null, toDisplayString(_ctx.$t("contact.information.address")) + ":", 1),
                      createTextVNode(" Ottenweg 19, 49479 Ibbenbüren")
                    ])
                  ]),
                  unref(cookienotice).isConsentAll() ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 w-full h-96 rounded-md border border-gray-300"
                  }, [
                    createVNode(_component_LMap, {
                      class: "z-0",
                      ref: "map",
                      minZoom: 4,
                      zoom: 4,
                      maxZoom: 10,
                      center: [52.2697265, 7.7726088],
                      "use-global-leaflet": false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_LTileLayer, {
                          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                          attribution: "© <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>",
                          ",": "",
                          "layer-type": "base",
                          name: "Satellite"
                        }),
                        createVNode(_component_LMarker, { "lat-lng": [52.2697265, 7.7726088] })
                      ]),
                      _: 1
                    }, 512)
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }),
                    createVNode("small", null, toDisplayString(_ctx.$t("contact.information.nomaps")), 1)
                  ]))
                ]),
                _: 1
              }, 8, ["title", "description"]),
              createVNode(_component_UPageCard, {
                class: "flex flex-col w-full max-w-[625px]",
                title: _ctx.$t("contact.contactform.title"),
                description: _ctx.$t("contact.contactform.description"),
                icon: "i-heroicons-chat-bubble-left-ellipsis"
              }, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: postContact,
                    class: "mt-4 space-y-4"
                  }, [
                    createVNode("div", { class: "flex space-x-4" }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("label", {
                          for: "first-name",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.firstname.label")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "first-name",
                          "onUpdate:modelValue": ($event) => firstName.value = $event,
                          type: "text",
                          placeholder: _ctx.$t("contact.contactform.inputs.firstname.placeholder"),
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                          [vModelText, firstName.value]
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("label", {
                          for: "last-name",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.lastname.label")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "last-name",
                          "onUpdate:modelValue": ($event) => lastName.value = $event,
                          type: "text",
                          placeholder: _ctx.$t("contact.contactform.inputs.lastname.placeholder"),
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                          [vModelText, lastName.value]
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "email",
                        class: "block text-sm font-medium text-gray-700"
                      }, [
                        createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.email.label")) + " ", 1),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        id: "email",
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        type: "email",
                        placeholder: _ctx.$t("contact.contactform.inputs.email.placeholder"),
                        required: "",
                        class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                        disabled: messageSent.value
                      }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                        [vModelText, email.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "message",
                        class: "block text-sm font-medium text-gray-700"
                      }, [
                        createTextVNode(toDisplayString(_ctx.$t("contact.contactform.inputs.message.label")) + " ", 1),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("textarea", {
                        id: "message",
                        "onUpdate:modelValue": ($event) => message.value = $event,
                        rows: "4",
                        placeholder: _ctx.$t("contact.contactform.inputs.message.placeholder"),
                        required: "",
                        class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                        disabled: messageSent.value
                      }, null, 8, ["onUpdate:modelValue", "placeholder", "disabled"]), [
                        [vModelText, message.value]
                      ]),
                      createVNode("p", {
                        id: "word-count",
                        style: { color: wordCountColor.value },
                        class: "text-sm text-gray-500 mt-1"
                      }, toDisplayString(_ctx.$t("contact.contactform.inputs.message.words")) + ": " + toDisplayString(wordCount.value) + " / 500", 5)
                    ]),
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("input", {
                        id: "privacy-policy",
                        type: "checkbox",
                        required: "",
                        class: "h-4 w-4 text-blue-600 border-gray-300 rounded",
                        disabled: messageSent.value
                      }, null, 8, ["disabled"]),
                      createVNode("label", {
                        for: "privacy-policy",
                        class: "ml-2 text-sm text-gray-700"
                      }, [
                        createTextVNode("Hiermit erklären Sie sich mit unseren "),
                        createVNode(_component_NuxtLinkLocale, {
                          to: "/legal/tos",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.tos")), 1)
                          ]),
                          _: 1
                        }),
                        createTextVNode(" & "),
                        createVNode(_component_NuxtLinkLocale, {
                          to: "/legal/privacy",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.privacy")), 1)
                          ]),
                          _: 1
                        }),
                        createTextVNode(" einverstanden. ")
                      ])
                    ]),
                    createVNode(_component_NuxtTurnstile, {
                      ref_key: "turnstile",
                      ref: turnstile,
                      modelValue: turnstileToken.value,
                      "onUpdate:modelValue": ($event) => turnstileToken.value = $event,
                      options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "neutral",
                      label: unref(t)("contact.contactform.inputs.submit"),
                      icon: "i-heroicons-paper-airplane",
                      trailing: "true",
                      size: "xl",
                      class: "mt-4",
                      autofocus: ""
                    }, null, 8, ["label"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPageSection, {
        id: "faq",
        title: _ctx.$t("contact.faq.title"),
        description: _ctx.$t("contact.faq.description"),
        class: "scroll-mt-[var(--header-height)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UPageAccordion), {
              multiple: "",
              items: faqItems,
              ui: {
                button: {
                  label: "font-semibold",
                  trailingIcon: {
                    base: "w-6 h-6"
                  }
                }
              },
              class: "max-w-4xl mx-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UPageAccordion), {
                multiple: "",
                items: faqItems,
                ui: {
                  button: {
                    label: "font-semibold",
                    trailingIcon: {
                      base: "w-6 h-6"
                    }
                  }
                },
                class: "max-w-4xl mx-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.vue.mjs.map
