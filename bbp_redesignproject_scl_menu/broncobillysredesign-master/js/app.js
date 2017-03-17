// ---------- IMAGE SLIDER JS FUNCTION ----------
var slideIndex = 1;// Here's the variable
showSlides(slideIndex);

function plusSlides(n) {// Here's one of the function we're gonna use...
  showSlides(slideIndex += n);
}

function currentSlide(n) {// ...and here's the other one
  showSlides(slideIndex = n);
}

function showSlides(n) {// Here's the actual function itself
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// ---------- IMAGE SLIDER JS FUNCTION ----------

// ---------- BOUNCE-IN JS FUNCTION ----------

// ---------- BOUNCE-IN JS FUNCTION ----------
