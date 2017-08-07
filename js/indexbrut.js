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