import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return ( 
         <form className="form">
             <input type="text" name="title" placeholder="Add Todo ..."/>
             <button type="submit"> &gt; </button>
         </form>
        );
    }
}

export default AddTodo;