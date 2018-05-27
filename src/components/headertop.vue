<template>
  <div class="bg">
    <div class="wrap">
      <div class="f-left">
        <p class="greet">您好，欢迎进入南方众悦汽配！</p>
        <div v-if="isLogin" class="loginbg login">
          <!--<span>宝马汽修厂</span>-->
          <span class="logout" @click="logout">【退出】</span>
        </div>

        <div v-if="!isLogin" class="loginbg nologin">
          <span @click="$router.push('/user/login')">请登录</span>
          <span @click="$router.push('/user/reg')">注册</span>
        </div>

      </div>

      <div class="f-right">
        <ul>
          <li @click="$router.push('/shop/cart')">
            <i class="ico ico1"></i>
            购物车
            <i>{{cartInfo.num ? cartInfo.num : 0}}</i>件
          </li>
          <li @click="goAdmin">
            <i class="ico ico2"></i>
            我的订单
          </li>
          <li @click="$router.push('/home/help')">
            <i class="ico ico3"></i>
            帮助中心
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      info: {},
      totalNum: 0
    };
  },

  computed: {
    isLogin() {
      return this.$store.state.userInfo;
    },
    ...mapState({
      cartInfo: 'cartInfo'
    })
  },

  methods: {
    // 退出登录
    logout() {
      this.$store.commit('USER_INFO', false);
      window.location.reload();
    },

    // 去我的订单
    goAdmin() {
      // 登录验证
      if (!this.isLogin) return this.$router.push('/user/login');
      window.open(this.isLogin.bgUrl);
    }

  },

  created() {
  }
};
</script>

<style lang='scss' type="text/scss" scoped>
  .bg {
    height: 26px;
    line-height: 26px;
    background: #f2f2f2;
    border-bottom: 1px solid #e5e5e5;
    .wrap {
      width: 1200px;
      margin: 0 auto;
      font-size: 14px;
      color: #999;
      .f-left {
        float: left;
        .greet {
          float: left;
        }
        .loginbg {
          float: left;
          margin-left: 20px;
          span:first-child {
            padding-right: 20px;
          }
          .logout {
            cursor: pointer;
          }
        }
        .login {
          color: #009dee;
        }
        .nologin {
          span {
            cursor: pointer;
          }
          span:hover {
            color: #009dee;
          }
        }
      }
      .f-right {
        float: right;
        li {
          float: left;
          margin-right: 25px;
          cursor: pointer;
          &:hover{
            color:#009dee;
          }
          .ico {
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url(img/head-common-ico.png) center top no-repeat;
            background-size: 68px 14px;
            vertical-align: top;
            margin-top: 3px;
          }
          .ico1 {
            background-position: 0 3px;
          }
          .ico2 {
            background-position: -26px 2px;
          }
          .ico3 {
            background-position: -54px 3px;
          }
        }
      }
    }
  }
</style>
