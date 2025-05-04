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
  menuDown.classList.add("toggle__menu__bar");
}
function close_menu() {
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
  let slides = document.querySelectorAll("#slider_hero");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";

}

// gallery scrolling
let scrollContainer = document.querySelector(".item__product");
let Btn_prev = document.getElementById("left")
let nextBtn = document.getElementById("right")
scrollContainer.addEventListener("wheel" , (evt)=>{
  evt.preventDefault();
  scrollContainer.scrollLeft += 2000;
});
Btn_prev.addEventListener("click",()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 300;
})
nextBtn.addEventListener("click" ,()=>{
  scrollContainer.style.scrollBehavior = "smooth"
  scrollContainer.scrollLeft += 500

});

// password
const pass = document.getElementById('password');
const btn_eye = document.getElementById('eye_open');
const icon = document.getElementById("icon");
btn_eye.addEventListener('click', () => {
  if (pass.type === 'password') {
    pass.type = 'text';
    icon.classList.remove('bi-eye');
    icon.classList.add('bi-eye-slash');
  } else {
    pass.type = 'password';
    icon.classList.add('bi-eye');
    icon.classList.remove('bi-eye-slash');
  }
});

// menu log in
let login = document.querySelector(".login");
let account = document.querySelector(".account");
let close_menu_login = document.getElementById("close_menu_login");
function open_log() {
  console.log("hello");
  account.style.display = "flex"
}
function close_log() {
  console.log("hello");
  account.style.display = "none"

}
