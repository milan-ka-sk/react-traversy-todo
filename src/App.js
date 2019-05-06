import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

    state = {
      todos: [
        {
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

    render() {
        return ( 
          <div className = "App" >
              <Todos todos={this.state.todos} /> 
          </div>
        );
    }
}

export default App;