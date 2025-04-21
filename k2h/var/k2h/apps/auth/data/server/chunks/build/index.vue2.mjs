import { _ as __nuxt_component_0 } from './NuxtLinkLocale.mjs';
import { a as __nuxt_component_7, _ as __nuxt_component_1 } from './Progress.vue.mjs';
import { q as __nuxt_component_5, U as UIcon, s as useToast, w as useSeoMeta, x as __nuxt_component_2 } from './server.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_4 } from './Input.vue.mjs';
import { defineComponent, ref, computed, watch, withCtx, createVNode, useSSRContext, mergeProps, unref, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public2.mjs';
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
import 'reka-ui/namespaced';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PasswordForm",
  __ssrInlineRender: true,
  props: {
    password: {
      type: String,
      required: true
    },
    passwordsMatch: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:password", "update:passwordsMatch"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const password = ref("");
    const passwordConfirm = ref("");
    const showPassword = ref(false);
    const showConfirm = ref(false);
    function checkStrength(str) {
      const requirements = [
        { regex: /.{8,}/, text: "Mindestens 8 Zeichen" },
        { regex: /\d/, text: "Mindestens eine Zahl" },
        { regex: /[a-z]/, text: "Mindestens ein Kleinbuchstabe" },
        { regex: /[A-Z]/, text: "Mindestens ein Großbuchstabe" },
        { regex: /[^A-Za-z0-9]/, text: "Mindestens ein Sonderzeichen" }
      ];
      return requirements.map((req) => ({ met: req.regex.test(str), text: req.text }));
    }
    const strength = computed(() => checkStrength(password.value));
    const score = computed(() => strength.value.filter((r) => r.met).length);
    const color = computed(() => {
      if (score.value === 0) return "neutral";
      if (score.value <= 2) return "warning";
      if (score.value === 3 || score.value === 4) return "warning";
      return "success";
    });
    const text = computed(() => {
      if (score.value === 0) return "Bitte Passwort eingeben";
      if (score.value <= 2) return "Schwaches Passwort";
      if (score.value === 3 || score.value === 4) return "Mittleres Passwort";
      return "Starkes Passwort";
    });
    const passwordsMatch = computed(() => password.value === passwordConfirm.value);
    watch(password, (newPassword) => {
      emit("update:password", newPassword);
      if (score.value < 3) {
        passwordConfirm.value = "";
      }
    });
    watch(passwordsMatch, (newMatch) => {
      emit("update:passwordsMatch", newMatch);
    });
    watch(score, (newScore) => {
      if (newScore < 5) {
        passwordConfirm.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
      const _component_UProgress = __nuxt_component_7;
      const _component_UIcon = UIcon;
      _push(`<!--[--><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, { label: "Passwort" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event,
              type: showPassword.value ? "text" : "password",
              placeholder: "Passwort",
              color: color.value,
              autocomplete: "new-password",
              "aria-invalid": score.value < 5,
              "aria-describedby": "password-strength",
              class: "w-full",
              ui: { trailing: "pe-1" },
              icon: "i-lucide-lock"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showPassword.value = !showPassword.value,
                    "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                      variant: "link",
                      color: "neutral",
                      size: "sm",
                      onClick: ($event) => showPassword.value = !showPassword.value,
                      "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                    }, null, 8, ["icon", "onClick", "aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: password.value,
                "onUpdate:modelValue": ($event) => password.value = $event,
                type: showPassword.value ? "text" : "password",
                placeholder: "Passwort",
                color: color.value,
                autocomplete: "new-password",
                "aria-invalid": score.value < 5,
                "aria-describedby": "password-strength",
                class: "w-full",
                ui: { trailing: "pe-1" },
                icon: "i-lucide-lock"
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: showPassword.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showPassword.value = !showPassword.value,
                    "aria-label": showPassword.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, 8, ["icon", "onClick", "aria-label"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type", "color", "aria-invalid"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UProgress, {
        color: color.value,
        indicator: text.value,
        "model-value": score.value,
        max: 5,
        size: "sm"
      }, null, _parent));
      _push(`<p id="password-strength" class="text-sm font-medium">${ssrInterpolate(text.value)}. Es muss enthalten: </p><ul class="space-y-1" aria-label="Passwortanforderungen"><!--[-->`);
      ssrRenderList(strength.value, (req, index) => {
        _push(`<li class="${ssrRenderClass([req.met ? "text-success-600" : "text-gray-400", "flex items-center gap-1"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: req.met ? "i-lucide-circle-check" : "i-lucide-circle-x",
          class: "size-4"
        }, null, _parent));
        _push(`<span class="text-xs">${ssrInterpolate(req.text)} <span class="sr-only">${ssrInterpolate(req.met ? "erfüllt" : "nicht erfüllt")}</span></span></li>`);
      });
      _push(`<!--]--></ul></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, { label: "Passwort bestätigen" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: passwordConfirm.value,
              "onUpdate:modelValue": ($event) => passwordConfirm.value = $event,
              type: showConfirm.value ? "text" : "password",
              placeholder: "Passwort erneut eingeben",
              autocomplete: "new-password",
              disabled: score.value < 5,
              color: passwordConfirm.value.length ? passwordsMatch.value ? "success" : "error" : "neutral",
              "aria-invalid": passwordConfirm.value.length > 0 && !passwordsMatch.value,
              "aria-describedby": "password-match",
              ui: { trailing: "pe-1" },
              icon: "i-lucide-lock",
              class: "w-full"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showConfirm.value = !showConfirm.value,
                    "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                      variant: "link",
                      color: "neutral",
                      size: "sm",
                      onClick: ($event) => showConfirm.value = !showConfirm.value,
                      "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                    }, null, 8, ["icon", "onClick", "aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: passwordConfirm.value,
                "onUpdate:modelValue": ($event) => passwordConfirm.value = $event,
                type: showConfirm.value ? "text" : "password",
                placeholder: "Passwort erneut eingeben",
                autocomplete: "new-password",
                disabled: score.value < 5,
                color: passwordConfirm.value.length ? passwordsMatch.value ? "success" : "error" : "neutral",
                "aria-invalid": passwordConfirm.value.length > 0 && !passwordsMatch.value,
                "aria-describedby": "password-match",
                ui: { trailing: "pe-1" },
                icon: "i-lucide-lock",
                class: "w-full"
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: showConfirm.value ? "i-lucide-eye-off" : "i-lucide-eye",
                    variant: "link",
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => showConfirm.value = !showConfirm.value,
                    "aria-label": showConfirm.value ? "Passwort ausblenden" : "Passwort anzeigen"
                  }, null, 8, ["icon", "onClick", "aria-label"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type", "disabled", "color", "aria-invalid"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UProgress, {
        color: passwordsMatch.value ? "success" : "error",
        "model-value": passwordConfirm.value.length ? 1 : 0,
        max: 1,
        size: "sm"
      }, null, _parent));
      if (passwordConfirm.value.length > 0 && !passwordsMatch.value) {
        _push(`<p id="password-match" class="text-sm text-error-600 font-medium"> Die Passwörter stimmen nicht überein. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "PasswordForm" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { title: "Persönliche Daten", icon: "i-lucide-book-user" },
      { title: "Sicherheit", icon: "i-lucide-lock" },
      { title: "ID-Check", icon: "i-lucide-id-card" },
      { title: "Abschluss", icon: "i-lucide-bookmark-check" }
    ];
    const currentStep = ref(0);
    const toast = useToast();
    const user = ref({
      firstName: "",
      lastName: "",
      address: {
        street: "",
        zip: "",
        city: "",
        country: ""
      },
      birthday: "",
      phone: "",
      email: "",
      password: ""
    });
    const emailConfirmation = ref("");
    const emailsMatch = ref(false);
    const passwordsMatch = ref(false);
    watch([() => user.value.email, emailConfirmation], ([email, confirmation]) => {
      emailsMatch.value = email.trim() !== "" && email === confirmation;
    });
    function isStep1Valid() {
      const u = user.value;
      return u.firstName.trim() !== "" && u.lastName.trim() !== "" && u.address.street.trim() !== "" && u.address.zip.trim() !== "" && u.address.city.trim() !== "" && u.address.country.trim() !== "" && u.birthday.trim() !== "" && u.phone.trim() !== "" && u.email.trim() !== "" && emailsMatch.value;
    }
    const showEmailError = computed(() => {
      return user.value.email.trim() !== "" && emailConfirmation.value.trim() !== "" && user.value.email !== emailConfirmation.value;
    });
    async function createUser() {
      try {
        const u = user.value;
        await axios.post(
          "https://saci.key2host.com/api/auth/signup/",
          {
            firstname: u.firstName,
            lastname: u.lastName,
            password: u.password,
            sex: "male",
            birthday: u.birthday,
            street: u.address.street,
            postalcode: u.address.zip,
            city: u.address.city,
            state: "-",
            country: u.address.country,
            email: u.email,
            phone: u.phone
          },
          {
            withCredentials: true
          }
        );
        currentStep.value = 2;
        const response = await axios.post(
          "https://saci.key2host.com/api/auth/checkid/",
          {},
          { withCredentials: true }
        );
        const url = response.data.url;
        (void 0).location.href = url;
      } catch (error) {
        const errorMessage = ref("");
        if (error.response && error.response.status === 400) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "Einige Daten scheinen nicht korrekt zu sein.";
        } else if (error.response && error.response.status === 409) {
          console.error("Fehler bei der Anmeldung", error);
          errorMessage.value = "E-Mail oder Telefon wird bereits verwendet.";
        } else {
          console.error("Fehler bei der API-Anfrage:", error.message);
          errorMessage.value = "API Fehler";
        }
        toast.add({
          icon: "i-heroicons-exclamation-triangle",
          description: errorMessage.value,
          color: "error",
          title: "Fehler beim Erstellen des Kontos",
          duration: 2500
        });
      }
    }
    useSeoMeta({
      title: "Konto erstellen",
      ogTitle: "Konto erstellen",
      description: "Konto erstellen",
      ogDescription: "Konto erstellen"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_UStepper = __nuxt_component_1;
      const _component_UCard = __nuxt_component_2;
      const _component_UFormField = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
      const _component_PasswordForm = __nuxt_component_6;
      const _component_UProgress = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: "/",
        class: "flex items-center mt-6 mb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Key2Host Logo" class="w-6 h-6"${_scopeId}><span class="font-bold text-lg ml-2"${_scopeId}>Key2Host</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Key2Host Logo",
                class: "w-6 h-6"
              }),
              createVNode("span", { class: "font-bold text-lg ml-2" }, "Key2Host")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6"><span class="font-bold text-4xl ml-2">Konto erstellen</span></div><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_component_UStepper, {
        disabled: "",
        modelValue: currentStep.value,
        "onUpdate:modelValue": ($event) => currentStep.value = $event,
        items
      }, null, _parent));
      _push(`</div>`);
      if (currentStep.value === 0) {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>Kontaktdaten</span><p class="text-sm"${_scopeId}>Bitte fülle alle Felder sorgfältig aus.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "Vorname" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.firstName,
                      "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                      name: "given-name",
                      autocomplete: "given-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.firstName,
                        "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                        name: "given-name",
                        autocomplete: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Nachname" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.lastName,
                      "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                      name: "family-name",
                      autocomplete: "family-name",
                      variant: "subtle",
                      icon: "i-lucide-user"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.lastName,
                        "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                        name: "family-name",
                        autocomplete: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Straße und Hausnummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.street,
                      "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                      name: "address-line1",
                      autocomplete: "address-line1",
                      variant: "subtle",
                      icon: "i-lucide-map-pin"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.street,
                        "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                        name: "address-line1",
                        autocomplete: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "PLZ" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.zip,
                      "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                      name: "postal-code",
                      autocomplete: "postal-code",
                      variant: "subtle",
                      icon: "i-lucide-map"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.zip,
                        "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                        name: "postal-code",
                        autocomplete: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Stadt" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.city,
                      "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                      name: "address-level2",
                      autocomplete: "address-level2",
                      variant: "subtle",
                      icon: "i-lucide-building"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.city,
                        "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Land" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.address.country,
                      "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                      name: "country",
                      autocomplete: "country-name",
                      variant: "subtle",
                      icon: "i-lucide-globe"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.country,
                        "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                        name: "country",
                        autocomplete: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Geburtsdatum" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.birthday,
                      "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                      name: "bday",
                      autocomplete: "bday",
                      type: "date",
                      variant: "subtle",
                      icon: "i-lucide-calendar"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.birthday,
                        "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "Handynummer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.phone,
                      "onUpdate:modelValue": ($event) => user.value.phone = $event,
                      name: "tel",
                      autocomplete: "tel-national",
                      type: "tel",
                      variant: "subtle",
                      icon: "i-lucide-phone"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.phone,
                        "onUpdate:modelValue": ($event) => user.value.phone = $event,
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "E-Mail" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: user.value.email,
                      "onUpdate:modelValue": ($event) => user.value.email = $event,
                      name: "email",
                      autocomplete: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail",
                      color: unref(showEmailError) ? "red" : void 0,
                      ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: user.value.email,
                        "onUpdate:modelValue": ($event) => user.value.email = $event,
                        name: "email",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "E-Mail bestätigen",
                "help-color": unref(showEmailError) ? "red" : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: emailConfirmation.value,
                      "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                      name: "email-confirmation",
                      autocomplete: "email",
                      type: "email",
                      variant: "subtle",
                      icon: "i-lucide-mail-check",
                      color: unref(showEmailError) ? "red" : void 0,
                      ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: emailConfirmation.value,
                        "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                        name: "email-confirmation",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-end px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                disabled: !isStep1Valid(),
                onClick: ($event) => currentStep.value = 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Weiter `);
                  } else {
                    return [
                      createTextVNode(" Weiter ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "Kontaktdaten"),
                  createVNode("p", { class: "text-sm" }, "Bitte fülle alle Felder sorgfältig aus.")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6" }, [
                  createVNode(_component_UFormField, { label: "Vorname" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.firstName,
                        "onUpdate:modelValue": ($event) => user.value.firstName = $event,
                        name: "given-name",
                        autocomplete: "given-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Nachname" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.lastName,
                        "onUpdate:modelValue": ($event) => user.value.lastName = $event,
                        name: "family-name",
                        autocomplete: "family-name",
                        variant: "subtle",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Straße und Hausnummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.street,
                        "onUpdate:modelValue": ($event) => user.value.address.street = $event,
                        name: "address-line1",
                        autocomplete: "address-line1",
                        variant: "subtle",
                        icon: "i-lucide-map-pin"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "PLZ" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.zip,
                        "onUpdate:modelValue": ($event) => user.value.address.zip = $event,
                        name: "postal-code",
                        autocomplete: "postal-code",
                        variant: "subtle",
                        icon: "i-lucide-map"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Stadt" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.city,
                        "onUpdate:modelValue": ($event) => user.value.address.city = $event,
                        name: "address-level2",
                        autocomplete: "address-level2",
                        variant: "subtle",
                        icon: "i-lucide-building"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Land" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.address.country,
                        "onUpdate:modelValue": ($event) => user.value.address.country = $event,
                        name: "country",
                        autocomplete: "country-name",
                        variant: "subtle",
                        icon: "i-lucide-globe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Geburtsdatum" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.birthday,
                        "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                        name: "bday",
                        autocomplete: "bday",
                        type: "date",
                        variant: "subtle",
                        icon: "i-lucide-calendar"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "Handynummer" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.phone,
                        "onUpdate:modelValue": ($event) => user.value.phone = $event,
                        name: "tel",
                        autocomplete: "tel-national",
                        type: "tel",
                        variant: "subtle",
                        icon: "i-lucide-phone"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "E-Mail" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: user.value.email,
                        "onUpdate:modelValue": ($event) => user.value.email = $event,
                        name: "email",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "E-Mail bestätigen",
                    "help-color": unref(showEmailError) ? "red" : void 0
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: emailConfirmation.value,
                        "onUpdate:modelValue": ($event) => emailConfirmation.value = $event,
                        name: "email-confirmation",
                        autocomplete: "email",
                        type: "email",
                        variant: "subtle",
                        icon: "i-lucide-mail-check",
                        color: unref(showEmailError) ? "red" : void 0,
                        ui: { variant: "subtle", base: unref(showEmailError) ? "border border-red-500" : "" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color", "ui"])
                    ]),
                    _: 1
                  }, 8, ["help-color"])
                ]),
                createVNode("div", { class: "w-full flex justify-end px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    disabled: !isStep1Valid(),
                    onClick: ($event) => currentStep.value = 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Weiter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 1) {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>Sicherheit</span><p class="text-sm"${_scopeId}>Bitte wähle ein sicheres Passwort.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PasswordForm, {
                password: user.value.password,
                "onUpdate:password": ($event) => user.value.password = $event,
                passwordsMatch: passwordsMatch.value,
                "onUpdate:passwordsMatch": ($event) => passwordsMatch.value = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-between px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                onClick: ($event) => currentStep.value = 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Zurück`);
                  } else {
                    return [
                      createTextVNode("Zurück")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                disabled: !passwordsMatch.value,
                onClick: ($event) => createUser()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Weiter `);
                  } else {
                    return [
                      createTextVNode("Weiter ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "Sicherheit"),
                  createVNode("p", { class: "text-sm" }, "Bitte wähle ein sicheres Passwort.")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-6" }, [
                  createVNode(_component_PasswordForm, {
                    password: user.value.password,
                    "onUpdate:password": ($event) => user.value.password = $event,
                    passwordsMatch: passwordsMatch.value,
                    "onUpdate:passwordsMatch": ($event) => passwordsMatch.value = $event
                  }, null, 8, ["password", "onUpdate:password", "passwordsMatch", "onUpdate:passwordsMatch"])
                ]),
                createVNode("div", { class: "w-full flex justify-between px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    onClick: ($event) => currentStep.value = 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Zurück")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    disabled: !passwordsMatch.value,
                    onClick: ($event) => createUser()
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Weiter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "subtle",
          class: "mt-5 w-[90vw] lg:w-1/2 shadow-md rounded-2xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-b px-6 py-4"${_scopeId}><span class="font-bold text-2xl"${_scopeId}>ID-Check</span><p class="text-sm"${_scopeId}>Bitte wähle ein sicheres Passwort.</p></div><div class="px-6 py-6"${_scopeId}><div class="flex items-center justify-center bg-gray-100 rounded-md mb-2"${_scopeId}><div class="w-48 h-48 flex items-center justify-center text-center text-gray-700"${_scopeId}> Warten auf ID-Check Dienstleister... </div></div>`);
              _push2(ssrRenderComponent(_component_UProgress, { animation: "carousel" }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex justify-between px-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "lg",
                variant: "subtle",
                onClick: ($event) => currentStep.value = 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Zurück &amp; erneut versuchen`);
                  } else {
                    return [
                      createTextVNode("Zurück & erneut versuchen")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-b px-6 py-4" }, [
                  createVNode("span", { class: "font-bold text-2xl" }, "ID-Check"),
                  createVNode("p", { class: "text-sm" }, "Bitte wähle ein sicheres Passwort.")
                ]),
                createVNode("div", { class: "px-6 py-6" }, [
                  createVNode("div", { class: "flex items-center justify-center bg-gray-100 rounded-md mb-2" }, [
                    createVNode("div", { class: "w-48 h-48 flex items-center justify-center text-center text-gray-700" }, " Warten auf ID-Check Dienstleister... ")
                  ]),
                  createVNode(_component_UProgress, { animation: "carousel" })
                ]),
                createVNode("div", { class: "w-full flex justify-between px-6 pb-6" }, [
                  createVNode(_component_UButton, {
                    size: "lg",
                    variant: "subtle",
                    onClick: ($event) => currentStep.value = 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Zurück & erneut versuchen")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
