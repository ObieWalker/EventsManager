import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ProtectedComponent) => {
  class Authorize extends Component {
    /**
			* @description handles route for authorization
			*
			* @method componentDidMount
			*
			* @returns { * } null
			*/
    componentDidMount() {
      if (!this.props.isAdmin) {
        this.context.router.history.push('/login');
      }
    }

    render() {
      return (
        <ProtectedComponent { ...this.props }/>
      );
    }
  }

  Authorize.propTypes = {
    isAdmin: PropTypes.bool.isRequired
  };

  Authorize.contextTypes = {
    router: PropTypes.shape().isRequired
  };

  const mapStateToProps = state => ({
    isAdmin: state.loginUser.user.isAdmin
  });

  return connect(mapStateToProps)(Authorize);
};
