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
            <div className="content">
                <div className="header"><p className="header-title">Sign Up</p></div>
                <div className="inner-content">
                <form onSubmit={this.handleOnSubmit} className="login-form">
                    <h4>Sign Up</h4>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} /> <br /><br />
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleOnChange} /> <br /><br />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} /> <br /><br />
                    <input type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleOnChange} /> <br /><br />

                    <input type="submit" name="submit" value="Submit" className="login-submit"/>

                </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, { setUser })(Signup);