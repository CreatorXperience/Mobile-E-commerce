import React from 'react'

type forOrderProps = {
    resources: {
        Order: number,
        Delivery: number
        Discount: number
    }, 
   isDiscount: boolean
}
const OrderInfo = ({resources, isDiscount}:forOrderProps)=> {
const  Details = {
        order: resources.Order,
        Delivery: resources.Delivery,
        Discount: resources.Discount
    }

       const total = (Details.order + Details.Delivery) - Details.Discount 

    return (
        <div className='bg-white rounded-md shadow-md container w-90 mx-2 my-4'>
            <div className='flex justify-between py-2 mx-4'>
                <p className='text-gray-400 text-xl'> Order: </p>
                <p className='font-semibold text-xl'> $ <span>{Details.order}</span>.00 </p> 
                 </div>

                 <div className='flex justify-between py-2 mx-4'>
                <p className='text-gray-400 text-xl'> Delivery: </p>
                <p className='font-semibold text-xl'> $ <span>{Details.Delivery}</span>.00 </p> 
                 </div>

                 {isDiscount? <div className='flex justify-between py-2 mx-4'>
                <p className='text-gray-400 text-xl'> Discount </p>
                <p className='font-semibold text-xl'> $ -<span>{Details.Discount}</span>.00</p> 
                 </div>: ''}

                 <div className='flex justify-between py-2 mx-4'>
                <p className='text-gray-400 text-xl'> Total: </p>
                <p className='font-semibold text-xl'> $ <span>{total}</span>.00</p> 
                 </div>
                 
             </div>
    )
}
export default OrderInfo