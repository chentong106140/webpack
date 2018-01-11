/**
 * Created by cherish on 2018/1/10.
 */

var path = require('path');

module.exports = {
    //公共配置
    build:{
        //生产环境配置环境变量
        env: {NODE_ENV: '"production"'},
        //dist目录地址
        assetsRoot: path.resolve(__dirname, '../dist'),
        //项目根目录
        baseRoot:path.resolve(__dirname, '../'),
        //输出文件名称
        filename:'webpack-numbers.js',
        //异步文件输出名称
        chunkFilename:'[id].[name].[chunkhash].bundle.js'
    },
    //开发环境配置
    dev:{
        
    },
    //生产环境配置
    prod:{
        
    }
};