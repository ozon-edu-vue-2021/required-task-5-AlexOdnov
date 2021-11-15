<template>
  <div class="card-grid"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: { ...mapState(['products']) },
};
</script>

<style></style>
