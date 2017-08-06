$(document).ready(function(){
	$('#name').hover(function(){
		$(this).addClass('highlight');
	});
	$('#name').draggable();
});