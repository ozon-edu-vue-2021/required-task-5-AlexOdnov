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
import ProductCard from '../components/ProductCard.vue';
import { useStore } from 'vuex-simple';

export default {
  name: 'Favorites',
  components: {
    ProductCard,
  },
  data() {
    return {
      store: useStore(this.$store),
    };
  },
  computed: {
    favorites() {
      return this.store.favorites;
    },
  },
};
</script>

<style></style>
