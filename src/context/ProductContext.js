import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  isError: false,
  products: [],
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      const products = await res.data;
      //optional chaining
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //  for single product

  const getSingleProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <AppContext.Provider value={{ ...state, getSingleProduct,getProducts}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };