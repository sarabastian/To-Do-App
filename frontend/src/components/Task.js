import React from "react";
import "../Task.css";
import deleteTask from "../redux/actions/deleteTask";
import { useDispatch } from "react-redux";

const Task = ({ task, deleted }) => {
  const dispatch = useDispatch();

  const deleteT = () => {
    dispatch(deleteTask(task.id));
  };
  console.log(task.id);
  return deleted ? null : (
    <div className="wrapper">
      <div className="box1">
        {task.description}
        <button onClick={deleteT} className="btn">
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
