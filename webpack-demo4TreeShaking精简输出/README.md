# [Tree Shaking 精简输出](https://doc.webpack-china.org/guides/development)

>   目的是为了精简那些只有被引用（export 声明输出的）的代码，而没有被引用的代码将会被删除

>   math.js中export了两个输出函数

>   main.js中只import一个输入函数

>   查看app.bundle.js中是否被精简过，是否存在math.js那个没有被使用过的代码，执行正常将会没有那个没有被使用的代码


```bash
    npm i --save-dev uglifyjs-webpack-plugin
    
    //webpack.config.js
    
    plugins: [
       new UglifyJSPlugin()
     ]
    
    
    npm run build
```
