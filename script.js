import spinnerGIF from "url:/icons/spinner.gif";

const searchBarContainer = document.querySelector(".search-bar-container");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector("#overlay");
const menuButton = document.querySelector(".fa-bars");
const menuContainer = document.querySelector("#menu-container");
const addRecipeButton = document.querySelector(".fa-pen-to-square");
const addRecipeModal = document.querySelector(".add-recipe-modal");
const recipeContainer = document.querySelector("#recipe-container");

function eventListeners() {
  searchIcon.addEventListener("click", function () {
    searchBarContainer.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  menuButton.addEventListener("click", function () {
    menuContainer.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  addRecipeButton.parentElement.addEventListener("click", function () {
    menuContainer.classList.toggle("hidden");
    addRecipeModal.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    if (!addRecipeModal.classList.contains("hidden"))
      addRecipeModal.classList.add("hidden");
    if (!searchBarContainer.classList.contains("hidden"))
      searchBarContainer.classList.add("hidden");
    if (!menuContainer.classList.contains("hidden"))
      menuContainer.classList.add("hidden");
    overlay.classList.toggle("hidden");
  });
}

function spinner(parentElement) {
  const markup = `
    <div class="spinner">
      <img src="${spinnerGIF}" />
    </div>
  `;
  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", markup);
}

async function ShowRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    spinner(recipeContainer);
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    let recipe = data.data.recipe;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      author: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    const markup = `
        <div class="recipe-title">${recipe.title}</div>
        <div class="recipe-image-container">
          <img src="${recipe.image}" class="recipe-image" />
        </div>
        <div class="info-container">
          <div class="cooking-time-container">
            <i class="fa-solid fa-clock"></i>
            <a><b>${recipe.cookingTime}</b> MINUTES</a>
          </div>
          <div class="servings-container">
            <i class="fa-solid fa-person"></i>
            <a> <b>${recipe.servings}</b> SERVINGS</a>
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
          ${recipe.ingredients
            .map((ingredient) => {
              return `
            <div class="ingredient">
              <i class="fa-solid fa-square-check"></i>
              <a class="ingredent-quantity">${ingredient.quantity}</a>
              <a class="ingredent-unit">${ingredient.unit}</a>
              <a>${ingredient.description}</a>
            </div>
            `;
            })
            .join("")}        

          <div class="instructions">
            <div class="instructions-title">HOW TO COOK IT</div>
            <div class="instructions-description">
              This recipe was created by <b>${
                recipe.author
              }</b>. <br />Check out
              directions at their website.
            </div>
            <div class="instructions-button">
              <a href="${
                recipe.sourceUrl
              }">DIRECTIONS</a> <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
    `;
    recipeContainer.innerHTML = "";
    recipeContainer.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    console.log(err);
  }
}

eventListeners();

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, ShowRecipe)
);
