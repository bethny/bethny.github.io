var slideIndex = 1;

var int = self.setInterval(function(){
    showSlides(slideIndex);
},3000);

window.onload = function(){
	showSlides(slideIndex);
	autoplay();
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;	
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}

function autoplay() {
	setTimeout(function() {
		plusSlides(1);
		autoplay();
	}, 5000);
}

// JQUERY

$(document).ready(function() {
	var $headerHeight = $("header").outerHeight(true);
	var $vh = $(window).height();
	// console.log($(window).scrollTop());

	$(window).scroll(function () {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > $headerHeight) {
			$('#main-nav').addClass('nav-fixed');
			$('#nav-placeholder').css("display","block");
		}
		if ($(window).scrollTop() < $headerHeight+1) {
			$('#main-nav').removeClass('nav-fixed');
			$('#nav-placeholder').css("display","none");
		}
		if ($(window).scrollTop() > $vh) {
			$('#scroll-to-top').css("display","block");
		}
		if ($(window).scrollTop() < $vh) {
			$('#scroll-to-top').css("display","none");
		}
  });
});