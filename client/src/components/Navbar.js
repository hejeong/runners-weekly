import React from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const Navbar = (props) => {
    let elements;
    if(props.currentUser){
        elements =
        <ul className="navbar">               
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/blog" className="nav-link">
                Main Blog
            </NavLink>
        </ul>
    }else {
        elements = <ul className="navbar">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>

                <NavLink to="/login" className="nav-link">
                    Login
                </NavLink>

                <NavLink to="/signup" className="nav-link">
                    Sign up
                </NavLink>
            </ul>
    }
    return( 
        elements
    )
};

const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, null)(Navbar);