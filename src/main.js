// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 默认包裹层
import App from './App';
// vue路由
import router from './router';
// vuex store 状态
import store from '@/store/index';
// 重置CSS
import 'normalize.css';
// 公共样式
import './css/common.css';
// 过滤器
import * as custom from './filters/index';
// 常用方法
import utils from './util/index';
// cookies
import cookies from 'js-cookie';
// md5
import md5 from 'md5';

Vue.config.productionTip = false;

// 全局常用方法
Vue.prototype.$utils = utils;
// 全局md5
Vue.prototype.$md5 = md5;
// 全局cookie
Vue.prototype.$cookies = cookies;
// 全局过滤器
Object.keys(custom).map(key => {
  Vue.filter(key, custom[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
