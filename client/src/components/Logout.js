import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { removeUser } from '../actions/users.js';
import jon from '../assets/jon.jpg';

const Logout = (props) => {
    const onClickLogout = (event) => {
        localStorage.clear();
        props.removeUser();
    }

    const profileURL = "/profile/" + props.currentUsername;

    return(
        <div className="navbar-profile"> 
        <div className="avatar-user-group">
            <NavLink to={profileURL} >
            <img className="avatar" src={jon} alt="Ash" />
            <div className="user-name">{props.currentUser}</div> <br></br>
            </NavLink>
        </div>
        <NavLink to="/" onClick={onClickLogout} className="logout">
            Logout
        </NavLink>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
        currentUsername: state.usersReducer.username
    }
}

export default connect(mapStateToProps, { removeUser })(Logout);