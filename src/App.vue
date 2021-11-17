<template>
  <div id="app">
    <div class="container">
      <site-navigation class="block site-navigation" />
      <router-view />
    </div>
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { SiteNavigation },
  created() {
    this.init();
  },
  methods: {
    ...mapActions(['init']),
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 540px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 820px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.site-navigation {
  position: sticky;
  top: 0;
  box-shadow: 0 3px 4px -4px #000;
}
</style>
