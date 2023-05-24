import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
//import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div>
        {/* footer section */}
        <footer  className="mt-0 bg-blue-900">
          <div className="grid grid-cols-2 text-white container">
            <div className="text-white">
              <h3 className="text-2xl">Ecom Store</h3>
              <p>Ecom store where you can buy more than 100+ products in good price </p>
            </div>
            <div className="footer-subscribe flex">
              <h3>Write Email</h3>
              <form action="#" className="ml-5 text-black">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <button className=" ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" > Click</button>
              </form>
            </div>
            <div className="footer-social flex gap-5">
              <h3>Follow Us</h3>
              <div className="footer-social--icons flex gap-2 text-2xl">
                <div>
                  <NavLink to="/">
                    <FaDiscord className="icons" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/">
                    <FaInstagram className="icons" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/">
                    <FaYoutube className="icons" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <h3>Call Us</h3>
              <a href="tel:8800309883">+91 8800309883</a>
            </div>
          </div>

          <div className="">
            <hr className="mt-5"/>
            <div className="grid grid-cols-2 text-white mt-5">
              <div>
                <p>
                  @{new Date().getFullYear()} Ecom. All Rights Reserved
                </p>
              </div>
              <div>
                <p>PRIVACY POLICY</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;