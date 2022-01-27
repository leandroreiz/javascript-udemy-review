import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    // Collect id
    const id = window.location.hash.slice(1);

    // Guard clause
    if (!id) return;
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(`Rendering recipe: ${err.message}`);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
