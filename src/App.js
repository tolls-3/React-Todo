import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';


const initialToDoData = [
  {
    name: "Study JavaScript",
    id: 123,
    done: false
  },
  {
    name: "Exercise",
    id: 1,
    done: false
  },
  {
    name: "Buy Groceries",
    id: 2,
    done: false
  },
  {
    name: "Repair car",
    id: 3,
    done: false
  },
  {
    name: "Prepare invoice",
    id: 4,
    done: false
  },
  {
    name: "Do laundry",
    id: 5,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      initialToDoData
    };

  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <ToDoList toDo={this.state.initialToDoData}/>
        </div>
      </div>
    );
  }
}

export default App;
