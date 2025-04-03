import { MyWysiwyg } from "./modules/my_wysiwyg.js";

document.addEventListener("DOMContentLoaded", () => {
  let mw = new MyWysiwyg(document, {
    options: ["bold", "italic", "color", "font-size", "align-start", "align-center", "align-end", "align-justify", "html"],
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let mw = new MyWysiwyg(document.getElementById("textarea"), {
//     buttons: ["bold", "italic", "html"],
//   });
// });
