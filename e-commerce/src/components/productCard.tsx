import React from 'react'

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
        <div className='w-30 rounded-md mx-4'> 
            <div>
                <img src={content['product-image-link']} className='w-30 rounded-2xl' alt="hum"  />
            </div>

            <div className='font-semibold text-md'> {content['product-name']}</div>
            <div>  $ <span className='font-normal text-[12px]'> {content['product-amount']} .00 </span></div>
        </div>
    )
}

export default ProductCard;