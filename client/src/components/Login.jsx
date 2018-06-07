import React, { Component } from 'react';
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
export class Login extends Component {
  /**
   * Creates an instance of Login.
   * @param {any} props
   * @memberof Login
   */
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

  /**
   * @returns {object} void
   *
   * @param {any} e
   * @memberof Login
   */
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * @returns {object} void
   *
   * @memberof Login
   */
  componentDidMount() {
    // checks to see if user already has a verified token and redirects
    if (verifyToken()) {
      const { isAuthenticated, user } = this.props.loginUser;
      if (user.isAdmin) {
        this.props.history.push('/admin');
      } else if (isAuthenticated && !user.isAdmin) {
        this.props.history.push('/dashboard');
      }
    }
  }

  /**
   * @returns {object} void
   *
   * @memberof Login
   */
  isValid() {
    const { errors, isValid } = signInValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  // show error when focused
  /**
   * @returns {object} void
   *
   * @param {any} event
   * @memberof Login
   */
  handleOnFocus(event) {
    this.setState({
      errors: Object.assign({}, this.state.errors, {
        [event.target.name]: '',
        form: ''
      })
    });
  }

  /**
   * @returns {object} void
   *
   * @param {any} e
   * @memberof Login
   */
  handleUserLogin(e) {
    e.preventDefault();
    const userDetails = {
      email: this.state.email,
      password: this.state.password
    };
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.login(userDetails, this.props.history);
    }
  }
  /**
   *
   *
   * @returns {object} login details
   * @memberof Login
   */
  render() {
    return (
      <div>
        <h5 style={{ fontFamily: 'serif', marginTop: '5%' }}>
          Sign in to your account.{' '}
        </h5>
        <br /> <br />
        <div style={{ width: '40%', margin: '0 30%' }}>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">contacts</i>
                <input
                  className="validate"
                  // value={this.state.email.value}
                  error={this.state.errors.email}
                  onFocus={this.state.handleOnFocus}
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Enter your email</label>
              </div>
              {this.state.errors.email && (
                <span id="emailError" className="red-text">{this.state.errors.email}</span>
              )}
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <input
                  className="validate"
                  // value={this.state.password.value}
                  onFocus={this.state.handleOnFocus}
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Enter your password</label>
              </div>
              {this.state.errors.password && (
                <span id="passwordError" className="red-text">{this.state.errors.password}</span>
              )}

              <label style={{ float: 'right' }}>
                <a className="red-text darken-3" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>

            <br />
            <center>
              <div className="row">
                <button
                  type="submit"
                  id="submit"
                  name="btn_login"
                  className="col s3 btn btn-large waves-effect indigo right"
                  onClick={this.handleUserLogin}
                >
                  Login
                </button>
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
  loginUser: state.loginUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
