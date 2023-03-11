import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Districts from '../components/Districts.vue'
import Company from '../components/Company.vue'
import Store from '../components/Store.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/district/:id/',
      name: 'district',
      component: Districts
    },
    {
      path: '/company/:id/',
      name: 'company',
      component: Company
    },
    {
      path: '/store/:id/',
      name: 'store',
      component: Store
    },
  ]
})

export default router
