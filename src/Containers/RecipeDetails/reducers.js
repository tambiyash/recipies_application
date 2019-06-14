import {
  RATE_RECIPE_DETAILS,
  FAVORITE_RECIPE_DETAILS,
  SET_RECIPE,
} from '../../Utils/constants';
import update from 'immutability-helper';

// initial store state defined to be reduced initially
const initialState = {
  recipe: {},
};

// recipe reducer is listening the action and thereby changing data in store
export function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
      };

    case RATE_RECIPE_DETAILS:
      return {
        ...state,
        recipe: action.id
          ? update(state.recipe, {
              rating: { $set: parseInt(action.rating) },
            })
          : state.recipe,
      };

    case FAVORITE_RECIPE_DETAILS:
      return {
        ...state,
        recipe: action.id
          ? update(state.recipe, {
              isFavorite: { $set: action.favorite },
              favorites: {
                $apply: function(fav) {
                  return action.favorite ? fav + 1 : fav - 1;
                },
              },
            })
          : state.recipe,
      };

    default:
      return state;
  }
}

// Selectors used to get defined parts of state in reducer
export const getRecipe = state => state.recipeState.recipe;
