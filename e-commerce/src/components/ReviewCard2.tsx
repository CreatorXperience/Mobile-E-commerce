import React from 'react'
import { forReviewCardProps } from './ReviewCardTypes'

const SecondReviewCard = ({productInfo}:forReviewCardProps)=>  {
    return (
        <div className='container w-100 bg-white shadow-md rounded-md mx-1 my-4 py-4'> 
        <div className='flex justify-center'> 
        <img src={productInfo.imageLink} alt="myImage" className='w-14 rounded-full mt-[-22px]'/>
        </div>
       
       <div className='flex justify-between mx-4 mt-[-18px]'> 
       <div className='font-semibold text-xl'> {productInfo.product} </div>
        <div className='text-gray-500 text-lg'> {productInfo.date}</div>
       </div>

       <div className='mx-1 text-md text-gray-800 font-normal mt-3 px-4'> 
    {productInfo.review}
        </div>
        </div>
    )
}

export default SecondReviewCard
