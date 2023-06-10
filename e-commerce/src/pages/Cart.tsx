import React, {useContext,useState,createContext, useMemo,useCallback} from 'react'
import { CartContextType, forCurrentProductState} from '../type'
import { Context } from '../App'
import { forQTYPROPS } from '../type'
import ItemCard from '../components/ItemCard'
import Svg from '../components/icons/Svg'
import { Link } from 'react-router-dom'
import DiscountCard from '../components/DiscountCard'

export const QTYCONTEXT = createContext<null | forQTYPROPS>(null)
const Cart = ()=>{
   
    const {cart} = useContext(Context) as CartContextType
    const [Price,setPrice] = useState({
        fixed: 0,
        TotalPrice: 0,
        Quantity: 1
    })

  
 

let SlicedCart = cart.slice(1, cart.length)

const UPDATE_QTY_AND_PRICE = useCallback((productID:number,quantity:number)=> {
    cart.map((el:forCurrentProductState,index)=> {
        if(productID === index){
    setPrice({fixed: el.data['product-amount'],TotalPrice: el.data['product-amount'] * quantity,Quantity:quantity})
            el.data.quantity = quantity
            return ""
        }
       return ""
    })
},[cart])



   const value = useMemo(()=> {
return {Price,setPrice,UPDATE_QTY_AND_PRICE}
   },[Price,setPrice,UPDATE_QTY_AND_PRICE])

   let newCart =  SlicedCart.map((item,index)=> {
    let {data} = item
        return <QTYCONTEXT.Provider value={value}> <ItemCard key={data['product-reviews']} Index = {index} content={item}/> </QTYCONTEXT.Provider>
    })
    
return (
    <div> 
        <div className='w-[100%] mb-64  '> 
       
        <div className='flex w-[50%] mb-2 mt-2 justify-between'> 
    <Link to="/home">     <div className='mx-4'> 
      {Svg.back()}
        </div> </Link>

        <div className=''> 
        <div className='font-medium text-lg'> Cart </div>  
        </div>
        </div>
        <div>{newCart}</div>
        </div>

<div className='bg-white mt-44  fixed bottom-0 w-[100%] h-[30%]'> 
        <DiscountCard />

<div className='flex justify-between   w-[100%] mt-4 px-6 '>
    <div className='text-xl font-medium  text-gray-600'> Total </div>
    <div className='font-bold text-xl mb-4'> $00.00 </div>
</div>
<div className='w-[100%] flex justify-center'> 
<button className='bg-gray-900 mb-2 px-4 py-4  w-[90%] rounded-lg mx-2 bottom-0 text-gray-50'> CHECKOUT </button>
</div> 
</div>
    </div>
   
)
}

export default Cart