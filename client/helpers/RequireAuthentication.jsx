import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import verifyToken from './verifyToken';

export default (ProtectedComponent) => {
  /**
	 * @description HOC for protected components
	 *
	 * @class Authenticate
	 *
	 * @extends Component
	 */
  class Authenticate extends Component {
    /**
			* @description handles route for authentication
			*
			* @method componentDidMount
			*
			* @returns { * } null
			*/
    componentDidMount() {
      if (!verifyToken()) {
        this.context.router.history.push('/login');
      }
    }
    /**
		 * @description outputs protected component
		 *
		 * @returns { jsx } jsx - protected components and properties
		 */
    render() {
      return (
        <ProtectedComponent { ...this.props }/>
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  Authenticate.contextTypes = {
    router: PropTypes.shape().isRequired
  };
  /**
 * @description maps redux state to props
 *
 * @param { object } state - holds Authentication state
 *
 * @return { object } props - returns mapped props from state
 */
  const mapStateToProps = state => ({
    isAuthenticated: state.loginUser.isAuthenticated
  });

  return connect(mapStateToProps)(Authenticate);
};
