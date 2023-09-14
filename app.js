class Product {
  constructor(id, title, price, colors) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.colors = colors;
  }
}
const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

const products = [
  new Product(1, "Air Force", 119, [
    { code: "black", img: "./img/air.png" },
    { code: "darkblue", img: "./img/air2.png" },
  ]),
];

let chosenProduct = products[0];

function updateProductInfo(product) {
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "$" + product.price;
  currentProductImg.src = product.colors[0].img;

  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = product.colors[index].code;
  });
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosenProduct = products[index];

    updateProductInfo(chosenProduct);
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

updateProductInfo(chosenProduct);
