import { B as defineNuxtLink, C as useLocalePath, D as hasProtocol, E as nuxtLinkDefaults } from './server.mjs';
import { defineComponent, computed, h } from 'vue';

const NuxtLinkLocale = defineNuxtLink({ ...nuxtLinkDefaults, componentName: "NuxtLinkLocale" });
const __nuxt_component_0 = defineComponent({
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
    const localePath = useLocalePath();
    const resolvedPath = computed(() => {
      const destination = props.to ?? props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
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
    const getNuxtLinkProps = () => {
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
    return () => h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NuxtLinkLocale.mjs.map
