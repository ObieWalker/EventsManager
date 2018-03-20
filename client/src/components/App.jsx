import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Header1 from './Header1.jsx';
import Home from './Home.jsx';
import Register from './Register.jsx';
import ContactUs from './ContactUs.jsx';
import Centers from './Centers.jsx';

import UDashboard from './UserDashboard/UDashboard.jsx';
import AdminDashboard from './AdminDashboard/Dashboard.jsx';
// import UTabMenu from './UserDashboard/UTabMenu';

// import AdminCenters from './AdminDashboard/AdminCenters';


export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ textAlign: 'center' }}>
          <Header1 />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/centers' component={Centers} />
            <Route path='/user-dashboard' component={UDashboard} />
            <Route path='/admin' component={AdminDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

