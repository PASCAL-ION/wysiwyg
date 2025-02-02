import { MyWysiwyg } from "./modules/my_wysiwyg.js";

document.addEventListener("DOMContentLoaded", () => {
    let mw = new MyWysiwyg(document, {
      options: ["bold", "italic", "deleted", "color", "font-size", "link"],
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let mw = new MyWysiwyg(document.getElementById("textarea"), {
//     buttons: ["bold", "italic", "font-size"],
//   });
// });