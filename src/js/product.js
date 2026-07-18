// import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";

// const dataSource = new ProductData("tents");

// const productId = getParam("product");
// console.log(dataSource.findProductById(productId));

// function addProductToCart(product) {
//   const cartItems = Array.isArray(getLocalStorage("so-cart"))
//     ? getLocalStorage("so-cart")
//     : [];
//   cartItems.push(product);
//   setLocalStorage("so-cart", cartItems);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
 
const productId = getParam('product');
const dataSource = new ProductData('tents');
 
const product = new ProductDetails(productId, dataSource);
product.init();