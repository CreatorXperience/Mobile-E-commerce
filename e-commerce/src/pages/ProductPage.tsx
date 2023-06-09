
import React, { useEffect,useState,useMemo } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import Svg from '../components/icons/Svg'
import SumPrice from '../components/SumPrice'
import {forCurrentProductState} from '../type'
import { productCardType } from '../type'
import "../../src/style.css"


const ProductPage = ({AddToCart}:productCardType)=> {
 let {id,term} = useParams()

const [ProductState, setProductState] = useState<forCurrentProductState>({data: {
        "category": '',
        "link": 0,
        "product-image-link": "",
        "product-name": "",
        "product-amount": 0,
        "product-reviews": 0,
        "quantity": 1,
        "product-description": "",
}})

const [quantity,setQuantity]= useState(1)
const [isAdded, setIsAdded] = useState(false)

const memoize = useMemo(()=> {
return {term,id}
},[term,id])

const AddProductTOCart = ()=> {
  
    if(!isAdded){
        AddToCart(ProductState,quantity)
        setIsAdded(true)
    }else{
        return 
    }
       
    }
    


const getQuantity = (newQuantity:number)=> {
    setQuantity(newQuantity)
}



 useEffect(()=> {
    const handleImmediateFetch = async (term:string, id:string)=> {
        let response = await axios.get(`http://localhost:3030/${term}/${id}`)
        setProductState({data: response.data})
    }
    handleImmediateFetch(memoize.term as string, memoize.id as string)
   
 },[memoize.term,memoize.id])
 
useEffect(()=> {
    let getData = localStorage.getItem('product')
    if(getData !== undefined){
  setProductState(JSON.parse(getData as string))
    }
  
},[])




useEffect(()=> {
    let setItem = localStorage.setItem('product', JSON.stringify(ProductState))
})


    return (
        <div className='container w-[100%] h-[100vh]'>
            <div className='w-[100%] relative'> 
            <div className='flex justify-center absolute z-40 w-[100%]' >
            {isAdded? <div className='w-4/5 mx-2 py-4 opacity-80 text-center top-[60rem] mt-10  my-4 px-2 rounded-full bg-gray-900 text-white text-xl' id='bounce'> 
        Added to Cart
         </div>: ''}
         </div>
           <Link to="/home">  <div className='w-10 shadow-md rounded-md flex justify-center z-50 bg-white py-2 top-2 absolute left-14'> {Svg.back()} </div> </Link>
            <div className='w-16 bg-white rounded-full flex align-center py-4 px-4 flex-col absolute z-40 shadow-md left-10 top-24'> 
            <div className='my-2'>{Svg.white()}</div> 
            <div className='my-2'>{Svg.brown()} </div> 
            <div className='my-2'> {Svg.lightbrown()}</div> 
            
             </div>
        <img src={ProductState.data['product-image-link']} className=' z-0 w-[80%] absolute shadow-md left-20' style={{borderBottomLeftRadius: '30px'}} alt='product' />
       
        
            </div>
            <div className='relative top-[22rem]'>  
                <div className=' px-4 text-2xl font-semibold'>{ProductState.data['product-name']}</div>  
                <div className='flex justify-between'>
                    <div className='px-4 text-3xl font-bold my-2'> <span>  $ </span> {ProductState.data['product-amount']} </div> 
                    <SumPrice quantity={ProductState.data.quantity} getQuantity={getQuantity}/> 
                    </div>
                <div className='px-4 text-[15px] w-[100%] font-light mb-10'> {ProductState.data['product-description']} </div>
                <div className='flex fixed  w-[100%] bottom-0'> 
                <div className='w-1/5 mx-2 py-4 flex justify-center my-4 px-2 rounded-lg bg-gray-300'>{Svg.save()}</div>
             <div className='w-4/5 mx-2 py-4 text-center my-4 px-2 rounded-lg bg-gray-900 text-white text-xl' onClick={()=> AddProductTOCart()}> Add to Cart  </div>
             </div>
             </div>
           
             </div> 

    )
}

export default ProductPage