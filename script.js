'use strict';

const button = document.querySelectorAll('.product-button');
console.log(button);

button.forEach(addToCart);

function addToCart(button) {
  button.addEventListener('click', (event) => {
    button.style.backgroundColor = '#a5b4a4';
  });
}
