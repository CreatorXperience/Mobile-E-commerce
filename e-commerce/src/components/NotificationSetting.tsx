import React from 'react'
import '../../src/style.css'
type forprops = {
    content: string
}
const NotificationSetting = ({content}:forprops)=> {

return (
    <div className='container w-100 shadow-md rounded-md flex bg-white py-4 px-4 my-4 justify-between'>
        <div className='font-semibold mt-1'> 
          {content}
            </div>
            <div className='switch2'> 
            <input id = 'toggle' type='checkbox' className='inp' />
            <label htmlFor='toggle'className='switch'> </label>
            </div>
    </div>
)
}
export default NotificationSetting