<template>
  <div class="card-grid">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { useStore } from 'vuex-simple';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      store: useStore(this.$store),
    };
  },
  computed: {
    products() {
      return this.store.products;
    },
  },
};
</script>

<style></style>
