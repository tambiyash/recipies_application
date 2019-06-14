/**
 * Constants used across the application.
 */

// Declaring action types to be used in reducer.

// Fetching Recipe
export const FETCH_RECIPES_PENDING = 'FETCH_RECIPES_PENDING';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

// Rating Recipe
export const RATE_RECIPE = 'RATE_RECIPE';
export const RATE_RECIPE_DETAILS = 'RATE_RECIPE_DETAILS';

// Favoriting Recipe
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const FAVORITE_RECIPE_DETAILS = 'FAVORITE_RECIPE_DETAILS';

// Searching Recipe
export const SEARCH_RECIPES = 'SEARCH_RECIPES';

// Setting Recipe
export const SET_RECIPE = 'SET_RECIPE';

// API related constants
export const API_PATH =
  'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json';
export const error = 'Something went wrong !!';

// Responsive breakpoints

export const ResponsiveBreakpoints = {
  SmallDesktop: 1274,
  Tablet: 1124,
  LargeMobile: 940,
  Mobile: 780,
};
