import React, { Component } from 'react';
import Person from './Person/person';
import UserInput from './Userinput/Userinput';
import UserOutput from './Useroutput/Useroutput';
import Validation from './validation/validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
constructor(props){
super(props)
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
    userInput: ''
      }

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

    this.setState({
username: event.target.value,
persons: persons
  
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
  let persons =null;

  if (this.state.showPerson) {
      
    persons = (
    
      <div>
        {this.state.persons.map((person, index) =>{
          return <Person name={person.name} age={person.age} key={person.id} click = { () => this.deletehandle(index) }  />
        })}
      </div>
    
    );
         
      }


      const charList = this.state.userInput.split('').map((ch, index) =>{
        return <Char character = {ch} key={index} box={this.deleteChar}/>
      })

      
  return (
    <div className="App">
      <h1>Burger App</h1>
      

      <button onClick={this.togglehandle} className='showbox'>showdata</button>
      {persons}

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
  );
}
}

export default App;
