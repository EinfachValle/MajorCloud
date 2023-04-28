export default {
  name: 'toggleMode',
  methods: {},
  data() {
    return {

    }
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
}
