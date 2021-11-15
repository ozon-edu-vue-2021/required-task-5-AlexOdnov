import { Action, Mutation, State, Getter } from 'vuex-simple';
import { loadProductList } from '../services/productApi';
export class Store {
  // State
  @State()
  products = [];
  @State()
  cart = [];
  @State()
  favorites = [];

  // Getters
  @Getter()
  get getTotalSum() {
    return this.cart.reduce(
      (acc, el) => (acc += el.product.price * el.count),
      0
    );
  }
  @Getter()
  get getCart() {
    return this.cart.map((el) => el.product);
  }
  @Getter()
  get isProductInCart() {
    return (id) => {
      return Boolean(this.cart.find((el) => el.id === id));
    };
  }
  @Getter()
  get isProductInFavorites() {
    return (id) => {
      return Boolean(this.favorites.find((el) => el.id === id));
    };
  }
  @Getter()
  get getProductCount() {
    return (id) => {
      return this.cart.find((el) => el.id === id)?.count || 0;
    };
  }

  // Mutations
  @Mutation()
  setProducts(products) {
    this.products = products;
  }
  @Mutation()
  addToCart(id) {
    const product = {
      id,
      product: this.products.find((el) => el.id === id),
      count: 1,
    };
    this.cart.push(product);
  }
  @Mutation()
  removeFromCart(id) {
    this.cart = this.cart.filter((el) => el.id !== id);
  }
  @Mutation()
  setCount({ id, count }) {
    this.cart.find((el) => el.id === id).count = count;
  }
  @Mutation()
  addToFavorites(id) {
    const product = this.products.find((el) => el.id === id);
    this.favorites.push(product);
  }
  @Mutation()
  removeFromFavorites(id) {
    this.favorites = this.favorites.filter((el) => el.id !== id);
  }

  // Actions
  @Action()
  async init() {
    const products = await loadProductList();
    this.setProducts(products);
  }
  @Action()
  setProductCount({ id, count }) {
    if (count === 0) {
      this.removeFromCart(id);
    } else {
      this.setCount({ id, count });
    }
  }
}
