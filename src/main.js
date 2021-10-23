import "babel-polyfill";//es6转es5兼容IE
import "url-search-params-polyfill";//让ie兼容new URLSearchParams()
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import config from './assets/js/conf/config';
import utils from './assets/js/utils';

import Router from 'vue-router'
// 解决重复点击导航路由报错
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}




Vue.config.productionTip = false;

Vue.prototype.$config=config;
Vue.prototype.$utils=utils;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
