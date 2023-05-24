import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
// import ConfirmOrder from "./components/ConfirmOrder";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/common/Footer";
import SignUp from "./pages/SignUp";
const App = () => {
  return (  
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/confirmOrder" element={<ConfirmOrder/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

