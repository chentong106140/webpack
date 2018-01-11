# [开发模式](https://doc.webpack-china.org/guides/development)

>使用本案例之前，请删除node_modules目录，执行cnpm install，再执行构建命令



# package.json ---> scripts
  "build": "webpack",                       发布模式 cnpm run build 
  
  "watch": "webpack --watch",               观察者模式 cnpm run watch
  
  "start": "webpack-dev-server --open"      建立服务模式，时时更新代码到浏览器 cnpm start
  
# 模式
  webpack's Watch Mode  观察者模式   修改代码，自动发布，需要手动刷新浏览器
  
  webpack-dev-server    服务模式    修改代码，自动部署，自动更新代码到浏览器 使用http://localhost:8080/访问
  ```bash
  cnpm start
  ```
  
  webpack-dev-middleware 中间件容器模式 与服务模式一样，只不过可以自定义访问端口 使用http://localhost:3000/访问
  ```bash
  //一：安装webpack-dev-middleware
  npm install --save-dev express webpack-dev-middleware
  
  
  //二：webpack.config.js 添加
  output: {
          publicPath: '/'
      }
  
  //三：添加server.js文件 ， 文件内容如下
  const express = require('express');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  
  const app = express();
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
  }));
  
  // Serve the files on port 3000.
  app.listen(3000, function () {
      console.log('Example app listening on port 3000!\n');
  });
  
  
  //四：添加运行服务，在package.json文件中的scripts下
  "server": "node server.js"
  
  //五：运行npm run server
  
  ```