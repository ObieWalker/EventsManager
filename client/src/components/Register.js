import React, { Component, Button, Modal } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import validator from 'validator'



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: {value:'', isValid: true, message: '' },
            lastName: { value: '', isValid: true, message: '' },
            email: {value:'', isValid: true, message: '' },
            username: { value: '', isValid: true, message: '' },
            password: { value: '', isValid: true, message: '' },
            passwordConfirm: { value: '', isValid: true, matches: false, message: '' }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.canSubmit = this.canSubmit.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
        this.resetValidation = this.resetValidation.bind(this);
    }


    componentWillMount() {
        if (this.props.loggedIn) {
            this.props.history.push('/dashboard');
        }
    }

    onChangeState(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.resetValidation();
        if (this.formIsValid()) {
            const value = {
                firstname: this.state.firstName,
                lastname: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm
            };
            this.props.register(value);
        }
    }

    canSubmit() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.username.length > 0 &&
            this.state.passwordConfirm.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0
        );
    }

    formIsValid() {
        let fieldCheck = true
        const state = Object.assign({}, this.state);

        if (!validator.isEmail(state.email.value)) {
            state.email.isValid = false;
            state.email.message = 'Invalid email address';

            this.setState({ email: state.email });
            fieldCheck = false;
        }
        if (!validator.isLength(state.firstName.value, { min: 3, max: undefined })) {
            state.firstname.isValid = false;
            state.firstname.message = 'Your first name has to be more than 3 characters';

            this.setState(state);
            fieldCheck = false;
        }
        if (!validator.isLength(state.lastName.value, { min: 3, max: undefined })) {
            state.lastName.isValid = false;
            state.lastName.message = 'Your last name has to be more than 3 characters';

            this.setState(state);
            fieldCheck = false;
        }
        if (!validator.isLength(state.username.value, { min: 3, max: undefined })) {
            state.username.isValid = false;
            state.username.message = 'Your username has to be more than 3 characters';

            this.setState(state);
            fieldCheck = false;
        }
        if (!validator.isLength(state.password.value, { min: 6, max: undefined })) {
            state.password.isValid = false;
            state.password.message = 'Password must contain 6 or more characters';

            this.setState({password: state.password});
            fieldCheck = false;

        } else if (
            !validator.equals(state.password.value, state.passwordConfirm.value)
        ) {
            state.passwordConfirm.isValid = false;
            state.passwordConfirm.message = 'Password does not match';

            this.setState({ passwordConfirm: state.passwordConfirm });
            fieldCheck = false;
        }
        if (fieldCheck === false) {
            return false;
        }
        return true;
    }

    clearFields() {
        this.setState({ firstName: { value: '', isValid: true, message: '' } });
        this.setState({ lastName: { value: '', isValid: true, message: '' } });
        this.setState({ username: { value: '', isValid: true, message: '' } });
        this.setState({ email: { value: '', isValid: true, message: '' } });
        this.setState({ password: { value: '', isValid: true, message: '' } });
        this.setState({ passwordConfirm: {value: '', isValid: true, message: '', matches: false}});
    }


    resetValidation() {
        const state = Object.assign({}, this.state);

        Object.keys(state).map((key) => {
            if ({}.hasOwnProperty.call(state[key], 'isValid')) {
                state[key].isValid = true;
                state[key].message = '';
            }
        });
        this.setState(state);
    }


    render() {
        const isEnabled = this.canSubmit();
        return (
            <div>
                {/* <Modal
                        header='Login To Your Account'
                        trigger={<Button>Login</Button>}> */}
                <br /><br /><br />
                test
                <div style={{ width: '40%', margin: "0 30%" }}>
                    <form className="col s14">
                        <div className="row">

                            <div className="input-field  col s6">
                                <i className="material-icons prefix">contacts</i>
                                <input id="first_name" onChange={this.onChangeState} type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                                {this.state.firstName.isValid && 
                                <span className="error">
                                    {this.state.firstName.message}
                                </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">contacts</i>
                                <input id="last_name" onChange={this.onChangeState} type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                                {this.state.lastName.isValid &&
                                    <span className="error">
                                        {this.state.lastName.message}
                                    </span>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username" onChange={this.onChangeState} type="text" className="validate" />
                                <label htmlFor="username">Username</label>
                                {this.state.username.isValid &&
                                    <span className="error">
                                        {this.state.username.message}
                                    </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <input id="email" onChange={this.onChangeState} type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                                {this.state.email.isValid &&
                                    <span className="error">
                                        {this.state.email.message}
                                    </span>}                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" onChange={this.onChangeState} type="password" />
                                <label htmlFor="password">Password</label>
                                {this.state.password.isValid &&
                                    <span className="error">
                                        {this.state.password.message}
                                    </span>}
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">replay</i>
                                <input id="password2" onChange={this.onChangeState} type="password" className="validate" />
                                <label htmlFor="password2">Retype Password</label>
                                {this.state.passwordConfirm.isValid &&
                                    <span className="error">
                                        {this.state.passwordConfirm.message}
                                    </span>}
                            </div>
                        </div>

                        <a className="waves-effect waves-light btn right hoverable indigo" 
                        onClick={this.onSubmit}
                            disabled={isEnabled}
                            type="submit"><i className="large material-icons right">done</i>register</a><br />
                    </form>
                    <div className="text-white">
                        <div>
                            <p>
                                {'Already have an account? '}
                                <a className="span-link" href="/">
                                    Click here
                  </a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* </Modal> */}
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(registerAction, dispatch)
//     };
// }
// export default connect(null, matchDispatchToProps)(Register);

export default Register;
