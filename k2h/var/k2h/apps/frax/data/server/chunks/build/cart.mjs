import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    item: {
      id: "",
      name: "",
      type: "",
      amount: 0
    },
    voucher: null
  }),
  actions: {
    addVoucher(voucher) {
      this.voucher = voucher;
    },
    setItem({ id, name, type, amount }) {
      this.item = { id, name, type, amount: typeof amount === "number" ? amount : parseFloat(amount) };
    },
    clearItem() {
      this.item = { id: null, name: null, type: null, amount: null };
    },
    clearVoucher() {
      this.voucher = null;
    },
    clearAll() {
      this.clearItem();
      this.clearVoucher();
    }
  },
  getters: {
    subTotalPrice(state) {
      const item = state.item;
      if (!item.amount) return "0.00";
      return item.amount.toFixed(2);
    },
    totalPrice() {
      const subtotal = parseFloat(this.subTotalPrice);
      if (!this.voucher) return subtotal.toFixed(2);
      let discount = 0;
      if (this.voucher.amount) {
        discount = this.voucher.amount / 100;
      } else if (this.voucher.percent) {
        discount = subtotal * (this.voucher.percent / 100);
      }
      const total = Math.max(subtotal - discount, 0);
      return total.toFixed(2);
    },
    isEmpty(state) {
      return !state.item.id || !state.item.name || !state.item.type || !state.item.amount;
    }
  },
  persist: true
});

export { useCartStore as u };
//# sourceMappingURL=cart.mjs.map
