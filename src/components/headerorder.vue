<template>
  <div class="bg">
    <div class="wrap">
      <a class="f-logo" @click="$router.push('/home/index')"></a>
      <div class="f-search">
        <div class="searchbg">
          <input type="" name="">
          <button>搜索</button>
        </div>
        <p class="hotsearch">热门搜索：康明斯  德纳  法士特  齿轮  轮胎</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style lang='scss' scoped>
.bg {
  width: 100%;
  overflow: hidden;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #999;
    .f-logo {
      display: block;
      width: 471px;
      height: 55px;
      float: left;
      background: url(img/zy-logo.png) center top no-repeat;
      background-size: 100% 100%;
      margin-top: 16px;
    }
    .f-search {
      float: right;
      width: 452px;
      margin: 26px 0 18px;
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
