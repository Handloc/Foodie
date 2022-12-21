import fracty from "fracty";
import View from "./View";

class recipeView extends View {
  _parentElement = document.querySelector("#recipe-container");
  _errorMessage =
    "There is no recipe that you are looking for. Try another one";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const servingsButton = e.target.closest(".servings-button");
      if (!servingsButton) return;
      const updateTo = +servingsButton.dataset.updateTo;
      if (updateTo > 0) handler(updateTo);
    });
  }

  _generateMarkup() {
    return `
      <div class="recipe-title">${this._data.title}</div>
      <div class="recipe-image-container">
        <img src="${this._data.image}" class="recipe-image" />
      </div>
      <div class="info-container">
        <div class="cooking-time-container">
          <i class="fa-solid fa-clock"></i>
          <a><b>${this._data.cookingTime}</b> MINUTES</a>
        </div>
        <div class="servings-container">
          <i class="fa-solid fa-person"></i>
          <a> <b>${this._data.servings}</b> SERVINGS</a>
          <i class="fa-solid servings-button fa-circle-minus" data-update-to="${
            this._data.servings - 1
          }"></i>
          <i class="fa-solid servings-button fa-circle-plus" data-update-to="${
            this._data.servings + 1
          }"></i>
        </div>
        <div class="servings-buttons-container">
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div class="ingredients-title">INGREDIENTS</div>
      <div class="ingredients-container">
        ${this._data.ingredients
          .map(this._generateMarkupIngredient)
          .join("")}       

        <div class="instructions">
          <div class="instructions-title">HOW TO COOK IT</div>
          <div class="instructions-description">
            This recipe was created by <b>${
              this._data.author
            }</b>. <br />Check out
            directions at their website.
          </div>
          <div class="instructions-button">
            <a href="${
              this._data.sourceUrl
            }">DIRECTIONS</a> <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
  }

  _generateMarkupIngredient(ingredient) {
    return `
      <div class="ingredient">
        <i class="fa-solid fa-square-check"></i>
        <a class="ingredient-quantity">
          ${ingredient.quantity ? fracty(ingredient.quantity) : ""}
        </a>
        <a class="ingredient-unit">${ingredient.unit}</a>
        <a>${ingredient.description}</a>
      </div>
    `;
  }
}

export default new recipeView();
