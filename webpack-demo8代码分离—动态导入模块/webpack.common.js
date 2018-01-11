/**
 * Created by cherish on 2018/1/9.
 */


const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //chunkFilename决定非入口 chunk 的名称，也就是我们动态加载模块的文件的id名，一般会是0,1,2,3,4....
        chunkFilename: '[name].bundle.js',
    }
}
;
