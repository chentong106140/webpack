# [渐进式网络应用程序-离线应用程序](https://doc.webpack-china.org/guides/progressive-web-application/)

>   一：

>   安装http-server包  cnpm i --save http-server

>   在package.json添加一个 start 脚本

>   然后执行命令 cnpm start,此时可以按照日志输出的地址进行访问我们在dist下面创建的服务

>   但是我们在命令行使用Ctrl+C就会断开服务，此时浏览器再刷新就无法使用了

>   二：如何离线运行服务

>   添加 workbox-webpack-plugin 插件    cnpm install workbox-webpack-plugin --save

>   修改webpack.common.js文件，添加WorkboxPlugin插件配置

>   此时我们再运行cnpm run build

>   生成了 2 个额外的文件：sw.js

>   此时在main.js文件中添加部分代码

>   我们再运行cnpm run build进行将刚刚在main.js模块中添加的代码进行部署

>   我们再执行cnpm start

>   我们到浏览器访问，此时控制台会输出 SW registered:。。。。

>   此时我们为了验证离线是否依然运行，使用Ctrl+C断开服务器

>   我们会发现，服务依然可以运行，通过检查发现，其实它吧代码都缓存在客户端的数据库中了






#   构建命令
```bash
//删除node_modules包

//执行安装
cnpm install


//安装http-server包
cnpm i --save http-server


//构建
cnpm run build

```

