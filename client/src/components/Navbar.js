import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => <div>
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
</div>;

export default Navbar;