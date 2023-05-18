import { link } from 'fs'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const ProductPage = ()=> {
    let {state} = useLocation()
    let [ProductState,setProductState]= useState(state)
    let [localState, setLocalState] = useState()
    let DataStorage: any;
    useEffect(()=>{

      

if (DataStorage !== null) {
    DataStorage = localStorage.getItem('product') 
}else{
    let TemporaryStorage =  localStorage.setItem('product', JSON.stringify(state))
  
}


console.log(state)


    },[ProductState])

    return (
        <div className='container w-[100%] h-[100vh]'>
            <div className='w-[100%] relative'> 
{ state ? <img src={state["product-image-link"]}  alt='img' className='' />:'' }
            </div>
             </div> 
    )
}

export default ProductPage