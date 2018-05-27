<template>
	<div class="m-content">
		<div class="login-nav">
			<div class="logo-reg">
				<a class="logo" @click="$router.push('/home/index')"></a>
				<span>用户注册</span>
			</div>
			<ul>
				<li @click="$router.push('/user/login?type=reg')">登录</li>
				<li @click="$router.push('/home/index')">汽配网首页</li>
			</ul>
		</div>
		<ul class="menu">
			<li :class="{ active: form.role == 0 }" @click="form.role = 0">维修厂/4S店</li>
			<li :class="{ active: form.role == 1 }" @click="form.role = 1">供应商</li>
		</ul>

		<div class="register">
			<ul>
				<li>
					<span>手机号：</span>
					<input type="text" placeholder="请输入你的手机号" maxlength="11" v-model="form.mobile">
				</li>

				<li>
					<span>密码：</span>
					<input type="password" placeholder="请输入密码" v-model="form.password">
				</li>

				<li>
					<span>确认密码：</span>
					<input type="password" placeholder="请再次输入密码" v-model="form.repassword">
				</li>

				<li class="getcode">
					<span>验证码：</span>
					<input type="text" v-model="form.code" placeholder="请输入验证码">
					<span class="code" @click="getphoneCode">{{codeTip}}</span>
				</li>
			</ul>

			<div class="xieyi">
				<i :class="{ selected: isSelected }" @click="isSelected = !isSelected"></i>同意《<em>南方众悦汽配注册协议</em>》
			</div>

			<button @click="submitRegister">完成</button>
		</div>
	</div>
</template>

<script>
import { sendRegSms, register, login } from '@/config/api';
import utils from '@/util/index';

export default {
  data() {
    return {
      isSelected: true,
      codeTip: '获取验证码',
      form: {
        password: '',
        mobile: '',
        code: '',
        role: 0
      }
    };
  },

  methods: {
    // 获取验证码
    getphoneCode() {
      sendRegSms({
        mobile: this.form.mobile
      }).then(res => {
        if (res.code === 0) {
          utils.toast({str: '发送成功'});
          this.codeTip = '正在发送';
        }
      });
    },

    // 提交注册
    submitRegister() {
      register({
        password: this.$md5(this.form.password),
        mobile: this.form.mobile,
        code: this.form.code,
        role: this.form.role
      }).then(res => {
        if (res.code === 0) {
          utils.toast({str: '注册成功'});
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
        }
      });
    }
  }
};
</script>

<style scoped lang="scss" type="text/scss">
  .m-content{
	width:1200px;
	margin:0 auto;
	.login-nav{
		overflow:hidden;
		.logo-reg{
			float:left;
			.logo{
				display:inline-block;
				width:181px;
				height:57px;
				background:url(img/zy-logo-s.png) center top no-repeat;
				background-size:100% 100%;
				margin-top:20px;
			}
			span{
				display:inline-block;
				font-size:20px;
				color:#333;
				vertical-align:top;
				margin:40px 0 0 20px;
			}
		}
		ul{
			float:right;
			li{
				float:left;
				font-size:16px;
				color:#666;
				margin-top:40px;
				cursor:pointer;
                list-style:none;
			}
			li:first-child{
				margin-right:84px;
			}
			li:hover{
				color:#009dee;
			}
		}
	}
	.menu{
		border-bottom:1px solid #e6e6e6;
		clear:both;
		overflow:hidden;
		margin-top:130px;
		li{
			float:left;
			width:144px;
			height:50px;
			line-height:50px;
			font-size:16px;
			color:#666;
			cursor:pointer;
			text-align:center;
      list-style:none;
		}
		li:first-child{
			margin:0 310px 0 314px;
		}
		li:hover{
			color:#009dee;
			border-bottom:2px solid #009dee;
		}
        li.active{
            color:#009dee;
			border-bottom:2px solid #009dee;
        }
	}
	.register{
		margin-top:90px;
		text-align:center;
		li{
			font-size:14px;
			color:#333;
			margin-top:30px;
            list-style:none;
			span{
				display:inline-block;
				width:72px;
				text-align:right;
			}
			input{
				width:298px;
				height:28px;
				border:1px solid #c1c1c1;
				padding-left:8px;
			}
		}
		.getcode{
			input{
				width:186px;
			}
			.code{
				display:inline-block;
				width:102px;
				height:30px;
				line-height:30px;
				border-radius:6px;
				background:#009dee;
				font-size:16px;
				color:#fff;
				text-align:center;
				margin-left:8px;
                cursor:pointer;
			}
		}
		li:first-child{
			margin-top:0;
		}
	}
	.xieyi{
		margin-top:20px;
		font-size:14px;
		color:#333;
		i{
			display:inline-block;
			width:15px;
			height:14px;
			background:url(img/r-unselect.png) center top no-repeat;
			background-size:100% 100%;
			vertical-align:top;
			margin-right:8px;
			cursor:pointer;
		}
        .selected{
            background:url(img/r-selected.png) center top no-repeat;
			background-size:100% 100%;
        }
		em{
			color:#e60012;
			cursor:pointer;
		}
	}
	button{
		display:inline-block;
		outline:none;
		border:none;
		width:360px;
		height:35px;
		line-height:35px;
		background:#009dee;
		font-size:16px;
		color:#fff;
		cursor:pointer;
		margin-top:48px;
	}
}
</style>
