import React,{useState,createRef, useEffect} from 'react'
import Svg from '../components/icons/Svg'
import "../../src/style.css"
import ProductCard from '../components/productCard'
import Footer from '../components/footer'
import axios from 'axios'
interface forHomeProps {
   drop: {
        "link": number,
        "product-image-link": string,
        "product-name": string,
        "product-amount": number,
        "product-reviews": number,
        "product-description": string
    }[] 
}

const Home = ()=> {
    const [inputState, setInputState]= useState(true)
    const [initialFetchState, setInitialFetchState] = useState<forHomeProps>({drop: []})
    const [userInput, setUserInput] = useState('popular')
    
    const elementRef = createRef<HTMLInputElement>()

    let handleInitialFetch =  async (term:string) => {
        let response = await axios.get(`http://localhost:3030/${term}`)
        let responseData = response.data
      
    setInitialFetchState({drop: responseData})  
}

useEffect(()=> {

    if(userInput === "popular"){
        handleInitialFetch(userInput)
       }
},[userInput])


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

        },[elementRef,inputState,userInput])
    
        
    const handleSearchIconClick = (event: React.MouseEvent<HTMLDivElement>)=> {
        event.stopPropagation()
       setInputState(!inputState) 
       console.log('from handle click' + inputState)
    }
    const handleFormSubmit =(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
//    FetchData(userInput)
    handleInitialFetch(userInput)
    }

    const handleInputChange =(event: React.ChangeEvent<HTMLInputElement>)=> {
        setUserInput(event.target.value.toLowerCase())
    }
    const handleItemClick = (e: React.MouseEvent<HTMLDivElement>,item:string)=> {
setUserInput(item)
   handleInitialFetch(item)
}
    
let ProductImage = initialFetchState.drop.map((datas)=> {
    return  <ProductCard key = {datas.link}content = {datas}/>
  })

    return (
    <div>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input ref = {elementRef} onChange={(e)=> handleInputChange(e)} id = "Jump" type='text' className={` w-[95%] mx-2 border-none outline-none shadow-md rounded-xl px-4 py-4 ${inputState === true ? "hidden" : ""   }   `} placeholder='Search'/>
        </form>
        <div className='container  w-[94%] flex justify-between mx-[10px] my-2'> 
        <div onClick={(e)=> handleSearchIconClick(e)}> {Svg.search()}</div>
        <div>  
        <div className='font-light text-center'> Make home </div>
        <div className='font-bold text-lg text-center'>BEAUTIFUL </div>
        </div>
        <div> {Svg.cart()}</div>
         </div>
        <div className='mx-4 my-4'>
         <div className='container w-[100%] flex justify-around'> 
        <div> 

         <div className='w-[4rem] bg-gray-800 rounded-2xl flex animate-bounce justify-center  py-5'> 
         <p onClick={(e)=> handleItemClick(e,"popular")}>  {Svg.star()} </p>
         </div>

         <div className='text-center'>Popular</div>

         </div>
         <div className = "">
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-[16px] px-2'> 
       <p onClick={(e)=> handleItemClick(e,"sofa")}>  {Svg.sofa()} </p>
         </div>
            <div className='text-center'> Sofa </div>
            </div>

            <div> 
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-5 px-2'> 
            <p onClick={(e)=> handleItemClick(e,"bed")}>  {Svg.bed()} </p>
         </div>
            <div className='text-center'>Bed</div>
</div> 

<div>
            <div className='w-[4rem] bg-[#ebecee] rounded-2xl flex justify-center py-5 px-2'> 
            <p onClick={(e)=> handleItemClick(e,"wardrobe")}>  {Svg.wardrobe()} </p> 
         </div>
            <div className='text-center'>Wardrobe</div>
            </div>
         </div>
         </div>
         
         <div className='grid grid-cols-2 col-span-1 mt-8 gap-y-1'> 
         {ProductImage}
         </div> 
         
         <div className=''> 
         <Footer />
         </div>
        
         </div>
    )
}

export default Home