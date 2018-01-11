let x = require("./test.js")

export default function printMe() {
    //生成一个错误
    x.log('I get called from print.js!');
}