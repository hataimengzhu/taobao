function getByClass(oParent,oClass){
  var aTemp=[];
  var i=0;
  var aEle=oParent.getElementsByTagName('*');
  for(i=0;i<aEle.length;i++){
  	if(aEle[i].className==oClass){
  		aTemp.push(aEle[i]);
  	}
  }
  return aTemp;
}






var oGood=document.getElementById('goodImg');
var oMain=document.getElementById('main');
var oMark=getByClass(oGood,'mark')[0];//遮罩层
var oFlo=getByClass(oGood,'float_layer')[0];
var oMag=getByClass(oGood,'mangify')[0];
var oBimg=oMag.getElementsByTagName('img')[0];
oMark.onmouseover=function(){
	oFlo.style.display='block';
    oMag.style.display='block';
}
oMark.onmouseout=function(){
	oFlo.style.display='none';
	oMag.style.display='none';
}
oMark.onmousemove=function(ev){
    var oEvent=ev||event;
    var scotop ;

	if(document.body.scrollTop){//计算滚动距离(距离顶端)
	 scotop = document.body.scrollTop;
	}else{
	 scotop = document.documentElement.scrollTop
	}

    var disX=oEvent.clientX-oMain.offsetLeft-oFlo.offsetWidth/2;
    var disY=oEvent.clientY-oMain.offsetTop+scotop-oFlo.offsetHeight/2 ;
    
    disX<0?disX=0:disX>oMark.offsetWidth-oFlo.offsetWidth?disX=oMark.offsetWidth-oFlo.offsetWidth:disX;
    disY<0?disY=0:disY>oMark.offsetHeight-oFlo.offsetHeight?disY=oMark.offsetHeight-oFlo.offsetHeight:disY;

    oFlo.style.left=disX+'px';
    oFlo.style.top=disY+'px';
    
    var percentX=disX/(oMark.offsetWidth-oFlo.offsetWidth);
    var percentY=disY/(oMark.offsetHeight-oFlo.offsetHeight);
    oBimg.style.left=-percentX*(oBimg.offsetWidth-oMag.offsetWidth)+'px';
    oBimg.style.top=-percentY*(oBimg.offsetHeight-oMag.offsetHeight)+'px';

    document.title=disX+'|'+disY+'|'+scotop ;
}


