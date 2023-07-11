// script.js

// Get the cart link and add event listener
const cartLink = document.getElementById("cart-link");
cartLink.addEventListener("click", showCart);

// Get the add to cart button and add event listener
const addToCartBtn = document.getElementById("add-to-cart");
addToCartBtn.addEventListener("click", addToCart);

let cartCount = 0;

// Function to show the cart
function showCart() {
  // Your logic to show the cart goes here
  console.log("Cart clicked!");
}

// Function to handle adding a product to the cart
function addToCart() {
  cartCount++;
  cartLink.innerText = `Cart (${cartCount})`;
  // Your logic to add the product to the cart goes here
  console.log("Product added to cart!");
}
