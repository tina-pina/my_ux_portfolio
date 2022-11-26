import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (portfolio.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/about-me',
      name: 'about-me',
      // route level code-splitting
      // this generates a separate chunk (about-me.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue')
    }
  ]
})

export default router
