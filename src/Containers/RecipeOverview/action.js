import {
  fetchRecipesPending,
  fetchRecipesSuccess,
  fetchRecipesError,
  ratingRecipe,
  favoritingRecipe,
  fetchRecipeQuery,
} from './actionCreators';
import { API_PATH, error } from '../../Utils/constants';

/** Fetching the recipe list one time from API call */
export const fetchRecipesAction = () => dispatch => {
  dispatch(fetchRecipesPending());
  fetch(API_PATH)
    .then(res => res.json())
    .then(res => {
      if (!res) {
        throw error;
      }
      return dispatch(fetchRecipesSuccess(res));
    })
    .catch(error => {
      dispatch(fetchRecipesError(error));
    });
};

/** Action dispatching rating of Recipe from List view */
export const rateRecipeAction = (id, rating) => dispatch => {
  dispatch(ratingRecipe(id, rating));
};

/** Action dispatching favorating of Recipe from List view */
export const updateFavoriteAction = (id, favorite) => dispatch => {
  dispatch(favoritingRecipe(id, favorite));
};

/** Action dispatching Recipes by Query - @todo */
export const fetchRecipeByQuery = query => dispatch => {
  dispatch(fetchRecipeQuery(query));
};
