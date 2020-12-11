"use strict";

var checkboxes = document.getElementsByClassName('checkbox');
var labels = document.querySelectorAll('.method label');
var previousElement;
var checkbox;

for (var i = 0; i <= checkboxes.length - 1; i++) {
  checkboxes[i].addEventListener('click', function () {
    if (previousElement) {
      console.log('true');
      previousElement.classList.remove('checked');
      this.classList.add('checked');
      previousElement = this;
    } else {
      console.log('false');
      this.classList.add('checked');
      previousElement = this;
    }
  });
  labels[i].addEventListener('click', function () {
    if (previousElement) {
      console.log('true');
      previousElement.classList.remove('checked');
      checkbox = this.parentNode.getElementsByClassName('checkbox');
      checkbox[0].classList.add('checked');
      previousElement = checkbox[0];
    } else {
      console.log('false');
      checkbox = this.parentNode.getElementsByClassName('checkbox');
      checkbox[0].classList.add('checked');
      previousElement = checkbox[0];
    }
  });
}