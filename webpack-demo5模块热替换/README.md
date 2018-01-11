# [模块热部署](https://doc.webpack-china.org/guides/hot-module-replacement)

本案例主要讲解模块热部署：

# webpack.config.js
```js
devServer: {
        contentBase: './dist',
        hot: true
    }


plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
]

 output: {
        //[name]会使用在入口entry中定义的属性名称作为参数传入
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }



    module: {
        rules: [
            //处理css文件规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

```


# package.json 
```json
"scripts": {
    "start": "webpack-dev-server --hotOnly",
  }

```

index.js
```js
if (module.hot) {
    //当xhr模块热替换开启时，如果print.js文件发生改变，会进入如下方法
    module.hot.accept('./print.js', function () {
        console.log('print.js模块发生改变，将自动部署......');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    });
    module.hot.accept('./test.js',function () {
        console.log("test.js模块发生改变，将自动部署......");
        x.log("热模块应用成功！")
    });
}
```



#测试方式

使用webpack-dev-server模式
```bash
cnpm run start

```





# package.json ---> scripts
  "build": "webpack",                       发布模式 cnpm run build 
  
  "watch": "webpack --watch",               观察者模式 cnpm run watch
  
  "start": "webpack-dev-server --open"      建立服务模式，时时更新代码到浏览器 cnpm start
  
# 模式
  webpack's Watch Mode  观察者模式   修改代码，自动发布，需要手动刷新浏览器
  
  webpack-dev-server    服务模式    修改代码，自动部署，自动更新代码到浏览器 使用http://localhost:8080/访问
  
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