// код для перехода по страницам
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/task_archive",
      component: () => import("../views/Task_archive.vue"),
    },
    {
      path: "/forum",
      component: () => import("../views/Forum.vue"),
    },
    {
      path: "/forum_answer",
      component: () => import("../views/Forum_answer.vue"),
    },
    {
      path: "/system",
      component: () => import("../views/System.vue"),
    },
    {
      path: "/tasks",
      component: () => import("../views/Tasks.vue"),
    },
  ],
});
export default router;
