import React from "react";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Home from "./pages/Home";
import "../src/style.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
const App = () => {



  return (

    <div className="App h-[100vh]">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:term/:id" element={<ProductPage  />} />
        <Route path='/cart/:term/:id/:quantity' element={<Cart />}/> 
      </Routes>

       

    </div>
  );
};

export default App;
