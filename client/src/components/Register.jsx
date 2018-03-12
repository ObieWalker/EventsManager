import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import registerUserAction from '../actions/registerUserAction'
import validator from '../../helpers/validators/register'
import verifyToken from '../../helpers/verifyToken'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    componentDidMount() {
        if (verifyToken()) {
          this.props.history.push('/dashboard');
        }
      }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        //const state = Object.assign({}, this.state);
        // state.value = e.target.value;
        // this.setState({ state});
        // console.log(state)
    }
    //returns errors if they exist
    isValid() {
        const { errors, isValid } = validator(this.state);
        if (!isValid) {
          this.setState({ errors });
        }
        return isValid;
      }
    onSubmit(e) {
        //console.log("onsubmit pressed")
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}})
            const userDetails= {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm
            };
            this.props.registerUserAction(userDetails)
                .then(() => {
                this.props.history.push('/')
                }).catch(error =>
                this.setState({errors:error.response.data.errors}))
        }
    }

    handleOnFocus(event) {
        this.setState({
            //merges to display error if user should focus
          errors: Object.assign({}, this.state.errors, { [event.target.name]: '' })
        });
      }

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
                                <input id="first_name" 
                                onChange={this.handleChange} 
                                value={this.state.firstName}
                                error={this.state.errors.firstName}
                                handleFocus={this.state.handleOnFocus}
                                name="firstName"
                                type="text" 
                                className="validate" />
                                <label htmlFor="first_name">First Name</label>
                                {/* {console.log(this.state.firstName)} */}
                                {this.state.firstName.valid && 
                                <span className="error">
                                    {this.state.firstName.message}
                                </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">contacts</i>
                                <input id="last_name" 
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                error={this.state.errors.lastName}
                                onFocus={this.state.handleOnFocus}
                                name="lastName"
                                type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                                {this.state.lastName.valid &&
                                    <span className="error">
                                        {this.state.lastName.message}
                                    </span>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username" 
                                onChange={this.handleChange} 
                                value={this.state.username}
                                error={this.state.errors.username}
                                onFocus={this.state.handleOnFocus}
                                name="username"
                                type="text" className="validate" />
                                <label htmlFor="username">Username</label>
                                {this.state.username.valid &&
                                    <span className="error">
                                        {this.state.username.message}
                                    </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <input id="email" 
                                onChange={this.handleChange}
                                error={this.state.errors.email}
                                onFocus={this.state.handleOnFocus}
                                value={this.state.email}
                                name="email"
                                type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                                {this.state.email.valid &&
                                    <span className="error">
                                        {this.state.email.message}
                                    </span>}                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" 
                                onChange={this.handleChange}
                                value={this.state.password}
                                error={this.state.errors.password}
                                onFocus={this.state.handleOnFocus}
                                name="password"
                                type="password" />
                                <label htmlFor="password">Password</label>
                                {this.state.password.valid &&
                                    <span className="error">
                                        {this.state.password.message}
                                    </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">replay</i>
                                <input id="password2" 
                                onChange={this.handleChange} 
                                value={this.state.passwordConfirm}
                                error={this.state.errors.passwordConfirm}
                                onFocus={this.state.handleOnFocus}
                                name="passwordConfirm"
                                type="password" className="validate" />
                                <label htmlFor="password2">Retype Password</label>
                                {this.state.passwordConfirm.valid &&
                                    <span className="error">
                                        {this.state.passwordConfirm.message}
                                    </span>}
                            </div>
                        </div>

                        <a className="waves-effect waves-light btn right hoverable indigo" 
                        onClick={this.onSubmit}
                            // disabled={isEnabled}
                            type="submit"><i className="large material-icons right">done</i>register</a><br />
                    </form>
                    <div className="text-white">
                        <div>
                            <p>
                                {'Already have an account? '}
                                <Link to="/signin">Click here to Sign In </Link>      
                            </p>
                        </div>
                    </div>
                </div>
                {/* </Modal> */}
            </div>
        )
    }
}

Register.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    errors: PropTypes.shape().isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };


// const mapStateToProps = state => ({
//     registerUser: state.registerUser,
//   });

const mapDispatchToProps = dispatch => bindActionCreators({
    registerUserAction: registerUserAction,
}, dispatch)

export default connect(null, mapDispatchToProps)(Register);