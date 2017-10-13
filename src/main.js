// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import store from './stores/index';
//引入iview
// import iView from 'iview';
// import 'iview/dist/styles/iview.css'
// import 'iview/dist/iview.min.js'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.config.productionTip = false
//iview
// Vue.use(VueRouter);
// Vue.use(iView);

/* eslint-disable no-new */
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>',
  ss:10,
  mounted(){
    //设置app启动
   
    var ss=10;
  }
  // components: { App }
})
