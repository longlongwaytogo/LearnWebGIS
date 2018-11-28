 
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

function setAuthorization(Leaflet,map)
{
   
    var tileAddress = 'https://api.mapbox.com/styles/v1/yqcim/';
    tileAddress += 'cizh1ma3400ez2so5x1anhuzo/tiles/256/{z}/{x}/{y}';
    tileAddress += '?access_token=pk.eyJ1IjoieXFjaW0iLCJhIjoiY2l6ZmhnZjEx';
    tileAddress += 'MDBhajJ4cGxnNGN5MnhpdCJ9.pcZtdfk8mSFboCdwqkvW6g';
    
    var attribution = 'Map data &copy; <a href="http://openstreetmap.org">';
    attribution += 'OpenStreetMap</a> contributors, ';
    attribution += '<a href="http://creativecommons.org/licenses/by-sa/2.0/">';
    attribution += 'CC-BY-SA</a>, ';
    attribution += 'Imagery © <a href="http://mapbox.com">Mapbox</a>';

    
    Leaflet.tileLayer(tileAddress, {
        maxZoom: 18,
        attribution: attribution,
        id: 'mapbox.streets'
        }).addTo(map);
}

function getTileAddress()
{
    // var tileAddress = 'https://api.mapbox.com/styles/v1/yqcim/';
    // tileAddress += 'cizh1ma3400ez2so5x1anhuzo/tiles/256/{z}/{x}/{y}';
    // tileAddress += '?access_token=pk.eyJ1IjoieXFjaW0iLCJhIjoiY2l6ZmhnZjEx';
    // tileAddress += 'MDBhajJ4cGxnNGN5MnhpdCJ9.pcZtdfk8mSFboCdwqkvW6g';
    var tileAddress = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    return tileAddress;
}

function getAttribution()
{
    var attribution = 'Map data &copy; <a href="http://openstreetmap.org">';
    attribution += 'OpenStreetMap</a> contributors, ';
    attribution += '<a href="http://creativecommons.org/licenses/by-sa/2.0/">';
    attribution += 'CC-BY-SA</a>, ';
    attribution += 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
    
    return attribution;
}