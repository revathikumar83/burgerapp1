import React from 'react';

const Person = (props) => {
    return(
        <div style={style}>
            
            <p onClick={props.click} >
                UserName:{props.name} age:{props.age} </p>
            <input type='text' onChange={props.changed} value={props.currentname} />
            <p>password</p>
        
        </div>
    );
}

const style = {
    border: '2px solid' ,
    margin:'20px',
padding:'20px',

}
export default Person;