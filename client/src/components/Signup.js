import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/users.js';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            username: "",
            password: "",
            email: "",
        }
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/users`,{
            method: 'POST',
			headers: {
				"Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: this.state.name,
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.errors){
                alert(data.errors);
            }else {
                localStorage.setItem("token", data.jwt)
                this.props.setUser(data.user.name)
            }
        }) 
        .catch(function() {
            console.log("error");
        });;
    }
    
    render(){
        if(this.props.currentUser){
            return <Redirect to='/' />
        }
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Sign Up</h1>
                    <label > Name:</label> <br />
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /> <br /><br />

                    <label > Username:</label> <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} /> <br /><br />

                    <label > Password:</label> <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} /> <br /><br />

                    <label > E-mail:</label> <br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} /> <br /><br />

                    <input type="submit" name="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, { setUser })(Signup);