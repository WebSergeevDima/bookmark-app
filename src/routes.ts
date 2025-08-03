import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.ts'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue')
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('./views/MainVue.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('./views/IndexVue.vue'),
        },
        {
          path: ':alias',
          name: 'new',
          component: () => import('./views/CategoryView.vue'),
        }
      ]
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to, from) => {
  const storeAuth = useAuthStore()

  if(!storeAuth.getToken && to.name != 'auth') {
    return {
      name: 'auth'
    }
  }
})
