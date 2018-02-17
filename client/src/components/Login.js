import React, { Component, Button, Modal } from 'react';
//import { HashLink } from "react-router-hash-scroll";



class Login extends Component {

    render() {
        return (
            <div>
                
                    <h5> Sign in to your account </h5>
                        {/* <Modal
                                header='Login To Your Account'
                                trigger={<Button>Login</Button>}> */}
                        <div  style={{ width: '40%', margin: "0 30%" }}>
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

                        </div>
                    {/* </Modal> */}
                {/* <Page>
                <Section id="login">
                </Section>
                </Page> */}
            </div>
        )
    }
}


export default Login;
