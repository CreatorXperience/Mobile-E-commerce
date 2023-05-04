import React from 'react'
import Svg from './icons/Svg'
const OrderCard = ()=>{
    return (
        <div className='w-90 bg-white shadow-md rounded-lg mx-4 my-2 py-4'>  
        <div className='w-100 flex justify-between px-4 text-lg '>
<p className='font-medium'> Order No09875555</p>
<p>20/03/2020</p>
        </div>
      <div className='w-100 h-px bg-gray-300 my-2'> </div>

<div className="flex justify-around my-4"> 
<p className='font-normal text-gray-500'>Quantity:<span className='font-bold text-gray-900'> 03 </span> </p> 
<p className='font-normal text-gray-500'>Total Amount :<span className='font-semibold text-gray-900'> $<span>150</span></span> </p> 
</div>

<div className='w-100 flex justify-between mt-10'> 
<div> 
<button className='bg-gray-900 py-4 px-2 text-white rounded-e-md w-40'> Detail </button>
</div>

<p className='mx-10 mt-4 text-emerald-600 flex'> {Svg.time()} Delivered</p> 
    </div>
        </div>
    )
}
export default OrderCard