import React from 'react';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    let elements;
    if(props.currentUser){
        elements = <div>
            <NavLink to ="/" exact 
                activeStyle={{
                    background: 'lightblue'
                }}
            > Home </NavLink>
            <Logout />
        </div>
    }else {
        elements = <div>
            <NavLink to ="/" exact 
                activeStyle={{
                    background: 'lightblue'
                }}
            > Home </NavLink>

            <NavLink to ="/signup" exact 
                activeStyle={{
                    background: 'lightblue'
                }}
            > Sign Up </NavLink>

            <NavLink to ="/login" exact 
                activeStyle={{
                    background: 'lightblue'
                }}
            > Log In </NavLink>
        </div>
    }
    return( 
        elements
    )
};

const mapStateToProps = (state) => {
    return { currentUser: state.usersReducer.user }
}

export default connect(mapStateToProps, null)(Navbar);