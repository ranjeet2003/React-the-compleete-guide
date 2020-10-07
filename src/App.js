import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
<<<<<<< HEAD
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
=======
    person: [
      { name: 'Ranjeet', age: 20 },
      { name: 'Pushpendra', age: 23 },
      { name: 'Baba', age: 72 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Button is clicked and switchNameHandler is called !');
    // this.state.person[0].name = 'Ranjeet Gautam'  this wouldn't work if we want to update state.
    this.setState({
      person: [
        { name: newName, age: 20 },
        { name: 'Pushpendra', age: 23 },
        { name: 'Baba', age: 72 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'Ranjeet', age: 20 },
        { name: event.target.value, age: 23 },
        { name: 'Baba', age: 72 }
      ],
    })
>>>>>>> a4f8544
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
=======
        <h1>Hello I am Ranjeet Gautam</h1>
        <p>I am a student</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        { this.state.showPerson ?
          <div>
            <Person
              name={this.state.person[0].name}
              age={this.state.person[0].age}>
            </Person>
            <Person
              name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={this.switchNameHandler.bind(this, 'Ranjeet Gautam')}
              changed={this.nameChangeHandler} >Pushpa is preparing for gate 2020
            </Person>
            <Person
              name={this.state.person[2].name}
              age={this.state.person[2].age}>
            </Person>
          </div> :null
         }
>>>>>>> a4f8544
      </div>
    );
  }
}

export default App;
