import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
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
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);
  } catch (err) {
    throw err;
  }
}

loadSearchResults("pizza");
