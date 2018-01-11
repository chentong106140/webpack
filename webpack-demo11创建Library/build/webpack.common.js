/**
 * Created by cherish on 2018/1/9.
 */


const path = require('path');
var config = require('../config/config');
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        //路径./在这里代表的是项目根路径,它不受webpack文件路径所影响
        main: './src/main.js',
    },
    output: {
        //指定在入口entry配合的模块的生成文件名称规则
        filename: config.build.filename,
        //指定文件生成之后的路径，如果不配置，默认就在项目根路径
        path: config.build.assetsRoot,
        //对外暴露librlay的模块名称
        library:"webpackNumbers",
        //对外暴露Librlay的规则 ，具体规则详见README.md
        libraryTarget:'umd'
    },
    //外部扩展,作用是打包的时候，不把该模块打包到bundle文件中
    //防止import某模块的时候，webpack也把他打包到bundle文件中，而是在运行时(runtime)再去从外部获取这些扩展依赖
    externals: {
        //添加lodash模块依赖，忽略打包lodash,
        //强制使用者，必须引入lodash模块
        lodash: {
            commonjs: 'lodash',     //commonjs模块中引用该模块的时候，名称叫做lodash
            commonjs2: 'lodash',    //commonjs2模块中引用该模块的时候，名称叫做lodash
            amd: 'lodash',          //amd模块中引用该模块的时候，名称叫做lodash
            root: '_'               //全局变量使用lodash模块的时候，名称叫做_
        }
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
    ]
}
;
