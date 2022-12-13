import * as model from "./model";
import recipeView from "./views/recipeView";

const searchBarContainer = document.querySelector(".search-bar-container");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector("#overlay");
const menuButton = document.querySelector(".fa-bars");
const menuContainer = document.querySelector("#menu-container");
const addRecipeButton = document.querySelector(".fa-pen-to-square");
const addRecipeModal = document.querySelector(".add-recipe-modal");

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

async function ShowRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.spinner();

    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    recipeView.render(recipe);
  } catch (err) {
    console.log(err);
  }
}

eventListeners();

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, ShowRecipe)
);
