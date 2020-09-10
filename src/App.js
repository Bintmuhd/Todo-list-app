import React, { Component } from 'react';
import Header from './components/layouts/Header';
import nextId from "react-id-generator";
import AddTodo from './components/AddTodo';
import ToDo from './components/ToDo';
import './App.css';



class App extends Component {

  state = {
    todo: [
      /*{
      id: nextId(),
      title: 'Read books',
      completed: false,
      },

      {
        id: nextId(),
        title: 'Eat Food',
        completed: false,
        },

      {
        id: nextId(),
        title: 'Dance',
        completed: false,
      }*/
    ]
  }
      /* Checkbox Button */

  check = (id) => {
    this.setState({ todo: this.state.todo.map(todos =>{
      if(todos.id === id) {
        todos.completed = !todos.completed
      }
      return todos;
    })});
  }
        /* Delete Button */

  delTodo = (id) => {
    this.setState({ todo: [...this.state.todo.filter(todos => todos.id !== id)]});
  }

        /* Add New Button */

  addTodo = (title) => {
      const newTodo = {
        id: nextId(),
        title,
        completed: false
      }
     this.setState({ todo: [...this.state.todo, newTodo] });
  }

  render () {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <ToDo todo={this.state.todo} check={this.check} delTodo={this.delTodo}/>     
      </div>
    </div>
  );
}
}

export default App;
