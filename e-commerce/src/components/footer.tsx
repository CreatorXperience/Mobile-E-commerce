import React from 'react'
import Svg from './icons/Svg'

const Footer = ()=>{
    // let [initialState, setInitialState]=  useState("hi")
    
    return (
        <div className='container w-[100%] py-6 px-4   bg-white flex rounded-sm shadow-2xl fixed bottom-0 translate-y-[10%] '>  
       <div className="container flex justify-between w-100"> 
    <p>{Svg.home()} </p>  
      <p>{Svg.save()}</p>
     <p> {Svg.notification()} </p> 
      <p> {Svg.user()} </p> 
       </div>
        
        </div>
    )
}

export default Footer