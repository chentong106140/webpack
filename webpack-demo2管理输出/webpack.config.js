/**
 * Created by cherish on 2018/1/8.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    //入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        //该插件作用是在每次执行cnpm run build构建命令之后，对应目录下所有的文件都会被删除，保证该目录生成的文件是最新的，同时一些没有用到的文件也不用维护
        new CleanWebpackPlugin(['dist']),
        //添加HtmlWebpackPlgin插件
        //HtmlWebpackPlugin插件会在dist目录下创建了一个全新的文件，所有的 自动生成的bundle文件 会全部自动添加到 新建的html 中
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        //该插件可以显示出编译之前的文件和编译之后的文件的映射
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: path.resolve(__dirname, 'dist')+"\\",
        })
    ],
    //输出
    output: {
        //[name]会使用在入口entry中定义的属性名称作为参数传入
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};