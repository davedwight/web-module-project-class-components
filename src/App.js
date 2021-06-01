import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    const newTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: newTasks
    })
  }

  toggleTask = (id) => {
    
    console.log('id:', id);
    
    const newTasks = this.state.tasks.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
       } else {
        return (item)
        }
      });
    
    this.setState({
      tasks: newTasks
    })
  };

  clearCompleted = () => {
    
    const newTasks = this.state.tasks.filter(item => {
      return(item.completed === false);
    });
    
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
