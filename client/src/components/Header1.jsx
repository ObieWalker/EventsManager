import React, {Component} from 'react';
import connect from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-materialize'
//import { HashLink } from "react-router-hash-scroll";
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
                        <Link to='/' className='left'  style={{ fontSize: '30px', paddingLeft:'10px' }}>The Events Manager</Link>
                        <ul className="right hide-on-med-and-down" style= {{paddingRight: '20px'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/centers">Centers</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                            <li><Link to="/"><Button >Log In</Button></Link></li>
                            {/* <li><HashLink to="#login" className="nav-link">SignUp</HashLink></li> */}
                            <li><Link to="/register"><Button >Register</Button></Link></li>
                        </ul>
                    </div>
                </nav>
        
    </div>

        )

    }
}

    
export default Header1;