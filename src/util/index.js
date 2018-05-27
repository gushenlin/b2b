import Vue from 'vue';
import Toast from 'vue-easy-toast';

Vue.use(Toast);

export default class utils {
  // toast 弹框
  static toast(data) {
    if (data.str) {
      Vue.toast(data.str, {
        duration: data.time ? data.time : 2000,
        className: data.className,
        horizontalPosition: data.position ? data.position : 'center',
        verticalPosition: data.vertical ? data.vertical : 'bottom',
        transition: data.transition ? data.transition : 'slide-up',
        closeable: data.closeable ? data.closeable : true
      });
    }
  }
}
