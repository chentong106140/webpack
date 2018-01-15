webpackJsonp([2],{

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(join) {/*** IMPORTS FROM imports-loader ***/
(function() {



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

}.call(window));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("dLdd")["join"]))

/***/ })

},["NHnr"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7O0FBRUEsQ0FBQyxlIiwiZmlsZSI6Im1haW4uZDFmNGU2MjQ3MDliOWFlOWM0ZGMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuKGZ1bmN0aW9uKCkge1xuXG5cclxuXHJcbi8v6buY6K6kY29tcG9uZW505piv5qih5Z2X5YaF55qE5a+56LGh77yM5LiN5bGe5LqOd2luZG935LiL6Z2i77yM5aaC5p6c5biM5pyb5a2Y5Zyod2luZG935LiL6Z2i77yM6ZyA6KaB5omL5Yqo6LWL5YC8XHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBqb2luKFsn5L2g5aW9JywgJ3dlYnBhY2snXSwgJyAnKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG50aGlzW1wiTXlMaWJcIl0gPSB7Y29tcG9uZW50fTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLk15TGliLmNvbXBvbmVudCgpKTtcclxuXHJcbiBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgIH0pLmNhdGNoKHJlZ2lzdHJhdGlvbkVycm9yID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnU1cgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgcmVnaXN0cmF0aW9uRXJyb3IpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgIH0pO1xyXG4gICAgIH1cclxuXG59LmNhbGwod2luZG93KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gTkhuclxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9