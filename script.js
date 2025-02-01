import { MyWysiwyg } from "./modules/my_wysiwyg.js";

document.addEventListener("DOMContentLoaded", () => {
    let mw = new MyWysiwyg(document, {
      toolbar: ["bold", "italic", "font-size"],
    });
});