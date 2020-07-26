import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue')
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../views/Partners.vue')
  },
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
