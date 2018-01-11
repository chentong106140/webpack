/**
 * Created by cherish on 2018/1/8.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    //入口
    entry: {
        app: './src/index.js',
    },
    //将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你
    //不推荐在生产环境加入该配置
    //亲测发现只支持chrome浏览器有用
    //前提是需要在package.json文件中scripts下面加入"watch": "webpack --watch"
    //使用cnpm run watch 开启此开发模式
    devtool: 'inline-source-map',
    //修改代码的同时，浏览器自动刷新
    //告诉开发服务器(dev server)，在哪里查找文件：
    //能够自动刷新浏览器,前提是安装npm install --save-dev webpack-dev-server
    //同时需要在package.json文件中scripts下面加入"start": "webpack-dev-server --open"
    //使用cnpm start
    devServer: {
        contentBase: './dist',
        hot: true
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
            basePath: "/dist/",
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    //输出
    output: {
        //[name]会使用在入口entry中定义的属性名称作为参数传入
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
		//用于启动server服务所需配置
        publicPath: '/'
    },
    module: {
        rules: [
            //处理css文件规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};