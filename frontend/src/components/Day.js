import React from "react";
import "../Day.css";
import Task from "./Task";
import { API_URL } from "../apiConstants";


const Day = ({ day }) => {
  const date = day.date.split("-").reverse().join("-");
// const [allTasks, setAllTasks] = React.useState([])
  const [newTask, setNewTask] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const openModal = () => {
        setOpen(true)
    }
//   const setAllTasks
 const addTask = (e) => {
     setNewTask(e.target.value);
    fetch(API_URL + '/tasks')
    .then(r=> r.json())
    .then(task => )
 }


  return (
    <div className="box">
      <h1>To Do on {date}</h1>
      {day.tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
      <button onClick={openModal} className="add-btn">
        {" "}
        <strong>Add Task</strong>
      
      </button>
      {open ? <div className="modal">
      <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
      </div>
      : null}
    </div>
  );
};

export default Day;
