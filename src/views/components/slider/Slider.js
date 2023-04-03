export default {
  name: 'Slider',
  data() {
    return {
      Change: 0,
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
    },
  },
  methods: {
    LeftSide() {
      this.Change += 90;
      document.querySelector(
        ".slider"
      ).style.transform = `perspective(800px) rotateX(270deg) rotate(${this.Change}deg) translateZ(-150px)`;
    },
    RightSide() {
      this.Change -= 90;
      document.querySelector(
        ".slider"
      ).style.transform = `perspective(800px) rotateX(270deg) rotate(${this.Change}deg) translateZ(-150px)`;
    },
  },
}
