$(function(){

	var ua = navigator.userAgent;
	if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
		
		$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
		
	} else{
		
		$('head').prepend('<meta name="viewport" content="width=1000" />');
		
	}
	
	//スマホメニュー
	$('.sp_menu a').click(function(){

		$('.screen').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 200, function(){
			
			$('.header_body nav').fadeIn();
			
		});
		
		return false;
	});

	$('.header_body nav p a, .screen').click(function(){

		$('.header_body nav, .screen').fadeOut();
		
		return false;
	});
	
	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top - 100;
		
		$("html,body").animate({
			scrollTop: HashOffset
		}, 1000);
		
		return false;
	});
});

$(window).on('orientationchange load resize',function(){	
	
	var win_w = $(window).width();
	if(win_w > 760){
		
		if($('.column_side h3').hasClass('open'))
		{			
			//Do Nothing					
		} else 
		{
			$('.column_side h3').addClass('open');
			$('.column_side ul').css({'display':'block'});
		}
		$('.screen').hide();	
		$('.header_body nav').show();	
	} else 
	{
		$('.column_side h3').removeClass('open');
		$('.column_side ul').hide();
		$('.header_body nav, .screen').hide();	
	}
});

$(window).on('scroll', function(){
	var topBtn = $('.pagetop');
	
	if ($(window).scrollTop() > 100) {
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});