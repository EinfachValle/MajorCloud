import {
  createWebHistory,
  createRouter
} from "vue-router";

// routes:

// 404 Page:
import Page404 from '../views/pages/pageNotFound/page404.vue';

// home-pages:
import HomePage from '../views/pages/home-pages/home/home.vue';
import OrdersPage from '../views/pages/home-pages/orders/orders.vue';
import JobPage from '../views/pages/home-pages/job/job.vue';
import NewPublicPage from '../views/pages/home-pages/newPublic/newPublic.vue';

// create-account-pages:
import SignInPage from '../views/pages/account-create-pages/signIn/signIn.vue';
import SignUpPage from '../views/pages/account-create-pages/signUp/signUp.vue';

// footer-pages:
import AgbPage from '../views/pages/footer-pages/agb/agb.vue';
import ImprintPage from '../views/pages/footer-pages/imprint/imprint.vue';
import ParentsInfoPage from '../views/pages/footer-pages/parentsInfo/parentsInfo.vue';
import PrivacyPage from '../views/pages/footer-pages/privacy/privacy.vue';
import RightOfRecallPage from '../views/pages/footer-pages/rightOfRecall/rightOfRecall.vue';

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
    path: '/orders',
    name: 'OrdersPage',
    component: OrdersPage,
  },
  {
    path: '/job',
    name: 'JobPage',
    component: JobPage,
  },
  {
    path: '/new',
    name: 'NewPublicPage',
    component: NewPublicPage,
  },
  {
    path: '/signin',
    name: 'SignInPage',
    component: SignInPage,
  },
  {
    path: '/signUp',
    name: 'SignUpPage',
    component: SignUpPage,
  },
  {
    path: '/agb',
    name: 'AgbPage',
    component: AgbPage,
  },
  {
    path: '/imprint',
    name: 'ImprintPage',
    component: ImprintPage,
  },
  {
    path: '/informations',
    name: 'ParentsInfoPage',
    component: ParentsInfoPage,
  },
  {
    path: '/privacy',
    name: 'PrivacyPage',
    component: PrivacyPage,
  },
  {
    path: '/rights',
    name: 'RightOfRecallPage',
    component: RightOfRecallPage,
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
