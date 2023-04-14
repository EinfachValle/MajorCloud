import Home from '../../pages/home-pages/home/home.vue';
import OrdersPage from '../../pages/home-pages/orders/orders.vue';
import JobPage from '../../pages/home-pages/job/job.vue';
import NewPublicPage from '../../pages/home-pages/newPublic/newPublic.vue';

import SignInPage from '../../pages/account-create-pages/signIn/signIn.vue';
import SignUpPage from '../../pages/account-create-pages/signUp/signUp.vue';

import AgbPage from '../../pages/footer-pages/agb/agb.vue';
import ImprintPage from '../../pages/footer-pages/imprint/imprint.vue';
import ParentsInfoPage from '../../pages/footer-pages/parentsInfo/parentsInfo.vue';
import PrivacyPage from '../../pages/footer-pages/privacy/privacy.vue';
import RightOfRecallPage from '../../pages/footer-pages/rightOfRecall/rightOfRecall.vue';

import loader from '../loader/Loader.vue';
import Footer from '../footer/Footer.vue';

export default {
  name: 'Navigation',
  data() {
    return {
      loading: true,
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
    loader,
    Footer
  },
  async mounted() {
    if (this.loading === true) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
}
