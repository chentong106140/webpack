import _ from 'lodash';
import printMe from './print.js';
var x = require("./test")

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

document.body.appendChild(component());