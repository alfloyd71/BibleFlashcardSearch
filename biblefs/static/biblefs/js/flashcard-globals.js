/**
 * FlashCardGlobals - Shared state for the index / All Cards page.
 * EditVersesGlobals - Shared state for the edit-verses / Create Card page.
 * pluralize - Returns ordinal string for a box number.
 * tallyBoxes - Counts cards per Leitner box and updates badge UI.
 */

function FlashCardGlobals() {
  this.parametersBox = 1;
  this.mycards = [];
  this.versesToAppend = [];
  this.parsedVerses = [];
  this.randomVerseIndex = 0;
  this.randomVerses = [];
  this.tallyBoxArry = [0, 0, 0, 0, 0];
  this.indexMain = document.getElementById('index-main');
  this.cardQuestion = document.getElementById('card-question');
  this.cardAnswer = document.getElementById('card-answer');
  this.boxnum = document.getElementById('boxnum');
  this.boxesMain = document.getElementById('boxes-main');
  this.showCardContainer = document.getElementById('show-card-container');
  this.insertHtml = document.getElementById('insert-html-here');
  this.boxArticle = document.getElementById('box-article');
  this.btnCheck = document.getElementById('btn-check');
  this.btnX = document.getElementById('btn-x');
}

function EditVersesGlobals() {
  this.inputArea = null;
  this.verse = '';
  this.reference = '';
  this.verses = [];
  this.versesToAppend = [];
  this.parsedVerses = [];
  this.strmyFlashCards = '';
  this.tallyBoxArry = [0, 0, 0, 0, 0];
}

function pluralize(word, number) {
  var suffixes = { 1: '1st', 2: '2nd', 3: '3rd' };
  return suffixes[number] || (number + 'th');
}

function tallyBoxes(mycards) {
  var counts = [0, 0, 0, 0, 0];
  for (var i = 0; i < mycards.length; i++) {
    var box = mycards[i].box;
    if (box >= 1 && box <= 5) {
      counts[box - 1]++;
    }
  }
  var ids = [
    'span-first-box',
    'span-second-box',
    'span-third-box',
    'span-fourth-box',
    'span-fifth-box'
  ];
  for (var j = 0; j < ids.length; j++) {
    var el = document.getElementById(ids[j]);
    if (el) {
      el.textContent = counts[j];
      el.setAttribute('aria-label', counts[j] + ' card' + (counts[j] !== 1 ? 's' : ''));
    }
  }
  return counts;
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
