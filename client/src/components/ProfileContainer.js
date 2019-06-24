import React, { Component } from 'react';

class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: null
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8000/api/profile/` + this.props.currentUsername)
        .then(resp => resp.json())
        .then(data => this.setState({
            userInfo: data
        }))
        .catch(err => console.error('Error:', err));
    }
}