(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph(name) {
          let newParagraph2 = document.createElement("p");
          newParagraph2.textContent = name;
          this.mainContainerEl.append(newParagraph2);
          return newParagraph2;
        }
        clearParagraph() {
          let paragraphs = document.querySelectorAll("p");
          paragraphs.forEach((element) => {
            element.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  var newParagraph = view.addParagraph("This is a new paragraph!");
})();
