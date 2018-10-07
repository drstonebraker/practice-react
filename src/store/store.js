import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

const middlewares = [
  thunk
];

// condition middleware based on production/development
let middlewaresWithDevTools;
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  const { composeWithDevTools } = require('redux-devtools-extension');
  middlewares.push(logger);

  middlewaresWithDevTools = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
}

/**
 * Configures store.
 * @param preloadedState
 * @returns {*}
 */
const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    middlewaresWithDevTools || applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
