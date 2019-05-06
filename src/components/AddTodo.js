import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({
       // title: e.target.value
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''}); // clearing the input field
    }

    render() {
        return ( 
         <form className="form" onSubmit={this.onSubmit}>
             <input type="text" name="title" placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange} />
             <button type="submit"> &gt; </button>
         </form>
        );
    }
}

export default AddTodo;