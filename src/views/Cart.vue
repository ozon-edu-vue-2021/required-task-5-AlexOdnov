<template>
  <div class="cart">
    <div class="box card-grid">
      <product-card
        v-for="product in cart"
        :key="product.id"
        :product="product"
      />
      <p v-if="!cart.length">Корзина пуста</p>
    </div>
    <div class="box">
      <h2 class="title is-3">Итого: {{ totalSum }}&#8381;</h2>
      <hr />
      <button
        :disabled="!cart.length"
        class="button is-success"
        type="button"
        @click="submit"
      >
        Оформить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import Swal from 'sweetalert2';

export default {
  name: 'Cart',
  components: {
    ProductCard,
  },
  computed: { ...mapGetters({ cart: 'getCart', totalSum: 'getTotalSum' }) },
  methods: {
    submit() {
      const list = this.cart
        .map((el) => `<p class="is-size-4">${el.dish}</p>`)
        .join('');
      Swal.fire({ html: list, scrollbarPadding: false });
    },
  },
};
</script>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  align-items: start;
}
</style>
