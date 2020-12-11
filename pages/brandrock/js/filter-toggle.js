"use strict";

var filterToggle = document.getElementById('filter-toggle');
var filterParent = document.getElementById('goods-filter-options-parent');
var filterOptions = document.getElementById('goods-filter-options');
filterToggle.addEventListener('click', function () {
  if (filterToggle.className === 'off') {
    filterToggle.classList.add('red');
    filterParent.style.height = filterOptions.clientHeight + 'px';
    setTimeout(function () {
      return filterParent.style.height = 'auto';
    }, 500);
  } else {
    filterParent.style.height = filterOptions.clientHeight + 'px';
    setTimeout(function () {
      return filterParent.style.height = 0;
    }, 0);
    filterToggle.classList.remove('red');
  }
}); //QUICK VIEW MODAL  

var qvmButton = document.getElementsByClassName('qvm-button');
var qvmModalWindow = document.getElementById('quick-view-modal-wrapper');
var qvmOverlay = document.getElementById('quick-view-modal-overlay');
var qvmContent = document.getElementById('quick-view-modal');
var qvmCloseButton = document.getElementById('qvmd-close-button');

function qvmHandler() {
  qvmModalWindow.classList.remove('show');
  qvmContent.removeEventListener('transitionend', qvmHandler);
}

for (var i = 0; i <= qvmButton.length - 1; i++) {
  qvmButton[i].addEventListener('click', function () {
    body[0].style.overflow = 'hidden';
    qvmModalWindow.classList.add('show');
    setTimeout(function () {
      qvmOverlay.classList.add('show');
      qvmContent.classList.add('show');
    }, 10);
  });
}

qvmCloseButton.addEventListener('click', function () {
  qvmContent.addEventListener('transitionend', qvmHandler);
  qvmOverlay.classList.remove('show');
  qvmContent.classList.remove('show');
  body[0].removeAttribute('style');
});
window.addEventListener('click', function (event) {
  if (event.target === qvmOverlay) {
    qvmContent.addEventListener('transitionend', qvmHandler);
    qvmOverlay.classList.remove('show');
    qvmContent.classList.remove('show');
    body[0].removeAttribute('style');
  }
}); // ITEM COUNTER

var itemCounter = document.getElementById('qvmd-item-counter');
var minusItem = document.getElementById('qvmd-item-counter-minus');
var plusItem = document.getElementById('qvmd-item-counter-plus');
plusItem.addEventListener('click', function () {
  itemCounter.value++;
});
minusItem.addEventListener('click', function () {
  if (itemCounter.value === '1') {} else {
    itemCounter.value--;
  }
});