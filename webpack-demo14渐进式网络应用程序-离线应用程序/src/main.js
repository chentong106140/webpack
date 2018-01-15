

//默认component是模块内的对象，不属于window下面，如果希望存在window下面，需要手动赋值
function component() {
    var element = document.createElement('div');

    element.innerHTML = join(['你好', 'webpack'], ' ');
    return element;
}

this["MyLib"] = {component};
document.body.appendChild(this.MyLib.component());

 if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('/sw.js').then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
     }
