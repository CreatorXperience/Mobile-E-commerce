import React, { useState } from "react";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import "../src/style.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";

const App = () => {
  return (
    <div className="App h-[100vh]">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
