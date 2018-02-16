import React, {Component} from 'react';
import connect from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-materialize'
//import Login from './Login '


class Header1 extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div> 
                <nav className="indigo">
                    <div className="nav-wrapper ">
                        {/* <Link to='/' className='left'  style={{ fontSize: '30px', paddingLeft:'10px' }}>The Events Manager</Link> */}
                        <ul className="right hide-on-med-and-down" style= {{paddingRight: '20px'}}>
                            <li><a href="index.html">Home</a></li>
                            {/* <li><a href="custLandingPage.html">Cust Landing Page</a></li>
                            <li><a href="adminLandingPage.html">Admin Landing Page</a></li> */}
                            <li><a href="centers.html">Centers</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li>
                            <Modal
                                header='Login To Your Account'
                                trigger={<Button>Login</Button>}>

                                    <form className="col s12">
                                        
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <i className="material-icons prefix">contacts</i>
                                                <input className='validate' type='email' name='email' id='email' />
                                                <label htmlFor='email'>Enter your email</label>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <i className="material-icons prefix">vpn_key</i>
                                                <input className='validate' type='password' name='password' id='password' />
                                                <label htmlFor='password'>Enter your password</label>
                                            </div>
                                            <label style={{float: 'right'}}>
                                                <a className='red-text darken-3' href='#!'><b>Forgot Password?</b></a>
                                            </label>
                                        </div>

                                        <br />
                                        <center>
                                        <div className='row'>
                                                <button type='submit' name='btn_login' className='col s3 btn btn-large waves-effect indigo right'>Login</button>
                                            </div>
                                        </center>
                                    </form>


                            </Modal>
                            </li> 
                            <li>&nbsp;</li>
                            <li>
                                <Modal
                                    header='Sign Up For an Account'
                                    trigger={<Button>Register</Button>}>
                                    <form className="col s14">
                                        <div className="row">
                                            
                                            <div className="input-field  col s6">
                                                <i className="material-icons prefix">contacts</i>
                                                <input id="first_name" type="text" className="validate"/>
                                                    <label htmlFor="first_name">First Name</label>
                                            </div>

                                            <div className="input-field col s6">
                                                    <i className="material-icons prefix">contacts</i>
                                                    <input id="last_name" type="text" className="validate"/>
                                                        <label htmlFor="last_name">Last Name</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">account_circle</i>
                                                    <input id="username" type="text" className="validate"/>
                                                        <label htmlFor="username">Username</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">email</i>
                                                <input id="email" type="email" className="validate"/>
                                                    <label htmlFor="email">Email</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">vpn_key</i>
                                                <input id="password" type="password"/>
                                                    <label htmlFor="password">Password</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">replay</i>
                                                <input id="password2" type="password" className="validate"/>
                                                    <label htmlFor="password2">Retype Password</label>
                                            </div>
                                        </div> 
                                                                
                                        <a className="waves-effect waves-light btn right hoverable indigo"><i className="large material-icons right">done</i>register</a><br />
                                    </form>
                                </Modal>
                            </li>
                        </ul>
                    </div>
                </nav>
        
    </div>

        )

    }
}

    
export default Header1;