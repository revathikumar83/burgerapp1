import React, {useEffect,useRef,useContext} from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleButtonRef = useRef(null);

    const authContext= useContext(AuthContext);
    console.log(authContext.authenticated);

    useEffect(() => {

console.log('[cockpit.js] useEffect');
//http request

toggleButtonRef.current.click();

//const timer = setTimeout(()=>{
//alert('data set to cloud');

//},1000);

return ()=>{
    clearTimeout( );
    console.log('[cockpit.js] cleanup work in useEffect');
};
    },[]);

    useEffect(() => {
        console.log('[cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] cleanup work in 2nd useEffect');
        };
    })

    return(
        <div>

       <h1>{props.title}</h1>
      

      <button ref={toggleButtonRef} onClick={props.handled} className='showbox'>showdata</button>

      
          <button className='showbox' onClick={authContext.login}>login</button>
     


      
        </div>
    );
};

export default React.memo(Cockpit);