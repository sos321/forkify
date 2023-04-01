import { API } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      serving: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err);
  }
}
