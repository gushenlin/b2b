<template>
  <div class="m-content">
    <div class="mask" v-show="showMask"></div>

    <div class="login" v-show="showLogin">
      <div class="close" @click="closeLogin()"></div>
      <div class="ico"></div>
      <p class="tip">使用手机号登录</p>

      <input type="text" placeholder="请输入你的手机号" maxlength="11" v-model="form.mobile">
      <input type="password" placeholder="请输入密码" v-model="form.password">

      <button class="login-btn" @click="submitLogin">登录</button>

      <a class="forget-tip" @click="$router.push('/user/resetpsw')">忘记密码？</a>
      <p class="toreg">没有账号？<a @click="$router.push('/user/reg')">立即注册</a ></p>
    </div>
	</div>
</template>

<script>
import { login } from '@/config/api';

export default {
  data() {
    return {
      showMask: true,
      showLogin: true,
      form: {
        password: '',
        mobile: ''
      }
    };
  },

  methods: {
    // 提交登录
    submitLogin() {
      login({
        account: this.form.mobile,
        password: this.$md5(this.form.password)
      }).then(res => {
        if (res.code === 0) {
          // commit cookie
          this.$store.commit('USER_INFO', res.data);
          this.$cookies.set('session_token', res.data.token);
          // 获取购物车信息
          this.$store.dispatch('ACTION_CART_INFO', true);

          // 返回
          if (this.$route.query.type) {
            this.$router.push('/home');
          } else {
            this.$router.back();
          }
        }
      });
    },

    closeLogin() {
      this.showMask = false;
      this.showLogin = false;
      if (this.$route.query.type) {
        this.$router.push('/home');
      } else {
        this.$router.back();
      }
    }
  },

  components: {}
};
</script>

<style scoped lang="scss" type="text/scss">
.m-content {
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.4;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  .login {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -280px;
    margin-left: -260px;
    width: 520px;
    height: 560px;
    background: #fff;
	text-align:center;
	z-index:2;
    .close {
      position: absolute;
      right: 22px;
      top: 22px;
      width: 13px;
      height: 13px;
      background: url(img/reg-close.png) center top no-repeat;
      background-size: 100% 100%;
	  cursor: pointer;
    }
    .ico {
      width: 181px;
      height: 57px;
      background: url(img/zy-logo-s.png) center top no-repeat;
      background-size: 100% 100%;
      margin: 80px auto 24px;
    }
	.tip{
		font-size:16px;
		text-align:center;
		color:#666;
		margin-bottom:52px;
	}
	input{
		width:330px;
		height:48px;
		border:1px solid #999;
		font-size:16px;
		color:#333;
		padding-left:12px;
		margin:0 auto 30px;
	}
	.login-btn{
		display:block;
		width:330px;
		height:50px;
		background:#009dee;
		font-size:16px;
		color:#fff;
		border-radius:4px;
		border:none;
		outline:none;
		margin:0 auto;
		cursor: pointer;
	}
	.forget-tip{
		display: block;
		font-size:14px;
		color:#666;
		text-align:right;
		margin:16px 95px 64px 0;
		cursor: pointer;
	}
	.toreg{
		font-size:14px;
		color:#666;
		text-align:right;
		margin-right:24px;
		a{
			color:#009dee;
		}
	}
  }
}
</style>
`
