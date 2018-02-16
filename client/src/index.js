import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import rootReducer from './reducers/rootReducer';
import history from './history';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
        <Router history={history}>
            <App />
        </Router>
     ,document.getElementById('root'));
//registerServiceWorker();

