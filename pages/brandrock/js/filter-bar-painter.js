"use strict";

var filterBarLinks = document.querySelectorAll('.category-item');

for (var i = 0; i < filterBarLinks.length; i++) {
  filterBarLinks[i].addEventListener('click', function () {
    //alert('hi');
    if (this.className === 'category-item') {
      this.classList.add('red');
    } else {
      this.classList.remove('red');
    }
  });
}