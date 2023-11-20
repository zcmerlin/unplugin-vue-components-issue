import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/',
      redirect: 'home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/HomePage.vue')
        },
        {
          path: 'developerCenter',
          name: 'developerCenter',
          component: () => import('@/views/developerCenter.vue')
        },
        {
          path: 'contract',
          name: 'contract',
          component: () => import('@/views/Contract.vue')
        }
      ]
    },
  ]
})

export default router
