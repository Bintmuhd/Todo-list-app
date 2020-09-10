import React, { Component } from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';


class Todo extends Component {

    

    render() {
    
        return this.props.todo.map((todos) => (
        <Todoitems key={todos.id} todos={todos} check={this.props.check} delTodo={this.props.delTodo} />
        ));
            
        

        
    }
}

Todo.propTypes = {
    todo: PropTypes.array.isRequired
}

export default Todo;