import { createWysiwyg } from "./create_wysiwyg.js";

class MyWysiwyg {
  constructor(element, options = {}) {
    this.element = element;

    this.options = Object.assign(
      /* la methode assign va ajouter dans "toolbar" tout ce qu'il y a dans "options" (dans options ce sont les options que l'utilisateur aura entré)
      les options presentes dans "option" écraseront celles dans toolbar */
      {
        toolbar: ["bold", "italic", "underline"], //options par defaut
      },
      options
    );

    createWysiwyg(this.options, this.element);
  }
}

export { MyWysiwyg };
