import React from 'react';
import './App.css';
import Todos from './Components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Jantar com a esposa',
        completed: false
      },
      {
        id: 3,
        title: 'Reunião com o chefe',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
    console.log(id)
  }

  render() {
    return (
      <div className="App" >
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
