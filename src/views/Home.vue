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
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home',
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {
  store = useStore(this.$store);

  get products() {
    return this.store.products;
  }
}
</script>

<style></style>
