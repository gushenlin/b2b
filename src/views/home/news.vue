<template>
	<div class="m-content">
		<div class="newspwrap">
			<h4 class="tit">
				<i @click="$router.push('newslist')">最新新闻</i> 》{{data.newsDetail.name}}</h4>
			<div class="newslist">
				<div class="f-left">
					<div class="article">
						<h4>{{data.newsDetail.name}}</h4>
						<p class="time">{{data.newsDetail.createTime | moments('YYYY-MM-DD HH:mm:ss')}}</p>
						<img :src="data.newsDetail.imgUrl">
						<p v-html="data.newsDetail.detail"></p>
					</div>
				</div>

				<div class="f-right">
					<h4>产品精选</h4>
					<ul>
						<li v-for="goods in data.rightSideGoods" :key="goods.goodsId"  @click="goGoodsDetail(goods.goodsId)">
							<p class="line"></p>
							<div class="top">
								<img :src="goods.imgUrl">
								<div class="f-detail">
									<p class="productname">{{goods.name}}</p>
									<p class="money">{{goods.price}}</p>
									<p class="address">{{goods.province}} {{goods.city}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import {newsDetail, rightSideGoods} from '@/config/api';

export default {
  data() {
    return {
      showTag: 1,
      data: {
        newsDetail: {}
      },
      createTime: 0
    };
  },

  methods: {
    // 获取新闻内容详情
    getnewsDetail() {
      newsDetail({newsId: this.$route.query.newId}).then(res => {
        if (res.code === 0) {
          this.data.newsDetail = res.data;
        }
      });
    },

    // 获取产品精选
    getrightSideGoods() {
      rightSideGoods().then(res => {
        if (res.code === 0) {
          this.data.rightSideGoods = res.data;
        }
      });
    },

    // 去商品详情
    goGoodsDetail(id) {
      this.$router.push({
        path: '/shop/productdetail',
        query: {goodsId: id}
      });
    }
  },

  created() {
    this.getnewsDetail();
    this.getrightSideGoods();
  }
};
</script>

<style scoped lang='scss' type="text/scss">
  .newspwrap {
    width: 1200px;
    margin: 0 auto;
    .tit {
      font-size: 14px;
      color: #999;
      padding: 32px 0 18px;
    }
    .newslist {
      .f-left {
        float: left;
        width: 840px;
        min-height: 1150px;
        border: 1px solid #e6e6e6;
        overflow:hidden;
        margin-bottom:60px;
        h4 {
          font-size: 22px;
          color: #333;
          padding-top: 36px;
          text-align: center;
        }
        .time {
          padding: 16px 0 32px;
          text-align: center;
        }
        p {
          width: 794px;
          margin: 0 auto;
          font-size: 14px;
          color: #333;
          line-height: 20px;
        }
      }
      .f-right {
        float: right;
        width: 346px;
        border: 1px solid #e6e6e6;
        h4 {
          height: 50px;
          line-height: 50px;
          background: #f2f2f2;
          font-size: 18px;
          color: #e60012;
          padding-left: 16px;
        }
        li {
          margin: 10px 14px;
          overflow: hidden;
          .top {
            overflow: hidden;
            img {
              float: left;
              width: 100px;
              height: 100px;
              margin-right: 16px;
            }
            .f-detail {
              float: left;
              width: 200px;
              font-size: 16px;
              overflow: hidden;
              .productname {
                color: #333;
                padding-top: 10px;
              }
              .money {
                color: #e60012;
                padding: 24px 0 14px;
              }
              .address {
                color: #666;
              }
            }
          }
          .line {
            width: 316px;
            height: 1px;
            background: url(img/news-line.png) center top no-repeat;
            margin: 0 auto 10px;
            clear: both;
          }
        }
        li:first-child {
          .line {
            background: none;
          }
        }
      }
    }
  }
</style>
