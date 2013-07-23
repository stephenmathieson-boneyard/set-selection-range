
'use strict';

var support = document.createElement('input').setSelectionRange;

/**
 * Set selection range from `start` to `end`
 *
 * @api public
 * @param {HTMLElement} element
 * @param {Number} start
 * @param {Number} end
 */
module.exports = function (element, start, end) {
  if (support) {
    return element.setSelectionRange(start, end);
  }

  var range = element.createTextRange();

  range.collapse(true);
  range.moveStart('character', start);
  range.moveEnd('character', end - start);
  range.select();
};
