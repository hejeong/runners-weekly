import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            username: "",
            password: "",
            email: ""
        }
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form >
                    <h1>Sign Up</h1>
                    <label for="name">Name:</label> <br />
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /> <br /><br />

                    <label for="username">Username:</label> <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} /> <br /><br />

                    <label for="password">Password:</label> <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} /> <br /><br />

                    <label for="email">E-mail:</label> <br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} /> <br /><br />

                    <input type="submit" name="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}

export default Signup;