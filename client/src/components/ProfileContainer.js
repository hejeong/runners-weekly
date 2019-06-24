import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
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
            userInfo: data.user
        }))
        .catch(err => console.error('Error:', err));
    }

    render(){
        if(this.state.userInfo == null){
            return( <div className="content">
                <div className="header"><p className="header-title">Loading...</p></div>
                <div className="inner-content">
                   Profile Loading...
                </div>
            </div>)
        }
        return(
            <div className="content">
                <div className="header"><p className="header-title">{this.props.currentUsername}'s Profile</p></div>
                <div className="inner-content">
                    <Profile user={this.state.userInfo}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
        currentUsername: state.usersReducer.username
    }
}

export default connect(mapStateToProps, null)(ProfileContainer);