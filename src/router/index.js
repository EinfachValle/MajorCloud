import {
  createWebHistory,
  createRouter
} from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// routes:

// 404 Page:
import Page404 from '../views/pages/pageNotFound/page404.vue';

// home-pages:
import HomePage from '../views/pages/home-pages/home/home.vue';
import OrdersPage from '../views/pages/home-pages/orders/orders.vue';
import JobPage from '../views/pages/home-pages/job/job.vue';
import NewPublicPage from '../views/pages/home-pages/newPublic/newPublic.vue';

// profile-pages:
import SignInPage from '../views/pages/profile-pages/signIn/signIn.vue';
import SignUpPage from '../views/pages/profile-pages/signUp/signUp.vue';

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
    meta: {
      title: 'Dashboard',
    },
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
    path: '/register',
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
    name: 'PageNotFound',
    component: Page404,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },
//       reject
//     );
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser()) {
//       next();
//     } else {
//       // eslint-disable-next-line
//       alert("you dont have access!");
//       next("/");
//     }
//   } else {
//     next();
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
