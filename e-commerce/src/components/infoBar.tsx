import React from 'react'
import Svg from './icons/Svg'
type forInfoProps = {
    content: string
}
const InfoBar = ({content}:forInfoProps)=> {
    return (
        <div className='container w-100 my-4 py-4 shadow-md flex justify-between '>  
        <div> 
<div className='text-md font-semibold px-4 mb-1'> My orders </div>
<div className='text-[10px] font-normal px-4 text-gray-400'> {content} </div>
            </div> 

            <div className='mt-3 mr-4'>
                {Svg.forward()}
            </div>
        </div>
    )
}
export default InfoBar