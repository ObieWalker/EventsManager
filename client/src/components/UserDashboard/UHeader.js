import React, { Component } from 'react';
import connect from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Button } from 'react-materialize'
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
                <BrowserRouter>
                    <nav className="indigo">
                        <div className="nav-wrapper ">
                            <Link to='/' className='left' style={{ fontSize: '30px', paddingLeft: '10px' }}>The Events Manager</Link>
                            <ul className="right hide-on-med-and-down" style={{ paddingRight: '20px' }}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/centers">Centers</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                                <li><Link to="/"><Button >Log Out</Button></Link></li>
                            </ul>
                        </div>
                    </nav>
                </BrowserRouter> 

            </div>

        )

    }
}


export default Header1;