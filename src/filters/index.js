import moment from 'moment';

// 时间过滤
const moments = (value, format) => {
  if (!value || value === 0) return moment(new Date(1970)).format('YYYY-MM-DD');
  return moment(value).format(format ? format : 'YYYY-MM-DD');
};

// 性别过滤
// const sex = value => {
//   if (!value) return '';
//   if (value === 1) {
//     return '男';
//   } else if (value === 2) {
//     return '女';
//   }
// };

export {
  moments,
  // sex
}
