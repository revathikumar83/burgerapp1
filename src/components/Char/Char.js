import React from 'react';

const Char = (props) => {

return(
    <div style={style} onClick={props.box}>
       
{props.character}
    </div>
);

}

const style={
    display:'inline-block',
    padding:'16px',
    margin:'16px',
    border:'1px solid black',
    textAlign:'center'
}

export default Char;