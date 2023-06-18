import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import log from 'js-logger';
import moment from 'moment-timezone';
import i18n from './i18n';
import axios from 'axios';
// import redis from 'redis';

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
