/**
 * edit-verses.js - Controls the Create Card (edit-verses) page.
 *
 * Handles saving a searched verse to localStorage flashcards,
 * and removing all flashcards.
 *
 * Depends on: flashcard-globals.js (EditVersesGlobals, FlashCardGlobals, tallyBoxes)
 */

var editVersesGlobalsInstance;
var flashCardGlobalsInstance;

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (ch) { return ch.toUpperCase(); });
}

function runEditVersesMain() {
  var verseText = document.getElementById('verse-text').textContent;
  editVersesGlobalsInstance.reference = document.getElementById('versereference').textContent;

  var mycards = JSON.parse(localStorage.getItem('bible-flash-cards')) || [];
  editVersesGlobalsInstance.parsedVerses = mycards;

  tallyBoxes(mycards);

  var saveBtn = document.getElementById('button-save-verse');
  saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var ref = capitalizeWords(editVersesGlobalsInstance.reference);
    var alreadyExists = false;

    for (var i = 0; i < mycards.length; i++) {
      if (mycards[i].answer === ref) {
        alreadyExists = true;
        break;
      }
    }

    if (alreadyExists) {
      window.alert(ref + ' is already in your flashcards.');
      return;
    }

    var confirmed = window.confirm('Add ' + ref + ' to your flashcards?');
    if (confirmed) {
      mycards.push({ question: verseText, answer: ref, box: 1 });
      localStorage.setItem('bible-flash-cards', JSON.stringify(mycards));
      window.alert(ref + ' has been added to your flashcards.');
      tallyBoxes(mycards);
    }
  });

  var removeBtn = document.getElementById('button-remove-verses');
  removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var confirmed = window.confirm('Remove ALL flashcards? This cannot be undone.');
    if (confirmed) {
      localStorage.removeItem('bible-flash-cards');
      mycards.length = 0;
      window.alert('All flashcards have been removed.');
      tallyBoxes(mycards);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  flashCardGlobalsInstance = new FlashCardGlobals();
  editVersesGlobalsInstance = new EditVersesGlobals();
  runEditVersesMain();
});
