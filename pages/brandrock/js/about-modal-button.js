"use strict";

var aboutButton = document.getElementById('menu-toggle');
var aboutModalWindow = document.getElementById('about-modal-wrapper');
var aboutOverlay = document.getElementById('about-overlay');
var aboutContent = document.getElementById('about-content-container');
var aboutCloseButton = document.getElementById('about-close-button');

function Handler() {
  aboutModalWindow.classList.remove('show');
  aboutContent.removeEventListener('transitionend', Handler);
}

aboutButton.addEventListener('click', function () {
  aboutModalWindow.classList.add('show');
  setTimeout(function () {
    aboutOverlay.classList.add('show');
    aboutContent.classList.add('show');
  }, 10);
});
aboutCloseButton.addEventListener('click', function () {
  aboutContent.addEventListener('transitionend', Handler);
  aboutOverlay.classList.remove('show');
  aboutContent.classList.remove('show');
});
window.addEventListener('click', function (event) {
  if (event.target === aboutOverlay) {
    aboutContent.addEventListener('transitionend', Handler);
    aboutOverlay.classList.remove('show');
    aboutContent.classList.remove('show');
  }
});