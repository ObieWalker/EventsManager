import React, { Component } from 'react';
import '../styles/App.css';
import { Router, Route, Switch, browserHistory } from 'react-router-dom';
import history from '../../history'

import Main from './Main'
import Header1 from './Header1'
import Home from './Home';
// import Login from './Login'
import Register from './Register'
import ContactUs from './ContactUs'
import Centers from './Centers'

import UTabMenu from './UserDashboard/UTabMenu'
import UDashboard from './UserDashboard/UDashboard'
import AdminCenters from './AdminDashboard/AdminCenters'



export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ textAlign: 'center' }}>	>
          <Header1 />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='/contactus' component={ContactUs} /> 
          </Switch>
        </div>
      </Router> 
    )
  }
}
  