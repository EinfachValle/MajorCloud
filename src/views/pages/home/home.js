import { register } from 'swiper/element/bundle';

export default {
  name: 'HomePage',
  data() {
    return {

    }
  },
  components: {},
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
  mounted() {
    register();
  },
}
