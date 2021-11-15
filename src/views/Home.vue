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
import { mapState } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  computed: { ...mapState(['products']) },
};
</script>

<style></style>
