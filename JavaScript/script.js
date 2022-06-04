$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navigation bar
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // for scroll-up button
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // For sliding up button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //  slide-up button to have smooth control removed
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .list li a').click(function(){
        // for smooth control  of the the list of sections
        $('html').css("scrollBehavior", "smooth");
    });

    //for navigation bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // text animation-typing in the home section
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
	

    // for the owl-carousel in the ingredients
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(100)
  .next()
  .fadeIn(100)
  .end()
  .appendTo('#slideshow');
}, 800);

let index = 1;
showSlides(index);

// control for next and previous
function plusSlides(n) {
  showSlides(index += n);
}

// slideshow of image in procedure section
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
