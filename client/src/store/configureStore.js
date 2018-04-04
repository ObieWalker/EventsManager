import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middleware = compose(
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const configureStore = () => {
  const store = createStore(rootReducer, middleware);
  return store;
};

