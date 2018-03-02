import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main'
import Header1 from './Header1'

import UTabMenu from './UserDashboard/UTabMenu'
import UDashboard from './UserDashboard/UDashboard'
import Centers from './Centers'
import AdminCenters from './AdminDashboard/AdminCenters'



export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <AdminCenters />
      {/* <Centers /> */}
        {/* <UDashboard /> */}
      {/* <BrowserRouter>
        <Header1 />
        <Main />
      </BrowserRouter> */}
      </div>);
  }
}
  