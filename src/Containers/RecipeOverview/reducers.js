import {
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  RATE_RECIPE,
  FAVORITE_RECIPE,
  SEARCH_RECIPES,
} from '../../Utils/constants';
import update from 'immutability-helper';

// initial store state defined to be reduced initially
const initialState = {
  pending: false,
  recipes: [],
  error: null,
};

// recipe reducer caused by store. For all the actions
export function recipesListReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Recipies cases
    case FETCH_RECIPES_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_RECIPES_SUCCESS:
      // Added isFavorite = false to each recipe object so that it can be tracked if favorited/unfavorited.
      const recipes = action.recipes.map(recipe => {
        const obj = Object.assign({}, recipe);
        obj.isFavorite = false;
        return obj;
      });
      return {
        ...state,
        pending: false,
        recipes: recipes,
      };

    case FETCH_RECIPES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    // Rate Recipies cases
    case RATE_RECIPE:
      const updatedRecipeIndex =
        action.id && state.recipes.findIndex(recipe => recipe.id === action.id);
      return {
        ...state,
        pending: false,
        recipes:
          updatedRecipeIndex >= 0
            ? update(state.recipes, {
                [updatedRecipeIndex]: {
                  rating: { $set: action.rating },
                },
              })
            : state.recipes,
      };

    // Favorite recipe cases
    case FAVORITE_RECIPE:
      const recipeIndex =
        action.id && state.recipes.findIndex(recipe => recipe.id === action.id);

      return {
        ...state,
        pending: false,
        recipes:
          recipeIndex >= 0
            ? update(state.recipes, {
                [recipeIndex]: {
                  isFavorite: { $set: action.favorite },
                  favorites: {
                    $apply: count => (action.favorite ? count + 1 : count - 1),
                  },
                },
              })
            : state.recipes,
      };

    // Search recipe cases
    case SEARCH_RECIPES:
      return {
        ...state,
        pending: false,
        recipes:
          action.query !== ''
            ? state.recipes.filter(recipe =>
                recipe.name.toLocaleLowerCase().startsWith(action.query)
              )
            : state.recipes,
      };

    default:
      return state;
  }
}

// Selectors used to get defined parts of state in reducer
export const getRecipes = state => state.recipesState.recipes;
export const getRecipesPending = state => state.recipesState.pending;
export const getRecipesError = state => state.recipesState.error;
