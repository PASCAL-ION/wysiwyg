import { setTextFormatting } from "./setTextFormatting.js";

function createToolBar(options, element) {
    const HTML_toolbar = document.createElement("div"); //on crée la div qui va contenir tous les boutons
    HTML_toolbar.classList.add("toolbar");
  
    options.options.forEach((option) => {

      if (option === "font-size") {
        let select = document.createElement("select");
        for (let i = 2; i <= 48; i += 2) {
          let select_option = document.createElement("option");
          select_option.value = i;
          select_option.textContent = `${i}px`;
          select.appendChild(select_option);
        }
        HTML_toolbar.appendChild(select);
      } else {
        const button = document.createElement("button");
        button.innerText = renameOptionForButton(option);
        button.addEventListener("click", () => setTextFormatting(option));
        HTML_toolbar.appendChild(button);
      }
      
      // if (option == "link") { 
      //   let link = document.createElement("a");
      //   link.href = "https://example.com/";
      //   link.textContent = textElement.textContent;
      
      //   textElement.replaceWith(link); // met la selection sous forme de lien mais garde les élements d'origine
      // }

  
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