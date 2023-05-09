import React from 'react'
import Svg from './icons/Svg'

const Footer = ()=>{
    // let [initialState, setInitialState]=  useState("hi")
    
    return (
        <div className='container w-90 py-6 px-4 my-4 mx-2 bg-gray-100 flex rounded-sm shadow-md'>  
       <div className="container flex justify-between w-100"> 
       {Svg.close()}
      {Svg.home()}
      {Svg.save()}
      {Svg.notification()}
      {Svg.user()}
       </div>
        
        </div>
    )
}

export default Footer