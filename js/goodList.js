//楼梯效果
var isClick = false;
		$("#louti ul li:not(:last)").click(function(){
			isClick = true;
			$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
			var height = $(".nfCon").eq($(this).index()).offset().top;
			$("html, body").stop().animate({scrollTop:height},500, function(){
				isClick = false;
			});//点击滚动
			//返回顶部
			$("#louti ul li.top").click(function(){
				$("html,body").animate({scrollTop:0},500);
			})
			$(window).scroll(function(){
				var height = $(window).scrollTop();
				if(!isClick){
					$(".nfCon").each(function(){
					if(height >= ($(this).offset().top-$(this).outerHeight()/2)){
						$("#louti ul li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
					}
				})
				}
			})
		})
//吸顶效果
$(window).scroll(function(){
				
					if($(window).scrollTop()>$(".nfWarp").offset().top){
						$("#nfFilt").addClass("nfFilt")
						$("#nfFilt").css("margin-top","0")
						$(".filtBar").css("display","block" );
						$(".filtBox").hide();
					}else{
						$("#nfFilt").removeClass("nfFilt")
						$(".filtBar").css({"position":"static", "display":"none"});
						$(".filtBox").show();
					}
				
			})