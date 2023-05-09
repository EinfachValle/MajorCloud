export default {
  name: 'Loader',
  data() {
    return {
      window,
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
    }
  },
  async mounted() {
    this.loading = false;
  },
}
