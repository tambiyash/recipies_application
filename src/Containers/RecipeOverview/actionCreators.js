import {
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_SUCCESS,
  RATE_RECIPE,
  FAVORITE_RECIPE,
  SEARCH_RECIPES,
} from '../../Utils/constants';

// Adding action creators for pending, success and error results of fetchign recipes
export const fetchRecipesPending = () => {
  return {
    type: FETCH_RECIPES_PENDING,
  };
};

export const fetchRecipesSuccess = recipes => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    recipes,
  };
};

export const fetchRecipesError = error => {
  return {
    type: FETCH_RECIPES_ERROR,
    error: error,
  };
};

// Adding action creators for rating recipe
export const ratingRecipe = (id, rating) => {
  return {
    type: RATE_RECIPE,
    id,
    rating,
  };
};

// Adding action creators for favoriting recipe
export const favoritingRecipe = (id, favorite) => {
  return {
    type: FAVORITE_RECIPE,
    id,
    favorite,
  };
};

// Adding action creators for favoriting recipe
export const fetchRecipeQuery = query => {
  return {
    type: SEARCH_RECIPES,
    query,
  };
};
