window.onload = function(){
    showSlides(slideIndex);
}

//CAROUSEL
let slideIndex = 1;
        
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hides previous group of products and shows the next
function showSlides(n) {
  
  let slides = document.getElementsByClassName("mySlides");
        
  if (n > slides.length) {
    slideIndex = 1
  } 

  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block";        
}




