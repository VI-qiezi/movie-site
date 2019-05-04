import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

import VueCookie from 'vue-cookie'

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueCookie,
  render: h => h(App)
}).$mount('#app')
