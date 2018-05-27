<template>
  <div class="m-content">
    <headertop></headertop>

    <headersearch></headersearch>

    <headernav></headernav>

    <router-view></router-view>

    <sidebar></sidebar>

    <footbottom></footbottom>
  </div>
</template>

<script>
import headersearch from '@/components/headersearch.vue';
import headernav from '@/components/headernav.vue';
import headertop from '@/components/headertop.vue';
import sidebar from '@/components/sidebar.vue';
import footbottom from '@/components/footbottom.vue';

export default {
  components: {
    headersearch,
    headernav,
    headertop,
    sidebar,
    footbottom
  }
};
</script>

<style scoped lang="scss" type="text/scss">
  .contentwrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .f-list {
      width: 206px;
      background: #009dee;
      float: left;
      li {
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #fff;
        padding-left: 14px;
        i {
          float: right;
          margin-right: 12px;
          vertical-align: top;
          width: 7px;
          height: 12px;
          background: url(img/home-arrow.png) center top no-repeat;
        }
      }
    }
    .f-banner {
      float: left;
      width: 762px;
      height: 350px;
      margin: 15px;
    }
    .f-recommend {
      float: left;
      width: 200px;
      height: 365px;
      margin-top: 15px;
      border: 1px solid #e6e6e6;
      .recommend-wrap {
        width: 180px;
        margin: 0 auto;
        h4 {
          font-size: 16px;
          color: #009dee;
          height: 44px;
          line-height: 44px;
          border-bottom: 1px solid #e6e6e6;
        }
        ul {
          overflow: hidden;
          padding: 10px 0;
          li {
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            color: #666;
          }
        }
        p {
          font-size: 14px;
          color: #666;
          height: 44px;
          line-height: 44px;
          text-align: center;
          border-top: 1px solid #e6e6e6;
          i {
            color: #e60012;
          }
        }
      }
    }
  }

  .hotbrand {
    overflow: hidden;
    .wrap {
      width: 1200px;
      margin: 0 auto;
      h4 {
        width: 448px;
        height: 25px;
        line-height: 25px;
        background: url(img/home-titline.png) center top no-repeat;
        margin: 52px auto;
        font-size: 24px;
        color: #666;
        text-align: center;
      }
      .f-ad {
        float: left;
        width: 289px;
        height: 458px;
        background: url(img/ad.jpg) center top no-repeat;
      }
      .f-brand {
        float: left;
        width: 910px;
        border-bottom: 1px solid #e6e6e6;
        li {
          float: left;
          width: 182px;
          height: 152px;
          border-right: 1px solid #e6e6e6;
          border-top: 1px solid #e6e6e6;
          text-align: center;
          img {
            width: 160px;
            height: 99px;
          }
          p {
            font-size: 14px;
            color: #666;
            padding-top: 20px;
          }
        }
      }
    }
  }

  .floor {
    overflow: hidden;
    .wrap {
      width: 1200px;
      margin: 0 auto;
      h4 {
        width: 448px;
        height: 25px;
        line-height: 25px;
        background: url(img/home-titline2.png) center top no-repeat;
        margin: 100px auto 44px;
        font-size: 24px;
        color: #666;
        text-align: center;
      }
      .f-sidebar {
        float: left;
        width: 128px;
        height: 500px;
        background: #f86850;
        li {
          padding-left: 18px;
          height: 52px;
          line-height: 52px;
          font-size: 14px;
          color: #fff;
        }
        li:first-child {
          height: 72px;
          line-height: 72px;
          font-size: 24px;
        }
      }
      .f-list {
        float: left;
        width: 840px;
        padding: 20px 0;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        li {
          float: left;
          width: 210px;
          text-align: center;
          img {
            width: 170px;
            height: 170px;
          }
          .productname {
            font-size: 12px;
            color: #333;
            padding: 12px 0 10px;
          }
          .money {
            font-size: 14px;
            color: #e60012;
            padding-bottom: 10px;
          }
        }
      }
      .f-ad {
        float: left;
        width: 232px;
        li {
          float: left;
        }
      }
    }
  }

  .floor2 {
    .wrap .f-sidebar {
      background: #90aae5;
    }
  }

  .floor3 {
    .wrap .f-sidebar {
      background: #4fcc8a;
    }
  }

  .floor4 {
    .wrap .f-sidebar {
      background: #fbaa12;
    }
  }

  .floor5 {
    .wrap .f-sidebar {
      background: #5ebbdd;
    }
  }

  .floor6 {
    .wrap .f-sidebar {
      background: #9c7cab;
    }
    margin-bottom: 115px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }

  .swiper-pagination-bullet-active {
    background-color: #ef1330;
    width: 20px;
    height: 20px;
  }
</style>
