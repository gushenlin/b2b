 <template>
  <div class="home-page">
    <div class="contentwrap">
      <!-- 商品分类 -->
      <div>
        <div class="f-list">
          <ul>
            <li v-for="(item,index) in data.systypeList" :key="item.systypeId"
                @click="goGoodsList(item, 'sys', index)"
                @mouseover="eNavOver(item.systypeId,index)" :class="{'active': data.systypeIdList[index] === showStatus}">
              {{item.name}}
            </li>
          </ul>
        </div>

        <!-- 商品分类子类 -->
        <ul class="showList" v-show="showsubtypeList">
          <li v-for="(item, index) in data.subtypeList" :key="item.subtypeId"
              @click="goGoodsList(item, 'sub', index)">
            {{item.name}}
          </li>
        </ul>
      </div>

      <!-- 轮播图 -->
      <div class="f-banner" @mouseover="eNavOut">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in data.bannerList" :key="item.redirect">
            <img :src="item.imgUrl">
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>

      <!-- 今日推荐 -->
      <div class="f-recommend" @mouseover="eNavOut">
        <div class="recommend-wrap">
          <h4>今日推荐</h4>
          <ul>
            <li v-for="item in data.recToday.list" :key="item.name">
              <a :href="item.url" target="_blank">{{item.name}}</a>
            </li>
          </ul>
          <p>本周上新
            <i>{{data.recToday.num}}</i> 款产品</p>
        </div>
      </div>
    </div>

    <!-- 热门品牌 -->
    <div class="hotbrand">
      <div class="wrap">
        <h4>热门品牌</h4>
        <!-- 广告图 -->
        <div class="f-ad">
          <a :href="data.advSalesBrand.advUrl" target="_blank"><img :src="data.advSalesBrand.advImgUrl"></a>
        </div>

        <!-- 品牌列表 -->
        <ul class="f-brand">
          <li v-for="item in data.advSalesBrand.brandList" :key="item.salesBrandId"
              @click="goGoodsList(item, 'brand', index)">
            <div class="shadow">
              <p>{{item.name}}</p>
              <button>点击进入</button>
            </div>
            <img :src="item.imgUrl" width="100%" height="100%">
            <p>{{item.name}}</p>
          </li>
        </ul>

      </div>
    </div>

    <!-- 商品分类 -->
    <div class="floor" :class="item.class" v-for="(item,index) in data.recGoods" :key="item.class">
      <div class="wrap">
        <!-- 类标题 -->
        <h4>{{index + 1}}F/{{item.sysName}}</h4>

        <!-- 类别 -->
        <ul class="f-sidebar">
          <li v-for="item in item.sList" :key="item.subtypeId"
              @click="$router.push('/shop/productcenter?systypeId='+item.systypeId+ '&subtypeId=' +item.subtypeId)">
            {{item.name}}
          </li>
        </ul>

        <!-- 商品列表 -->
        <ul class="f-list">
          <li v-for="item in item.gList" :key="item.goodsId" @click="goGoodsDetail(item.goodsId)">
            <img :src="item.imgUrl">
            <p class="productname">{{item.name}}</p>
            <p class="money">￥{{item.price}}</p>
          </li>
        </ul>

        <!-- 广告图 -->
        <div class="f-adcommon">
          <a :href="item.advUrl" target="_blank"><img :src="item.advImgUrl"></a>
        </div>

      </div>
    </div>
    <!-- 鼠标移除隐藏块 -->
    <div class="hiddenleft" @mouseover="eNavOut"></div>
    <!-- <div class="hiddenright" @mouseover="eNavOut"></div> -->
  </div>

</template>

<script>
import {
  bannerList,
  advSalesBrand,
  recGoods,
  recToday,
  systypeList,
  subtypeList
} from '@/config/api';

import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'homePage',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // 轮播图
      swiperOption: {
        notNextTick: true,
        autoplay: 1000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: false,
        autoHeight: true,
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      },
      advertiseimg1: '',
      adurlimg1: '',
      showsubtypeList: false,
      systypeId: '',
      showStatus: '',
      data: {
        // 轮播图列表
        bannerList: [],
        // 今日推荐列表
        recToday: [],
        // 热门商品
        advSalesBrand: [],
        // 系统、分类、商品
        recGoods: [],
        advertiseList: [],
        systypeList: [],
        subtypeList: [],
        systypeIdList: []
      }
    };
  },

  methods: {
    // 系统类型列表
    getsystypeList() {
      systypeList({
        systypeId: 1
      }).then(res => {
        if (res.code === 0) {
          this.data.systypeList = res.data;
        }
      });
    },

    // 子类型列表
    eNavOver(systypeId, index) {
      this.data.systypeIdList = [];
      this.$set(this.data.systypeIdList, index, this.showStatus);
      this.showsubtypeList = true;
      this.getSubtypeList(systypeId);
    },

    eNavOut(systypeId, index) {
      this.data.systypeIdList = '';
      this.showsubtypeList = false;
    },

    // 获取子类型列表
    getSubtypeList(systypeId) {
      subtypeList({
        systypeId: systypeId
      }).then(res => {
        if (res.code === 0) {
          this.data.subtypeList = res.data;
        }
      });
    },

    // 首页轮播banner
    getbannerList() {
      bannerList().then(res => {
        if (res.code === 0) {
          this.data.bannerList = res.data;
        }
      });
    },

    // 热门品牌
    getAdvSalesBrandt() {
      advSalesBrand().then(res => {
        if (res.code === 0) {
          this.data.advSalesBrand = res.data;
        }
      });
    },

    // 系统、分类、商品
    getrecGoods() {
      recGoods().then(res => {
        if (res.code === 0) {
          // 添加class
          res.data.map((data, index) => {
            data.class = `floor${index + 1}`;
          });
          this.data.recGoods = res.data;
        }
      });
    },

    // 今日推荐
    getrecToday() {
      recToday().then(res => {
        if (res.code === 0) {
          this.data.recToday = res.data;
        }
      });
    },

    // 去商品列表 & 搜索参数
    goGoodsList(item, type, index) {
      item = {...item, type, index};
      window.open(`/nfzy-web/shop/productcenter?params=${JSON.stringify(item)}`);
    },

    // 去商品详情
    goGoodsDetail(id) {
      window.open(`/nfzy-web/shop/productdetail?goodsId=${id}`);
    }
  },

  created() {
    this.getbannerList();
    this.getAdvSalesBrandt();
    this.getrecGoods();
    this.getrecToday();
    this.getsystypeList();
  }
};
</script>

<style scoped lang="scss" type="text/scss">
  .contentwrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .f-list {
      width: 206px;
      background: #009dee;
      min-height: 380px;
      float: left;
      li {
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #fff;
        padding-left: 14px;
        cursor: pointer;
        i {
          display: inline-block;
          margin-right: 12px;
          vertical-align: top;
          width: 7px;
          height: 12px;
          background: url(img/home-arrow.png) center top no-repeat;
        }
      }
      li:hover + #c > #d {
        color: #0000ff;
      }
      .active {
        background: #fff;
        color: #009dee;
      }
    }
    .showList {
      position: absolute;
      left: 206px;
      min-height: 390px;
      z-index: 9;
      width: 366px;
      background: #fff;
      padding: 10px;
      overflow: hidden;
      li {
        float: left;
        padding: 10px 15px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
        &:hover {
          color: #009dee;
        }
      }
    }
    .f-banner {
      float: left;
      width: 762px;
      height: 365px;
      margin: 15px;
      overflow: hidden;
    }
    .f-recommend {
      min-height: 365px;
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
          min-height: 277px;
          li {
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            color: #666;
            cursor: pointer;
            &:hover {
              color: #009dee;
            }
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
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .f-brand {
        float: left;
        width: 910px;
        border-bottom: 1px solid #e6e6e6;
        li {
          position: relative;
          float: left;
          width: 182px;
          height: 152px;
          border-right: 1px solid #e6e6e6;
          border-top: 1px solid #e6e6e6;
          text-align: center;
          .shadow{
            position: absolute;
            display:none;
            width:100%;
            height:100%;
            background:rgba(0,0,0,.6);
            -webkit-transition: all .3s ease-in;
            transition: all .3s ease-in;
            cursor: pointer;
            p{
              padding:36px 0;
              font-size:18px;
              color:#fff;
              text-align:center;
            }
            button{
              display:block;
              width:90px;
              height:30px;
              border-radius:100px;
              margin:0 auto;
              background:#009dee;
              color:#fff;
              border:none;
              outline:none;
              cursor: pointer;
            }
          }
          &:hover{
            .shadow{
              display: block;
            }
          }
          img {
            width: 160px;
            height: 99px;
            margin-top:10px;
          }
          p {
            font-size: 14px;
            color: #666;
            padding-top: 15px;
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
          cursor: pointer;
        }
        li:first-child {
          height: 72px;
          line-height: 72px;
          font-size: 24px;
        }
      }
      .f-list {
        float: left;
        width: 862px;
        min-height: 502px;
        padding: 20px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        li {
          float: left;
          margin:0 17px;
          text-align: center;
          cursor: pointer;
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

  .f-adcommon {
    float: right;
    width: 210px;
    height: 502px;
    background: #eee;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .hiddenleft,
  .hiddenright {
    display: block;
  }

  .hiddenleft {
    position: absolute;
    top: 0;
    left: 0;
  }

  .hiddenright {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (max-width: 2000px) {
    .hiddenleft {
      width: 350px;
      height: 100%;
    }
    .hiddenright {
      width: 350px;
      height: 100%;
    }
  }

  @media screen and (max-width: 1800px) {
    .hiddenleft {
      width: 250px;
      height: 100%;
    }
    .hiddenright {
      width: 250px;
      height: 100%;
    }
  }

  @media screen and (max-width: 1700px) {
    .hiddenleft {
      width: 150px;
      height: 100%;
    }
    .hiddenright {
      width: 150px;
      height: 100%;
    }
  }

  @media screen and (max-width: 1400px) {
    .hiddenleft {
      width: 100px;
      height: 100%;
    }
    .hiddenright {
      width: 100px;
      height: 100%;
    }
  }
</style>

<style>
  /* 轮播图样式-- 被重置样式冲突 */
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
  }
  .swiper-slide {
    display: flex!important;
  }
</style>
