import React, { Component, Button, Modal } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';



class Register extends Component {


    render() {
        return (
            <div>
                {/* <Modal
                        header='Login To Your Account'
                        trigger={<Button>Login</Button>}> */}
                <br /><br /><br />
                <div style={{ width: '40%', margin: "0 30%" }}>
                    <form className="col s14">
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
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username" type="text" className="validate" />
                                <label htmlFor="username">Username</label>
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">replay</i>
                                <input id="password2" type="password" className="validate" />
                                <label htmlFor="password2">Retype Password</label>
                            </div>
                        </div>

                        <a className="waves-effect waves-light btn right hoverable indigo"><i className="large material-icons right">done</i>register</a><br />
                    </form>

                </div>
                {/* </Modal> */}
            </div>
        )
    }
}


export default Register;
