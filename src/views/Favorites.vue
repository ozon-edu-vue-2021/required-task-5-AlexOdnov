<template>
  <div class="card-grid">
    <product-card
      v-for="product in favorites"
      :key="product.id"
      :product="product"
    />
    <p v-if="!favorites.length">В избранном ничего нет</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Favorites',
  components: {
    ProductCard,
  },
  computed: { ...mapState(['favorites']) },
};
</script>

<style></style>
