<template>
  <div class="cart">
    <div class="box card-grid"></div>
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

export default {
  name: 'Cart',
  computed: { ...mapGetters({ cart: 'getCart', totalSum: 'getTotalSum' }) },
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
