$(function(){  //文档加载完毕时调用  
    //初期化时确定导航栏显示与否
	var scrollTop = $(window).scrollTop();

	if(scrollTop <= 0){
        $("#myNavbar").fadeOut("slow");
		$("#backTop").fadeOut("slow");
	}else{
        $("#myNavbar").fadeIn("slow");
		$("#backTop").fadeIn("slow");
	}

    // 点击下滑按钮,导航栏和top图标需要显示
    $("#scrollDown").click(function(){
	   	$("#myNavbar").fadeIn("slow");
		$("#backTop").fadeIn("slow");	
	});

    // 监听页面滚动事件
	var lastScrollTop = 0;
	 $(document).scroll(function() {
        var scroH = $(window).scrollTop();  //滚动高度
        
		// 鼠标往上滚动
        if(scroH <= 0 && scroH < lastScrollTop) {  //距顶部小于等于0px时
           $("#myNavbar").fadeOut("slow");
		   $("#backTop").fadeOut("slow");
        }
       
	   // 鼠标往下滚动
       if(scroH > lastScrollTop){
           $("#myNavbar").fadeIn("slow");
		   $("#backTop").fadeIn("slow");
	     }
		 lastScrollTop = scroH;
    });

      // 图片延迟加载 class="lazyload" data-src="img/mountains/mountain_1.jpg" src="img/loading.gif"
      lazyload();

});  


   // 导航栏快速定位
function goTo(idName,obj){
      var idBar = document.getElementById(idName);
	   idBar.scrollIntoView();
	  $("#navbar li[class*='active']").each(function(){
		 $(this).removeClass("active"); 
	  });
	   $(obj).parent().addClass("active");
	   if($("#navBarButton").is(':visible')){
	      $("#navBarButton").click();
	   }

}