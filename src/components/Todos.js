import React, { Component } from 'react';

class Todos extends Component {

    render() {
        console.log(this.props.todos);
        return (
            <div>Todos</div>
        )
    }
}

export default Todos;