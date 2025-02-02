import { MyWysiwyg } from "./modules/my_wysiwyg.js";

// document.addEventListener("DOMContentLoaded", () => {
//     let mw = new MyWysiwyg(document, {
//       options: ["bold", "italic", "font-size"],
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  let mw = new MyWysiwyg(document.getElementById("textarea"), {
    buttons: ["bold", "italic", "font-size"],
  });
});