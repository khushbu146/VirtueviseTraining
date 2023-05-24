import React from "react";
// import Logo from "./Logo";
import Navbar from "./Navbar";
import './Header.css';
const Header = () => {
    return (
            <div className=" grid grid-cols-2 gap-4 bg-blue-800">
                <div>
                    <h1 className="mt-10 font-bold ml-5 text-white text-5xl mb-5">Ecom</h1>
                </div>
                <div>
                    <Navbar/>
                </div>
            </div>
    ); 
};



export default Header;