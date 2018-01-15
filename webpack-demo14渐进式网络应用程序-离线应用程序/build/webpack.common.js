/**
 * Created by cherish on 2018/1/9.
 */


const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        //路径./在这里代表的是项目根路径,它不受webpack文件路径所影响
        main: './src/main.js',
        //专门用于兼容旧版浏览器的模块
        polyfills: './src/polyfills.js',
        //将公共插件模块定义在下面，目的是指明哪些公共插件模块要打包到公共插件vendors.bundle.js文件中
        vendors: ['lodash'],
    },
    output: {
        //指定在入口entry配合的模块的生成文件名称规则
        filename: config.build.filename,
        //指定文件生成之后的路径，如果不配置，默认就在项目根路径
        path: config.build.assetsRoot,
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
            title: 'Progressive Web Application'
        }),
        new webpack.HashedModuleIdsPlugin(),
        //将在入口entry配置的vendors模块下所有的公共模块都打包到，以入口配置的模块名称vendors进行命名
        //将公共模块都打包到vendors.bundle.js中
        //注意两个CommonsChunkPlugin插件定义的顺序
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // 指定公共 vendor 的名称。
        }),
        //如果多个模块中都公用了某些模块的代码，就将这些公共模块都打包到runtime.bundle.js文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime' // 指定公共 bundle 的名称。
        }),
        //通过直接写模块的变量，自动打包该模块
        new webpack.ProvidePlugin({
            //如果遇到了至少一处用到 lodash 变量 _ 的模块实例，就会将 lodash package 包引入进来，并将其提供给需要用到它的模块。
            //_: 'lodash'
            //上面的直接这么写的话，会导致打包整个lodash模块的代码
            //下面的这么写，作用是只引用lodash模块中的join方法，好处是，除了join方法lodash模块其他部分代码都去除，节省打包代码量
            //如果需要更多方法的话，直接在下面的数组后面继续扩展，例如['lodash','join','split']
            join: ['lodash', 'join']
        }),
        new WorkboxPlugin({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    module: {
        //一些传统的模块依赖的 this 指向的是 window 对象
        //当模块运行在 CommonJS 环境下这将会变成一个问题，也就是说此时的 this 指向的是 module.exports
        //所以imports-loader的作用就是将this指向window对象
        rules: [
            {
                //imports-loader导入案例
                //找到需要导入this指向的模块
                test: require.resolve('../src/main.js'),
                //修改指向
                //需要安装cnpm install --save imports-loader模块
                use: 'imports-loader?this=>window'
            },

        ]
    }
}
;
