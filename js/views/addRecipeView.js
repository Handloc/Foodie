import View from "./View";

class addRecipeView extends View {
  _parentElement = document.querySelector(".upload-form");

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      console.log("Submmitted");
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
