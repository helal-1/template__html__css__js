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
  console.log("hello");
  menuDown.classList.add("toggle__menu__bar");
}
function close_menu() {
  console.log("hello");
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

