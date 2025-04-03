function changeFontSize(fz){
  console.log("test");
  const span = document.createElement("span");
  // span.classList = "editable_paragraph " + option;
  span.innerText = selection.toString();
  range.deleteContents();
  range.insertNode(span);
  span.style.fontSize = `${fz}px`
}

function setTextFormatting(option) {
  const selection = window.getSelection();
  console.log(selection.rangeCount);
  if (selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0);
  console.log("range : " + range);
  const commonAncestor = range.commonAncestorContainer; 
  console.log("commonAncestor : ", commonAncestor, " | NodeType: ", commonAncestor.nodeType);
  const ancestorElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentNode : commonAncestor; //si c'est un noeud de texte on prend son parent sinon on garde l'element en tant que tel
  // console.log("ancestorElement : " + ancestorElement);
  console.log("commonAncestor Parent (Element) : ", commonAncestor.parentNode);

    

  if (option === "align-start" || option === "align-center" || option === "align-end" || option === "align-justify") {
    ancestorElement.classList = "editable_paragraph " + option;
    return;
  }

  if (option === "html") {
    const div = document.getElementsByClassName("editor")[0];
    div.innerHTML = "";
    JSON.parse(localStorage.getItem("paragraphs")).forEach((p) => {
      const newP = document.createElement("p");
      newP.innerText = "<p>" + p + "</p>";
      div.appendChild(newP);
    });
    return;
  }

  const existingSpans = ancestorElement.querySelectorAll(`span.${option}`);

  let isInSelection = false;

  existingSpans.forEach((span) => {
    if (range.intersectsNode(span)) {
      isInSelection = true;
    }
  });

  if (isInSelection) {
    existingSpans.forEach((span) => span.classList.remove(option));
  } else {
    const span = document.createElement("span");
    span.innerText = selection.toString();
    span.classList.add(option);
    range.deleteContents();
    range.insertNode(span);
  }
}

export { setTextFormatting, changeFontSize };
