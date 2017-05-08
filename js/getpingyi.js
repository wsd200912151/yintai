function getpingyi(obj){	
 		var commodityMid=$(".commodity-mid",obj);
		var imgs=$(".imgs",commodityMid[0]);
		var img=$("img",imgs[0]);
		var uls=$(".uls",commodityMid[0]);
		var li=$("li",uls[0]);
		var botton=$(".botton",commodityMid[0]);
		var left=$('.left',botton[0]);
		var right=$('.right',botton[0]);
		var wi=parseInt(getStyle(img[0],'width'));
		var wimgs=imgs[0].style.width=wi*img.length+"px";

		right[0].onclick=function(){
			animate(imgs[0],{left:-wi},500)
			li[0].style.background="#211616";
			li[1].style.background="red";
		}
		left[0].onclick=function(){
			animate(imgs[0],{left:0},500)
			li[1].style.background="#211616";
			li[0].style.background="red";
		}
		li[1].onclick=function(){
			animate(imgs[0],{left:-wi},500)
			li[0].style.background="#211616";
			li[1].style.background="red";
		}
		li[0].onclick=function(){
			animate(imgs[0],{left:0},500)
			li[1].style.background="#211616";
			li[0].style.background="red";
		}	
}