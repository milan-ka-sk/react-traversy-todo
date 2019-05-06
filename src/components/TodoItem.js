import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#eee',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const {id, title} = this.props.todo;

        return (
        <div style={this.getStyle()}>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
            {/* <input type="checkbox" onChange={() => {this.props.markComplete(id)}} /> */}
            {title}
        </div>
        )
    }
}

// prop types ... good practice]
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
