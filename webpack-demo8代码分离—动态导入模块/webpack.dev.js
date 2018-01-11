/**
 * Created by cherish on 2018/1/9.
 */

//对象合并插件
const merge = require('webpack-merge');
//调用公共配置文件
const common = require('./webpack.common.js');

//自己特有的配置
module.exports = merge(common, {
    devtool: 'inline-source-map',
    //修改代码的同时，浏览器自动刷新
    //告诉开发服务器(dev server)，在哪里查找文件：
    //能够自动刷新浏览器,前提是安装npm install --save-dev webpack-dev-server
    //同时需要在package.json文件中scripts下面加入"start": "webpack-dev-server --open"
    //使用cnpm start
    devServer: {
        contentBase: './dist'
    }
});
