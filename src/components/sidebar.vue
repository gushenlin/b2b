<template>
  <div class="sidebar">
    <ul>
      <li class="order">
        <div class="icobox">
          <i class="ico ico1"></i>
        </div>
        <div class="f-tip f-tip-order">我的订单</div>
      </li>
      <li class="cart" @click="$router.push('/shop/cart')">
        <i class="ico ico2"></i>
        <span>购物车</span>
        <i class="num">{{cartInfo.num ? cartInfo.num : 0}}</i>
      </li>
      <li class="kf">
        <div class="icobox">
          <i class="ico ico3"></i>
        </div>
        <div class="f-tip f-tip-kf">联系客服</div>
      </li>
      <li class="goback" @click="$router.push('/home')">
        <div class="icobox">
          <i class="ico ico4"></i>
        </div>
        <div class="f-tip f-tip-gotop">返回首页</div>
      </li>
      <li class="totop">
        <i class="ico ico5"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      cartInfo: 'cartInfo'
    })
  },
  methods: {
  }
};
</script>

<style lang='scss' type="text/scss" scoped>
.sidebar {
    position: fixed;
    right: 0;
    top: 0;
    background: #000;
    width: 50px;
    height: 1080px;
    .order,.kf,.goback{
      cursor: pointer;
    }
    .order:hover .f-tip{
      display: block;
    }
    .order:hover .icobox{
      background:#009dee;
    }
    .kf:hover .f-tip{
      display: block;
    }
    .kf:hover .icobox{
      background:#009dee;
    }
    .goback:hover .f-tip{
      display: block;
    }
    .goback:hover .icobox{
      background:#009dee;
    }
    li {
        position: relative;
        border-bottom: 1px solid #2c2c2c;
        padding-bottom: 50px;
        margin-top: 50px;
        &:hover{
          color:#009dee;
        }
        .ico {
            display: inline-block;
            width: 48px;
            height: 48px;
            background: url(img/side-com-ico.png) center top no-repeat;
            background-size: 36px 215px;
            background-position: 9px 10px;
            cursor: pointer;
        }
        .f-tip {
            display: none;
            position: absolute;
            right: 46px;
            top: 0;
            width: 114px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: url(img/side-tip.png) center top no-repeat;
            font-size: 16px;
            color: #fff;
        }
        .ico2 {
            background-position: 8px -34px;
        }
        .ico3 {
            background-position: 9px -76px;
        }
        .ico4 {
            background-position: 9px -125px;
        }
        .ico5 {
            background-position: 9px -175px;
        }
        .active {
            background: #009dee;
        }
        .num {
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 16px;
            color: #fff;
            background: #e60012;
            border-radius: 100%;
            margin-left: 10px;
            margin-top: 12px;
        }
    }
    li:first-child {
        margin-top:235px;
        border-top: none;
    }
    .cart {
        padding: 50px 0;
        margin: 0;
        cursor: pointer;
        span {
            top: 0px;
            right: 0px;
            display: inline-block;
            width: 20px;
            font-size: 16px;
            color: #fff;
            margin-left: 17px;
        }
    }
    .totop {
        margin-top: 210px;
        border-top: none;
    }
}
</style>
