import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import HeaderComp from './Header.jsx';
import Home from './Home.jsx';
import RegisterComp from './Register.jsx';
import ContactUsComp from './ContactUs.jsx';
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
          <HeaderComp />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Home} />
            <Route exact path="/register" component={RegisterComp} />
            <Route path="/contact-us" component={ContactUsComp} />
            <Route
              path="/dashboard"
              component={RequireAuthentication(UDashboard)}
            />
            <Route
              path="/admin"
              component={RequireAdminRights(AdminDashboard)}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
