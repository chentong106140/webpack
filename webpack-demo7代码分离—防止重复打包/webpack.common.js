/**
 * Created by cherish on 2018/1/9.
 */


const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        another: './src/another-module.js'
    },
    plugins: [
        //运行之前删除dist目录
        new CleanWebpackPlugin(['dist']),
        //发布之后，在输出目录生成index.html文件，并且标题指定为Code Splitting
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        //该插件主要用于可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
        //防止多个模块重复引用引用了同一个模块都打包到*.bundle.js文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
;
