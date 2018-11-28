 
 ///////////////////////////////////////////////////////////////////////////////////////////

 /* IFrame 加载页面，并自适应大小，方法一：
  1. 调用changeFrameHeight 在iFrame的onLoad事件;
  2. 脚本初始化 定义window.onSize事件
    window.onresize=function() {  
        changeFrameHeight('showWindow',75);  
    } 
  3. a标签onclick调用frameLoadSub
 */

 /*iframe高度自适应，参考自：https://www.cnblogs.com/rogge7/p/7762052.html*/
 function changeFrameHeight(frameId,offsetHeight){
    var ifm= document.getElementById(frameId); 
    if(ifm)
        ifm.height=document.documentElement.clientHeight-offsetHeight;
}

function frameLoadSub(frameid,file) {
    var frame = document.getElementById(frameid);
    frame.src=file;
}

 ///////////////////////////////////////////////////////////////////////////////////////////
 /* 方法二：
    直接在a标签的onclick事件中，调用frameLoadSub2
 */
function frameLoadSub2(frameid,file,offsetHeight) {
    var frame = document.getElementById(frameid);
    changeFrameHeight(frameid,offsetHeight);
    frame.src=file;
}
////////////////////////////////////////////////////////////////////////////////////////////
