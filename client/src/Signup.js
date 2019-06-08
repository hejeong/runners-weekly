import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            username: ""
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
                <form>
                    <h1>Sign Up</h1>
                    <label for="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /> <br /><br />
                    <label for="username">Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
                </form>
            </div>
        )
    }
}

export default Signup;