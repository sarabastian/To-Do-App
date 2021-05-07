import React, { useEffect } from "react";
import "../Day.css";
import Task from "./Task";
import { API_URL } from "../apiConstants";
import getTasks from "../redux/actions/getTasks";
import { useSelector, useDispatch } from "react-redux";
import addTask from "../redux/actions/addTask";

const Day = ({ day }) => {
  const date = day.date.split("-").reverse().join("-");
  const [open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(!open);
  };

  const allTasks = useSelector((state) => {
    return state.tasksReducer.tasks;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const [description, setDescription] = React.useState("");
  const [reminder, setReminder] = React.useState("");

  const add = (e) => {
    dispatch(addTask(e, description, reminder, day));
  };

  // const deleteTask = (id) => {
  //  ;
  // };
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
        <Task key={t.id} task={t} />
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

            <form onSubmit={add}>
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
