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
  menuDown.classList.toggle("toggle__menu__bar");
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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("#slider_hero");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";

}

// gallery scrolling
let scrollContainer = document.querySelector(".gallery");
let Btn_prev = document.getElementById("left");
let nextBtn = document.getElementById("right");
Btn_prev.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft = scrollX -= 300;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});
setInterval(() => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  scrollContainer.style.scrollBehavior = "smooth";

  if (scrollContainer.scrollLeft >= maxScroll) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft += 300;
  }
}, 3000);
// password
const pass = document.getElementById("password");
const btn_eye = document.getElementById("eye_open");
const icon = document.getElementById("icon");
btn_eye.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  } else {
    pass.type = "password";
    icon.classList.add("bi-eye");
    icon.classList.remove("bi-eye-slash");
  }
});

// menu log in
let login = document.querySelector(".login");
let account = document.querySelector(".account");
let close_menu_login = document.getElementById("close_menu_login");
function open_log() {
  console.log("hello");
  account.style.display = "flex";
}
function close_log() {
  console.log("hello");
  account.style.display = "none";
}
// add cart product
// btn carts
let carts_Dom = document.querySelector(".carts_dom");
let btn_carts_products = document.querySelector(".btn_carts");
let close_carts_products = document.querySelector(".close_carts_products");
btn_carts_products.addEventListener("click", () => {
  carts_Dom.classList.toggle("active_carts");
});
close_carts_products.addEventListener("click", () => {
  carts_Dom.classList.remove("active_carts");
});

// data fake => products
const products = [
  {
    category: "Accessories",
    id: 1,
    Image: "Assets/file__mage/1_1-300x300.webp",
    title: "Teapot with black tea",
    rate: 4,
  },
  {
    category: "Chair",
    id: 2,
    Image: "Assets/file__mage/1_2-300x300.webp",
    title: "Simple Chair",
    rate: 3,
  },
  {
    category: "Decoration",
    id: 3,
    Image: "Assets/file__mage/1_3-300x300.webp",
    title: "Smooth Disk",
    rate: 5,
  },
  {
    category: "Accessories",
    id: 4,
    Image: "Assets/file__mage/1_4-300x300.webp",
    title: "Wooden Flowerpot",
    rate: 2,
  },
  {
    category: "Furniture",
    id: 5,
    Image: "Assets/file__mage/1_5-300x300.webp",
    title: "Teapot with black tea",
    rate: 3,
  },
  {
    category: "Furniture",
    id: 6,
    Image: "Assets/file__mage/1_6-300x300.webp",
    title: "Teapot with black tea",
    rate: 5,
  },
  {
    category: "Furniture",
    id: 7,
    Image: "Assets/file__mage/1_7-300x300.webp",
    title: "Teapot with black tea",
    rate: 4,
  },
  {
    category: "Accessories",
    id: 8,
    Image: "Assets/file__mage/1_8-300x300.webp",
    title: "Teapot with black tea",
    rate: 4,
  },
];
const containerProducts = document.getElementById("container_products");
function cardProduct(products) {
  let html = ``;
  products.forEach(
    (products) =>
      (html += `
         <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="image__one">
                        <img src="${products.Image}" loading="lazy">
                        <div class="hover__icons">
                            <a href="#3" onclick="openPopupFun(${products.id})"><i class="bi bi-plus-lg"></i></a>
                            <a href="#3" class="add__product" onclick=" openPopup_Fun(${products.id})"><i class="bi bi-bag-check"></i></a>
                            <a href="page__Wishlist/main.html"><i class="bi bi-heart"></i></a>
                        </div>
                    </div>
                    <div class="title__image">
                        <h6><a href="product-details.html">${products.title}</a></h6>
                        <span>Â£40.00 - Â£635.00</span>
                    </div>
                </div>
   
    `)
  );
  containerProducts.innerHTML = html;
}
cardProduct(products);
const circle = document.querySelector(".circle");
const buttons = document.querySelectorAll(".add__product");
const products_dom = document.querySelector(".products_dom ");
function openPopup_Fun(productId) {
  const findSameProduct = products.find((product) => product.id == productId);
  const item_cart = document.querySelectorAll(".item_cart");
  console.log(findSameProduct);
    circle.style.display = "block";
    circle.innerHTML = item_cart.length + 1;
  
  products_dom.innerHTML += `
  <div class="container_cart">
  <div class="content_carts">
  <div class="btnClose">
  <i class="bi bi-x"></i>
  </div>
  <div class="item_cart">
  <img src="${findSameProduct.Image}">
  <div class="title_price">
  <h2>${findSameProduct.title}</h2>
  <p>Â£40.00 - Â£635.00</p>
  <button>add to cart</button>
  </div>
  </div>
  </div>
  </div>
  `;
  const btnClose = document.querySelectorAll(".bi-x");

  btnClose.forEach((btn) =>
    btn.addEventListener("click", () => {
      const cart = btn.closest(".content_carts");
      if (cart) {
        cart.classList.add("activeCloseCart"); 
      }
    })
  );

}
let categoryType = "All Products";
const categoriesContainer = document.getElementById("category");
function handleAllCategories() {
  const categories = [];
  products.forEach((product) => categories.push(product.category));
  const uniqueCategories = ["All Products", ...new Set(categories)];
  const results = uniqueCategories.map((category) => ({
    label: category.replaceAll("-", ""),
    value: category,
  }));
  let html = ``;
  results.forEach(
    (category) =>
      (html += `<ul class="category">
                    <li data-category = "${category.value}" class = "${
        category.value == categoryType ? "active" : ""
      }">${category.label}</li>
                    ${
                      results.length - 1 != results.indexOf(category)
                        ? `<span>|</span>`
                        : ""
                    }
                    
                    
                </ul>`)
  );
  categoriesContainer.innerHTML = html;

  ///!  add Active Category class
  const items = document.querySelectorAll("li");
  items.forEach(
    (item) =>
      (item.onclick = () => {
        categoryType = item.dataset.category;
        items.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        handleProductsFilter();
      })
  );
}
///!  - filter products by category
function handleProductsFilter() {
  if (categoryType == "All Products") {
    cardProduct(products);
  } else {
    const filteredProducts = products.filter((product) => {
      return product.category === categoryType;
    });
    cardProduct(filteredProducts);
  }
}
handleAllCategories();
handleProductsFilter();
//popup
const popup = document.querySelector(".popup");
const popupContaier = document.querySelector(".popup-container");
const closePopup = document.querySelector(".popup-container-close");
function openPopupFun(productId) {
  popup.classList.add("active");
  popupContaier.classList.add("active");
  const findSameProduct = products.find((product) => product.id == productId);
  console.log(findSameProduct);
  popupContaier.innerHTML = `<div class="popup-container-close" onclick="closePopupFun()">
                 <span></span>
                 </div>
                 <img src ="${findSameProduct.Image}">
                 <div>
                 <div class="content_popup_title"></div>
                 <h1>${findSameProduct.title}</h1>
                 <div class="product-card-content-rate">
                                    <svg class="active stroke=" currentcolor"="" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                        </path>
                                    </svg><svg class="active stroke=" currentcolor"="" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                        </path>
                                    </svg><svg class="active stroke=" currentcolor"="" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                        </path>
                                    </svg><svg class="active stroke=" currentcolor"="" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                        </path>
                                    </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,</p>
                                 
                                <div class="price">
                                <strong>$Â£40.00 - Â£635.00</strong>
                                </div>
                                 <div class="content_popup_title">
                                 <button class="btn_eve">S</button>
                                 <button class="btn_eve" >M</button>
                                 <button class="btn_eve" >L</button>
                                 
                                 </div>
  <div class="counter_btn">
  <div class="counter">
          <button class="min"><i class="bi bi-dash"></i></button>
          <input type="text" class="num" value="0">
          <button class="pls"><i class="bi bi-plus"></i></button>
      </div>
      <div class="btn_cart">
      <button><i class="bi bi-bag-check"></i> add to cart</button>
      </div>

  </div>
</div> 
                 </div>
                 `;
  const btn_eve = document.querySelectorAll(".btn_eve");
  console.log(btn_eve);
  btn_eve.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn_eve.forEach((btn) => btn.classList.remove("active_eve"));
      btn.classList.add("active_eve");
    });
  });
    // counter 
  const inp = popupContaier.querySelector(".num");
  const pls = popupContaier.querySelector(".pls");
  const min = popupContaier.querySelector(".min");
  let n = 0;

  pls.addEventListener("click", () => {
    n++;
    inp.value = n;
  });

  min.addEventListener("click", () => {
    if (n > 0) {
      n--;
      inp.value = n;
    }
  });
}
function closePopupFun() {
  popup.classList.remove("active");
  popupContaier.classList.remove("active");
}
const loadingOverlay = document.querySelector(".loading-overlay");
setTimeout(()=>{
  loadingOverlay.style.display= "none"
},2500)