import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
// import { HashLink } from "react-router-hash-scroll";
// import Login from './Login '


class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }


  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <nav className="indigo">
          <div className="nav-wrapper ">
            <Link to='/' className='left' style={{ fontSize: '30px', paddingLeft: '10px' }}>
            The Events Manager</Link>
            <ul className="right hide-on-med-and-down" style= {{ paddingRight: '20px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/centers">Centers</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              { loggedIn ? <li><Link to="/"><Button >Log Out </Button></Link></li> :
                <li><Link to="/register"><Button >Register</Button></Link></li>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Header1;
