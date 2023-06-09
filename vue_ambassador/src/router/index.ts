import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import ProductsFrontend from '@/views/ProductsFrontend.vue'
import Stats from '@/views/Stats.vue'
import Rankings from '@/views/Rankings.vue'
import ProductsBackend from '@/views/ProductsBackend.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/',
          component: ProductsFrontend
        },
        {
          path: '/backend',
          component: ProductsBackend
        },
        {
          path: '/stats',
          component: Stats
        },
        {
          path: '/rankings',
          component: Rankings
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

export default router
