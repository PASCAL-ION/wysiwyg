function setTextFormatting(option) {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0);
  const commonAncestor = range.commonAncestorContainer;
  const ancestorElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentNode : commonAncestor;

  if (option === "align-start" || option === "align-center" || option === "align-end" || option === "align-justify") {
    ancestorElement.classList = "editable_paragraph " + option;
    return;
  }

  if (option === "html") {
    console.log();
    const div = document.getElementsByClassName("editor")[0];
    div.innerHTML = "";
    JSON.parse(localStorage.getItem("paragraphs")).forEach((p) => {
      const newP = document.createElement("p");
      newP.innerText = p;
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

export { setTextFormatting };