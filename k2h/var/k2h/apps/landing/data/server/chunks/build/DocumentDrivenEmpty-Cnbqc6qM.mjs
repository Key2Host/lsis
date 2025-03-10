import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  name: "DocumentDrivenEmpty",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  render({ value }) {
    return h("div", void 0, [
      h("p", "Document is empty"),
      h("p", `Add content to it by opening ${value._source}/${value._file} file.`)
    ]);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocumentDrivenEmpty = Object.assign(_sfc_main, { __name: "DocumentDrivenEmpty" });

export { DocumentDrivenEmpty as default };
//# sourceMappingURL=DocumentDrivenEmpty-Cnbqc6qM.mjs.map
