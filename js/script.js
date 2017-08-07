$(document).ready(function(){
	$('#name').hover(function(){
		$(this).toggleClass('highlight');
	});	
	$('#name').draggable();
	// $('button').click(function(){
		var bounce = $('#bounce');
		runIt();
   		function runIt(){
       		bounce.animate({top:'+=10'}, 750);
       		bounce.animate({top:'-=10'}, 750, runIt);
   		}	
	// });
});