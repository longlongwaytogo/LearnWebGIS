// // cesium 链接的切换
// (function() {
//   /* eslint-disable no-var */
//   var mode = window.location.href.match(/mode=([a-z0-9\-]+)\&?/i);
//   var isDev = mode && mode[1] === 'dev';
//   window.IS_DEV = isDev;
//   var cs = isDev ? 'CesiumUnminified/Cesium.js' : 'Cesium/Cesium.js';

//   window.CESIUM_URL = `../node_modules/@camptocamp/cesium/Build/${cs}`;
//   if (!window.LAZY_CESIUM) {
//     document.write(`<scr${'i'}pt type="text/javascript" src="${window.CESIUM_URL}"></scr${'i'}pt>`);
//   }

//   /* eslint-enable no-var */
// })();

/**
 * HTML动态加载js
 * @path {String} src地址必须带有后缀名.js
 * @callback {Function} 加载成功的回掉函数
 * */
var cache=[];
function addJs(path,callback){
    var flag=0;//检查是否加载的状态
    for(var i=cache.length;i--;){
        cache[i]==path?flag=1:flag=0;
    }
    if(flag){//如果已经加载则不加载    
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    head.appendChild(script);
    script.onload = /*script.onreadystatechange =*/ function() {/*判断是否加载成功*/
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
        script.onload = script.onreadystatechange = null;
        console.log("js load:" + this.readyState);
            callback(); 
        }
    };
    cache.push(path);//把加载过的存起来
}

function addCss(path,callback){
    var flag=0;//检查是否加载的状态
    for(var i=cache.length;i--;){
        cache[i]==path?flag=1:flag=0;
    }
    if(flag){//如果已经加载则不加载    
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    head.appendChild(link);
    link.onload = /*link.onreadystatechange = */function() {/*判断是否加载成功*/
    
        link.onload = null;
            console.log("css load:" + this.readyState);
            callback(); 
        
    };
    cache.push(path);//把加载过的存起来
}

var use_loc_js_css = false; 
function LoadCesium(use_loc_js_css,callback) {

    var totoalFile  = 2;
    var loadCount = 0;
    function _cbk(fillCount) {
        
        if(++loadCount>= totoalFile) {
            callback();
        }
       
    }
    if(use_loc_js_css) {
        addJs("./lib/cesium/cesium.js",_cbk)
        addCss("./lib/cesium/cesiumWidget.css",_cbk);
    }
    else {
    addJs("https://cesiumjs.org/releases/1.57/Build/Cesium/Cesium.js",_cbk);
    addCss("https://cesiumjs.org/releases/1.57/Build/Cesium/Widgets/widgets.css",_cbk);
    }
}
