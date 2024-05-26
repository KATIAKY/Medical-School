<script setup>
import Cell from "../components/Cell.vue";
</script>
<template>
  <main>
    <h1 class="title">Форум</h1>
    <div id="element" class="cell">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  </main>
</template>

<style scoped>
.title {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0%;
  text-align: left;
  margin: 44px 0 20px 0;
}
.cell {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 33px;
}
</style>
