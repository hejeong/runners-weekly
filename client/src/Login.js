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
                this.setState({"user-name": data.name})
            }
      
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/' />
        }
        return(
            <div>
                 <form onSubmit={this.handleLoginOnSubmit}>
                    <h1>Log In</h1>
                   
                    <label > Username:</label> <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleLoginOnChange} /> <br /><br />

                    <label > Password:</label> <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleLoginOnChange} /> <br /><br />

                    <input type="submit" name="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}

export default Login;