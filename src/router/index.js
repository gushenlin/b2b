import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';
Vue.use(Router);

const router = new Router({
  // 前后分离所需要的base指向
  base: '/nfzy-web',
  // 使用history模式不会有#号
  mode: 'history',
  routes: [
    {
      // 没有就指向主页
      path: '*',
      // 重定向
      redirect: '/home'
    },
    {
      // 默认path
      path: '/',
      redirect: '/home',
      component: r => require.ensure([], () => r(require('../views/home/index.vue')), 'index'),
      children: [
        {
          path: 'home',
          meta: {title: '众悦好车'},
          component: r => require.ensure([], () => r(require('../views/home/homePage.vue')), 'home')
        },
        {
          path: 'home/aboutus',
          meta: {title: '关于我们'},
          component: r => require.ensure([], () => r(require('../views/home/aboutus.vue')), 'aboutus')
        },
        {
          path: 'home/help',
          meta: {title: '帮助中心'},
          component: r => require.ensure([], () => r(require('../views/home/help.vue')), 'help')
        },
        {
          path: 'home/news',
          meta: {title: '新闻'},
          component: r => require.ensure([], () => r(require('../views/home/news.vue')), 'news')
        },
        {
          path: 'home/newslist',
          meta: {title: '新闻列表'},
          component: r => require.ensure([], () => r(require('../views/home/newslist.vue')), 'newslist')
        },
        {
          path: 'shop/cart',
          meta: {title: '购物车'},
          component: r => require.ensure([], () => r(require('../views/shop/cart.vue')), 'cart')
        },
        {
          // 商品列表
          path: 'shop/productcenter',
          component: r => require.ensure([], () => r(require('../views/shop/productcenter.vue')), 'productcenter')
        },
        {
          // 商品详情
          path: 'shop/productdetail',
          component: r => require.ensure([], () => r(require('../views/shop/productdetail.vue')), 'detail')
        }
      ]
    },
    {
      path: '/user',
      component: r => require.ensure([], () => r(require('../views/user/index.vue')), 'index'),
      children: [
        {
          path: 'reg',
          meta: {title: '注册'},
          component: r => require.ensure([], () => r(require('../views/user/reg.vue')), 'reg')
        },
        {
          path: 'login',
          meta: {title: '登录'},
          component: r => require.ensure([], () => r(require('../views/user/login.vue')), 'login')
        },
        {
          path: 'resetpsw',
          meta: {title: '忘记密码'},
          component: r => require.ensure([], () => r(require('../views/user/resetpsw.vue')), 'resetpsw')
        }
      ]
    }
  ]
});

export default router;

// 路由进入页面前钩子函数
router.beforeEach((to, from, next) => {
  // 登录验证--购物详情
  if (to.path.indexOf('/shop/cart') !== -1 && store.state.userInfo === false) {
    next({path: '/user/login'});
  }

  // 更改浏览器标题
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '众悦好车';
  }

  next();
});
