# [代码分离-防止重复打包](https://doc.webpack-china.org/guides/code-splitting/)

>   新建another-module.js文件   目的是为了演示该模块引用了一个lodash模块，main.js模块中也引用了同一个模块，

>   这样就造成一个问题就是所有模块中重复引用的模块，都会被打包到*.bundle.js文件中，这样就造成了重复打包

>   所以可以使用CommonsChunkPlugin插件，可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk

>   在webpack.common.js文件中加入该插件

>   使用cnpm run build_dev发布之后，观察dist目录会发现多生成了一个common.bundle.js文件，他就是将所有模块引用的公共代码都打包在这个文件中

>   main.bundle.js与another.bundle.js文件之后保留自己的模块的代码

>   以上操作，就会发现代码进行分离了




>   在package.json中新增build_dev运行命令，主要目的是为了发布开发模式的代码，用于可以在dist目录里面检查打包之后的文件

```bash
    
    //启动开发模式，并且浏览器时时更新修改代码，缺点是无法观察打包好之后的代码，所以我个人新建了一个build_dev命令，模拟打包开发环境代码
    cnpm run start
    
    //使用这个测试开发模式
    cnpm run build_dev
```
