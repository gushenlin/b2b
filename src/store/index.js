import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
import { cartList } from '@/config/api';

Vue.use(Vuex);

// 用户信息
const USER_INFO = 'USER_INFO';
// nva 状态
const TAB_STATE = 'TAB_STATE';
// 购物车信息
const CART_INFO = 'CART_INFO';

const ACTION_CART_INFO = 'ACTION_CART_INFO';
const store = new Vuex.Store({
  state: {
    // 登录获取的个人信息
    userInfo: Cookies.getJSON('USER_INFO') ? Cookies.getJSON('USER_INFO') : false,
    tabState: 1,
    cartInfo: {}
  },

  mutations: {
    [USER_INFO](state, payload) {
      // 移除cookie 退出登录
      if (payload === false) {
        Cookies.remove('USER_INFO');
        Cookies.remove('X-Ivanka-Token');
        Cookies.remove('factoryId');
        Cookies.remove('accountId');
        Cookies.remove('roleType');
        Cookies.remove('roleId');
        state.userInfo = false;
      } else {
        // 保存cookie 获取登录状态
        Cookies.set('USER_INFO', payload);
        // 结算和订单跳转询价所需cookie 和 domain
        Cookies.set('X-Ivanka-Token', payload.token, { domain: process.env.DOMAIN });
        Cookies.set('factoryId', payload.factoryId, { domain: process.env.DOMAIN });
        Cookies.set('accountId', payload.accountId, { domain: process.env.DOMAIN });
        Cookies.set('roleType', payload.roleType, { domain: process.env.DOMAIN });
        Cookies.set('roleId', payload.roleId, { domain: process.env.DOMAIN });

        // 测试用
        // Cookies.set('X-Ivanka-Token', payload.token);
        // Cookies.set('factoryId', payload.factoryId);
        // Cookies.set('accountId', payload.accountId);
        // Cookies.set('roleType', payload.roleType);
        // Cookies.set('roleId', payload.roleId);

        state.userInfo = Cookies.getJSON('USER_INFO');
      }
    },

    // 改变导航状态
    [TAB_STATE](state, payload) {
      state.tabState = payload;
    },

    // 购物车信息
    [CART_INFO](state, payload) {
      state.cartInfo = {...state.cartInfo, ...payload};
    }
  },
  getters: {},
  actions: {
    [ACTION_CART_INFO]({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        // 购物车登录验证
        if (state.userInfo !== false && payload === true) {
          // 获取购物列表信息
          cartList().then(res => {
            if (res.code === 0) {
              // 同步commit购物车信息
              commit('CART_INFO', res.data);
              // 返回promise
              return resolve(res.data);
            } else {
              Cookies.remove('USER_INFO');
              Cookies.remove('X-Ivanka-Token');
              Cookies.remove('factoryId');
              Cookies.remove('accountId');
              Cookies.remove('roleType');
              Cookies.remove('roleId');
            }
          });
        }
      });
    }
  },
  modules: {}
});

export default store;
