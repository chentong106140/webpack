if (process.env.NODE_ENV === 'production') {
    console.log('当前环境是生产环境!');
} else {
    console.log('当前环境是开发环境!');
}
function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = '点击我查看控制台!';
    element.appendChild(button);
    element.appendChild(br);

    //写法一：
    button.onclick = function (e) {
        //模拟懒加载，按需加载print模块
        import('./print').then(function (module) {
            var print = module.default;
            print(e);
            console.dir(module);
        });
        import("lodash").then((_) => {
            var br = document.createElement('br');
            var button = document.createElement('button');
            button.innerHTML = _.join(['你好', 'webpack',(new Date()).getTime()], ' ');
            document.body.appendChild(br);
            document.body.appendChild(button);
           
        });
    };

    //写法二：
    //模拟懒加载，按需加载print模块
   /* button.onclick = e => import("./print").then((module) => {
        var print = module.default;
        print(e);
        console.dir(module);
    });*/

    
    return element;
}

document.body.appendChild(component());