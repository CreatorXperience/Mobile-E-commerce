import React,{useState,createRef, useEffect} from 'react'
import Svg from '../components/icons/Svg'
import "../../src/style.css"
import ProductCard from '../components/productCard'
type forHomeProps = {
    FetchData: (term:string)=> void
   Datas:{
        "product-image-link": string,
        "product-name": string,
        "product-amount": number,
        "product-reviews": number,
        "product-description": string
    }[] 
}
const Home = ({FetchData,Datas}:forHomeProps)=> {
    const [inputState, setInputState]= useState(true)
    const [userInput, setUserInput] = useState('')
    
   let ProductImage = Datas.map((datas)=> {
      return  <ProductCard key = {datas['product-reviews']}content = {datas}/>
    })

    const elementRef = createRef<HTMLInputElement>()
    useEffect(()=> {
        let EVLISTENER =  (e:MouseEvent)=> {
                if(elementRef.current && !elementRef.current.contains(e.target as Node)){
                    setInputState(true)
                }
            }
                
            
    
           document.body.addEventListener("click", EVLISTENER )
    
            return ()=> {
                    document.body.removeEventListener("click", EVLISTENER )
                        }
           
           
        },[elementRef,inputState])
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement>)=> {
        event.stopPropagation()
       setInputState(!inputState) 
       console.log('from handle click' + inputState)
    }
    const handleFormSubmit =(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
   FetchData(userInput)
   
   
    }

    const handleInputChange =(event: React.ChangeEvent<HTMLInputElement>)=> {
        setUserInput(event.target.value)
    }
    const handleItemClick = (e: React.MouseEvent<HTMLDivElement>)=> {
    
    }
    return (
    <div>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input ref = {elementRef} onChange={(e)=> handleInputChange(e)} id = "Jump" type='text' className={` w-[95%] mx-2 border-none outline-none shadow-md rounded-xl px-4 py-4 ${inputState === true ? "hidden" : ""   }   `} placeholder='Search'/>
        </form>
        <div className='container  w-[94%] flex justify-between mx-[10px] my-2'> 
        <div onClick={(e)=> handleClick(e)}> {Svg.search()}</div>
        <div>  
        <div className='font-light text-center'> Make home </div>
        <div className='font-bold text-lg text-center'>BEAUTIFUL </div>
        </div>
        <div> {Svg.cart()}</div>
         </div>
        <div className='mx-4 my-4'>
         <div className='container w-[100%] flex justify-around'> 
        <div> 

         <div className='w-[4rem] bg-gray-800 rounded-2xl flex justify-center py-5'> 
        {Svg.star()}
         </div>

         <div className='text-center'>Popular</div>

         </div>
         <div className = "ele"  onClick={(e)=> handleItemClick(e)}>
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-[16px] px-2'> 
        {Svg.sofa()} 
         </div>
            <div className='text-center'>Sofa</div>
            </div>

            <div> 
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-5 px-2'> 
        {Svg.bed()} 
         </div>
            <div className='text-center'>Bed</div>
</div> 

<div>
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-5 px-2'> 
        {Svg.wardrobe()} 
         </div>
            <div className='text-center'>Wardrobe</div>
            </div>
         </div>
         </div>
         
         <div className='grid grid-cols-2 col-span-1'> 
         {ProductImage}
         </div> 
         
         </div>
    )
}

export default Home