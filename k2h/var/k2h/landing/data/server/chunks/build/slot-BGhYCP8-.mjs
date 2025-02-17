import { renderSlot as renderSlot$1 } from 'vue';
import { f as flatUnwrap } from './node-hwMnPqaI.mjs';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? undefined : props.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};

export { renderSlot as r };
//# sourceMappingURL=slot-BGhYCP8-.mjs.map
