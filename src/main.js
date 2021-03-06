import 'bulma/css/bulma.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@sweetalert2/theme-bulma/bulma.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
