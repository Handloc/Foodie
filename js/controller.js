import * as model from "./model";
import recipeView from "./views/recipeView";
import pageView from "./views/pageView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

if (module.hot) {
  module.hot.accept();
}

async function ShowRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.spinner();

    await model.loadRecipe(id);
    const recipe = model.state.recipe;
    recipeView.spinner();
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

async function SearchResults() {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
}
function init() {
  recipeView.addHandlerRender(ShowRecipe);
  searchView.addHandlerSearch(SearchResults);
}
pageView.pageEventListeners();
init();
