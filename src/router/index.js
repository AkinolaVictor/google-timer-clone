import { createRouter, createWebHistory } from 'vue-router'
import Timer from '../views/Timer.vue'
import Stopwatch from '../views/Stopwatch.vue'

const routes = [
  {
    path: '/',
    name: 'timer',
    component: Timer
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Stopwatch
    // component: () => import(/* webpackChunkName: "about" */ '../views/Stopwatch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
