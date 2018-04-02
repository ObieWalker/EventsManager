import React, { Component } from 'react';
import toastr from 'toastr';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import signInValidator from '../../helpers/validators/signIn';
import login from '../actions/UserSessionAction';
import verifyToken from '../../helpers/verifyToken';

/**
 *
 *
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      showWarning: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    // checks to see if user already has a verified token and redirects
    if (verifyToken()) {
      this.props.history.push('/');
    }
  }

  isValid() {
    const { errors, isValid } = signInValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
      console.log(errors);
    }
    return isValid;
  }
  // show error when focused
  handleOnFocus(event) {
    this.setState({
      errors: Object.assign(
        {},
        this.state.errors, { [event.target.name]: '', form: '' }
      )
    });
  }


  handleUserLogin(e) {
    e.preventDefault();
    console.log('first');
    const userDetails = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.isValid()) {
      console.log('it is valid');
      this.setState({ errors: {} });
      this.props.login(userDetails)
        .then(() => {
          const { isAuthenticated, user } = this.props.loginUser;
          console.log('is it authenticated?', isAuthenticated);
          if (user.isAdmin) {
            this.props.history.push('/admin');
            toastr.success('Hello Admin!');
          } else if (isAuthenticated) {
            this.props.history.push('/dashboard');
            toastr.success('welcome back');
          }
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <h5 style={{ fontFamily: 'serif', marginTop: '5%' }}>
        Sign in to your account. </h5><br /> <br />
        <div style={{ width: '40%', margin: '0 30%' }}>
          <form className="col s12">
            <div className='row'>
              <div className='input-field col s12'>
                <i className="material-icons prefix">contacts</i>
                <input
                  className='validate'
                  value={this.state.email.value}
                  error={this.state.errors.email}
                  onFocus={this.state.handleOnFocus}
                  type='email'
                  name='email'
                  id='email'
                  onChange={this.handleChange}/>
                <label htmlFor='email'>Enter your email</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <i className="material-icons prefix">vpn_key</i>
                <input
                  className='validate'
                  value ={this.state.password.value}
                  onFocus={this.state.handleOnFocus}
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.handleChange}/>
                <label htmlFor='password'>Enter your password</label>
              </div>
              {this.state.errors.password && <span>{this.state.errors.password}</span>}

              <label style={{ float: 'right' }}>
                <a className='red-text darken-3' href='#!'><b>Forgot Password?</b></a>
              </label>
            </div>

            <br />
            <center>
              <div className='row'>
                <button type='submit'
                  name='btn_login'
                  className='col s3 btn btn-large waves-effect indigo right'
                  onClick={this.handleUserLogin}>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  UserSessionAction: PropTypes.func,
  router: PropTypes.object,
  history: PropTypes.object,
  loginUser: PropTypes.object,
  login: PropTypes.func
};

const mapStateToProps = state => ({
  loginUser: state.loginUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
