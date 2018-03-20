import React, { Component } from 'react';

import AdminPage from './AdminPage.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div >
        <h5 style={{ width: '70%' }}>This is an Admin page.
        It is restricted to accounts with access rights. </h5>
        <AdminPage/>
      </div>
    );
  }
}

export default Dashboard;
