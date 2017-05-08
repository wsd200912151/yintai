function getxiaolunbo(obj){
	var bigimgbox=$(".bigimgbox",obj)[0];
	var imgbox=$(".imgbox",bigimgbox);
	var btn=$(".btn",obj)[0];
	var left=$(".left",btn)[0];
	var right=$(".right",btn)[0];
	var iw=parseInt(getStyle(imgbox[0],'width'));
	right.onclick=function(){
		animate(bigimgbox,{left:-iw},500,function(){
			bigimgbox.style.left=0;
		bigimgbox.appendChild(getFirst(bigimgbox));
		});
	}
	var flag=true;
	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		bigimgbox.style.left=-iw+'px';
		bigimgbox.insertBefore(getLast(bigimgbox),getFirst(bigimgbox));
		animate(bigimgbox,{left:0},500,function(){
			flag=true;
		});
	}
}