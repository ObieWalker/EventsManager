import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Register from './Register.jsx';
import ContactUs from './ContactUs.jsx';
import Centers from './Centers.jsx';
import UDashboard from './UserDashboard/Main.jsx';
import AdminDashboard from './AdminDashboard/Dashboard.jsx';
import Test from './UserDashboard/ModifyEventModal.jsx';
// import UTabMenu from './UserDashboard/UTabMenu';

// import AdminCenters from './AdminDashboard/AdminCenters';


export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ textAlign: 'center' }}>
          <Header />
          <Switch>
            <Route exact path='/test' component={Test} />
            <Route exact path='/' component={Centers} />
            <Route exact path='/login' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/dashboard' component={UDashboard} />
            <Route path='/admin' component={AdminDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

