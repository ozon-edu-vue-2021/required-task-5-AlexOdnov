import { loadProductList } from '../services/productApi';

export class Store {
  // State
  products = [];
  cart = [];
  favorites = [];

  // Getters
  get getTotalSum() {
    return this.cart.reduce(
      (acc, el) => (acc += el.product.price * el.count),
      0
    );
  }
  get getCart() {
    return this.cart.map((el) => el.product);
  }
  get isProductInCart() {
    return (id) => {
      return Boolean(this.cart.find((el) => el.id === id));
    };
  }
  get isProductInFavorites() {
    return (id) => {
      return Boolean(this.favorites.find((el) => el.id === id));
    };
  }
  get getProductCount() {
    return (id) => {
      return this.cart.find((el) => el.id === id)?.count || 0;
    };
  }

  // Mutations
  setProducts(products) {
    this.products = products;
  }
  addToCart(id) {
    const product = {
      id,
      product: this.products.find((el) => el.id === id),
      count: 1,
    };
    this.cart.push(product);
  }
  removeFromCart(id) {
    this.cart = this.cart.filter((el) => el.id !== id);
  }
  setCount({ id, count }) {
    this.cart.find((el) => el.id === id).count = count;
  }
  addToFavorites(id) {
    const product = this.products.find((el) => el.id === id);
    this.favorites.push(product);
  }
  removeFromFavorites(id) {
    this.favorites = this.favorites.filter((el) => el.id !== id);
  }

  // Actions
  async init() {
    const products = await loadProductList();
    this.setProducts(products);
  }
  setProductCount({ id, count }) {
    if (count === 0) {
      this.removeFromCart(id);
    } else {
      this.setCount({ id, count });
    }
  }
}
