import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sendMail from '../actions/sendMailAction';

/**
 *
 *
 * @class ContactUs
 * @extends {Component}
 */
class ContactUs extends Component {
  /**
   * Creates an instance of ContactUs.
   * @param {any} props
   * @memberof ContactUs
   */
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
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
   * @returns {*} null
   *
   * @memberof ContactUs
   */
  sendMail() {
    const emailData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      message: this.state.message
    };
    this.props.sendMail(emailData);
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      message: ''
    });
  }
  /**
   *
   *
   * @returns {object} form
   * @memberof ContactUs
   */
  render() {
    return (
      <div>
        <div
          className="grey lighten-4"
          style={{
            display: 'inline-block',
            margin: '5%',
            padding: '32px 48px 20px 48px',
            border: '1px solid #EEE',
            width: '45%'
          }}
        >
          <h4>Feedback or Enquiries</h4>

          <form className="col s6">
            <div className="row">
              <div className="input-field  col s6">
                <i className="material-icons prefix">contacts</i>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  name="lastName"
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input
                  id="username"
                  type="text"
                  className="validate"
                  name="username"
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name">Username</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="email" data-error="wrong" data-success="right">
                  Email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="message"
                  className="materialize-textarea"
                  name="message"
                  onChange={this.handleChange}
                />
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>

            <a
              onClick={this.sendMail}
              className="waves-effect waves-light btn right hoverable"
            >
              <i className="large material-icons right">send</i>Send
            </a>
          </form>
        </div>
      </div>
    );
  }
}

ContactUs.propTypes = {
  sendMail: PropTypes.func
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMail
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(ContactUs);
