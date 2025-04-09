import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state() {
    return {
    diffrentProductsQuantity: 0,
    productsInfo: [
    ],
    }
  },
  getters: {
    getProducts() {
        return this.productsInfo
    },
    totalPrice() {
        const total = this.productsInfo.reduce((total, product) => total + product.price * product.quantity, 0);
        return Math.round(total * 100) / 100;
      }
},
actions: {
    addProductToCard(product) {
      let id = this.productsInfo.findIndex((p) => p.id === product.id);
      if (id !== -1) {
        this.productsInfo[id].quantity += 1;
      } else {
        this.diffrentProductsQuantity += 1;
        this.productsInfo.push({
          id: product.id,
          name: product.name,
          price: product.unit_price,
          quantity: 1,
        });
      }
    },
    removeProduct(id) {
      this.productsInfo = this.productsInfo.filter((p) => p.id !== id);
      this.diffrentProductsQuantity = this.productsInfo.length;
    },
    incrementProduct(id) {
      let product = this.productsInfo.find((p) => p.id === id);
      product.quantity += 1;
    },
    decrementProduct(id) {
      let product = this.productsInfo.find((p) => p.id === id);
      if (product.quantity === 1) {
        this.removeProduct(id);
      } else {
        product.quantity -= 1;
      }
    },
    clearOrder() {
      this.diffrentProductsQuantity = 0;
      this.productsInfo = [];
    }
  },
});