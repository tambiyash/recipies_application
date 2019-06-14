import {
  RATE_RECIPE_DETAILS,
  FAVORITE_RECIPE_DETAILS,
  SET_RECIPE,
} from '../../Utils/constants';

// Adding action creator to set recipe to Store State.
export const settingRecipe = recipe => {
  return {
    type: SET_RECIPE,
    recipe,
  };
};

// Adding action creators for rating recipe
export const ratingRecipe = (rating, id) => {
  return {
    type: RATE_RECIPE_DETAILS,
    rating,
    id,
  };
};

// Adding action creators for favoriting recipe
export const favoritingRecipe = (favorite, id) => {
  return {
    type: FAVORITE_RECIPE_DETAILS,
    favorite,
    id,
  };
};
