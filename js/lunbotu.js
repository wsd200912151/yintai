window.onload=function(){
    // 五
	var banner=getClass('banner',document);
    var rotate=getClass('rotate',banner[0]);
	var aimg=getClass('aimg',rotate[0]);
	var uls=getClass('uls',rotate[0]);
	var li=uls[0].getElementsByTagName('li');
	var left=getClass('left',rotate[0]);
	var right=getClass('right',rotate[0]);
    var classifylist=getClass("classify-list",banner[0]);
    var list=getClass('list',classifylist[0]);
 
	li[0].style.background="#e5004f";
    aimg[0].style.zIndex=10;
    //轮播图
	var t=setInterval(k,2000)
	var index5=0;
	function k(){
		index5++;
        if(index5==aimg.length){
        index5=0;                 
        }
        for(var i=0;i<aimg.length;i++){
		aimg[i].style.zIndex=0;
		li[i].style.background="";
	    }
		aimg[index5].style.zIndex=10;
		li[index5].style.background="#e5004f";
		}

	//鼠标移入 图片停止
	rotate[0].onmouseover=function(){
			clearInterval(t)
	}
	rotate[0].onmouseout=function(){
			t=setInterval(k,2000)
	}
        
    //选项卡
    for(var i=0;i<li.length;i++){
    li[i].index=i;
	li[i].onmouseover=function(){
	    for(var j=0;j<li.length;j++){
			li[j].style.background="";
				aimg[j].style.zIndex=0;
	    }
	this.style.background='#e5004f';
	aimg[this.index].style.zIndex=30;
	index5=this.index;
	}
	}

	//切换图片
    right[0].onclick=function(){
    	index5++;
    	if(index5==aimg.length){
    		index5=0;
    	}
    	for(var i=0;i<aimg.length;i++){
        aimg[i].style.zIndex=0;
        li[i].style.background="";
    	}
    	aimg[index5].style.zIndex=40;
    	li[index5].style.background='#e5004f';
    }
	
    left[0].onclick=function(){
        index5--; 
        if(index5<0){
            index5=aimg.length-1;
        }
        for(var i=0;i<aimg.length;i++){
        aimg[i].style.zIndex=0;
        li[i].style.background="";
        }
        aimg[index5].style.zIndex=40;
        li[index5].style.background='#e5004f'; 
    }

    

    for(var h=0;h<list.length;h++){
    list[h].onmouseover=function(){
      this.style.background='#e5004f';
    }
    list[h].onmouseout=function(){
      this.style.background='#333';
    }
    }

    //三
    var search=getClass('search',document);
    var adverts=getClass('adverts',search[0]);
    var aaimg=getClass('aimg',adverts[0]);
    setInterval(p,2000)
    var index3=0;
    function p(){
        index3++;
        if(index3==aaimg.length){
        index3=0;                 
        }
        for(var i=0;i<aaimg.length;i++){
        aaimg[i].style.zIndex=0;
        }
        aaimg[index3].style.zIndex=10;
       }

//六
    var sixxxk=getClass('six-xxk',document);
    var xxkleft=getClass('xxk-left',sixxxk[0]);
    var linkaa=getClass('link',xxkleft[0]);
    var aaa=linkaa[0].getElementsByTagName('a');
    var listaa=getClass('list',xxkleft[0]);
    for(var i=0;i<aaa.length;i++){
        aaa[i].index=i;
        aaa[i].onmouseover=function(){
            for(var j=0;j<listaa.length;j++){
            listaa[j].style.display="none";
            aaa[j].style.borderBottom="5px solid #333";
          }
            listaa[this.index].style.display="block";
            this.style.borderBottom="5px solid #e5004f";
        }
    }

 //九
    var nineshoppe=getClass('nine-shoppe',document);
    var rightxxk=getClass('right-xxk',nineshoppe[0])
    var link=getClass('link',rightxxk[0]);
    var a=link[0].getElementsByTagName('a');
    var blist=getClass('list',rightxxk[0]);
    for(var i=0;i<a.length;i++){
        a[i].index=i;
        a[i].onmouseover=function(){
          for(var j=0;j<blist.length;j++){
            blist[j].style.display="none";
            a[j].style.borderBottom="3px solid #333"
          }
            blist[this.index].style.display="block";
            this.style.borderBottom="3px solid #e5004f";
        }
    }

//边框
            var twelveShoppe=$(".twelve-shoppe")
            var box=$(".commodity-right",twelveShoppe[0]);
            var leftbottom=$(".left-bottom",twelveShoppe[0])[0];
            border(box,272,182);
            getxiaolunbo(leftbottom);

            var fourteenShoppe=$(".fourteen-shoppe")
            var box=$(".commodity-right",fourteenShoppe[0]);
            var leftbottom=$(".left-bottom",fourteenShoppe[0])[0];
            border(box,272,182);
            getxiaolunbo(leftbottom);
            getpingyi(fourteenShoppe[0]);

            var sixteenShoppe=$(".sixteen-shoppe")
            var box=$(".commodity-right",sixteenShoppe[0]);
            var leftbottom=$(".left-bottom",sixteenShoppe[0])[0];
            border(box,272,182);
            getxiaolunbo(leftbottom);

            var eighteenShoppe=$(".eighteen-shoppe")
            var box=$(".commodity-right",eighteenShoppe[0]);
            var leftbottom=$(".left-bottom",eighteenShoppe[0])[0];
            border(box,272,182);
            getxiaolunbo(leftbottom);
            getpingyi(eighteenShoppe[0]);

//下拉
    var xlbox=$('.xlbox')[0];
    var uls=$('ul',xlbox)[0];
    var link=$('.link',xlbox)[0];

    hover(xlbox,function(){
        uls.style.display="block";
        xlbox.style.border="1px solid #eee";
        link.style.background='#fff';
        //console.log("1")
    },function(){
        uls.style.display="none";
        xlbox.style.border="";
        link.style.background='#eee';
        //console.log("2")
    })


    var weixin=$('.weixin')[0];
    var appphone=$('.appphone')[0];
    var afont=$('.a-font');
    hover(afont[1],function(){
        weixin.style.display="block";
    },function(){
        weixin.style.display="none";
    })

    hover(afont[2],function(){
        appphone.style.display="block";
    },function(){
        appphone.style.display="none";
    })

    weixin.onmouseover=function(){
        this.style.display='block';
    }
    weixin.onmouseout=function(){
        this.style.display='none';
    }
    appphone.onmouseover=function(){
        this.style.display='block';
    }
    appphone.onmouseout=function(){
        this.style.display='none';
    }

//分类
var banneer=$('.bann-er');
    var classifylist=$(".classify-list",banneer[0]);
    var alist=$('.list',classifylist[0]);
    var bimg=$('.b-img',classifylist[0]);
    var listrightxxk=$('.list-right-xxk',banneer[0]);
    var listxxk=$('.list-xxk',listrightxxk[0]);
     
    for(var h=0;h<alist.length;h++){
        alist[h].index=h;
        alist[h].onmouseover=function(){
          this.style.background='#e5004f';
          bimg[this.index].style.display="none";
          listxxk[this.index].style.display='block';

        }
        alist[h].onmouseout=function(){
          this.style.background='#333';
          bimg[this.index].style.display='block';
           listxxk[this.index].style.display='none';
        }
        }

    for(var j=0;j<alist.length;j++){
        listxxk[j].onmouseover=function(){
          this.style.display='block';

        }
        listxxk[j].onmouseout=function(){
           this.style.display='none';
        }
        }
 
// 五 图片左移
var zuiright=$('.zui-right',banner[0])[0];
zuiright.onmouseover=function(){
    animate(zuiright,{right:5},500);
}
zuiright.onmouseout=function(){
    animate(zuiright,{right:0},500);
}











	}