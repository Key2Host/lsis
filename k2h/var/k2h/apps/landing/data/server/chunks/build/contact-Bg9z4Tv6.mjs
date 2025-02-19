import { _ as __nuxt_component_0 } from './LandingSection-bJhjn_Li.mjs';
import { _ as __nuxt_component_7 } from './PageGrid-Bo6wnstB.mjs';
import { _ as __nuxt_component_2 } from './PageCard-C1iuatWh.mjs';
import { _ as __nuxt_component_3 } from './Skeleton-Cmf3b7L4.mjs';
import { U as useToast, $ as useCookieNoticeStore, u as useSeoMeta, Y as useAppConfig, F as useUI, X as __nuxt_component_0$e, Z as __nuxt_component_0$3, P as __nuxt_component_0$9, C as __nuxt_component_1$3 } from './server.mjs';
import { useSSRContext, defineComponent, ref, nextTick, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, withDirectives, vModelText, computed, toRef, mergeProps, toDisplayString, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import axios from 'axios';
import 'tailwind-merge';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingFAQ",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
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
  setup(__props) {
    const appConfig = useAppConfig();
    const config = computed(() => ({
      wrapper: "divide-y divide-gray-200 dark:divide-gray-800 -mt-6",
      container: "divide-y divide-gray-200 dark:divide-gray-800",
      item: {
        size: "text-base",
        padding: "py-6"
      },
      button: {
        base: "text-left text-lg py-6 w-full",
        label: "text-gray-900 dark:text-white",
        trailingIcon: {
          name: appConfig.ui.icons.chevron,
          base: "w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",
          active: "",
          inactive: "-rotate-90"
        }
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("landing.faq", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAccordion = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_0$9;
      const _component_UIcon = __nuxt_component_1$3;
      _push(ssrRenderComponent(_component_UAccordion, mergeProps({
        class: unref(ui).wrapper,
        items: __props.items,
        multiple: __props.multiple
      }, unref(attrs), {
        ui: { item: unref(ui).item, container: unref(ui).container }
      }, _attrs), {
        default: withCtx(({ item, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "gray",
              variant: "link",
              ui: { rounded: "rounded-none", color: { gray: { link: "hover:no-underline" } } },
              padded: false,
              class: unref(ui).button.base
            }, {
              trailing: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).button.trailingIcon.name,
                    class: [unref(ui).button.trailingIcon.base, open ? unref(ui).button.trailingIcon.active : unref(ui).button.trailingIcon.inactive]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: unref(ui).button.trailingIcon.name,
                      class: [unref(ui).button.trailingIcon.base, open ? unref(ui).button.trailingIcon.active : unref(ui).button.trailingIcon.inactive]
                    }, null, 8, ["name", "class"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass(unref(ui).button.label)}"${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: unref(ui).button.label
                    }, toDisplayString(item.label), 3)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "gray",
                variant: "link",
                ui: { rounded: "rounded-none", color: { gray: { link: "hover:no-underline" } } },
                padded: false,
                class: unref(ui).button.base
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: unref(ui).button.trailingIcon.name,
                    class: [unref(ui).button.trailingIcon.base, open ? unref(ui).button.trailingIcon.active : unref(ui).button.trailingIcon.inactive]
                  }, null, 8, ["name", "class"])
                ]),
                default: withCtx(() => [
                  createVNode("span", {
                    class: unref(ui).button.label
                  }, toDisplayString(item.label), 3)
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        item: withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "item", scope, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "item", scope)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingFAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "ULandingFAQ" });
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
    useSeoMeta({
      title: "Kontakt",
      ogTitle: "Kontakt",
      description: "",
      ogDescription: ""
    });
    nextTick(() => {
      const messageField = (undefined).getElementById("message");
      const wordCountDisplay = (undefined).getElementById("word-count");
      messageField.addEventListener("input", () => {
        const wordCount = messageField.value.trim().split(/\s+/).length;
        wordCountDisplay.textContent = `Worte: ${wordCount}/500`;
        if (wordCount < 20) {
          wordCountDisplay.style.color = "red";
        } else if (wordCount > 500) {
          wordCountDisplay.style.color = "red";
        } else {
          wordCountDisplay.style.color = "black";
        }
      });
    });
    const faqItems = [
      {
        "label": "Wie sicher ist mein Hosting bei Key2Host?",
        "content": "Wir legen großen Wert auf Sicherheit. Alle Registrierungen werden manuell überprüft, um Spam und Betrug zu vermeiden. Zudem setzen wir auf moderne Verschlüsselungstechnologien, DDoS-Schutz und regelmäßige Sicherheitsupdates. Mehr dazu findest du in unserer Dokumentation.",
        "defaultOpen": true
      },
      {
        "label": "Wie lange dauert die Freischaltung meines Accounts?",
        "content": "Bei der Erstellung deines Kundenkontos wirst du aufgefordert deinen Ausweis zu verifizieren. Dies dauert in der Regel höchstens 2-3 Minuten. Dies gewährleistet ein sicheres und professionelles Umfeld für unsere Kunden."
      },
      {
        "label": "Gibt es ein Mindestalter für die Nutzung von Key2Host?",
        "content": "Ja, das Mindestalter für die Nutzung unserer Dienste beträgt 18 Jahre. Geschäftskunden müssen einen Nachweis über ihr Unternehmen erbringen."
      },
      {
        "label": "Welche Zahlungsmethoden werden akzeptiert?",
        "content": "Wir akzeptieren gängige Zahlungsmethoden wie Kreditkarte, PayPal und SEPA-Lastschrift. Je nach Standort können weitere Optionen verfügbar sein."
      },
      {
        "label": "Kann ich meinen Tarif jederzeit wechseln?",
        "content": "Ja, ein Upgrade oder Downgrade deines Hosting-Pakets ist jederzeit möglich. Änderungen werden in der Regel sofort oder zum nächsten Abrechnungszeitraum wirksam."
      },
      {
        "label": "Gibt es eine Geld-zurück-Garantie?",
        "content": "Ja, wir bieten eine 3-tägige Geld-zurück-Garantie auf unsere Webhosting- und VPS-Tarife, sofern keine Verstöße gegen unsere Nutzungsbedingungen vorliegen."
      },
      {
        "label": "Wie erreiche ich den Support?",
        "content": "Unser Support-Team ist per Ticket-System und E-Mail erreichbar. Geschäftskunden haben zudem die Möglichkeit, einen persönlichen Ansprechpartner zu erhalten."
      }
    ];
    async function postContact(event) {
      event.preventDefault();
      console.log(firstName.value);
      try {
        const response = await axios.post(
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
          description: "Vielen Dank für deine Nachricht. Wir werden uns zeitnah bei dir melden.",
          color: "green",
          title: "Nachricht gesendet",
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
      } catch (error) {
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: "Deine Nachricht konnte nicht gesendet werden: " + error,
          color: "red",
          title: "Ein Fehler ist aufgetreten",
          timeout: 5e3,
          pauseTimeoutOnHover: true
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = __nuxt_component_0;
      const _component_UPageGrid = __nuxt_component_7;
      const _component_UPageCard = __nuxt_component_2;
      const _component_USkeleton = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$e;
      const _component_ULandingFAQ = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ULandingSection, {
        title: "Kontakt",
        description: "Hier können Sie uns jederzeit erreichen."
      }, null, _parent));
      _push(ssrRenderComponent(_component_UPageGrid, { class: "flex justify-center items-stretch flex-wrap gap-4 m-4 sm:m-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "flex flex-col w-full max-w-[625px]",
              title: "Informationen",
              description: "Sie können uns gerne über einer der angegebenen Kontaktmethoden erreichen.",
              icon: "i-heroicons-question-mark-circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="mt-4 text-gray-700 space-y-2"${_scopeId2}><li${_scopeId2}><strong${_scopeId2}>Telefon:</strong> +49 1514 6274092</li><li${_scopeId2}><strong${_scopeId2}>Email:</strong> help@key2host.com</li><li${_scopeId2}><strong${_scopeId2}>Adresse:</strong> Ottenweg 19, 49479 Ibbenbüren</li></ul>`);
                  if (unref(cookienotice).isConsentAll()) {
                    _push3(`<iframe class="mt-4 w-full h-64 rounded-md border border-gray-300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.70744547937!2d7.539348420614583!3d51.9452629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7c1d5942a98ab%3A0x50e3a0fc8f0a7c50!2sOttenweg%2019%2C%2049479%20Ibbenb%C3%BCren!5e0!3m2!1sde!2sde!4v1701705486359!5m2!1sde!2sde" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId2}></iframe>`);
                  } else {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }, null, _parent3, _scopeId2));
                    _push3(`<small${_scopeId2}>Google Maps wurde durch deine Cookie-Einstellungen blockiert.</small></div>`);
                  }
                } else {
                  return [
                    createVNode("ul", { class: "mt-4 text-gray-700 space-y-2" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Telefon:"),
                        createTextVNode(" +49 1514 6274092")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Email:"),
                        createTextVNode(" help@key2host.com")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Adresse:"),
                        createTextVNode(" Ottenweg 19, 49479 Ibbenbüren")
                      ])
                    ]),
                    unref(cookienotice).isConsentAll() ? (openBlock(), createBlock("iframe", {
                      key: 0,
                      class: "mt-4 w-full h-64 rounded-md border border-gray-300",
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.70744547937!2d7.539348420614583!3d51.9452629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7c1d5942a98ab%3A0x50e3a0fc8f0a7c50!2sOttenweg%2019%2C%2049479%20Ibbenb%C3%BCren!5e0!3m2!1sde!2sde!4v1701705486359!5m2!1sde!2sde",
                      style: { "border": "0" },
                      allowfullscreen: "",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade"
                    })) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }),
                      createVNode("small", null, "Google Maps wurde durch deine Cookie-Einstellungen blockiert.")
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "flex flex-col w-full max-w-[625px]",
              title: "Kontaktformular",
              description: "Hier können Sie uns ganz bequem eine Nachricht hinterlassen!",
              icon: "i-heroicons-chat-bubble-left-ellipsis"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="mt-4 space-y-4"${_scopeId2}><div class="flex space-x-4"${_scopeId2}><div class="flex-1"${_scopeId2}><label for="first-name" class="block text-sm font-medium text-gray-700"${_scopeId2}>Vorname <span class="text-red-500"${_scopeId2}>*</span></label><input id="first-name"${ssrRenderAttr("value", firstName.value)} type="text" placeholder="Ihr Vorname" required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div><div class="flex-1"${_scopeId2}><label for="last-name" class="block text-sm font-medium text-gray-700"${_scopeId2}>Nachname <span class="text-red-500"${_scopeId2}>*</span></label><input id="last-name"${ssrRenderAttr("value", lastName.value)} type="text" placeholder="Ihr Nachname" required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div></div><div${_scopeId2}><label for="email" class="block text-sm font-medium text-gray-700"${_scopeId2}>Email <span class="text-red-500"${_scopeId2}>*</span></label><input id="email"${ssrRenderAttr("value", email.value)} type="email" placeholder="Ihre Email" required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}></div><div${_scopeId2}><label for="message" class="block text-sm font-medium text-gray-700"${_scopeId2}>Nachricht <span class="text-red-500"${_scopeId2}>*</span></label><textarea id="message" rows="4" placeholder="Ihre Nachricht" required class="w-full mt-1 p-2 border border-gray-300 rounded-md"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}>${ssrInterpolate(message.value)}</textarea><p id="word-count" class="text-sm text-gray-500 mt-1"${_scopeId2}>Worte: 0/500</p></div><div class="flex items-center"${_scopeId2}><input id="privacy-policy" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}><label for="privacy-policy" class="ml-2 text-sm text-gray-700"${_scopeId2}>Hiermit erklären Sie sich mit unseren `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/legal/tos",
                    target: "_blank",
                    class: "text-primary font-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`AGB `);
                      } else {
                        return [
                          createTextVNode("AGB ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` und dem `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/legal/privacy",
                    target: "_blank",
                    class: "text-primary font-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Datenschutz `);
                      } else {
                        return [
                          createTextVNode(" Datenschutz ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` einverstanden. </label></div><button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"${ssrIncludeBooleanAttr(messageSent.value) ? " disabled" : ""}${_scopeId2}>Absenden</button></form>`);
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
                            createTextVNode("Vorname "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            id: "first-name",
                            "onUpdate:modelValue": ($event) => firstName.value = $event,
                            type: "text",
                            placeholder: "Ihr Vorname",
                            required: "",
                            class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                            disabled: messageSent.value
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, firstName.value]
                          ])
                        ]),
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("label", {
                            for: "last-name",
                            class: "block text-sm font-medium text-gray-700"
                          }, [
                            createTextVNode("Nachname "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            id: "last-name",
                            "onUpdate:modelValue": ($event) => lastName.value = $event,
                            type: "text",
                            placeholder: "Ihr Nachname",
                            required: "",
                            class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                            disabled: messageSent.value
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, lastName.value]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "email",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode("Email "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "email",
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          type: "email",
                          placeholder: "Ihre Email",
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, email.value]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "message",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode("Nachricht "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "message",
                          "onUpdate:modelValue": ($event) => message.value = $event,
                          rows: "4",
                          placeholder: "Ihre Nachricht",
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, message.value]
                        ]),
                        createVNode("p", {
                          id: "word-count",
                          class: "text-sm text-gray-500 mt-1"
                        }, "Worte: 0/500")
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
                          createVNode(_component_NuxtLink, {
                            to: "/legal/tos",
                            target: "_blank",
                            class: "text-primary font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("AGB ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" und dem "),
                          createVNode(_component_NuxtLink, {
                            to: "/legal/privacy",
                            target: "_blank",
                            class: "text-primary font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Datenschutz ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" einverstanden. ")
                        ])
                      ]),
                      createVNode("button", {
                        type: "submit",
                        class: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
                        disabled: messageSent.value
                      }, "Absenden", 8, ["disabled"])
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
                title: "Informationen",
                description: "Sie können uns gerne über einer der angegebenen Kontaktmethoden erreichen.",
                icon: "i-heroicons-question-mark-circle"
              }, {
                default: withCtx(() => [
                  createVNode("ul", { class: "mt-4 text-gray-700 space-y-2" }, [
                    createVNode("li", null, [
                      createVNode("strong", null, "Telefon:"),
                      createTextVNode(" +49 1514 6274092")
                    ]),
                    createVNode("li", null, [
                      createVNode("strong", null, "Email:"),
                      createTextVNode(" help@key2host.com")
                    ]),
                    createVNode("li", null, [
                      createVNode("strong", null, "Adresse:"),
                      createTextVNode(" Ottenweg 19, 49479 Ibbenbüren")
                    ])
                  ]),
                  unref(cookienotice).isConsentAll() ? (openBlock(), createBlock("iframe", {
                    key: 0,
                    class: "mt-4 w-full h-64 rounded-md border border-gray-300",
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.70744547937!2d7.539348420614583!3d51.9452629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7c1d5942a98ab%3A0x50e3a0fc8f0a7c50!2sOttenweg%2019%2C%2049479%20Ibbenb%C3%BCren!5e0!3m2!1sde!2sde!4v1701705486359!5m2!1sde!2sde",
                    style: { "border": "0" },
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_USkeleton, { class: "mt-4 w-full h-64 rounded-md border border-gray-300" }),
                    createVNode("small", null, "Google Maps wurde durch deine Cookie-Einstellungen blockiert.")
                  ]))
                ]),
                _: 1
              }),
              createVNode(_component_UPageCard, {
                class: "flex flex-col w-full max-w-[625px]",
                title: "Kontaktformular",
                description: "Hier können Sie uns ganz bequem eine Nachricht hinterlassen!",
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
                          createTextVNode("Vorname "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "first-name",
                          "onUpdate:modelValue": ($event) => firstName.value = $event,
                          type: "text",
                          placeholder: "Ihr Vorname",
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, firstName.value]
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("label", {
                          for: "last-name",
                          class: "block text-sm font-medium text-gray-700"
                        }, [
                          createTextVNode("Nachname "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "last-name",
                          "onUpdate:modelValue": ($event) => lastName.value = $event,
                          type: "text",
                          placeholder: "Ihr Nachname",
                          required: "",
                          class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                          disabled: messageSent.value
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, lastName.value]
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "email",
                        class: "block text-sm font-medium text-gray-700"
                      }, [
                        createTextVNode("Email "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        id: "email",
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        type: "email",
                        placeholder: "Ihre Email",
                        required: "",
                        class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                        disabled: messageSent.value
                      }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                        [vModelText, email.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "message",
                        class: "block text-sm font-medium text-gray-700"
                      }, [
                        createTextVNode("Nachricht "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("textarea", {
                        id: "message",
                        "onUpdate:modelValue": ($event) => message.value = $event,
                        rows: "4",
                        placeholder: "Ihre Nachricht",
                        required: "",
                        class: "w-full mt-1 p-2 border border-gray-300 rounded-md",
                        disabled: messageSent.value
                      }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                        [vModelText, message.value]
                      ]),
                      createVNode("p", {
                        id: "word-count",
                        class: "text-sm text-gray-500 mt-1"
                      }, "Worte: 0/500")
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
                        createVNode(_component_NuxtLink, {
                          to: "/legal/tos",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("AGB ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" und dem "),
                        createVNode(_component_NuxtLink, {
                          to: "/legal/privacy",
                          target: "_blank",
                          class: "text-primary font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Datenschutz ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" einverstanden. ")
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
                      disabled: messageSent.value
                    }, "Absenden", 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        id: "faq",
        title: "Meist gestellte Frage",
        description: "Vielleicht bist du nicht der erste mit der Frage und findest hier deine Antwort!",
        class: "scroll-mt-[var(--header-height)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingFAQ, {
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
              createVNode(_component_ULandingFAQ, {
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-Bg9z4Tv6.mjs.map
