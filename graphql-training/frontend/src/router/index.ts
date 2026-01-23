import { createRouter, createWebHashHistory } from "vue-router";

import Exercice5View from "@/views/Exercice5View.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Exercice5View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
