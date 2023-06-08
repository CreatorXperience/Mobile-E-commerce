import React,{useState,useEffect,createContext,useMemo,useCallback} from "react";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Home from './pages/Home'
import "../src/style.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { CartContextType, forCurrentProductState } from "./type";

export const Context = React.createContext<CartContextType|null>(null)

const App = () => {
  
const [cart, setCart]= useState<forCurrentProductState[]>([])

const handleRemoveCart = useCallback((index: number)=> {
  if(cart.length > index){
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
},[cart])


const handleAddToCart = (item:forCurrentProductState)=> {
  let content = localStorage.getItem('cart')
let parsedContent = JSON.parse(content as string)
  if(parsedContent){
    let newStore  = [...parsedContent,item]
    setCart(newStore)
    localStorage.setItem("cart", JSON.stringify(newStore))
  }
    }

const value = useMemo(()=> {
return (
  {cart,handleRemoveCart,handleAddToCart}
)
},[cart,handleRemoveCart,handleAddToCart])

useEffect(()=> {
  let item = localStorage.getItem('cart')

  if(item){
    setCart(JSON.parse(item))
  }
  else {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

},[])





console.log(cart)
  return (

    <div className="App h-[100vh]">
      <Context.Provider value={value}> 
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:term/:id" element={<ProductPage  AddToCart={handleAddToCart}  />} />
       
        <Route path='/cart' element={<Cart />}/> 
     
        

      </Routes>

        </Context.Provider>

    </div>
  );
};

export default App;
