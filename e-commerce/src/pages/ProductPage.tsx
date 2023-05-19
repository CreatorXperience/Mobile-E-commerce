
import React, { useEffect,useState } from 'react'
import { Link, useLocation,useParams } from 'react-router-dom'
import axios from 'axios'
import Svg from '../components/icons/Svg'
import SumPrice from '../components/SumPrice'
import { Button } from '../components/button'


type forProductState = {
    data: {
        "category":  string;
        "link": number,
        "product-image-link": string,
        "product-name": string,
        "product-amount": number,
        "product-reviews": number,
        "product-description": string
    }
}
const ProductPage = ()=> {

 let {id,term} = useParams()
let [ProductState, setProductState] = useState<forProductState>({data: {
        "category": '',
        "link": 0,
        "product-image-link": "",
        "product-name": "",
        "product-amount": 0,
        "product-reviews": 0,
        "product-description": ""
}})


 useEffect(()=> {
    const handleImmediateFetch = async (term:string, id:string)=> {
        let response = await axios.get(`http://localhost:3030/${term}/${id}`)
        setProductState({data: response.data})
    }
    handleImmediateFetch(term as string, id as string)
 },[term,id])
 
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
           <Link to="/home">  <div className='w-10 shadow-md rounded-md flex justify-center z-10 bg-white py-2 top-4 absolute left-14'> {Svg.back()} </div> </Link>
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
                    <SumPrice quantity={0} /> 
                    </div>
                <div className='px-4 text-[15px] w-[100%] font-light mb-10'> {ProductState.data['product-description']} </div>
                <div className='flex fixed  w-[100%] bottom-0'> 
                <div className='w-1/5 mx-2 py-4 flex justify-center my-4 px-2 rounded-lg bg-gray-300'>{Svg.save()}</div>
                <div className='w-4/5 mx-2 py-4 text-center my-4 px-2 rounded-lg bg-gray-900 text-white text-xl'> Add to Cart </div>
             </div>
             </div>
           
             </div> 

    )
}

export default ProductPage