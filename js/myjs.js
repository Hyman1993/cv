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

 // 图片延迟加载
 $(".cross-image img").delayLoading({
                defaultImg: "img/loading.gif",   // 预加载前显示的图片  
                errorImg: "",   // 读取图片错误时替换图片(默认：与defaultImg一样)  
                imgSrcAttr: "originalSrc",//记录图片路径的属性(默认：originalSrc，页面img的src属性也要替换为originalSrc)  
                beforehand: 0,  // 预先提前多少像素加载图片(默认：0)  
                event: "scroll", // 触发加载图片事件(默认：scroll)  
                duration: "slow", // 三种预定淡出(入)速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认:"normal"  
                container: window,     // 对象加载的位置容器(默认：window)  
                success: function (imgObj) { console.log("图片加载成功")}, // 加载图片成功后的回调函数(默认：不执行任何操作)  
                error: function (imgObj) {console.log("图片加载失败") }  // 加载图片失败后的回调函数(默认：不执行任何操作)  
            });

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