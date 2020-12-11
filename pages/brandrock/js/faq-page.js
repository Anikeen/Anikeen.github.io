"use strict";

var spreader = document.getElementsByClassName('spread');
var titles = document.querySelectorAll('.question-answer h3');

for (var i = 0; i < spreader.length; i++) {
  spreader[i].addEventListener('click', function () {
    if (this.className === 'spread hidden') {
      this.innerHTML = '-';
      var parent = this.parentNode;
      var answer = parent.getElementsByClassName('answer');
      var paragraph = parent.getElementsByClassName('answer-paragraph');
      answer[0].style.height = paragraph[0].clientHeight + 'px';
      this.classList = 'spread show';
      var question = parent.getElementsByClassName('hidden');
      question[0].className = 'show';
    } else {
      this.innerHTML = '+';
      var _parent = this.parentNode;

      var _answer = _parent.getElementsByClassName('answer');

      _answer[0].style.height = 0;
      this.className = 'spread hidden';

      var _question = _parent.getElementsByClassName('show');

      _question[0].className = 'hidden';
    }
  });
  titles[i].addEventListener('click', function () {
    if (this.className === 'hidden') {
      var parent = this.parentNode;
      var answer = parent.getElementsByClassName('answer');
      var paragraph = parent.getElementsByClassName('answer-paragraph');
      answer[0].style.height = paragraph[0].clientHeight + 'px';
      this.className = 'show';
      var spreadButton = parent.getElementsByClassName('spread hidden');
      spreadButton[0].innerHTML = '-';
      spreadButton[0].className = 'spread show';
    } else {
      var _parent2 = this.parentNode;

      var _answer2 = _parent2.getElementsByClassName('answer');

      _answer2[0].style.height = 0;
      this.className = 'hidden';

      var _spreadButton = _parent2.getElementsByClassName('spread show');

      _spreadButton[0].innerHTML = '+';
      _spreadButton[0].className = 'spread hidden';
    }
  });
}