import {ref} from 'vue';

import page404 from '../views/pages/pageNotFound/page404.vue';

import Navigation from '../views/components/navigation/Nav.vue';

export default {
  name: 'app',
  components: {
    page404,
    Navigation,
  },
  data() {
    return {
      currentTheme: ref(true),
    }
  },
  async mounted() {
    this.loadTheme();
  },
  methods: {
    toggleTheme() {
      this.currentTheme = ref(!this.currentTheme);
      localStorage.setItem('theme', this.currentTheme);
    },
    loadTheme() {
      if (localStorage.getItem('theme') === 'true') {
        this.currentTheme = ref(true)
      } else {
        this.currentTheme = ref(false)
      }
    }
  }
}
