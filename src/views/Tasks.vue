<script setup>
import Task_component from "../components/Task_component.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
</script>
<template>
  <main>
    <div class="title">Задача</div>
    <div class="cell">
      <router-link class="button" to="/">
        <samp class="detailed">Вернуться</samp>
      </router-link>
    </div>
    <Task_component />
    <div class="i">
      <QuillEditor class="quill-editor" theme="snow" toolbar="full" />
    </div>
  </main>
</template>
<style scoped>
.i {
  margin-top: 300px;
  height: 200px;
  border-radius: 10px;
}
.title {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 10px;
}
.cell {
  width: 101px;
  height: 36px;
  background: rgb(237, 245, 241);
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 16px 10px 16px;
  border-radius: 5px;
}
.button {
  list-style-type: none;
  text-decoration: none;
}
.detailed {
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  font-style: normal;
  text-align: left;
  position: static;
  height: 16px;
  list-style-type: none;
  text-decoration: none;
}
.group {
  margin-top: 30px;
}
</style>
