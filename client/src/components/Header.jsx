import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import logOut from '../actions/logOutAction';
import LoginComponent from './Login.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    console.log('login props ====>', this.props.login);
    const { isAuthenticated } = this.props.login;
    if (isAuthenticated) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  componentWillReceiveProps(nextProps){

  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logOut()
      .then(() => {
        console.log('my props = ', this.props);
        this.props.history.push('/login');
        toastr.success('Good bye!!');
      })
      .catch(error => console.log(error));
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
              <li><Link to='/'>Home</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              { loggedIn ? <li><Button onClick={this.handleLogOut} >Log Out </Button></li> :
                <div className="btn-group">
                  <li><Link to="/login"><button type="button" className="btn-success btn-sm">Login</button></Link></li>
                  <li><Link to="/register"><button type="button" className="btn-primary btn-sm">Register</button></Link></li>
                </div>
              // <li><Link to="/register"><button className= 'btn-success btn-sm' >Register</button></Link></li>
              //   <li><Link to="/register"><button className= 'btn-success btn-sm' >Register</button></Link></li>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  login: PropTypes.object,
  logOut: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  login: state.loginUser,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  logOut,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
