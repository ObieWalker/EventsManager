import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/configureStore'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Header1 from '../src/components/Header1'


const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
