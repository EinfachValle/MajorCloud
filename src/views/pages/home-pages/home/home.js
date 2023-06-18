
export default {
  name: 'HomePage',
  data() {
    return {

    }
  },
  components: {
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
  mounted() {
  },
}
