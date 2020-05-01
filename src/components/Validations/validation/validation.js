import React from 'react';

const Validation = (props) => {

    let paragraph = 'Text too Long!'

        if(props.inputLength <= 5){
            paragraph = 'Text too Short'
        }

return(
    <div>
        <p>{ paragraph}</p>
        

    </div>
);

}

export default Validation;