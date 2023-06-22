import {ref} from 'vue';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

import Navigation from '../views/components/navigation/Nav.vue';

// let auth;

export default {
  name: 'app',
  components: {
    Navigation,
  },
  data() {
    return {
      currentTheme: ref(true),
      // isLoggedIn: false,
    };
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
  },
  async mounted() {
    this.loadTheme();

  //   auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       this.isLoggedIn = true;
  //     } else {
  //       this.isLoggedIn = false;
  //     }
  //   });
  },
}
