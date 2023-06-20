import Home from '../../pages/home-pages/home/home.vue';
import OrdersPage from '../../pages/home-pages/orders/orders.vue';
import JobPage from '../../pages/home-pages/job/job.vue';
import NewPublicPage from '../../pages/home-pages/newPublic/newPublic.vue';

import SignInPage from '../../pages/profile-pages/signIn/signIn.vue';
import SignUpPage from '../../pages/profile-pages/signUp/signUp.vue';

import AgbPage from '../../pages/footer-pages/agb/agb.vue';
import ImprintPage from '../../pages/footer-pages/imprint/imprint.vue';
import ParentsInfoPage from '../../pages/footer-pages/parentsInfo/parentsInfo.vue';
import PrivacyPage from '../../pages/footer-pages/privacy/privacy.vue';
import RightOfRecallPage from '../../pages/footer-pages/rightOfRecall/rightOfRecall.vue';

import Page404 from '../../pages/pageNotFound/page404.vue';

import loader from '../loader/Loader.vue';
import Footer from '../footer/Footer.vue';
import ToggleTheme from '../toggleTheme/ToggleTheme.vue';
import LangSwitch from '../langSwitch/LangSwitch.vue';
import Profile from '../Profile/Profile.vue';

import { getAuth, onAuthStateChanged } from "firebase/auth";

let auth;

export default {
  name: 'Navigation',
  data() {
    return {
      loading: true,
      isLoggedIn: false,
    };
  },
  props: {
    toggleTheme: {
      type: Function,
      default: () => {},
    },
    currentTheme: {
      type: Boolean,
      default: () => true
    },
  },
  components: {
    Home,
    OrdersPage,
    JobPage,
    NewPublicPage,
    SignInPage,
    SignUpPage,
    AgbPage,
    ImprintPage,
    ParentsInfoPage,
    PrivacyPage,
    RightOfRecallPage,
    Page404,
    loader,
    Footer,
    ToggleTheme,
    LangSwitch,
    Profile
  },
  async mounted() {
    if (this.loading === true) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    };

    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
}
