<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="{ name: 'Home' }" class="navbar-item" exact>
        Главная
      </router-link>
      <router-link :to="{ name: 'Favorites' }" class="navbar-item" exact>
        Избранное
      </router-link>
      <router-link :to="{ name: 'Cart' }" class="navbar-item" exact>
        Корзина
      </router-link>
    </div>
  </nav>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'SiteNavigation',
})
export default class SiteNavigation extends Vue {}
</script>

<style scoped>
.navbar-item {
  border-bottom: 2px solid transparent;
}
.router-link-active {
  color: #485fc7;
  border-color: currentColor;
}
.navbar-brand {
  margin: 0 !important;
}
</style>
