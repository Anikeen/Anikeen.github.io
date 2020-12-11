"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    nav: true,
    navText: ['<img src=\"./img/main-page/left-arrow.png\" alt=\"\">', '<img src=\"./img/main-page/right-arrow.png\" alt=\"\">'],
    loop: true
  });
});