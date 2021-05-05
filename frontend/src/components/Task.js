import React from "react";
import "../Task.css";
const Task = ({ task }) => {
  //   return <h1>{task.description}</h1>;
  console.log(task.users);
  return (
    <div className="wrapper">
      <div className="box1">{task.description}</div>
    </div>
  );
};

export default Task;
