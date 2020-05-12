import React, {Component} from 'react';
//import Aux from '../../../hoc/Aux';
//import withClass from '../../../hoc/withClass';
import classes from   './person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);

        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
console.log(this.context.authenticated);
    }
    render(){
    console.log('[person.js] rendering...');
    return(
        <div className= {classes.Person}>

{this.context.authenticated ? <p>Authenticated</p> : <p>please login </p>}

            

            <p onClick={this.props.click} >
                UserName:{this.props.name} age:{this.props.age} </p>
            <input type='text' ref={this.inputElementRef} onChange={this.props.changed} value={this.props.currentname} />
            <p>password</p>
        
            </div>
    );
}
}
export default Person;
//export default withClass(Person, classes.Person);