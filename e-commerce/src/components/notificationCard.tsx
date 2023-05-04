import React from 'react'

const Notification=()=>{
    return(
        <div className='w-90 bg-gray-100 flex justify-between py-2 mx-2 rounded-sm shadow-md'> 
        <img className='w-[6.8rem] rounded-md mx-2'src='https://i.pinimg.com/564x/7a/99/cc/7a99ccfe79430b80e6010e7990e69b39.jpg' alt='car'/>
        <div> 
<h3 className='text-sm font-semibold mb-1'> Your order #123456789 has been confirmed </h3>
<p className='text-sm/[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.  </p>
<span className='text-emerald-500 font-semibold text-md float-right px-12'> New </span>
            </div>
           
         </div>
    )
}

export default Notification