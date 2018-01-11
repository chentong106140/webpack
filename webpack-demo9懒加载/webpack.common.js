/**
 * Created by cherish on 2018/1/9.
 */


const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    plugins: [
        //运行之前删除dist目录
        new CleanWebpackPlugin(['dist']),
        //发布之后，在输出目录生成index.html文件，并且标题指定为Code Splitting
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        //防止重复打包插件---如果多个模块导入了同一个模块，那么就可以将打包到公共模块中，name是公共模块文件命名
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ],
    output: {
        //指定在入口entry配合的模块的生成文件名称规则
        filename: '[name].bundle.js',
        //指定文件生成之后的路径，如果不配置，默认就在项目根路径
        path: path.resolve(__dirname, 'dist'),
        //chunkFilename决定非入口 chunk 的名称，也就是我们动态加载模块的文件的id名，一般会是0,1,2,3,4....
        //决定那些没有在entry入口配置的模块文件名称，只有需要按需加载(异步)模块的时候的模块文件名会根据如下规则生成文件名
        chunkFilename: '[id].[name].bundle.js',
    }
}
;
