import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import SingleProduct from "./SingleProduct";

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;

