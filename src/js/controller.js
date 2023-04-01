import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

async function controlRecipes() {
  const id = window.location.hash.slice(1);
  if (!id) return;

  recipeView.renderSpinner();

  await model.loadRecipe(id);

  recipeView.render(model.state.recipe);
}
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
