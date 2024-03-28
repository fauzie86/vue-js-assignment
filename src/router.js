import { createRouter, createWebHistory } from 'vue-router';

import TheHomePage from './components/TheHomePage.vue';
import TheProductsPage from './components/TheProductsPage.vue';
import TheContactPage from './components/TheContactPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    // },
    {
      name: 'home',
      path: '/',
      component: TheHomePage,
    },
    {
      name: 'products',
      path: '/products',
      component: TheProductsPage,
    },
    {
      name: 'contact',
      path: '/contact',
      component: TheContactPage,
    },
  ],
  linkActiveClass: 'active',
});

export default router;
