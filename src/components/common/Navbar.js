import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import "./Navbar.css";
const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false);

    return (
        <nav>
            <div className={menuIcon ? "navbar active" : "navbar"}>
            {/* <div className="">  */}
                <div className="">
                    <ul className='display navbar-lists'>
                        <li><a  className="text-white-500 hover:text-gray-800" href="/" onClick={() => setMenuIcon(false)}>HOME</a></li>
                        <li><a className="text-white-500 hover:text-gray-800" href="/"  onClick={() => setMenuIcon(false)}>PRODUCTS</a></li>
                        <li><a className="text-white-500 hover:text-gray-800" href="/login"  onClick={() => setMenuIcon(false)}>LOGIN</a></li>
                        <li><a className="text-white-500 hover:text-gray-800 cart-trolley--link" href="/cart">
                            <FiShoppingCart className="cart-trolley" />
                            <span className="cart-total--item"> 0 </span>      
                        </a></li>
                    </ul>
                </div>
                {/* two button for open and close of menu */ }
                <div className="mobile-navbar-btn">
                    <CgMenu
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={() => setMenuIcon(true)}
                    />
                    <CgClose
                        name="close-outline"
                        className="mobile-nav-icon close-outline"
                        onClick={() => setMenuIcon(false)}
                    />
                </div>
            </div>
        </nav>
    );      
}
export default Navbar;