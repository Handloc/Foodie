import { API_URL } from "./config";
import { getJSON } from "./helpers";
import { setResultsPerPage } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    //resultsPerPage: RES_PER_PAGE,
  },
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      author: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
}

export async function loadSearchResults(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
}

export function getSearchResultPage(page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * setResultsPerPage();
  const end = page * setResultsPerPage();
  return state.search.results.slice(start, end);
}

export function updateServings(numOfServings) {
  state.recipe.ingredients.forEach(
    (ingredient) =>
      (ingredient.quantity =
        (ingredient.quantity * numOfServings) / state.recipe.servings)
  );
  state.recipe.servings = numOfServings;
}
