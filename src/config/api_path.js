// api_path 配置在项目根目录 config dev.env.js 和 prod.env.js 下
let api = process.env.API_PATH;

const path = {
  USER: {
    // 1 登录
    LOGIN: `${api}/wx/login`,
    // 2 修改密码
    CHANGE_PASSWORD: `${api}/wx/changePassword`,
    // 3 获取验证码
    SEND_REGSMS: `${api}/wx/sendRegSms`,
    // 4 注册
    REGISTER: `${api}/wx/register`,
    // 5 验证手机验证码是否正确（忘记密码)
    CHECK_SMS_CODE: `${api}/wx/checkSmsCode`,
    // 6 重设密码
    FORGET_PASSWORD: `${api}/wx/forgetPassword`
  },

  HOME: {
    // 1 首页轮播banner
    BANNERLIST: `${api}/b2b/bannerList`,
    // 2 热门品牌
    ADV_SALES_BRAND: `${api}/b2b/advSalesBrand`,
    // 3 系统、分类、商品
    RECGOODS: `${api}/b2b/recGoods`,
    // 4 今日推荐
    RECTODAY: `${api}/b2b/recToday`,
    // 5 广告
    ADVERTISE: `${api}/b2b/advertise`,
    // 6 新闻列表
    NEWS_LIST: `${api}/b2b/newsList`,
    // 7 新闻详情
    NEWS_DETAIL: `${api}/b2b/newsDetail`,
    // 8 产品精选
    RIGHTSIDEGOODS: `${api}/b2b/rightSideGoods`
  },

  GOODS: {
    // 1 商品列表
    GOODS_LIST: `${api}/b2b/goodsList`,
    // 2 商品详情
    GOODS_DETAIL: `${api}/b2b/goodsDetail`,
    // 3 系统类型列表
    SYS_TYPE_LIST: `${api}/b2b/systypeList`,
    // 4 子类型列表
    SUB_TYPE_LIST: `${api}/b2b/subtypeList`,
    // 5 获取商品可选属性类型列表
    GPT_LIST: `${api}/b2b/GPTlist`,
    // 6 按缩写获取品牌数据
    BRAND_SHORTCUT: `${api}/wx/brandShortcut`,
    // 7 获取车系数据
    GET_SERIES: `${api}/wx/getSeries`,
    // 8 获取年份数据
    GET_YEAR: `${api}/wx/getYears`,
    // 9 获取车型数据
    GET_CARTYPELIST: `${api}/wx/getCartypeList`,
    // 10 根据所选车型信息获取
    GET_CARTYPEID: `${api}/wx/getCarTypeId`
  },

  SHOP: {
    // 1 加入购物车
    ADD_CART: `${api}/b2b/addCart`,
    // 2 购物车列表
    CART_LIST: `${api}/b2b/cartList`,
    // 3 更改购物车商品数量
    CHANGE_CART_NUM: `${api}/b2b/changeCartNum`,
    // 4 计算购物车记录价格
    GET_CART_SUM: `${api}/b2b/getCartSum`,
    // 5 结算购物车
    CART_SETTLE: `${api}/b2b/cartSettle`,
    // 6 删除购物车
    CART_DELETE: `${api}/b2b/cartDelete`,
    // 7 设置购物车记录数量 POST /b2b/setCartNum
    SET_CART_NUM: `${api}/b2b/setCartNum`,
    // 8 立即购买
    PURCHASE_NOW: `${api}/b2b/purchaseNow`
  }

};

export default path;
