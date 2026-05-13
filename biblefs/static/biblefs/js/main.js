/**
 * main.js - Controls the All Cards (index) page.
 *
 * Reads flashcards from localStorage, renders the card list grouped by box,
 * handles the single-card box study view (check / x), and card deletion.
 *
 * Depends on: flashcard-globals.js (FlashCardGlobals, pluralize, tallyBoxes, escapeHtml)
 */

var flashCardGlobalsInstance;

/* ---------- helpers ---------- */

function showRandomVerse(box) {
  var g = flashCardGlobalsInstance;
  g.boxnum.textContent = pluralize('box', parseInt(box, 10)) + ' Box';

  var card = g.randomVerses[g.randomVerseIndex];
  g.cardQuestion.textContent = card.question;
  g.cardAnswer.textContent = card.answer;
}

function saveCards() {
  localStorage.setItem('bible-flash-cards', JSON.stringify(flashCardGlobalsInstance.mycards));
}

/* ---------- event listeners for check / x buttons ---------- */

function attachEventListeners() {
  var g = flashCardGlobalsInstance;
  if (!g.btnCheck || !g.btnX) return;

  g.btnCheck.addEventListener('click', function () {
    var card = g.randomVerses[g.randomVerseIndex];
    for (var i = 0; i < g.mycards.length; i++) {
      if (g.mycards[i].answer === card.answer) {
        var nextBox = parseInt(g.parametersBox, 10) + 1;
        if (nextBox <= 5) {
          g.mycards[i].box = nextBox;
        }
        saveCards();
        break;
      }
    }
    window.location.href = '?box=' + g.parametersBox;
  });

  g.btnX.addEventListener('click', function () {
    var card = g.randomVerses[g.randomVerseIndex];
    for (var i = 0; i < g.mycards.length; i++) {
      if (g.mycards[i].answer === card.answer) {
        g.mycards[i].box = 1;
        saveCards();
        break;
      }
    }
    window.location.href = '?box=' + g.parametersBox;
  });
}

/* ---------- render all cards grouped by box ---------- */

function renderAllCards() {
  var g = flashCardGlobalsInstance;
  var container = g.insertHtml;
  var emptyState = document.getElementById('empty-state');

  if (!g.mycards.length) {
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  g.mycards.sort(function (a, b) { return a.box - b.box; });

  var html = '';
  var seenQuestions = {};
  var renderedBoxHeaders = {};

  for (var i = 0; i < g.mycards.length; i++) {
    var card = g.mycards[i];
    if (seenQuestions[card.question]) continue;
    seenQuestions[card.question] = true;

    if (!renderedBoxHeaders[card.box]) {
      renderedBoxHeaders[card.box] = true;
      html += '<h3 class="box-group-label">' + pluralize('box', card.box) + ' Box</h3>';
    }

    html += '<div class="card-list-item" role="listitem">' +
      '<h4>' + escapeHtml(card.question) + '</h4>' +
      '<p>' + escapeHtml(card.answer) + '</p>' +
      '<div class="card-actions">' +
        '<a href="?box=' + card.box + '" class="btn btn-outline" style="font-size:0.8125rem;padding:0.375rem 0.75rem;">Study</a>' +
        '<a href="?pk=' + i + '&box=' + card.box + '&delete=true" class="btn btn-danger" style="font-size:0.8125rem;padding:0.375rem 0.75rem;">Delete</a>' +
      '</div>' +
    '</div>';
  }

  container.innerHTML = html;
}

/* ---------- handle URL parameters (box view, delete) ---------- */

function handleUrlParams() {
  var g = flashCardGlobalsInstance;
  var params = new URLSearchParams(window.location.search);

  var pk = params.get('pk');
  var boxParam = params.get('box');
  var deleteFlag = params.get('delete');

  if (pk !== null && boxParam && deleteFlag) {
    var index = parseInt(pk, 10);
    if (index >= 0 && index < g.mycards.length) {
      var confirmed = window.confirm(
        'Delete ' + g.mycards[index].answer + '?\n\n"' + g.mycards[index].question + '"'
      );
      if (confirmed) {
        g.mycards.splice(index, 1);
        saveCards();
      }
    }
    window.location.href = window.location.pathname;
    return;
  }

  if (boxParam && !deleteFlag) {
    g.parametersBox = boxParam;
    g.randomVerses = [];

    for (var i = 0; i < g.mycards.length; i++) {
      if (g.mycards[i].box === parseInt(boxParam, 10)) {
        g.randomVerses.push(g.mycards[i]);
      }
    }

    g.randomVerseIndex = Math.floor(Math.random() * g.randomVerses.length);

    if (g.indexMain) g.indexMain.classList.add('hidden');
    if (g.boxesMain) g.boxesMain.classList.remove('hidden');

    if (g.randomVerses.length > 0) {
      if (g.showCardContainer) g.showCardContainer.style.display = 'block';
      showRandomVerse(boxParam);
    } else {
      if (g.showCardContainer) g.showCardContainer.style.display = 'none';
      g.boxnum.textContent = pluralize('box', parseInt(boxParam, 10)) + ' Box - Empty';
    }
  }
}

/* ---------- init ---------- */

document.addEventListener('DOMContentLoaded', function () {
  flashCardGlobalsInstance = new FlashCardGlobals();
  flashCardGlobalsInstance.mycards = JSON.parse(localStorage.getItem('bible-flash-cards')) || [];

  tallyBoxes(flashCardGlobalsInstance.mycards);
  renderAllCards();
  handleUrlParams();
  attachEventListeners();
});
