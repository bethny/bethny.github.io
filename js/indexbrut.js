$(document).ready(function(){
	// $('#wip').hover(function(){
	// 	$('#wip-text').toggleClass('highlight');
	// });

	$(function() {
		$('#wip').hover(function() { 
    		$('#wip-text').fadeIn(); 
		}, function() { 
    		$('#wip-text').fadeOut(); 
		});
	});

	$('#link-1-span').hover(function() {
		$('#link-1-span').toggleClass('span-C');
		$('#link-1-a').toggleClass('a-white');
	});
	$('#link-2-span').hover(function() {
		$('#link-2-span').toggleClass('span-M');
		$('#link-2-a').toggleClass('a-white');
	});
	$('#link-3-span').hover(function() {
		$('#link-3-span').toggleClass('span-Y');
		$('#link-3-a').toggleClass('a-white');
	});

	$('#email-field, #msg-field, #square-button').focus(function() {
		$('#email-field').attr("placeholder","email");
		$('#email-field').css("width","70px");
		$('#msg-field').show();
		$('#square-button').show();
	});

	$('#email-field && #msg-field && #square-button').blur(function() { // cannot deselect; only deselects when button hit
		$('#email-field').attr("value","tell me about yourself");
		$('#email-field').css("width","240px");
		$('#msg-field').fadeOut(); // DEBUG THIS 
		$('#square-button').fadeOut();
	});

// COLOR TOGGLES 
	$('#lbtn').on("click", function() {
		$('body').css("background-color","#1e506a");
		$('#top-card').css("background-color","#fcf4fb");
		$('#back-card').css('background-image', 'url(assets/imgs/sea-grad.png)');
		$('#back-card').css('background-size', '370px 370px');
		$('#blurb').css("background-color","#f9e8eb");
		$('#lbtn').css("opacity","1");
		$('#cmy').css("opacity","0.5");
		$('#blue').css("opacity","0.5");
		$('span, a').css("background-color","#e4c1e2");
		$("#face").attr("src","assets/imgs/face-orig.png");
		$('#name-1').css("color","#fcf4fb");
		$('#name-3').css("color","#e4c1e2");
		$('#name-2').css("color","#1e506a");
		$('#name-1,#name-2,#name-3').css("opacity","0.5");

		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#e4c1e2");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#1e506a");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#000000");
			$('#link-3-a').css("background-color","#FFFFFF");
		});
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			// $('#link-1-span, #link-2-span, #link-3-span, #link-1-a, #link-2-a, #link-3-a').css("background-image","none");
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color","#e4c1e2");
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color","#e4c1e2");
		});
	});

	$('#blue').on("click", function() {
		$('body').css("background-color","#d3ebf1");
		$('#top-card').css("background-color","#FFFFFF");
		$('#back-card').css("background-image","none");
		$('#blurb').css("background-color","#00FFFF");
		$('#lbtn').css("opacity","0.5");
		$('#cmy').css("opacity","0.5");
		$('#blue').css("opacity","1");
		$('span, a').css("background-color","#00FFFF");
		$("#face").attr("src","assets/imgs/face.png");
		$('#name-1').css("color","#FFFF00");
		$('#name-3').css("color","#00FFFF");
		$('#name-2').css("color","#FF00FF");
		$('#name-1,#name-2,#name-3').css("opacity","0.2");

		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#00FFFF");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#00FFFF");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#00FFFF");
			$('#link-3-a').css("background-color","#FFFFFF");
		});	
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color","#00FFFF");
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color","#00FFFF");
		});
	});

	$('#cmy').on("click", function() {
		$('body').css("background-color","#cdcdcd");
		$('#top-card').css("background-color","#FFFFFF");
		$('#back-card').css('background-image', 'url(assets/imgs/cmy-waves.png)');
		$('#blurb').css("background-color","#FFFFFF");
		$('#lbtn').css("opacity",".5");
		$('#cmy').css("opacity","1");
		$('#blue').css("opacity","0.5");
		$('span, a').css("background-color","#cdcdcd");
		$("#face").attr("src","assets/imgs/face-bw.png");
		$('#name-1').css("color","#FFFF00");
		$('#name-3').css("color","#00FFFF");
		$('#name-2').css("color","#FF00FF");
		$('#name-1,#name-2,#name-3').css("opacity","0.2");

		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#00FFFF");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#FF00FF");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#FFFF00");
			$('#link-3-a').css("background-color","#FFFFFF");
		});
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color","#cdcdcd");
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color","#cdcdcd");
		});

	});

// END OF COLOR TOGGLES

	$('#name-2').draggable({scroll:false});
	$('#name-3').draggable({scroll:false});

	$('#top-card').draggable({containment:"window"});

	$('#fake-link').click(function() {
		$('#fake-link').hide();
		// $('form').appear();
	});

	var bounce = $('.horiz-bounce');
	hover();
		function hover(){
   		bounce.animate({top:'+=7'}, 750);
   		bounce.animate({top:'-=7'}, 750, hover);
		}	
});