
//导出默认对象
 function log(x) {
    console.log("module2.js---",(new Date()).toLocaleTimeString(),x);
}
log("运行module2.js");
export default  log;


 