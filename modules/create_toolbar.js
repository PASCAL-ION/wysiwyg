import { setTextFormatting } from "./setTextFormatting.js";

function createToolBar(options, element) {
    const HTML_toolbar = document.createElement("div"); //on crée la div qui va contenir tous les boutons
    HTML_toolbar.classList.add("toolbar");
  
    options.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = renameOptionForButton(option);
  
      button.addEventListener("click", () => setTextFormatting(option));
      HTML_toolbar.appendChild(button);
    });

    if (element.id == "textarea") {
        element.contentEditable = "true";
        element.style.width = "clamp(200px, 80%, 800px)";
        element.before(HTML_toolbar);
    } else {
        element.body.appendChild(HTML_toolbar);
    }

    // if (element == document) {
    //   createEditor(element);
    // } else {
    //   element.appendChild(HTML_toolbar);
    //   // createEditor(element);
    // }
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
  }

  export {createToolBar};