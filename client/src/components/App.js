import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../store/configureStore'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'
import history from '../../history'

import Main from './Main'
import Header1 from './Header1'

import UTabMenu from './UserDashboard/UTabMenu'
import UDashboard from './UserDashboard/UDashboard'
import Centers from './Centers'
import AdminCenters from './AdminDashboard/AdminCenters'



export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div style={{ textAlign: 'center' }}>
        <AdminCenters />
      {/* <Centers /> */}
        {/* <UDashboard /> */}
      {/* <BrowserRouter>
        <Header1 />
        <Main />
      </BrowserRouter> */}
      </div>
      </Provider>
    )}
}
  