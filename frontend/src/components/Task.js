import React from "react";
import styles from "../Task.module.css";
import deleteTask from "../redux/actions/deleteTask";
import { useDispatch } from "react-redux";

const Task = ({ task, deleted }) => {
  const dispatch = useDispatch();

  const deleteT = () => {
    dispatch(deleteTask(task.id));
  };

  console.log(task);
  return deleted ? null : (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        {task.description}
        <button onClick={deleteT} className={styles.btn}>
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
