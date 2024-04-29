import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'staff',
          name: 'staff',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'events',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'partnership',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'engagement',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'funding',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'marketing',
          component: () => import('../views/TeamView.vue')
        },
        {
          path: 'staff',
          name: 'multimedia',
          component: () => import('../views/TeamView.vue')
        },

        {
          path: 'staff',
          name: 'our-story',
          component: () => import('../views/TeamView.vue')
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/ArchiveView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
