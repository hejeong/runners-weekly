import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            redirect: false
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleOnSubmit = (event) => {
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
            console.log(data)
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/' />
        }
        return(
            <div>
                 <form onSubmit={this.handleOnSubmit}>
                    <h1>Log In</h1>
                   
                    <label > Username:</label> <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} /> <br /><br />

                    <label > Password:</label> <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} /> <br /><br />

                    <input type="submit" name="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}

export default Login;