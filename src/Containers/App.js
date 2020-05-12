import React, { Component } from 'react';
//import Person from '../components/Persons/Person/person';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/Userinputs/Userinput/Userinput';
import UserOutput from '../components/Useroutputs/Useroutput/Useroutput';
import Validation from '../components/Validations/validation/validation';
import Char from '../components/Char/Char';
//import withClass from '../hoc/withClass';
//import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
//import classes from './App.css';
import './App.css';


class App extends Component {
constructor(props){
super(props)
console.log('[App.js constructor]')
this.state = {
  persons: [
    {id:1, name: 'res', age:27},
    { id:2, name: 'shiva', age: 34},
    { id:3, name: 'moon', age: 4},
    { id:4, name: 'sun', age: 24}
  ],
  showPerson: false,
  username: 'shiva',
showName: false,
showCockpit: true,
changeCounter: 0,
authenticated:false,
userInput: ''
}

    }

   

static getDerivedStateFromProps(props,state){
  console.log('[App.js] getderivedstatefromprops', props);
  return state;
}
//componentWillMount(){
  //console.log('[App.js] componentwillmount');
//}
componentDidMount(){
  console.log('[App.js]componentdidmount');
}
shouldComponentUpdate(){
  console.log('[App.js]shouldcomponentupdate');
  return true;
}
componentDidUpdate(){
  console.log('[App.js]componentdidupdate');
}

    inputChangedHandler = (event) =>{
      this.setState({userInput:event.target.value})
    }

  nameChangedHandler = (event, id) =>{
const personIndex = this.state.persons.findIndex(p =>{
  return p.id === id;
});
const person = {
  ...this.state.persons[personIndex]
}

person.name = event.target.value;

const persons = [...this.state.persons];

 persons[personIndex] = person;

    this.setState((prevState, props) => {
      return{
//username: event.target.value,
persons: persons,
changeCounter: prevState.changeCounter + 1,
  }

})
  }

  togglehandle = ()=>{
     
    const doesShow = this.state.showPerson;

    this.setState({
showPerson: !doesShow
    });

  }

  toggle = ()=>{
     
    const doesShow = this.state.showName;

    this.setState({
showName: !doesShow
    });

  }
  loginHandler = () =>{
    this.setState({
      authenticated:true
    });
  }

  deletehandle =(personIndex) => {

const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons:persons});

  }

  
  deleteChar = (index) => {
    const  letter= [...this.state.userInput.split('')];
    letter.splice(index, 1);
    const text = letter.join('');
    this.setState({userInput:text});
    
  }

 
   

render(){
  console.log('[App.js]render')
  let persons =null;

  if (this.state.showPerson) {
      
    persons =  <Person
    persons={this.state.persons}
    clicked={this.deletehandle}
    changed={this.nameChangedHandler} 
    isAuthenticated={this.state.authenticated}/>

  }


      const charList = this.state.userInput.split('').map((ch, index) =>{
        return <Char character = {ch} key={index} box={this.deleteChar}/>
      })

      
  return (
    //<Aux>
    <div className='App'>

     <button onClick= {()=>{this.setState({showCockpit:false})}}>remove cockpit</button>
<AuthContext.Provider 
   value={{
  authenticated: this.state.authenticated, 
  login: this.loginHandler
   }}>
     { this.state.showCockpit ? (
     <Cockpit title={this.props.appTitle}  showperson={this.state.showPerson} persons={this.state.persons} handled={this.togglehandle}/>
     ) : null }

      {persons}

</AuthContext.Provider >

      <button onClick={this.toggle} className='showbox'>showbox</button>

      { this.state.showName === true ? 
     <div>
    <UserInput 
    changed={this.nameChangedHandler} currentname={this.state.username}/>
    <UserOutput  username={this.state.username}/>
   <UserOutput  username={this.state.username}/>
   <UserOutput  username={this.state.username}/>
   </div>
    : null }



<div className='character'>

  <input className='input' type='text' onChange={this.inputChangedHandler} value={this.state.userInput}/>

  <p>{this.state.userInput}</p>

  <Validation inputLength={this.state.userInput.length}/>

  {charList}

</div>
</div>
//</Aux>
  );
}
}

export default App;

//export default withClass(App, classes.App);
