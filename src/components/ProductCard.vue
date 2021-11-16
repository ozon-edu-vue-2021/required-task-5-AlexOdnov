<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="require(`../assets/images/${product.img}`)"
          :alt="product.dish"
        />
      </figure>
    </div>
    <div class="card-content">
      <span class="tag is-info is-light is-medium block"
        >{{ product.price }} &#8381;</span
      >
      <h2 class="title is-4">{{ product.dish }}</h2>
      <div class="wrapper">
        <div class="content">{{ product.description }}</div>
      </div>
      <div class="buttons">
        <button
          v-if="!isProductInCart"
          class="button is-success"
          type="button"
          @click="addToCart"
        >
          Купить
        </button>
        <button
          v-else
          class="button is-danger"
          type="button"
          @click="removeFromCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="18px"
            height="18px"
          >
            <path
              fill="currentColor"
              d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
            ></path>
          </svg>
        </button>
        <button
          v-if="!isProductInFavorites"
          class="button is-info"
          type="button"
          @click="addToFavorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="18px"
            height="18px"
          >
            <path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            ></path>
          </svg>
        </button>
        <button
          v-else
          class="button is-danger"
          type="button"
          @click="removeFromFavorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="18px"
            height="18px"
          >
            <path
              fill="currentColor"
              d="M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"
            ></path>
          </svg>
        </button>
        <number-input
          v-if="isProductInCart"
          :value="productCount"
          @input="setProductCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NumberInput from './NumberInput.vue';
import { useStore } from 'vuex-simple';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'ProductCard',
  components: {
    NumberInput,
  },
})
export default class ProductCard extends Vue {
  @Prop(Object) product;

  store = useStore(this.$store);

  get isProductInFavorites() {
    return this.store.isProductInFavorites(this.product.id);
  }
  get isProductInCart() {
    return this.store.isProductInCart(this.product.id);
  }
  get productCount() {
    return this.store.getProductCount(this.product.id);
  }

  addToCart() {
    this.store.addToCart(this.product.id);
  }
  removeFromCart() {
    this.store.removeFromCart(this.product.id);
  }
  addToFavorites() {
    this.store.addToFavorites(this.product.id);
  }
  removeFromFavorites() {
    this.store.removeFromFavorites(this.product.id);
  }
  setProductCount(e) {
    this.store.setProductCount({ id: this.product.id, count: e });
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}
.content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 1.5rem;
}
.wrapper {
  margin-bottom: auto;
}
img {
  object-fit: cover;
}
</style>
