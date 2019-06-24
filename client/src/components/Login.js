import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, setUsername } from '../actions/users.js';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            redirect: false,
        }
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLoginOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoginOnSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8000/api/login`, {
            method: 'POST',
            headers: {
				"Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.error){
                //error
                alert(data.error)
            }else {
                //success
                localStorage.setItem("token", data.jwt)
                this.props.setUser(data.user.name)
                this.props.setUsername(data.user.username)
                this._isMounted && this.setState({
                    redirect: true
                })
            }
        });
    }
     
    render(){ 
        if(this.state.redirect || this.props.currentUser){
           return <Redirect to='/' />
        }
        return(
            <div className="content">
                <div className="header"><p className="header-title">Log In</p></div>
                <div className="inner-content">
                <form onSubmit={this.handleLoginOnSubmit} className="login-form">
                    <h4>Sign in to continue</h4>
                    <input id="username" name="username" placeholder="Username" type="text" value={this.state.username} onChange={this.handleLoginOnChange} />
                    <br></br><br></br>
                    <input id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleLoginOnChange} /> 
                    <br></br><br></br>
                    <input type="submit" name="submit" value="Login" className="login-submit"/>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, { setUser, setUsername })(Login);