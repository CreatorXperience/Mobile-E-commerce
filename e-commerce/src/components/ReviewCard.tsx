import React from 'react'

type forReviewCardProps = {
  productInfo: {
    product: string,
    imageLink: string,
    amount: number,
    date: string,
    review: string
  }
}
const  ReviewCard = ({productInfo}: forReviewCardProps) => {
    return (
        <div className='container w-100 bg-white shadow-md rounded-md py-4'> 
        <div className='flex'> 
        <img src={productInfo.imageLink} alt='myimage' className='w-20 rounded-lg mx-5'/>
        <div> 
        <div className='text-gray-500 text-2xl'> {productInfo.product} </div>
        <div className='text-gray-900 font-bold text-xl'> $<span>{productInfo.amount}</span>.00 </div>
        </div>
        </div>
        
        <div className='flex justify-end mx-6 text-md text-gray-500'> 
        <div>{productInfo.date}</div>.
        </div>
     <div className='mx-4 text-md text-gray-800 font-medium px-4'> 
{productInfo.review}
     </div>
        </div>
    )
}
export default ReviewCard