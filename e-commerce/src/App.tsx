import React, { useState } from "react";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Home from "./pages/Home";

import "../src/style.css";

const App = () => {
  return (

    <div className="App h-[100vh]">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>

       

    </div>
  );
};

export default App;
