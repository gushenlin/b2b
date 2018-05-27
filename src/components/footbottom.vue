 <template>
  <div class="bg">
    <div class="m-guarantee">
      <div class="wrap">
        <ul>
          <li>
            <i class="ico"></i>
            <div class="f-detail">
              <p>品质保障</p>
              <p>品质护航，购物无忧</p>
            </div>
          </li>
          <li>
            <i class="ico"></i>
            <div class="f-detail">
              <p>品类齐全</p>
              <p>千万配件，一站购</p>
            </div>
          </li>
          <li>
            <i class="ico"></i>
            <div class="f-detail">
              <p>物流省心</p>
              <p>全网闪电发货</p>
            </div>
          </li>
          <li>
            <i class="ico"></i>
            <div class="f-detail">
              <p>服务贴心</p>
              <p>质保期内，无理由退换货</p>
            </div>
          </li>
        </ul>
      </div>
    </div>   
    <div class="m-footnav">
      <div class="wrap">
        <div class="f-left">
          <ul>
            <li>帮助中心</li>
            <li class="li2">支付方式</li>
            <li>购物流程</li>
          </ul>
          <ul>
            <li>账号管理</li>
            <li class="li2">订单和退换货</li>
            <li>售后服务</li>
          </ul>
        </div>
        <div class="f-right">
          <div class="phoneico"></div>
          <div class="contant">
            <p>0755-26917166</p>
            <p>24h客服在线</p>
          </div>
        </div>
      </div>
    </div> 
    <div class="m-copyright">版权所有@南方众悦汽配</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.m-guarantee {
  width: 100%;
  padding: 36px 0;
  background: #f2f2f2;
  overflow: hidden;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    li {
      float: left;
      width: 25%;
      .f-detail {
        margin-left: 16px;
        p {
          font-size: 14px;
          color: #999;
        }
        p:first-child {
          font-size: 18px;
          color: #333;
          padding: 7px 0 15px;
        }
      }
      i {
        float: left;
        width: 60px;
        height: 60px;
        background: url(img/foot-common-ico.png);
        background-size: 382px 60px;
        margin-right: 15px;
      }
    }
  }
}
.m-footnav {
  width: 100%;
  .wrap {
    width: 1200px;
    margin: 84px auto 75px;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    .f-left {
      float: left;
      ul {
        clear: both;
        overflow: hidden;
        li {
          float: left;
          cursor: pointer;
          &:hover{
            color:#009dee;
          }
        }
        .li2 {
          width: 218px;
          text-align: center;
          margin: 0 50px;
        }
      }
      ul:first-child {
        margin-bottom: 36px;
      }
    }
    .f-right {
      float: right;
      .phoneico {
        width: 64px;
        height: 54px;
        background: url(img/foot-common-ico.png) center top no-repeat;
        background-size: 382px 60px;
        background-position: -325px 3px;
        float: left;
        margin-right: 16px;
        margin-top: 6px;
      }
      .contant {
        float: left;
        p {
          font-size: 16px;
          color: #747474;
        }
        p:first-child {
          font-size: 36px;
          color: #009dee;
          padding-bottom: 10px;
        }
      }
    }
  }
}
.m-copyright {
  height: 34px;
  line-height: 34px;
  background: #f2f2f2;
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>
