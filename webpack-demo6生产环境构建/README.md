# [生产环境构建](https://doc.webpack-china.org/guides/production/)

>   项目中将webpack.config.js文件进行拆分成

>   webpack.common.js   公共配置

>   webpack.dev.js      开发环境配置

>   webpack.prod.js     生产环境配置

>   主要通过webpack-merge插件进行合并配置

>   在package.json中的scripts修改了build与start命令

>   "build": "webpack --config webpack.prod.js"     生产环境启动配置

>   "start": "webpack-dev-server --open --config webpack.dev.js"    开发环境启动配置

>   注意上面的--config 他的作用是启动读取自定义webpack配置文件，默认情况下会读取webpack.config.js文件

>   cnpm run build --define process.env.NODE_ENV="'production'"

>   以上命令可以代替在webpack.prod.js中配置的系统变量

>   总结：

>   本案例主要目的是实现了开发环境与生产环境的分离，开发环境需要的是可以调试，生产环境需要的是代码精简压缩

```bash
    npm install --save-dev webpack-merge
    
    cnpm run build
    
```
