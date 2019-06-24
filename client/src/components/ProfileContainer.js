import React, { Component } from 'react';
import Profile from './Profile';
class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: null
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8000/api/profile/` + this.props.currentUser)
        .then(resp => resp.json())
        .then(data => this.setState({
            userInfo: data
        }))
        .catch(err => console.error('Error:', err));
    }

    render(){
        if(!this.state.userInfo){
            <div className="content">
                <div className="header"><p className="header-title">Loading...</p></div>
                <div className="inner-content">
                   Profile Loading...
                </div>
            </div>
        }
        return(
            <div className="content">
                <div className="header"><p className="header-title">{this.state.userInfo.name}'s Profile</p></div>
                <div className="inner-content">
                    <Profile userInfo={this.state.userInfo}/>
                </div>
            </div>
        )
    }
}