<script setup>
import Menu from "./components/Sidebar.vue";
</script>

<template>
  <div class="app">
    <Menu />
    <router-view />
  </div>
</template>

<style long="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto";
}
body {
  background-color: white;
}
.app {
  display: flex;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  overflow: none;
  background: none;
}
</style>
