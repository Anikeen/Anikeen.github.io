"use strict";

// PRODUCT BASIC COUNTER
var pbcItemCounter = document.getElementById('product-basic-counter');
var pbcMinusItem = document.getElementById('pbc-minus');
var pbcPlusItem = document.getElementById('pbc-plus');
pbcPlusItem.addEventListener('click', function () {
  pbcItemCounter.value++;
});
pbcMinusItem.addEventListener('click', function () {
  if (pbcItemCounter.value === '1') {} else {
    pbcItemCounter.value--;
  }
});