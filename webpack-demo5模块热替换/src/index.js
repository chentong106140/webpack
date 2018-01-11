import _ from 'lodash';
import printMe from './print.js';
import './style.css';
var x = require("./test.js");

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    x.log("测试");
    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
    //当xhr模块热替换开启时，如果print.js文件发生改变，会进入如下方法
    module.hot.accept('./print.js', function () {
        console.log('print.js模块发生改变，将自动部署......');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    });
    module.hot.accept('./test.js',function () {
        console.log("test.js模块发生改变，将自动部署......");
        x.log("热模块应用成功！")
    });
}