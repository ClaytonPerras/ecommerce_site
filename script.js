'use strict';

const button = document.querySelectorAll('.product-button');
let cartItemNumber = document.querySelector('.cart-item-number');
let numItemsInCart = 0;
let selectQuantityNum = document.querySelector('.item-quantity-1');
let selectQuantityWanted = document.getElementById('item-quantity-1');
let quantityWantedValue = 0;
// Need to get value of select element for adding quantity to cart
let bikes = [
  {
    name: 'Bike 1',
    price: '129.99',
    quantityWanted: 0,
  },
  {
    name: 'Bike 2',
    price: '95.89',
    quantityWanted: 0,
  },
  {
    name: 'Bike 3',
    price: '226.75',
    quantityWanted: 0,
  },
  {
    name: 'Bike 4',
    price: '226.75',
    quantityWanted: 0,
  },
  {
    name: 'Bike 5',
    price: '226.75',
    quantityWanted: 0,
  },
  {
    name: 'Bike 6',
    price: '226.75',
    quantityWanted: 0,
  },
];

// function to fill bike data from bike objects

function addToCart(button) {
  button.addEventListener('click', (event) => {
    // Lookup quantity wanted and price
    // Store price and quantity to use for order total on check out screen
    console.log(button);
    console.log(event);
    // Knows Bike 1 button was hit, adds quantity of bike 1 wanted to cart number total
    // Need to check price and keep price total for bike 1's
    if (button.classList.contains('bike-1')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        selectQuantityWanted.options[selectQuantityWanted.selectedIndex].value;
      console.log(quantityWantedValue);
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 1 object
      bikes[0].quantityWanted = quantityWantedValue;
      // Log the name and quantity wanted of Bike 1
      console.log(bikes[0].name);
      console.log(bikes[0].quantityWanted);
    }
  });
}

button.forEach(addToCart);
// function delete from cart
// function add taxes
