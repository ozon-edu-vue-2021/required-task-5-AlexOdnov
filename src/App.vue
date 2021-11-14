<template>
  <div id="app">
    <div class="container">
      <site-navigation class="block" />
      <router-view />
    </div>
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue';

export default {
  name: 'App',
  components: { SiteNavigation },
};
</script>

<style>
html {
  overflow-y: auto;
}
#app {
  min-height: 100vh;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
</style>
