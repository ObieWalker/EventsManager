import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { setAuthToken } from '../helpers/setAuthToken';
import App from './components/App.jsx';
import { configureStore } from './store/configureStore';
import { setUser } from './actions/UserSessionAction';
import './styles/style.scss';

const store = configureStore();

if (jwt.decode(localStorage.token) !== null) {
  setAuthToken(localStorage.token);
  store.dispatch(setUser(jwt.decode(localStorage.token)));
} else {
  setAuthToken('');
  store.dispatch(setUser({}));
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
