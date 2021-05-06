import React, { useEffect } from "react";
import "../Day.css";
import Task from "./Task";
import { API_URL } from "../apiConstants";

const Day = ({ day }) => {
  // var dt = new Date();

  // const today = dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear();

  const date = day.date.split("-").reverse().join("-");
  const [allTasks, setAllTasks] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch(API_URL + "/tasks")
      .then((r) => r.json())
      .then((tasks) => setAllTasks(tasks));
  }, []);
  console.log(allTasks);
  const [description, setDescription] = React.useState("");
  const [reminder, setReminder] = React.useState("");

  const addTask = (e) => {
    e.preventDefault();

    fetch(API_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        description: description,
        reminder: reminder,
        day_id: day.id,
        user_id: day.tasks[0].user_id,
      }),
    })
      .then((r) => r.json())
      .then((task) => setAllTasks([...allTasks, task]));
  };

  const deleteTask = (id) => {
    fetch(API_URL + `/tasks/${id}`, {
      method: "DELETE",
    });
    setAllTasks(allTasks.filter((t) => t.id !== id));
  };

  const handleInput = (e) => {
    setDescription(e.target.value);
  };

  const handleReminder = (e) => {
    setReminder(e.target.value);
  };

  return (
    <div className="box">
      <h1>To Do on {date}</h1>
      {allTasks.map((t) => (
        <Task key={t.id} task={t} deleteTask={() => deleteTask(t.id)} />
      ))}
      <button onClick={openModal} className="add-btn">
        {" "}
        <strong>Add Task</strong>
      </button>
      {open ? (
        <div className="modal">
          <div className="modal-content">
            <button onClick={openModal} className="close">
              &times;
            </button>

            <form onSubmit={addTask}>
              <label for="description"></label>
              {/* <br></br> <br></br> */}
              <input
                onChange={handleInput}
                type="text"
                id="description"
                defaultValue=""
                placeholder="Enter Your Task:"
              ></input>
              <br></br> <br></br>
              <label for="start">Set a Reminder:</label>
              <br></br>
              <br></br>
              <input
                onChange={handleReminder}
                type="date"
                id="start"
                defaultValue=""
                // min={today}
                // max="2025-01-01"
              ></input>
              <br></br>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Day;
