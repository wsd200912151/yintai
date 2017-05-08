function border(obj,w,h){
    var one=$(".one",obj[0]);
         for(var i=0;i<one.length;i++){
           one[i].onmouseover=function(){
           	var bl=$(".bl",this);
          	var bt=$('.bt',this);
          	var br=$('.br',this);
          	var bb=$('.bb',this);
           animate(bl[0],{height:h},500);
           animate(bt[0],{width:w},500);
           animate(br[0],{height:h},500);
           animate(bb[0],{width:w},500);
        }

           one[i].onmouseout=function(){
            var bl=$(".bl",this);
          	var bt=$('.bt',this);
          	var br=$('.br',this);
          	var bb=$('.bb',this);
           animate(bl[0],{height:0},500);
           animate(bt[0],{width:0},500);
           animate(br[0],{height:0},500);
           animate(bb[0],{width:0},500);
        }
	}
}