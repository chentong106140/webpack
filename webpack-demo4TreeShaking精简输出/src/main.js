var x = require("./test.js");
//从math.js导入cude方法，但是square方法并没有被导入，主要目的是让square成为未被引用代码，也就说应该会删除掉未被引用的代码
import {cube} from './math.js';

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to '+  cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());


if (module.hot) {
    console.log("进入模块热部署！")
}


