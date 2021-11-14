<template>
  <div class="cart">
    <div class="box card-grid"></div>
    <div class="box">
      <h2 class="title is-3">Итого: 5000</h2>
      <hr />
      <button class="button is-success" type="button">Оформить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
};
</script>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  align-items: start;
}
</style>
