import Home from '../../pages/home/home.vue';

export default {
  name: 'Navigation',
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
  }
}
