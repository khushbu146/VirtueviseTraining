import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock } = product;
 
  return (
    <div>
      <NavLink to="/cart">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">AddToCart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;