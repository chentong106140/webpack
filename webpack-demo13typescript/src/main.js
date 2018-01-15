//模拟导入老旧的库，老旧的库中是没有export手动导出对象的写法的
//我们这里为什么能通过import导入老旧的库，主要是在webpack配置文件中添加了exports-loader规则
//import { file, parse } from './globals.js';
//写法二：
var {file, parse} = require("exports-loader?file,parse=helpers.parse!./globals.js");


//默认component是模块内的对象，不属于window下面，如果希望存在window下面，需要手动赋值
function component() {
    var element = document.createElement('div');

    element.innerHTML = join(['你好', 'webpack'], ' ');

    //测试是否导入老旧的库成功
    console.log("exports-loader导出测试file", file);
    console.log("exports-loader导出测试parse", parse())

    return element;
}
//默认情况下this指向的是CommonJs环境中的module.exports模块，并不是window对象
//如果我们希望this指向为window，就需要在webpack配置文件中的规则中添加exports-loader修改当前模块的this指向
console.log("imports-loader导入测试this", this, this === window);

//如果在webpack配置文件中添加了exports-loader规则，那么this就等于了window
this["MyLib"] = {component};
document.body.appendChild(this.MyLib.component());



fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    console.dir(response);
    response.json().then(function (json) {
        console.log(this,json);
    })
}).catch(function (error) {
    console.error(error);
    console.error(error.message);
})