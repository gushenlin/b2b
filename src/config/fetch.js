import axios from 'axios';
// store 状态
import store from '@/store/index';
// 参数序列化
import qs from 'qs';
import utils from '@/util/index';

export function fetch (options) {
  // options 公共参数
  if (options.method.indexOf('post') !== -1) {
    options.data = qs.stringify(Object.assign({
      platform: 1,
      times: Date.now()
    }, {...options.data, ...store.state.userInfo}));
  } else if (options.method.indexOf('get') !== -1) {
    options.params = Object.assign({
      platform: 1,
      times: Date.now()
    }, options.params);
  }

  return (axios.create({
    // 请求头
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 请求域名
    // baseURL: 'http://summer.canplay.com.cn',
    // 超时
    timeout: 15 * 1000
  })(options).then(res => {
    if (res.data.code >= 1 && res.data.code <= 1999) {
      utils.toast({
        str: `网络请求错误：${res.data.msg}`,
        className: ['et-toast-warning']
      });
    } else if (res.data.code >= 2000 && res.data.code <= 8999) {
      utils.toast({
        str: res.data.msg,
        className: ['et-toast-error']
      });
    }
    return Promise.resolve(res.data);
  }).catch(error => {
    return Promise.reject(error);
  }));
}
