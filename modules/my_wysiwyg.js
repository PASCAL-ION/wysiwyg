import { createToolBar } from "./create_toolbar.js";
import { createEditor } from "./create_editor.js";

class MyWysiwyg {
  constructor(element, options = {}) {
    this.element = element;

    this.options = Object.assign(
      {
        options: ["bold", "italic", "underline"], //options par defaut
      },
      options
    );

    if (element == document) {
      createToolBar(this.options, this.element);
      createEditor();
    } else if (element.id == "textarea") {
      createToolBar(this.options, this.element);
    } else {
      alert("Impossible de créer un éditeur sur un élement qui ne dispose pas de l'id 'textarea'");
    }
  }
}

export { MyWysiwyg };
