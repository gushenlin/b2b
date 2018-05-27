<template>
	<div class="m-content">
    <div class="helpwrap">
      <h4 class="tit">首页 》帮助中心</h4>
      <div class="helplist">
        <div class="f-left">
          <ul>
            <li><h4><i class="ico1"></i>账户管理</h4></li>
            <li :class="{'active':showTag==1}" @click="showTag=1"><p>注册与审核</p></li>
            <li :class="{'active':showTag==2}" @click="showTag=2"><p>用户登录</p></li>
            <li :class="{'active':showTag==3}" @click="showTag=3"><p>账户信息维护</p></li>
            <li :class="{'active':showTag==4}" @click="showTag=4"><p>找回密码</p></li>
            <li><h4><i class="ico2"></i>购物指南</h4></li>
            <li :class="{'active':showTag==5}" @click="showTag=5"><p>购物流程</p></li>
            <li :class="{'active':showTag==6}" @click="showTag=6"><p>发布询价</p></li>
            <li :class="{'active':showTag==7}" @click="showTag=7"><p>常见问题</p></li>
            <li :class="{'active':showTag==8}" @click="showTag=8"><p>联系我们</p></li>
            <li><h4><i class="ico3"></i>支付方式</h4></li>
            <li :class="{'active':showTag==9}" @click="showTag=9"><p>汽配商城</p></li>
            <li :class="{'active':showTag==10}" @click="showTag=10"><p>支付平台</p></li>
            <li :class="{'active':showTag==11}" @click="showTag=11"><p>支付限额查询</p></li>
            <li><h4><i class="ico4"></i>订单管理</h4></li>
            <li :class="{'active':showTag==12}" @click="showTag=12"><p>订单状态</p></li>
            <li :class="{'active':showTag==13}" @click="showTag=13"><p>发票规则</p></li>
            <li :class="{'active':showTag==14}" @click="showTag=14"><p>物流信息查询</p></li>
          </ul>
        </div>
        <div class="f-right">
          <div class="answer answer1" v-show="showTag == 1">
            <h4>注册与审核</h4>
            <p>一、 点击“注册”，进入帐号注册页面；</p>
            <div class="step step1"></div>
            <p>二、填写注册手机、密码后，点击“下一步”，继续填写账户信息；</p>
            <div class="step step2"></div>
            <p>三、继续填写详细的注册信息，填写完成后点击“下一步”即完成注册。</p>
            <div class="step step3"></div>
          </div>
          <div class="answer answer2" v-show="showTag == 2">
            <h4>注用户登录</h4>
            <p>一、 点击首页顶部导航栏的“登录”，进入登录页面；</p>
            <div class="step step1"></div>
            <p>二、输入注册时所用的手机号和密码，点击“登录”，即可登录南方众悦汽配网站；</p>
            <div class="step step2"></div>
          </div>
          <div class="answer answer3" v-show="showTag == 3">
            <h4>账户信息维护</h4>
            <p>一、点击右边导航的“返回主页”，进入维修厂我的中心；</p>
            <div class="step step1"></div>
            <p>二、进入“我的中心”后，点击左侧导航“账号管理”，进入账号管理；</p>
            <div class="step step2"></div>
            <p>三、进入“账号信息”，您可以修改企业的相关信息以及密码；</p>
            <div class="step step3"></div>
            <p>四、进入“收货地址”，您可以修改、新增收货地址；</p>
            <div class="step step4"></div>
            <p>五、进入“发票管理”，您可以设置、查看发票；</p>
            <div class="step step5"></div>
            <p>六、进入“常用供应商”，您可以管理、新增供应商；</p>
            <div class="step step6"></div>
          </div>
          <div class="answer answer4" v-show="showTag == 4">
            <h4>找回密码</h4>
            <p>一、如果您忘记密码，进入登录页面，点击“忘记密码”，进行找回密码；</p>
            <div class="step step1"></div>
            <p>二、输入注册时所使用的手机号，并且获取验证码，重新设置帐号密码；</p>
            <div class="step step2"></div>
          </div>
          <div class="answer answer5" v-show="showTag == 5">
            <h4>购物流程</h4>
            <p>一、如何注册：点击页面顶部“注册“,进入注册页面；</p>
            <div class="step step1"></div>
            <p>
              二、如何提交订单：浏览要购买的商品，点击“加入购物车”，商品会自动添加到购物车里。如果需要更改商品数量，需在商品所在栏目后的商品数量框中输入购买数量，即可更改商品数量；选好商品后点击“购买”，进行详细填写，收货人信息、付款方式等信息。确认无误后点击“提交订单”，生成新订单并显示订单编号。可点击“我的订单”进入维修厂我的中心“订单管理”查看订单详细信息。</p>
            <div class="step step2"></div>
            <p>三、订单的维护：您可以进入维修厂我的中心“订单管理”中查看我的订单信息；</p>
            <div class="step3"></div>
          </div>
          <div class="answer answer6" v-show="showTag == 6">
            <h4>发布询价</h4>
            <p>一、点击右侧导航栏“返回主页”，进入维修厂我的中心；</p>
            <div class="step step1"></div>
            <p>二、进入“我的中心”后，点击左侧导航“询价管理”，进入询价管理；</p>
            <div class="step step2"></div>
            <p>三、进入“发布询价”页面后，确定车型、配件信息以及其他信息，点击“下一步”，在确认询价页面，可查看询价内容、填写备注，确认无误点击“发布询价”就可以了；</p>
            <div class="step step3"></div>
            <p>四、查看询价结果：点击“询价单列表”即可进入询价单历史记录页面，在“询价单列表”页面，可以查看各种状态的询价单；</p>
            <div class="step step4"></div>
          </div>
          <div class="answer answer7" v-show="showTag == 7">
            <h4>常见问题</h4>
            <p>一、what？</p>
            <div class="step step1"></div>
            <p>一、what？</p>
            <div class="step step2"></div>
          </div>
          <div class="answer answer8" v-show="showTag == 8">
            <h4>联系我们</h4>
            <p>全国客服中心电话：400-1234-1234</p>
            <p>全国客服服务邮箱：1234560@qq.com</p>
            <p>24h热线服务电话：12345678901</p>
            <h4>投诉和建议、举报</h4>
            <p>邮箱：154062326@qq.com</p>
            <p>电话：13415354015</p>
            <h4>公司地址</h4>
            <p>地址：深圳市宝安区西乡路口20号</p>
            <p>邮编：514000</p>
            <p>电话：400-1234-0000</p>
          </div>
          <div class="answer answer9" v-show="showTag == 9">
            <h4>南方众悦汽配支付流程图</h4>
          </div>
          <div class="answer answer10" v-show="showTag == 10">
            <h4>支付平台</h4>
            <p>平台支持哪些支付方式：商城支持微信、支付宝、通联支付，发布询价还可以采用包月的方式支付；</p>
          </div>
          <div class="answer answer11" v-show="showTag == 11">
            <h4>支付限额查询</h4>
            <p>一、建议换成支付额度更高的支付方式；</p>
            <p>二、提前将款项打入第三方支付平台，例如支付宝和微信等。支付宝余额支付的限额为20万/笔/日，余额宝支付限额为5万元/笔/日。微信零钱支付的限额为3万/笔/日。</p>
          </div>
          <div class="answer answer12" v-show="showTag == 12">
            <h4>订单状态</h4>
            <p>南方众悦汽配的新订单从下单到订单完成，会经历四种状态，分别是“待付款”，“待发货”，"待收货”，“已完成”， 我们会将各种状态显示在订单详情页面。</p>
          </div>
          <div class="answer answer13" v-show="showTag == 13">
            <h3>商城暂不提供发票，发布询价的订单可选择是否提供专用发票</h3>
            <h4>设置发票信息</h4>
            <p>一、一般纳税人资格证明审核通过的用户才能申请开具增值税专用发票，请提前维护好资质信息；</p>
            <p>二、您申请的发票抬头内容不能为空，抬头名称需要与营业执照名称一致。</p>
            <h4>开发票的注意事项</h4>
            <p>一、发票金额不能高于订单实际支付金额；</p>
            <p>二、由于客户原因引起的发票遗失，不能补开发票。</p>
          </div>
          <div class="answer answer14" v-show="showTag == 14">
            <h4>物流信息查询</h4>
            <p>一、本网站提供物流100查看物流信息；</p>
            <p>二、用户可以在订单详情页中点击“查看物流”，若物流发货，用户就可以看到物流发货单。用户可以直接点击“确认收货”按钮，对物流单进行确认收货；</p>
            <p>三、用户确认收货后，可以在物流详情中，查看到自己物流单的详细流程。包括收货时间等信息，供用户核对。</p>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import headersearch from '@/components/headersearch.vue';
import headernav from '@/components/headernav.vue';
export default {
  data() {
    return {
      showTag: 1
    };
  },
  computed: {},
  mounted: function() {},
  components: {
    headernav,
    headersearch
  },
  methods: {}
};
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
.helpwrap {
  width: 1200px;
  margin: 0 auto;
  .tit {
    font-size: 14px;
    color: #999;
    padding: 32px 0 18px;
  }
  .helplist {
    .f-left {
      width: 200px;
      float: left;
      border: 1px solid #e6e6e6;
      margin-bottom: 26px;
      li {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #333;
        text-align: center;
        border: 1px solid #e6e6e6;
        cursor: pointer;
        h4 {
          color: #009dee;
        }
        i {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url(img/help-ico.png) center top no-repeat;
          background-size: 28px 169px;
          vertical-align: top;
          margin: 9px 9px 0 0;
        }
        .ico1 {
          background-position: 0 3px;
        }
        .ico2 {
          background-position: 0 -44px;
        }
        .ico3 {
          background-position: 0 -93px;
        }
        .ico4 {
          background-position: 0 -140px;
        }
      }
      .active {
        color: #fff;
        background: #009dee;
        border-bottom: 1px solid #009dee;
      }
    }
    .f-right {
      width: 970px;
      float: right;
      border: 1px solid #e6e6e6;
      background: #fff;
      padding: 16px 40px 40px 40px;
      margin-bottom: 26px;
      .answer {
        h4 {
          font-size: 16px;
          color: #333;
          font-weight: normal;
        }
        p {
          line-height: 24px;
          font-size: 14px;
          color: #333;
          padding: 20px 0 16px;
        }
        .step {
          width: 880px;
          height: 224px;
          background: #f2f2f2;
        }
      }
      .answer8 {
        p {
          padding: 0;
        }
        h4 {
          padding: 20px 0;
        }
      }
      .answer13 {
        p {
          padding: 0;
        }
        h3 {
          padding-top: 10px;
          font-size: 18px;
        }
        h4 {
          padding: 20px 0;
        }
      }
    }
  }
}
</style>
