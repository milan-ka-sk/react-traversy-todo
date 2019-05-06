import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.todo.title}
      </div>
    )
  }
}

// prop types ... good practice]
TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
