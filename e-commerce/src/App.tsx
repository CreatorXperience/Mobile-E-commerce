import React,{useState,useEffect,createContext,useMemo,useCallback} from "react";
import axios from "axios";
import Boarding from "./pages/BoardPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Home from './pages/Home'
import "../src/style.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { CartContextType, forCurrentProductState } from "./type";

export const Context = createContext<CartContextType|null>(null)

const App = () => {
  
const [cart, setCart]= useState<forCurrentProductState[]>([])

const [fetchState, setFetchState] = useState<{
       "category":  string;
       "link": number,
       "product-image-link": string,
       "product-name": string,
       "product-amount": number,
       "product-reviews": number,
       "quantity": number,
       "product-description": string
}[] | null>(null)




let HandleFetch = useCallback( async (term:string) => {
  try {
      let response = await axios.get(`http://localhost:3030/${term}`)
      let responseData =  response.data
      setFetchState(responseData)  
  }
catch(e){
let errorState =  [{
"category":  "popular",
"link": 10,
"product-image-link": 'https://i.pinimg.com/564x/bd/6e/5c/bd6e5ce4130322f588640258fca7b03b.jpg',
"product-name": "error",
"product-amount": 0,
"product-reviews": 0,
"quantity": 0,
"product-description": "Sorry Can't find what you search for try rephrasing the term"
}]
setFetchState(errorState)
}
},[]) 


useEffect(()=> {
  setTimeout(()=> HandleFetch("popular"),3000)
},[HandleFetch])

useEffect(() => {
  let item = localStorage.getItem('cart')
  if(item){
    setCart(JSON.parse(item))
  }
  else {
    localStorage.setItem("cart", JSON.stringify([
      {
        data: {
          "category":  "",
          "link": 0,
          "product-image-link": "",
          "product-name": "",
          "product-amount": 0,
          "product-reviews": 0,
          "quantity": 0,
          "product-description": ""
        }
      }
    ]))
  }
},[])

const handleRemoveCart = useCallback((exp: number)=> {
const cart = localStorage.getItem('cart')
if(cart){
let parsedCart = JSON.parse(cart)
// let  SlicedCart = parsedCart.slice(1,parsedCart.length)
 let filtered =  parsedCart.filter((el:forCurrentProductState,index:number)=> index-1 !== exp )
 localStorage.setItem("cart", JSON.stringify(filtered))
 setCart(filtered)
}
},[] )


const handleQTY = useCallback((QTY:number, Currentcart:forCurrentProductState[], pos:number)=> {
let current = Currentcart.forEach((product,index)=> {
  if(pos === index){
    product.data.quantity = QTY
  }
  else{
    return
  }

  localStorage.setItem("cart", JSON.stringify(current))

} )
},[])


const handleAddToCart = useCallback((item:forCurrentProductState,quantity:number)=> {
let content = localStorage.getItem('cart')
let parsedContent:forCurrentProductState[] = JSON.parse(content as string)
parsedContent.map((el)=> {
if(el.data.link !== item.data.link){
  let newStore  = [...parsedContent,item]
  setCart(newStore)
  localStorage.setItem("cart", JSON.stringify(newStore))
  return true
}
else{
  let replaceStore  = [...parsedContent]
  setCart(replaceStore)
  localStorage.setItem("cart", JSON.stringify(replaceStore))
  return false
}
})
    },[])

 


const value = useMemo(()=> {
return (
  {cart,handleRemoveCart,handleAddToCart,fetchState,handleQTY}
)
},[cart,handleRemoveCart,handleAddToCart,fetchState,handleQTY])





  return (

    <div className="App h-[100vh]">
      <Context.Provider value={value}> 
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home handleFetch= {HandleFetch} />} />
        <Route path="/product/:term/:id" element={<ProductPage  AddToCart={handleAddToCart}  />} />
       
        <Route path='/cart' element={<Cart />}/> 
     
        

      </Routes>

        </Context.Provider>

    </div>
  );
};

export default App;
