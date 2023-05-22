import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { forProductState } from '../type'
const Cart = ()=>{
    let {id,term} = useParams()
    const [cart,setCart] = useState<forProductState>({data:  {
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
       setCart({data: response.data})
    }
    handleImmediateFetch(term as string, id as string)
},[term,id])

useEffect(()=> {
   const Item =  localStorage.getItem('product')
    if(Item !== null || Item !== undefined){
     setCart(JSON.parse(Item as string))
    }
},[])

useEffect(()=> {
    localStorage.setItem('product', JSON.stringify(cart))
    console.log("i ran");
})

console.log(cart)
return (
    <div> hi </div>
   
)
}

export default Cart