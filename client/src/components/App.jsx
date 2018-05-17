import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Register from './Register.jsx';
import ContactUs from './ContactUs.jsx';
// import Centers from './Centers.jsx';
import UDashboard from './UserDashboard/Main.jsx';
import AdminDashboard from './AdminDashboard/Dashboard.jsx';
import RequireAuthentication from '../../helpers/RequireAuthentication.jsx';
import RequireAdminRights from '../../helpers/RequireAdminRights.jsx';
import NotFound from './NotFound.jsx';

/**
 *
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  /**
   * @description all paths of app
   * @returns {object} main App
   * @memberof App
   */
  render() {
    return (
      <Router history={history}>
        <div style={{ textAlign: 'center' }}>
          <Header />
          <Switch>
            <Route exact path='/' component={RequireAuthentication(UDashboard)} />
            <Route exact path='/login' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/dashboard' component={RequireAuthentication(UDashboard)} />
            <Route path='/admin' component={RequireAdminRights(AdminDashboard)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

