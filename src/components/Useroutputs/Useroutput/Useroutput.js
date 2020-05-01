import React from 'react';
import  './Useroutput.css';
const UserOutput = (props) => {
    return(
        <div className='Useroutput'>
            <p>UserName:{props.username}</p>
            <p>password</p>
        </div>
    );
}
export default UserOutput;