import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exercice1View from '@/views/Exercice1View.vue'
import Exercice2View from '@/views/Exercice2View.vue'
import Exercice3View from '@/views/Exercice3View.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exercices/1',
    name: 'exercice-1',
    component: Exercice1View
  },
  {
    path: '/exercices/2',
    name: 'exercice-2',
    component: Exercice2View
  },
  {
    path: '/exercices/3',
    name: 'exercice-3',
    component: Exercice3View
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
