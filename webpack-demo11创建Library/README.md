# [创建 Library](https://doc.webpack-china.org/guides/author-libraries/)

#变动
>   新建ref.json文件

>   修改main.js

>   安装CleanWebpackPlugin插件  cnpm install --save clean-webpack-plugin 



#构建命令
```bash

//初始化npm
cnpm init -y

//安装webpack与lodash模块到dependencies
cnpm install --save webpack lodash

//安装CleanWebpackPlugin插件
cnpm install --save clean-webpack-plugin 

//构建
cnpm run build
```

#控制library对外暴露方式
```bash

    libraryTarget:'var':     遍历：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
    libraryTarget:'this'：    通过 this 对象访问（libraryTarget:'this'）。
    libraryTarget:'window'：  通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
    libraryTarget:'umd'：     在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。

    如果设置了 library 但没设置 libraryTarget，则 libraryTarget 默认为 var，
```
