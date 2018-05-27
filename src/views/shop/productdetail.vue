<template>
  <div class="m-content">
    <div class="goodsdetil">
      <div class="goods-top">
        <div class="f-left">
          <div class="showbig"><img :src="bigImg"></div>
          <ul class="showsmall">
            <li v-for="item in data.coverList" @click="bigImg = item" :class="{'active':bigImg == item}">
              <img :src="item">
            </li>
          </ul>
        </div>

        <div class="f-right">
          <p class="tit">{{data.goodsDetailList.name}}</p>
          <div class="price">
            <span>价格</span>
            <span class="num">￥
              <em>{{price + pricePack}}</em>
            </span>
          </div>
          <div class="spec">
            <div style="overflow:hidden;">
              <span>规格</span>
              <ul v-if="data.goodsSpecList && data.goodsSpecList.length !== 0" class="goodsProperty">
                <li v-for="item in data.goodsSpecList" :class="{'active':goodsPropertyId==item.goodsPropertyId}" @click="selectSpec(item.goodsPropertyId,item.price,item.quantity)" :key="item.goodsPropertyId">
                  {{item.name}}
                </li>
              </ul>

              <ul v-else>
                <li style="text-align:left;padding-left:20px;">--</li>
              </ul>
            </div>

            <div>
              <span>包装</span>
              <ul v-if="data.goodsSpecListPack && data.goodsSpecListPack.length !== 0">
                <li v-for="item in data.goodsSpecListPack" :class="{'active':goodsPropertyPackId==item.goodsPropertyId}" @click="selectSpecPack(item.goodsPropertyId,item.price,item.quantity)" :key="item.goodsPropertyId">
                  {{item.name}}
                </li>
              </ul>

              <ul v-else>
                <li style="text-align:left;padding-left:20px;">--</li>
              </ul>
            </div>
          </div>

          <div class="numbox">
            <span>数量</span>
            <div class="dec" @click="decGoods" :class="{'gray':dectogray}">-</div>
            <input type="text" v-model="numGoods">
            <div class="add" @click="addGoods" :class="{'gray':addtogray}">+</div>
            <span class="stock">（库存：{{quantity}}）</span>
          </div>

          <ul class="btn">
            <li class="btn-buy" @click="goBuy">立即购买</li>
            <li class="btn-join" @click="addCartData">加入购物车</li>
          </ul>

        </div>
      </div>

      <div class="goods-bottom">
        <ul class="goods-nav">
          <li @click="showGoodslist=1" :class="{'activite':showGoodslist === 1}">商品详情</li>
          <li @click="showGoodslist=2" class="middle" :class="{'activite':showGoodslist === 2}">适用车型</li>
          <li @click="showGoodslist=3" :class="{'activite':showGoodslist === 3}">售后服务</li>
        </ul>

        <div class="goodsintro" v-show="showGoodslist === 1" v-html="detail">{{detail}}</div>

        <div class="match" v-show="showGoodslist === 2">
          <ul>
            <li v-for="item in data.carTypeList" :key="item.carTypeId">
              {{item.brand}} {{item.series}} {{item.year}} {{item.cartype}}
            </li>
          </ul>
        </div>

        <div class="service" v-show="showGoodslist === 3">{{afterSales}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import { goodsDetail, addCart, purchaseNow } from '@/config/api';

/* eslint-disable */
export default {
    data() {
        return {
            showGoodslist: 1,
            showErrotip: false,
            numGoods: 1,
            goodsPropertyId: "",
            goodsPropertyIdPack: "",
            price: 0,
            pricePack: 0,
            quantitySpec: "",
            quantityPack: "",
            detail: "",
            afterSales: "",
            bigImg: "",
            goodsPropertyPackId: "",
            goodsId: this.queryBom("goodsId"),
            orderId: "",
            quantity: 0,
            dectogray: true,
            addtogray: false,
            data: {
                goodsDetailList: [],
                goodsSpecList: [],
                goodsSpecListPack: [],
                propertyIds: [],
                carTypeList: [],
                coverList: []
            }
        };
    },

    created() {
        if (this.quantity == 1) {
            this.addtogray = true;
        }
        this.$cookies.set("goodsId", this.goodsId);
        this.goodsDetailData();
    },

    methods: {
        closeErrotip() {
            this.showErrotip = false;
        },

        // 获取购物车详情
        goodsDetailData() {
            goodsDetail({ goodsId: this.$route.query.goodsId }).then(res => {
                if (res.code === 0) {
                    this.data.goodsDetailList = res.data;
                    if (
                        res.data.propertyInfo &&
                        res.data.propertyInfo.length !== 0
                    ) {
                        if (res.data.propertyInfo.length === 1) {
                            if (
                                res.data.propertyInfo[0].propertyName === "规格"
                            ) {
                                this.goodsPropertyId =
                                    res.data.propertyInfo[0].pList[0].goodsPropertyId;
                                this.data.goodsSpecList =
                                    res.data.propertyInfo[0].pList;
                                this.price =
                                    res.data.propertyInfo[0].pList[0].price;
                                this.quantity =
                                    res.data.propertyInfo[0].pList[0].quantity;
                                this.$cookies.set(
                                    "propertyIdsSpec",
                                    res.data.propertyInfo[0].pList[0]
                                        .goodsPropertyId
                                );
                            } else if (
                                res.data.propertyInfo[0].propertyName === "包装"
                            ) {
                                this.goodsPropertyPackId =
                                    res.data.propertyInfo[1].pList[0].goodsPropertyId;
                                this.data.goodsSpecListPack =
                                    res.data.propertyInfo[1].pList;
                                this.pricePack =
                                    res.data.propertyInfo[1].pList[0].price;
                                this.quantity =
                                    res.data.propertyInfo[1].pList[0].quantity;
                                res.data.propertyInfo[1].pList[0].quantity;
                                this.$cookies.set(
                                    "propertyIdsPack",
                                    res.data.propertyInfo[1].pList[0]
                                        .goodsPropertyId
                                );
                            }
                        } else {
                            this.data.goodsSpecList =
                                res.data.propertyInfo[0].pList;
                            this.data.goodsSpecListPack =
                                res.data.propertyInfo[1].pList;
                            this.goodsPropertyId =
                                res.data.propertyInfo[0].pList[0].goodsPropertyId;
                            this.goodsPropertyPackId =
                                res.data.propertyInfo[1].pList[0].goodsPropertyId;
                            this.price =
                                res.data.propertyInfo[0].pList[0].price;
                            this.pricePack =
                                res.data.propertyInfo[1].pList[0].price;
                            var quantitySpec =
                                res.data.propertyInfo[0].pList[0].quantity;
                            var quantityPack =
                                res.data.propertyInfo[1].pList[0].quantity;

                            if (quantitySpec <= quantityPack) {
                                this.quantity = quantitySpec;
                            } else {
                                this.quantity = quantityPack;
                            }

                            this.$cookies.set(
                                "propertyIdsSpec",
                                res.data.propertyInfo[0].pList[0]
                                    .goodsPropertyId
                            );
                            this.$cookies.set(
                                "propertyIdsPack",
                                res.data.propertyInfo[1].pList[0]
                                    .goodsPropertyId
                            );
                        }
                    } else {
                        this.$cookies.set("propertyIdsSpec", "");
                        this.$cookies.set("propertyIdsPack", "");
                    }

                    this.detail = res.data.detail;
                    this.afterSales = res.data.afterSales;
                    this.data.carTypeList = res.data.carTypeList;
                    this.data.coverList = res.data.coverList;
                    this.bigImg = res.data.coverList[0];
                    this.$cookies.set("goodsName", res.data.name);
                }
            });
        },

        decGoods() {
            this.numGoods--;
        },

        addGoods() {
            this.numGoods++;
        },

        selectSpec(goodsPropertyId, price, quantity) {
            this.goodsPropertyId = goodsPropertyId;
            this.price = price;
            this.quantity = quantity;
            this.$cookies.set("propertyIdsSpec", goodsPropertyId);
        },

        selectSpecPack(goodsPropertyId, price, quantity) {
            this.goodsPropertyPackId = goodsPropertyId;
            this.pricePack = price;
            this.quantity = quantity;
            this.$cookies.set("propertyIdsPack", goodsPropertyId);
        },

        // 加入购物车
        addCartData() {
            // 登录验证
            if (this.$store.state.userInfo === false)
                return this.$router.push("/user/login");
            let propertyIds =
                this.$cookies.set("propertyIdsSpec") +
                    "," +
                    this.$cookies.set("propertyIdsPack") || "";
            if (this.quantity == 0) {
                alert("库存不足");
            } else {
                addCart({
                    goodsId: this.queryBom("goodsId"),
                    propertyIds: propertyIds,
                    quantity: this.numGoods
                }).then(res => {
                    if (res.code === 0) {
                        this.$router.push("cart");
                    }
                });
            }
        },

        // 立即购买--purchaseNow
        goBuy() {
            // 登录验证
            if (this.$store.state.userInfo === false)
                return this.$router.push("/user/login");
            let propertyIds =
                this.$cookies.set("propertyIdsSpec") +
                    "," +
                    this.$cookies.set("propertyIdsPack") || "";
            if (this.quantity == 0) {
                alert("库存不足");
            } else {
                purchaseNow({
                    goodsId: this.queryBom("goodsId"),
                    propertyIds: propertyIds,
                    quantity: this.numGoods
                }).then(res => {
                    if (res.code === 0) {
                        this.orderId = res.data.orderId;

                        // 本地测试 ip + 路由路径 请自行更换
                        // window.open(`http://192.168.1.173/nfzy-admin/inquiryManager/bill?orderId=${res.data.orderId}`);

                        // 跳转结算 后端约定域名
                        window.open(
                            `${res.data.url}?orderId=${res.data.orderId}`
                        );
                    }
                });
            }
        },

        queryBom(n) {
            let m = window.location.search.match(
                new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)")
            );
            return !m ? "" : decodeURIComponent(m[2]);
        }
    },

    computed: {
        testReg: function() {
            return /^[0-9\.\-]*$/;
        }
    },

    watch: {
        numGoods(m, n) {
            this.dectogray = false;
            this.addtogray = false;
            if (
                !this.testReg.test(this.numGoods) ||
                this.numGoods < 0 ||
                this.numGoods > this.quantity
            ) {
                this.numGoods = n;
            } else if (this.numGoods == 0) {
                this.numGoods = 1;
            }
            this.$cookies.set("numGoods", this.numGoods);
            if (this.numGoods == 1) {
                this.dectogray = true;
            } else if (this.numGoods == this.quantity) {
                this.addtogray = true;
            }
        }
        /* eslint-enable */
  },

  components: {}
};
</script>

<style scoped lang="scss" type="text/scss">
.m-content {
    width: 1200px;
    margin: 0 auto;
    .goodsdetil {
        margin-top: 50px;
        border: 1px solid #fbfbfb;
        .goods-top {
            overflow: hidden;
            .f-left {
                float: left;
                width: 380px;
                .showbig {
                    width: 380px;
                    height: 380px;
                    border: 1px solid #fbfbfb;
                    // border: 1px solid red;
                    text-align: center;
                    &:after {
                        content: "";
                        display: inline-block;
                        height: 100%;
                        vertical-align: middle;
                    }
                    img {
                        width: 380px;
                        height: 380px;
                        vertical-align: middle;
                    }
                }
                .showsmall {
                    overflow: hidden;
                    margin-top: 54px;
                    li {
                        float: left;
                        width: 77px;
                        height: 82px;
                        border: 1px solid #fbfbfb;
                        // border: 1px solid red;
                        margin-right: 20px;
                        cursor: pointer;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .active {
                        border: 1px solid #009dee;
                    }
                }
            }
            .f-right {
                float: left;
                width: 750px;
                padding: 16px 0 0 68px;
                position: relative;
                .erro-box {
                    position: absolute;
                    top: 104px;
                    left: 44px;
                    width: 416px;
                    height: 202px;
                    border: 1px solid #e60012;
                    background: #fff;
                    .close {
                        position: absolute;
                        top: 10px;
                        right: 16px;
                        width: 16px;
                        height: 16px;
                        background: url(../home/img/cart-close.png) center top
                            no-repeat;
                        cursor: pointer;
                    }
                    .select {
                        h4 {
                            height: 36px;
                            line-height: 36px;
                            background: #faf1f2;
                            font-size: 14px;
                            color: #666;
                            padding-left: 16px;
                        }
                        .spec {
                            margin-top: 30px;
                            margin-left: 16px;
                        }
                        .numbox {
                            margin-left: 16px;
                        }
                    }
                }
                .tit {
                    font-size: 20px;
                    color: #333;
                    padding-bottom: 50px;
                }
                .price {
                    font-size: 16px;
                    color: #666;
                    margin-bottom: 40px;
                    span {
                        display: inline-block;
                        vertical-align: top;
                        height: 36px;
                        line-height: 36px;
                        margin-right: 54px;
                    }
                    .num {
                        font-size: 16px;
                        color: #e60012;
                        clear: both;
                        overflow: hidden;
                        em {
                            font-size: 36px;
                        }
                    }
                }
                .spec {
                    font-size: 16px;
                    color: #666;
                    margin-bottom: 40px;
                    overflow: hidden;
                    span {
                        float: left;
                        display: inline-block;
                        vertical-align: top;
                        height: 36px;
                        line-height: 36px;
                        margin-right: 54px;
                    }
                    ul {
                        float: left;
                        li {
                            width: 124px;
                            height: 36px;
                            line-height: 36px;
                            float: left;
                            border: 1px solid #fbfbfb;
                            // border: 1px solid red;
                            font-size: 14px;
                            color: #666;
                            text-align: center;
                            margin-right: 24px;
                            cursor: pointer;
                        }
                        .active {
                            border: 1px solid #e60012;
                            color: #e60012;
                        }
                    }
                    .goodsProperty {
                        margin-bottom: 40px;
                    }
                }
                .numbox {
                    line-height: 32px;
                    font-size: 16px;
                    color: #333;
                    clear: both;
                    overflow: hidden;
                    span {
                        float: left;
                        margin-right: 54px;
                        font-size: 16px;
                        color: #666;
                    }
                    .dec {
                        width: 45px;
                        height: 32px;
                        line-height: 32px;
                        float: left;
                        text-align: center;
                        border: 1px solid #fbfbfb;
                        font-size: 25px;
                        // border: 1px solid red;
                        cursor: pointer;
                        .gray {
                            color: #666;
                        }
                    }
                    input {
                        width: 52px;
                        height: 32px;
                        float: left;
                        text-align: center;
                        border: 1px solid #fbfbfb;
                        // border: 1px solid red;
                        border-left: none;
                        border-right: none;
                    }
                    .add {
                        width: 45px;
                        height: 32px;
                        line-height: 32px;
                        float: left;
                        text-align: center;
                        font-size: 25px;
                        border: 1px solid #fbfbfb;
                        // border: 1px solid red;
                        cursor: pointer;
                    }
                    .gray {
                        color: #999;
                    }
                    .stock {
                        float: left;
                        font-size: 14px;
                    }
                }
                .btn {
                    clear: both;
                    overflow: hidden;
                    margin-top: 60px;
                    li {
                        float: left;
                        width: 224px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .btn-buy {
                        font-size: 16px;
                        color: #fff;
                        background: #009dee;
                        margin-right: 30px;
                    }
                    .btn-join {
                        width: 222px;
                        height: 48px;
                        color: #009dee;
                        border: 1px solid #009dee;
                    }
                }
            }
        }
        .goods-bottom {
            clear: both;
            overflow: hidden;
            margin-top: 50px;
            .goods-nav {
                overflow: hidden;
                li {
                    float: left;
                    width: 147px;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    border: 1px solid #fbfbfb;
                    // border: 1px solid red;
                    border-bottom: none;
                    font-size: 16px;
                    color: #666;
                    cursor: pointer;
                }
                .middle {
                    border-left: none;
                    border-right: none;
                }
                .activite {
                    background: #009dee;
                    color: #fff;
                }
            }
            .goodsintro,
            .match,
            .service {
                height: 500px;
                border: 1px solid #fbfbfb;
                // border: 1px solid red;
                padding: 20px;
                margin-bottom: 100px;
            }
            .match {
                padding: 0;
                li {
                    width: 25%;
                    height: 50px;
                    line-height: 50px;
                    float: left;
                    text-align: center;
                    border-bottom: 1px solid #fbfbfb;
                    border-right: 1px solid #fbfbfb;
                    // border-bottom: 1px solid red;
                    // border-right: 1px solid red;
                    &:nth-child(4n) {
                        border-right: none;
                    }
                }
            }
        }
    }
}
</style>
