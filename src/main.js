import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueCookie,
  render: h => h(App)
}).$mount('#app')
