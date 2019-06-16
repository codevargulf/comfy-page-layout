var prev = document.querySelector(".slider-prev");
var next = document.querySelector(".slider-next");
var elements = document.querySelectorAll(".slider-slide");
var activeImg = 0;

// console.log(prev, next, elements, activeImg);

elements[activeImg].classList.remove(".slider-slide-active");



next.addEventListener("click", function() {

  elements[activeImg].classList.remove("slider-slide-active");

  if (activeImg === elements.length - 1) {

    activeImg = 0;

  } else {

    activeImg++;

  }

  elements[activeImg].classList.add("slider-slide-active");

});




prev.addEventListener("click", function() {

  elements[activeImg].classList.remove("slider-slide-active");

  if (activeImg === 0) {

    activeImg = elements.length - 1;

  } else {

    activeImg--;

  }

  elements[activeImg].classList.add("slider-slide-active");

});