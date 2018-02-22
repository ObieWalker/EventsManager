import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));

const Store = createStore(
    rootReducer,
    applyMiddleware(middleware)
);

export default Store;