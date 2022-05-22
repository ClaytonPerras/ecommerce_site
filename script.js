'use strict';

// Grab add to cart button
const button = document.querySelectorAll('.product-button');
// Grab product info to be loaded in loadProductData
let productTitle = document.querySelectorAll('.product-title');
let productPrice = document.querySelectorAll('.product-price');
// Grab data for cart calculations
let cartItemNumber = document.querySelector('.cart-item-number');
let numItemsInCart = 0;
// insert cart total here -------------------------------
// Select element values from each bike product
let itemOneQuantity = document.getElementById('item-quantity-1');
let itemTwoQuantity = document.getElementById('item-quantity-2');
let itemThreeQuantity = document.getElementById('item-quantity-3');
let itemFourQuantity = document.getElementById('item-quantity-4');
let itemFiveQuantity = document.getElementById('item-quantity-5');
let itemSixQuantity = document.getElementById('item-quantity-6');
// Used to update quantityWanted object property for each bike product
let quantityWantedValue = 0;
// Get cart element and productions section
const cart = document.querySelector('.cart-container');
const products = document.querySelector('.products');

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
    price: '133.45',
    quantityWanted: 0,
  },
  {
    name: 'Bike 5',
    price: '121.65',
    quantityWanted: 0,
  },
  {
    name: 'Bike 6',
    price: '148.99',
    quantityWanted: 0,
  },
];

// fill bike data from bike objects
function loadProductData() {
  productTitle.forEach((element, index) => {
    element.textContent = bikes[index].name;
  });
  productPrice.forEach((element, index) => {
    element.textContent = bikes[index].price;
  });
}

loadProductData();

function addToCart(button) {
  button.addEventListener('click', (event) => {
    // Lookup quantity wanted and price
    // Store price and quantity to use for order total on check out screen
    console.log(button);
    // Knows Bike 1 button was hit, adds quantity of bike 1 wanted to cart number total
    // Need to check price and keep price total for bike 1's
    if (button.classList.contains('bike-1')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemOneQuantity.options[itemOneQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 1 object
      bikes[0].quantityWanted += Number(quantityWantedValue);
    } else if (button.classList.contains('bike-2')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemTwoQuantity.options[itemTwoQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 2 object
      bikes[1].quantityWanted += Number(quantityWantedValue);
    } else if (button.classList.contains('bike-3')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemThreeQuantity.options[itemThreeQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 3 object
      bikes[2].quantityWanted += Number(quantityWantedValue);
    } else if (button.classList.contains('bike-4')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemFourQuantity.options[itemFourQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 4 object
      bikes[3].quantityWanted += Number(quantityWantedValue);
    } else if (button.classList.contains('bike-5')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemFiveQuantity.options[itemFiveQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 5 object
      bikes[4].quantityWanted += Number(quantityWantedValue);
    } else if (button.classList.contains('bike-6')) {
      // Gets quantity of item wanted to be added to cart total
      quantityWantedValue =
        itemSixQuantity.options[itemSixQuantity.selectedIndex].value;
      // Add quantity wanted to the cart total number
      numItemsInCart += Number(quantityWantedValue);
      cartItemNumber.textContent = numItemsInCart;
      // Update quantity wanted on Bike 6 object
      bikes[5].quantityWanted += Number(quantityWantedValue);
    }

    bikes.forEach((element) => {
      console.log(element.name);
      console.log(element.quantityWanted);
    });
  });
}

button.forEach(addToCart);

// Added functionality for remove products section
// Need to add functionality for when product section is removed to add shopping cart items and price calculations
cart.addEventListener('click', (event) => {
  if (!products.classList.contains('active-cart')) {
    products.classList.add('active-cart');
  } else if (products.classList.contains('active-cart')) {
    products.classList.remove('active-cart');
  }
});

// function delete from cart
// function add taxes
// add function for calculating cart total based on each price and quantity of bike
