import Home from '../../pages/home/home.vue';

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
