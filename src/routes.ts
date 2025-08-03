import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue')
    },
    {
      path: '/',
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
