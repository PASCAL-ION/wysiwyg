"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEditor = createEditor;
var _addTextBoxOnEnter = require("./addTextBoxOnEnter.js");
function createEditor() {
  const editor = document.createElement("div");
  editor.classList.add("editor");
  const paragraph = document.createElement("p");
  paragraph.innerText = "Tapez votre texte ici";
  paragraph.classList.add("editable_paragraph");
  paragraph.contentEditable = true;
  editor.appendChild(paragraph); // ajoute un premier paragraphe editable par defaut

  document.body.appendChild(editor);
  (0, _addTextBoxOnEnter.addTextBoxOnEnter)(editor); //fonctionnalité pour ajouter un nv p lors de l'appui sur entré
}