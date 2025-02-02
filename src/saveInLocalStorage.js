function saveInLocalStorage() {
    setInterval(() => checkDOMAndSave(), 2 * 60 * 1000); // 2 minutes
}

const save_button = document.getElementById("saveInLocalStorage");
if (save_button) {
    save_button.addEventListener("click", checkDOMAndSave);
}

function checkDOMAndSave() {
    const paragraphs = document.querySelectorAll(".editable_paragraph");
    let content_array = [];

    paragraphs.forEach((element) => {
        content_array.push(element.innerHTML);
    });

    localStorage.setItem("paragraphs", JSON.stringify(content_array));
}

function restoreFromLocalStorage() {
    const editor = document.querySelector(".editor");
    if (!editor) return;

    let saved_paragraphs = JSON.parse(localStorage.getItem("paragraphs")) || [];

    if (saved_paragraphs.length > 0) {
        editor.innerHTML = "";

        saved_paragraphs.forEach((text) => {
            const newBox = document.createElement("p");
            newBox.contentEditable = "true";
            newBox.classList.add("editable_paragraph");
            newBox.innerHTML = text;

            editor.appendChild(newBox);
        });
    }
}

window.addEventListener("beforeunload", (event) => {
    let saved_paragraphs = JSON.parse(localStorage.getItem("paragraphs")) || [];
    const dom_paragraphs = document.querySelectorAll(".editable_paragraph");
    const dom_contents = Array.from(dom_paragraphs).map(p => p.innerHTML.trim()); //dom_paragraphs est une nodelist et non un tableau js donc on le transforme en tableau pour pourvoir utiliser map dessus.
    //map va ensuite créer un nouveau tableau avec le contenu de tous les paragraphes. Le trim enlève simplement les espaces du début et fin de phrase.

    // console.log(JSON.stringify(saved_paragraphs));
    // console.log(JSON.stringify(dom_contents));
    if (JSON.stringify(saved_paragraphs) !== JSON.stringify(dom_contents)) { // on convertit les deux tableaux en string json pour pouvoi les comparer facilement avec l'operateur !==
        event.preventDefault();
    }
});

window.onload = function () {
    restoreFromLocalStorage();
    saveInLocalStorage();
};

export { saveInLocalStorage };
