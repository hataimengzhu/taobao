// 选项卡
$(function(){
   var aBtn=$('.goodTab ul li');
   var aImg=$('#goodImg ul li');
   var obImg=$('#goodImg .mangify img');
   aBtn.first().css('border-color','#FF4400');
   aImg.eq(0).css('display','block');

   	aBtn.bind("mouseover",function(){
   	// $(this).css('border-color','#FF4400').siblings().css('border-color','#fff');
   	 var i=$(this).index();
   	 switchTab($(this),aImg.eq($(this).index()),i);
   })   
	function switchTab(obj0,obj1,i){

        obj0.css('border-color','#FF4400').siblings().css('border-color','#fff');
		obj1.show().siblings().hide();	
		var path='./images/abc-'+i+'.jpg';
		obImg.attr('src',path);

	} 
})
