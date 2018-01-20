$(document).ready(function(){
	var $timing = (1000);

	$('.hover-space').hover(
		function() {
			$('#lit').fadeIn(0);
			$('body').animate({backgroundColor:"#000000"},$timing);
			$('#unlit').css("display","none");
		}, function() {
			$('#lit').css("display","none");
			$('body').animate({backgroundColor:"#fff6d9"},$timing);
			$('#unlit').fadeIn(0);
	}); 
});