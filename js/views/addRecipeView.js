import View from "./View";

class addRecipeView extends View {
  _parentElement = document.querySelector(".upload-form");
  _overlay = document.querySelector("#overlay");
  _addRecipeModal = document.querySelector(".add-recipe-modal");
  _message = "Recipe was successfully uploaded";

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._addRecipeModal.classList.toggle("hidden");
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
