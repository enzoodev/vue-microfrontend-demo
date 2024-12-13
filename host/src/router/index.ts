import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/remote",
      component: () => import("../pages/remote.vue"),
      // component: () => import("remote/remote-app"),
    },
  ],
});
