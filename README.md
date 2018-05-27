# zy_b2b_web


## Build Setup

``` bash
//安装项目依赖
npm i -D || yarn install

//本地测试开发
npm run dev || yarn dev

//打包生成正式环境包 dist文件夹
npm run build || yarn build

npm run build --report
```

## 初始化仓库
### 1.开发时请自己独立开出分支开发，然后往master分支合并，每次上传前先更新master分支确保主分支是最新的代码然后push自己分支合并。
### 2.默认使用Eslint 开发统一代码风格。
### 3.资源文件夹：资源统一放在项目根目录 scr 下，根据类型存放（不要使用拼音命名，中文命名）。
#### 公用组件： /src/components （可自行添加）
#### 视图页面： /src/views （按照功能模块添加相应文件夹）
#### 基本配置： /src/config
     接口
     /src/config/api
     接口路径
     /src/config/api_path
     请求封装
     /src/config/fetch
     
#### Vuex配置： /src/store
#### .eslintrc.js 默认添加的配置
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
          'html'
        ],
        // add your custom rules here
        'rules': {
          // allow paren-less arrow functions
          'arrow-parens': 0,
          // allow async-await
          'generator-star-spacing': 0, // 生成器函数*的前后空格
          // allow debugger during development
          'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用debugger
          'semi': [2, "always"], // 语句强制分号结尾
          "no-var": 0, //禁用var，用let和const代替
          "eqeqeq": 2, //必须使用全等
        }
      };
#### .eslintignore 设置忽略eslint检查的文件
      build/*.js
      config/*.js
      # 忽略过滤器eslint检查
      src/filters/*.js
#### 禁用 ESLint：
     /* eslint-disable */
     var a = 100;
     console.log(a);  
     /* eslint-enable */
#### ESLint禁用一条规则：
      /*eslint-disable no-console */
      var a = 100;
      console.log(a);
      /*eslint-enable no-console */
#### ESLint调整规则：
      /* eslint no-console:0 */
      var a = 100;
      console.log(a);            
          
     
#####测试git代码提交
