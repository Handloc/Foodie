export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const data = await response.json();
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
};
