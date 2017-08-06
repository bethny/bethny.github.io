$(document).ready(function(){
	$('#name').hover(function(){
		$(this).toggleClass('highlight');
	});	
	$('#name').draggable();
});