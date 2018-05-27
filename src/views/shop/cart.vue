<template>
  <div class="m-content">
    <div class="goodstit">
      <div class="f-left">
        全部产品
        <i>{{data.num}}</i>
      </div>
      <div class="f-right">
        <span>已选商品（不含运费）</span>
        <span class="price">{{totalMoney}}</span>
        <button @click="TocartSettle">结算</button>
      </div>
    </div>
    <div class="goodslist">
      <ul class="listtit">
        <li>
          <i @click="selectAll" :class="{'selected':isClick}"></i>全选
        </li>
        <li class="detail">商品信息</li>
        <li class="price">单价</li>
        <li class="num">数量</li>
        <li class="totalprice">金额</li>
        <li class="del">操作</li>
      </ul>
      <div class="listdetail">

        <ul v-for="(item,index) in data.cartList" :key="item.cartId" :class="{'selected':isClickChild[index]}">
          <li>
            <i class="selectbox" @click="select(item.cartId,index)" :class="{'selected':isClickChild[index]}"></i>
          </li>
          <li class="detail">
            <img src="../home/img/zy-logo-s.png">
            <div class="f-intro">
              <h4>{{item.name}}</h4>
              <p class="secchild">
                <span>品牌：{{item.salesBrand}}</span>
                <span>商品编码：{{item.productCode}}</span>
              </p>
              <p>
                <span>配件编码：{{item.code}}</span>
                <span>{{item.propertyDesc}}</span>
              </p>
            </div>
          </li>
          <li class="price">
            ￥{{item.price}}
          </li>
          <li class="num">
            <div class="select">
              <div class="dec" @click="decGoods(item.cartId,item.stock,item.price,index)">-</div>
              <input type="text" v-model="numGoods[index]" v-on:input="inputFunc(item.cartId,index,item.stock)">
              <div class="add" @click="addGoods(item.cartId,item.stock,item.price,index)">+</div>
            </div>
            <div class="tip">
              限购{{item.stock}}件
            </div>
          </li>
          <li class="totalprice">
            ￥{{numGoods[index]*item.price}}
          </li>
          <li class="del">
            <button @click="cartDeleteDataOne(item.cartId)">删除</button>
          </li>
        </ul>
      </div>
      <div class="settlement">
        <div class="f-left">
          <i @click="selectAll" :class="{'selected':isClick}"></i>
          <span class="selectall">全选</span>
          <!-- <span class="del" @click="TocartDeleteData">删除</span> -->
        </div>
        <div class="f-right">
          <span>已选商品 0 件</span>
          <span class="totalprice">合计（不含运费）：<i>{{totalMoney}}</i></span>
          <button @click="TocartSettle">结算</button>
        </div>
      </div>
    </div>

    <!-- 删除弹窗-->
    <div class="mask" v-show="showMask"></div>
    <div class="delbox" v-show="showDelbox">
      <div class="close" @click="closeAlert"></div>
      <div class="tip">
        <i>!</i>
        <span>提示信息</span>
      </div>
      <p>请选择宝贝</p>
    </div>
    <div class="delbox suredelbox" v-show="showsuredelbox">
      <div class="close" @click="closeAlert"></div>
      <div class="tip">删除宝贝</div>
      <p>确认要删除这些宝贝吗？</p>
      <ul>
        <li @click="sureDeleteData">确定</li>
        <li @click="closeAlert">关闭</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  // cartList,
  cartDelete,
  getCartSum,
  setCartNum,
  changeCartNum,
  cartSettle
} from '@/config/api';

export default {
  data() {
    return {
      isClick: true,
      isClickChild: [],
      totalNum: 0,
      quantity: 0,
      stock: 0,
      price: 0,
      showMask: false,
      showDelbox: false,
      showsuredelbox: false,
      cartId: '',
      test: 0,
      totalMoney: 0,
      cartIdList: [],
      numGoods: [],
      data: {
        cartList: [],
        num: 0
      },
      arry: [],
      newcartIdList: []
    };
  },

  computed: {},

  created() {
    this.getcartList();
  },

  /* eslint-disable */
    methods: {
      // 购物车列表
      getcartList() {
        this.$store.dispatch('ACTION_CART_INFO', true).then(res => {
          this.data = res;
          res.cartList.map(item => {
            this.numGoods.push(item.quantity);
            this.cartIdList.push(item.cartId);
            this.arry.push(1);
            this.isClickChild.push(true);
          });

          this.cartId = this.cartIdList.join(",");
          this.getCartSumData();
        });
      },

      // 删除购物车--1
      cartDeleteData() {
        if (!this.cartId) {
          this.showAlertDel();
        } else {
          this.showAlertSure(this.cartId);
        }
      },

      // 删除购物车--2
      cartDeleteDataOne(cartId) {
        this.cartId = cartId;
        this.showAlertSure(cartId);
      },

      // 删除购物车--3
      sureDeleteData() {
        cartDelete({
          cartId: this.cartId
        }).then(res => {
          if (res.code === 0) {
            this.closeAlert();
            this.getcartList();
            window.location.reload();
          }
        });
      },

      // 计算购物车记录的价格
      getCartSumData() {
        this.newcartIdList = [];

        for (let i = 0; i < this.cartIdList.length; i++) {
          if (this.arry[i] === 1) {
            this.newcartIdList.push(this.cartIdList[i]);
          }
        }

        this.cartId = this.newcartIdList.join(",");
        if (this.newcartIdList && this.newcartIdList.length > 0) {
          getCartSum({
            cartIds: this.cartId
          }).then(res => {
            if (res.code === 0) {
              this.totalMoney = res.data;
            }
          });
        }
      },

      // 选择商品
      selectAll() {
        this.isClick = !this.isClick;
        if (this.isClick) {
          this.isClickChild = [];
          this.arry = [];
          for (var i = 0; i < this.cartIdList.length; i++) {
            this.isClickChild.push(true);
            this.arry.push(1);
          }
          this.newcartIdList = this.cartIdList;
          this.getCartSumData();
        } else {
          this.isClickChild = [];
          this.arry = [];
          for (var i = 0; i < this.cartIdList.length; i++) {
            this.isClickChild.push(false);
            this.arry.push(0);
          }
          this.newcartIdList = [];
          this.totalMoney = 0;
        }
      },
      // 选择商品
      select(cartId, index) {
        if (this.isClickChild[index]) {
          this.$set(this.isClickChild, index, false);
          this.arry[index] = 0;
        } else {
          this.$set(this.isClickChild, index, true);
          this.arry[index] = 1;
        }
        this.getCartSumData();
      },

      decGoods(cartId, stock, price, index) {
        if (this.numGoods[index] <= 0) {
          this.$set(this.numGoods, index, 1);
        }
        this.$set(this.numGoods, index, --this.numGoods[index]);
        this.price = price;
        this.stock = stock;
        this.decChangeCartNum(cartId);
      },

      addGoods(cartId, stock, price, index) {
        if (stock >= 0) {
          if (this.numGoods[index] >= stock) {
            this.$set(this.numGoods, index, stock - 1);
          }
        } else {
          this.$set(this.numGoods, index, 0);
        }
        this.$set(this.numGoods, index, ++this.numGoods[index]);
        this.price = price;
        this.stock = stock;
        this.addChangeCartNum(cartId);
      },

      // 更改购物车记录数量
      decChangeCartNum(cartId) {
        changeCartNum({
          cartId: cartId,
          num: -1
        }).then(res => {
          if (res.code === 0) {
            this.getCartSumData();
          }
        });
      },

      // 更改购物车记录数量
      addChangeCartNum(cartId) {
        changeCartNum({
          cartId: cartId,
          num: +1
        }).then(res => {
          if (res.code === 0) {
            this.getCartSumData();
          }
        });
      },

      // 设置购物车数量
      toSetCartNum(cartId, index) {
        setCartNum({
          cartId: cartId,
          num: this.numGoods[index]
        }).then(res => {
          if (res.code === 0) {
            this.getCartSumData();
          }
        });

        this.newcartIdList = [];
        for (let i = 0; i < this.cartIdList.length; i++) {
          if (this.arry[i] === 1) {
            this.newcartIdList.push(this.cartIdList[i]);
          }
        }

        this.cartId = this.newcartIdList.join(",");
        this.getCartSumData();
      },

      // 输入框改变
      inputFunc(cartId, index, stock) {
        this.stock = stock;
        let testReg = /^[0-9\.\-]*$/;
        if (
          !testReg.test(this.numGoods[index]) ||
          this.numGoods[index] < 0
        ) {
          this.numGoods[index] = 0;
        } else if (this.numGoods[index] > this.stock) {
          this.numGoods[index] = this.stock;
        }
        /* eslint-enable */

      setCartNum({
        cartId: cartId,
        num: this.numGoods[index]
      }).then(res => {
        if (res.code === 0) {
        }
      });

      this.newcartIdList = [];
      for (let i = 0; i < this.cartIdList.length; i++) {
        if (this.arry[i] === 1) {
          this.newcartIdList.push(this.cartIdList[i]);
        }
      }

      this.cartId = this.newcartIdList.join(',');
      this.getCartSumData();
      // console.log(this.cartId);
    },

    // 结算
    TocartSettle() {
      console.log(234);
      this.newcartIdList = [];
      for (let i = 0; i < this.cartIdList.length; i++) {
        if (this.arry[i] === 1) {
          this.newcartIdList.push(this.cartIdList[i]);
        }
      }

      this.cartId = this.newcartIdList.join(',');
      if (this.totalMoney !== 0) {
        cartSettle({
          cartIds: this.cartId
        }).then(res => {
          if (res.code === 0) {
            this.orderId = res.data.orderId;
            // 本地测试 ip + 路由路径 请自行更换
            // window.open(`http://192.168.1.173:9529/nfzy-admin/inquiryManager/bill?orderId=${res.data.orderId}`);

            // 跳转结算 后端约定域名
            window.open(`${res.data.url}?orderId=${res.data.orderId}`);
          } else {
            alert(res.msg);
          }
        });
      }
    },

    closeAlert() {
      this.showMask = false;
      this.showDelbox = false;
      this.showsuredelbox = false;
    },

    showAlertDel() {
      this.showMask = true;
      this.showDelbox = true;
    },

    showAlertSure() {
      this.showMask = true;
      this.showsuredelbox = true;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
  .m-content {
    width: 1200px;
    margin: 0 auto;
    .goodstit {
      border-bottom: 1px solid #e6e6e6;
      clear: both;
      overflow: hidden;
      margin-top: 24px;
      .f-left {
        float: left;
        width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        color: #009dee;
        border-bottom: 2px solid #009dee;
        i {
          margin-left: 5px;
        }
      }
      .f-right {
        float: right;
        font-size: 12px;
        color: #333;
        .price {
          display: inline-block;
          font-size: 14px;
          color: #e60012;
          padding: 0 18px;
        }
        button {
          display: inline-block;
          width: 56px;
          height: 28px;
          border-radius: 6px;
          outline: none;
          border: none;
          background: #009dee;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .goodslist {
      overflow: hidden;
      li {
        text-align: center;
      }
      .detail {
        width: 520px;
        img {
          float: left;
          width: 100px;
          height: 100px;
          margin: 30px 70px 30px 10px;
        }
        .f-intro {
          float: left;
          text-align: left;
          h4 {
            padding: 35px 0 24px 0;
          }
          .secchild {
            padding-bottom: 20px;
          }
          p {
            span:first-child {
              margin-right: 10px;
            }
          }
        }
      }
      .price {
        width: 200px;
        text-align: center;
      }
      .num {
        width: 78px;
      }
      .totalprice {
        width: 230px;
      }
      .listtit {
        overflow: hidden;
        padding: 24px 0 20px;
        li {
          float: left;
          font-size: 14px;
          color: #333;
        }
        li:first-child {
          i {
            display: inline-block;
            width: 17px;
            height: 15px;
            background: url(../home/img/r-unselect.png) center top no-repeat;
            background-size: 100% 100%;
            vertical-align: top;
            margin-right: 8px;
            cursor: pointer;
          }
          .selected {
            width: 17px;
            height: 15px;
            background: url(../home/img/r-select.png) center top no-repeat;
          }
        }
      }
      .listdetail {
        .selected {
          background: #fff5e7;
        }
        ul {
          margin-bottom: 16px;
          overflow: hidden;
          border: 1px solid #e6e6e6;
          li {
            font-size: 14px;
            color: #333;
            float: left;
            .selectbox {
              display: inline-block;
              width: 17px;
              height: 15px;
              background: url(../home/img/r-unselect.png) center top no-repeat;
              background-size: 100% 100%;
              vertical-align: top;
              margin-right: 8px;
              cursor: pointer;
              margin: 70px 17px 0 17px;
            }
            .selected {
              background: url(../home/img/r-select.png) center top no-repeat;
            }
            h4 {
              font-size: 16px;
              color: #666;
            }
          }
        }
        .price,
        .totalprice {
          margin-top: 72px;
        }
        .num {
          border: 1px solid #ff9d1c;
          margin-top: 54px;
          color: #ff9d1c;
          background: #ffe0b7;
          .select {
            overflow: hidden;
            .dec,
            input,
            .add {
              width: 17px;
              float: left;
              height: 24px;
              line-height: 24px;
              cursor: pointer;
            }
            input {
              width: 39px;
              font-size: 14px;
              color: #333;
              outline: none;
              border: none;
              text-align: center;
              border-right: 1px solid #ff9d1c;
              border-left: 1px solid #ff9d1c;
              background: #ffe0b7;
            }
          }
          .tip {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #e60012;
            text-align: center;
            border-top: 1px solid #ff9d1c;
          }
        }
      }
      .del {
        width: 98px;
        button {
          outline: none;
          border: none;
          font-size: 14px;
          color: #333;
          background: none;
          margin-top: 72px;
          outline: none;
          border: none;
          cursor: pointer;
        }
      }
      .settlement {
        height: 50px;
        line-height: 50px;
        margin-top: 22px;
        margin-bottom: 144px;
        background: #f2f2f2;
        .f-left {
          float: left;
          font-size: 14px;
          color: #333;
          i {
            display: inline-block;
            width: 17px;
            height: 15px;
            background: url(../home/img/r-unselect.png) center top no-repeat;
            background-size: 100% 100%;
            vertical-align: top;
            margin: 18px 8px 0 18px;
            cursor: pointer;
          }
          .selected {
            background: url(../home/img/r-select.png) center top no-repeat;
          }
          .selectall {
            display: inline-block;
            margin-right: 32px;
          }
          .del {
            cursor: pointer;
          }
        }
        .f-right {
          float: right;
          .totalprice {
            padding: 0 20px 0 50px;
            i {
              color: #e60012;
            }
          }
          button {
            width: 120px;
            height: 50px;
            background: #009dee;
            font-size: 20px;
            color: #fff;
            outline: none;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: #000;
      filter: alpha(opacity=60);
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
    }
    .delbox {
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -80px;
      margin-left: -200px;
      width: 400px;
      height: 160px;
      background: #fff;
      z-index: 3;
      .close {
        position: absolute;
        width: 15px;
        height: 15px;
        background: url(img/p-close.png) center top no-repeat;
        right: 20px;
        top: 20px;
        cursor: pointer;
      }
      .tip {
        margin: 20px 0 20px 20px;
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-align: center;
          background: #009dee;
          border-radius: 100%;
        }
        span {
          font-size: 18px;
          color: #666;
        }
      }
      p {
        text-align: center;
        font-size: 16px;
        color: #666;
      }
    }
    .suredelbox {
      text-align: left;
      p {
        text-align: left;
        margin: 0 0 20px 20px;
      }
      li {
        float: left;
        width: 75px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fff;
        border: 1px solid #999;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        &:first-child {
          background: #009dee;
          color: #fff;
          border: none;
          margin: 0 10px 0 20px;
        }
      }
    }
  }
</style>
