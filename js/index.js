window.onload=function(){
			const opadding=Number($(".navbar-transparent").css("padding").replace(/[^0-9]/g, ""));
			navsty();
				$(document).scroll(function() {
					navsty();				   				 
				});
				$(".navbar-transparent a").on('click',function(e){
				       var target = e.target;
				       var To_id = $(target).data("to");
						var distance=$('#'+To_id).offset().top;
				        $('html,body').animate({scrollTop:distance}, 500);
				        });
					function navsty(){
					var scroH = $(document).scrollTop();
					var num=scroH/900*0.8;
					var num_pad=(1-scroH/900)*opadding;
					if(scroH<=900){
						$(".navbar-transparent").css("background-color","rgba(0,0,0,"+num+")");
						$(".navbar-transparent").css("padding",num_pad);
					}else{
						$(".navbar-transparent").css("background-color","rgba(0,0,0,0.8)");
						$(".navbar-transparent").css("padding","0");
					};	
					}
}
