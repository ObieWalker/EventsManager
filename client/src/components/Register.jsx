import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import registerUserAction from '../actions/registerUserAction';
import validator from '../../helpers/validators/register';
import verifyToken from '../../helpers/verifyToken';

/**
 *
 *
 * @class Register
 * @extends {Component}
 */
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      verifyPassword: '',
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  componentDidMount() {
    if (verifyToken()) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  isValid() {
    const { errors, isValid } = validator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
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
          this.props.history.push('/');
        }).catch(error =>
          this.setState({ errors: error.response.data.errors }));
    }
  }

  handleOnFocus(event) {
    this.setState({
      // merges to display error if user should focus
      errors: Object.assign({}, this.state.errors, { [event.target.name]: '' })
    });
  }

  render() {
    return (
      <div>
        <br /><br /><br />
        <div style={{ width: '40%', margin: '0 30%' }}>
          <form className="col s14">
            <div className="row">

              <div className="input-field  col s6">
                <i className="material-icons prefix">contacts</i>
                <input id="first_name"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  onFocus={this.handleOnFocus}
                  name="firstName"
                  type="text"
                  className="validate" />
                <label htmlFor="first_name">First Name</label>
                {this.state.errors.firstName &&
                                <span className="error">
                                  {this.state.errors.firstName}
                                </span>}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input id="last_name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  onFocus={this.handleOnFocus}
                  name="lastName"
                  type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
                {this.state.errors.lastName &&
                                    <span className="error">
                                      {this.state.errors.lastName}
                                    </span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  onFocus={this.handleOnFocus}
                  name="username"
                  type="text" className="validate" />
                <label htmlFor="username">Username</label>
                {this.state.errors.username &&
                                    <span className="error">
                                      {this.state.errors.username}
                                    </span>}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email"
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  value={this.state.email}
                  name="email"
                  type="email" className="validate" />
                <label htmlFor="email">Email</label>
                {this.state.errors.email &&
                                    <span className="error">
                                      {this.state.errors.email}
                                    </span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">vpn_key</i>
                <input id="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  onFocus={this.handleOnFocus}
                  name="password"
                  type="password" />
                <label htmlFor="password">Password</label>
                {this.state.errors.password &&
                                    <span className="error">
                                      {this.state.errors.password}
                                    </span>}
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">replay</i>
                <input id="password2"
                  onChange={this.handleChange}
                  value={this.state.verifyPassword}
                  onFocus={this.handleOnFocus}
                  name='verifyPassword'
                  type="password" className="validate" />
                <label htmlFor="password2">Retype Password</label>
                {this.state.errors.verifyPassword &&
                                    <span className="error">
                                      {this.state.errors.verifyPassword}
                                    </span>}
              </div>
            </div>

            <a className="waves-effect waves-light btn right hoverable indigo"
              onClick={this.onSubmit}
              // disabled={isEnabled}
              type="submit"><i className="large material-icons right">done</i>register</a><br />
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
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  history: PropTypes.object
};


const mapStateToProps = state => ({
  registerUser: state.registerUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
