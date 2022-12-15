import spinnerGIF from "url:/icons/spinner.gif";
import fracty from "fracty";

class recipeView {
  #parentElement = document.querySelector("#recipe-container");
  #data;
  #errorMessage =
    "There is no recipe that you are looking for. Try another one";

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  renderError(error = this.#errorMessage) {
    const markup = `
      <div class="error">
        <a>${error}</a>
      </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #generateMarkup() {
    return `
      <div class="recipe-title">${this.#data.title}</div>
      <div class="recipe-image-container">
        <img src="${this.#data.image}" class="recipe-image" />
      </div>
      <div class="info-container">
        <div class="cooking-time-container">
          <i class="fa-solid fa-clock"></i>
          <a><b>${this.#data.cookingTime}</b> MINUTES</a>
        </div>
        <div class="servings-container">
          <i class="fa-solid fa-person"></i>
          <a> <b>${this.#data.servings}</b> SERVINGS</a>
          <i class="fa-solid fa-circle-minus"></i>
          <i class="fa-solid fa-circle-plus"></i>
        </div>
        <div class="servings-buttons-container">
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div class="ingredients-title">INGREDIENTS</div>
      <div class="ingredients-container">
        ${this.#data.ingredients
          .map(this.#generateMarkupIngredient)
          .join("")}       

        <div class="instructions">
          <div class="instructions-title">HOW TO COOK IT</div>
          <div class="instructions-description">
            This recipe was created by <b>${
              this.#data.author
            }</b>. <br />Check out
            directions at their website.
          </div>
          <div class="instructions-button">
            <a href="${
              this.#data.sourceUrl
            }">DIRECTIONS</a> <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
  }

  #generateMarkupIngredient(ingredient) {
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

  spinner() {
    const markup = `
      <div class="spinner">
        <img src="${spinnerGIF}" />
      </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new recipeView();
