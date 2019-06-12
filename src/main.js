// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex/store'
// import splitPane from 'vue-splitpane'
import SlideVerify from 'vue-monoplasty-slide-verify'
import VueBus from 'vue-bus'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import draggable from 'vuedraggable'
import axios from 'axios'
import Promise from 'promise-polyfill'
import vueSeamlessScroll from 'vue-seamless-scroll'

if (!window.Promise) {
  window.Promise = Promise
}
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(SlideVerify)
Vue.use(VueBus)
Vue.use(iView)
Vue.use(draggable)
Vue.use(vueSeamlessScroll)
Vue.prototype.$axios = axios
// Vue.component('split-pane', splitPane)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
