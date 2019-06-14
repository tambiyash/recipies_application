import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

// This module is to convert the reducer combined state to store.

// The weird code above enabled me to use Redux Dev tools in chrome
