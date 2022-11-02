	const boxes = document.querySelectorAll('.woocommerce-product-gallery');

boxes.forEach(box => {
	box.removeAttribute('style');
});


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("logo").style.width = "130px";
    document.getElementById("navbar-right").style.transform = "translate(35px,-60px)";
    document.getElementById("logo").style.marginTop = "55px";
    document.getElementById("navbar").style.top = "-70px";
    document.getElementById("top-btn-box").style.opacity = "0";


  } else {
    
    document.getElementById("logo").style.width = "190px";
    document.getElementById("navbar-right").style.transform = "translate(35px,-40px)";
    document.getElementById("logo").style.marginTop = "0px";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("top-btn-box").style.opacity = "1";

  }
}





//The Slider - first part ------------------------------------

var swiper = new Swiper(".mySwiper", {
         spaceBetween: 30,
         centeredSlides: true,
         autoplay: {
           delay: 5000,
           disableOnInteraction: false,
         },
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
           dynamicBullets: true,
         }
       });




//------------------ Article Slideshow



var swiper = new Swiper(".ArticleSwiper", {
         spaceBetween: 0,
         centeredSlides: true,
         autoplay: {
           delay: 5000,
           disableOnInteraction: false,
         },
         pagination: {
           el: ".article-swiper-pagination",
           clickable: true,
           dynamicBullets: true,
         }
       });



//------------------ Doctor slider




       var swiper = new Swiper(".DoctorSwiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        autoplay: {
           delay: 3000,
         },
        navigation: {
          nextEl: ".doctor-swiper-button-next",
          prevEl: ".doctor-swiper-button-prev",
        },
      });

       /*
var slideIndex = 1;
showSlides(slideIndex);

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

*/

//////////////




//splash screen

  setTimeout(hide, 3000);
   function hide(){
       document.getElementById('splash-screen').style.display = "none";
   }

//sidenav
       function openNav1() {
     document.getElementById("mySidenav").style.width = "250px";
     document.getElementById("link-cont").style.opacity = "1";
   }
   function closeNav1() {
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("link-cont").style.opacity = "0";
   }

//searchnav
function openNav2() {
  document.getElementById("searchnav").style.height = "100%";
}
function closeNav2() {
  document.getElementById("searchnav").style.height = "0";
}

//main search system
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//tab container

function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




// mouse circle
jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});