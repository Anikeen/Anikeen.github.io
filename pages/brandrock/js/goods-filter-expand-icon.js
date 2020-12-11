"use strict";

var expandIcon = document.getElementsByClassName('expand-icon');
var subCategory = document.getElementsByClassName('sub-category');

for (var i = 0; i < expandIcon.length; i++) {
  expandIcon[i].addEventListener('click', function () {
    if (this.innerHTML != '-') {
      this.innerHTML = '-';
      var parent = this.parentNode;
      var subCatParent = parent.getElementsByClassName('sub-category-parent');
      var subCat = parent.getElementsByClassName('sub-category');
      subCatParent[0].style.height = subCat[0].clientHeight + 'px';
    } else {
      this.innerHTML = '+';
      var _parent = this.parentNode;

      var _subCatParent = _parent.getElementsByClassName('sub-category-parent');

      _subCatParent[0].style.height = 0;
    }
  });
}