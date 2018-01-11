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
    devServer: {
        contentBase: './dist'
    }
});
