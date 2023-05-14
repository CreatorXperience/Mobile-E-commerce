import React from 'react'
import Svg from './icons/Svg'
type forProductCardProps = {
    content: {
        "product-image-link": string,
        "product-name": string,
        "product-amount": number,
        "product-reviews": number,
        "product-description": string
    }
}
const ProductCard = ({content}:forProductCardProps)=> {
    return (
        <div className='w-30 rounded-md my-[-5px] mx-4 '> 
            <div className='container w-30'> 
                <img src={content['product-image-link']} className='w-30 rounded-2xl z-10' alt="hum"  />
              
            </div>

            <div className='font-normal text-[14px] text-gray-500'> {content['product-name']}</div>
            <div>  $ <span className='font-bold text-[12px]'> {content['product-amount']} .00 </span></div>
            <p className='z-20 translate-y-[-270%] translate-x-32'>{Svg.shoppingBag()} </p> 
        </div>
    )
}

export default ProductCard; 