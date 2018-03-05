import { createStore } from 'redux';
import { applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));

export const configureStore = () => {
    const store = createStore(
        rootReducer, // root reducer
        //initialState, our initialState
    );

    return store;
}