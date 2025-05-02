import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    item: { id: "", name: "", type: "", amount: 0 },
    voucher: null
  }),
  actions: {
    addVoucher(voucher) {
      this.voucher = voucher;
    },
    setItem({ id, name, type, amount }) {
      this.item = {
        id,
        name,
        type,
        amount: typeof amount === "number" ? amount : parseFloat(String(amount))
      };
    },
    clearItem() {
      this.item = { id: "", name: "", type: "", amount: 0 };
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
      const amount = state.item.amount;
      return typeof amount === "number" && !isNaN(amount) ? amount.toFixed(2) : "0.00";
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
      const { id, name, type, amount } = state.item;
      return !(id && name && type && amount > 0);
    }
  },
  persist: true
});

export { useCartStore as u };
//# sourceMappingURL=cart-D33wMGUr.mjs.map
