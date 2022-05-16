'use strict';

const button = document.querySelectorAll('.product-button');
let cartItemNumber = document.querySelector('.cart-item-number');

function addToCart(button) {
  button.addEventListener('click', (event) => {
    cartItemNumber.textContent++;
  });
}

button.forEach(addToCart);
