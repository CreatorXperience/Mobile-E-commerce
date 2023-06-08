import React, {useContext} from 'react'
import { CartContextType, forCartItem} from '../type'
import { Context } from '../App'
import ItemCard from '../components/ItemCard'


const Cart = ()=>{
    const {cart,handleRemoveCart,handleAddToCart} = useContext(Context) as CartContextType
    
   let newCart =  cart.map((item)=> {
    let {data} = item
        return <ItemCard key={data['product-reviews']} content={item}/>
    })
    
return (
    <div> 
        <div className='w-[100%] '> 
        <div> 
      
        </div>

        <div>{newCart}</div>
        </div> 
  
    </div>
   
)
}

export default Cart