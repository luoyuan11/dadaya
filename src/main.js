// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from '@/components/utils/components.js'
Vue.use(components)
Vue.config.productionTip = false
import 'animate.css'
import {WOW} from 'wowjs';
new WOW({
  live: false,
  offset:100

}).init();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
