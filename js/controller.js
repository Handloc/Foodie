import * as model from "./model";
import recipeView from "./views/recipeView";
import pageView from "./views/pageView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";

if (module.hot) {
  module.hot.accept();
}

async function ShowRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.spinner();

    resultsView.update(model.getSearchResultPage());

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
    resultsView.render(model.getSearchResultPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
}

function controlPagination(goToPage) {
  resultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);
}

function controlServings(newServings) {
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
}

function controlBookmarks() {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
}

function init() {
  recipeView.addHandlerRender(ShowRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarks);
  searchView.addHandlerSearch(SearchResults);
  paginationView.addHandlerClick(controlPagination);
  pageView.pageEventListeners();
}

init();
