/**
 * Created by cherish on 2018/1/10.
 */

var path = require('path');

module.exports = {
    //公共配置
    build:{
        env: {NODE_ENV: '"production"'},
        assetsRoot: path.resolve(__dirname, '../dist'),
        baseRoot:path.resolve(__dirname, '../'),
        filename:'[name].[chunkhash].bundle.js',
        chunkFilename:'[id].[name].[chunkhash].bundle.js'
    },
    //开发环境配置
    dev:{
        
    },
    //生产环境配置
    prod:{
        
    }
};