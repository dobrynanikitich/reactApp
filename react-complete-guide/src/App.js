import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'fgdkl1', name: 'Mikita', age: 28 },
      { id: 'fdsf2', name: 'Tanya', age: 30 },
      { id: 'fdsf3', name: 'Jan', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePesronsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }  

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
      console.log(classes);
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
      console.log(classes);
    }

    return (
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <p className  = {classes.join(' ')}>It's realy working!</p>
          <button 
            style = {style}
            onClick = {this.tooglePesronsHandler}>Toogle persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now???'));
  }
}

export default App;
















































// import React, { Component } from 'react';
// import '../src/App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


// class App extends Component {
//   state = {
//     username: 'superTanuha'
//   }

//   inputChangedHandler = (event) => {
//      this.setState({username: event.target.value});
//   }

//   render () {
//     return (
//     <div className = 'App'>
//       <UserInput changed={this.inputChangedHandler} currentName = {this.state.username}/>
//       <UserOutput userName = 'Mikita'/>
//       <UserOutput userName = {this.state.username}/>
//       <UserOutput userName = 'Jan Andreevich Vanetski'/>
//     </div>
//     );
//   };
// }

// export default App;