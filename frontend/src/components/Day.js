import React, { useEffect } from "react";
import "../Day.css";
import Task from "./Task";
import getTasks from "../redux/actions/getDays";
import { useSelector, useDispatch } from "react-redux";
import addTask from "../redux/actions/addTask";

const Day = ({ day }) => {
  const d = day.date.split("-");
  const date = d[1] + "-" + d[2] + "-" + d[0];
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [reminder, setReminder] = React.useState("");

  const openModal = () => {
    setOpen(!open);
  };

  const allTasks = useSelector((state) => {
    return state.tasksReducer.tasks;
  });
  console.log(allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const add = (e) => {
    dispatch(addTask(e, description, reminder, day));
  };

  const handleInput = (e) => {
    setDescription(e.target.value);
  };

  const handleReminder = (e) => {
    setReminder(e.target.value);
  };
  const tasks = allTasks.filter((t) => t.day_id == day.id);
  return (
    <div className="box">
      <h1>To Do on {date}</h1>
      {tasks.map((t) => (
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
