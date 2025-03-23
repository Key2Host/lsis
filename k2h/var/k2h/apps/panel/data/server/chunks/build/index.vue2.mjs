import { _ as __nuxt_component_0 } from './PageCard.vue.mjs';
import { _ as __nuxt_component_1 } from './FormField.vue.mjs';
import { f as UAvatar, b as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_1$2 } from './Badge.vue.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'reka-ui';
import '@vueuse/core';
import './tv.mjs';
import 'tailwind-variants';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
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
import 'reka-ui/namespaced';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPageCard = __nuxt_component_0;
  const _component_UFormField = __nuxt_component_1;
  const _component_UAvatar = UAvatar;
  const _component_UButton = __nuxt_component_1$1;
  const _component_UBadge = __nuxt_component_1$2;
  _push(`<!--[--><div>`);
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Mein Profil",
    description: "These informations will be displayed publicly.",
    variant: "naked",
    class: "mb-4"
  }, null, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    variant: "subtle",
    ui: { container: "divide-y divide-(--ui-border)" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "avatar",
          label: "Avatar"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_UAvatar, {
                src: void 0,
                alt: "Max Mustermann",
                size: "md"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode(_component_UAvatar, {
                    src: void 0,
                    alt: "Max Mustermann",
                    size: "md"
                  }),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "name",
          label: "Name"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}><span class="truncate"${_scopeId2}>Max Mustermann</span>`);
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode("span", { class: "truncate" }, "Max Mustermann"),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "birthday",
          label: "Geburtsdatum"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}><span class="truncate"${_scopeId2}>01.01.1900</span>`);
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode("span", { class: "truncate" }, "01.01.1900"),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "address",
          label: "Adresse"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}><div${_scopeId2}><span class="block"${_scopeId2}>Musterstraße 1</span><span class="block"${_scopeId2}>12345 Musterstadt</span><span class="block"${_scopeId2}>Deutschland</span></div>`);
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "block" }, "Musterstraße 1"),
                    createVNode("span", { class: "block" }, "12345 Musterstadt"),
                    createVNode("span", { class: "block" }, "Deutschland")
                  ]),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "phone",
          label: "Telefonnummern"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}><span class="truncate"${_scopeId2}>+49 0000 000000</span>`);
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode("span", { class: "truncate" }, "+49 0000 000000"),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UFormField, {
          name: "email",
          label: "E-Mail Adressen"
        }, {
          description: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center justify-between w-full mb-2"${_scopeId2}><span class="truncate"${_scopeId2}>max.mustermann@key2host.com</span>`);
              _push3(ssrRenderComponent(_component_UButton, {
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Bearbeiten`);
                  } else {
                    return [
                      createTextVNode("Bearbeiten")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                  createVNode("span", { class: "truncate" }, "max.mustermann@key2host.com"),
                  createVNode(_component_UButton, {
                    size: "md",
                    color: "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bearbeiten")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UFormField, {
            name: "avatar",
            label: "Avatar"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode(_component_UAvatar, {
                  src: void 0,
                  alt: "Max Mustermann",
                  size: "md"
                }),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UFormField, {
            name: "name",
            label: "Name"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode("span", { class: "truncate" }, "Max Mustermann"),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UFormField, {
            name: "birthday",
            label: "Geburtsdatum"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode("span", { class: "truncate" }, "01.01.1900"),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UFormField, {
            name: "address",
            label: "Adresse"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "block" }, "Musterstraße 1"),
                  createVNode("span", { class: "block" }, "12345 Musterstadt"),
                  createVNode("span", { class: "block" }, "Deutschland")
                ]),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UFormField, {
            name: "phone",
            label: "Telefonnummern"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode("span", { class: "truncate" }, "+49 0000 000000"),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UFormField, {
            name: "email",
            label: "E-Mail Adressen"
          }, {
            description: withCtx(() => [
              createVNode("div", { class: "flex items-center justify-between w-full mb-2" }, [
                createVNode("span", { class: "truncate" }, "max.mustermann@key2host.com"),
                createVNode(_component_UButton, {
                  size: "md",
                  color: "neutral",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bearbeiten")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_UPageCard, {
    title: "Personalausweis",
    description: "These informations will be displayed publicly.",
    variant: "naked",
    class: "mb-4"
  }, null, _parent));
  _push(ssrRenderComponent(_component_UPageCard, {
    variant: "subtle",
    ui: { container: "divide-y divide-(--ui-border)" }
  }, {
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-between w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UBadge, {
          icon: "i-heroicons-exclamation-circle",
          size: "md",
          color: "error",
          variant: "soft"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Der Ausweis wurde noch nicht verifiziert`);
            } else {
              return [
                createTextVNode("Der Ausweis wurde noch nicht verifiziert")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          size: "md",
          color: "neutral",
          variant: "subtle"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Verifikation starten`);
            } else {
              return [
                createTextVNode("Verifikation starten")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-between w-full" }, [
            createVNode(_component_UBadge, {
              icon: "i-heroicons-exclamation-circle",
              size: "md",
              color: "error",
              variant: "soft"
            }, {
              default: withCtx(() => [
                createTextVNode("Der Ausweis wurde noch nicht verifiziert")
              ]),
              _: 1
            }),
            createVNode(_component_UButton, {
              size: "md",
              color: "neutral",
              variant: "subtle"
            }, {
              default: withCtx(() => [
                createTextVNode("Verifikation starten")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
