
import React from 'react'
import '../../src/style.css'

type forNotificationProps = {
    content: string
}
const NotificationSetting = ({content}:forNotificationProps)=> {
return (
    <div className='container w-100 shadow-md rounded-md flex bg-white py-4 px-4 my-4 justify-between'>
        <div className='font-semibold'> 
            {content}
            </div>
            <div className='switch2'> 
            <input id = 'toggle' type='checkbox' className='inp' />
            <label htmlFor='toggle'className='switch'> </label>

            </div>

    </div>
  );
};
export default NotificationSetting;
