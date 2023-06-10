import React from 'react'
import Svg from './icons/Svg'
type forProductCardProps = {
    content?: {
        "product-image-link": string,
        "product-name": string,
        "product-amount": number,
        "product-reviews": number,
        "product-description": string
    }
}
const ProductCard = ({content}:forProductCardProps)=> {
    return (
        <div className='w-30 rounded-md my-[12px] mx-4 '> 
            <div className='container w-30'> 
             { content  ?  <img src={content?.['product-image-link']} className='w-30 rounded-2xl z-10' alt="hum"  />: ''}
          { !content  ? <div className='container w-[100%] h-[10rem] rounded-2xl z-10 animate-pulse bg-gray-200 '>   </div>:"" }
            </div>

           { content ? <div className='font-normal text-[14px] text-gray-400'> {content?.['product-name']}</div>: ''}
           {content ?  <div>  $ <span className='font-bold text-[12px]'> {content?.['product-amount']} .00 </span></div>: ''}
           {content? <p className='z-20 translate-y-[-270%]  translate-x-0  md:translate-x-[90%]'>{Svg.shoppingBag()} </p>:"" }
        </div>
    )
}

export default ProductCard; 



  