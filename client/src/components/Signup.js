import React from 'react';
import { connect } from 'react-redux';
import { setUser, setUsername } from '../actions/users.js';
import { updateSignUpForm, signup } from '../actions/signup.js';
import { Redirect } from 'react-router-dom';

const Signup = ({signupForm, signup, updateSignUpForm, currentUser}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updateFormData = {
            ...signupForm,
            [name]: value
        }
        updateSignUpForm(updateFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupForm)
    }
   
    if(currentUser){
        return <Redirect to='/' />
    }
    return(
        <div className="content">
            <div className="header"><p className="header-title">Sign Up</p></div>
            <div className="inner-content">
            <form onSubmit={handleSubmit} className="login-form">
                <h4>Sign Up</h4>
                <input type="text" name="name" placeholder="Name" value={signupForm.name} onChange={handleInputChange} /> <br /><br />
                <input type="text" name="username" placeholder="Username" value={signupForm.username} onChange={handleInputChange} /> <br /><br />
                <input type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleInputChange} /> <br /><br />
                <input type="email" name="email" placeholder="E-mail" value={signupForm.email} onChange={handleInputChange} /> <br /><br />
                <input type="submit" name="submit" value="Submit" className="login-submit"/>
            </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { 
        signupForm: state.signupReducer,
        currentUser: state.usersReducer.user,
        currentUsername: state.usersReducer.username
     }
}

export default connect(mapStateToProps, { signup, updateSignUpForm, setUser, setUsername })(Signup);