<template>
	<div class="m-content">
		<div class="reg-nav">
			<div class="logo-reg">
				<a @click="$router.push('/home/index')" class="logo"></a>
				<span>忘记密码</span>
			</div>
			<ul>
				<li @click="$router.push('/user/login')">登录</li>
				<li @click="$router.push('/home/index')">汽配网首页</li>
			</ul>
		</div>
		<ul class="menu">
			<li><i>1</i>填写手机号</li>
			<li><i>2</i>重置密码</li>
			<li><i>3</i>修改成功</li>
		</ul>

    <!-- 获取验证码 -->
		<div class="step writephone" v-if="showTag ===1">
			<ul>
				<li>
					<span>手机号：</span>
					<input type="text" placeholder="请输入你的手机号" minlength="11" maxlength="11" v-model="mobile">
				</li>
				<li class="getcode">
					<span>验证码：</span>
					<input type="text" placeholder="请输入验证码" v-model="code">
					<span class="code" @click="getCode">获取验证码</span>
					<!--<span class="code" v-if="times > 0">{{times}}s后获取</span>-->
				</li>
			</ul>
			<button @click="checkCode">下一步</button>
		</div>

    <!-- 确认密码 -->
		<div class="step resetpsw" v-if="showTag === 2">
			<ul>
				<li>
					<span>新密码：</span>
					<input type="password" placeholder="请输入你的密码" v-model="password">
				</li>
				<li>
					<span>确认新密码：</span>
					<input type="password" placeholder="请再次输入你的新密码" v-model="confirmPassword">
				</li>
			</ul>

			<button @click="submitNewPassword">下一步</button>
		</div>

    <!-- 密码修改的状态 -->
		<div class="step success" v-if="showTag === 3">
			<p><i></i>修改成功</p>
			<button @click="$router.push('/user/login')">返回登录</button>
		</div>

	</div>
</template>
<script>
import { sendRegSms, checkSmsCode, forgetPassword } from '@/config/api';
export default {
  data() {
    return {
      showTag: 1,
      mobile: '',
      code: '',
      password: '',
      confirmPassword: '',
      times: 0
    };
  },

  methods: {
    // 获取短信验证码
    getCode() {
      sendRegSms({
        mobile: this.mobile
      }).then(res => {
        if (res.code === 0) {
          console.log('发送成功');
        }
      });
    },

    // 校验验证码
    checkCode() {
      checkSmsCode({
        mobile: this.mobile,
        code: this.code
      }).then(res => {
        if (res.code === 0) {
          this.showTag = 2;
        }
      });
    },

    // 提交新密码
    submitNewPassword() {
      forgetPassword({
        mobile: this.mobile,
        code: this.code,
        password: this.$md5(this.password)
      }).then(res => {
        if (res.code === 0) {
          this.showTag = 3;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.m-content {
  width: 1200px;
  margin: 0 auto;
  .reg-nav {
    overflow: hidden;
    .logo-reg {
      float: left;
      .logo {
        display: inline-block;
        width: 181px;
        height: 57px;
        background: url(img/zy-logo-s.png) center top no-repeat;
        background-size: 100% 100%;
        margin-top: 20px;
      }
      span {
        display: inline-block;
        font-size: 20px;
        color: #333;
        vertical-align: top;
        margin: 40px 0 0 20px;
      }
    }
    ul {
      float: right;
      li {
        float: left;
        font-size: 16px;
        color: #666;
        margin-top: 40px;
        cursor: pointer;
      }
      li:first-child {
        margin-right: 84px;
      }
      li:hover {
        color: #009dee;
      }
    }
  }
  .menu {
    border-bottom: 1px solid #e6e6e6;
    clear: both;
    overflow: hidden;
    margin-top: 130px;
    li {
      float: left;
      width: 182px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #666;
      cursor: pointer;
      text-align: center;
      margin-left: 152px;
      i {
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        border-radius: 100%;
        color: #fff;
        background: #ccc;
        margin-right: 6px;
        text-align: center;
      }
    }
    li:first-child {
      margin-left: 180px;
    }
    li:hover {
      color: #009dee;
      border-bottom: 2px solid #009dee;
      i {
        background: #009dee;
      }
    }
  }
  .step {
    margin-top: 90px;
    text-align: center;
    li {
      font-size: 14px;
      color: #333;
      margin-top: 30px;
      span {
        display: inline-block;
        width: 88px;
        text-align: right;
      }
      input {
        width: 298px;
        height: 28px;
        border: 1px solid #c1c1c1;
        padding-left: 8px;
      }
    }
    .getcode {
      input {
        width: 186px;
      }
      .code {
        display: inline-block;
        width: 102px;
        height: 30px;
        line-height: 30px;
        border-radius: 6px;
        background: #009dee;
        font-size: 16px;
        color: #fff;
        text-align: center;
        margin-left: 8px;
      }
    }
    li:first-child {
      margin-top: 0;
    }
  }
  .success {
    margin-top: 97px;
    p {
      height: 35px;
      line-height: 35px;
      font-size: 20px;
      color: #333;
      margin-bottom: 15px;
      i {
        display: inline-block;
        width: 35px;
        height: 35px;
        vertical-align: top;
        border-radius: 100%;
        background: url(img/r-get.png) center top no-repeat;
        background-size: 100% 100%;
        margin-right: 18px;
      }
    }
  }
  button {
    display: inline-block;
    outline: none;
    border: none;
    width: 360px;
    height: 35px;
    line-height: 35px;
    background: #009dee;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-top: 82px;
  }
}
</style>
