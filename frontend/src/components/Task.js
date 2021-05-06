import React from "react";
import "../Task.css";
const Task = ({ task, deleteTask, deleted }) => {
  //   return <h1>{task.description}</h1>;

  return deleted ? null : (
    <div className="wrapper">
      <div className="box1">
        {task.description}
        <button onClick={deleteTask} className="btn">
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
