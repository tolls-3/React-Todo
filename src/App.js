import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from './components/TodoComponents/TodoForm';


const initialToDoData = [
  {
    name: "Study JavaScript",
    id: 1,
    done: false
  },
  {
    name: "Exercise",
    id: 12,
    done: false
  },
  {
    name: "Buy Groceries",
    id: 123,
    done: false
  },
  {
    name: "Fix car",
    id: 1234,
    done: false
  },
  {
    name: "Prepare revised invoice",
    id: 12345,
    done: false
  },
  {
    name: "Do laundry",
    id: 123456,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      initialToDoData
    };
  }

  markToDo = id => {
    console.log("Test:", id);
    this.setState({
      initialToDoData: this.state.initialToDoData.map(item => {
        if (item.id !== id){
          return item;
        } else{
          return {...item, done: !item.done}
        }
      })
    })

  };

  clearTask = e => {
    e.preventDefault();
    this.setState({
      initialToDoData: this.state.initialToDoData.filter(
        item => {
          return !item.done
        }
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm/>
        <div>
          <ToDoList
            toDo={this.state.initialToDoData}
            markToDo={this.markToDo}
            clearTask={this.clearTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
