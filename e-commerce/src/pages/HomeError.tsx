import React from 'react'

type forHomeErrorProps = {
userInput: string
content: {
    "link": number,
    "product-image-link": string,
    "product-name": string,
    "product-amount": number,
    "product-reviews": number,
    "product-description": string
} 
}
const HomeError = ({content,userInput}: forHomeErrorProps)=> {
    return (
        <div className='translate-x-[55%] w-100'>
            <img src={content['product-image-link']} alt='error' className='rounded-full w-[40%] translate-x-[60%]' />
           <p className='font-semibold text-lg text-center'>  Empty  {`"${userInput}"`}  result </p> 
           <div className='text-center text-sm md:text-md'>- Check your spelling for typing errors </div>
           <div className='text-center text-sm  md:text-md'> - Try searching with short and simple keywords </div>
           <div className='text-center text-sm md:text-md'> - Try searching more general terms - you can then filter the search results </div> 
             </div>
    )
}
export default HomeError