import {
  createWebHistory,
  createRouter
} from "vue-router";

// 404 Page:
import Page404 from '../views/pages/pageNotFound/page404.vue';

// routes:
import HomePage from '../views/pages/home/home.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
