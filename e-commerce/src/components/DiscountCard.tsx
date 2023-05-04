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
        <div className='container flex  w-80  py-sm my-4 mx-2 text-red shadow-md  rounded-md'>   
        <input ref= {inputRef} type="text" className='w-80 bg-[#fffff] border-none outline-none px-2 ' placeholder='Enter your promo code' onChange={(e)=> handleChageEvent(e)}/>
        <button className='bg-gray-800  w-12 border-none px-[14px] py-4 rounded-md ml-[-1rem] left-md' onClick={()=> handleDeleteInputValue()}>{Icon} </button>
        </div>
    )
}

export default DiscountCard