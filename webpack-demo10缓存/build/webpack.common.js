/**
 * Created by cherish on 2018/1/9.
 */


const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var config = require('../config/config');

module.exports = {
    entry: {
        //路径./在这里代表的是项目根路径,它不受webpack文件路径所影响
        main: './src/main.js',
        vendors: [
            'lodash'
        ]
    },
    plugins: [
        //运行之前删除dist目录
        //如下路径配置是依据当前webpack文件路径为当前路径的，所以需要改成绝对路径，不能写成相对路径
        new CleanWebpackPlugin(["dist"], {
            root: config.build.baseRoot,       　//根目录
            verbose: true,        　　　　　　　　 //开启在控制台输出信息
            dry: false,        　　　　　　　　　　 //启用删除文件
            exclude: []                         ///排除不删除的目录，主要用于避免删除公用的文件
        }),
        //发布之后，在输出目录生成index.html文件，并且标题指定为Code Splitting
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin(),
        //将在入口entry配置的vendors模块下所有的公共模块都打包到，以入口配置的模块名称vendors进行命名
        //将公共模块都打包到vendors.bundle.js中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // 指定公共 vendor 的名称。
        }),
        //如果多个模块中都公用了某些模块的代码，就将这些公共模块都打包到runtime.bundle.js文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime' // 指定公共 bundle 的名称。
        })
    ],
    output: {
        //指定在入口entry配合的模块的生成文件名称规则
        filename: config.build.filename,
        //指定文件生成之后的路径，如果不配置，默认就在项目根路径
        path: config.build.assetsRoot,
        //chunkFilename决定非入口 chunk 的名称，也就是我们动态加载模块的文件的id名，一般会是0,1,2,3,4....
        //决定那些没有在entry入口配置的模块文件名称，只有需要按需加载(异步)模块的时候的模块文件名会根据如下规则生成文件名
        chunkFilename: config.build.chunkFilename,
    }
}
;
