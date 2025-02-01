import { setTextFormatting } from "./setTextFormatting.js";

function createWysiwyg(options, element) {
  createToolBar(options, element);
}

function createToolBar(options, element) {
  const HTML_toolbar = document.createElement("div"); //on crée la div qui va contenir tous les boutons
  HTML_toolbar.classList.add("toolbar");

  options.toolbar.forEach((tool) => {
    // pour chaque element present dans le tableau "toolbar", qui est un tableau dans "otpions", on crée un bouton. Ce seront nos boutons d'options
    const button = document.createElement("button");
    button.innerText = renameOptionForButton(tool);

    // * ajoute la function onclick a chaque bouttons avec comme paramêtre le nom du boutton.
    button.addEventListener("click", () => setTextFormatting(tool));
    HTML_toolbar.appendChild(button);
  });
  //verifie si la classe est instanciée avec document ou un autre element
  if (element == document) {
    element.body.appendChild(HTML_toolbar);
    createEditor(element);
  } else {
    element.appendChild(HTML_toolbar);
    createEditor(element);
  }
}

function createEditor(element) {
  const editor = document.createElement("div");
  editor.classList.add("editor");

  const paragraph = document.createElement("p");
  paragraph.innerText = "Tapez votre texte ici";
  paragraph.contentEditable = true;

  editor.appendChild(paragraph); // ajoute un premier paragraphe editable par defaut

  //verifie si la classe est instanciée avec document ou un autre element
  if (element == document) {
    element.body.appendChild(editor);
  } else {
    element.appendChild(editor);
  }
}

function renameOptionForButton(tool) {
  switch (tool) {
    case "bold":
      return "B";
    case "italic":
      return "I";
    case "deleted":
      return "S";
    case "color":
      return "Color";
    case "font-size":
      return "Font-size";
    case "link":
      return "link";
  }
  if (tool == "bold") button.innerText = "B";
}

// ✓ Gras
// ✓ Italique
// ✓ Texte barré
// ✓ Choix de la couleur
// ✓ Taille de la police
// ✓ Lien

export { createWysiwyg };
