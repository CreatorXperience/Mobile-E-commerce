import React,{createRef, useState} from 'react'
import Svg from './icons/Svg'

const DiscountCard = ()=> {
const [inputValue, setInputValue] =  useState('')
const [Icon, setIcon] = useState(Svg.forwardLight())
const inputRef = createRef<HTMLInputElement>()
const handleDeleteInputValue = ()=> {
    if(inputRef.current !== null){
        inputRef.current.value = ''
        setInputValue('')
        console.log(inputValue);
    }
}
const handleChageEvent = (e:React.ChangeEvent<HTMLInputElement>)=> {
    let value = e.target.value
    if(value === ''){
        setIcon(Svg.forwardLight())
    }
    else{
        setIcon(Svg.recycleBinLight())
    }
  
    setInputValue(value)
}
    return (
       
        <div className='container flex justify-start  fixed bottom-20 w-[90%] py-sm my-4   mx-4 text-red shadow-md  rounded-md'>   
        <input ref= {inputRef} type="text" className='w-[88%] bg-[#fffff] border-none outline-none px-2 ' placeholder='Enter your promo code' onChange={(e)=> handleChageEvent(e)}/>
        <button className='bg-gray-800  w-[15%] border-none px-[14px] py-4 rounded-md  left-md' onClick={()=> handleDeleteInputValue()}>{Icon} </button>
        </div>
      
    )
}

export default DiscountCard