// scroll window ==>
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
// position fixed  header==>
    // let fixed = document.querySelector("header");
    // window.onscroll = function () {
    //   if (window.scrollY >= 250) {
    //     fixed.style.position = "fixed";
    //   } else {
    //    fixed.style.position = "relative";
    //   }
    // };
    // window.scrollTo({
    // top: 0,
    // left: 0,
    // behavior: "smooth"});
    // menu bar ==>
let menuList = document.querySelector(".menu__down");
let menuDown = document.querySelector(".drop__down__icon");
let outMenu = document.querySelector(".icon__out");
function myFunction() {
  console.log('hello');
  menuDown.classList.add("toggle__menu__bar");
}

