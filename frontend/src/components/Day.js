import React from "react";
import "../Day.css";
import Task from "./Task";

const Day = ({ day }) => {
  const date = day.date.split("-").reverse().join("-");
  return (
    <div className="box">
      <h1>To Do on {date}</h1>
      {day.tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
      <button className="add-btn"> Add Task</button>
    </div>
  );
};

export default Day;
