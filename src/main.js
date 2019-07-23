// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import fastclick from 'fastclick'
import Vant from 'vant';


import 'vant/lib/index.css';
import '../static/css/reset.styl'
import '../static/iconfont/iconfont.css'

Vue.config.productionTip = false

fastclick.attach(document.body)

import { Toast, Loading } from '@/common/plugin'
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Vant);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
