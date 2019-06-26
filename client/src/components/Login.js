import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoginForm, login } from '../actions/login.js';

const Login = ({ loginForm , updateLoginForm, login, currentUser }) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updateFormData = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updateFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }
    return(
        <div className="content">
            <div className="header"><p className="header-title">Log In</p></div>
            <div className="inner-content">
                <form onSubmit={handleSubmit} className="login-form">
                    <h4>Sign in to continue</h4>
                    <input id="username" name="username" placeholder="Username" type="text" value={loginForm.username} onChange={ handleInputChange} />
                    <br></br><br></br>
                    <input id="password" name="password" type="password" placeholder="Password" value={loginForm.password} onChange={handleInputChange} /> 
                    <br></br><br></br>
                    <input type="submit" name="submit" value="Login" className="login-submit"/>
                </form>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    return { 
        loginForm: state.loginReducer,
        currentUser: state.usersReducer.name
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
