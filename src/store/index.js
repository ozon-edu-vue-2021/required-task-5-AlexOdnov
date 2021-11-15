import Vue from 'vue';
import Vuex from 'vuex';
import { loadProductList } from '../services/productApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    favorites: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, id) {
      const product = {
        id,
        product: state.products.find((el) => el.id === id),
        count: 1,
      };
      state.cart.push(product);
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((el) => el.id !== id);
    },
    setProductCount(state, { id, count }) {
      state.cart.find((el) => el.id === id).count = count;
    },
    addToFavorites(state, id) {
      const product = state.products.find((el) => el.id === id);
      state.favorites.push(product);
    },
    removeFromFavorites(state, id) {
      state.favorites = state.favorites.filter((el) => el.id !== id);
    },
  },
  actions: {
    async init({ commit }) {
      const products = await loadProductList();
      commit('setProducts', products);
    },
    setProductCount({ commit }, { id, count }) {
      if (count === 0) {
        commit('removeFromCart', id);
      } else {
        commit('setProductCount', { id, count });
      }
    },
  },
  getters: {
    getTotalSum: (state) => {
      return state.cart.reduce(
        (acc, el) => (acc += el.product.price * el.count),
        0
      );
    },
    isProductInCart: (state) => (id) => {
      return Boolean(state.cart.find((el) => el.id === id));
    },
    isProductInFavorites: (state) => (id) => {
      return Boolean(state.favorites.find((el) => el.id === id));
    },
    getCart: (state) => {
      return state.cart.map((el) => el.product);
    },
    getProductCount: (state) => (id) => {
      return state.cart.find((el) => el.id === id)?.count || 0;
    },
  },
  modules: {},
});
