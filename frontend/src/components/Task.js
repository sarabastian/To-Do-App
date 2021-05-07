import React from "react";
import "../Task.css";
const Task = ({ task }) => {
  //   return <h1>{task.description}</h1>;

  return (
    <div className="wrapper">
      <div className="box1">
        {task.description}
        <button className="btn">
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
