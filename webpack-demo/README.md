# [TypeScript](https://doc.webpack-china.org/guides/typescript/)

#变动

>   新增ProvidePlugin插件，目的是自动打包某个变量所在的模块

#imports-loader案例
>   新增module.rules规则，目的是将模块中的this指向window，默认this也是指向的是window,但是在CommonJS 环境下，this指向的是module.exports

>   方法一：

>   使用require("imports-loader?this=>window!./main.js");

>   注意点：如上这种方式import不能在main.js中写，虽然打包成功，但是会生成两个main.js代码，也就是不能在当前文件中import-loader当前文件

>   方法二：

>   webpack配置文件中rules规则中添加

>   安装cnpm install --save imports-loader模块用于imports-loader

#exports-loader案例
>   新建globals.js文件，通过imports-loader配置将该库导出对象，不用修改globals.js源码，否则还得手动在该文件内写export xxxx;

>   方法一：
>   使用var { file, parse } = require("exports-loader?file,parse=helpers.parse!./globals.js")

>   方法二：

>   webpack配置文件中rules规则中添加

//globals文件的作用是模拟以前封装library的时候的写法，老旧的库

//该库其目的其实是为了在全局window下创建两个全局变量file与helpers，供其他人使用

//但是如果在webpack环境中，import或者require是拿不到这两个对象的，

//这时候，就需要我们在webpack配置文件中添加规则，手动将这两个对象进行导出，

//目的：为了让其他模块通过import或require引用当前库的代码

>   如果执行了如上操作，就可以在main.js模块中通过import进行导入


#   加载 polyfills库 兼容旧版本浏览器，判断是否加载polyfills.js库

>   安装cnpm i --save babel-polyfill

>   安装cnpm i --save whatwg-fetch

>   polyfills.js库的作用是专门解决旧版浏览器不支持ES5,ES6新特性的库

>   我们要做的工作是对于旧版的浏览器，我们加载polyfills.js库，

>   对于最新版本的浏览器，我们就不需要加载polyfills.js库,这样对于最新浏览器来说也提高了性能

>   本案例中也提供了这种需求的讲解

>   一:创建polyfills.js文件，该文件主要import那些专门用于兼容旧版本浏览器的兼容模块，类似于json2.js

>       为什么不把这两个import放在main.js呢?因为对于旧版浏览器，我们把他写在我们开发的模块中，完全没有意义

>       但是，对于新版浏览器来说，这就是个问题了，新版浏览器本来就支持这些特性，根本不用他去兼容，

>       更重要的问题是，这些兼容代码文件大小很大，导致新版浏览器也要下载这些文件，所以浏览器体验性能也有所降低

>       所以为什么我们要单独把他放在一个模块中，我们只管引用，无需关注里面的变量，直接import 'babel-polyfill'  就好了

>   二：在webpack配置文件中新增entry入口 polyfills: './src/polyfills.js',

>   三：在我们需要兼容旧版浏览器的html中加入判断逻辑，什么时候加载上面引用的兼容模块，什么时候不加载

>   如下就是判断是否兼容的代码案例
```bash
<script>
    //该值为Boolean类型
    //用于判断浏览器是否是新版浏览器，或者说是否兼容里面下面括号()内的具体特性
    var modernBrowser = (
        //判断当前浏览器下的window下面是否存在fetch函数，
        // 如果存在就返回true，但是整体的值并没有返回给modernBrowser，将继续判断'assign' in Object,以它返回的值为准
        //如果不存在就返回false,当&&前面返回的是false时，就不去考虑&&后面的'assign' in Object的返回值，将整体返回值为false给modernBrowser
        'fetch' in window &&
        //如果&&前面返回的是true，将继续判断'assign' in Object，最终整体的返回值依据他
        //assign是ES6中Object的属性，目的是判断是否兼容ES6
        'assign' in Object
    );

    //如果不兼容，将下载我们的兼容模块代码，此模块代码是我们通过webpack打包生成好的文件
    if (!modernBrowser) {
        var scriptElement = document.createElement('script');

        scriptElement.async = false;
        scriptElement.src = '/polyfills.bundle.js';
        document.head.appendChild(scriptElement);
    }
</script>
```






#构建命令
```bash
//安装webpack-merge插件
cnpm install --save webpack-merge

//安装HtmlWebpackPlugin插件
cnpm install --save html-webpack-plugin

//安装imports-loader
cnpm install --save imports-loader

//安装exports-loader
cnpm install --save exports-loader

//安装babel-polyfill
cnpm i --save babel-polyfill

//安装
cnpm i --save whatwg-fetch

//构建
cnpm run build

```

