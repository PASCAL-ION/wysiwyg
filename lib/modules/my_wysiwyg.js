"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyWysiwyg = void 0;
require("core-js/modules/es.object.assign.js");
var _create_toolbar = require("./create_toolbar.js");
var _create_editorJs = require("./create_editor.js.js");
var _saveInLocalStorage = require("./saveInLocalStorage.js");
class MyWysiwyg {
  constructor(element) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.element = element;
    this.options = Object.assign({
      options: ["bold", "italic"] //options par defaut
    }, options);
    if (element == document) {
      (0, _create_toolbar.createToolBar)(this.options, this.element);
      (0, _create_editorJs.createEditor)();
    } else if (element.id == "textarea") {
      (0, _create_toolbar.createToolBar)(this.options, this.element);
    } else {
      alert("Impossible de créer un éditeur sur un élement qui ne dispose pas de l'id 'textarea'");
    }
    (0, _saveInLocalStorage.saveInLocalStorage)();
  }
}
exports.MyWysiwyg = MyWysiwyg;