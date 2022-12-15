import * as model from "./model";
import recipeView from "./views/recipeView";
import pageView from "./views/pageView";

function init() {
  recipeView.addHandlerRender(ShowRecipe);
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
    recipeView.renderError();
  }
}

pageView.pageEventListeners();
init();
