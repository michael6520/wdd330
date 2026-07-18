import { setLocalStorage, getLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // findProductById returns a promise -- wait for it before rendering
    this.product = await this.dataSource.findProductById(this.productId);

    this.renderProductDetails();

    // now that the HTML exists, we can safely attach the listener
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = Array.isArray(getLocalStorage('so-cart'))
      ? getLocalStorage('so-cart')
      : [];
    cartItems.push(this.product);
    setLocalStorage('so-cart', cartItems);
  }

  renderProductDetails() {
    document.getElementById('productBrand').textContent =
      this.product.Brand.Name;

    document.getElementById('productName').textContent = this.product.Name;

    const image = document.getElementById('productImage');
    image.src = this.product.Image;
    image.alt = this.product.Name;

    document.getElementById('productPrice').textContent =
      `$${this.product.FinalPrice}`;

    document.getElementById('productColor').textContent =
      this.product.Colors[0].ColorName;

    document.getElementById('productDescription').innerHTML =
      this.product.DescriptionHtmlSimple;

    document.getElementById('addToCart').dataset.id = this.product.Id;
  }
}