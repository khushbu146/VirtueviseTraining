import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className='display'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/'>PRODUCTS</NavLink>
            <NavLink to='/'>CART</NavLink>
            
        </div>
    );      
}
export default Navbar;