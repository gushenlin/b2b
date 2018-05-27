<template>
  <div class="bg">
    <div class="wrap">
      <div class="f-logo" @click="$router.push('/home/index')"></div>
      <div class="f-search">
        <div class="searchbg">
          <input type="text" v-model="searchWord">
          <button @click="search">搜索</button>
        </div>
        <p class="hotsearch">热门搜索：康明斯 德纳 法士特 齿轮 轮胎</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  goodsList
} from '@/config/api';

import utils from '@/util/index';

export default {
  data() {
    return {
      searchWord: ''
    };
  },

  methods: {
    search() {
      if (this.searchWord === '') {
        utils.toast({str: '请输入关键词搜索'});
      } else {
        goodsList({
          name: this.searchWord
        }).then(res => {
          if (res.code === 0) {
            this.$router.push('/shop/productcenter?name=' + this.searchWord);
          }
        });
      }
    }
  },

  created() {
  }
};
</script>

<style lang='scss' type="text/scss" scoped>
  .bg {
    width: 100%;
    overflow: hidden;
    .wrap {
      width: 1200px;
      margin: 0 auto;
      font-size: 14px;
      color: #999;
      .f-logo {
        width: 471px;
        height: 55px;
        float: left;
        background: url(img/zy-logo.png) center top no-repeat;
        background-size: 100% 100%;
        margin: 42px 0 26px;
        cursor: pointer;
      }
      .f-search {
        float: right;
        width: 452px;
        margin: 54px 0 18px;
        .searchbg {
          width: 452px;
          height: 38px;
          border: 1px solid #009dee;
          input {
            width: 380px;
            height: 36px;
            outline: none;
            border: none;
            float: left;
            padding-left: 10px;
          }
          button {
            display: inline-block;
            float: left;
            width: 70px;
            height: 36px;
            font-size: 16px;
            color: #fff;
            outline: none;
            border: none;
            background: #009dee;
            cursor: pointer;
          }
        }
      }
      .hotsearch {
        font-size: 14px;
        color: #999;
        text-align: left;
        padding-top: 10px;
      }
    }
  }
</style>
