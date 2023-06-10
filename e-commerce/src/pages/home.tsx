import React,{useState,createRef, useEffect,useContext} from 'react'
import Svg from '../components/icons/Svg'
import "../../src/style.css"
import ProductCard from '../components/productCard'
import Footer from '../components/footer'
import HomeError from './HomeError'
import { Link} from 'react-router-dom'
import { CartContextType} from '../type'
import { forHomePageProps } from '../type'
import { Context } from '../App'

const Home = ({handleFetch}:forHomePageProps)=> {
    const [inputState, setInputState]= useState(true)
    const [userInput, setUserInput] = useState('popular')
    const elementRef = createRef<HTMLInputElement>()

    const {fetchState} = useContext(Context) as CartContextType

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
      
    }

    const handleFormSubmit =(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    setTimeout(()=> handleFetch(userInput),500)
    }

    const handleInputChange =(event: React.ChangeEvent<HTMLInputElement>)=> {
        setUserInput(event.target.value.toLowerCase())
    }

    const handleItemClick = (e: React.MouseEvent<HTMLDivElement>,item:string)=> {
        setUserInput(item)
   handleFetch(item)
}

let ProductImage
if(fetchState != null){
     ProductImage = fetchState.map((datas)=> {
        if(fetchState[0]['product-name'] === "error"){
            return <HomeError key = {datas['product-name']} userInput = {userInput} content = {datas} />
        }
        
        else {
            return  <Link  to = {`/product/${datas.category}/${datas.link}`}  key={datas.link} > 
            <ProductCard key = {datas.link} content = {datas}/>  
            </Link>
        }
        
          })
        
}
else{
    ProductImage = [<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />, <ProductCard />]
}

    return (
    <div>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input ref = {elementRef} onChange={(e)=> handleInputChange(e)} id = "Jump" type='text' className={` w-[95%] mx-2 border-none md:translate-x-4 outline-none shadow-md rounded-xl px-4 py-4 ${inputState === true ? "hidden" : ""   }   `} placeholder='Search'/>
        </form>
        <div className='container  w-[94%] md:translate-x-12 flex justify-between mx-[10px] my-2'> 
        <div onClick={(e)=> handleSearchIconClick(e)}> {Svg.search()}</div>
        <div>  
        <div className='font-light text-center'> Make home </div>
        <div className='font-bold text-lg text-center'>BEAUTIFUL </div>
        </div>
       <Link to='/cart'>  <div> {Svg.cart()}</div> </Link> 
         </div>
        <div className='mx-4 my-4 md:translate-x-8'>
         <div className='container w-[100%] flex justify-around'> 
        <div> 

         <div className='w-[4rem] bg-gray-800 rounded-2xl flex justify-center  py-5'> 
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
         
         <div className='grid grid-cols-2 col-span-1 mt-8 gap-y-1 '> 
         {ProductImage}
         </div> 
         
         <div className=''> 
         <Footer page="home"/>
         </div>
        
         </div>
    )
}

export default Home