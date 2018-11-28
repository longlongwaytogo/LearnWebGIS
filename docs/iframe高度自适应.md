# iframe高度自适应
### 1. 前言
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在html5 使用iframe标签，height设置为100%,显示结果只有很矮的一点点。需要通过调用脚本进行调整大小。

###2. 具体情境
html代码
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	
		<style>
		
		 a.right{
			display: block;
			text-align: center;
			color:chocolate;
			} 
		</style>
		<script src="js/comm.js" ></script>
	</head>
	<body>
		<div>
			  <a class="right"  href="./index.html">主页</a> 
			<p>这是一个学习WebGIS的主页</p> 
		</div>
		<div >
			<ul>
				<!--a标记没有href 属性，显示的文字不会出现高亮效果，可以添加#做特殊处理，并执行onclick事件-->
				<li><a href="#" onclick=' frameLoadSub2("showWindow","leaflet/leafletjs.html",75)'>Leaflet地图</a> </li>
			</ul>
		</div>
		<div>
			<iframe id="showWindow"  frameborder="0" width="100%" height ="96%"
			sandbox="allow-same-origin allow-scripts allow-top-navigation" ></iframe>
		</div>
	</body>
</html>
```

js代码：
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

