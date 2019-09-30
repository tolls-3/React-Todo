import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state={
        taskName: ""
    };
  }

  changeHandler = e =>{
      this.setState({
          taskName: e.target.value
      })
      console.log(this.state.taskName)
  }



  render() {
    return (
      <div>
        <input
        type="text"
        name="task"
        value={this.state.taskName}
        onChange={this.changeHandler}
        />
        <button>Add Task</button>
      </div>
    );
  }
}

export default ToDoForm;
