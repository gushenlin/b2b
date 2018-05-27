<template>
  <div class="m-content">
    <div class="newswrap">
      <ul>
        <li v-for="news in data.newsList" :key="news.newsId" @click="$router.push('news?newId=' + news.newsId)">
          <img :src="news.imgUrl">
          <p class="tit">{{news.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { newsList } from '@/config/api';

export default {
  data() {
    return {
      data: {
        // 新闻列表
        newsList: [],
        page: 1
      }
    };
  },

  methods: {
    // 新闻列表
    getnewsList() {
      newsList({page: this.data.page}).then(res => {
        if (res.code === 0) {
          this.data.newsList = res.data.list;
        }
      });
    }
  },

  created() {
    this.getnewsList();
  }
};
</script>

<style lang='scss' type="text/scss" scoped>
  .newswrap {
    overflow: hidden;
    width: 1200px;
    margin: 20px auto 60px;
    ul {
      overflow: hidden;
      width: 1200px;
    }
    li {
      width: 30%;
      height: 266px;
      float: left;
      margin: 10px;
      border: 1px solid #fbfbfb;
      cursor: pointer;
      img {
        display: inline-block;
        width: 100%;
        height: 222px;
      }
      .tit {
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }
</style>
