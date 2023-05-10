import React from 'react'
import '../../src/style.css'
const NotificationSetting = ()=> {

return (
    <div className='container w-100 shadow-md rounded-md flex bg-white py-4 px-4 my-4 justify-between'>
        <div> 
            Sales
            </div>
            <div className='switch2'> 
            <input id = 'toggle' type='checkbox' className='inp' />
            <label htmlFor='toggle'className='switch'> </label>
            </div>
    </div>
)
}
export default NotificationSetting