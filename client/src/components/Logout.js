import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { removeUser } from '../actions/users.js';


const Logout = (props) => {
    const onClickLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        props.removeUser();
        return <Redirect to='/' />
    }
    return(
        <NavLink to="/logout" onClick={onClickLogout} className="nav-link">
            Logout
        </NavLink>
    )
}

export default connect(null, { removeUser })(Logout);