import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
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
        {this.props.loginUser.loginError && (
          <h6 className="red-text">{this.props.loginUser.loginError}</h6>
        )}
        <br /> <br />
        <div style={{}}>
          <form className="col s12 m6 push-m3 l4 push-l4">
            <div className="row">
              <div className="input-field col s12 m6 push-m3 l4 push-l4">
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
                <span id="emailError" className="red-text">
                  {this.state.errors.email}
                </span>
              )}
            </div>

            <div className="row">
              <div className="input-field col s12 m6 push-m3 l4 push-l4">
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
                <span id="passwordError" className="red-text">
                  {this.state.errors.password}
                </span>
              )}
            </div>
            <div className="row">
              <div className="col s12 m6 push-m3 l4 push-l4">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {'Do not have an account? You can register '}
                  <Link to="/register">here</Link>
                </p>
              </div>
            </div>
            <br />
            <div className="row col s12 m6 push-m3 l2 push-l4">
              <button
                type="submit"
                id="submit"
                name="btn_login"
                className="col s4 push-s4
                  m4 push-m4 l2 push-l5
                  btn btn-small waves-effect indigo"
                onClick={this.handleUserLogin}
              >
                Login
              </button>
            </div>
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
