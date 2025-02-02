"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTextFormatting = setTextFormatting;
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
function setTextFormatting(option) {
  const selection = window.getSelection(); //on recupere un objet selection
  if (selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0); //on recupere dans l'objet selection le texte séléctionné grace a getRangeAt(0) qui retourne un objet range de la premiere selection 
  const commonAncestor = range.commonAncestorContainer;
  const ancestorElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentNode : commonAncestor;
  const existingSpans = ancestorElement.querySelectorAll("span.".concat(option));
  let isInSelection = false;
  existingSpans.forEach(span => {
    if (range.intersectsNode(span)) {
      isInSelection = true;
    }
  });
  if (isInSelection) {
    existingSpans.forEach(span => span.classList.remove(option));
  } else {
    const span = document.createElement("span");
    span.innerText = selection.toString();
    span.classList.add(option);
    range.deleteContents();
    range.insertNode(span);
  }
}