import React from 'react';

const UserInput = (props) => {
    return(
        <div>
            
            <input style={style} type='text' onChange={props.changed} value={props.currentname}/>
            
        </div>
    );
}

const style = {
    border: '2px solid' 
}
export default UserInput;