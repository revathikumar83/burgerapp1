import React, { Component } from 'react';
import Person from './Person/person';

class Persons extends Component {

static getDrivedStateFromProps(state, props){
    console.log('[Persons.js] getDrivedStateFromProps...')
    return state;
}

/*shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons || nextProps.clicked!== this.props.clicked || nextProps.changed !== this.props.changed){
        return true;
    }
    else{
        return false;
    }
    //return true;

}*/

getSnapshotBeforeUpdate(prevProps,PrevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate'); 
    return {message:'snapshot'};
}

componentDidUpdate(prevProps,PrevState,snapshot){
    console.log('[Persons.js] ComponentDidUpdate'); 
    console.log('snapshot'); 
}

componentWillUnmount(){
    console.log('[Persons.js] componentwillunmount');
}

    render(){
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) =>{
       
    return <Person name={person.name} age={person.age} key={person.id} clicked ={()=>this.props.clicked(index) } changed={(event)=>this.props.changed(event, person.id)} 
                    />
});
}
}
export default Persons;