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
let scrollContainer = document.querySelector(".item__product");
let Btn_prev = document.getElementById("left");
let nextBtn = document.getElementById("right");
Btn_prev.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 300;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

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
  },
  {
    category: "Chair",
    id: 2,
    Image: "Assets/file__mage/1_2-300x300.webp",
    title: "Simple Chair",
  },
  {
    category: "Decoration",
    id: 3,
    Image: "Assets/file__mage/1_3-300x300.webp",
    title: "Smooth Disk",
  },
  {
    category: "Accessories",
    id: 4,
    Image: "Assets/file__mage/1_4-300x300.webp",
    title: "Wooden Flowerpot",
  },
  {
    category: "Furniture",
    id: 5,
    Image: "Assets/file__mage/1_5-300x300.webp",
    title: "Teapot with black tea",
  },
  {
    category: "Furniture",
    id: 6,
    Image: "Assets/file__mage/1_6-300x300.webp",
    title: "Teapot with black tea",
  },
  {
    category: "Furniture",
    id: 7,
    Image: "Assets/file__mage/1_7-300x300.webp",
    title: "Teapot with black tea",
  },
  {
    category: "Accessories",
    id: 8,
    Image: "Assets/file__mage/1_8-300x300.webp",
    title: "Teapot with black tea",
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
                            <a href="#3"><i class="bi bi-plus-lg"></i></a>
                            <a href="#3" class="add__product" onclick=" openPopupFun(${products.id})"><i class="bi bi-bag-check"></i></a>
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
function openPopupFun(productId) {
  const findSameProduct = products.find((product) => product.id == productId);
  const item_cart = document.querySelectorAll(".item_cart");
  console.log(findSameProduct);
  circle.style.display = "block"
  circle.innerHTML = item_cart.length + 1;
  products_dom.innerHTML += `
  <div class="container_cart">
  <div class="item_cart">
  <img src="${findSameProduct.Image}">
  <div class="title_price">
  <h2>${findSameProduct.title}</h2>
  <p>Â£40.00 - Â£635.00</p>
  <button>add to cart</button>
  </div>
  </div>
  </div>
  `;
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
      (html += `<ul>
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
