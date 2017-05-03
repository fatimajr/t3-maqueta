// $(document).ready(function(){
// 	$('.steps').slick({
// 		autoplay: true,
//   		autoplaySpeed: 4800,
// 	});
// });
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 80) {
    	$('.t3').addClass('animated fadeOutUp');
    	$('.nav').addClass('nav-show');
    	$('.logo').addClass('animated fadeInUp');
    }
    else {
    	$('.t3').removeClass('animated fadeOutUp');
    	$('.nav').removeClass('nav-show');
    	$('.logo').removeClass('animated fadeInUp');
    }
  });	
	$('.candidates').viewportChecker({
    	classToAdd: 'animated fadeInLeft',
   	 	offset: 100
  	});
  	$('.a-method').viewportChecker({
    	classToAdd: 'animated fadeInLeft delay1',
   	 	offset: 100
  	});
  	$('.top1').viewportChecker({
    	classToAdd: 'animated fadeInLeft delay2',
   	 	offset: 100
  	});

  	$('.week0').viewportChecker({
    	classToAdd: 'animated fadeInUp',
   	 	offset: 100
  	});
  	$('.week1').viewportChecker({
    	classToAdd: 'animated fadeInUp delay1',
   	 	offset: 100
  	});
  	$('.week3').viewportChecker({
    	classToAdd: 'animated fadeInUp delay2',
   	 	offset: 100
  	});
  	$('.week4').viewportChecker({
    	classToAdd: 'animated fadeInUp delay3',
   	 	offset: 100
  	});

  	$('.week0').mouseover(function() {
	  $('.text0').addClass("visible animated fadeIn");
	});

	$('.week0').mouseout(function() {
	  $('.text0').removeClass("visible animated fadeIn");
	});

	 $('.week1').mouseover(function() {
	  $('.text1').addClass("visible animated fadeIn");
	});

	$('.week1').mouseout(function() {
	  $('.text1').removeClass("visible animated fadeIn");
	});

	  	$('.week3').mouseover(function() {
	  $('.text3').addClass("visible animated fadeIn");
	});

	$('.week3').mouseout(function() {
	  $('.text3').removeClass("visible animated fadeIn");
	});

	  	$('.week4').mouseover(function() {
	  $('.text4').addClass("visible animated fadeIn");
	});

	$('.week4').mouseout(function() {
	  $('.text4').removeClass("visible animated fadeIn");
	});
});

  