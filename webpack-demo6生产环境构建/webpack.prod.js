/**
 * 
 * Created by cherish on 2018/1/9.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    //将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你
    devtool: 'source-map',
    plugins: [
        //生成环境添加代码精简插件，代码压缩插件
        //避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
        new UglifyJSPlugin({sourceMap: true}),
        new webpack.DefinePlugin({
            //配置环境变量process.env.NODE_ENV等于production
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
    
});
