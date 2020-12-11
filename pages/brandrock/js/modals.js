"use strict";

var body = document.getElementsByTagName('body'); // WISHLIST MODAL

var wishlistButton = document.getElementById('wishlist-toggle');
var wishlistModalWindow = document.getElementById('wishlist-modal-wrapper');
var wishlistOverlay = document.getElementById('wishlist-overlay');
var wishlistContent = document.getElementById('wishlist-content-container');
var wishlistCloseButton = document.getElementById('wishlist-close-button');

function wishlistHandler() {
  wishlistModalWindow.classList.remove('show');
  wishlistContent.removeEventListener('transitionend', wishlistHandler);
}

wishlistButton.addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  wishlistModalWindow.classList.add('show');
  setTimeout(function () {
    wishlistOverlay.classList.add('show');
    wishlistContent.classList.add('show');
  }, 10);
});
wishlistCloseButton.addEventListener('click', function () {
  wishlistContent.addEventListener('transitionend', wishlistHandler);
  wishlistOverlay.classList.remove('show');
  wishlistContent.classList.remove('show');
});
window.addEventListener('click', function (event) {
  if (event.target === wishlistOverlay) {
    wishlistContent.addEventListener('transitionend', wishlistHandler);
    wishlistOverlay.classList.remove('show');
    wishlistContent.classList.remove('show');
    body[0].removeAttribute('style');
  }
}); // CART MODAL 

var cartButton = document.getElementById('cart-toggle');
var cartModalWindow = document.getElementById('cart-modal-wrapper');
var cartOverlay = document.getElementById('cart-overlay');
var cartContent = document.getElementById('cart-content-container');
var cartCloseButton = document.getElementById('cart-close-button');

function cartHandler() {
  cartModalWindow.classList.remove('show');
  cartContent.removeEventListener('transitionend', cartHandler);
}

cartButton.addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  cartModalWindow.classList.add('show');
  setTimeout(function () {
    cartOverlay.classList.add('show');
    cartContent.classList.add('show');
  }, 10);
});
cartCloseButton.addEventListener('click', function () {
  cartContent.addEventListener('transitionend', cartHandler);
  cartOverlay.classList.remove('show');
  cartContent.classList.remove('show');
  body[0].removeAttribute('style');
});
window.addEventListener('click', function (event) {
  if (event.target === cartOverlay) {
    cartContent.addEventListener('transitionend', cartHandler);
    cartOverlay.classList.remove('show');
    cartContent.classList.remove('show');
    body[0].removeAttribute('style');
  }
}); // AUTHORIZATION MODAL

var authorizationButton = document.getElementById('authorization-toggle');
var authorizationModalWindow = document.getElementById('authorization-modal-wrapper');
var authorizationOverlay = document.getElementById('authorization-overlay');
var authorizationForm = document.getElementById('authorization-form'); //let authorizationCloseButton = document.getElementById('authorization-close-button');

function authorizationHandler() {
  authorizationModalWindow.classList.remove('show');
  authorizationForm.removeEventListener('transitionend', authorizationHandler);
}

authorizationButton.addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  authorizationModalWindow.classList.add('show');
  setTimeout(function () {
    authorizationOverlay.classList.add('show');
    authorizationForm.classList.add('show');
  }, 10);
});
window.addEventListener('click', function (event) {
  if (event.target === authorizationOverlay) {
    authorizationForm.addEventListener('transitionend', authorizationHandler);
    authorizationOverlay.classList.remove('show');
    authorizationForm.classList.remove('show');
    body[0].removeAttribute('style');
  }
}); // REGISTRATION MODAL

var registrationButton = document.getElementById('registration-toggle');
var registrationModalWindow = document.getElementById('registration-modal-wrapper');
var registrationOverlay = document.getElementById('registration-overlay');
var registrationForm = document.getElementById('registration-form'); //let registrationCloseButton = document.getElementById('registration-close-button');

function registrationHandler() {
  registrationModalWindow.classList.remove('show');
  registrationForm.removeEventListener('transitionend', registrationHandler);
}

registrationButton.addEventListener('click', function () {
  authorizationOverlay.classList.remove('show');
  authorizationHandler();
  registrationModalWindow.classList.add('show');
  setTimeout(function () {
    registrationOverlay.classList.add('show');
    registrationForm.classList.add('show');
  }, 10);
});
window.addEventListener('click', function (event) {
  if (event.target === registrationOverlay) {
    registrationForm.addEventListener('transitionend', registrationHandler);
    registrationOverlay.classList.remove('show');
    registrationForm.classList.remove('show');
    body[0].removeAttribute('style');
  }
}); // SEARCH MODAL

var searchButton = document.getElementById('search-toggle');
var searchModalWindow = document.getElementById('search-modal');
var searchCloseButton = document.getElementById('search-modal-close-button');

function searchHandler() {
  searchModalWindow.classList.remove('show');
  body[0].removeAttribute('style');
  searchModalWindow.removeEventListener('transitionend', searchHandler);
}

searchButton.addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  searchModalWindow.style.display = 'flex';
  setTimeout(function () {
    return searchModalWindow.classList.add('show');
  }, 10);
});
searchCloseButton.addEventListener('click', function () {
  searchModalWindow.addEventListener('transitionend', searchHandler);
  searchModalWindow.classList.remove('show');
}); // MENU MODAL

var menuButton = document.getElementById('menu-toggle');
var menuModalWindow = document.getElementById('menu-modal-wrapper');
var menuOverlay = document.getElementById('menu-overlay');
var menuContent = document.getElementById('menu-content-container');
var menuCloseButton = document.getElementById('menu-close-button');

function menuHandler() {
  menuModalWindow.classList.remove('show');
  menuContent.removeEventListener('transitionend', menuHandler);
}

menuButton.addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  menuModalWindow.classList.add('show');
  setTimeout(function () {
    menuOverlay.classList.add('show');
    menuContent.classList.add('show');
  }, 10);
});
menuCloseButton.addEventListener('click', function () {
  menuContent.addEventListener('transitionend', menuHandler);
  menuOverlay.classList.remove('show');
  menuContent.classList.remove('show');
});
window.addEventListener('click', function (event) {
  if (event.target === menuOverlay) {
    menuContent.addEventListener('transitionend', menuHandler);
    menuOverlay.classList.remove('show');
    menuContent.classList.remove('show');
    body[0].removeAttribute('style');
  }
});