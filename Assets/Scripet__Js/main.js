// scroll window btn up ==>
let btn = document.querySelector(".btn__scroll");
window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// menu bar ==>
let menuList = document.querySelector(".menu__down");
let menuDown = document.querySelector(".drop__down__icon");
let outMenu = document.querySelector(".close_menu");
function open_menu() {
  // console.log("hello");
  menuDown.classList.add("toggle__menu__bar");
}
function close_menu() {
  // console.log("hello");
  menuDown.classList.remove("toggle__menu__bar");
}
// header 
window.addEventListener("scroll", () => {
  if (scrollY >= 200) {
    document.querySelector("header").classList.add("change_header_color");
  } else {
    document.querySelector("header").classList.remove("change_header_color");
  }
});
// slider card
var sliderElement = document.getElementById("slider");
var swiper_prev = document.getElementById("left");
var swiper_next = document.getElementById("right");
swiper_prev.onclick = prevSlide;
swiper_next.onclick = nextSlide;
function prevSlide() {
  console.log('prev');
}
function nextSlide() {
  console.log("next");
}
// slider hero__banner
// // slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image__right");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}