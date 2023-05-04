import React,{useState, useRef,useEffect} from 'react'
import Svg from './icons/Svg'

type forProfileCard = {
   resources: {Name: string, content: string}
}
const ProfileCard = ({resources}:forProfileCard)=> {
    const [flipValue, setflipValue ] = useState(false)
    const [initialState, setInitialState] =  useState(resources["Name"])
    const  Myref = useRef<HTMLInputElement>(null)  
    useEffect(()=>{
    if(Myref.current){
    Myref.current.value = initialState
            }
const EvListener = (event:MouseEvent)=> {
        if(Myref.current  && Myref.current.contains(event.target as Node)){
            Myref.current.disabled = !flipValue
            Myref.current.value = initialState
        }   
                }
document.body.addEventListener("click", EvListener )
            
       return ()=> {
    document.body.removeEventListener('click', EvListener)
        setflipValue(false)
        console.log(initialState)
}
     
    },[initialState, flipValue])
   
   
// TODO Want to create a event bubbling
    const handleIconClick = (event: React.MouseEvent<HTMLSpanElement>)=> {
        if(initialState !== ''){
            if(Myref.current && flipValue === false){
            Myref.current.disabled = flipValue
            Myref.current.focus()
            }
    else {return }
        }
       
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInitialState(event.target.value)
    }
   
    return ( 
        <div className='w-90 bg-white shadow-md my-4 mx-4 rounded-md'>

            <div className='flex w-100 justify-between px-8 py-4'> 
        <input ref={Myref} type="text" className='font-semibold text-xl input-bordered  rounded-md bg-white'  onChange= {(e)=>  handleNameChange(e)}/> 
            <span onClick={(e)=> handleIconClick(e) }>{Svg.edit()}</span>

            </div> 
            {initialState === '' ? <span className='p-4 text-red-600 font-semibold'> Please input your name </span>: ''}
            <div className='container w-100 h-px bg-slate-300'> 

                </div>
            <p className='px-4 py-4 my-4  text-gray-500'> {resources.content} </p>
        </div>
    )
}

export default ProfileCard