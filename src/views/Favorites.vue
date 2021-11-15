<template>
  <div class="card-grid"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Favorites',
  computed: { ...mapState(['favorites']) },
};
</script>

<style></style>
