import { combineReducers } from 'redux';
import { recipesListReducer } from '../Containers/RecipeOverview';
import { recipeReducer } from '../Containers/RecipeDetails';

/**
 * Root reducers containing combine reducer state from Overview and Details
 */

export default combineReducers({
  recipesState: recipesListReducer,
  recipeState: recipeReducer,
});
