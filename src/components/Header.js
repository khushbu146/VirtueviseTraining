import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import './Header.css';
const Header = () => {
    return (
            <div className="header-section">
                <div className="header-display">
                    <Logo/>    
                    <Navbar className="header-background"/>
                </div>
            </div>
    ); 
};



export default Header;