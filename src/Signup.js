import React, { Component } from 'react';

class Signup extends Component {
    render(){
        return(
            <div>
                <form>
                    <h1>Sign Up</h1>
                    <label for="name">Name:</label>
                    <input type="text" name="name"  /> <br /><br />
                    <label for="username">Username:</label>
                    <input type="text" name="username"  />
                </form>
            </div>
        )
    }
}

export default Signup;