// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'vuefix',
    'html'
  ],
  // add your custom rules here
  'rules': {
    // # 第一部分是规则名
    // # 第二部分是表示级别：0-不验证；1-警告；2-错误
    // 不验证
    "arrow-parens": 0,                                                                  // 箭头函数用小括号括起来
    "generator-star-spacing": 0,                                                        // 生成器函数*的前后空格
    "space-before-function-paren": [0, "never"],                                        // 函数定义时括号前面要不要有空格
    "no-empty": 0,                                                                      // 空代码块
    // 警告
    "quotes": [1, "single"],                                                            // 使用单引号

    // 常见错误
    "no-var": 2,                                                                        // 禁用var，用let和const代替
    "no-use-before-define": [2, "nofunc"],                                              // 使用前未定义
    "no-extra-parens": 2,                                                               // 多余的括号
    "no-extra-semi": 2,                                                                 // 多余的分号
    "eqeqeq": 2,                                                                        // 必须使用全等
    'semi': [2, "always"],                                                              // 语句强制分号结尾
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,                       // 禁止使用debugger
    "no-dupe-args": 2,                                                                  // 参数重复
    "no-dupe-keys": 2,                                                                  // 对象属性重复
    "no-duplicate-case": 2,                                                             // case重复
    "no-unreachable": 2,                                                                // 不可能执行到的代码
    "no-unexpected-multiline": 2,                                                       // 行尾缺少分号可能导致一些意外情况
    "no-sparse-arrays": 2,                                                              // 数组中多出逗号
    "no-shadow-restricted-names": 2,                                                    // 关键词与命名冲突
    "no-undef": 2,                                                                      // 变量未定义
    "no-unused-vars": 2,                                                                // 变量定义后未使用

  }
};
