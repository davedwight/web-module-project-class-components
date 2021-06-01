// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    handleClick = () => {
        this.props.clearCompleted();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Clear completed tasks</button>
                {this.props.tasks.map(item => (
                    <Todo key={item.id} task={item} toggleTask={this.props.toggleTask} />
                ))}
            </div>
        );
    }
}

export default TodoList;