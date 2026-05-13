/**
 * Counts the cards in each Leitner box and updates the box-count badges in the UI.
 * @param {Array} mycards - Array of card objects with a `box` property (1-5).
 */
function tallyBoxes(mycards) {
  // Determine which globals instance is active
  var flashCardGlobalsInstance = window.flashCardGlobalsInstance; // Declare flashCardGlobalsInstance
  var editVersesGlobalsInstance = window.editVersesGlobalsInstance; // Declare editVersesGlobalsInstance
  var globals = (typeof flashCardGlobalsInstance !== 'undefined' && flashCardGlobalsInstance)
    ? flashCardGlobalsInstance
    : (typeof editVersesGlobalsInstance !== 'undefined' && editVersesGlobalsInstance)
      ? editVersesGlobalsInstance
      : null;

  var counts = [0, 0, 0, 0, 0];

  for (var i = 0; i < mycards.length; i++) {
    var box = mycards[i].box;
    if (box >= 1 && box <= 5) {
      counts[box - 1]++;
    }
  }

  if (globals) {
    globals.tallyBoxArry = counts;
  }

  // Update the badge elements
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
}
