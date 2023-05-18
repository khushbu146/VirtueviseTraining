import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ConfirmOrder from "./components/ConfirmOrder";
const App = () => {
  return (  
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
        <Route path="/confirmOrder" element={<ConfirmOrder/>}/>
      </Routes>
    </Router>
  );
};

export default App;

