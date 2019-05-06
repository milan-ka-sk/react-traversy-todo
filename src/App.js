import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends Component {

    state = {
        todos: [{
                id: 1,
                title: 'title 1',
                completed: false
            },
            {
                id: 2,
                title: 'title 2',
                completed: false
            },
            {
                id: 3,
                title: 'title 3',
                completed: false
            },
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    deleteTodo = (id) => {
        this.setState({
            // todos: this.state.todos.filter((todo) => {
            //  if(todo.id !== id) { 
            //   return todo; 
            //  }
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    }

    addTodo = (title) => {
      const newTodo = {
        id: Date.now(), // workaround
        title: title,
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }

    render() {
        return ( 
        <div className = "App" >
            <Header / >
            <AddTodo addTodo={this.addTodo} />
            <Todos todos = { this.state.todos }
            markComplete = { this.markComplete }
            deleteTodo = { this.deleteTodo }
            />  
        </div>
        );
    }
}

export default App;