import React, { Component} from 'react';
import { Button, Modal, Tabs, Tab } from 'react-materialize'



class AuthModal extends Component {

    render() {
        return (
            <div>
               
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="Login" className='tab col s6'>Login</Tab>
                    <Tab title="Register" className='tab col s6'>Register</Tab>
                 
                </Tabs>

                {/* <Modal
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


                    </Modal> */}
            </div>
        )
    }
}


export default AuthModal;
