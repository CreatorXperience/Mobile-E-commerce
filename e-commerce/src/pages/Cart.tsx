import React, {useContext} from 'react'
import { CartContextType} from '../type'
import { Context } from '../App'
import ItemCard from '../components/ItemCard'


const Cart = ()=>{
    const {cart} = useContext(Context) as CartContextType
let SlicedCart
SlicedCart = cart.slice(1, cart.length)
   

   let newCart =  SlicedCart.map((item,index)=> {
    let {data} = item
        return <ItemCard key={data['product-reviews']} Index = {index} content={item}/>
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