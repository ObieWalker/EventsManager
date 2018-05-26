import React, { Component } from 'react';
// import { HashLink } from "react-router-hash-scroll";

/**
 *
 *
 * @class ContactUs
 * @extends {Component}
 */
class ContactUs extends Component {
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
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">contacts</i>
                <input id="username" type="text" className="validate" />
                <label htmlFor="last_name">Username</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label htmlFor="email" data-error="wrong" data-success="right">
                  Email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="textarea1" className="materialize-textarea" />
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>

            <a className="waves-effect waves-light btn right hoverable">
              <i className="large material-icons right">send</i>Send
            </a>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactUs;
