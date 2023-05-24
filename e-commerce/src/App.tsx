import React,{useState} from "react";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Home from "./pages/Home";
import "../src/style.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const App = () => {
 
const [cart, setCart]= useState<{}[]>([])

const handleAddToCart =  (item:{})=>{
setCart((cart) => [...cart,item])
}

console.log(cart)
  return (

    <div className="App h-[100vh]">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:term/:id" element={<ProductPage  AddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart item ={cart}/>}/> 
      </Routes>

       

    </div>
  );
};

export default App;
