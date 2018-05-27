<template>
  <div class="m-content">
    <div class="productwrap">
      <h4 class="tit">产品列表 》全部</h4>
      <div class="productlist">
        <div class="f-top">
          <!-- 选择车型 -->
          <div class="m-model">
            <ul>
              <li>
                <div class="f-left">汽车款型</div>
              </li>
              <li>
                <div class="f-right">
                  <ul class="cartit">
                    <li @click="selectCarType">选择汽车款型</li>
                  </ul>
                  <ul class="hasselected" v-show="showSelectCar">
                    <li v-show="showBrandName">{{brandName}}
                      <i @click="delBrandName"></i>
                    </li>
                    <li v-show="showSelectseries">{{seriesName}}
                      <i @click="delSelectseries"></i>
                    </li>
                    <li v-show="showSelectYear">{{yearName}}
                      <i @click="delSelectYear"></i>
                    </li>
                    <li v-show="showSelectCarType">{{carTypeName}}
                      <i @click="delSelectCarType"></i>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <!-- 配件分类 -->
          <div class="m-parts">
            <div class="f-left">配件分类</div>
            <div class="f-right">
              <!-- 系统列表列表 -->
              <ul>
                <li class="secline" v-for="(item, index) in data.sysTypeList"
                    :class="{'cf_bo': state.sysTypeIndex === index}" @click="selectType(item, 'sys', index)">
                  {{item.name}}
                </li>
              </ul>

              <!-- 子类系统列表 -->
              <ul class="lastchild">
                <li v-for="(item, index) in data.subTypeList" :class="{'co': state.subTypeIndex === index}"
                    @click="selectType(item, 'sub', index)">{{item.name}}
                </li>
              </ul>
            </div>
          </div>

          <!-- 销售品牌 -->
          <div class="m-brand">
            <ul>
              <li>
                <div class="f-left">销售品牌</div>
              </li>
              <li>
                <div class="f-right">
                  <ul>
                    <li v-for="(item, index) in data.brandList" :class="{'co': state.brandIndex === index}"
                        :key="item.brandId" @click="selectType(item, 'brand', index)">{{item.name}}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="f-bottom">
          <!-- 搜索匹配 -->
          <div class="tit">
            <span>默认</span>
            <span class="price" @click="baseSort = !baseSort">价格
              <i class="arrow-top" :class="{'arrow-bottom': !baseSort }"></i>
            </span>
            <span class="result">找到约{{data.goods.totalCount || 0}}条匹配结果</span>
          </div>

          <!-- 商品列表 -->
          <div class="productdetail">
            <ul class="pro-list" v-for="item in data.goods.list" :key="item.goodId">
              <!-- 商品图片 -->
              <li><img :src="item.imgUrl" style="background: #ccc;"></li>

              <!-- 商品内容 -->
              <li class="pro-detail">
                <p>{{item.name}}</p>
                <p>{{item.property}}</p>
                <p>商品编码：{{item.productCode}}</p>
              </li>

              <li class="pro-price">
                <p>会员价：
                  <i>￥{{item.price}}</i>
                </p>
              </li>

              <li class="pro-buy">
                <button @click="$router.push('productdetail?goodsId='+item.goodsId)">去购买</button>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <!-- 翻页 -->
      <div class="page">
        <span>共{{data.goods.totalCount}}条记录</span>
        <span>{{data.goods.totalPage}}页</span>

        <ul class="pagelist">
          <li>首页</li>
          <li>上一页</li>
          <li>下一页</li>
          <li>尾页</li>
        </ul>

        <div class="pagenum">
          <span>第</span>
          <div class="select-page">{{pageNum}}</div>
          <span>页</span>
        </div>

        <ul class="select-list">
          <li @click="pageNum=1">1</li>
          <li @click="pageNum=2">2</li>
          <li @click="pageNum=3">3</li>
        </ul>

      </div>
    </div>

    <div class="mask" v-show="showMask"></div>

    <div class="brandmask" v-show="showBrandmask">
      <div class="close" @click="closeSelect()"></div>
      <h4>请选择您要找的汽车车型</h4>
      <ul class="nav">
        <li @click="getBrand()" :class="{'active':showTab==1}">1.选择品牌</li>
        <li @click="showTab=2" :class="{'active':showTab==2}">2.选择车系</li>
        <li @click="showTab=3" :class="{'active':showTab==3}">3.选择年份</li>
        <li @click="showTab=4" :class="{'active':showTab==4}">4.选择车型</li>
      </ul>
      <div class="select-top" v-show="showSelectCar">
        <span>已选车型</span>
        <ul class="hasselected" v-show="showSelectCar">
          <li v-show="showBrandName">{{brandName}}
            <i @click="delBrandName"></i>
          </li>
          <li v-show="showSelectseries">{{seriesName}}
            <i @click="delSelectseries"></i>
          </li>
          <li v-show="showSelectYear">{{yearName}}
            <i @click="delSelectYear"></i>
          </li>
          <li v-show="showSelectCarType">{{carTypeName}}
            <i @click="delSelectCarType"></i>
          </li>
        </ul>
      </div>
      <div class="select-list select-list1" v-show="showTab === 1">
        <ul>
          <li @click="getBrand()">热门</li>
          <li v-for="(item, index) in data.brandShortCut" @click="selectShortCut(item.ShortCutId, index)"
              :key="item.ShortCutId" :class="{'active': shortCut == item.ShortCutId}">
            {{item.ShortCutId}}
          </li>
        </ul>
        <ul v-if="showBrandHot" class="brand-list">
          <li v-for="item in data.shortCutbrandList" @click="selectBrand(item.salesBrandId,item.name)"
              :key="item.salesBrandId" :class="{'active': form.brandId == item.salesBrandId}">
            <div class="imgbox">
              <img :src="item.imgUrl">
            </div>
            <div class="brandname">
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
        <ul v-else class="brand-list">
          <li v-for="item in data.shortCutbrandList" @click="selectBrand(item.brandId,item.name)" :key="item.brandId"
              :class="{'active': form.brandId == item.brandId}">
            <div class="imgbox">
              <img :src="item.picUrl">
            </div>
            <div class="brandname">
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="select-list select-list2" v-show="showTab === 2">
        <div class="series">
          <!-- <div class="tit">
							<i></i>
							<span>东风标致</span>
					</div> -->
          <ul>
            <li v-for="item in data.seriesList" @click="selectSeries(item.seriesId,item.name)" :key="item.seriesId"
                :class="{'active': form.seriesId == item.seriesId}">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>

      <div class="select-list select-list3" v-show="showTab === 3">
        <ul>
          <li v-for="item in data.yearList" @click="selectYear(item.id,item.year)" :key="item.id"
              :class="{'active': form.year == item.id}">
            {{item.year}}
          </li>
        </ul>
      </div>

      <div class="select-list select-list4" v-show="showTab === 4">
        <ul>
          <li v-for="item in data.CartypeList" @click="getCarTypeIdData(item.cartypeId,item.name)" :key="item.artypeId">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {
  systypeList,
  subtypeList,
  goodsList,
  advSalesBrand,
  brandShortcut,
  getSeries,
  getYears,
  getCartypeList,
  getCarTypeId
} from '@/config/api';

export default {
  data() {
    return {
      showTab: 1,
      showMask: false,
      showBrandmask: false,
      baseSort: true,
      pageNum: '',
      showSelectCar: false,
      showSelectseries: false,
      showBrandName: false,
      showSelectYear: false,
      showSelectCarType: false,
      shortCut: '',
      brandName: '',
      seriesName: '',
      yearName: '',
      carTypeName: '',
      seriesId: '',
      showBrandHot: true,
      data: {
        sysTypeList: [],
        subTypeList: [],
        brandList: [],
        goods: {},
        shortCutbrandList: [],
        brandShortCut: [
          {ShortCutId: 'A'},
          {ShortCutId: 'B'},
          {ShortCutId: 'C'},
          {ShortCutId: 'D'},
          {ShortCutId: 'E'},
          {ShortCutId: 'F'},
          {ShortCutId: 'G'},
          {ShortCutId: 'H'},
          {ShortCutId: 'I'},
          {ShortCutId: 'J'},
          {ShortCutId: 'K'},
          {ShortCutId: 'L'},
          {ShortCutId: 'M'},
          {ShortCutId: 'N'},
          {ShortCutId: 'O'},
          {ShortCutId: 'P'},
          {ShortCutId: 'Q'},
          {ShortCutId: 'R'},
          {ShortCutId: 'S'},
          {ShortCutId: 'T'},
          {ShortCutId: 'U'},
          {ShortCutId: 'V'},
          {ShortCutId: 'W'},
          {ShortCutId: 'X'},
          {ShortCutId: 'Y'},
          {ShortCutId: 'Z'}
        ],
        SeriesList: [],
        yearList: []
      },

      state: {
        sysTypeIndex: 0,
        subTypeIndex: 0,
        brandIndex: 0,
        routerState: false
      },

      form: {
        name: '',
        brandId: 0,
        seriesId: '',
        year: '',
        cartypeId: '',
        systypeId: '',
        subtypeId: '',
        priceOrder: '',
        page: 1
      }
    };
  },

  methods: {
    // 获取系统类别列表
    getSysTypeList() {
      systypeList().then(res => {
        if (res.code === 0) {
          this.data.sysTypeList = res.data;

          // 如果路由URL没有参数
          if (this.state.routerState === false) {
            // 默认选择第一个系统ID
            this.form.systypeId = res.data[0].systypeId;
            // 默认第一次获取子类型
            this.getSubTypeList(this.form.systypeId);
          }
        }
      });
    },

    // 获取子类型列表
    getSubTypeList(id) {
      subtypeList({
        systypeId: id || this.form.systypeId
      }).then(res => {
        if (res.code === 0) {
          res.data.unshift({
            name: '全部',
            subtypeId: 0,
            systypeId: id || this.form.systypeId
          });

          this.data.subTypeList = res.data;

          // 默认选择第一个子类系统ID(没有URL参数的时候)
          if (this.state.routerState === false) this.form.subtypeId = res.data[0].subtypeId;
          // 有ID就重新获取列表
          if (id) this.getGoodsList();
        }
      });
    },

    // 获取品牌列表
    getBrand(type) {
      advSalesBrand().then(res => {
        if (res.code === 0) {
          res.data.brandList.unshift({
            name: '全部',
            salesBrandId: 0
          });
          this.data.brandList = res.data.brandList;
          // 未选择品牌按热门排序
          this.data.shortCutbrandList = res.data.brandList;
          this.showBrandHot = true;
          this.showTab = 1;
        }
      });
    },

    // 选择类别筛选
    selectType(item, type, index) {
      switch (type) {
        // 系统类别
        case 'sys':
          this.state.sysTypeIndex = index;
          this.state.subTypeIndex = 0;
          this.form.systypeId = item.systypeId;
          this.getSubTypeList(item.systypeId);
          break;
          // 子类类别
        case 'sub':
          this.state.subTypeIndex = index;
          this.form.subtypeId = item.subtypeId;
          // 重新获取列表
          this.getGoodsList();
          break;
          // 品牌
        case 'brand':
          this.state.brandIndex = index;
          this.form.brandId = item.salesBrandId;
          this.getGoodsList();
          break;
      }
      console.log(type);
    },

    // 获取商品列表
    getGoodsList() {
      goodsList({
        name: this.form.name,
        brandId: this.form.brandId,
        seriesId: this.form.seriesId,
        year: this.form.year,
        cartypeId: this.form.cartypeId,
        systypeId: this.form.systypeId,
        subtypeId: this.form.subtypeId,
        priceOrder: this.form.priceOrder,
        page: this.form.page
      }).then(res => {
        if (res.code === 0) {
          this.data.goods = res.data;
        }
      });
    },

    // 获取路由搜索参数
    getRouteParams() {
      this.form = {...this.form, ...JSON.parse(this.$route.query.params)};
      this.selectType(this.form, this.form.type, this.form.index);
      console.log(this.form);
    },

    // 按缩写获取品牌数据
    selectShortCut(shortCut, index) {
      brandShortcut({
        shortCut: shortCut
      }).then(res => {
        if (res.code === 0) {
          this.shortCut = shortCut;
          this.data.shortCutbrandList = res.data;
          this.showBrandHot = false;
        }
      });
    },

    // 获取车系数据 -- 用户选中品牌
    selectBrand(brandId, brandName) {
      getSeries({
        brandId: brandId
      }).then(res => {
        if (res.code === 0) {
          this.form.brandId = brandId;
          this.brandName = brandName;
          this.showTab = 2;
          this.showSelectCar = true;
          this.showBrandName = true;
          this.data.seriesList = res.data;
        }
      });
    },

    // 获取年份数据 -- 用户选中车系
    selectSeries(seriesId, seriesName) {
      getYears({
        seriesId: seriesId
      }).then(res => {
        if (res.code === 0) {
          this.form.seriesId = seriesId;
          this.seriesName = seriesName;
          this.showSelectseries = true;
          this.showTab = 3;
          this.data.yearList = res.data;
        }
      });
    },

    // 获取车型数据 -- 用户选中年份
    selectYear(yearId, year) {
      getCartypeList({
        brandId: this.form.brandId,
        seriesId: this.form.seriesId,
        year: year
      }).then(res => {
        if (res.code === 0) {
          this.form.year = year;
          this.yearName = year;
          this.showSelectYear = true;
          this.showTab = 4;
          this.data.CartypeList = res.data;
        }
      });
    },

    // 根据所选车型信息获取 -- 用户选中车型
    getCarTypeIdData(cartypeId, carTypeName) {
      getCarTypeId({
        brandId: this.form.brandId,
        seriesId: this.form.seriesId,
        year: this.form.year,
        cartypeId: cartypeId
      }).then(res => {
        if (res.code === 0) {
          this.form.cartypeId = cartypeId;
          this.carTypeName = carTypeName;
          this.showSelectCarType = true;
          this.data.getCarTypeId = res.data;
        }
      });
    },

    // 去商品详情
    goGoodsDetail(id) {
      // this.$router.push('/')
    },

    // 删除选中品牌
    delBrandName() {
      this.showBrandName = false;
    },

    // 删除选中车系
    delSelectseries() {
      this.showSelectseries = false;
    },

    // 删除选中年份
    delSelectYear() {
      this.showSelectYear = false;
    },

    // 删除选中车型
    delSelectCarType() {
      this.showSelectCarType = false;
    },

    closeSelect() {
      this.showTab = 0;
      this.showMask = false;
      this.showBrandmask = false;
      this.getGoodsList();
    },

    selectCarType() {
      this.showMask = true;
      this.showBrandmask = true;
    }
  },

  created() {
    this.getSysTypeList();
    this.getBrand();

    if (this.$route.query.params) {
      this.state.routerState = true;
      this.getRouteParams();
    }
  }
};
</script>
<style lang='scss' type="text/scss" scoped>
  .productwrap {
    width: 1200px;
    margin: 0 auto;
    .tit {
      font-size: 14px;
      color: #999;
      padding: 32px 0 18px;
    }
    .productlist {
      margin-bottom: 74px;
      .f-top {
        border: 1px solid #e6e6e6;
        .m-model,
        .m-parts,
        .m-brand {
          overflow: hidden;
          border-top: 1px solid #e6e6e6;
          background: #f2f2f2;
          ul{
            overflow: hidden;
            li {
            cursor: pointer;
          }
          }      
          .f-left {
            float: left;
            width: 110px;
            font-size: 16px;
            color: #666;
            text-align: center;
            padding-top: 32px;
          }
          .f-right {
            float: left;
            width: 1088px;
            background: #fff;
          }
        }
        .m-model {
          border-top: none;
          .f-right {
            background: #fff;
            .cartit {
              float: left;
              margin: 20px;
              width: 104px;
              height: 40px;
              line-height: 40px;
              background: #009dee;
              font-size: 14px;
              color: #fff;
              text-align: center;
            }
            .hasselected {
              li {
                float: left;
                height: 38px;
                line-height: 38px;
                border: 1px solid #009dee;
                font-size: 14px;
                color: #009dee;
                text-align: center;
                position: relative;
                margin: 15px 48px 15px 0;
                text-align: left;
                padding-left: 12px;
                padding-right: 34px;
                background: #FFF;
                &:first-child {
                  background: #FFF;
                }
                i {
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  background: url(../home/img/p-close.png) center top no-repeat;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .m-parts {
          .f-right {
            ul {
              overflow: hidden;
              li {
                float: left;
                font-size: 14px;
              }
            }
            ul:first-child {
              li {
                padding: 10px;
                border: 1px solid #ff9d1c;
                margin: 24px 36px 12px 0;
              }
              li:first-child {
                margin-left: 20px;
              }
              .secline {
                margin: 20px 36px 20px 0;
              }
              .f-secline {
                margin: 12px 36px 35px 20px;
              }
            }
            ul.lastchild {
              padding-left: 20px;
              li {
                font-size: 14px;
                color: #666;
                padding-bottom: 20px;
                padding-right: 24px;
              }
            }
          }
        }
        .m-brand {
          .f-right {
            background: #fff;
            padding:16px 0;
            li {
              float: left;
              padding: 10px 20px;
              font-size: 14px;
              color: #666;
            }
          }
        }
      }
      .f-bottom {
        overflow: hidden;
        margin-top: 20px;
        .tit {
          width: 100%;
          font-size: 14px;
          color: #009dee;
          overflow: hidden;
          background: #f2f2f2;
          border: 1px solid #e6e6e6;
          padding: 6px 0;
          span {
            display: inline-block;
            vertical-align: top;
            font-size: 14px;
            cursor: pointer;
          }
          span:first-child {
            padding: 5px 20px 0 20px;
          }
          .result {
            float: right;
            color: #333;
            padding-top: 5px;
            padding-right: 20px;
            cursor: default;
          }
          .price {
            padding: 4px;
            background: #009dee;
            color: #fff;
            cursor: pointer;
            i {
              display: inline-block;
              width: 10px;
              height: 12px;
            }
            .arrow-top {
              background: url(../home/img/p-arrow-top.png);
            }
            .arrow-bottom {
              background: url(../home/img/p-arrow-bottom.png);
            }
          }
        }
        .productdetail {
          overflow: hidden;
          ul {
            overflow: hidden;
            padding-bottom: 12px;
            li {
              float: left;
              font-size: 14px;
              color: #666;
              padding-right: 34px;
            }
            li:first-child {
              img {
                width: 100px;
                height: 100px;
              }
            }
            li.pro-detail {
              width: 710px;
              font-size: 14px;
              color: #666;
              padding-bottom: 16px;
              p {
                font-size: 16px;
                color: #333;
              }
              p:first-child {
                padding-bottom: 16px;
              }
            }
            li.pro-price {
              padding-top: 45px;
              i {
                color: #e60012;
              }
            }
            li.pro-buy {
              float: right;
              padding-right: 0;
              button {
                display: inline-block;
                width: 98px;
                height: 28px;
                border: 1px solid #009dee;
                background: #009dee;
                font-size: 16px;
                color: #fff;
                margin-top: 38px;
                cursor: pointer;
              }
            }
          }
          ul.pro-list {
            padding: 20px;
            border-bottom: 1px solid #e6e6e6;
          }
        }
      }
    }
    .page {
      display: none;
      position: relative;
      text-align: center;
      font-size: 14px;
      color: #666;
      margin-bottom: 50px;
      span {
        vertical-align: top;
        margin-top: 13px;
        display: inline-block;
      }
      span:first-child {
        padding-right: 12px;
      }
      ul.pagelist {
        display: inline-block;
        li {
          float: left;
          width: 82px;
          height: 38px;
          line-height: 38px;
          background: #e5e5e5;
          text-align: center;
          margin-right: 26px;
          cursor: pointer;
        }
        li:first-child {
          margin-left: 50px;
        }
      }
      .pagenum {
        position: relative;
        display: inline-block;
        height: 38px;
        line-height: 38px;
        vertical-align: top;
        .select-page {
          display: inline-block;
          width: 90px;
          height: 40px;
          border: 1px solid #666;
          text-align: center;
        }
        span:first-child {
          padding-right: 0;
        }
        span {
          margin-top: 0;
        }
      }
      .select-list {
        position: absolute;
        top: 39px;
        right: 255px;
        border: 1px solid #666;
        width: 90px;
        li {
          width: 90px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-top: 1px solid #666;
          cursor: pointer;
        }
        li:first-child {
          border-top: none;
        }
      }
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 2;
  }

  .brandmask {
    width: 1360px;
    height: 568px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -260px;
    margin-left: -680px;
    z-index: 3;
    h4 {
      font-size: 16px;
      color: #666;
      padding: 42px 0 64px;
      text-align: center;
    }
    ul {
      width: 1238px;
      margin: 0 auto;
      overflow: hidden;
      li {
        float: left;
      }
    }
    ul.nav {
      li {
        float: left;
        width: 178px;
        height: 42px;
        line-height: 42px;
        border: 1px solid #e6e6e6;
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-right: 50px;
        margin-bottom: 38px;
        cursor: pointer;
      }
      .active {
        border: 1px solid #009dee;
      }
    }
    .select-top {
      width: 1238px;
      height: 68px;
      margin: 0 auto;
      border: 1px solid #e6e6e6;
      span {
        float: left;
        padding: 27px 15px;
        font-size: 16px;
        color: #666;
      }
      .hasselected {
        width: 1120px;
        float: left;
        li {
          float: left;
          height: 38px;
          line-height: 38px;
          border: 1px solid #009dee;
          font-size: 14px;
          color: #009dee;
          text-align: center;
          position: relative;
          margin: 15px 48px 15px 0;
          text-align: left;
          padding-left: 12px;
          padding-right: 34px;
          i {
            position: absolute;
            top: 10px;
            right: 10px;
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url(../home/img/p-close.png) center top no-repeat;
            cursor: pointer;
          }
        }
      }
    }
    .select-list {
      width: 1238px;
      margin: 0 auto;
      li {
        cursor: pointer;
      }
    }
    .select-list1 {
      border: 1px solid #e6e6e6;
      ul:first-child {
        overflow: hidden;
        background: #eff5f9;
        li {
          float: left;
          padding: 20px 15px;
          font-size: 16px;
          color: #666;
          cursor: pointer;
        }
        li:first-child {
          padding: 20px;
          background: #009dee;
          margin-right: 35px;
          color: #fff;
        }
        .active {
          color: #009dee;
        }
      }
      .brand-list {
        overflow-y: scroll;
        height: 200px;
        padding-bottom: 20px;
        li {
          float: left;
          width: 180px;
          height: 50px;
          line-height: 50px;
          border: 1px solid #e6e6e6;
          margin: 34px 0 0 20px;
          font-size: 12px;
          color: #666;
          .imgbox {
            width: 80px;
            height: 48px;
            float: left;
            text-align: center;
          }
          img {
            height: 100%;
          }
          .brandname {
            width: 98px;
            float: left;
            height: 48px;
            p {
              text-align: left;
              line-height: 15px;
              vertical-align: middle;
              display: inline-block;
            }
          }
        }
        .active {
          color: #009dee;
        }
      }
    }
    .select-list2 {
      border: 1px solid #e6e6e6;
      border-top: none;
      .tit {
        width: 100%;
        overflow: hidden;
      }
      i {
        display: inline-block;
        width: 4px;
        height: 20px;
        background: #009dee;
        vertical-align: top;
        margin: 30px 8px 20px 20px;
      }
      span {
        display: inline-block;
        font-size: 16px;
        color: #666;
        margin-top: 32px;
      }
      ul {
        li {
          width: 106px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #666;
          border: 1px solid #e6e6e6;
          text-align: center;
          margin: 20px;
        }
        .active {
          color: #009dee;
        }
        li:first-child {
          margin-left: 16px;
        }
      }
    }
    .select-list4 {
      ul {
        width: 1238px;
        margin: 20px 14px;
        height: 230px;
        overflow-y: scroll;
        margin: 0 auto;
        border: 1px solid #e6e6e6;
        border-top: none;
        li {
          width: 288px;
          height: 38px;
          line-height: 38px;
          margin: 11px 6px;
          text-align: center;
          font-size: 14px;
          color: #666;
          border: 1px solid #c6c6c6;
        }
        .active {
          color: #009dee;
          border: 1px solid #009dee;
        }
      }
    }
    .select-list3 {
      ul {
        width: 1238px;
        height: 266px;
        margin: 0 auto;
        border: 1px solid #e6e6e6;
        padding-top: 20px;
        border-top: none;
        li {
          margin: 10px 24px;
          width: 106px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          color: #666;
          border: 1px solid #c6c6c6;
        }
        .active {
          color: #009dee;
          border: 1px solid #009dee;
        }
      }
    }
    .close {
      position: absolute;
      top: 19px;
      right: 19px;
      width: 20px;
      height: 20px;
      background: url(../home/img/p-close.png) center top no-repeat;
      cursor: pointer;
    }
  }
</style>
