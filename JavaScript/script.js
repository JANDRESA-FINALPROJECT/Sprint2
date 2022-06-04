    //text animation-typing for home section
    var typed = new Typed(".typing", {
        strings: ["Come and Discover!"],
        typeSpeed: 30,
    });
	 var typed = new Typed(".typing2", {
        strings: ["The secret behind sa Luto ni Nanay!"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
	
// photos control for procedure section
function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("scrollbar");
  if (n > slide.length) {index = 1}
  if (n < 1) {index = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[index-1].style.display = "block";
  dot[index-1].className += " active";
}
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navigation bar
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

	// for smooth transistion when clicking the items in menu 
    $('.navbar .list li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
