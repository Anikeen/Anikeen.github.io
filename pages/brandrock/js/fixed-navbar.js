"use strict";

var navbar = document.getElementById('navbar-top-wrapper');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});