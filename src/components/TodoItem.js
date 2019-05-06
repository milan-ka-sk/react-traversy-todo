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
    return (
      <div style={this.getStyle()}>
        {this.props.todo.title}
      </div>
    )
  }
}

// prop types ... good practice]
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
