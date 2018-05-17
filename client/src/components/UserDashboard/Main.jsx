import React, { Component } from 'react';
import User from './Dashboard.jsx';

/**
 *
 *
 * @class UDashboard
 * @extends {Component}
 */
class UDashboard extends Component {
  /**
   *
   *
   * @returns {component} user dashboard
   * @memberof UDashboard
   */
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}
export default UDashboard;
