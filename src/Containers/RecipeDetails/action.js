import {
  ratingRecipe,
  favoritingRecipe,
  settingRecipe,
} from './actionCreators';

/** setting the recipe to Store as part of recipeState Reducer part */
export const setRecipeToStoreAction = recipeId => (dispatch, getState) => {
  const state = getState();
  const recipe = state.recipesState.recipes.find(
    recipe => recipe.id === recipeId
  );
  dispatch(settingRecipe(recipe));
};

/** Fires when we try to change the rating from homepage */
export const rateRecipeDetailsAction = (rating, id) => dispatch => {
  dispatch(ratingRecipe(rating, id));
};

/** Fires when we try to favorite/unfavorite any recipe */
export const updateFavoriteDetailsAction = (favorite, id) => dispatch => {
  dispatch(favoritingRecipe(favorite, id));
};
