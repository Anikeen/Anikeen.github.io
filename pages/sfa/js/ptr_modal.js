"use strict";

window.addEventListener('load', function () {
  function modalTransitionHandler() {
    this.parentNode.classList.remove('open');
    document.body.classList.remove('no-scroll');
    this.removeEventListener('transitionend', modalTransitionHandler);
  }

  var modalTargets = document.querySelectorAll('[data-modal-target]');
  var modals = document.querySelectorAll('[data-modal-window]');

  for (var i = 0; i <= modalTargets.length - 1; i++) {
    modalTargets[i].addEventListener('click', function () {
      var target = this.getAttribute('data-modal-target');
      var childModal = document.querySelectorAll("[data-modal-window=\"".concat(target, "\"]"));
      document.body.classList.add('no-scroll');
      childModal[0].classList.add('open');
      setTimeout(function () {
        var childLayout = childModal[0].getElementsByClassName('modal-window_layout');
        var childModalContainer = childModal[0].getElementsByClassName('modal-window_container');
        childLayout[0].classList.add('open');
        childModalContainer[0].classList.add('open');
      }, 10);
    });
  }

  var _loop = function _loop(_i) {
    var layout = modals[_i].getElementsByClassName('modal-window_layout');

    var container = modals[_i].getElementsByClassName('modal-window_container');

    var closeButton = modals[_i].getElementsByClassName('modal-closer');

    layout[0].addEventListener('click', function () {
      layout[0].addEventListener('transitionend', modalTransitionHandler);
      container[0].classList.remove('open');
      this.classList.remove('open');
    });
    closeButton[0].addEventListener('click', function () {
      layout[0].addEventListener('transitionend', modalTransitionHandler);
      container[0].classList.remove('open');
      layout[0].classList.remove('open');
    });
  };

  for (var _i = 0; _i <= modals.length - 1; _i++) {
    _loop(_i);
  }
});