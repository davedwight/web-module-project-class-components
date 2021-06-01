import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="task" type="text" placeholder="Enter new task..." value={this.state.input} />
                <button>Enter</button>
            </form>
        );
    }
}

export default TodoForm;