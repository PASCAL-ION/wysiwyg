function setTextFormatting(option) {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0);
  const commonAncestor = range.commonAncestorContainer;

  const ancestorElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentNode : commonAncestor;

  const existingSpans = ancestorElement.querySelectorAll(`span.${option}`);

  let isInSelection = false;

  existingSpans.forEach(span => {
    if (range.intersectsNode(span)) {
      isInSelection = true;
    }
  });

  if (isInSelection) {
    existingSpans.forEach(span => span.classList.remove(option));
  } else {
    const span = document.createElement("span");
    span.innerText = selection.toString();
    span.classList.add(option);
    range.deleteContents();
    range.insertNode(span);
  }
}

export { setTextFormatting };
