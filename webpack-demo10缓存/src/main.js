import  _ from "lodash";
import print from './print.js';
if (process.env.NODE_ENV === 'production') {
    console.log('当前环境是生产环境!');
} else {
    console.log('当前环境是开发环境!');
}
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['你好', 'webpack'], ' ');

    element.onclick = print.bind(null,'按钮点击了');
    return element;
}

document.body.appendChild(component());