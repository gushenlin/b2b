<template>
  <div class="bg">
    <div class="wrap">
      <div class="goodslist">
        <h4 @click="$router.push('/home')">
          <i class="list"></i>全部商品分类<i class="arrow"></i>
        </h4>
      </div>

      <ul class="nav">
        <li @click="changeTab('/shop/productcenter', 1)" :class="{'active': tabState === 1}">商品中心</li>
        <li @click="changeTab('/home/newslist', 2)" :class="{'active': tabState === 2}">最新资讯</li>
        <li @click="changeTab('/home/aboutus', 3)" :class="{'active': tabState === 3}">关于我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },

  watch: {
  },

  computed: {
    tabState() {
      return this.$store.state.tabState;
    }
  },

  methods: {
    changeTab(path, num) {
      this.$store.commit('TAB_STATE', num);
      this.$router.push(path);
    }
  },

  updated() {

  }
};
</script>

<style lang='scss' scoped>
  .bg{
    width:100%;
    border-bottom:2px solid #009dee;
    overflow:hidden;
    .wrap{
      width:1200px;
      margin:0 auto;
      .goodslist{
        width:206px;
        height:36px;
        background:#009dee;
        line-height:36px;
        float:left;
        font-size:16px;
        color:#fff;
        h4{
          margin:0;
          line-height:36px;
        }
        i{
          display:inline-block;
        }
        .list{
          width:18px;
          height:14px;
          background:url(img/headernav-list.png) center top no-repeat;
          background-size:100% 100%;
          margin:12px 12px  0 10px;
          vertical-align: top;
        }
        .arrow{
          display: none;
          width:18px;
          height:10px;
          background:url(img/headernav-arrow.png) center top no-repeat;
          background-size:100% 100%;
          margin:0 20px;
        }
      }
      ul{
        li{
          float:left;
          font-size:16px;
          color:#333;
          height:36px;
          line-height:36px;
          padding-left:77px;
          cursor:pointer;
        }
        .active{
          color:#009dee;
        }
      }
    }
  }
</style>
