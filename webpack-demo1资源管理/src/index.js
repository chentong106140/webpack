/**
 * Created by cherish on 2018/1/8.
 */
var path = require('path');

import _ from 'lodash';
import './style.css';
import Icon from './Icon.png';
import Data from './data.xml';


function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = path+"<br/>"+path.resolve(__dirname, 'dist');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    //输出Data数据
    console.log(Data);
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());