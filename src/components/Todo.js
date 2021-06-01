import React from 'react';
import './Todo.css';

class Todo extends React.Component {    

    handleClick = (e) => {
        console.log('Clicked on: ', this.props.task.task);
        this.props.toggleTask(this.props.task.id);
    }

    render() {
        return(
            <div className={`task${this.props.task.completed ? ' completed' : ''}`} onClick={this.handleClick}>
                <p>{this.props.task.task}</p>
            </div>
        );
    }
}

export default Todo;