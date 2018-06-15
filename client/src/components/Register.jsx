import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from 'react-loading-animation';
import { bindActionCreators } from 'redux';
import registerUserAction from '../actions/registerUserAction';
import login from '../actions/UserSessionAction';
import validator from '../../helpers/validators/register';
import verifyToken from '../../helpers/verifyToken';

/**
 *
 *
 * @class Register
 * @extends {Component}
 */
export class Register extends Component {
  /**
   *Creates an instance of Register.
   * @param {*} props
   * @memberof Register
   */
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      verifyPassword: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }
  /**
   *@returns {*} null
   *
   * @memberof Register
   */
  componentDidMount() {
    if (verifyToken()) {
      this.props.history.push('/dashboard');
    }
  }
  /**
   *@returns {*} null
   *
   * @param {*} e
   * @memberof Register
   */
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  /**
   *@returns {boolean} validity
   *
   * @memberof Register
   */
  isValid() {
    const { errors, isValid } = validator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  /**
   *@returns{*} null
   *
   * @param {*} e
   * @memberof Register
   */
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      const userDetails = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        verifyPassword: this.state.verifyPassword
      };
      this.props.registerUserAction(userDetails)
        .then(() => {
          const { registerUserError } = this.props.registerUser;
          if (registerUserError === '') {
            const userLogin = {
              email: userDetails.email,
              password: userDetails.password
            };
            this.props.login(userLogin, this.props.history);
          }
        });
      this.setState({
        isLoading: false
      });
    }
  }
  /**
   *@returns {*} null
   *
   * @param {*} event
   * @memberof Register
   */
  handleOnFocus(event) {
    this.setState({
      // merges to display error if user should focus
      errors: Object.assign({}, this.state.errors, { [event.target.name]: '' })
    });
  }
  /**
   *
   *
   * @returns {object} regitser form
   * @memberof Register
   */
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div style={{ width: '40%', margin: '0 30%' }}>
          {this.state.isLoading === true && (
            <div>
              <p>Loading...</p> <Loading />
            </div>
          )}
          <form className="col s14">
            <div className="row">
              <div className="input-field  col s6">
                <i className="material-icons prefix">contacts</i>
                <input
                  id="firstName"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="firstName"
                  type="text"
                  className="validate firstName"
                />
                <label htmlFor="firstName">First Name</label>
                {this.state.errors.firstName && (
                  <span id="firstNameError" className="red-text">{this.state.errors.firstName}</span>
                )}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input
                  id="lastName"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="lastName"
                  type="text"
                  className="validate lastName"
                />
                <label htmlFor="lastName">Last Name</label>
                {this.state.errors.lastName && (
                  <span id="lastNameError" className="red-text">{this.state.errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="username"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="username"
                  type="text"
                  className="validate username"
                />
                <label htmlFor="username">Username</label>
                {this.state.errors.username && (
                  <span id="usernameError" className="red-text">{this.state.errors.username}</span>
                )}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="email"
                  type="email"
                  className="validate email"
                />
                <label htmlFor="email">Email</label>
                {this.state.errors.email && (
                  <span id="emailError" className="red-text">{this.state.errors.email}</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">vpn_key</i>
                <input
                  id="password"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="password"
                  type="password"
                  className="password"
                />
                <label htmlFor="password">Password</label>
                {this.state.errors.password && (
                  <span id="passwordError" className="red-text">{this.state.errors.password}</span>
                )}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">replay</i>
                <input
                  id="password2"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  name="verifyPassword"
                  type="password"
                  className="validate verifyPassword"
                />
                <label htmlFor="password2">Retype Password</label>
                {this.state.errors.verifyPassword && (
                  <span className="red-text">
                    {this.state.errors.verifyPassword}
                  </span>
                )}
              </div>
            </div>

            <button
              className="waves-effect waves-light btn right hoverable indigo"
              onClick={this.onSubmit}
              // disabled={isEnabled}
              type="submit"
            >
              <i className="large material-icons right">done</i>register
            </button>
            <br />
          </form>
          <div className="text-white">
            <div>
              <p>
                {'Already have an account? '}
                <Link to="/">Click here to Sign In </Link>
              </p>
            </div>
          </div>
        </div>
        {/* </Modal> */}
      </div>
    );
  }
}

Register.propTypes = {
  registerUserAction: PropTypes.func,
  registerUser: PropTypes.object,
  login: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  registerUser: state.registerUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registerUserAction,
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
