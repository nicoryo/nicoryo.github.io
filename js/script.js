/* Q&Aの開閉
========================================================================== */
$(function(){
	
	//回答開閉
	$('.q_title').click(function(){
		
		var box = $(this).next('.a_box');
		if (box.css('display') == 'block') {
			
			$(this).removeClass('open');
			box.slideUp();
			
		} else {
			
			$(this).addClass('open');
			box.slideDown();
			
		}				
	});
});

/* バックグランドイメージパララックス
========================================================================== */
$(window).scroll(function(e){
  parallax();
});
 
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.4)+'px');
}