const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const apiKey = 'b1921daf-6113-4e87-97f4-137790063c1b';
const getRecipeURL = 'https://forkify-api.herokuapp.com/api/v2/recipes/:id';
const showRecipe = async function() {
    try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await response.json();
        if (!response.ok) throw new Error(`Recipe not found! ${data.message} ${data.status}`);
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
    } catch (err) {
        alert(`🔴 ${err.message}`);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
