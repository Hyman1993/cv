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
   
   　// 点击地址，生成Google Map或者隐藏Google Map
    $("#addressClick").click(function(){
		$("#addressModalButton").click();
		initMap();
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

// 生成Google Map
function initMap(){

   var myCenter = new google.maps.LatLng(35.79063364148986,139.66121835642366);

	var mapProp = {
	  center:myCenter,
	  zoom:10,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };

	var map=new google.maps.Map(document.getElementById("addressMap"),mapProp);

	// 制作一个定位图标
	var marker=new google.maps.Marker({
	  animation: google.maps.Animation.DROP,
	  position:myCenter,
	  });

	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({content: "東京都板橋区" }); //创建一个InfoWindow

	//使用谷歌地图定义的事件，给这个marker添加点击事件
	google.maps.event.addListener(marker, "click", function(){
		infowindow.open(map,marker);//把这个infoWindow绑定在选定的marker上面
	});

}