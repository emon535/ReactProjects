import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      value : '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value
    });
    event.preventDefault();
  }

  handleClick = (event) =>{
    const value = {
      id: 1+ Math.random(),
      value : this.state.value.slice()
    };
    //alert(this.state.value+' Value');
    const list = [...this.state.list];
    list.push(value);
    this.setState({
      list,
      newItem: ""
    });
    event.preventDefault();
  }

  deleteItem =(id) =>{
    // const list = [...this.state.list];
    // const updatedList = list.filter(item=>item.id !== id);
    // console.log("Deleted");
    // this.setState({list: updatedList});
  }
  
  render() {
  return (
      <div className="App">
        <header className="App-header">
          <h2>Todo App</h2>
        </header>
        <body>
          <h3>Add new item </h3>
          <form className = "inputForm">
            <label> 
              <input 
                type = "text" 
                name="todo" 
                onChange={this.handleChange}
              />
              <input 
                className="btn"
                type = "button"
                value = "Add"
                onClick = {this.handleClick}
              />
            </label>
           
          </form>
          <div>
            <h1>List of Todo: </h1>
            <ul>
              {this.state.list.map(item=>{
                return (
                  <li key={item.id} >
                    {item.value}
                    <button onClick={this.deleteItem(item.id)}>
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
