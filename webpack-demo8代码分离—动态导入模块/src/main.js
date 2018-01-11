//从math.js导入cude方法，但是square方法并没有被导入，主要目的是让square成为未被引用代码，也就说应该会删除掉未被引用的代码

if (process.env.NODE_ENV === 'production') {
    console.log('当前环境是生产环境!');
} else {
    console.log('当前环境是开发环境!');
}

/**
 * 返回 Promise对象
 * @returns {Promise.<T>}
 */
function getCmponent() {

    var button = document.createElement('button');
    button.innerHTML = "点我！！！";

    //import方法返回的是Promise对象
    let promise = import("./module1.js").then(({default: log, info, error}) => {
        //module1.js模块动态加载成功，就会执行then方法
        //模块加载进来同时输入3个对象，一个是默认对象,另外两个是info,error
        //使用({default:log,info,error}),其实就是对象拆箱，将default属性改名为log
        log("LOG:动态加载test.js完成");
        info("INFO:动态加载test.js完成");
        error("ERROR:动态加载test.js完成");
        //在按钮的点击事件中进行动态加载模块
        button.onclick = function (event) {
            //import()方法返回的是Promise对象
            let promise_ = import("./module2.js").then(function (myModule) {
                //module2.js模块动态加载成功，就会进入then方法
                //module2.js模块默认输出的只有一个default对象，这里直接调用default
                myModule.default("按钮点击！");
                return true;
            }).catch(function (error) {
                log("加载模块进入catch方法，加载失败---" + error.message);
                return false;
            });

            //Promise对象的then方法才能取到我们在加载成功方法中返回的值
            promise_.then(boolean => {
                if (boolean === true) {
                    log("按钮动态加载模块成功！");
                } else {
                    log("按钮动态加载模块失败！");
                }
            });
        };
        //返回Button对象
        return button;
    }).catch(error => {
        //module1.js模块动态加载失败，就会执行catch方法
        console.log("catch:动态加载错误" + error.message);
        button.onclick = function (event) {
            console.log("catch:动态加载错误" + error.message);
        };
        return button;
    });
    //返回Promise对象
    return promise;
}

//拿到Promise对象之后，调用then执行成功方法
//Promise对象的then方法才能取到我们在加载成功方法中返回的值
getCmponent().then(button => {
    document.body.appendChild(button);
});


//一下方法是模拟import()加载的过程

/**
 * 该方法模拟一个需要等待一段时间才能执行完成的方法
 * @param startTime 开始时间
 * @param ms        执行时间
 * @returns {Promise}
 */
function timeout(startTime, ms) {
    //这里new 了一个Promise对象，该对象只有一个参数，该参数是一个函数，
    //该函数接收两个参数，
    // 第一个参数就是resolve，他的作用就是Promise执行成功之后就会执行这个resolve方法
    //第二个参数就是失败方法，如果Promise还行失败，就会调用失败方法，此处
    return new Promise(function (success, error) {
        setTimeout(function () {
            console.log("异步成功", startTime);
            //模拟异步获取到的值
            var endTime = (new Date()).toLocaleTimeString();
            //模拟异步获取值失败
            try {
                //throw new Error("模拟异常");
                success({startTime, endTime});
            } catch (e) {
                error(e);
            }


        }, ms);
    });
}
/**
 * async 写在前面，代表下面的方法是一个异步方法
 * await 写在前面，代表下面的方法需要执行一个异步操作
 * @param startTime
 * @param ms
 * @returns {Promise.<*>}
 */
async function asyncPrint(startTime, ms) {
    return await timeout(startTime, ms);
}
let startTime = (new Date()).toLocaleTimeString();

asyncPrint(startTime,5000).then(function (data) {
    console.log("then", data.startTime, data.endTime);
}).catch(function (error) {
    console.log("catch", error.message);
});

