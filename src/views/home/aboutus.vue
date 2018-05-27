<template>
  <div class="m-content">
    <div class="banner"></div>
    <div class="content">
      <div class="f-left">
        <ul class="nav">
          <li @click="showContent=1" :class="{'active': showContent==1}">关于我们</li>
          <li @click="showContent=2" :class="{'active': showContent==2}">发展历程</li>
          <li @click="showContent=3" :class="{'active': showContent==3}">企业文化</li>
          <li @click="showContent=4" :class="{'active': showContent==4}">联系方式</li>
        </ul>
        <ul class="ad">
          <li v-for="ad in adList">
            <img :src="ad.adimg">
            <div class="adtip">广告</div>
            <p class="tit">3M新型产品上线，限时优惠</p>
          </li>
        </ul>
      </div>

      <div class="f-right">
        <div class="aboutus" v-show="showContent === 1">
          <h4>关于我们</h4>
          <p>进入六月烈日正浓，汽车配件市场的价格战也如火如荼，汽车配件网再掀降价狂飙引得人动心动。此前的两个月，汽车配件网已经挑起数轮价格战，其中4月的全场6.5折封顶活动，5月初的降价封顶的特价甩卖活动，还有派送货到付款的诸多活动，都是一浪高过一浪的汽配大潮涌，而进入6月汽车配件网再次启动德系配件降价风暴，其中德国车奔宝奥配件一跌再跌，同比4S店对半砍再对砍，更有进口保养用品热卖促销，还有晒单的大奖活动，可谓花样翻新，可选择性也强过以往。夏季的涌动，炎热的夏天给所有车主朋友们燥动的感觉，火热的季节汽车配件网打出“放暑价”的口号，让所有车主朋友们享受凉爽的冰点零利购物季。汽车配件网夏季汽车配件可谓琳琅满目，其中奔驰汽车配件一直是汽车配件网主打优势品牌，在汽车配件网销售报表中一直排列第一，新到北京奔驰C级，E级蒸发器，空调压缩机更是为炎炎夏日汽车保养和维修的朋友们带来一道凉爽冷空气。紧接宝马事业部也大刀阔斧续以力荐，华晨宝马，德国宝马X5，X3，敞蓬，还有新款宝马迷你零配件统一“放假”，卖到断货不罢休。</p>
          <div class="aboutus-img1"></div>
          <p class="line"></p>
          <h4>专业服务团队</h4>
          <p>专业团队，高效服务，售后无忧</p>
          <p>拥有专业经验的服务团队，提供完善的售前、售中和售后支撑服务， 您的每一个问题都将得到妥善的解决， 您的满意，是我们的承诺，您的微笑，是我们的追求</p>
          <div class="aboutus-img2"></div>
        </div>
        <div class="development" v-show="showContent === 2">
          <div class="line"></div>
          <div class="logo"></div>
          <div class="dev-list">
            <h4>2017年</h4>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <h4>2016年</h4>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <h4>2015年</h4>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
            <div class="step">
              <span>09/10</span>
              <i></i>
              <div class="f-right">
                <p>杭州运营中心成立</p>
                <p>开拓以杭州为中心的华东市场，辐射浙江、上海、江苏、安徽</p>
              </div>
            </div>
          </div>
        </div>

        <div class="culture" v-show="showContent === 3">
          <div class="cul1">
            <div class="f-left">
              <h3>正规经营</h3>
              <h4>专业团队运作，正规经营，提供“一站式”快捷服务</h4>
              <p>南方众悦汽配商城是B2B专业汽车配件网上商城， 通过引入源头厂商入驻和品牌直营的方式， 直接面向全国汽车配件经销商、修理厂、4S店/快修店、车队及个体司机等终端用户， 利用创新的商业模式及互联网思维， 采用专业化团队服务，正规经营， 为商城用户提供“一站式”快捷服务。</p>
            </div>
            <div class="f-right"></div>
          </div>

          <div class="cul2">
            <div class="f-left"></div>
            <div class="f-right">
              <h3>质量保障</h3>
              <h4>严格审核入驻厂商和品牌代理资质，确保优质行货</h4>
              <p>南方众悦汽配商城是B2B专业汽车配件网上商城， 通过引入源头厂商入驻和品牌直营的方式， 直接面向全国汽车配件经销商、修理厂、4S店/快修店、车队及个体司机等终端用户， 利用创新的商业模式及互联网思维， 采用专业化团队服务，正规经营， 为商城用户提供“一站式”快捷服务。</p>
            </div>
          </div>

          <div class="cul3">
            <div class="f-left">
              <h3>全网低价</h3>
              <h4>源头直达，价格大幅优于传统渠道</h4>
              <p>通过厂商和品牌直接入驻经营，源头直达，摒弃中间环节，优化仓储配送，保证真品的同时提供极富竞争力的优势价格，让利于用户</p>
            </div>
            <div class="f-right"></div>
          </div>
          <div class="cul4">
            <div class="f-left"></div>
            <div class="f-right">
              <h3>品类齐全</h3>
              <h4>品类覆盖全，为用户提供一站式采购服务</h4>
              <p>产品覆盖商用车厂家主流车型，  产品品类覆盖齐全， 是用户提供多种选择，所需配件一站购齐！</p>
            </div>
          </div>
           <div class="cul5">
              <div class="f-left">
              <h3>极速配送</h3>
              <h4>智能匹配，就近发货，极速配送</h4>
              <p>就近发货，同时与专业的物流和快递公司协议合作， 提供专业的极速物流服务， 确保严格按照承诺期限发货，集约配送， 让用户享受到标准化、高质量的"端对端"配送服务。</p>
            </div>
            <div class="f-right"></div>
          </div>
        </div>

        <div class="contact" v-show="showContent === 4">
          <h4>联系我们：</h4>
          <p>全国客服中心电话：400-1234-1234</p>
          <p>全国客服服务邮箱：1234560@qq.com</p>
          <p>24h热线服务电话：12345678901</p>
          <p class="line"></p>
          <h4>投诉和建议、举报：</h4>
          <p>邮箱：154062326@qq.com</p>
          <p>电话：13415354015</p>
          <p class="line"></p>
          <h4>公司地址：</h4>
          <p>地址：深圳市宝安区西乡路口20号</p>
          <p>邮编：514000</p>
          <p>电话：400-1234-0000</p>
          <div class="zymap" id="zymap" style="width: 100%;height:200px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BMap} from 'BMap';
export default {
  data() {
    return {
      showTag: 4,
      adList: [
        { adimg: '/static/img/ad3.jpg' },
        { adimg: '/static/img/ad3.jpg' },
        { adimg: '/static/img/ad3.jpg' },
        { adimg: '/static/img/ad3.jpg' }
      ],
      showContent: 1
    };
  },
  mounted () {
    this.ready();
  },
  methods: {
    ready: function () {
      console.log(1);
      if (this.showTag === 4) {
        setTimeout(function () {
          let map = new BMap.Map('zymap');
          let point = new BMap.Point(114.030, 22.538);
          map.centerAndZoom(point, 17);
          map.setCurrentCity('深圳'); // 设置地图显示的城市 此项是必须设置的
          map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
          // 创建坐标
          let marker2 = new BMap.Marker(point); // 创建标注
          map.addOverlay(marker2);
        }, 2000);
      }
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
.banner {
    width: 100%;
    height: 500px;
    background: url(img/about-banner.jpg) center top no-repeat;
    margin: 2px auto 0;
}
.content {
    width: 1200px;
    margin: 20px auto 60px;
    overflow: hidden;
    .f-left {
        float: left;
        width: 200px;
        .nav {
            border: 1px solid #e6e6e6;
            border-bottom: none;
            li {
                height: 52px;
                line-height: 52px;
                border-bottom: 1px solid #e6e6e6;
                font-size: 16px;
                color: #333;
                background: #f2f2f2;
                text-align: center;
                cursor: pointer;
            }
            li:hover {
                background: #009dee;
                color: #fff;
            }
            .active{
              background: #009dee;
              color: #fff;
            }
        }
        .ad {
            li {
                margin-top: 20px;
                position: relative;
                cursor: pointer;
                .adtip {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    width: 38px;
                    height: 26px;
                    line-height: 26px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    background: rgba(0, 0, 0, 0.2);
                }
                .tit {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    background: rgba(0, 0, 0, 0.8);
                }
            }
        }
    }
    .f-right {
        float: right;
        width: 970px;
        .aboutus {
            h4 {
                font-size: 20px;
                color: #009dee;
                height: 50px;
                line-height: 50px;
            }
            p {
                font-size: 14px;
                color: #666;
                line-height: 20px;
            }
            .aboutus-img1 {
                width: 973px;
                height: 310px;
                background: url(img/aboutus1.jpg) center top no-repeat;
                margin-top: 20px;
            }
            .aboutus-img2 {
                width: 973px;
                height: 310px;
                background: url(img/aboutus2.jpg) center top no-repeat;
                margin-top: 20px;
            }
            .line {
                width: 973px;
                height: 1px;
                background: url(img/line.png) center top repeat-y;
                margin: 65px 0;
            }
        }
        .development {
            position: relative;
            padding-left: 242px;
            .line {
                position: absolute;
                top: 97px;
                left: 386px;
                width: 1px;
                height: 986px;
                background: url(img/about-line.png) center top repeat-y;
            }
            .logo {
                width: 64px;
                height: 40px;
                background: url(img/about-logo.png) center top no-repeat;
                margin: 0 0 25px 112px;
            }
            .dev-list {
                p {
                    font-size: 14px;
                    padding-bottom: 10px;
                    color: #666;
                }
                h4 {
                    font-size: 16px;
                    font-weight: normal;
                    color: #e60012;
                    letter-spacing: 3px;
                    padding: 66px 0 6px;
                }
                h4:first-child {
                    padding: 0 0 6px;
                }
                p:first-child {
                    font-size: 16px;
                    color: #333;
                }
                .step {
                    overflow: hidden;
                    clear: both;
                    margin-top: 40px;
                    span {
                        float: left;
                        padding-left: 66px;
                        font-size: 14px;
                        color: #333;
                        letter-spacing: 4px;
                    }
                    i {
                        float: left;
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: #009dee;
                        border-radius: 100%;
                        vertical-align: top;
                        margin: 1px 15px 0 15px;
                    }
                    .f-right {
                        width: 550px;
                        float: left;
                    }
                }
            }
        }
        .culture {
          padding:30px 0;
          h3{
            font-size:20px;
            color:#009dee;
          }
          h4{
            font-size:16px;
            color:#333333;
            padding:20px 0;
          }
          p{
            line-height:24px;
            font-size:14px;
            color:#666;
          }
          .f-left{
            float:left;
          }
           .f-right{
            float:right;
          }
          .cul1{
            clear: both;
            overflow: hidden;
            .f-left{
              width:670px;
              float:left;
            }
            .f-right{
              float:right;
              width:211px;
              height:180px;
              background: url(img/about1.png) center top no-repeat;
            }
          }
          .cul2{
            clear: both;
            overflow: hidden;
            margin-top:70px;
            .f-left{
              width:191px;
              height:192px;
              background: url(img/about2.png) center top no-repeat;
              float:left;
            }
            .f-right{
              float:right;
              width:670px;
            }
          }
          .cul3{
            clear: both;
            margin-top:70px;
            overflow: hidden;
            .f-left{
              width:670px;
              float:left;
            }
            .f-right{
              float:right;
              width:183px;
              height:208px;
              background: url(img/about3.png) center top no-repeat;
            }
          }
          .cul4{
            clear: both;
            overflow: hidden;
            margin-top:70px;
            .f-left{
              width:266px;
              height:143px;
              background: url(img/about4.png) center top no-repeat;
              float:left;
            }
            .f-right{
              float:right;
              width:670px;
            }
          }
          .cul5{
            clear: both;
            overflow: hidden;
            margin-top:70px;
            .f-left{
              width:670px;
              float:left;
            }
            .f-right{
              float:right;
              width:259px;
              height:167px;
              background: url(img/about5.png) center top no-repeat;
            }
          }
        }
        .contact {
            h4 {
                font-size: 20px;
                color: #009dee;
                height: 50px;
                line-height: 50px;
            }
            p {
                font-size: 14px;
                color: #333;
                line-height: 30px;
            }
            .line {
                width: 973px;
                height: 1px;
                background: url(img/line.png) center top repeat-y;
                margin: 30px 0;
            }
            .zymap {
                width: 968px;
                height: 247px;
            }
        }
    }
}
</style>
