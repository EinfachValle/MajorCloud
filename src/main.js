import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import log from 'js-logger';
import moment from 'moment-timezone';
import i18n from './i18n';
import axios from 'axios';

// firebase:
import { initializeApp } from "firebase/app";
// TODo: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDowu-o_4td11DO0aifmt9h9l0_lv8NHFQ",
  authDomain: "majorcloud-develop.firebaseapp.com",
  projectId: "majorcloud-develop",
  storageBucket: "majorcloud-develop.appspot.com",
  messagingSenderId: "870166563987",
  appId: "1:870166563987:web:dc661b4d58425191549166",
  measurementId: "G-ZQ743ET6V8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(i18n);
app.use(moment);
app.use(router);
app.use(createPinia());
app.mount('#app');

log.useDefaults();

const ahScriptURL = document.createElement('a');
try {
  ahScriptURL.href = document.querySelector('script[data-ahscript="majorcloud"]').src;
} catch (e) {
  // will use location.origin as fallback
}
const baseURL = ahScriptURL.origin || document.location.origin;

/* eslint-disable */
if (
  __webpack_require__ &&
  typeof __webpack_require__.p === 'string' &&
  __webpack_require__.p === ''
) {
  // eslint-disable-next-line camelcase
  __webpack_require__.p = `${baseURL}/dist/`; // base src for all static resources
}
/* eslint-enable */

axios.defaults.baseURL = `${baseURL}/api/`;

if (module.hot) {
  module.hot.accept();
}
