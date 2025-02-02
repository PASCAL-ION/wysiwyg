function setTextFormatting(tool) {
  console.log("test");
  const selection = window.getSelection();
  // * recupere la sélection de la souris a l'index 0.
  if (selection.rangeCount === 0) {
    return; // Aucune sélection, rien à formater
  }
  const range = selection.getRangeAt(0);
  const commonAncestor = range.commonAncestorContainer;

  // Si le commonAncestorContainer est un nœud de texte alors on prend son parent (pour avoir la span)
  const ancestorElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentNode : commonAncestor;

  // Vérifie si le texte sélectionné est déjà dans un span avec la classe correspondante
  const existingSpans = ancestorElement.querySelectorAll(`span.${tool}`);

  let isInSelection = false;

  // Vérifie si les spans trouvés sont dans la sélection actuelle
  existingSpans.forEach(span => {
    if (range.intersectsNode(span)) {
      isInSelection = true;
    }
  });

  if (isInSelection) {
    // Si le span existe déjà dans la sélection, retire la classe de tous les spans trouvés
    existingSpans.forEach(span => span.classList.remove(tool));
  } else {
    // Sinon, crée un nouveau span avec la classe
    const span = document.createElement("span");
    span.innerText = selection.toString();
    span.classList.add(tool);
    range.deleteContents();
    range.insertNode(span);
  }
}

if (tool ==="font-size") {
  let select = document.createElement("select");
  for (i = 2; i <= 48; i += 2) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
  return select;
}
return null;

export {
  setTextFormatting
};