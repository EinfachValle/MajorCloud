import { getAuth, onAuthStateChanged } from "firebase/auth";
import UnRegister from './components/unRegister/UnRegister.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';

let auth;

export default {
  name: 'HomePage',
  data() {
    return {
      isLoggedIn: false,
    }
  },
  components: {
    UnRegister,
    Dashboard
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
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
}
