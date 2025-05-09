import { M as Motion, _ as _sfc_main$2 } from './PageSection-Bp1Prz50.mjs';
import { _ as _sfc_main$3 } from './PageGrid-jMdvXiF3.mjs';
import { _ as _sfc_main$4 } from './PageCard-BAQPfmtU.mjs';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { _ as _sfc_main$5 } from './Skeleton-CNUiTn1T.mjs';
import { i as useToast, j as useCookieNoticeStore, b as useI18n, d as useSeoMeta, f as __nuxt_component_3$1, k as _sfc_main$u, u as useAppConfig, t as tv, g as _sfc_main$4$1, h as transformUI } from './server.mjs';
import { _ as _sfc_main$6 } from './NuxtTurnstile-DNygPsx1.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, createBlock, createTextVNode, toDisplayString, openBlock, withDirectives, vModelText, useSlots, mergeProps, createSlots, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import axios from 'axios';
import 'hey-listen';
import 'reka-ui';
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
import 'better-sqlite3';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'unhead/scripts';

const theme = {
  "slots": {
    "base": "",
    "trigger": "text-base",
    "body": "text-base text-muted"
  }
};
const _sfc_main$1 = {
  __name: "UPageAccordion",
  __ssrInlineRender: true,
  props: {
    type: { type: null, required: false, default: "multiple" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageAccordion) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UAccordion = _sfc_main$4$1;
      _push(ssrRenderComponent(_component_UAccordion, mergeProps({
        type: __props.type,
        "unmount-on-hide": false,
        class: ui.value.base({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.base] }),
        ui: unref(transformUI)(ui.value, props.ui)
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
          duration: 5e3
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
            duration: 5e3
          });
          return;
        }
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("captcha.error.description"),
          color: "error",
          title: t("captcha.error.title"),
          duration: 5e3
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
          duration: 5e3
        });
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: t("contact.contactform.errorModal.description") + ": " + error,
          color: "error",
          title: t("contact.contactform.errorModal.title"),
          duration: 5e3
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
      const _component_Motion = Motion;
      const _component_UPageSection = _sfc_main$2;
      const _component_UPageGrid = _sfc_main$3;
      const _component_UPageCard = _sfc_main$4;
      const _component_LMap = LMap;
      const _component_LTileLayer = LTileLayer;
      const _component_LMarker = LMarker;
      const _component_USkeleton = _sfc_main$5;
      const _component_NuxtLinkLocale = __nuxt_component_3$1;
      const _component_NuxtTurnstile = _sfc_main$6;
      const _component_UButton = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: _ctx.$t("contact.hero.title"),
              description: _ctx.$t("contact.hero.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageSection, {
                title: _ctx.$t("contact.hero.title"),
                description: _ctx.$t("contact.hero.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPageGrid, { class: "flex justify-center items-stretch flex-wrap gap-4 m-4 sm:m-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
              class: "flex flex-col w-full max-w-[625px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    class: "flex flex-col h-full",
                    title: _ctx.$t("contact.information.title"),
                    description: _ctx.$t("contact.information.description")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="mt-4 text-gray-700 space-y-2"${_scopeId3}><li${_scopeId3}><strong${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.information.phone"))}:</strong> +49 1514 6274092</li><li${_scopeId3}><strong${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.information.email"))}:</strong> help@key2host.com</li><li${_scopeId3}><strong${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.information.address"))}:</strong> Ottenweg 19, 49479 Ibbenbüren</li></ul>`);
                        if (unref(cookienotice).isConsentAll()) {
                          _push4(`<div class="mt-4 w-full h-96 rounded-md border border-gray-300"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_LMap, {
                            class: "z-0",
                            ref: "map",
                            minZoom: 4,
                            zoom: 4,
                            maxZoom: 10,
                            center: [52.2697265, 7.7726088],
                            "use-global-leaflet": false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_LTileLayer, {
                                  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                  attribution: "© <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>",
                                  ",": "",
                                  "layer-type": "base",
                                  name: "Satellite"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_LMarker, { "lat-lng": [52.2697265, 7.7726088] }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }, null, _parent4, _scopeId3));
                          _push4(`<small${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.information.nomaps"))}</small></div>`);
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageCard, {
                      class: "flex flex-col h-full",
                      title: _ctx.$t("contact.information.title"),
                      description: _ctx.$t("contact.information.description")
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
                    }, 8, ["title", "description"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Motion, {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
              class: "flex flex-col w-full max-w-[625px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    class: "flex flex-col h-full",
                    title: _ctx.$t("contact.contactform.title"),
                    description: _ctx.$t("contact.contactform.description")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form class="mt-4 space-y-4"${_scopeId3}><div class="flex space-x-4"${_scopeId3}><div class="flex-1"${_scopeId3}><label for="first-name" class="block text-sm font-medium text-gray-700"${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.firstname.label"))} <span class="text-red-500"${_scopeId3}>*</span></label><input id="first-name"${ssrRenderAttr("value", firstName.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.firstname.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId3}></div><div class="flex-1"${_scopeId3}><label for="last-name" class="block text-sm font-medium text-gray-700"${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.lastname.label"))} <span class="text-red-500"${_scopeId3}>*</span></label><input id="last-name"${ssrRenderAttr("value", lastName.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.lastname.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId3}></div></div><div${_scopeId3}><label for="email" class="block text-sm font-medium text-gray-700"${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.email.label"))} <span class="text-red-500"${_scopeId3}>*</span></label><input id="email"${ssrRenderAttr("value", email.value)} type="email"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.email.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId3}></div><div${_scopeId3}><label for="message" class="block text-sm font-medium text-gray-700"${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.message.label"))} <span class="text-red-500"${_scopeId3}>*</span></label><textarea id="message" rows="4"${ssrRenderAttr("placeholder", _ctx.$t("contact.contactform.inputs.message.placeholder"))} required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId3}>${ssrInterpolate(message.value)}</textarea><p id="word-count" style="${ssrRenderStyle({ color: wordCountColor.value })}" class="text-sm text-gray-500 mt-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("contact.contactform.inputs.message.words"))}: ${ssrInterpolate(wordCount.value)} / 500</p></div><div class="flex items-center"${_scopeId3}><input id="privacy-policy" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId3}><label for="privacy-policy" class="ml-2 text-sm text-gray-700"${_scopeId3}>Hiermit erklären Sie sich mit unseren `);
                        _push4(ssrRenderComponent(_component_NuxtLinkLocale, {
                          to: "/legal/tos",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("menus.footer.legal.tos"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.tos")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` &amp; `);
                        _push4(ssrRenderComponent(_component_NuxtLinkLocale, {
                          to: "/legal/privacy",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("menus.footer.legal.privacy"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("menus.footer.legal.privacy")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` einverstanden. </label></div>`);
                        _push4(ssrRenderComponent(_component_NuxtTurnstile, {
                          ref_key: "turnstile",
                          ref: turnstile,
                          modelValue: turnstileToken.value,
                          "onUpdate:modelValue": ($event) => turnstileToken.value = $event,
                          options: { language: _ctx.$i18n.locale === "de" ? "de" : "en" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "primary",
                          label: unref(t)("contact.contactform.inputs.submit"),
                          icon: "i-heroicons-paper-airplane",
                          trailing: "",
                          size: "xl",
                          class: "mt-4",
                          autofocus: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</form>`);
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
                              color: "primary",
                              label: unref(t)("contact.contactform.inputs.submit"),
                              icon: "i-heroicons-paper-airplane",
                              trailing: "",
                              size: "xl",
                              class: "mt-4",
                              autofocus: ""
                            }, null, 8, ["label"])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageCard, {
                      class: "flex flex-col h-full",
                      title: _ctx.$t("contact.contactform.title"),
                      description: _ctx.$t("contact.contactform.description")
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
                            color: "primary",
                            label: unref(t)("contact.contactform.inputs.submit"),
                            icon: "i-heroicons-paper-airplane",
                            trailing: "",
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
                class: "flex flex-col w-full max-w-[625px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageCard, {
                    class: "flex flex-col h-full",
                    title: _ctx.$t("contact.information.title"),
                    description: _ctx.$t("contact.information.description")
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
                  }, 8, ["title", "description"])
                ]),
                _: 1
              }),
              createVNode(_component_Motion, {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
                class: "flex flex-col w-full max-w-[625px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageCard, {
                    class: "flex flex-col h-full",
                    title: _ctx.$t("contact.contactform.title"),
                    description: _ctx.$t("contact.contactform.description")
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
                          color: "primary",
                          label: unref(t)("contact.contactform.inputs.submit"),
                          icon: "i-heroicons-paper-airplane",
                          trailing: "",
                          size: "xl",
                          class: "mt-4",
                          autofocus: ""
                        }, null, 8, ["label"])
                      ], 32)
                    ]),
                    _: 1
                  }, 8, ["title", "description"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Motion, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut", delay: 0.6 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageSection, {
              id: "faq",
              title: _ctx.$t("contact.faq.title"),
              description: _ctx.$t("contact.faq.description"),
              class: "scroll-mt-[var(--header-height)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    multiple: "",
                    items: faqItems,
                    class: "max-w-4xl mx-auto"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$1), {
                      multiple: "",
                      items: faqItems,
                      class: "max-w-4xl mx-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageSection, {
                id: "faq",
                title: _ctx.$t("contact.faq.title"),
                description: _ctx.$t("contact.faq.description"),
                class: "scroll-mt-[var(--header-height)]"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1), {
                    multiple: "",
                    items: faqItems,
                    class: "max-w-4xl mx-auto"
                  })
                ]),
                _: 1
              }, 8, ["title", "description"])
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
//# sourceMappingURL=contact-BCzVFm9j.mjs.map
