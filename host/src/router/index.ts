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
      // it will be used in the future, now i'm using a local component to put a button to navigate to the home page
    },
  ],
});
