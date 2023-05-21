import React from "react";
// import Logo from "./Logo";
import Navbar from "./Navbar";
import './Header.css';
const Header = () => {
    return (
            <div className="header-display">
                <h1 className="mt-10 font-bold text-white ml-5 text-5xl">Ecom</h1>
                <Navbar/>
            </div>
    ); 
};



export default Header;