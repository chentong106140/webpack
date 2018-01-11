var x = require("./test.js");
//从math.js导入cude方法，但是square方法并没有被导入，主要目的是让square成为未被引用代码，也就说应该会删除掉未被引用的代码
import {cube} from './math.js';
import _ from 'lodash';

if (process.env.NODE_ENV === 'production') {
    console.log('当前环境是生产环境!');
}else{
    console.log('当前环境是开发环境!');
}

function component() {
    var element = document.createElement('pre');
    element.innerHTML = _.join([
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ], '\n\n');
    x.log("启动完成！");
    return element;
}
document.body.appendChild(component());


