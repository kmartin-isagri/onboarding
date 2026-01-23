import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Exercice1View from "@/views/Exercice1View.vue";
import Exercice2View from "@/views/Exercice2View.vue";
import Exercice3View from "@/views/Exercice3View.vue";
import Exercice4View from "@/views/Exercice4View.vue";
import Exercice5View from "@/views/Exercice5View.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/exercices/1",
    name: "exercice-1",
    component: Exercice1View,
  },
  {
    path: "/exercices/2",
    name: "exercice-2",
    component: Exercice2View,
  },
  {
    path: "/exercices/3",
    name: "exercice-3",
    component: Exercice3View,
  },
  {
    path: "/exercices/4",
    name: "exercice-4",
    component: Exercice4View,
  },
  {
    path: "/exercices/5",
    name: "exercice-5",
    component: Exercice5View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
