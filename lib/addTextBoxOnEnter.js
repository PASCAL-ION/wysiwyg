"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTextBoxOnEnter = addTextBoxOnEnter;
function addTextBoxOnEnter(editor) {
  editor.addEventListener("keypress", event => {
    if (event.key === "Enter" && event.target.classList.contains("editable_paragraph")) {
      event.preventDefault();
      const newBox = document.createElement("p");
      newBox.contentEditable = "true";
      newBox.classList.add("editable_paragraph");
      editor.appendChild(newBox);
      newBox.focus();
    }
  });
}