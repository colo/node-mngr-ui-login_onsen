// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// JS import
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueOnsen)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
