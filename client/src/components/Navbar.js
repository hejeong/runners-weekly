import React from 'react';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Navbar = (props) => {
    let elements;
    if(props.currentUser){
        elements = <React.Fragment>
        <ul className="navbar">               
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/blog" className="nav-link">
                Main Blog
            </NavLink>
        </ul>
        <Logout/>
        </React.Fragment>
    }else {
        elements = <React.Fragment>
            <ul className="navbar">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    Featured    
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About Us
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    Contact Us
                </NavLink>
            </ul>
            <div className="navbar-profile">
                <NavLink to="/login" className="login-link login">
                    Login
                </NavLink>
                <p className="or">or</p>
                <NavLink to="/signup" className="login-link signup">
                    Sign up
                </NavLink>
            </div>
            </React.Fragment> 
    }
    return( 
        elements
    )
};

const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, null)(Navbar);