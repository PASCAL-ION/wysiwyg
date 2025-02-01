function setTextFormatting(tool) {
  console.log("test");
  const selection = window.getSelection();
  // * recupere la sélection de la souris a l'index 0.
  if (selection.rangeCount === 0) {
    return; // Aucune sélection, rien à formater
  }
  const range = selection.getRangeAt(0);
  const node = document.createElement("span");
  node.innerText = selection.toString();

  switch (tool) {
    case "italic":
      node.classList.contains("italic") ? node.classList.remove("italic") : node.classList.add("italic");
      break;
    case "bold":
      node.classList.contains("bold") ? node.classList.remove("bold") : node.classList.add("bold");
      break;
  }

  range.deleteContents();
  range.insertNode(node);
}

export { setTextFormatting };
