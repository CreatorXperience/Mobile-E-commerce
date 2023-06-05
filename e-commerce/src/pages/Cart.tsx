import React, {useContext} from 'react'
import { CartContextType, forCartItem} from '../type'
import { Context } from '../App'
import ItemCard from '../components/ItemCard'


const Cart = ()=>{
    const {cart,handleRemoveCart} = useContext(Context) as CartContextType
console.log(cart)
   let newCart =  cart.map(()=> {
        return <ItemCard />
    })
    
return (
    <div> 
        <div className='flex w-[100%] justify-center'> 
        <div> 
      
        </div>

        <div>{newCart}</div>
        </div> 
  
    </div>
   
)
}

export default Cart