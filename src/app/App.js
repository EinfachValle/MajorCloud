import {ref} from 'vue';

import page404 from '../views/pages/pageNotFound/page404.vue';

export default {
  name: 'app',
  components: {
    page404,
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
      location.reload();
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
