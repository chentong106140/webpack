//该文件的作用是模拟以前封装library的时候的写法，老旧的库
//如下写法，其目的其实是为了在全局window下创建两个全局变量file与helpers
//但是如果在webpack环境中，import或者require是拿不到这两个对象的，
//这时候，就需要我们在webpack配置文件中添加规则，手动将这两个对象进行导出，
//目的：为了让其他模块通过import或require引用当前库的代码

var file = 'file变量导出成功.txt';
var helpers = {
    test: function() { console.log('test 导出成功'); },
    parse: function() { console.log('parse 导出成功！'); }
}
