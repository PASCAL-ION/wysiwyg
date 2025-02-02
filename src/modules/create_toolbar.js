
import { setTextFormatting } from "./setTextFormatting.js";

function createToolBar(options, element) {
  const HTML_toolbar = document.createElement("div"); //on crée la div qui va contenir tous les boutons
  HTML_toolbar.classList.add("toolbar");

  options.options.forEach((option) => {
    console.log(option);

    if (option === "font-size") {
      let select = document.createElement("select");
      for (let i = 2; i <= 48; i += 2) {
        let select_option = document.createElement("option");
        select_option.value = i;
        select_option.textContent = `${i}px`;
        select.appendChild(select_option);
      }
      HTML_toolbar.appendChild(select);
    } else if (option === "color") {
      let select = document.createElement("select");
      const color = ["white", "blue", "red", "purple", "green", "yellow"];
      color.forEach((color) => {
        let select_option = document.createElement("option");
        select_option.value = color;
        select_option.textContent = color;
        select.appendChild(select_option);
      });
      HTML_toolbar.appendChild(select);
    } else {
      const button = document.createElement("button");
      button.innerText = renameOptionForButton(option);
      button.addEventListener("click", () => setTextFormatting(option));
      HTML_toolbar.appendChild(button);
    }
  });

  if (element.id == "textarea") {
    element.contentEditable = "true";
    element.style.width = "clamp(200px, 80%, 800px)";
    element.before(HTML_toolbar);
  } else {
    element.body.appendChild(HTML_toolbar);
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
    case "align-start":
      return "Align start";
    case "align-center":
      return "Align center";
    case "align-end":
      return "Align end";
    case "align-justify":
      return "Align justify";
    case "html":
      return "HTML";
  }
}

export { createToolBar };
