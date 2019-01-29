import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';


class App extends Component {
  render() {
    const persons = [
      {
        'name': 'Foysal',
        'age' : '33',
        'job': 'Engineer',
        'number' : '0152010019'
      },
      {
        'name': 'Emon',
        'age' : '13',
        'job': 'Student',
        'number' : '109231'
      },
      {
        'name': 'Faria',
        'age' : '23',
        'job': 'Mother',
        'number' : '01612361993'
      }

    ];

    let state = {
      characters :[
        {
          'name' : 'Charlie'
        }
       
      ]
    };

    let removeCharacter = index => {
      const {characters} = this.state;

      this.setState({
        characters: characters.filter((characters,i)=> {
          return i !== index;
        })
      });
    }


    return (
      <div className ="container">
       <Table 
          personProps = {persons}
          removeCharacter = {this.removeCharacter}
       />
       <Form/>
      </div>


    );
  }
}

export default App;
