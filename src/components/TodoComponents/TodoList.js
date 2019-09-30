// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  //console.log(props);
  return (
    <div>
      {props.toDo.map(item => (
        <ToDo key={item.id} item={item} markToDo={props.markToDo} />
      ))}
      <button onClick={props.clearTask}>Clear Task</button>
    </div>
  );
};

export default ToDoList;
