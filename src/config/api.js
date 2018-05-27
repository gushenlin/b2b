// 请求函数
import {fetch} from '@/config/fetch';
// path常量
import API_PATH from '@/config/api_path';

/** ************************* 登录相关接口 ***************************/
// 1 登录（必须先登录以获得权限） POST /wx/login
// 已调通
export function login(data) {
  return fetch({
    url: API_PATH.USER.LOGIN,
    method: 'post',
    data: data
  });
}

// 2 修改密码 POST /wx/changePassword
export function changePassword(data) {
  return fetch({
    url: API_PATH.USER.CHANGE_PASSWORD,
    data: data
  });
}

// 3 发送手机验证码 POST /wx/sendRegSms
// 已调通
export function sendRegSms(data) {
  return fetch({
    url: API_PATH.USER.SEND_REGSMS,
    method: 'post',
    data: data
  });
}

// 4 注册 POST /wx/register
// 已调通
export function register(data) {
  return fetch({
    url: API_PATH.USER.REGISTER,
    method: 'post',
    data: data
  });
}

// 5 验证手机验证码是否正确（忘记密码） POST /wx/checkSmsCode
// 已调通
export function checkSmsCode(data) {
  return fetch({
    url: API_PATH.USER.CHECK_SMS_CODE,
    method: 'post',
    data: data
  });
}

// 6 重设密码 POST /wx/forgetPassword
// 已调通
export function forgetPassword(data) {
  return fetch({
    url: API_PATH.USER.FORGET_PASSWORD,
    method: 'post',
    data: data
  });
}

/** ************************* 首页相关接口 ***************************/
// 1 首页轮播banner GET /b2b/bannerList
// 已调通
export function bannerList() {
  return fetch({
    url: API_PATH.HOME.BANNERLIST,
    method: 'get'
  });
}

// 2 热门品牌banner GET /b2b/advSalesBrand
// 已调通
export function advSalesBrand() {
  return fetch({
    url: API_PATH.HOME.ADV_SALES_BRAND,
    method: 'get'
  });
}

// 3 系统、分类、商品 GET /b2b/recGoods
// 已调通
export function recGoods() {
  return fetch({
    url: API_PATH.HOME.RECGOODS,
    method: 'get'
  });
}

// 4 今日推荐 GET /b2b/recToday
// 已调通
export function recToday() {
  return fetch({
    url: API_PATH.HOME.RECTODAY,
    method: 'get'
  });
}

// 5 广告 GET /b2b/advertise
export function advertise() {
  return fetch({
    url: API_PATH.HOME.ADVERTISE,
    method: 'get'
  });
}

// 6 新闻列表 GET /b2b/newsList
export function newsList(params) {
  return fetch({
    url: API_PATH.HOME.NEWS_LIST,
    method: 'get',
    params: params
  });
}

// 7 新闻详情 GET /b2b/newsDetail
export function newsDetail(params) {
  return fetch({
    url: API_PATH.HOME.NEWS_DETAIL,
    method: 'get',
    params: params
  });
}

// 8 精品推荐 GET /b2b/rightSideGoods
export function rightSideGoods(params) {
  return fetch({
    url: API_PATH.HOME.RIGHTSIDEGOODS,
    method: 'get',
    params: params
  });
}

/** ************************* 商品相关接口 ***************************/
// 1 商品列表 GET /b2b/goodsList
// 已调通
export function goodsList(params) {
  return fetch({
    url: API_PATH.GOODS.GOODS_LIST,
    method: 'get',
    params: params
  });
}

// 2 商品详情 GET /b2b/goodsDetail
export function goodsDetail(params) {
  return fetch({
    url: API_PATH.GOODS.GOODS_DETAIL,
    method: 'get',
    params: params
  });
}

// 3 系统类型列表 GET /b2b/systypeList
// 已调通
export function systypeList() {
  return fetch({
    url: API_PATH.GOODS.SYS_TYPE_LIST,
    method: 'get'
  });
}

// 4 子类型列表 GET /b2b/subtypeList
// 已调通
export function subtypeList(params) {
  return fetch({
    url: API_PATH.GOODS.SUB_TYPE_LIST,
    method: 'get',
    params: params
  });
}

// 5 获取商品可选属性类型列表 POST /b2b/GPTlist
export function GPTlist() {
  return fetch({
    url: API_PATH.GOODS.GPT_LIST,
    method: 'post'
  });
}

/** ************************* 车型相关接口 ***************************/
// 1 按缩写获取品牌数据 POST /wx/brandShortcut
export function brandShortcut(data) {
  return fetch({
    url: API_PATH.GOODS.BRAND_SHORTCUT,
    method: 'post',
    data: data
  });
}

// 2 获取车系数据 POST /wx/getSeries
export function getSeries(data) {
  return fetch({
    url: API_PATH.GOODS.GET_SERIES,
    method: 'post',
    data: data
  });
}

// 3 获取年份数据 POST /wx/getYears
export function getYears(data) {
  return fetch({
    url: API_PATH.GOODS.GET_YEAR,
    method: 'post',
    data: data
  });
}

// 4 获取车型数据 POST /wx/getCartypeList
export function getCartypeList(data) {
  return fetch({
    url: API_PATH.GOODS.GET_CARTYPELIST,
    method: 'post',
    data: data
  });
}

// 5 根据所选车型信息获取id POST /wx/getCarTypeId
export function getCarTypeId(data) {
  return fetch({
    url: API_PATH.GOODS.GET_CARTYPEID,
    method: 'post',
    data: data
  });
}
/** ************************* 购物相关接口 ***************************/
// 1 加入购物车 POST /b2b/addCart
export function addCart(data) {
  return fetch({
    url: API_PATH.SHOP.ADD_CART,
    method: 'post',
    data: data
  });
}

// 2 购物车列表 POST /b2b/cartList
export function cartList(data) {
  return fetch({
    url: API_PATH.SHOP.CART_LIST,
    method: 'post',
    data: data
  });
}

// 3 更改购物车记录数量 POST /b2b/changeCartNum
export function changeCartNum(data) {
  return fetch({
    url: API_PATH.SHOP.CHANGE_CART_NUM,
    method: 'post',
    data: data
  });
}

// 4 计算购物车记录价格 POST /b2b/getCartSum
export function getCartSum(data) {
  return fetch({
    url: API_PATH.SHOP.GET_CART_SUM,
    method: 'post',
    data: data
  });
}

// 5 结算购物车 POST /b2b/cartSettle
export function cartSettle(data) {
  return fetch({
    url: API_PATH.SHOP.CART_SETTLE,
    method: 'post',
    data: data
  });
}

// 6 删除购物车 POST /b2b/cartDelete
export function cartDelete(data) {
  return fetch({
    url: API_PATH.SHOP.CART_DELETE,
    method: 'post',
    data: data
  });
}

// 7 设置购物车记录数量 POST /b2b/setCartNum
export function setCartNum(data) {
  return fetch({
    url: API_PATH.SHOP.SET_CART_NUM,
    method: 'post',
    data: data
  });
}

// 8 立即购买 POST /b2b/purchaseNow
export function purchaseNow(data) {
  return fetch({
    url: API_PATH.SHOP.PURCHASE_NOW,
    method: 'post',
    data: data
  });
}
