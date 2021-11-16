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
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Favorites',
  components: {
    ProductCard,
  },
})
export default class Favorites extends Vue {
  store = useStore(this.$store);

  get favorites() {
    return this.store.favorites;
  }
}
</script>

<style></style>
